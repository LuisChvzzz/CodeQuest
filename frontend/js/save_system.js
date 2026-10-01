// js/save_system.js
// Sistema de Guardado y Carga de Progreso de Partidas en Code Quest (Aislado por Usuario)

class SaveSystem {
  constructor() {
    this.savePrefix = 'code_quest_save_';
    // IDs de cofres que contienen llaves en el mapa oficial de Code Quest
    this.keyChestIds = new Set([1, 4, 5, 6, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 47, 48]);
    this.migrateLegacySaves();
  }

  // Ajustar partida guardada para eliminar las 20 llaves de prueba iniciales
  // dejando únicamente las llaves legítimamente obtenidas de cofres (descontando jefes retados)
  sanitizeSaveData(saveData) {
    if (!saveData || typeof saveData !== 'object') return saveData;

    if (!saveData.v2_keys_migrated) {
      // 1. Contar llaves obtenidas de cofres de llaves abiertos
      const openedKeyChests = Array.isArray(saveData.chests)
        ? saveData.chests.filter(c => c && c.opened && this.keyChestIds.has(c.id)).length
        : 0;

      // 2. Cantidad de jefes derrotados (cada combate consumió al menos 1 llave)
      const defeatedBossesCount = Array.isArray(saveData.defeatedBosses)
        ? saveData.defeatedBosses.length
        : 0;

      // Llaves legítimas acumuladas: cofres abiertos menos jefes vencidos
      const netLegitimateKeys = Math.max(0, openedKeyChests - defeatedBossesCount);

      // Llaves calculadas restando las 20 llaves de prueba que se otorgaron inicialmente
      const currentKeys = Number(saveData.keys !== undefined ? saveData.keys : 0);
      const subtractedKeys = Math.max(0, currentKeys - 20);

      // Garantizar que no conserve las 20 llaves de prueba, pero conserve todas las que halló en cofres
      const finalKeys = Math.max(subtractedKeys, netLegitimateKeys);

      saveData.keys = finalKeys;
      if (saveData.player && typeof saveData.player === 'object') {
        saveData.player.keys = finalKeys;
      }
      saveData.v2_keys_migrated = true;
    }

    return saveData;
  }

  // Migrar automáticamente todas las partidas guardadas almacenadas en localStorage
  migrateLegacySaves() {
    try {
      if (typeof localStorage === 'undefined') return;
      const keysToUpdate = [];
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k && k.startsWith(this.savePrefix)) {
          keysToUpdate.push(k);
        }
      }

