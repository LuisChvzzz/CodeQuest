// Motor de renderizado Pixel Art en Canvas 2D con soporte completo de Sprites Recortados
// Sprites de jugador (quieto, caminar, ataque), cofres (abierto, cerrado), terreno y bordes, vegetación y jefes

function createPixelImage(src) {
  const img = new Image();
  img.src = src;
  return img;
}

class PixelRenderer {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.tileSize = 32;
    this.animTime = 0;

    // Asegurar renderizado pixelado nítido
    this.ctx.imageSmoothingEnabled = false;

    // 1. Sprites del Jugador
    this.playerSprites = {
      idle: {
        down: createPixelImage('assets/images/jugador_quieto_abajo.png'),
        up: createPixelImage('assets/images/jugador_quieto_arriba.png'),
        left: createPixelImage('assets/images/jugador_quieto_izquierda.png'),
        right: createPixelImage('assets/images/jugador_quieto_derecha.png')
      },
      walk: {
        down: [
          createPixelImage('assets/images/jugador_caminando_abajo_1.png'),
          createPixelImage('assets/images/jugador_caminando_abajo_2.png')
        ],
        up: [
          createPixelImage('assets/images/jugador_caminando_arriba_1.png'),
          createPixelImage('assets/images/jugador_caminando_arriba_2.png')
        ],
        left: [
          createPixelImage('assets/images/jugador_caminando_izquierda_1.png'),
          createPixelImage('assets/images/jugador_caminando_izquierda_2.png')
        ],
        right: [
          createPixelImage('assets/images/jugador_caminando_derecha_1.png'),
          createPixelImage('assets/images/jugador_caminando_derecha_2.png')
        ]
      },
      attack: [
        createPixelImage('assets/images/jugador_ataque_1.png'),
        createPixelImage('assets/images/jugador_ataque_2.png'),
        createPixelImage('assets/images/jugador_ataque_3.png')
      ]
    };

    // 2. Sprites de Cofres
    this.chestSprites = {
      closed: createPixelImage('assets/images/cofre_cerrado.png'),
      open: createPixelImage('assets/images/cofre_abierto.png')
    };

    // 3. Sprites de Terreno
    this.terrainSprites = {
      grass: createPixelImage('assets/images/pasto_relleno.png'),
      dirt: createPixelImage('assets/images/tierra_relleno.png'),
      water: createPixelImage('assets/images/agua_relleno.png'),
      waterDecor: createPixelImage('assets/images/agua_decorada.png'),
      rock: createPixelImage('assets/images/roca.png')
    };

    // 4. Sprites de Bordes de Transición de Pasto
    this.borderSprites = {
      up: createPixelImage('assets/images/pasto_arriba_centro.png'),
      down: createPixelImage('assets/images/pasto_abajo_centro.png'),
      left: createPixelImage('assets/images/pasto_izquierda_centro.png'),
      right: createPixelImage('assets/images/pasto_derecha_centro.png'),
      upLeft: createPixelImage('assets/images/pasto_arriba_izquierda.png'),
      upRight: createPixelImage('assets/images/pasto_arriba_derecha.png'),
      downLeft: createPixelImage('assets/images/pasto_abajo_izquierda.png'),
      downRight: createPixelImage('assets/images/pasto_abajo_derecha.png')
    };

    // 5. Sprites de Decoración de Naturaleza
    this.decorSprites = {
      arbol_grande: createPixelImage('assets/images/arbol_grande.png'),
      arbol_pequeno: createPixelImage('assets/images/arbol_pequeno.png'),
      hongos: createPixelImage('assets/images/hongos.png'),
      llerva: createPixelImage('assets/images/llerva.png'),
      flores: createPixelImage('assets/images/flores.png'),
      flor_azul: createPixelImage('assets/images/flor_azul.png'),
      flor_roja: createPixelImage('assets/images/flor_roja.png'),
      roca: createPixelImage('assets/images/roca.png')
    };

