// api/leaderboard.js
// Vercel Serverless Function Gateway
// Delega la ejecución y seguridad al servicio backend aislado

import { handleLeaderboardRequest } from '../backend/services/leaderboard_service.js';

export default async function handler(req, res) {
  return handleLeaderboardRequest(req, res);
}
