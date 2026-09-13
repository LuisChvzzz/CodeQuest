// js/save_system.js
// Sistema de Guardado y Carga de Progreso de Partidas en Code Quest

class SaveSystem {
  constructor() {
    this.savePrefix = 'code_quest_save_';
  }

  normalizeKey(str) {
    return String(str || '').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '_');
  }

  // Guardar partida actual
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

    const normName = this.normalizeKey(heroName);
    const savePayload = {
      name: heroName,
      heroName: heroName,
      userId: user ? user.id : (p.userId || null),
      userEmail: user ? user.email : (p.userEmail || null),
      timestamp: Date.now(),
      dateStr: new Date().toLocaleDateString('es-ES') + ' ' + new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }),
      x: p.x !== undefined ? p.x : 31 * 32,
      y: p.y !== undefined ? p.y : 32 * 32,
      direction: p.direction || 'down',
      hearts: p.hearts !== undefined ? p.hearts : 5,
      maxHearts: p.maxHearts !== undefined ? p.maxHearts : 5,
      attack: p.attack !== undefined ? p.attack : 25,
      potions: p.potions !== undefined ? p.potions : 2,
      keys: p.keys !== undefined ? p.keys : 20,
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
        keys: p.keys !== undefined ? p.keys : 20,
        medals: p.medals ? [...p.medals] : [],
        defeatedBosses: Array.from(p.defeatedBosses || []),
        totalScore: p.totalScore || 0
      }
    };

    const serialized = JSON.stringify(savePayload);

    // Guardar por nombre de héroe normalizado
    localStorage.setItem(this.savePrefix + 'name_' + normName, serialized);

    // Si hay usuario autenticado, vincular también a su ID y correo
    if (user && user.id) {
      localStorage.setItem(this.savePrefix + 'user_' + user.id, serialized);
    }
    if (user && user.email) {
      localStorage.setItem(this.savePrefix + 'email_' + this.normalizeKey(user.email), serialized);
    }

    // Última partida guardada en este navegador
    localStorage.setItem('code_quest_last_save_v1', serialized);

    return savePayload;
  }

  // Obtener partida guardada buscando por usuario o nombre
  getSave(nameOrUser) {
    if (!nameOrUser) return null;

    // 1. Si es un objeto de usuario
    if (typeof nameOrUser === 'object') {
      if (nameOrUser.id) {
        const byId = localStorage.getItem(this.savePrefix + 'user_' + nameOrUser.id);
        if (byId) {
          try { return JSON.parse(byId); } catch (e) {}
        }
      }
      if (nameOrUser.email) {
        const byEmail = localStorage.getItem(this.savePrefix + 'email_' + this.normalizeKey(nameOrUser.email));
        if (byEmail) {
          try { return JSON.parse(byEmail); } catch (e) {}
        }
      }
      if (nameOrUser.heroName) {
        return this.getSave(nameOrUser.heroName);
      }
      return null;
    }

    // 2. Si es una cadena (nombre de héroe o email)
    const norm = this.normalizeKey(nameOrUser);
    const byName = localStorage.getItem(this.savePrefix + 'name_' + norm);
    if (byName) {
      try { return JSON.parse(byName); } catch (e) {}
    }

    const byEmail = localStorage.getItem(this.savePrefix + 'email_' + norm);
    if (byEmail) {
      try { return JSON.parse(byEmail); } catch (e) {}
    }

    return null;
  }

  // Comprobar si existe partida guardada
  hasSave(nameOrUser) {
    return !!this.getSave(nameOrUser);
  }

  // Eliminar partida guardada
  deleteSave(nameOrUser) {
    if (!nameOrUser) return;
    if (typeof nameOrUser === 'object') {
      if (nameOrUser.id) localStorage.removeItem(this.savePrefix + 'user_' + nameOrUser.id);
      if (nameOrUser.email) localStorage.removeItem(this.savePrefix + 'email_' + this.normalizeKey(nameOrUser.email));
      if (nameOrUser.heroName) this.deleteSave(nameOrUser.heroName);
      return;
    }
    const norm = this.normalizeKey(nameOrUser);
    localStorage.removeItem(this.savePrefix + 'name_' + norm);
    localStorage.removeItem(this.savePrefix + 'email_' + norm);
  }

  // Obtener la última partida guardada registrada en el navegador
  getLastSave() {
    try {
      const raw = localStorage.getItem('code_quest_last_save_v1');
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  getLatestSave() {
    return this.getLastSave();
  }
}

// Instancia global
const saveSystem = new SaveSystem();
