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
          localStorage.setItem(this.storageKey, JSON.stringify(cloudScores));
          this.refreshUI();
        }
      }
    } catch (e) {
      // Entorno local sin endpoint serverless o sin internet: funciona 100% con localStorage
    }
  }

  // Inicializar ranking con jugadores legendarios si está vacío
  initDefaultLeaderboard() {
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

  // Obtener registros ordenados por puntuación de mayor a menor
  getScores() {
    try {
      const data = localStorage.getItem(this.storageKey);
      const list = data ? JSON.parse(data) : [];
      return list.sort((a, b) => b.score - a.score);
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

  // Registrar o actualizar progreso del jugador en el Ranking Global
  // (Permite registrar puntuación aún si no ha completado los 20 niveles y se sale al menú principal)
  registerOrUpdateProgress(playerName, totalScore, medalsCount, completed = false) {
    playerName = String(playerName || "Héroe Anónimo").trim();
    totalScore = Number(totalScore) || 0;
    medalsCount = Number(medalsCount) || 0;

    const scores = this.getScores();
    const cleanLower = playerName.toLowerCase();
    const existingIndex = scores.findIndex(s => s.name && s.name.trim().toLowerCase() === cleanLower);

    const title = this.getTitleForMedals(medalsCount, completed);
    const date = new Date().toLocaleDateString('es-ES');

    let targetRecord;

    if (existingIndex >= 0) {
      // Si el jugador ya existe en la tabla, actualizamos si su nuevo puntaje es superior o igual
      targetRecord = scores[existingIndex];
      if (totalScore >= targetRecord.score) {
        targetRecord.score = totalScore;
        targetRecord.medals = Math.max(targetRecord.medals, medalsCount);
        targetRecord.title = title;
        targetRecord.date = date;
        targetRecord.completed = targetRecord.completed || completed;
      } else {
        // Conservar mejor puntaje previo pero actualizar medallas si consiguió más
        targetRecord.medals = Math.max(targetRecord.medals, medalsCount);
        if (targetRecord.medals > medalsCount) {
          targetRecord.title = this.getTitleForMedals(targetRecord.medals, targetRecord.completed);
        }
      }
    } else {
      // Nuevo participante en el ranking
      targetRecord = {
        name: playerName,
        score: totalScore,
        medals: medalsCount,
        title,
        date,
        completed: !!completed
      };
      scores.push(targetRecord);
    }

    scores.sort((a, b) => b.score - a.score);

    // Guardar los mejores 100 localmente
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
        localStorage.setItem(this.storageKey, JSON.stringify(data.ranking));
        this.refreshUI();
      }
    }).catch(() => {});

    return targetRecord;
  }

  // Registrar partida finalizada (Tras derrotar al jefe 20)
  registerCompletedGame(playerName, totalScore, medalsCount) {
    return this.registerOrUpdateProgress(playerName, totalScore, medalsCount, true);
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
      if (index === 0) medalBadge = '🥇 #1';
      else if (index === 1) medalBadge = '🥈 #2';
      else if (index === 2) medalBadge = '🥉 #3';

      tr.innerHTML = `
        <td class="td-rank">${medalBadge}</td>
        <td class="td-player">
          <strong>${this.escapeHtml(entry.name)}</strong>
          <span class="player-sub">${entry.title || 'Guerrero Java'}</span>
        </td>
        <td class="td-score">${entry.score.toLocaleString()} PTS</td>
        <td class="td-medals">🏅 ${entry.medals} / 20</td>
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