      for (const storageKey of keysToUpdate) {
        const raw = localStorage.getItem(storageKey);
        if (!raw) continue;
        let data;
        try {
          data = JSON.parse(raw);
        } catch (e) {
          continue;
        }

        if (data && typeof data === 'object' && !data.v2_keys_migrated) {
          this.sanitizeSaveData(data);
          localStorage.setItem(storageKey, JSON.stringify(data));
        }
      }
    } catch (err) {
      console.warn('Aviso en migración de llaves heredadas de partidas:', err);
    }
  }

  normalizeKey(str) {
    return String(str || '').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '_');
  }

  // Obtiene el identificador único del usuario
  getUserKey(user) {
    if (!user) return null;
    const identifier = user.id || user.firebaseUid || (user.provider ? `${user.provider}_${user.email}` : user.email);
    return identifier ? this.normalizeKey(identifier) : null;
  }

  // Guardar partida actual vinculada al usuario
  saveGame(arg1, arg2, user = null) {
    if (!arg1) return null;

    let heroName = '';
    let p = {};
    let chests = [];

    if (typeof arg1 === 'string') {
      heroName = arg1;
      p = arg2 || {};
      chests = p.chests || [];
    } else {
      heroName = arg1.name || arg1.heroName;
      p = arg1;
      if (arg2 && arg2.chests) {
        chests = (typeof arg2.getChestsState === 'function') ? arg2.getChestsState() : arg2.chests;
      } else if (p.chests) {
        chests = p.chests;
      }
    }

    if (!heroName) return null;

    // Obtener usuario activo si no se especificó
    const activeUser = user || (typeof authManager !== 'undefined' ? authManager.getCurrentUser() : null);

    // No persistir partidas de prueba administrativa sobre usuarios reales
    if (activeUser && (activeUser.isAdmin || activeUser.email === 'admin@gmail.com' || heroName === 'Administrador')) {
      return null;
    }

    const userKey = this.getUserKey(activeUser);
    const normHeroName = this.normalizeKey(heroName);

    const savePayload = {
      name: heroName,
      heroName: heroName,
      userId: activeUser ? activeUser.id : (p.userId || null),
      userEmail: activeUser ? activeUser.email : (p.userEmail || null),
      userKey: userKey,
      timestamp: Date.now(),
      dateStr: new Date().toLocaleDateString('es-ES') + ' ' + new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
      x: p.x !== undefined ? p.x : 31 * 32,
      y: p.y !== undefined ? p.y : 32 * 32,
      direction: p.direction || 'down',
      hearts: p.hearts !== undefined ? p.hearts : 5,
      maxHearts: p.maxHearts !== undefined ? p.maxHearts : 5,
      attack: p.attack !== undefined ? p.attack : 25,
      potions: p.potions !== undefined ? p.potions : 2,
      keys: p.keys !== undefined ? p.keys : 0,
      v2_keys_migrated: true,
      medals: p.medals ? [...p.medals] : [],
      defeatedBosses: Array.from(p.defeatedBosses || []),
      totalScore: p.totalScore || 0,
      chests: chests || [],
      player: {
        name: heroName,
        x: p.x !== undefined ? p.x : 31 * 32,
        y: p.y !== undefined ? p.y : 32 * 32,
        direction: p.direction || 'down',
        hearts: p.hearts !== undefined ? p.hearts : 5,
        maxHearts: p.maxHearts !== undefined ? p.maxHearts : 5,
        attack: p.attack !== undefined ? p.attack : 25,
        potions: p.potions !== undefined ? p.potions : 2,
        keys: p.keys !== undefined ? p.keys : 0,
        medals: p.medals ? [...p.medals] : [],
        defeatedBosses: Array.from(p.defeatedBosses || []),
        totalScore: p.totalScore || 0
      }
    };

    const serialized = JSON.stringify(savePayload);

    if (userKey) {
      // 1. Guardar la partida más reciente DE ESTE USUARIO
      localStorage.setItem(`${this.savePrefix}u_${userKey}_latest`, serialized);
      // 2. Guardar por nombre de héroe para este usuario
      localStorage.setItem(`${this.savePrefix}u_${userKey}_hero_${normHeroName}`, serialized);
    } else {
      // Modo anónimo/invitado
      localStorage.setItem(`${this.savePrefix}anon_hero_${normHeroName}`, serialized);
      localStorage.setItem(`${this.savePrefix}anon_latest`, serialized);
    }

    return savePayload;
  }

  // Obtener la última partida guardada del usuario activo
  getLatestSaveForUser(user = null) {
    const activeUser = user || (typeof authManager !== 'undefined' ? authManager.getCurrentUser() : null);
    if (!activeUser) return null;

    const userKey = this.getUserKey(activeUser);
    if (!userKey) return null;

    try {
      const raw = localStorage.getItem(`${this.savePrefix}u_${userKey}_latest`);
      return raw ? this.sanitizeSaveData(JSON.parse(raw)) : null;
    } catch (e) {
      return null;
    }
  }

  // Obtener partida guardada buscando por héroe y perteneciente al usuario activo
  getSaveForUser(user, heroName) {
    if (!heroName) return null;

    const activeUser = user || (typeof authManager !== 'undefined' ? authManager.getCurrentUser() : null);
    const normHeroName = this.normalizeKey(heroName);

    if (activeUser) {
      const userKey = this.getUserKey(activeUser);
      if (!userKey) return null;

      try {
        // 1. Buscar si este usuario tiene una partida con este nombre de héroe
        const byHero = localStorage.getItem(`${this.savePrefix}u_${userKey}_hero_${normHeroName}`);
        if (byHero) return this.sanitizeSaveData(JSON.parse(byHero));

        // 2. Si su última partida guardada coincide con el nombre
        const latest = this.getLatestSaveForUser(activeUser);
        if (latest && this.normalizeKey(latest.name) === normHeroName) {
          return this.sanitizeSaveData(latest);
        }
      } catch (e) {
        return null;
      }

      return null;
    }

    // Modo anónimo sin usuario
    try {
      const raw = localStorage.getItem(`${this.savePrefix}anon_hero_${normHeroName}`);
      if (raw) return this.sanitizeSaveData(JSON.parse(raw));
      const latestAnon = localStorage.getItem(`${this.savePrefix}anon_latest`);
      if (latestAnon) {
        const parsed = JSON.parse(latestAnon);
        if (this.normalizeKey(parsed.name) === normHeroName) return this.sanitizeSaveData(parsed);
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  // Compatibilidad: getLatestSave() respeta al usuario conectado
  getLatestSave(user = null) {
    const activeUser = user || (typeof authManager !== 'undefined' ? authManager.getCurrentUser() : null);
    if (activeUser) {
      return this.getLatestSaveForUser(activeUser);
    }
    return null;
  }

  // Compatibilidad: getSave(nameOrUser)
  getSave(nameOrUser, user = null) {
    if (!nameOrUser) return null;
    if (typeof nameOrUser === 'object') {
      return this.getLatestSaveForUser(nameOrUser);
    }
    return this.getSaveForUser(user, nameOrUser);
  }

  // Comprobar si existe partida guardada para el usuario
  hasSave(nameOrUser, user = null) {
    return !!this.getSave(nameOrUser, user);
  }

  // Eliminar partida guardada
  deleteSave(nameOrUser, user = null) {
    const activeUser = user || (typeof authManager !== 'undefined' ? authManager.getCurrentUser() : null);
    const userKey = this.getUserKey(activeUser);
    if (!userKey) return;

    if (typeof nameOrUser === 'string') {
      const norm = this.normalizeKey(nameOrUser);
      localStorage.removeItem(`${this.savePrefix}u_${userKey}_hero_${norm}`);
    }
    localStorage.removeItem(`${this.savePrefix}u_${userKey}_latest`);
  }
}

// Instancia global
const saveSystem = new SaveSystem();
