// Gestor de Entrada (Teclado y Controles)
class InputHandler {
  constructor() {
    this.keys = {};
    this.justPressed = {};

    window.addEventListener('keydown', (e) => {
      if (!this.keys[e.code]) {
        this.justPressed[e.code] = true;
      }
      this.keys[e.code] = true;

      // Prevenir scroll con flechas y espacio
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
        e.preventDefault();
      }
    });

    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
      this.justPressed[e.code] = false;
    });
  }

  isDown(code) {
    return !!this.keys[code];
  }

  wasJustPressed(code) {
    const res = !!this.justPressed[code];
    this.justPressed[code] = false;
    return res;
  }

  // Direcciones
  get isUp() {
    return this.isDown('KeyW') || this.isDown('ArrowUp');
  }

  get isDownDir() {
    return this.isDown('KeyS') || this.isDown('ArrowDown');
  }

  get isLeft() {
    return this.isDown('KeyA') || this.isDown('ArrowLeft');
  }

  get isRight() {
    return this.isDown('KeyD') || this.isDown('ArrowRight');
  }

  // Interacción (E, Espacio, Enter)
  get isInteract() {
    return this.wasJustPressed('KeyE') || this.wasJustPressed('Space') || this.wasJustPressed('Enter');
  }

  // Pausa (ESC o P)
  get isPause() {
    return this.wasJustPressed('Escape') || this.wasJustPressed('KeyP');
  }

  // Limpiar estados transitorios en cada frame
  resetFrame() {
    this.justPressed = {};
  }
}
