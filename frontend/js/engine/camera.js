// Cámara 2D con seguimiento suave y confinamiento a los bordes del mapa
class Camera {
  constructor(viewportWidth, viewportHeight, worldWidth, worldHeight) {
    this.x = 0;
    this.y = 0;
    this.viewportWidth = viewportWidth;
    this.viewportHeight = viewportHeight;
    this.worldWidth = worldWidth;
    this.worldHeight = worldHeight;
    this.lerpSpeed = 0.1; // Suavizado de seguimiento
  }

  resize(viewportWidth, viewportHeight) {
    this.viewportWidth = viewportWidth;
    this.viewportHeight = viewportHeight;
  }

  follow(targetX, targetY) {
    // Centrar en el objetivo (jugador)
    const desiredX = targetX - this.viewportWidth / 2;
    const desiredY = targetY - this.viewportHeight / 2;

    // Interpolación lineal suave
    this.x += (desiredX - this.x) * this.lerpSpeed;
    this.y += (desiredY - this.y) * this.lerpSpeed;

    // Limitar dentro de los bordes del mapa del mundo
    this.x = Math.max(0, Math.min(this.x, this.worldWidth - this.viewportWidth));
    this.y = Math.max(0, Math.min(this.y, this.worldHeight - this.viewportHeight));
  }

  // Convertir coordenadas del mundo a coordenadas de pantalla
  toScreen(worldX, worldY) {
    return {
      x: worldX - this.x,
      y: worldY - this.y
    };
  }

  // Convertir coordenadas de pantalla a coordenadas del mundo
  toWorld(screenX, screenY) {
    return {
      x: screenX + this.x,
      y: screenY + this.y
    };
  }
}
