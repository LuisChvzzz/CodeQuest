// api/leaderboard.js
// Vercel Serverless Function: Gestión Global de Ranking en la Nube
// Compatible automáticamente con Vercel KV / Upstash Redis (100% Gratuito)

export default async function handler(req, res) {
  // Headers CORS para permitir llamadas seguras
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Variables de entorno de Vercel KV / Upstash Redis
  const kvUrl = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const kvToken = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;

  // 1. GET: Consultar los mejores puntajes mundiales
  if (req.method === 'GET') {
    if (kvUrl && kvToken) {
      try {
        const response = await fetch(`${kvUrl}/get/code_quest_global_ranking`, {
          headers: { Authorization: `Bearer ${kvToken}` }
        });
        const data = await response.json();
        const ranking = data.result ? (typeof data.result === 'string' ? JSON.parse(data.result) : data.result) : [];
        return res.status(200).json(ranking);
      } catch (err) {
        console.error("Error al consultar Vercel KV:", err);
        return res.status(500).json({ error: "Error al consultar la base de datos en la nube" });
      }
    }

    // Lista por defecto si aún no se ha conectado Vercel KV en el dashboard
    return res.status(200).json([
      { name: "James_Gosling", score: 25400, medals: 20, title: "Creador de Java", date: "07/09/2026", completed: true },
      { name: "Ada_Lovelace", score: 24850, medals: 20, title: "Pionera del Algoritmo", date: "07/09/2026", completed: true },
      { name: "Duke_Master", score: 23900, medals: 20, title: "Mascota de la JVM", date: "06/09/2026", completed: true },
      { name: "Bytecode_Warrior", score: 22150, medals: 20, title: "Archimago del Bytecode", date: "05/09/2026", completed: true },
      { name: "Alan_Turing", score: 21800, medals: 20, title: "Descifrador del Código", date: "05/09/2026", completed: true }
    ]);
  }

  // 2. POST: Registrar nuevo récord al ganar el juego
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
      date: new Date().toLocaleDateString('es-ES'),
      completed: true
    };

    if (kvUrl && kvToken) {
      try {
        // Obtener ranking actual
        const response = await fetch(`${kvUrl}/get/code_quest_global_ranking`, {
          headers: { Authorization: `Bearer ${kvToken}` }
        });
        const data = await response.json();
        let scores = data.result ? (typeof data.result === 'string' ? JSON.parse(data.result) : data.result) : [];

        scores.push(newRecord);
        scores.sort((a, b) => b.score - a.score);
        scores = scores.slice(0, 100); // Conservar top 100 global

        // Guardar de vuelta en Vercel KV
        await fetch(`${kvUrl}/set/code_quest_global_ranking`, {
          method: 'POST',
          headers: { Authorization: `Bearer ${kvToken}` },
          body: JSON.stringify(scores)
        });

        return res.status(200).json({ success: true, record: newRecord, ranking: scores });
      } catch (err) {
        console.error("Error al guardar en Vercel KV:", err);
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
