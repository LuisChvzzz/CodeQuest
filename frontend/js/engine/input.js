// Gestor de Entrada (Teclado, Pantallas Táctiles y Controles Móviles)
class InputHandler {
  constructor() {
    this.keys = {};
    this.justPressed = {};
    this.touchDirs = { up: false, down: false, left: false, right: false };
    this.touchInteract = false;

    window.addEventListener('keydown', (e) => {
      // Permitir escritura natural (barra espaciadora, flechas, etc.) en campos de texto y editores de código
      const tag = e.target && e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target && e.target.isContentEditable)) {
        return;
      }

      if (!this.keys[e.code]) {
        this.justPressed[e.code] = true;
      }
      this.keys[e.code] = true;

      // Prevenir scroll con flechas y espacio en el juego
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
        e.preventDefault();
      }
    });

    window.addEventListener('keyup', (e) => {
      const tag = e.target && e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || (e.target && e.target.isContentEditable)) {
        return;
      }

      this.keys[e.code] = false;
      this.justPressed[e.code] = false;
    });

    // Limpiar teclas al perder el foco (minimizar ventana, cambiar de pestaña, etc.)
    window.addEventListener('blur', () => {
      this.keys = {};
      this.justPressed = {};
      this.touchDirs = { up: false, down: false, left: false, right: false };
      this.touchInteract = false;
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

  // Direcciones (Soporta Teclado Físico y Controles Táctiles Móviles)
  get isUp() {
    return this.isDown('KeyW') || this.isDown('ArrowUp') || this.touchDirs.up;
  }

  get isDownDir() {
    return this.isDown('KeyS') || this.isDown('ArrowDown') || this.touchDirs.down;
  }

  get isLeft() {
    return this.isDown('KeyA') || this.isDown('ArrowLeft') || this.touchDirs.left;
  }

  get isRight() {
    return this.isDown('KeyD') || this.isDown('ArrowRight') || this.touchDirs.right;
  }

  // Interacción (E, Espacio, Enter o Botón Táctil de Acción)
  get isInteract() {
    const res = this.wasJustPressed('KeyE') || this.wasJustPressed('Space') || this.wasJustPressed('Enter') || this.touchInteract;
    this.touchInteract = false;
    return res;
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
