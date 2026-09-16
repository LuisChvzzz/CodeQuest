// Sistema de Ranking en la Nube de Code Quest
class LeaderboardSystem {
  constructor() {
    this.storageKey = 'code_quest_cloud_ranking_v1';
    this.broadcast = null;
    this.cloudAvailable = false;

    // Canal de sincronización en tiempo real entre pestañas/ventanas
    try {
      this.broadcast = new BroadcastChannel('code_quest_realtime_ranking');
      this.broadcast.onmessage = (event) => {
        if (event.data && event.data.type === 'RANKING_UPDATED') {
          this.refreshUI();
        }
      };
    } catch (e) {
      console.log("BroadcastChannel no soportado o restringido:", e);
    }

    this.initDefaultLeaderboard();
    this.syncWithCloud();
  }

  // Sincronizar con el backend Serverless en la nube (Vercel KV / API)
  async syncWithCloud() {
    try {
      const res = await fetch('/api/leaderboard');
      if (res.ok) {
        const cloudScores = await res.json();
        if (Array.isArray(cloudScores) && cloudScores.length > 0) {
          this.cloudAvailable = true;
          const cleanScores = this.deduplicateScores(cloudScores);
          localStorage.setItem(this.storageKey, JSON.stringify(cleanScores));
          this.refreshUI();
        }
      }
    } catch (e) {
      // Entorno local sin endpoint serverless o sin internet: funciona 100% con localStorage
    }
  }

