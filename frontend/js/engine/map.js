// Generador y Gestor del Mundo Abierto de Code Quest
class WorldMap {
  constructor() {
    this.width = 64; // 64 columnas
    this.height = 64; // 64 filas
    this.tileSize = 32;
    this.tiles = [];
    this.chests = [];
    this.signs = [...SIGNS_DATA];
    this.bosses = [...BOSSES_DATA];
    this.plateaus = [];
    this.decorations = [];
    this.vegetation = this.decorations;

    this.initTerrain();
    this.initVegetation();
    this.initChests();
  }

  // Generar terreno con biomas medievales
  initTerrain() {
    this.tiles = Array.from({ length: this.height }, () => Array(this.width).fill(0));

    // 1. Bordes exteriores del mapa: 2 capas de árbol grande impenetrable (Requisito 4)
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (x <= 1 || x >= this.width - 2 || y <= 1 || y >= this.height - 2) {
          this.tiles[y][x] = 4; // arbol_grande.png
        }
      }
    }

    const fillRect = (x1, y1, w, h, val) => {
      for (let y = y1; y < y1 + h; y++) {
        for (let x = x1; x < x1 + w; x++) {
          if (x >= 2 && x < this.width - 2 && y >= 2 && y < this.height - 2) {
            this.tiles[y][x] = val;
          }
        }
      }
    };

    // 2. Plaza Central (Pueblo del Compilador)
    fillRect(28, 28, 8, 8, 1);

    // 3. Avenidas Principales desde la plaza hacia los 4 cuadrantes
    fillRect(31, 15, 2, 13, 1); // Avenida Norte
    fillRect(31, 36, 2, 13, 1); // Avenida Sur
    fillRect(15, 31, 13, 2, 1); // Avenida Oeste
    fillRect(36, 31, 13, 2, 1); // Avenida Este

    // 4. Arenas de los 20 Jefes (Requisito 3)
    const arenas = [
      // Cuadrante 1: Noroeste (Jefes 1-5)
      { id: 1, x: 8, y: 8, w: 5, h: 5 },
      { id: 2, x: 22, y: 8, w: 5, h: 5 },
      { id: 3, x: 8, y: 22, w: 5, h: 5 },
      { id: 4, x: 22, y: 22, w: 5, h: 5 },
      { id: 5, x: 15, y: 15, w: 5, h: 5 },

      // Cuadrante 2: Noreste (Jefes 6-10)
      { id: 6, x: 41, y: 8, w: 5, h: 5 },
      { id: 7, x: 55, y: 8, w: 5, h: 5 },
      { id: 8, x: 41, y: 22, w: 5, h: 5 },
      { id: 9, x: 55, y: 22, w: 5, h: 5 },
      { id: 10, x: 48, y: 15, w: 5, h: 5 },

      // Cuadrante 3: Suroeste (Jefes 11-15)
      { id: 11, x: 8, y: 41, w: 5, h: 5 },
      { id: 12, x: 22, y: 41, w: 5, h: 5 },
      { id: 13, x: 8, y: 55, w: 5, h: 5 },
      { id: 14, x: 22, y: 55, w: 5, h: 5 },
      { id: 15, x: 15, y: 48, w: 5, h: 5 },

      // Cuadrante 4: Sureste (Jefes 16-20)
      { id: 16, x: 41, y: 41, w: 5, h: 5 },
      { id: 17, x: 55, y: 41, w: 5, h: 5 },
      { id: 18, x: 41, y: 55, w: 5, h: 5 },
      { id: 19, x: 55, y: 55, w: 5, h: 5 },
      { id: 20, x: 48, y: 48, w: 7, h: 7 } // Gran Arena del Jefe 20 (tierra_relleno.png)
    ];

    arenas.forEach(a => {
      const t = a.tile || 1;
      const startX = a.x - Math.floor(a.w / 2);
      const startY = a.y - Math.floor(a.h / 2);
      fillRect(startX, startY, a.w, a.h, t);
    });

    // 5. Caminos empedrados con tierra_relleno.png conectando a cada jefe (Requisitos 1 y 3)
    // Red Noroeste (Jefes 1-5):
    fillRect(14, 8, 2, 24, 1);
    fillRect(8, 7, 15, 2, 1);
    fillRect(8, 21, 15, 2, 1);

    // Red Noreste (Jefes 6-10):
    fillRect(47, 8, 2, 24, 1);
    fillRect(41, 7, 15, 2, 1);
    fillRect(41, 21, 15, 2, 1);

    // Red Suroeste (Jefes 11-15):
    fillRect(14, 31, 2, 25, 1);
    fillRect(8, 40, 15, 2, 1);
    fillRect(8, 54, 15, 2, 1);

    // Red Sureste (Jefes 16-20):
    fillRect(47, 31, 2, 25, 1); // Camino vertical continuo que conecta Jefes 16, 17, 20, 18 y 19
    fillRect(41, 40, 15, 2, 1);
    fillRect(41, 54, 15, 2, 1);

    // 6. Cuerpos de Agua Orgánicos: Lagos con formas naturales y Ríos que cruzan el reino
    // Helper: Lago orgánico con variación sinusoidal para orillas naturales y curvas
    const addOrganicLake = (cx, cy, rx, ry, seed = 0) => {
      for (let y = Math.max(2, Math.floor(cy - ry - 2)); y <= Math.min(this.height - 3, Math.ceil(cy + ry + 2)); y++) {
        for (let x = Math.max(2, Math.floor(cx - rx - 2)); x <= Math.min(this.width - 3, Math.ceil(cx + rx + 2)); x++) {
          const dx = (x - cx) / rx;
          const dy = (y - cy) / ry;
          const angle = Math.atan2(dy, dx);
          const noise = Math.sin(angle * 3 + seed) * 0.22 + Math.cos(angle * 2 - seed) * 0.16;
          const dist = Math.hypot(dx, dy);
          if (dist <= 1.0 + noise) {
            // Mantener al menos 2 casillas de distancia de caminos y arenas
            let nearRoad = false;
            for (let checkY = Math.max(0, y - 2); checkY <= Math.min(this.height - 1, y + 2); checkY++) {
              for (let checkX = Math.max(0, x - 2); checkX <= Math.min(this.width - 1, x + 2); checkX++) {
                if (this.tiles[checkY][checkX] === 1) {
                  nearRoad = true;
                  break;
                }
              }
              if (nearRoad) break;
            }
            if (!nearRoad && this.tiles[y][x] === 0) {
              // Núcleo central con ondas de agua_decorada (7), orillas con agua profunda (3)
              this.tiles[y][x] = (dist < 0.58) ? 7 : 3;
            }
          }
        }
      }
    };

    // Helper: Río sinuoso continuo que fluye a través del reino
    const addMeanderingRiver = (points, width = 2) => {
      for (let i = 0; i < points.length - 1; i++) {
        const p0 = points[i];
        const p1 = points[i + 1];
        const steps = Math.ceil(Math.hypot(p1.x - p0.x, p1.y - p0.y) * 2.5);
        for (let s = 0; s <= steps; s++) {
          const t = s / steps;
          const cx = p0.x + (p1.x - p0.x) * t;
          const cy = p0.y + (p1.y - p0.y) * t;
          for (let dy = -Math.floor(width / 2); dy <= Math.ceil(width / 2); dy++) {
            for (let dx = -Math.floor(width / 2); dx <= Math.ceil(width / 2); dx++) {
              const tx = Math.floor(cx + dx);
              const ty = Math.floor(cy + dy);
              if (tx >= 2 && tx < this.width - 2 && ty >= 2 && ty < this.height - 2) {
                // Solo transforma pasto en agua; los caminos (1) se conservan intactos como PUENTES
                if (this.tiles[ty][tx] === 0) {
                  this.tiles[ty][tx] = ((tx + ty) % 3 === 0) ? 7 : 3;
                }
              }
            }
          }
        }
      }
    };

    // A. Grandes Lagos Orgánicos en los cuatro extremos del mapa
    addOrganicLake(5, 14, 3.8, 5.2, 1.2);   // Gran Laguna de las Ninfas (Extremo Noroeste)
    addOrganicLake(59, 14, 3.8, 5.2, 2.5);  // Gran Lago Esmeralda (Extremo Noreste)
    addOrganicLake(5, 48, 3.8, 5.2, 0.8);   // Laguna Sagrada del Bosque (Extremo Suroeste)
    addOrganicLake(59, 48, 3.8, 5.2, 3.1);  // Bahía del Océano Oriental (Extremo Sureste)

    // B. Estanques naturales en los valles norte y sur
    addOrganicLake(23, 4, 3.5, 2.6, 1.7);   // Estanque del Bosque Norte
    addOrganicLake(39, 4, 3.5, 2.6, 2.3);   // Estanque del Bosque Noreste
    addOrganicLake(23, 60, 3.5, 2.6, 0.9);  // Laguna Escondida del Sur
    addOrganicLake(39, 60, 3.5, 2.6, 2.8);  // Laguna Escondida del Sureste

    // C. Río del Norte: Nace en el oeste, serpentea por el bosque, cruza bajo el Puente Norte y desemboca en el este
    addMeanderingRiver([
      { x: 3, y: 26 }, { x: 8, y: 26 }, { x: 13, y: 25 }, { x: 19, y: 26 },
      { x: 25, y: 26 }, { x: 31, y: 26 }, { x: 37, y: 26 }, { x: 43, y: 25 },
      { x: 49, y: 26 }, { x: 55, y: 26 }, { x: 61, y: 26 }
    ], 2);

    // D. Río del Sur: Serpentea entre los valles del sur, pasa bajo el Puente Sur y cruza todo el continente
    addMeanderingRiver([
      { x: 3, y: 37 }, { x: 8, y: 37 }, { x: 13, y: 38 }, { x: 19, y: 37 },
      { x: 25, y: 37 }, { x: 31, y: 37 }, { x: 37, y: 37 }, { x: 43, y: 38 },
      { x: 49, y: 37 }, { x: 55, y: 37 }, { x: 61, y: 37 }
    ], 2);

    // 7. Delimitar caminos y salas con roca.png (tile 2) con colisión sólida (Requisito 2)
    // Cualquier casilla de pasto (0) adyacente a un camino o sala (1 o 5) se convierte en roca
    const toRock = [];
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (this.tiles[y][x] === 0) {
          let adjPath = false;
          for (let dy = -1; dy <= 1; dy++) {
            for (let dx = -1; dx <= 1; dx++) {
              const nx = x + dx;
              const ny = y + dy;
              if (nx >= 0 && nx < this.width && ny >= 0 && ny < this.height) {
                if (this.tiles[ny][nx] === 1 || this.tiles[ny][nx] === 5) {
                  adjPath = true;
                  break;
                }
              }
            }
            if (adjPath) break;
          }
          if (adjPath) {
            toRock.push({ x, y });
          }
        }
      }
    }
    toRock.forEach(p => { this.tiles[p.y][p.x] = 2; });

    // 8. Mesetas elevadas de pasto con bordes encajados (Requisito 7)
    this.plateaus = [
      { x: 24, y: 14, w: 4, h: 3 },
      { x: 36, y: 14, w: 4, h: 3 },
      { x: 24, y: 47, w: 4, h: 3 },
      { x: 36, y: 47, w: 4, h: 3 }
    ];
  }

  // Elementos de vegetación estáticos y no superpuestos (Requisito 5)
  initVegetation() {
    this.decorations = [];
    const used = new Set();
    const add = (type, x, y) => {
      const key = `${x},${y}`;
      if (!used.has(key) && this.tiles[y] && this.tiles[y][x] === 0) {
        used.add(key);
        this.decorations.push({ type, x, y });
      }
    };

    // 1. Árboles pequeños (arbol_pequeno.png) en praderas
    [
      { x: 4, y: 4 }, { x: 18, y: 4 }, { x: 26, y: 4 }, { x: 37, y: 4 }, { x: 45, y: 4 }, { x: 59, y: 4 },
      { x: 4, y: 11 }, { x: 26, y: 11 }, { x: 37, y: 11 }, { x: 59, y: 11 },
      { x: 4, y: 19 }, { x: 26, y: 19 }, { x: 37, y: 19 }, { x: 59, y: 19 },
      { x: 4, y: 38 }, { x: 26, y: 38 }, { x: 37, y: 38 }, { x: 59, y: 38 },
      { x: 4, y: 44 }, { x: 26, y: 44 }, { x: 37, y: 44 }, { x: 59, y: 44 },
      { x: 4, y: 59 }, { x: 18, y: 59 }, { x: 26, y: 59 }, { x: 37, y: 59 }, { x: 45, y: 59 }, { x: 59, y: 59 }
    ].forEach(p => add('arbol_pequeno', p.x, p.y));

    // 2. Hongos (hongos.png)
    [
      { x: 5, y: 5 }, { x: 17, y: 5 }, { x: 25, y: 5 }, { x: 38, y: 5 }, { x: 46, y: 5 }, { x: 58, y: 5 },
      { x: 5, y: 25 }, { x: 25, y: 25 }, { x: 38, y: 25 }, { x: 58, y: 25 },
      { x: 5, y: 39 }, { x: 25, y: 39 }, { x: 38, y: 39 }, { x: 58, y: 39 },
      { x: 5, y: 58 }, { x: 17, y: 58 }, { x: 25, y: 58 }, { x: 38, y: 58 }, { x: 46, y: 58 }, { x: 58, y: 58 }
    ].forEach(p => add('hongos', p.x, p.y));

    // 3. Hierba salvaje alta (llerva.png)
    [
      { x: 6, y: 4 }, { x: 16, y: 4 }, { x: 24, y: 4 }, { x: 39, y: 4 }, { x: 47, y: 4 }, { x: 57, y: 4 },
      { x: 6, y: 12 }, { x: 25, y: 12 }, { x: 38, y: 12 }, { x: 57, y: 12 },
      { x: 6, y: 20 }, { x: 25, y: 20 }, { x: 38, y: 20 }, { x: 57, y: 20 },
      { x: 6, y: 37 }, { x: 25, y: 37 }, { x: 38, y: 37 }, { x: 57, y: 37 },
      { x: 6, y: 45 }, { x: 25, y: 45 }, { x: 38, y: 45 }, { x: 57, y: 45 },
      { x: 6, y: 58 }, { x: 16, y: 58 }, { x: 24, y: 58 }, { x: 39, y: 58 }, { x: 47, y: 58 }, { x: 57, y: 58 }
    ].forEach(p => add('llerva', p.x, p.y));

    // 4. Parches de flores mixtas (flores.png)
    [
      { x: 12, y: 4 }, { x: 20, y: 4 }, { x: 43, y: 4 }, { x: 51, y: 4 },
      { x: 12, y: 12 }, { x: 51, y: 12 }, { x: 12, y: 20 }, { x: 51, y: 20 },
      { x: 12, y: 37 }, { x: 51, y: 37 }, { x: 12, y: 45 }, { x: 51, y: 45 },
      { x: 12, y: 58 }, { x: 20, y: 58 }, { x: 43, y: 58 }, { x: 51, y: 58 }
    ].forEach(p => add('flores', p.x, p.y));

    // 5. Flores azules místicas (flor_azul.png)
    [
      { x: 5, y: 15 }, { x: 27, y: 15 }, { x: 36, y: 15 }, { x: 58, y: 15 },
      { x: 5, y: 48 }, { x: 27, y: 48 }, { x: 36, y: 48 }, { x: 58, y: 48 },
      { x: 15, y: 4 }, { x: 48, y: 4 }, { x: 15, y: 58 }, { x: 48, y: 58 }
    ].forEach(p => add('flor_azul', p.x, p.y));

    // 6. Rosas rojas de pradera (flor_roja.png)
    [
      { x: 5, y: 16 }, { x: 27, y: 16 }, { x: 36, y: 16 }, { x: 58, y: 16 },
      { x: 5, y: 49 }, { x: 27, y: 49 }, { x: 36, y: 49 }, { x: 58, y: 49 },
      { x: 13, y: 5 }, { x: 50, y: 5 }, { x: 13, y: 57 }, { x: 50, y: 57 }
    ].forEach(p => add('flor_roja', p.x, p.y));

    this.vegetation = this.decorations;
  }

  // Cofres repartidos a lo largo de caminos, plazas y salas de jefes
  initChests() {
    const chestCoords = [
      // Plaza Central (Pueblo del Compilador) - Zona inicial libre
      { x: 29, y: 29, item: 'key', bossId: null, requiredBoss: 0 },
      { x: 34, y: 29, item: 'sword', bossId: null, requiredBoss: 0 },
      { x: 29, y: 34, item: 'potion', bossId: null, requiredBoss: 0 },
      { x: 34, y: 34, item: 'key', bossId: null, requiredBoss: 0 },
      { x: 30, y: 32, item: 'key', bossId: null, requiredBoss: 0 },
      { x: 33, y: 32, item: 'key', bossId: null, requiredBoss: 0 },

      // Cuadrante 1: Noroeste (Jefes 1-5)
      { x: 7, y: 7, item: 'key', bossId: 1, requiredBoss: 0 },
      { x: 9, y: 7, item: 'sword', bossId: 1, requiredBoss: 0 },
      { x: 21, y: 7, item: 'key', bossId: 2, requiredBoss: 1 },
      { x: 23, y: 7, item: 'potion', bossId: 2, requiredBoss: 1 },
      { x: 7, y: 21, item: 'key', bossId: 3, requiredBoss: 2 },
      { x: 9, y: 21, item: 'sword', bossId: 3, requiredBoss: 2 },
      { x: 21, y: 21, item: 'key', bossId: 4, requiredBoss: 3 },
      { x: 23, y: 21, item: 'potion', bossId: 4, requiredBoss: 3 },
      { x: 14, y: 14, item: 'key', bossId: 5, requiredBoss: 4 },
      { x: 16, y: 14, item: 'sword', bossId: 5, requiredBoss: 4 },

      // Cuadrante 2: Noreste (Jefes 6-10)
      { x: 40, y: 7, item: 'key', bossId: 6, requiredBoss: 5 },
      { x: 42, y: 7, item: 'potion', bossId: 6, requiredBoss: 5 },
      { x: 54, y: 7, item: 'key', bossId: 7, requiredBoss: 6 },
      { x: 56, y: 7, item: 'sword', bossId: 7, requiredBoss: 6 },
      { x: 40, y: 21, item: 'key', bossId: 8, requiredBoss: 7 },
      { x: 42, y: 21, item: 'potion', bossId: 8, requiredBoss: 7 },
      { x: 54, y: 21, item: 'key', bossId: 9, requiredBoss: 8 },
      { x: 56, y: 21, item: 'sword', bossId: 9, requiredBoss: 8 },
      { x: 47, y: 14, item: 'key', bossId: 10, requiredBoss: 9 },
      { x: 49, y: 14, item: 'potion', bossId: 10, requiredBoss: 9 },

      // Cuadrante 3: Suroeste (Jefes 11-15)
      { x: 7, y: 40, item: 'key', bossId: 11, requiredBoss: 10 },
      { x: 9, y: 40, item: 'sword', bossId: 11, requiredBoss: 10 },
      { x: 21, y: 40, item: 'key', bossId: 12, requiredBoss: 11 },
      { x: 23, y: 40, item: 'potion', bossId: 12, requiredBoss: 11 },
      { x: 7, y: 54, item: 'key', bossId: 13, requiredBoss: 12 },
      { x: 9, y: 54, item: 'sword', bossId: 13, requiredBoss: 12 },
      { x: 21, y: 54, item: 'key', bossId: 14, requiredBoss: 13 },
      { x: 23, y: 54, item: 'potion', bossId: 14, requiredBoss: 13 },
      { x: 14, y: 47, item: 'key', bossId: 15, requiredBoss: 14 },
      { x: 16, y: 47, item: 'sword', bossId: 15, requiredBoss: 14 },

      // Cuadrante 4: Sureste (Jefes 16-20)
      { x: 40, y: 40, item: 'key', bossId: 16, requiredBoss: 15 },
      { x: 42, y: 40, item: 'sword', bossId: 16, requiredBoss: 15 },
      { x: 54, y: 40, item: 'key', bossId: 17, requiredBoss: 16 },
      { x: 56, y: 40, item: 'potion', bossId: 17, requiredBoss: 16 },
      { x: 40, y: 54, item: 'key', bossId: 18, requiredBoss: 17 },
      { x: 42, y: 54, item: 'sword', bossId: 18, requiredBoss: 17 },
      { x: 54, y: 54, item: 'key', bossId: 19, requiredBoss: 18 },
      { x: 56, y: 54, item: 'potion', bossId: 19, requiredBoss: 18 },
      { x: 46, y: 46, item: 'sword', bossId: 20, requiredBoss: 19 },
      { x: 50, y: 46, item: 'potion', bossId: 20, requiredBoss: 19 },
      { x: 46, y: 50, item: 'key', bossId: 20, requiredBoss: 19 },
      { x: 50, y: 50, item: 'key', bossId: 20, requiredBoss: 19 }
    ];

    this.chests = chestCoords.map((c, index) => ({
      id: index + 1,
      x: c.x,
      y: c.y,
      item: c.item,
      bossId: c.bossId || null,
      requiredBoss: c.requiredBoss || 0,
      opened: false
    }));
  }

  getChestsState() {
    return (this.chests || []).map(c => ({ id: c.id, opened: !!c.opened }));
  }

  restoreChests(savedStates) {
    if (!savedStates || !Array.isArray(savedStates)) return;
    const stateMap = new Map(savedStates.map(s => [s.id, s.opened]));
    (this.chests || []).forEach(c => {
      if (stateMap.has(c.id)) {
        c.opened = !!stateMap.get(c.id);
      }
    });
  }

  // Obtener tiles vecinos para transiciones
  getTileNeighbors(col, row) {
    const getT = (x, y) => (x >= 0 && x < this.width && y >= 0 && y < this.height) ? this.tiles[y][x] : -1;
    return {
      up: getT(col, row - 1),
      down: getT(col, row + 1),
      left: getT(col - 1, row),
      right: getT(col + 1, row),
      upLeft: getT(col - 1, row - 1),
      upRight: getT(col + 1, row - 1),
      downLeft: getT(col - 1, row + 1),
      downRight: getT(col + 1, row + 1)
    };
  }

  // Comprobar colisión para movimiento (x, y en coordenadas de tile)
  // Requisito 2: Las rocas (2) delimitan los caminos e impiden salir del camino
  // Requisito 4: Los árboles grandes (4) delimitan el borde exterior e impiden salir
  // Requisito 6: Los cuerpos de agua (3 y 7) son impenetrables
  isSolid(tileX, tileY) {
    if (tileX < 0 || tileX >= this.width || tileY < 0 || tileY >= this.height) {
      return true;
    }
    const tile = this.tiles[tileY][tileX];
    // Sólidos: 2 = Muro de roca, 3 = Agua, 4 = Árbol perimetral, 7 = Agua decorada
    return tile === 2 || tile === 3 || tile === 4 || tile === 7;
  }

  // Buscar objeto cercano con el que interactuar
  getNearbyEntity(playerX, playerY) {
    const pTileX = playerX / this.tileSize;
    const pTileY = playerY / this.tileSize;
    const interactRange = 1.35;

    // 1. Revisar letreros
    for (const sign of this.signs) {
      const dist = Math.hypot(sign.position.x - pTileX, sign.position.y - pTileY);
      if (dist <= interactRange) {
        return { type: 'sign', data: sign };
      }
    }

    // 2. Revisar cofres no abiertos
    for (const chest of this.chests) {
      if (!chest.opened) {
        const dist = Math.hypot(chest.x - pTileX, chest.y - pTileY);
        if (dist <= interactRange) {
          return { type: 'chest', data: chest };
        }
      }
    }

    // 3. Revisar jefes
    for (const boss of this.bosses) {
      const dist = Math.hypot(boss.position.x - pTileX, boss.position.y - pTileY);
      if (dist <= interactRange) {
        return { type: 'boss', data: boss };
      }
    }

    return null;
  }
}