    // 6. Sprites de los 20 Jefes
    this.bossImgs = {};
    for (let i = 1; i <= 20; i++) {
      this.bossImgs[i] = createPixelImage(`assets/images/enemigo${i}.png`);
    }

    // 7. Sprites de las 20 Medallas
    this.medalImgs = {};
    for (let i = 1; i <= 20; i++) {
      this.medalImgs[i] = createPixelImage(`assets/images/medalla${i}.png`);
    }

    // 8. Iconos pixel art para HUD y Guías en Canvas
    this.iconCandado = createPixelImage('assets/icons/candado.png');
    this.iconObjetivo = createPixelImage('assets/icons/objetivo.png');
  }

  update(dt) {
    this.animTime += dt;
  }

  // Dibujar casilla de terreno con texturas recortadas y bordes de transición orgánicos
  drawTile(tileType, x, y, size, neighbors = null) {
    const ctx = this.ctx;
    const px = Math.floor(x);
    const py = Math.floor(y);

    switch (tileType) {
      case 0: { // Pasto medieval base con textura pixel-art rica (Requisito 1 y 6)
        ctx.fillStyle = '#265130';
        ctx.fillRect(px, py, size, size);

        // Briznas y matices sutiles de pasto para dar vida y profundidad al campo
        const seed = Math.abs(Math.sin((px * 7 + py * 13)) * 10000);
        const pVariant = Math.floor(seed) % 3;

        ctx.fillStyle = '#2d5f39';
        if (pVariant === 0) {
          ctx.fillRect(px + 4, py + 6, 3, 2);
          ctx.fillRect(px + 18, py + 20, 3, 2);
          ctx.fillRect(px + 24, py + 8, 2, 2);
        } else if (pVariant === 1) {
          ctx.fillRect(px + 10, py + 14, 3, 2);
          ctx.fillRect(px + 22, py + 4, 3, 2);
          ctx.fillRect(px + 6, py + 22, 2, 2);
        } else {
          ctx.fillRect(px + 8, py + 8, 2, 2);
          ctx.fillRect(px + 16, py + 16, 3, 2);
          ctx.fillRect(px + 20, py + 24, 2, 2);
        }

        const grassImg = this.terrainSprites.grass;
        if (grassImg.complete && grassImg.naturalWidth > 0) {
          ctx.drawImage(grassImg, px, py, size, size);
        }
        break;
      }

      case 5: // Compatibilidad para arenas de jefes con tierra_relleno.png
      case 1: { // Camino empedrado con tierra_relleno.png y flecos de pasto (Requisito 1)
        ctx.fillStyle = '#5c4a38';
        ctx.fillRect(px, py, size, size);

        // Guijarros y textura de tierra empedrada
        ctx.fillStyle = '#6b5742';
        ctx.fillRect(px + 3, py + 4, 8, 6);
        ctx.fillRect(px + 18, py + 16, 9, 7);
        ctx.fillStyle = '#4a3b2c';
        ctx.fillRect(px + 12, py + 10, 6, 5);
        ctx.fillRect(px + 4, py + 20, 7, 5);

        const dirtImg = this.terrainSprites.dirt;
        if (dirtImg.complete && dirtImg.naturalWidth > 0) {
          ctx.drawImage(dirtImg, px, py, size, size);
        }

        // Flecos orgánicos de pasto verde sobre los bordes del camino
        if (neighbors) {
          ctx.fillStyle = '#265130';
          if (neighbors.up === 0 || neighbors.up === 2) {
            ctx.fillRect(px + 2, py, 4, 3);
            ctx.fillRect(px + 10, py, 5, 2);
            ctx.fillRect(px + 20, py, 6, 3);
            ctx.fillRect(px + 28, py, 3, 2);
          }
          if (neighbors.down === 0 || neighbors.down === 2) {
            ctx.fillRect(px + 4, py + size - 3, 5, 3);
            ctx.fillRect(px + 14, py + size - 2, 4, 2);
            ctx.fillRect(px + 22, py + size - 3, 6, 3);
          }
          if (neighbors.left === 0 || neighbors.left === 2) {
            ctx.fillRect(px, py + 4, 3, 5);
            ctx.fillRect(px, py + 16, 2, 6);
          }
          if (neighbors.right === 0 || neighbors.right === 2) {
            ctx.fillRect(px + size - 3, py + 6, 3, 5);
            ctx.fillRect(px + size - 2, py + 18, 2, 6);
          }

          // Barandales de piedra cuando el camino cruza un río (Puente de Piedra medieval)
          if (neighbors.left === 3 || neighbors.left === 7) {
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(px, py, 3, size);
            ctx.fillStyle = '#64748b';
            ctx.fillRect(px + 1, py + 1, 2, size - 2);
            ctx.fillStyle = '#cbd5e1';
            ctx.fillRect(px, py + 4, 3, 4);
            ctx.fillRect(px, py + size - 8, 3, 4);
          }
          if (neighbors.right === 3 || neighbors.right === 7) {
            ctx.fillStyle = '#0f172a';
            ctx.fillRect(px + size - 3, py, 3, size);
            ctx.fillStyle = '#64748b';
            ctx.fillRect(px + size - 3, py + 1, 2, size - 2);
            ctx.fillStyle = '#cbd5e1';
            ctx.fillRect(px + size - 3, py + 4, 3, 4);
            ctx.fillRect(px + size - 3, py + size - 8, 3, 4);
          }
        }
        break;
      }

      case 2: { // Delimitación sólida de roca.png (Requisito 2)
        ctx.fillStyle = '#1e293b';
        ctx.fillRect(px, py, size, size);
        const rockImg = this.terrainSprites.rock;
        if (rockImg.complete && rockImg.naturalWidth > 0) {
          ctx.drawImage(rockImg, px + 2, py + 2, size - 4, size - 4);
        } else {
          ctx.fillStyle = '#475569';
          ctx.fillRect(px + 2, py + 2, size - 4, size - 4);
        }
        // Bisel de profundidad 3D
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.fillRect(px, py, size, 2);
        ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.fillRect(px, py + size - 2, size, 2);
        break;
      }

      case 3: { // Agua de río y lago con agua_relleno.png (Requisito 6)
        const waterImg = this.terrainSprites.water;
        if (waterImg.complete && waterImg.naturalWidth > 0) {
          ctx.drawImage(waterImg, px, py, size, size);
        } else {
          ctx.fillStyle = '#0284c7';
          ctx.fillRect(px, py, size, size);
        }
        // Oleaje dinámico
        const waveShift = Math.sin(this.animTime * 2.5 + (px + py) * 0.08) * 2;
        ctx.fillStyle = 'rgba(56, 189, 248, 0.45)';
        ctx.fillRect(px + 4 + waveShift, py + 8, size - 10, 2);
        ctx.fillRect(px + 2 - waveShift, py + 20, size - 8, 2);

        // Destellos de sol ocasionales
        const glint = (Math.sin(this.animTime * 3.5 + px * 0.12) + 1) * 0.5;
        if (glint > 0.75) {
          ctx.fillStyle = `rgba(255, 255, 255, ${(glint - 0.75) * 2})`;
          ctx.fillRect(px + 14, py + 12, 2, 2);
        }
        break;
      }

      case 4: { // Borde impenetrable del mapa delimitado con arbol_grande.png (Requisito 4)
        const grassImg = this.terrainSprites.grass;
        if (grassImg.complete && grassImg.naturalWidth > 0) {
          ctx.drawImage(grassImg, px, py, size, size);
        } else {
          ctx.fillStyle = '#2d5a36';
          ctx.fillRect(px, py, size, size);
        }

        // Sombra de árbol grande
        ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
        ctx.beginPath();
        ctx.ellipse(px + 16, py + 28, 14, 6, 0, 0, Math.PI * 2);
        ctx.fill();

        // Árbol grande perimetral
        const treeImg = this.decorSprites.arbol_grande;
        if (treeImg.complete && treeImg.naturalWidth > 0) {
          ctx.drawImage(treeImg, px, py - 10, 32, 42);
        } else {
          ctx.fillStyle = '#14532d';
          ctx.beginPath();
          ctx.arc(px + 16, py + 14, 13, 0, Math.PI * 2);
          ctx.fill();
        }
        break;
      }

      case 7: { // Agua con ondas decoradas con agua_decorada.png (Requisito 6)
        const waterImg = this.terrainSprites.water;
        const waterDecorImg = this.terrainSprites.waterDecor;

        if (waterImg.complete && waterImg.naturalWidth > 0) {
          ctx.drawImage(waterImg, px, py, size, size);
        } else {
          ctx.fillStyle = '#0284c7';
          ctx.fillRect(px, py, size, size);
        }

        if (waterDecorImg.complete && waterDecorImg.naturalWidth > 0) {
          const waveShift = Math.sin(this.animTime * 2.5 + (px + py) * 0.08) * 2;
          ctx.globalAlpha = 0.88;
          ctx.drawImage(waterDecorImg, px + waveShift, py, size, size);
          ctx.globalAlpha = 1.0;
        }

        // Destellos relucientes sobre el agua decorada
        const shimmer = (Math.sin(this.animTime * 4.5 + py * 0.15) + 1) * 0.5;
        if (shimmer > 0.7) {
          ctx.fillStyle = `rgba(255, 255, 255, ${(shimmer - 0.7) * 2.5})`;
          ctx.fillRect(px + 8, py + 6, 2, 2);
          ctx.fillRect(px + 20, py + 18, 2, 2);
        }
        break;
      }

      default:
        ctx.fillStyle = '#2d5a36';
        ctx.fillRect(px, py, size, size);
    }
  }

  // Dibujar montículos y mesetas orgánicas de pasto con profundidad y sombreado 2.5D (Requisito 1 y 7)
  drawPlateaus(plateaus, camera) {
    if (!plateaus || plateaus.length === 0) return;
    const ctx = this.ctx;

    plateaus.forEach(p => {
      const screenPos = camera.toScreen(p.x * this.tileSize, p.y * this.tileSize);
      const px = Math.floor(screenPos.x);
      const py = Math.floor(screenPos.y);
      const pw = p.w * this.tileSize;
      const ph = p.h * this.tileSize;

      // Descartar si está fuera de pantalla
      if (px + pw < -32 || px > this.canvas.width + 32 || py + ph < -32 || py > this.canvas.height + 32) return;

      // 1. Sombra ambiental elíptica bajo la colina
      ctx.fillStyle = 'rgba(10, 20, 15, 0.4)';
      ctx.beginPath();
      ctx.ellipse(px + pw / 2, py + ph + 2, pw / 2 + 4, 10, 0, 0, Math.PI * 2);
      ctx.fill();

      // 2. Acantilado frontal de pasto oscuro en relieve (Capa inferior de elevación)
      ctx.fillStyle = '#163e22';
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(px + 4, py + 8, pw - 8, ph - 6, 12);
      } else {
        ctx.rect(px + 4, py + 8, pw - 8, ph - 6);
      }
      ctx.fill();

      // Bisel inferior de profundidad
      ctx.fillStyle = '#0f2c18';
      ctx.fillRect(px + 8, py + ph - 6, pw - 16, 4);

      // 3. Meseta superior de pasto esmeralda vivo soleado
      ctx.fillStyle = '#2a723e';
      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(px + 4, py, pw - 8, ph - 14, 10);
      } else {
        ctx.rect(px + 4, py, pw - 8, ph - 14);
      }
      ctx.fill();

      // Brillo del borde superior bañado por el sol
      ctx.fillStyle = '#449f5c';
      ctx.fillRect(px + 8, py + 2, pw - 16, 3);

      // Mechones de briznas decorativas sobre la meseta
      ctx.fillStyle = '#68d388';
      ctx.fillRect(px + 12, py + 6, 3, 3);
      ctx.fillRect(px + pw - 18, py + 8, 3, 3);
      ctx.fillRect(px + pw / 2 - 2, py + 5, 4, 2);
    });
  }

  // Dibujar decoraciones independientes de la naturaleza
  drawDecoration(decor, px, py) {
    const ctx = this.ctx;
    const type = decor.type;
    const img = this.decorSprites[type];

    if (!img || !img.complete || img.naturalWidth <= 0) return;

    switch (type) {
      case 'arbol_grande':
        // Sombra de árbol grande
        ctx.fillStyle = 'rgba(0, 0, 0, 0.32)';
        ctx.beginPath();
        ctx.ellipse(px + 16, py + 34, 15, 6, 0, 0, Math.PI * 2);
        ctx.fill();
        // Árbol 32x42 dibujado sobre la casilla
        ctx.drawImage(img, px, py - 10, 32, 42);
        break;

      case 'arbol_pequeno':
        // Sombra de árbol pequeño
        ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
        ctx.beginPath();
        ctx.ellipse(px + 16, py + 30, 11, 5, 0, 0, Math.PI * 2);
        ctx.fill();
        // Árbol pequeño 20x35
        ctx.drawImage(img, px + 6, py - 3, 20, 35);
        break;

      case 'hongos':
        // Sombra sutil
        ctx.fillStyle = 'rgba(0, 0, 0, 0.22)';
        ctx.beginPath();
        ctx.ellipse(px + 16, py + 25, 7, 3, 0, 0, Math.PI * 2);
        ctx.fill();
        // Hongos 13x14
        ctx.drawImage(img, px + 10, py + 12, 14, 15);
        break;

      case 'llerva':
        // Hierba salvaje 14x14
        ctx.drawImage(img, px + 9, py + 12, 14, 14);
        break;

      case 'flores':
        // Flores mixtas 14x16
        ctx.drawImage(img, px + 9, py + 10, 15, 17);
        break;

      case 'flor_azul':
        // Flor azul 10x9
        ctx.drawImage(img, px + 11, py + 14, 11, 10);
        break;

      case 'flor_roja':
        // Rosa roja 12x11
        ctx.drawImage(img, px + 10, py + 13, 13, 12);
        break;

      case 'roca':
        // Sombra de roca
        ctx.fillStyle = 'rgba(0, 0, 0, 0.28)';
        ctx.beginPath();
        ctx.ellipse(px + 16, py + 25, 8, 4, 0, 0, Math.PI * 2);
        ctx.fill();
        // Roca 14x15
        ctx.drawImage(img, px + 9, py + 11, 15, 16);
        break;
    }
  }

  // Dibujar Jugador con los sprites recortados específicos
  // (jugador_quieto_* y jugador_caminando_*_1 / _2)
  drawPlayer(x, y, dir = 'down', isMoving = false, dt = 0) {
    const ctx = this.ctx;
    const px = Math.floor(x);
    const py = Math.floor(y);

    // Sombra suave bajo los pies del personaje
    ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
    ctx.beginPath();
    ctx.ellipse(px + 14, py + 30, 11, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    let spriteImg = null;
    const validDir = ['down', 'up', 'left', 'right'].includes(dir) ? dir : 'down';

    if (isMoving) {
      // Ciclo de caminata: alternar entre cuadro 1 y cuadro 2 a velocidad natural
      const walkStep = (Math.floor(this.animTime * 7) % 2);
      spriteImg = this.playerSprites.walk[validDir][walkStep];
    } else {
      // Reposo: sprite quieto mirando hacia la dirección
      spriteImg = this.playerSprites.idle[validDir];
    }

    if (spriteImg && spriteImg.complete && spriteImg.naturalWidth > 0) {
      // Dibujar con escalado nítido a 28x36 píxeles (2x del tamaño 14x18)
      ctx.drawImage(spriteImg, px, py - 6, 28, 36);
    } else {
      // Respaldo mientras termina la carga
      ctx.fillStyle = '#38bdf8';
      ctx.fillRect(px + 4, py + 4, 20, 24);
    }
  }

  // Dibujar Cofres con cofre_cerrado.png y cofre_abierto.png sin artefactos visuales
  drawChest(chest, px, py, isLocked = false) {
    const ctx = this.ctx;

    // Sombra sutil en la base del cofre
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.beginPath();
    ctx.ellipse(px + 16, py + 26, 11, 4, 0, 0, Math.PI * 2);
    ctx.fill();

    if (!chest.opened) {
      const closedImg = this.chestSprites.closed;
      if (closedImg.complete && closedImg.naturalWidth > 0) {
        ctx.drawImage(closedImg, px + 3, py + 4, 26, 26);
      } else {
        ctx.fillStyle = '#d97706';
        ctx.fillRect(px + 5, py + 6, 22, 20);
      }

      if (isLocked) {
        // Barrera mágica carmesí/púrpura indicando que el cofre está sellado por un jefe previo
        const lockPulse = (Math.sin(this.animTime * 4 + chest.id) + 1) * 0.5;
        ctx.strokeStyle = `rgba(239, 68, 68, ${0.4 + lockPulse * 0.4})`;
        ctx.lineWidth = 1.5;
        ctx.strokeRect(px + 4, py + 5, 24, 22);

        // Icono de candado pequeño sobre el cofre
        if (this.iconCandado && this.iconCandado.complete && this.iconCandado.naturalWidth > 0) {
          ctx.drawImage(this.iconCandado, px + 9, py - 6, 14, 14);
        } else {
          ctx.font = '10px sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText('🔒', px + 16, py + 3);
        }
      } else {
        // Destello sutil en la cerradura dorada (sin desbordar al suelo)
        const sparkle = (Math.sin(this.animTime * 6) + 1) * 0.5;
        if (sparkle > 0.45) {
          ctx.fillStyle = `rgba(255, 255, 220, ${sparkle * 0.9})`;
          ctx.fillRect(px + 15, py + 16, 2, 2);
        }
      }
    } else {
      // Cofre abierto mostrando el interior saqueado
      const openImg = this.chestSprites.open;
      if (openImg.complete && openImg.naturalWidth > 0) {
        ctx.drawImage(openImg, px + 3, py + 4, 26, 26);
      } else {
        ctx.fillStyle = '#78350f';
        ctx.fillRect(px + 5, py + 6, 22, 20);
      }
    }
  }

  // Dibujar Letrero / Cartel de Dato Curioso
  drawSign(sign, px, py) {
    const ctx = this.ctx;
    ctx.fillStyle = '#78350f';
    ctx.fillRect(px + 14, py + 14, 4, 16);
    ctx.fillStyle = '#d97706';
    ctx.fillRect(px + 5, py + 6, 22, 14);
    ctx.fillStyle = '#fef3c7';
    ctx.fillRect(px + 7, py + 8, 18, 10);
    ctx.fillStyle = '#92400e';
    ctx.font = 'bold 8px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('JAVA', px + 16, py + 16);
  }

  // Dibujar los 20 Jefes usando 'assets/images/enemigo{id}.png' (16x16)
  drawBoss(boss, px, py, isDefeated = false, isLocked = false) {
    const ctx = this.ctx;
    const hover = Math.sin(this.animTime * 3.5 + boss.id) * 3;
    const by = py + hover;

    ctx.save();

    // Sombra
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.beginPath();
    ctx.ellipse(px + 16, py + 28, 14, 6, 0, 0, Math.PI * 2);
    ctx.fill();

    if (isDefeated) {
      ctx.globalAlpha = 0.4;
      ctx.fillStyle = '#94a3b8';
      ctx.fillRect(px + 6, py + 10, 20, 20);
      ctx.restore();
      return;
    }

    // Aura mágica según el nivel de dificultad o aura de bloqueo si está sellado
    const auraPulse = (Math.sin(this.animTime * 4 + boss.id) + 1) * 0.5;
    ctx.fillStyle = isLocked ? '#ef4444' : boss.color;
    ctx.globalAlpha = isLocked ? (0.2 + auraPulse * 0.25) : (0.15 + auraPulse * 0.2);
    ctx.beginPath();
    ctx.arc(px + 16, by + 14, 18, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1.0;

    // Dibujar sprite real del enemigo (16x16 escalado a 32x32)
    const bossImg = this.bossImgs[boss.id];
    if (bossImg && bossImg.complete && bossImg.naturalWidth > 0) {
      if (isLocked) {
        ctx.filter = 'grayscale(40%) brightness(0.85)';
      }
      ctx.drawImage(bossImg, px, by - 2, 32, 32);
      ctx.filter = 'none';
    } else {
      ctx.fillStyle = boss.color;
      ctx.fillRect(px + 6, by + 4, 20, 20);
    }

    // Badge de Nivel flotante o Candado
    ctx.fillStyle = '#1e1b4b';
    const badgeW = isLocked ? 34 : 28;
    const badgeX = px + 16 - badgeW / 2;
    ctx.fillRect(badgeX, by - 13, badgeW, 11);
    ctx.strokeStyle = isLocked ? '#ef4444' : boss.color;
    ctx.lineWidth = 1.5;
    ctx.strokeRect(badgeX, by - 13, badgeW, 11);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 7px monospace';
    if (isLocked) {
      if (this.iconCandado && this.iconCandado.complete && this.iconCandado.naturalWidth > 0) {
        ctx.drawImage(this.iconCandado, badgeX + 2, by - 12, 9, 9);
        ctx.textAlign = 'left';
        ctx.fillText(`LV ${boss.level}`, badgeX + 13, by - 5);
      } else {
        ctx.textAlign = 'center';
        ctx.fillText(`🔒 LV ${boss.level}`, px + 16, by - 5);
      }
    } else {
      ctx.textAlign = 'center';
      ctx.fillText(`LVL ${boss.level}`, px + 16, by - 5);
    }

    ctx.restore();
  }

  // Indicador interactivo "[E]" con soporte para iconos pixel art (candado, medalla, etc.)
  drawInteractPrompt(px, py, text = "[E] Interactuar", iconType = null) {
    const ctx = this.ctx;
    const bounce = Math.sin(this.animTime * 6) * 3;

    ctx.save();
    ctx.font = 'bold 8.5px monospace';
    const textW = ctx.measureText(text).width;

    let iconImg = null;
    if (iconType === 'candado') iconImg = this.iconCandado;
    else if (iconType === 'objetivo') iconImg = this.iconObjetivo;
    else if (iconType === 'medalla') iconImg = createPixelImage('assets/icons/medalla.png');

    const iconW = (iconImg && iconImg.complete && iconImg.naturalWidth > 0) ? 12 : 0;
    const totalW = textW + (iconW ? iconW + 6 : 0) + 16;
    const boxX = px + 16 - totalW / 2;
    const boxY = py - 20 + bounce;

    ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
    ctx.fillRect(boxX, boxY, totalW, 16);
    ctx.strokeStyle = '#fbbf24';
    ctx.lineWidth = 1.5;
    ctx.strokeRect(boxX, boxY, totalW, 16);

    let drawTextX = px + 16;
    if (iconW) {
      const iconX = boxX + 6;
      ctx.drawImage(iconImg, iconX, boxY + 2, 12, 12);
      drawTextX = iconX + 16 + textW / 2;
    }

    ctx.fillStyle = '#fef08a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, drawTextX, boxY + 8);
    ctx.restore();
  }

  // Guía visual de flechas hacia el próximo Jefe (Brújula y Waypoint)
  drawBossGuide(playerScreenPos, targetBoss, camera, playerWorldX, playerWorldY) {
    if (!targetBoss || !targetBoss.position) return;
    const ctx = this.ctx;

    // Coordenadas mundiales del héroe y del jefe objetivo
    const pwx = playerWorldX + 14;
    const pwy = playerWorldY + 16;
    const bwx = targetBoss.position.x * 32 + 16;
    const bwy = targetBoss.position.y * 32 + 16;

    const dx = bwx - pwx;
    const dy = bwy - pwy;
    const distPx = Math.hypot(dx, dy);
    const distTiles = Math.round(distPx / 32);
    const angle = Math.atan2(dy, dx);

    // Centro del jugador en pantalla
    const scx = playerScreenPos.x + 14;
    const scy = playerScreenPos.y + 16;

    // 1. Flecha mágica orbital alrededor del héroe
    const pulse = (Math.sin(this.animTime * 5) + 1) * 0.5;
    const orbitR = 36 + pulse * 4;
    const arrowX = scx + Math.cos(angle) * orbitR;
    const arrowY = scy + Math.sin(angle) * orbitR;

    ctx.save();
    ctx.translate(arrowX, arrowY);
    ctx.rotate(angle);

    // Resplandor dorado
    ctx.shadowColor = 'rgba(251, 191, 36, 0.85)';
    ctx.shadowBlur = 10;

    // Flecha dorada
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.moveTo(9, 0);
    ctx.lineTo(-7, -7);
    ctx.lineTo(-3, 0);
    ctx.lineTo(-7, 7);
    ctx.closePath();
    ctx.fill();

    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 1.2;
    ctx.stroke();
    ctx.restore();

    // 2. Destellos rúnicos en el sendero inmediato (rastro de guía)
    if (distPx > 70) {
      for (let i = 1; i <= 3; i++) {
        const dotR = orbitR + i * 14 + (this.animTime * 22) % 14;
        const dotX = scx + Math.cos(angle) * dotR;
        const dotY = scy + Math.sin(angle) * dotR;
        const dotAlpha = Math.max(0, 0.8 - (i * 0.22));

        ctx.save();
        ctx.fillStyle = `rgba(254, 240, 138, ${dotAlpha})`;
        ctx.shadowColor = 'rgba(245, 158, 11, 0.8)';
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(dotX, dotY, 2.2 - i * 0.4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // 3. Indicador de baliza en los bordes de la pantalla si el jefe está fuera de vista
    const bossScreenPos = camera.toScreen(bwx, bwy);
    const canvasW = this.canvas.width;
    const canvasH = this.canvas.height;
    const isOffScreen = bossScreenPos.x < 40 || bossScreenPos.x > canvasW - 40 || bossScreenPos.y < 70 || bossScreenPos.y > canvasH - 40;

    if (isOffScreen && distTiles > 4) {
      const marginX = 85;
      const marginY = 65;
      const midX = canvasW / 2;
      const midY = canvasH / 2;

      const edgeX = Math.max(marginX, Math.min(canvasW - marginX, midX + Math.cos(angle) * (canvasW * 0.42)));
      const edgeY = Math.max(marginY, Math.min(canvasH - 35, midY + Math.sin(angle) * (canvasH * 0.38)));

      ctx.save();
      // Caja de la baliza
      const textOnly = `Jefe ${targetBoss.id}: ${targetBoss.name} (${distTiles}m)`;
      ctx.font = 'bold 8.5px monospace';
      const textWidth = ctx.measureText(textOnly).width;
      const iconSize = 13;
      const spacing = 5;
      const badgeW = textWidth + iconSize + spacing + 18;
      const badgeH = 20;

      ctx.fillStyle = 'rgba(15, 23, 42, 0.94)';
      ctx.strokeStyle = targetBoss.color || '#f59e0b';
      ctx.lineWidth = 1.8;
      ctx.shadowColor = targetBoss.color || '#f59e0b';
      ctx.shadowBlur = 10;

      // Rectángulo redondeado
      ctx.beginPath();
      ctx.roundRect(edgeX - badgeW / 2, edgeY - badgeH / 2, badgeW, badgeH, 6);
      ctx.fill();
      ctx.stroke();

      // Icono pixel de objetivo y texto
      ctx.shadowBlur = 0;
      const startX = edgeX - badgeW / 2 + 8;
      if (this.iconObjetivo && this.iconObjetivo.complete && this.iconObjetivo.naturalWidth > 0) {
        ctx.drawImage(this.iconObjetivo, startX, edgeY - iconSize / 2, iconSize, iconSize);
      }
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(textOnly, startX + iconSize + spacing, edgeY);
      ctx.restore();
    }
  }
}
