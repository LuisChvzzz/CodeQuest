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

  // Registrar partida finalizada (En la nube y en almacenamiento local)
  registerCompletedGame(playerName, totalScore, medalsCount) {
    const scores = this.getScores();

    const newRecord = {
      name: playerName || "Héroe Anónimo",
      score: totalScore,
      medals: medalsCount,
      title: "Gran Maestro Java",
      date: new Date().toLocaleDateString('es-ES'),
      completed: true
    };

    scores.push(newRecord);
    scores.sort((a, b) => b.score - a.score);

    // Guardar los mejores 100 localmente de inmediato
    const topScores = scores.slice(0, 100);
    localStorage.setItem(this.storageKey, JSON.stringify(topScores));

    // Notificar actualización en tiempo real entre pestañas
    if (this.broadcast) {
      this.broadcast.postMessage({ type: 'RANKING_UPDATED' });
    }

    // Enviar a la nube global si está disponible (Vercel Serverless / API)
    fetch('/api/leaderboard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newRecord)
    }).then(res => {
      if (res.ok) return res.json();
    }).then(data => {
      if (data && data.ranking) {
        localStorage.setItem(this.storageKey, JSON.stringify(data.ranking));
        this.refreshUI();
      }
    }).catch(err => {
      // Guardado local garantizado
      console.log("Récord guardado localmente (Offline fallback).");
    });

    return newRecord;
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
    this.renderLeaderboard('ranking-table-body');
  }
}

// Instancia global
const cloudRanking = new LeaderboardSystem();
