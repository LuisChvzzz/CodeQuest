// api/leaderboard.js
// Vercel Serverless Function: Gestión Global de Ranking en la Nube con Deduplicación
// Compatible automáticamente con Vercel KV / Upstash Redis (100% Gratuito)

function isSameUser(a, b) {
  if (!a || !b) return false;
  // 1. Por ID único de usuario (Firebase UID o usr_xxx)
  if (a.userId && b.userId && String(a.userId).trim() === String(b.userId).trim()) {
    return true;
  }
  // 2. Por correo electrónico
  if (a.userEmail && b.userEmail && String(a.userEmail).trim().toLowerCase() === String(b.userEmail).trim().toLowerCase()) {
    return true;
  }
  // 3. Por nombre de héroe
  if (a.name && b.name && String(a.name).trim().toLowerCase() === String(b.name).trim().toLowerCase()) {
    return true;
  }
  return false;
}

function deduplicateScores(scores) {
  if (!Array.isArray(scores)) return [];
  const unique = [];

  for (const record of scores) {
    if (!record || !record.name) continue;
    const existingIdx = unique.findIndex(u => isSameUser(u, record));

    if (existingIdx >= 0) {
      const existing = unique[existingIdx];
      const recScore = Number(record.score || 0);
      const exScore = Number(existing.score || 0);

      if (recScore > exScore) {
        existing.score = recScore;
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

export default async function handler(req, res) {
  // Headers CORS para permitir llamadas seguras
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Variables de entorno inyectadas por Vercel KV / Upstash
  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || process.env.REDIS_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || process.env.REDIS_TOKEN;

  const defaultRanking = [
    { name: "James_Gosling", score: 25400, medals: 20, title: "Creador de Java", date: "07/09/2026", completed: true },
    { name: "Ada_Lovelace", score: 24850, medals: 20, title: "Pionera del Algoritmo", date: "07/09/2026", completed: true },
    { name: "Duke_Master", score: 23900, medals: 20, title: "Mascota de la JVM", date: "06/09/2026", completed: true },
    { name: "Bytecode_Warrior", score: 22150, medals: 20, title: "Archimago del Bytecode", date: "05/09/2026", completed: true },
    { name: "Alan_Turing", score: 21800, medals: 20, title: "Descifrador del Código", date: "05/09/2026", completed: true }
  ];

  // 1. GET: Consultar los mejores puntajes mundiales (con saneamiento y deduplicación)
  if (req.method === 'GET') {
    if (kvUrl && kvToken) {
      try {
        const response = await fetch(`${kvUrl}/get/code_quest_global_ranking`, {
          headers: { Authorization: `Bearer ${kvToken}` }
        });
        const data = await response.json();
        let ranking = [];
        if (data && data.result) {
          ranking = typeof data.result === 'string' ? JSON.parse(data.result) : data.result;
        }
        if (!Array.isArray(ranking) || ranking.length === 0) {
          ranking = defaultRanking;
        }
        const cleanRanking = deduplicateScores(ranking);
        return res.status(200).json(cleanRanking);
      } catch (err) {
        console.error("Error al consultar Upstash:", err);
        return res.status(200).json(defaultRanking);
      }
    }

    return res.status(200).json(defaultRanking);
  }

  // 2. POST: Registrar o actualizar progreso del jugador (Deduplicación activa)
  if (req.method === 'POST') {
    let body = req.body;
    if (typeof body === 'string') {
      try {
        body = JSON.parse(body);
      } catch (e) {
        return res.status(400).json({ error: "JSON inválido" });
      }
    }

    if (!body || !body.name || typeof body.score !== 'number') {
      return res.status(400).json({ error: "Parámetros inválidos (se requiere name y score numérico)" });
    }

    const newRecord = {
      name: String(body.name).replace(/<[^>]*>/g, '').trim().slice(0, 20) || "Héroe",
      score: Math.floor(body.score),
      medals: Math.min(20, Math.max(0, Math.floor(body.medals || 0))),
      title: body.title || "Gran Maestro Java",
      date: body.date || new Date().toLocaleDateString('es-ES'),
      completed: !!body.completed,
      userId: body.userId ? String(body.userId).trim() : null,
      userEmail: body.userEmail ? String(body.userEmail).trim().toLowerCase() : null
    };

    if (kvUrl && kvToken) {
      try {
        // Obtener ranking actual de Upstash
        const response = await fetch(`${kvUrl}/get/code_quest_global_ranking`, {
          headers: { Authorization: `Bearer ${kvToken}` }
        });
        const data = await response.json();
        let scores = [];
        if (data && data.result) {
          scores = typeof data.result === 'string' ? JSON.parse(data.result) : data.result;
        }
        if (!Array.isArray(scores) || scores.length === 0) {
          scores = [...defaultRanking];
        }

        // 1. Limpiar cualquier duplicado previo existente
        scores = deduplicateScores(scores);

        // 2. Buscar si el usuario que envía el puntaje ya existe en la tabla
        const existingIndex = scores.findIndex(s => isSameUser(s, newRecord));

        if (existingIndex >= 0) {
          // Ya existe: actualizar conservando su mejor récord
          const target = scores[existingIndex];
          if (newRecord.score >= target.score) {
            target.score = newRecord.score;
            target.medals = Math.max(target.medals || 0, newRecord.medals);
            target.title = newRecord.title;
            target.date = newRecord.date;
            target.completed = target.completed || newRecord.completed;
          } else {
            target.medals = Math.max(target.medals || 0, newRecord.medals);
            target.completed = target.completed || newRecord.completed;
          }
          target.name = newRecord.name;
          if (newRecord.userId) target.userId = newRecord.userId;
          if (newRecord.userEmail) target.userEmail = newRecord.userEmail;
        } else {
          scores.push(newRecord);
        }

        // 3. Re-deduplicar, ordenar y limitar a top 100
        scores = deduplicateScores(scores).slice(0, 100);

        // 4. Guardar en Upstash Redis
        await fetch(`${kvUrl}`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${kvToken}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(["SET", "code_quest_global_ranking", JSON.stringify(scores)])
        });

        return res.status(200).json({ success: true, record: newRecord, ranking: scores });
      } catch (err) {
        console.error("Error al guardar en Upstash:", err);
        return res.status(500).json({ error: "Error al registrar puntaje en la nube" });
      }
    }

    return res.status(200).json({
      success: true,
      record: newRecord,
      note: "Registrado localmente. Para guardar en la nube global, conecta Vercel KV en el panel de Vercel."
    });
  }

  return res.status(405).json({ error: "Método HTTP no permitido" });
}