  // Inicializar ranking con jugadores legendarios si está vacío
  initDefaultLeaderboard() {
    // Limpiar registros de administrador si existieran en localStorage
    const raw = localStorage.getItem(this.storageKey);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          const cleaned = parsed.filter(s => s && s.name !== 'Administrador' && s.userEmail !== 'admin@gmail.com' && s.userId !== 'usr_admin_master');
          if (cleaned.length !== parsed.length) {
            localStorage.setItem(this.storageKey, JSON.stringify(cleaned));
          }
        }
      } catch (e) {}
    }

    if (!localStorage.getItem(this.storageKey)) {
      const defaultRecords = [
        {
          name: "James_Gosling",
          score: 25400,
          medals: 20,
          title: "Creador de Java",
          date: "07/09/2026",
          completed: true
        },
        {
          name: "Ada_Lovelace",
          score: 24850,
          medals: 20,
          title: "Pionera del Algoritmo",
          date: "07/09/2026",
          completed: true
        },
        {
          name: "Duke_Master",
          score: 23900,
          medals: 20,
          title: "Mascota de la JVM",
          date: "06/09/2026",
          completed: true
        },
        {
          name: "Bytecode_Warrior",
          score: 22150,
          medals: 20,
          title: "Archimago del Bytecode",
          date: "05/09/2026",
          completed: true
        },
        {
          name: "Alan_Turing",
          score: 21800,
          medals: 20,
          title: "Descifrador del Código",
          date: "05/09/2026",
          completed: true
        },
        {
          name: "Java_Knight_99",
          score: 19500,
          medals: 20,
          title: "Caballero del Objeto",
          date: "04/09/2026",
          completed: true
        }
      ];

      localStorage.setItem(this.storageKey, JSON.stringify(defaultRecords));
    }
  }

  // Identifica si dos registros corresponden al mismo usuario/jugador
  isSameUser(a, b) {
    if (!a || !b) return false;
    // 1. Por ID único de cuenta (Firebase UID / usuario local)
    if (a.userId && b.userId && String(a.userId).trim() === String(b.userId).trim()) {
      return true;
    }
    // 2. Por correo electrónico registrado
    if (a.userEmail && b.userEmail && String(a.userEmail).trim().toLowerCase() === String(b.userEmail).trim().toLowerCase()) {
      return true;
    }
    // 3. Por nombre de héroe
    if (a.name && b.name && String(a.name).trim().toLowerCase() === String(b.name).trim().toLowerCase()) {
      return true;
    }
    return false;
  }

  // Limpia y deduplica la lista de registros consolidando el mejor progreso
  deduplicateScores(scores) {
    if (!Array.isArray(scores)) return [];
    // Filtrar cualquier intento de registro de administrador o simulación
    const filtered = scores.filter(s => s && s.name !== 'Administrador' && s.userEmail !== 'admin@gmail.com' && s.userId !== 'usr_admin_master');
    const unique = [];

    for (const record of filtered) {
      if (!record || !record.name) continue;
      const existingIdx = unique.findIndex(u => this.isSameUser(u, record));

      if (existingIdx >= 0) {
        const existing = unique[existingIdx];
        if (Number(record.score || 0) > Number(existing.score || 0)) {
          existing.score = Number(record.score || 0);
          existing.title = record.title || existing.title;
          existing.date = record.date || existing.date;
        }
        existing.medals = Math.max(Number(existing.medals || 0), Number(record.medals || 0));
        existing.completed = existing.completed || !!record.completed;
        if (record.userId) existing.userId = record.userId;
        if (record.userEmail) existing.userEmail = record.userEmail;
        if (record.name) existing.name = record.name;
      } else {
        unique.push({
          ...record,
          score: Number(record.score || 0),
          medals: Number(record.medals || 0),
          completed: !!record.completed
        });
      }
    }

    return unique.sort((a, b) => b.score - a.score);
  }

  // Obtener registros ordenados por puntuación de mayor a menor y deduplicados
  getScores() {
    try {
      const data = localStorage.getItem(this.storageKey);
      const list = data ? JSON.parse(data) : [];
      return this.deduplicateScores(list);
    } catch (e) {
      console.error("Error al leer el ranking:", e);
      return [];
    }
  }

  // Obtener título honorífico en base a las medallas obtenidas
  getTitleForMedals(medalsCount, completed = false) {
    if (completed || medalsCount >= 20) return "Gran Maestro Java";
    if (medalsCount >= 15) return "Archimago de Java";
    if (medalsCount >= 10) return "Caballero del Objeto";
    if (medalsCount >= 5) return "Paladín de la Sintaxis";
    if (medalsCount >= 1) return "Aprendiz de Java";
    return "Aventurero Novato";
  }

  // Registrar o actualizar progreso del jugador en el Ranking Global evitando duplicados
  registerOrUpdateProgress(playerName, totalScore, medalsCount, completed = false, user = null) {
    playerName = String(playerName || "Héroe Anónimo").trim();
    totalScore = Number(totalScore) || 0;
    medalsCount = Number(medalsCount) || 0;

    const activeUser = user || (typeof authManager !== 'undefined' ? authManager.getCurrentUser() : null);
    const userId = activeUser ? activeUser.id : null;
    const userEmail = activeUser ? activeUser.email : null;

    // BLOQUEO ESTRICTO: La cuenta administradora jamás se registra en el ranking
    if (activeUser && (activeUser.isAdmin || activeUser.email === 'admin@gmail.com' || playerName === 'Administrador')) {
      return {
        name: playerName,
        score: totalScore,
        medals: medalsCount,
        title: this.getTitleForMedals(medalsCount, completed),
        date: new Date().toLocaleDateString('es-ES'),
        completed: !!completed
      };
    }

    let scores = this.getScores();

    const title = this.getTitleForMedals(medalsCount, completed);
    const date = new Date().toLocaleDateString('es-ES');

    const candidateRecord = {
      name: playerName,
      score: totalScore,
      medals: medalsCount,
      title: title,
      date: date,
      completed: !!completed,
      userId: userId,
      userEmail: userEmail
    };

    const existingIndex = scores.findIndex(s => this.isSameUser(s, candidateRecord));

    let targetRecord;
    if (existingIndex >= 0) {
      // Usuario ya existente en el ranking: Sobreescribir / actualizar conservando su mejor récord
      targetRecord = scores[existingIndex];
      if (totalScore >= targetRecord.score) {
        targetRecord.score = totalScore;
        targetRecord.medals = Math.max(targetRecord.medals || 0, medalsCount);
        targetRecord.title = title;
        targetRecord.date = date;
        targetRecord.completed = targetRecord.completed || completed;
      } else {
        targetRecord.medals = Math.max(targetRecord.medals || 0, medalsCount);
        if (targetRecord.medals > medalsCount) {
          targetRecord.title = this.getTitleForMedals(targetRecord.medals, targetRecord.completed);
        }
      }
      targetRecord.name = playerName;
      if (userId) targetRecord.userId = userId;
      if (userEmail) targetRecord.userEmail = userEmail;
    } else {
      // Nuevo usuario en el ranking
      targetRecord = candidateRecord;
      scores.push(targetRecord);
    }

    // Deduplicar y guardar los mejores 100
    scores = this.deduplicateScores(scores);
    const topScores = scores.slice(0, 100);
    localStorage.setItem(this.storageKey, JSON.stringify(topScores));

    // Notificar actualización en tiempo real entre pestañas
    if (this.broadcast) {
      try {
        this.broadcast.postMessage({ type: 'RANKING_UPDATED' });
      } catch (e) {}
    }

    // Enviar a la nube si está disponible
    fetch('/api/leaderboard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(targetRecord)
    }).then(res => {
      if (res.ok) return res.json();
    }).then(data => {
      if (data && data.ranking) {
        const cleanCloud = this.deduplicateScores(data.ranking);
        localStorage.setItem(this.storageKey, JSON.stringify(cleanCloud));
        this.refreshUI();
      }
    }).catch(() => {});

    return targetRecord;
  }

  // Registrar récord al completar el juego (Requisito 7 y 8)
  registerCompletedGame(playerName, totalScore, medalsCount, user = null) {
    const activeUser = user || (typeof authManager !== 'undefined' ? authManager.getCurrentUser() : null);
    if (activeUser && (activeUser.isAdmin || activeUser.email === 'admin@gmail.com' || playerName === 'Administrador')) {
      return {
        name: playerName,
        score: totalScore,
        medals: medalsCount,
        title: "Gran Maestro Java",
        date: new Date().toLocaleDateString('es-ES'),
        completed: true
      };
    }
    return this.registerOrUpdateProgress(playerName, totalScore, medalsCount, true, user);
  }

  // Renderizar la tabla de clasificación en el contenedor del modal
  renderLeaderboard(containerId = 'ranking-table-body', skipSync = false) {
    const tbody = document.getElementById(containerId);
    if (!tbody) return;

    if (!skipSync) {
      this.syncWithCloud();
    }

    const scores = this.getScores();
    tbody.innerHTML = '';

    if (scores.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 20px;">Aún no hay héroes que hayan completado la aventura. ¡Sé el primero!</td></tr>`;
      return;
    }

    scores.forEach((entry, index) => {
      const tr = document.createElement('tr');
      if (index === 0) tr.className = 'rank-gold';
      else if (index === 1) tr.className = 'rank-silver';
      else if (index === 2) tr.className = 'rank-bronze';

      let medalBadge = `#${index + 1}`;
      if (index === 0) medalBadge = '<img src="assets/icons/medalla_oro.png" class="pixel-icon" alt="Oro"> #1';
      else if (index === 1) medalBadge = '<img src="assets/icons/medalla_plata.png" class="pixel-icon" alt="Plata"> #2';
      else if (index === 2) medalBadge = '<img src="assets/icons/medalla_bronce.png" class="pixel-icon" alt="Bronce"> #3';

      tr.innerHTML = `
        <td class="td-rank">${medalBadge}</td>
        <td class="td-player">
          <strong>${this.escapeHtml(entry.name)}</strong>
          <span class="player-sub">${entry.title || 'Guerrero Java'}</span>
        </td>
        <td class="td-score">${entry.score.toLocaleString()} PTS</td>
        <td class="td-medals"><img src="assets/icons/medalla.png" class="pixel-icon" alt="Medallas"> ${entry.medals} / 20</td>
        <td class="td-date">${entry.date}</td>
      `;

      tbody.appendChild(tr);
    });
  }

  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  refreshUI() {
    if (typeof document === 'undefined') return;
    this.renderLeaderboard('ranking-table-body');
  }
}

// Instancia global
const cloudRanking = new LeaderboardSystem();
