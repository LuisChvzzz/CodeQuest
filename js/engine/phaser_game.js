/**
 * Code Quest - Configuración de Phaser 3 y Gestión de Sprites Recortados Individuales
 * Soporte completo para las animaciones del jugador (quieto, caminar, ataque),
 * cofres (cerrado, abierto), terreno, decoraciones de naturaleza y medallas de jefes.
 */

class CodeQuestPhaserScene extends Phaser.Scene {
  constructor() {
    super({ key: 'CodeQuestPhaserScene' });
  }

  preload() {
    // 1. CARGA DE SPRITES RECORTADOS DEL JUGADOR
    // 1.1 Reposo / Idle (14x18)
    this.load.image('jugador_quieto_abajo', 'assets/images/jugador_quieto_abajo.png');
    this.load.image('jugador_quieto_arriba', 'assets/images/jugador_quieto_arriba.png');
    this.load.image('jugador_quieto_izquierda', 'assets/images/jugador_quieto_izquierda.png');
    this.load.image('jugador_quieto_derecha', 'assets/images/jugador_quieto_derecha.png');

    // 1.2 Caminando / Walk (14x17)
    this.load.image('jugador_caminando_abajo_1', 'assets/images/jugador_caminando_abajo_1.png');
    this.load.image('jugador_caminando_abajo_2', 'assets/images/jugador_caminando_abajo_2.png');
    this.load.image('jugador_caminando_arriba_1', 'assets/images/jugador_caminando_arriba_1.png');
    this.load.image('jugador_caminando_arriba_2', 'assets/images/jugador_caminando_arriba_2.png');
    this.load.image('jugador_caminando_izquierda_1', 'assets/images/jugador_caminando_izquierda_1.png');
    this.load.image('jugador_caminando_izquierda_2', 'assets/images/jugador_caminando_izquierda_2.png');
    this.load.image('jugador_caminando_derecha_1', 'assets/images/jugador_caminando_derecha_1.png');
    this.load.image('jugador_caminando_derecha_2', 'assets/images/jugador_caminando_derecha_2.png');

    // 1.3 Ataque en Combate
    this.load.image('jugador_ataque_1', 'assets/images/jugador_ataque_1.png');
    this.load.image('jugador_ataque_2', 'assets/images/jugador_ataque_2.png');
    this.load.image('jugador_ataque_3', 'assets/images/jugador_ataque_3.png');

    // 2. CARGA DE COFRES RECORTADOS (16x16)
    this.load.image('cofre_cerrado', 'assets/images/cofre_cerrado.png');
    this.load.image('cofre_abierto', 'assets/images/cofre_abierto.png');

    // 3. CARGA DE TERRENO Y BORDES RECORTADOS
    this.load.image('pasto_relleno', 'assets/images/pasto_relleno.png');
    this.load.image('tierra_relleno', 'assets/images/tierra_relleno.png');
    this.load.image('agua_relleno', 'assets/images/agua_relleno.png');
    this.load.image('agua_decorada', 'assets/images/agua_decorada.png');
    this.load.image('roca', 'assets/images/roca.png');

    // Bordes de transición
    this.load.image('pasto_arriba_centro', 'assets/images/pasto_arriba_centro.png');
    this.load.image('pasto_abajo_centro', 'assets/images/pasto_abajo_centro.png');
    this.load.image('pasto_izquierda_centro', 'assets/images/pasto_izquierda_centro.png');
    this.load.image('pasto_derecha_centro', 'assets/images/pasto_derecha_centro.png');
    this.load.image('pasto_arriba_izquierda', 'assets/images/pasto_arriba_izquierda.png');
    this.load.image('pasto_arriba_derecha', 'assets/images/pasto_arriba_derecha.png');
    this.load.image('pasto_abajo_izquierda', 'assets/images/pasto_abajo_izquierda.png');
    this.load.image('pasto_abajo_derecha', 'assets/images/pasto_abajo_derecha.png');

    // 4. CARGA DE DECORACIONES DE NATURALEZA
    this.load.image('arbol_grande', 'assets/images/arbol_grande.png');
    this.load.image('arbol_pequeno', 'assets/images/arbol_pequeno.png');
    this.load.image('hongos', 'assets/images/hongos.png');
    this.load.image('llerva', 'assets/images/llerva.png');
    this.load.image('flores', 'assets/images/flores.png');
    this.load.image('flor_azul', 'assets/images/flor_azul.png');
    this.load.image('flor_roja', 'assets/images/flor_roja.png');

    // 5. CARGA DE LOS 20 JEFES (enemigo1.png a enemigo20.png)
    for (let i = 1; i <= 20; i++) {
      this.load.image(`enemigo${i}`, `assets/images/enemigo${i}.png`);
      this.load.image(`medalla${i}`, `assets/images/medalla${i}.png`);
    }

    // 6. CARGA DE AUDIOS DESDE 'assets/audio'
    this.load.audio('mapa', 'assets/audio/mapa.mp3');
    this.load.audio('mapa2', 'assets/audio/mapa2.mp3');
    this.load.audio('pause', 'assets/audio/pause.mp3');
    this.load.audio('gameover', 'assets/audio/gameover.mp3');

    for (let i = 1; i <= 20; i++) {
      this.load.audio(`jefe${i}`, `assets/audio/jefe${i}.mp3`);
    }
  }

  create() {
    // GENERACIÓN DE ANIMACIONES USANDO LOS SPRITES RECORTADOS INDIVIDUALES
    // 1. Caminar Abajo
    this.anims.create({
      key: 'caminar_abajo',
      frames: [
        { key: 'jugador_caminando_abajo_1' },
        { key: 'jugador_caminando_abajo_2' }
      ],
      frameRate: 7,
      repeat: -1
    });

    // 2. Caminar Arriba
    this.anims.create({
      key: 'caminar_arriba',
      frames: [
        { key: 'jugador_caminando_arriba_1' },
        { key: 'jugador_caminando_arriba_2' }
      ],
      frameRate: 7,
      repeat: -1
    });

    // 3. Caminar Izquierda
    this.anims.create({
      key: 'caminar_izquierda',
      frames: [
        { key: 'jugador_caminando_izquierda_1' },
        { key: 'jugador_caminando_izquierda_2' }
      ],
      frameRate: 7,
      repeat: -1
    });

    // 4. Caminar Derecha
    this.anims.create({
      key: 'caminar_derecha',
      frames: [
        { key: 'jugador_caminando_derecha_1' },
        { key: 'jugador_caminando_derecha_2' }
      ],
      frameRate: 7,
      repeat: -1
    });

    // 5. Ataque de Espada en Combate
    this.anims.create({
      key: 'ataque_jugador',
      frames: [
        { key: 'jugador_ataque_1' },
        { key: 'jugador_ataque_2' },
        { key: 'jugador_ataque_3' }
      ],
      frameRate: 6,
      repeat: 0
    });

    console.log("✅ Phaser 3: Sprites recortados (jugador quieto/caminar/ataque, cofres, terreno, decoraciones y medallas) cargados con éxito.");
  }
}

// Configuración global de Phaser disponible
window.CodeQuestPhaserConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  width: window.innerWidth,
  height: window.innerHeight,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: { gravity: { y: 0 }, debug: false }
  },
  scene: [CodeQuestPhaserScene]
};
