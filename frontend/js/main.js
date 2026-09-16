// Sistema de Lluvia de Medallas Animada para la Gran Victoria Final (Fin del Juego)
class MedalsRainSystem {
  constructor() {
    this.canvas = document.getElementById('medals-rain-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.sparkles = [];
    this.isRunning = false;
    this.animReq = null;
    this.medalImages = {};
    this.preloadMedalImages();

    window.addEventListener('resize', () => {
      if (this.isRunning) this.resizeCanvas();
    });
  }

  preloadMedalImages() {
    for (let i = 1; i <= 20; i++) {
      const img = new Image();
      img.src = `assets/images/medalla${i}.png`;
      this.medalImages[i] = img;
    }
  }

  resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  start(playerMedals = []) {
    if (!this.canvas) return;
    this.stop();
    this.resizeCanvas();
    this.isRunning = true;
    this.particles = [];
    this.sparkles = [];

    // Usar las medallas obtenidas o el set completo de 1 a 20
    const availableIds = (playerMedals && playerMedals.length > 0)
      ? playerMedals.map(m => m.bossId)
      : Array.from({ length: 20 }, (_, i) => i + 1);

    const count = Math.min(50, Math.max(30, Math.floor(window.innerWidth / 28)));

    for (let i = 0; i < count; i++) {
      this.particles.push(this.createParticle(availableIds, true));
    }

    // Chispas doradas de celebración
    for (let i = 0; i < 40; i++) {
      this.sparkles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        size: Math.random() * 4 + 2,
        speedY: Math.random() * 60 + 40,
        speedX: (Math.random() - 0.5) * 40,
        color: ['#fef08a', '#fbbf24', '#f59e0b', '#38bdf8', '#4ade80'][Math.floor(Math.random() * 5)],
        alpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 4 + 2
      });
    }

    this.lastTime = performance.now();
    this.loop();
  }

  createParticle(availableIds, initial = false) {
    const id = availableIds[Math.floor(Math.random() * availableIds.length)];
    const w = this.canvas.width;
    const h = this.canvas.height;
    return {
      medalId: id,
      x: Math.random() * (w + 40) - 20,
      baseX: Math.random() * (w + 40) - 20,
      y: initial ? Math.random() * (h + 80) - 80 : -60 - Math.random() * 100,
      speedY: Math.random() * 120 + 90,
      swaySpeed: Math.random() * 2 + 1.2,
      swayAmp: Math.random() * 25 + 15,
      swayOffset: Math.random() * Math.PI * 2,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 2.2,
      size: Math.random() * 14 + 32, // 32 a 46 píxeles
      alpha: Math.random() * 0.2 + 0.8
    };
  }

  stop() {
    this.isRunning = false;
    if (this.animReq) {
      cancelAnimationFrame(this.animReq);
      this.animReq = null;
    }
    if (this.ctx && this.canvas) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }

  loop() {
    if (!this.isRunning) return;
    const now = performance.now();
    const dt = Math.min(0.1, (now - this.lastTime) / 1000);
    this.lastTime = now;

    this.update(dt, now / 1000);
    this.draw(now / 1000);

    this.animReq = requestAnimationFrame(() => this.loop());
  }

  update(dt, time) {
    const w = this.canvas.width;
    const h = this.canvas.height;
    const availableIds = Array.from({ length: 20 }, (_, i) => i + 1);

    for (const p of this.particles) {
      p.y += p.speedY * dt;
      p.rotation += p.rotationSpeed * dt;
      p.x = p.baseX + Math.sin(time * p.swaySpeed + p.swayOffset) * p.swayAmp;

      if (p.y > h + 60) {
        Object.assign(p, this.createParticle(availableIds, false));
      }
    }

    for (const s of this.sparkles) {
      s.y += s.speedY * dt;
      s.x += s.speedX * dt;
      if (s.y > h + 20) {
        s.y = -10;
        s.x = Math.random() * w;
      }
    }
  }

  draw(time) {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    ctx.imageSmoothingEnabled = false;

    // Dibujar chispas doradas mágicas
    for (const s of this.sparkles) {
      const alpha = s.alpha * (0.6 + 0.4 * Math.sin(time * s.twinkleSpeed));
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.fillStyle = s.color;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size * 0.5, 0, Math.PI * 2);
      ctx.fill();
    }

    // Dibujar medallas cayendo
    for (const p of this.particles) {
      const img = this.medalImages[p.medalId];
      if (!img || !img.complete || img.naturalWidth === 0) continue;

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);

      // Sombra dorada
      ctx.shadowColor = 'rgba(245, 158, 11, 0.45)';
      ctx.shadowBlur = 8;

      ctx.drawImage(img, -p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    }

    ctx.globalAlpha = 1.0;
    ctx.shadowBlur = 0;
  }
}

// Controlador Principal de Code Quest: Aventura RPG Medieval de Java
class CodeQuestGame {
  constructor() {
    this.canvas = document.getElementById('game-canvas');
    this.renderer = new PixelRenderer(this.canvas);
    this.input = new InputHandler();
    this.camera = null;
    this.map = null;
    this.battle = null;
    this.medalsRain = null;

    this.gameState = 'menu'; // 'menu', 'playing', 'battle', 'paused', 'complete'
    this.lastTime = 0;

    // Estado del Jugador (Requisitos: 5 corazones, 25 ataque, espadas +5, pociones curan 1 corazón)
    this.player = {
      name: "Héroe Java",
      x: 9 * 32,
      y: 10 * 32,
      width: 24,
      height: 28,
      speed: 135,
      direction: 'down',
      isMoving: false,
      hearts: 5,
      maxHearts: 5,
      attack: 25,
      potions: 2,
      keys: 2,
      medals: [],
      defeatedBosses: new Set(),
      totalScore: 0
    };

    this.activeInteractEntity = null;
    this.toastTimer = null;
    this.inventoryOpenedFromPause = false;
    this.rewardsOpenedFromPause = false;

    this.initDOM();
    this.initCanvasSize();
    window.addEventListener('resize', () => this.initCanvasSize());

    // Iniciar loop
    requestAnimationFrame((t) => this.gameLoop(t));
  }

  initCanvasSize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    if (this.camera) {
      this.camera.resize(this.canvas.width, this.canvas.height);
    }
  }

  initDOM() {
    // Inicializar subsistemas
    this.map = new WorldMap();
    this.camera = new Camera(this.canvas.width, this.canvas.height, this.map.width * 32, this.map.height * 32);
    this.battle = new BattleManager(this);
    this.medalsRain = new MedalsRainSystem();

    // Inicializar Sistema de Autenticación (Google / Correo / Invitado)
    this.initAuthUI();

    // Botones del Menú Principal
    document.getElementById('btn-new-game').addEventListener('click', () => {
      audioManager.playSfx('click');
      this.showNamePrompt();
    });

    const btnContinueGame = document.getElementById('btn-continue-game');
    if (btnContinueGame) {
      btnContinueGame.addEventListener('click', () => {
        audioManager.playSfx('click');
        if (typeof saveSystem !== 'undefined') {
          const user = (typeof authManager !== 'undefined') ? authManager.getCurrentUser() : null;
          const latest = saveSystem.getLatestSaveForUser(user);
          if (latest) {
            this.loadSavedGame(latest);
            return;
          }
        }
        this.showNamePrompt();
      });
    }

    document.getElementById('btn-how-to-play').addEventListener('click', () => {
      audioManager.playSfx('click');
      document.getElementById('how-to-play-modal').classList.remove('hidden');
    });

    document.getElementById('btn-close-how-to-play').addEventListener('click', () => {
      audioManager.playSfx('click');
      document.getElementById('how-to-play-modal').classList.add('hidden');
    });

    document.getElementById('btn-ranking').addEventListener('click', () => {
      audioManager.playSfx('click');
      cloudRanking.renderLeaderboard('ranking-table-body');
      document.getElementById('ranking-modal').classList.remove('hidden');
    });

    document.getElementById('btn-close-ranking').addEventListener('click', () => {
      audioManager.playSfx('click');
      const rModal = document.getElementById('ranking-modal');
      if (rModal) {
        rModal.classList.add('hidden');
        rModal.style.display = '';
      }
    });

    // Modal de Nombre de Personaje y Carga de Partida Guardada Existente (Aislada por Usuario)
    const nameInput = document.getElementById('player-name-input');
    const promptInfo = document.getElementById('saved-game-prompt-info');
    const detailsEl = document.getElementById('saved-game-details');
    const btnLoadSaved = document.getElementById('btn-load-existing-game');

    const handleNameCheck = () => {
      if (!nameInput) return;
      const val = nameInput.value.trim();
      if (!val) {
        if (promptInfo) promptInfo.classList.add('hidden');
        return;
      }
      const user = (typeof authManager !== 'undefined') ? authManager.getCurrentUser() : null;
      const saved = (typeof saveSystem !== 'undefined') ? saveSystem.getSaveForUser(user, val) : null;
      if (saved) {
        if (promptInfo) promptInfo.classList.remove('hidden');
        if (detailsEl) {
          const medCount = saved.medals ? saved.medals.length : 0;
          const score = (saved.totalScore || 0).toLocaleString();
          const atq = saved.attack || 25;
          detailsEl.innerHTML = `<img src="assets/icons/medalla.png" class="pixel-icon" alt="Medallas"> Medallas: <strong>${medCount}/20</strong> | <img src="assets/icons/espada.png" class="pixel-icon" alt="Ataque"> Ataque: <strong>${atq}</strong> | <img src="assets/icons/trofeo.png" class="pixel-icon" alt="Puntaje"> Puntaje: <strong>${score} PTS</strong>`;
        }
      } else {
        if (promptInfo) promptInfo.classList.add('hidden');
      }
    };

    if (nameInput) {
      nameInput.addEventListener('input', handleNameCheck);
      nameInput.addEventListener('change', handleNameCheck);
    }

    if (btnLoadSaved) {
      btnLoadSaved.addEventListener('click', () => {
        audioManager.playSfx('click');
        const val = nameInput.value.trim();
        const user = (typeof authManager !== 'undefined') ? authManager.getCurrentUser() : null;
        const saved = (typeof saveSystem !== 'undefined') ? saveSystem.getSaveForUser(user, val) : null;
        if (saved) {
          document.getElementById('name-prompt-modal').classList.add('hidden');
          this.loadSavedGame(saved);
        }
      });
    }

    document.getElementById('btn-start-adventure').addEventListener('click', () => {
      const val = nameInput ? nameInput.value.trim() : "";
      this.player.name = val || "Caballero Java";
      audioManager.playSfx('click');
      document.getElementById('name-prompt-modal').classList.add('hidden');
      this.startStoryIntro(); // Desplegar historia narrativa (Requisito 5)
    });

    // Eventos de la Historia Inicial / Lore
    document.getElementById('btn-story-next').addEventListener('click', () => {
      this.nextStoryChapter();
    });

    document.getElementById('btn-story-skip').addEventListener('click', () => {
      this.finishStoryIntro();
    });

    // Control de Audio Universal (Mute / Unmute) para Menú, HUD y Pausa
    const handleSoundToggle = (e) => {
      if (e) e.stopPropagation();
      const isMuted = audioManager.toggleMute();
      this.updateAllSoundButtons(isMuted);
    };

    const btnMuteMenu = document.getElementById('btn-sound-toggle');
    if (btnMuteMenu) btnMuteMenu.addEventListener('click', handleSoundToggle);

    const btnMuteHud = document.getElementById('btn-sound-hud');
    if (btnMuteHud) btnMuteHud.addEventListener('click', handleSoundToggle);

    const btnMutePause = document.getElementById('btn-pause-sound');
    if (btnMutePause) btnMutePause.addEventListener('click', handleSoundToggle);

    // Inicializar Banner de Recomendación de Modo Horizontal
    this.initOrientationBanner();

    // Botón de Pausa en pantalla
    const btnPauseHud = document.getElementById('btn-pause-hud');
    if (btnPauseHud) {
      btnPauseHud.addEventListener('click', () => {
        if (this.gameState === 'playing') this.pauseGame();
      });
    }

    // Menú de Pausa (Reanudar, Inventario, Recompensas, Reiniciar, Salir)
    document.getElementById('btn-pause-resume').addEventListener('click', () => {
      audioManager.playSfx('click');
      this.resumeGame();
    });

    document.getElementById('btn-pause-inventory').addEventListener('click', () => {
      audioManager.playSfx('click');
      document.getElementById('pause-modal').classList.add('hidden');
      this.showInventoryModal(true);
    });

    document.getElementById('btn-pause-restart').addEventListener('click', () => {
      audioManager.playSfx('click');
      if (confirm("¿Seguro que deseas reiniciar tu aventura actual? Perderás el progreso de esta partida.")) {
        this.resumeGame();
        this.startNewGame();
      }
    });

    document.getElementById('btn-pause-rewards').addEventListener('click', () => {
      audioManager.playSfx('click');
      document.getElementById('pause-modal').classList.add('hidden');
      this.showRewardsModal(true);
    });

    document.getElementById('btn-pause-exit').addEventListener('click', () => {
      audioManager.playSfx('click');
      document.getElementById('pause-modal').classList.add('hidden');
      this.returnToMainMenu();
    });

    // Botón administrativo en pausa para saltar a victoria final
    const btnAdminVic = document.getElementById('btn-pause-admin-victory');
    if (btnAdminVic) {
      btnAdminVic.addEventListener('click', () => {
        audioManager.playSfx('click');
        document.getElementById('pause-modal').classList.add('hidden');
        this.triggerAdminVictoryTest();
      });
    }

    // Inventario Fuera de Batalla (Requisito 2)
    const handleCloseInv = () => {
      audioManager.playSfx('click');
      this.hideInventoryModal();
    };
    document.getElementById('btn-close-inventory').addEventListener('click', handleCloseInv);
    const btnCloseInvBottom = document.getElementById('btn-close-inventory-bottom');
    if (btnCloseInvBottom) {
      btnCloseInvBottom.addEventListener('click', handleCloseInv);
    }

    document.getElementById('btn-use-potion-inventory').addEventListener('click', () => {
      this.usePotionFromInventory();
    });

    // Atajos de teclado y eventos
    window.addEventListener('keydown', (e) => {
      // Atajo secreto de administrador para probar victoria final: Ctrl+Alt+V, Cmd+Alt+V o Ctrl+Shift+V
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      if (isCtrlOrCmd && (e.altKey || e.shiftKey) && (e.key === 'V' || e.key === 'v')) {
        e.preventDefault();
        this.triggerAdminVictoryTest();
        return;
      }

      // Avanzar prólogo con Enter o Espacio si el modal de historia está abierto
      const storyModal = document.getElementById('story-lore-modal');
      if (storyModal && !storyModal.classList.contains('hidden')) {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          this.nextStoryChapter();
          return;
        }
      }

      // Manejo universal y jerárquico de tecla Escape (ESC)
      if (e.key === 'Escape') {
        e.preventDefault();

        // 1. Pausar / reanudar combate si está en batalla
        if (this.gameState === 'battle') {
          if (this.battle) this.battle.togglePause();
          return;
        }

        // 2. Cerrar inventario si está abierto
        const invModal = document.getElementById('inventory-modal');
        if (invModal && !invModal.classList.contains('hidden')) {
          this.hideInventoryModal();
          return;
        }

        // 3. Cerrar vitrina de recompensas si está abierta
        const rewModal = document.getElementById('rewards-modal');
        if (rewModal && !rewModal.classList.contains('hidden')) {
          this.hideRewardsModal();
          return;
        }

        // 4. Cerrar letrero si está abierto
        const signModal = document.getElementById('sign-modal');
        if (signModal && !signModal.classList.contains('hidden')) {
          signModal.classList.add('hidden');
          this.gameState = 'playing';
          this.updateMobileControlsVisibility();
          return;
        }

        // 5. Cerrar menú de pausa y reanudar partida si el menú de pausa está abierto
        const pauseModal = document.getElementById('pause-modal');
        if (pauseModal && !pauseModal.classList.contains('hidden')) {
          this.resumeGame();
          return;
        }

        // 6. Abrir menú de pausa si se está explorando el mapa normalmente
        if (this.gameState === 'playing') {
          this.pauseGame();
          return;
        }
      }

      // Tecla G para alternar inventario
      if (e.key === 'g' || e.key === 'G') {
        const invModal = document.getElementById('inventory-modal');
        if (invModal && !invModal.classList.contains('hidden')) {
          this.hideInventoryModal();
        } else if (this.gameState === 'playing' || this.gameState === 'paused') {
          this.showInventoryModal(this.gameState === 'paused');
        }
      }
    });

    // Cerrar Recompensas
    document.getElementById('btn-close-rewards').addEventListener('click', () => {
      audioManager.playSfx('click');
      this.hideRewardsModal();
    });

    // Cerrar Letrero de Dato Curioso
    document.getElementById('btn-close-sign').addEventListener('click', () => {
      audioManager.playSfx('click');
      document.getElementById('sign-modal').classList.add('hidden');
      this.gameState = 'playing';
      this.updateMobileControlsVisibility();
    });

    // Cerrar modales automáticamente al hacer clic en el backdrop oscuro exterior
    ['inventory-modal', 'rewards-modal', 'sign-modal'].forEach((modalId) => {
      const modalEl = document.getElementById(modalId);
      if (modalEl) {
        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) {
            audioManager.playSfx('click');
            if (modalId === 'inventory-modal') this.hideInventoryModal();
            else if (modalId === 'rewards-modal') this.hideRewardsModal();
            else {
              modalEl.classList.add('hidden');
              this.gameState = 'playing';
              this.updateMobileControlsVisibility();
            }
          }
        });
      }
    });

    // Pantalla de Gran Victoria (Fin del juego tras derrotar al jefe 20: Ranking y Menú)
    const btnCompRanking = document.getElementById('btn-complete-ranking');
    if (btnCompRanking) {
      btnCompRanking.addEventListener('click', () => {
        audioManager.playSfx('click');
        cloudRanking.renderLeaderboard('ranking-table-body');
        const rModal = document.getElementById('ranking-modal');
        if (rModal) {
          rModal.classList.remove('hidden');
          rModal.style.display = 'flex';
        }
      });
    }

    const btnFinish = document.getElementById('btn-finish-game');
    if (btnFinish) {
      btnFinish.addEventListener('click', () => {
        audioManager.playSfx('click');
        if (this.medalsRain) this.medalsRain.stop();
        document.getElementById('game-complete-modal').classList.add('hidden');
        this.returnToMainMenu();
      });
    }

    // Inicializar controles táctiles móviles
    this.initMobileControls();

    // Iniciar música del menú
    audioManager.startMusic('menu');
  }

  // Configuración de Controles Táctiles en Pantalla para Dispositivos Móviles
  initMobileControls() {
    this.isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth <= 1024);

    const dpadButtons = [
      { id: 'dpad-up', dir: 'up' },
      { id: 'dpad-down', dir: 'down' },
      { id: 'dpad-left', dir: 'left' },
      { id: 'dpad-right', dir: 'right' }
    ];

    dpadButtons.forEach(({ id, dir }) => {
      const btn = document.getElementById(id);
      if (!btn) return;

      const press = (e) => {
        if (e && e.cancelable) e.preventDefault();
        this.input.touchDirs[dir] = true;
        btn.classList.add('active');
        if (navigator.vibrate) navigator.vibrate(10);
      };

      const release = (e) => {
        if (e && e.cancelable) e.preventDefault();
        this.input.touchDirs[dir] = false;
        btn.classList.remove('active');
      };

      btn.addEventListener('touchstart', press, { passive: false });
      btn.addEventListener('touchend', release, { passive: false });
      btn.addEventListener('touchcancel', release, { passive: false });
      btn.addEventListener('mousedown', press);
      btn.addEventListener('mouseup', release);
      btn.addEventListener('mouseleave', release);
    });

    // Botón de Acción Táctil ([E] / Interactuar / Batalla / Abrir Cofre)
    const btnAction = document.getElementById('btn-touch-action');
    if (btnAction) {
      const doAction = (e) => {
        if (e && e.cancelable) e.preventDefault();
        this.input.touchInteract = true;
        btnAction.classList.add('active');
        setTimeout(() => btnAction.classList.remove('active'), 120);
        if (navigator.vibrate) navigator.vibrate(15);
      };
      btnAction.addEventListener('touchstart', doAction, { passive: false });
      btnAction.addEventListener('click', doAction);
    }

    // Botón de Mochila / Inventario Táctil ([G])
    const btnInv = document.getElementById('btn-touch-inventory');
    if (btnInv) {
      const toggleInv = (e) => {
        if (e && e.cancelable) e.preventDefault();
        const modal = document.getElementById('inventory-modal');
        if (modal.classList.contains('hidden')) {
          this.showInventoryModal();
        } else {
          this.hideInventoryModal();
        }
        if (navigator.vibrate) navigator.vibrate(12);
      };
      btnInv.addEventListener('touchstart', toggleInv, { passive: false });
      btnInv.addEventListener('click', toggleInv);
    }

    // Detección automática al redimensionar o rotar el dispositivo
    window.addEventListener('resize', () => {
      this.isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth <= 1024);
      this.updateMobileControlsVisibility();
    });
  }

  updateMobileControlsVisibility() {
    const controls = document.getElementById('mobile-controls');
    if (!controls) return;

    // Verificar si algún modal u overlay está actualmente abierto
    const isModalOpen = (document.querySelectorAll('.modal-backdrop:not(.hidden)').length > 0) ||
      !document.getElementById('battle-screen').classList.contains('hidden') ||
      !document.getElementById('main-menu-overlay').classList.contains('hidden');

    if (this.gameState === 'playing' && this.isTouchDevice && !isModalOpen) {
      controls.classList.remove('hidden');
    } else {
      controls.classList.add('hidden');
    }
  }

  // Sincronizar todos los botones de sonido de la interfaz
  updateAllSoundButtons(isMuted) {
    const icon = isMuted ? '<img src="assets/icons/sonido_off.png" class="pixel-icon" alt="Mudo">' : '<img src="assets/icons/sonido_on.png" class="pixel-icon" alt="Sonido">';
    const label = isMuted ? ' Silenciado' : ' Sonido: ON';

    const btnMenu = document.getElementById('btn-sound-toggle');
    if (btnMenu) btnMenu.innerHTML = `${icon}${label}`;

    const btnPause = document.getElementById('btn-pause-sound');
    if (btnPause) btnPause.innerHTML = `${icon}${label}`;

    const btnHud = document.getElementById('btn-sound-hud');
    if (btnHud) btnHud.innerHTML = icon;
  }

  // Inicializar Banner flotante de sugerencia de rotación horizontal
  initOrientationBanner() {
    const banner = document.getElementById('orientation-suggestion-banner');
    const btnClose = document.getElementById('btn-close-orientation');
    if (!banner) return;

    let bannerDismissed = false;

    if (btnClose) {
      btnClose.addEventListener('click', () => {
        banner.classList.add('hidden');
        bannerDismissed = true;
      });
    }

    const checkOrientation = () => {
      if (bannerDismissed) return;
      const isMobileTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth <= 1024);
      const isPortrait = window.innerHeight > window.innerWidth;

      if (isMobileTouch && isPortrait && this.gameState !== 'menu') {
        banner.classList.remove('hidden');
      } else {
        banner.classList.add('hidden');
      }
    };

    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    setTimeout(checkOrientation, 500);
  }

  initAuthUI() {
    const authOverlay = document.getElementById('auth-screen-overlay');
    const menuOverlay = document.getElementById('main-menu-overlay');
    const userBadge = document.getElementById('menu-user-badge');
    const userText = document.getElementById('menu-user-text');
    const btnLogout = document.getElementById('btn-logout-session');

    // Botones y campos del formulario de autenticación
    const btnGoogle = document.getElementById('btn-google-login');
    const tabLogin = document.getElementById('tab-auth-login');
    const tabRegister = document.getElementById('tab-auth-register');
    const authForm = document.getElementById('auth-form');
    const authUsernameGroup = document.getElementById('auth-username-group');
    const authUsernameInput = document.getElementById('auth-username-input');
    const authEmailInput = document.getElementById('auth-email-input');
    const authPasswordInput = document.getElementById('auth-password-input');
    const authFeedbackMsg = document.getElementById('auth-feedback-msg');
    const authSubmitBtn = document.getElementById('btn-auth-submit');
    const authGuestBtn = document.getElementById('btn-auth-guest');

    // Elementos del Modal de Cuenta Google
    const googleModal = document.getElementById('google-account-modal');
    const googleAccountsList = document.getElementById('google-accounts-list');
    const googleAddCard = document.getElementById('google-add-account-card');
    const googleCustomForm = document.getElementById('google-custom-form');
    const googleCustomEmail = document.getElementById('google-custom-email');
    const googleCustomName = document.getElementById('google-custom-name');
    const googleFeedbackMsg = document.getElementById('google-feedback-msg');
    const btnCancelGoogleCustom = document.getElementById('btn-cancel-google-custom');
    const btnCloseGoogleModal = document.getElementById('btn-close-google-modal');

    let currentMode = 'login'; // 'login' | 'register'

    const showMessage = (msg, isSuccess = false) => {
      if (!authFeedbackMsg) return;
      authFeedbackMsg.textContent = msg;
      authFeedbackMsg.className = isSuccess ? 'auth-msg success' : 'auth-msg error';
      authFeedbackMsg.classList.remove('hidden');
    };

    const clearMessages = () => {
      if (authFeedbackMsg) {
        authFeedbackMsg.classList.add('hidden');
        authFeedbackMsg.textContent = '';
      }
    };

    const updateSessionUI = (user) => {
      if (user) {
        if (authOverlay) authOverlay.classList.add('hidden');
        if (googleModal) googleModal.classList.add('hidden');
        if (menuOverlay) menuOverlay.classList.remove('hidden');
        if (userText) userText.textContent = `Conectado: ${user.heroName || user.name || user.email || 'Héroe'}`;
        if (userBadge) userBadge.classList.remove('hidden');
        this.checkAndRefreshContinueButton();
      } else {
        if (menuOverlay) menuOverlay.classList.add('hidden');
        if (authOverlay) authOverlay.classList.remove('hidden');
        if (userBadge) userBadge.classList.add('hidden');
        const btnContinue = document.getElementById('btn-continue-game');
        if (btnContinue) btnContinue.classList.add('hidden');
      }
    };

    // Pestañas Login / Registro
    if (tabLogin && tabRegister) {
      tabLogin.addEventListener('click', () => {
        currentMode = 'login';
        tabLogin.classList.add('active');
        tabRegister.classList.remove('active');
        if (authUsernameGroup) authUsernameGroup.classList.add('hidden');
        if (authSubmitBtn) authSubmitBtn.textContent = '⚔️ Entrar al Reino';
        clearMessages();
      });

      tabRegister.addEventListener('click', () => {
        currentMode = 'register';
        tabRegister.classList.add('active');
        tabLogin.classList.remove('active');
        if (authUsernameGroup) authUsernameGroup.classList.remove('hidden');
        if (authSubmitBtn) authSubmitBtn.textContent = '⚔️ Crear Cuenta y Jugar';
        clearMessages();
      });
    }

    // Formulario de Inicio de Sesión / Registro por Correo
    if (authForm) {
      authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clearMessages();
        if (typeof authManager === 'undefined') return;

        const email = authEmailInput ? authEmailInput.value.trim() : '';
        const password = authPasswordInput ? authPasswordInput.value.trim() : '';

        if (currentMode === 'register') {
          const heroName = authUsernameInput ? authUsernameInput.value.trim() : '';
          if (!heroName) {
            showMessage("Por favor ingresa un nombre para tu héroe.");
            if (authUsernameInput) authUsernameInput.focus();
            return;
          }
          if (!email) {
            showMessage("Por favor ingresa tu correo electrónico.");
            if (authEmailInput) authEmailInput.focus();
            return;
          }
          if (!password) {
            showMessage("Por favor ingresa una contraseña.");
            if (authPasswordInput) authPasswordInput.focus();
            return;
          }

          const res = authManager.register(heroName, email, password);
          if (res.success) {
            showMessage("¡Cuenta creada exitosamente! Iniciando aventura...", true);
            setTimeout(() => updateSessionUI(res.user), 400);
          } else {
            showMessage(res.message);
          }
        } else {
          if (!email || !password) {
            showMessage("Por favor ingresa tu correo y contraseña.");
            return;
          }
          const res = authManager.login(email, password);
          if (res.success) {
            showMessage(`¡Sesión iniciada con éxito! Bienvenido, ${res.user.heroName || res.user.name}`, true);
            setTimeout(() => updateSessionUI(res.user), 400);
          } else {
            showMessage(res.message);
          }
        }
      });
    }

    // Renderizado del Selector de Cuentas de Google
    const renderGoogleAccounts = () => {
      if (!googleAccountsList) return;
      googleAccountsList.innerHTML = '';

      const accounts = (typeof authManager !== 'undefined') ? authManager.getGoogleAccounts() : [];
      if (accounts.length === 0) {
        // Si no hay cuentas previas, desplegar directamente el formulario para ingresar la suya
        if (googleCustomForm) googleCustomForm.classList.remove('hidden');
        if (googleAddCard) googleAddCard.classList.add('hidden');
        if (btnCancelGoogleCustom) btnCancelGoogleCustom.classList.add('hidden');
        return;
      }

      // Si hay cuentas previas, listarlas y dar la opción de usar otra
      if (googleCustomForm) googleCustomForm.classList.add('hidden');
      if (googleAddCard) googleAddCard.classList.remove('hidden');
      if (btnCancelGoogleCustom) btnCancelGoogleCustom.classList.remove('hidden');

      accounts.forEach(acc => {
        const card = document.createElement('div');
        card.className = 'google-account-card';
        const initial = (acc.heroName || acc.name || acc.email || 'G').charAt(0).toUpperCase();
        card.innerHTML = `
          <div class="google-avatar-circle">${initial}</div>
          <div class="google-account-meta">
            <div class="google-account-title">${acc.heroName || acc.name || 'Héroe Google'}</div>
            <div class="google-account-email">${acc.email}</div>
          </div>
        `;
        card.addEventListener('click', () => {
          audioManager.playSfx('click');
          const res = authManager.loginWithGoogle(acc.email, acc.heroName || acc.name);
          if (res.success) {
            updateSessionUI(res.user);
          }
        });
        googleAccountsList.appendChild(card);
      });
    };

    // Abrir Modal de Google o Iniciar con Firebase si está configurado
    if (btnGoogle) {
      btnGoogle.addEventListener('click', async () => {
        audioManager.playSfx('click');
        clearMessages();

        // 1. Si Firebase ya tiene credenciales válidas en js/firebase_config.js, abrir popup oficial de Google
        if (typeof authManager !== 'undefined' && authManager.isFirebaseConfigured()) {
          const res = await authManager.signInWithFirebaseGoogle();
          if (res.success) {
            updateSessionUI(res.user);
          } else if (res.isRedirecting) {
            showMessage("Ventana emergente bloqueada por el navegador. Redirigiendo a Google...", true);
          } else if (res.message && !res.message.includes('canceló') && !res.message.includes('cerró')) {
            showMessage(res.message);
          }
          return;
        }

        // 2. Si no hay llaves de Firebase, abrir el Selector Interactivo de Cuentas Google
        if (googleFeedbackMsg) {
          googleFeedbackMsg.classList.add('hidden');
          googleFeedbackMsg.textContent = '';
        }
        renderGoogleAccounts();
        if (googleModal) googleModal.classList.remove('hidden');
        if (googleCustomEmail) googleCustomEmail.focus();
      });
    }

    // Botón para usar otra cuenta en el modal de Google
    if (googleAddCard) {
      googleAddCard.addEventListener('click', () => {
        audioManager.playSfx('click');
        if (googleCustomForm) googleCustomForm.classList.remove('hidden');
        if (googleAddCard) googleAddCard.classList.add('hidden');
        if (googleCustomEmail) googleCustomEmail.focus();
      });
    }

    // Cancelar agregar otra cuenta y volver a la lista
    if (btnCancelGoogleCustom) {
      btnCancelGoogleCustom.addEventListener('click', () => {
        audioManager.playSfx('click');
        if (googleCustomForm) googleCustomForm.classList.add('hidden');
        if (googleAddCard) googleAddCard.classList.remove('hidden');
      });
    }

    // Formulario de cuenta personalizada de Google
    if (googleCustomForm) {
      googleCustomForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = googleCustomEmail ? googleCustomEmail.value.trim() : '';
        const heroName = googleCustomName ? googleCustomName.value.trim() : '';

        if (!email || !email.includes('@')) {
          if (googleFeedbackMsg) {
            googleFeedbackMsg.textContent = 'Por favor ingresa un correo de Google válido (ejemplo: tu_nombre@gmail.com)';
            googleFeedbackMsg.classList.remove('hidden');
          }
          return;
        }

        const res = authManager.loginWithGoogle(email, heroName);
        if (res.success) {
          if (googleFeedbackMsg) googleFeedbackMsg.classList.add('hidden');
          updateSessionUI(res.user);
        } else {
          if (googleFeedbackMsg) {
            googleFeedbackMsg.textContent = res.message;
            googleFeedbackMsg.classList.remove('hidden');
          }
        }
      });
    }

    // Cerrar modal de Google
    if (btnCloseGoogleModal) {
      btnCloseGoogleModal.addEventListener('click', () => {
        audioManager.playSfx('click');
        if (googleModal) googleModal.classList.add('hidden');
      });
    }

    // Modo Invitado
    if (authGuestBtn) {
      authGuestBtn.addEventListener('click', () => {
        audioManager.playSfx('click');
        if (typeof authManager === 'undefined') return;
        const user = authManager.loginAsGuest();
        updateSessionUI(user);
      });
    }

    // Botón Cerrar Sesión
    if (btnLogout) {
      btnLogout.addEventListener('click', () => {
        audioManager.playSfx('click');
        if (typeof authManager === 'undefined') return;
        authManager.logout();
        updateSessionUI(null);
      });
    }

    // Comprobar sesión actual existente o resultado de redirección de Google
    if (typeof authManager !== 'undefined') {
      authManager.checkRedirectResult().then(res => {
        if (res && res.success) {
          updateSessionUI(res.user);
        }
      });
      const existingUser = authManager.getCurrentUser();
      updateSessionUI(existingUser);
    }
  }

  checkAndRefreshContinueButton() {
    const btnContinue = document.getElementById('btn-continue-game');
    if (!btnContinue) return;
    if (typeof saveSystem === 'undefined') {
      btnContinue.classList.add('hidden');
      return;
    }
    const user = (typeof authManager !== 'undefined') ? authManager.getCurrentUser() : null;
    if (!user) {
      btnContinue.classList.add('hidden');
      return;
    }
    const latest = saveSystem.getLatestSaveForUser(user);
    if (latest && latest.name) {
      const medCount = latest.medals ? latest.medals.length : 0;
      btnContinue.textContent = `▶️ Continuar: ${latest.name} (${medCount}/20 🏅)`;
      btnContinue.classList.remove('hidden');
    } else {
      btnContinue.classList.add('hidden');
    }
  }

  saveGameProgress() {
    if (!this.player || !this.player.name) return;
    if (typeof saveSystem === 'undefined') return;

    const chestsState = (this.map && typeof this.map.getChestsState === 'function') 
      ? this.map.getChestsState() 
      : [];

    const user = (typeof authManager !== 'undefined') ? authManager.getCurrentUser() : null;

    const stateToSave = {
      name: this.player.name,
      hearts: this.player.hearts,
      maxHearts: this.player.maxHearts,
      attack: this.player.attack,
      potions: this.player.potions,
      keys: this.player.keys,
      medals: this.player.medals || [],
      defeatedBosses: Array.from(this.player.defeatedBosses || []),
      totalScore: this.player.totalScore || 0,
      x: this.player.x,
      y: this.player.y,
      direction: this.player.direction || 'down',
      chests: chestsState,
      userId: user ? user.id : null,
      userEmail: user ? user.email : null
    };

    saveSystem.saveGame(this.player.name, stateToSave, user);
    this.checkAndRefreshContinueButton();
  }

  loadSavedGame(saveData) {
    if (!saveData) return;

    // 1. Restaurar datos del jugador
    this.player.name = saveData.name || "Caballero Java";
    this.player.hearts = (saveData.hearts !== undefined) ? saveData.hearts : 5;
    this.player.maxHearts = (saveData.maxHearts !== undefined) ? saveData.maxHearts : 5;
    this.player.attack = (saveData.attack !== undefined) ? saveData.attack : 25;
    this.player.potions = (saveData.potions !== undefined) ? saveData.potions : 2;
    this.player.keys = (saveData.keys !== undefined) ? saveData.keys : 20;
    this.player.medals = Array.isArray(saveData.medals) ? [...saveData.medals] : [];
    this.player.defeatedBosses = new Set(Array.isArray(saveData.defeatedBosses) ? saveData.defeatedBosses : []);
    this.player.totalScore = saveData.totalScore ?? 0;

    // 2. Restaurar posición en mapa
    this.player.x = (saveData.x !== undefined) ? saveData.x : 31 * 32;
    this.player.y = (saveData.y !== undefined) ? saveData.y : 32 * 32;
    this.player.direction = saveData.direction || 'down';

    // 3. Restaurar estado de cofres del mapa
    if (this.map && saveData.chests && typeof this.map.restoreChests === 'function') {
      this.map.restoreChests(saveData.chests);
    }

    // 4. Centrar cámara
    if (this.camera) {
      this.camera.follow(this.player.x + 12, this.player.y + 14);
    }

    // 5. Actualizar HUD
    this.updateHud();

    // 6. Detener músicas previas
    audioManager.stopSfx('gameover');
    audioManager.stopSfx('pause');
    audioManager.stopMusic();

    // 7. Cerrar modales y menú
    document.getElementById('main-menu-overlay').classList.add('hidden');
    document.getElementById('name-prompt-modal').classList.add('hidden');
    document.getElementById('story-lore-modal').classList.add('hidden');
    document.getElementById('game-hud').classList.remove('hidden');

    this.gameState = 'playing';
    this.updateMobileControlsVisibility();
    audioManager.startMusic('explore');

    const medalsCount = this.player.medals.length;
    this.showToast(`¡Partida cargada! Bienvenido de nuevo, ${this.player.name} (${medalsCount}/20 medallas, ${this.player.totalScore.toLocaleString()} PTS).`);
  }

  showNamePrompt() {
    const user = (typeof authManager !== 'undefined') ? authManager.getCurrentUser() : null;
    const nameInput = document.getElementById('player-name-input');
    if (nameInput && user && user.name && user.name !== 'Invitado') {
      nameInput.value = user.name;
    }
    document.getElementById('name-prompt-modal').classList.remove('hidden');
    if (nameInput) {
      nameInput.focus();
      // Disparar chequeo de partida guardada para el nombre actual
      nameInput.dispatchEvent(new Event('input'));
    }
  }

  // Instrucciones iniciales y Prólogo Narrativo de Bytevalia con personalización
  startStoryIntro() {
    const pName = this.player.name || "Caballero";
    this.storyChapters = [
      {
        badge: "Guía de Inicio: 1/3",
        avatar: '<img src="assets/icons/play.png" class="pixel-icon pixel-icon-xl" alt="Controles">',
        title: "Manual del Paladín: Movimiento y Acción",
        html: `
          <p class="story-p">¡Atención, noble paladín <span class="story-highlight">${pName}</span>! Antes de adentrarte en los confines de Bytevalia, debes adiestrar tus reflejos:</p>
          <ul class="story-list">
            <li><strong><img src="assets/icons/play.png" class="pixel-icon" alt="Movimiento"> Movimiento:</strong> Usa las teclas <strong>[W, A, S, D]</strong>, las <strong>Flechas del teclado</strong> (o la <strong>cruceta táctil en pantalla</strong> en celulares) para desplazarte libremente por los senderos y praderas.</li>
            <li><strong><img src="assets/icons/pergamino.png" class="pixel-icon" alt="Acción"> Interacción:</strong> Presiona <strong>[E]</strong>, <strong>[Espacio]</strong> o el <strong>botón de Acción</strong> táctil frente a cofres del tesoro, letreros de sabiduría y jefes guardianes.</li>
            <li><strong><img src="assets/icons/escudo.png" class="pixel-icon" alt="Senderos"> Senderos Seguros:</strong> Los caminos empedrados están delimitados por murallas de roca natural que te guían hacia cada uno de los 20 Jefes.</li>
          </ul>
        `
      },
      {
        badge: "Guía de Inicio: 2/3",
        avatar: '<img src="assets/icons/mochila.png" class="pixel-icon pixel-icon-xl" alt="Mochila">',
        title: "Manual del Paladín: Inventario, Pociones y Llaves",
        html: `
          <p class="story-p">Tu supervivencia en este reino exige una gestión impecable de tus recursos, <span class="story-highlight">${pName}</span>:</p>
          <ul class="story-list">
            <li><strong><img src="assets/icons/mochila.png" class="pixel-icon" alt="Inventario"> Inventario en Todo Momento [G]:</strong> Puedes consultar tu inventario cuando quieras presionando la tecla <strong>[G]</strong>, el <strong>botón de Mochila</strong> en pantalla, o desde la pausa <strong>[Esc]</strong>.</li>
            <li><strong><img src="assets/icons/pocion.png" class="pixel-icon" alt="Poción"> Pociones Curativas:</strong> Si pierdes corazones, abre tu inventario y consume una Poción de Vida para restaurar tu salud. ¡Encontrarás pociones ocultas en cofres dispersos por todo el mapa!</li>
            <li><strong><img src="assets/icons/llave.png" class="pixel-icon" alt="Llaves"> Llaves de Jefes:</strong> Cada uno de los 20 Jefes requiere <strong>1 Llave</strong> para abrir las puertas de su arena sagrada. Saquea cofres antes de retarlos.</li>
          </ul>
        `
      },
      {
        badge: "Guía de Inicio: 3/3",
        avatar: '<img src="assets/icons/espadas_cruzadas.png" class="pixel-icon pixel-icon-xl" alt="Combate">',
        title: "Manual del Paladín: Duelos de Java y Resurrección",
        html: `
          <p class="story-p">El acero físico no daña a los espectros del código, <span class="story-highlight">${pName}</span>. Tu espada es tu mente lógica:</p>
          <ul class="story-list">
            <li><strong><img src="assets/icons/espadas_cruzadas.png" class="pixel-icon" alt="Combate"> Combate de Programación:</strong> Responde acertadamente a las preguntas de Java para asestar tajos críticos. Respuestas consecutivas activan combos con multiplicadores de daño y puntos.</li>
            <li><strong><img src="assets/icons/alerta.png" class="pixel-icon" alt="Alerta"> Castigo de Sintaxis:</strong> Si eliges una opción incorrecta, el jefe contraatacará y perderás 1 corazón de vida.</li>
            <li><strong><img src="assets/icons/corazon_lleno.png" class="pixel-icon" alt="Vida"> Gracia de la Resurrección:</strong> Si tus 5 corazones caen a cero, caerás en batalla, pero la gracia de la JVM te protegerá: reaparecerás en la Plaza Central conservando todas tus medallas, espadas, cofres y progreso acumulado para volver a intentarlo.</li>
          </ul>
        `
      },
      {
        badge: "Crónicas de Bytevalia: I",
        avatar: '<img src="assets/icons/escudo.png" class="pixel-icon pixel-icon-xl" alt="Reino">',
        title: "La Era del Código Sagrado y la Gran JVM",
        html: `
          <p class="story-p">Mucho antes de que tus pasos se escucharan en estas tierras, <span class="story-highlight">${pName}</span>, el Reino de Bytevalia era un cosmos de perfección inquebrantable forjado sobre los cimientos de la <strong>Sagrada Java Virtual Machine</strong>.</p>
          <p class="story-p">En aquellos tiempos legendarios, cada entidad, río y bosque existía como un objeto inmutable en memoria. El Gran Algoritmo del Garbage Collector purificaba el flujo cósmico y <strong>20 Medallas de Java</strong> custodiaban el equilibrio universal: desde las Leyes Primitivas de Tipos y Variables, hasta las altas torres de la Herencia, la Encapsulación y el Polimorfismo.</p>
        `
      },
      {
        badge: "Crónicas de Bytevalia: II",
        avatar: '<img src="assets/icons/impacto.png" class="pixel-icon pixel-icon-xl" alt="Cataclismo">',
        title: "El Cataclismo del Archimago Corrupto",
        html: `
          <p class="story-p">Pero la codicia oscureció el alma del Archimago Supremo de la JVM. Deseando quebrar las leyes sagradas de la compilación y gobernar sobre el caos, invocó a 19 Señores Oscuros y fracturó el Código Primordial.</p>
          <p class="story-p">Las 20 Medallas de Java fueron robadas y recluidas tras los muros de 20 fortalezas malditas. Una niebla de <em>NullPointerExceptions</em>, desbordamientos de pila y bucles infinitos arrasó las aldeas. Los sabios enmudecieron, las variables perdieron su tipado y el reino quedó sumido en un invierno de errores irrecuperables.</p>
        `
      },
      {
        badge: "Crónicas de Bytevalia: III",
        avatar: '<img src="assets/icons/corona.png" class="pixel-icon pixel-icon-xl" alt="Profecía">',
        title: `La Profecía del Paladín ${pName}`,
        html: `
          <p class="story-p">Inscrito en el Gran Altar de Obsidiana, un antiguo manuscrito profetizaba este momento exacto: <em>'Cuando el reino colapse en la penumbra del error fatal, emergerá de entre los mortales un paladín con el don supremo de la Compilación Limpia. Su nombre es <span class="story-highlight">${pName}</span>'</em>.</p>
          <p class="story-p">Ese héroe eres tú, <span class="story-highlight">${pName}</span>. Tu misión es recorrer los cuatro cuadrantes, saquear los cofres antiguos, desafiar a los 20 Señores Oscuros con tu dominio de Java y purificar el Gran Santuario Central de la JVM.</p>
          <p class="story-p">¡El futuro entero de Bytevalia depende de tu valentía, <span class="story-highlight">${pName}</span>! ¡Empuña tu espada, alza tu mente y que tu código compile siempre con gloria!</p>
        `
      }
    ];

    this.currentStoryIndex = 0;
    this.showCurrentStoryChapter();
    document.getElementById('story-lore-modal').classList.remove('hidden');
  }

  showCurrentStoryChapter() {
    const chap = this.storyChapters[this.currentStoryIndex];
    if (!chap) return;

    const badgeEl = document.getElementById('story-chapter-badge');
    if (badgeEl) badgeEl.textContent = chap.badge;

    const avatarEl = document.getElementById('story-avatar-icon');
    if (avatarEl && chap.avatar) avatarEl.innerHTML = chap.avatar;

    const titleEl = document.getElementById('story-title-text');
    if (titleEl && chap.title) titleEl.textContent = chap.title;

    const textEl = document.getElementById('story-text-content');
    if (textEl) textEl.innerHTML = chap.html;

    const btnNext = document.getElementById('btn-story-next');
    if (this.currentStoryIndex === this.storyChapters.length - 1) {
      btnNext.innerHTML = `¡Comenzar Aventura! <img src="assets/icons/play.png" class="pixel-icon" alt="Comenzar">`;
    } else {
      btnNext.innerHTML = `Siguiente <img src="assets/icons/flecha_derecha.png" class="pixel-icon" alt="Siguiente">`;
    }
  }

  nextStoryChapter() {
    audioManager.playSfx('click');
    if (this.currentStoryIndex < this.storyChapters.length - 1) {
      this.currentStoryIndex++;
      this.showCurrentStoryChapter();
    } else {
      this.finishStoryIntro();
    }
  }

  finishStoryIntro() {
    audioManager.playSfx('click');
    document.getElementById('story-lore-modal').classList.add('hidden');
    this.startNewGame();
  }

  // Inventario accesible en cualquier momento (Requisito 2)
  showInventoryModal(fromPause = false) {
    const modal = document.getElementById('inventory-modal');
    const isAlreadyOpen = modal && !modal.classList.contains('hidden');

    if (!isAlreadyOpen) {
      this.inventoryOpenedFromPause = fromPause || (this.gameState === 'paused');
      this.gameState = 'paused';
    }
    audioManager.playSfx('click');
    document.getElementById('inv-player-name').textContent = this.player.name || "Héroe";

    // Corazones visuales
    let heartsIcons = '';
    for (let i = 0; i < this.player.maxHearts; i++) {
      const src = i < this.player.hearts ? 'assets/icons/corazon_lleno.png' : 'assets/icons/corazon_vacio.png';
      heartsIcons += `<img src="${src}" class="pixel-icon" alt="Vida" style="margin: 0 2px;">`;
    }
    const heartsDisplay = document.getElementById('inv-hearts-display');
    if (heartsDisplay) heartsDisplay.innerHTML = heartsIcons;
    document.getElementById('inv-hp-text').textContent = `(${this.player.hearts}/${this.player.maxHearts})`;

    // Estadísticas
    document.getElementById('inv-attack-val').textContent = this.player.attack;
    document.getElementById('inv-keys-val').textContent = this.player.keys;
    document.getElementById('inv-medals-val').textContent = `${this.player.medals ? this.player.medals.length : 0} / 20`;
    document.getElementById('inv-potions-count').textContent = this.player.potions;

    modal.classList.remove('hidden');
    this.updateMobileControlsVisibility();
  }

  hideInventoryModal() {
    const modal = document.getElementById('inventory-modal');
    if (modal) modal.classList.add('hidden');

    if (this.inventoryOpenedFromPause) {
      this.inventoryOpenedFromPause = false;
      document.getElementById('pause-modal').classList.remove('hidden');
    } else {
      this.gameState = 'playing';
      audioManager.stopSfx('pause');
    }

    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
    this.updateMobileControlsVisibility();
  }

  usePotionFromInventory() {
    if (this.player.hearts >= this.player.maxHearts) {
      audioManager.playSfx('wrong');
      this.showToast("¡Tu salud ya está al máximo! (5/5 corazones)");
      return;
    }
    if (this.player.potions <= 0) {
      audioManager.playSfx('wrong');
      this.showToast("¡No te quedan pociones curativas! Busca cofres en el reino.");
      return;
    }

    this.player.potions--;
    this.player.hearts = Math.min(this.player.maxHearts, this.player.hearts + 1);
    audioManager.playSfx('potion');
    this.updateHud();
    this.showInventoryModal(this.inventoryOpenedFromPause); // Refrescar modal conservando estado de origen
    this.showToast(`¡Bebiste una poción! Salud restaurada a (${this.player.hearts}/${this.player.maxHearts} corazones).`);

    // Desenfocar el botón para que no capture eventos de teclado involuntarios
    const btn = document.getElementById('btn-use-potion-inventory');
    if (btn) btn.blur();
  }

  startNewGame() {
    audioManager.stopSfx('gameover'); // Quitar música de game over al revivir (Requisito 3)
    audioManager.stopSfx('pause');
    audioManager.stopMusic();

    // Reset de estadísticas según especificación (Requisitos 3 y 4)
    this.player.hearts = 5;
    this.player.maxHearts = 5;
    this.player.attack = 25;
    this.player.potions = 2;
    this.player.keys = 20;
    this.player.medals = [];
    this.player.defeatedBosses = new Set();
    this.player.totalScore = 0;

    // Colocar jugador en la plaza central de inicio (Pueblo del Compilador)
    this.player.x = 31 * 32;
    this.player.y = 32 * 32;
    this.player.direction = 'down';

    // Reinicializar cofres del mapa
    this.map.initChests();

    // Actualizar HUD
    this.updateHud();

    // Ocultar menú y mostrar HUD
    document.getElementById('main-menu-overlay').classList.add('hidden');
    document.getElementById('game-hud').classList.remove('hidden');

    this.gameState = 'playing';
    this.updateMobileControlsVisibility();
    audioManager.startMusic('explore');
    this.showToast(`¡Bienvenido a Code Quest, ${this.player.name}! Explora el reino y domina Java.`);
  }

  // Reaparecer conservando el progreso del héroe (medallas, ataque, cofres y puntaje)
  respawnWithProgress() {
    audioManager.stopSfx('gameover');
    audioManager.stopSfx('pause');
    audioManager.stopMusic();

    // 1. Restaurar salud completa (5 corazones)
    this.player.hearts = this.player.maxHearts;

    // 2. Conservar progreso acumulado (ataque, medallas, jefes derrotados, puntaje y cofres abiertos)
    // Garantizar que tenga recursos para continuar
    if (this.player.keys < 1) {
      this.player.keys = 1; // 1 llave mínima para retar al siguiente jefe
    }
    if (this.player.potions < 1) {
      this.player.potions = 1; // 1 poción de auxilio
    }

    // 3. Reubicar al jugador en la Plaza Central segura (Pueblo del Compilador)
    this.player.x = 31 * 32;
    this.player.y = 32 * 32;
    this.player.direction = 'down';

    // 4. Centrar cámara y actualizar HUD
    this.camera.follow(this.player.x + 12, this.player.y + 14);
    this.updateHud();

    // 5. Reactivar juego y música de exploración
    this.gameState = 'playing';
    this.updateMobileControlsVisibility();
    audioManager.startMusic('explore');
    this.saveGameProgress();
    this.showToast(`¡Has reaparecido en la Plaza Central! Tu progreso, medallas y espadas están a salvo.`);
    setTimeout(() => {
      this.showToast(`💡 Consejo: ¡Lee con atención los carteles de datos curiosos en los senderos para descubrir cómo vencer a los jefes!`);
    }, 3800);
  }

  pauseGame() {
    this.gameState = 'paused';
    this.updateMobileControlsVisibility();
    audioManager.playSfx('pause'); // assets/audio/pause.mp3

    // Mostrar botón de victoria administrativa solo si el usuario es admin
    const btnAdminVictory = document.getElementById('btn-pause-admin-victory');
    if (btnAdminVictory) {
      const u = (typeof authManager !== 'undefined') ? authManager.getCurrentUser() : null;
      if (u && (u.isAdmin || u.email === 'admin@gmail.com')) {
        btnAdminVictory.classList.remove('hidden');
      } else {
        btnAdminVictory.classList.add('hidden');
      }
    }

    document.getElementById('pause-modal').classList.remove('hidden');
  }

  resumeGame() {
    audioManager.stopSfx('pause'); // Detener sonido de pausa inmediatamente al cerrar menú
    document.getElementById('pause-modal').classList.add('hidden');
    this.gameState = 'playing';
    this.updateMobileControlsVisibility();
  }

  returnToMainMenu() {
    audioManager.stopSfx('pause');
    audioManager.stopSfx('gameover'); // Asegurar detención de audio de game over
    audioManager.stopMusic();
    if (this.medalsRain) this.medalsRain.stop();

    // Guardar progreso y registrar estadísticas en ranking si hay avance (omitido para admin)
    const u = (typeof authManager !== 'undefined') ? authManager.getCurrentUser() : null;
    const isAdmin = u && (u.isAdmin || u.email === 'admin@gmail.com');

    if (!isAdmin && this.player && this.player.name) {
      const hasProgress = (this.player.totalScore > 0) || 
                          (this.player.medals && this.player.medals.length > 0) || 
                          (this.player.defeatedBosses && this.player.defeatedBosses.size > 0);
      if (hasProgress) {
        this.saveGameProgress();
        if (typeof cloudRanking !== 'undefined' && typeof cloudRanking.registerOrUpdateProgress === 'function') {
          const isComplete = this.player.defeatedBosses && this.player.defeatedBosses.size >= 20;
          cloudRanking.registerOrUpdateProgress(
            this.player.name,
            this.player.totalScore,
            this.player.medals ? this.player.medals.length : 0,
            isComplete,
            u
          );
        }
      }
    }

    this.gameState = 'menu';
    this.updateMobileControlsVisibility();
    document.getElementById('game-hud').classList.add('hidden');
    document.getElementById('battle-screen').classList.add('hidden');
    document.getElementById('battle-pause-modal').classList.add('hidden');
    document.getElementById('game-complete-modal').classList.add('hidden');
    document.getElementById('game-over-modal').classList.add('hidden');
    document.getElementById('inventory-modal').classList.add('hidden');
    document.getElementById('rewards-modal').classList.add('hidden');
    document.getElementById('sign-modal').classList.add('hidden');
    document.getElementById('story-lore-modal').classList.add('hidden');

    this.checkAndRefreshContinueButton();
    document.getElementById('main-menu-overlay').classList.remove('hidden');
    audioManager.startMusic('menu');
  }

  // Actualizar HUD superior (Corazones, Ataque, Pociones, Llaves, Puntos)
  updateHud() {
    // Corazones visuales
    const heartsContainer = document.getElementById('hud-hearts-container');
    heartsContainer.innerHTML = '';
    for (let i = 0; i < this.player.maxHearts; i++) {
      const heartImg = document.createElement('img');
      heartImg.className = 'pixel-icon heart-icon';
      heartImg.src = i < this.player.hearts ? 'assets/icons/corazon_lleno.png' : 'assets/icons/corazon_vacio.png';
      heartImg.alt = i < this.player.hearts ? 'Vida' : 'Vacío';
      heartsContainer.appendChild(heartImg);
    }

    document.getElementById('hud-player-name').textContent = this.player.name;
    document.getElementById('hud-attack-val').textContent = this.player.attack;
    document.getElementById('hud-potions-val').textContent = this.player.potions;
    document.getElementById('hud-keys-val').textContent = this.player.keys;
    document.getElementById('hud-score-val').textContent = this.player.totalScore.toLocaleString();

    // Actualizar indicador de objetivo / próximo jefe en el HUD
    const targetValEl = document.getElementById('hud-target-val');
    if (targetValEl && typeof BOSSES_DATA !== 'undefined' && this.player) {
      const nextBoss = BOSSES_DATA.find(b => !this.player.defeatedBosses.has(b.id));
      if (nextBoss) {
        targetValEl.textContent = `Jefe ${nextBoss.id}: ${nextBoss.name}`;
      } else {
        targetValEl.innerHTML = '¡Todos Vencidos! <img src="assets/icons/corona.png" class="pixel-icon" alt="Corona">';
      }
    }
  }

  // Mostrar vitrina de recompensas (Requisito 7)
  showRewardsModal(fromPause = false) {
    const modal = document.getElementById('rewards-modal');
    const isAlreadyOpen = modal && !modal.classList.contains('hidden');

    if (!isAlreadyOpen) {
      this.rewardsOpenedFromPause = fromPause || (this.gameState === 'paused');
      this.gameState = 'paused';
    }

    const grid = document.getElementById('rewards-grid');
    grid.innerHTML = '';

    BOSSES_DATA.forEach((boss) => {
      const card = document.createElement('div');
      card.className = 'reward-card';

      const isEarned = this.player.defeatedBosses.has(boss.id);
      const medalData = this.player.medals.find(m => m.bossId === boss.id);

      if (isEarned && medalData) {
        card.classList.add('unlocked');
        card.innerHTML = `
          <div class="reward-icon">
            <img class="reward-medal-img unlocked-medal" src="assets/images/medalla${boss.id}.png" alt="${boss.medal}">
          </div>
          <div class="reward-name">${boss.medal}</div>
          <div class="reward-boss">Jefe: ${boss.name} (Nivel ${boss.level})</div>
          <div class="reward-score">Puntaje: <strong>${medalData.score} PTS</strong></div>
          <div class="reward-theme">Dominado: ${boss.theme}</div>
        `;
      } else {
        card.classList.add('locked');
        card.innerHTML = `
          <div class="reward-icon">
            <img class="reward-medal-img locked-medal" src="assets/images/medalla${boss.id}.png" alt="${boss.medal}">
          </div>
          <div class="reward-name">Medalla Bloqueada</div>
          <div class="reward-boss">Jefe: ${boss.name} (Nivel ${boss.level})</div>
          <div class="reward-score">Derrota al jefe para ganar</div>
          <div class="reward-theme">Tema: ${boss.theme}</div>
        `;
      }

      grid.appendChild(card);
    });

    document.getElementById('rewards-modal').classList.remove('hidden');
    this.updateMobileControlsVisibility();
  }

  hideRewardsModal() {
    document.getElementById('rewards-modal').classList.add('hidden');
    if (this.rewardsOpenedFromPause) {
      this.rewardsOpenedFromPause = false;
      document.getElementById('pause-modal').classList.remove('hidden');
    } else {
      this.gameState = 'playing';
    }

    if (document.activeElement && typeof document.activeElement.blur === 'function') {
      document.activeElement.blur();
    }
    this.updateMobileControlsVisibility();
  }

  // Notificación flotante (Toast)
  showToast(message) {
    const toast = document.getElementById('game-toast');
    toast.innerHTML = message;
    toast.classList.remove('hidden');
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.classList.add('hidden');
    }, 3500);
  }

  // Finalización del juego (Requisito 8: Victoria tras derrotar a todos o al jefe 20)
  handleGameComplete() {
    this.gameState = 'complete';
    audioManager.playSfx('victory');

    // Registrar en el Ranking de la Nube (Requisito 7: Solo se registra si termina el juego)
    const user = (typeof authManager !== 'undefined') ? authManager.getCurrentUser() : null;
    const record = cloudRanking.registerCompletedGame(this.player.name, this.player.totalScore, this.player.medals.length, user);

    const modal = document.getElementById('game-complete-modal');
    document.getElementById('comp-player-name').textContent = this.player.name;
    document.getElementById('comp-score-final').textContent = `${this.player.totalScore.toLocaleString()} PTS`;
    document.getElementById('comp-medals-count').textContent = `${this.player.medals.length} / 20`;

    // Lista de medallas en la pantalla final con sprites reales
    const medalsList = document.getElementById('comp-medals-list');
    medalsList.innerHTML = '';
    this.player.medals.forEach(m => {
      const mBadge = document.createElement('div');
      mBadge.className = 'final-medal-badge';
      mBadge.innerHTML = `<img class="final-medal-img" src="assets/images/medalla${m.bossId}.png" alt="${m.medalName}"> <strong>${m.medalName}</strong> (+${m.score} pts)`;
      medalsList.appendChild(mBadge);
    });

    // Iniciar lluvia de medallas cayendo en pantalla
    if (this.medalsRain) {
      this.medalsRain.start(this.player.medals);
    }

    modal.classList.remove('hidden');
    this.updateMobileControlsVisibility();
    this.saveGameProgress();
  }

  // Modo de prueba administrativo para previsualizar la pantalla de victoria final
  // Simula la interfaz completa SIN alterar el progreso real del jugador ni guardar en el ranking
  triggerAdminVictoryTest() {
    try {
      // Cerrar cualquier otro modal o pantalla previa
      document.querySelectorAll('.modal-backdrop').forEach(m => {
        if (m.id !== 'game-complete-modal') m.classList.add('hidden');
      });
      const mainMenu = document.getElementById('main-menu-overlay');
      if (mainMenu) mainMenu.classList.add('hidden');
      const battleScreen = document.getElementById('battle-screen');
      if (battleScreen) battleScreen.classList.add('hidden');

      // Generar medallas y puntaje simulado SOLO para la vista del modal, SIN modificar el jugador real
      const mockMedals = (typeof BOSSES_DATA !== 'undefined' && Array.isArray(BOSSES_DATA))
        ? BOSSES_DATA.map(b => ({
            bossId: b.id,
            bossName: b.name,
            medalName: b.medal || `Medalla de ${b.name}`,
            medalIcon: b.medalIcon || '🏅',
            score: 1000 + b.id * 100
          }))
        : [];
      const mockScore = 25400;

      this.gameState = 'complete';
      if (typeof audioManager !== 'undefined' && audioManager.playSfx) {
        audioManager.playSfx('victory');
      }

      const modal = document.getElementById('game-complete-modal');
      if (!modal) {
        console.error("No se encontró el elemento #game-complete-modal en el DOM");
        return;
      }

      const nameEl = document.getElementById('comp-player-name');
      const activeU = (typeof authManager !== 'undefined') ? authManager.getCurrentUser() : null;
      if (nameEl) nameEl.textContent = (activeU && (activeU.heroName || activeU.name)) ? (activeU.heroName || activeU.name) : (this.player ? this.player.name : "Administrador");

      const scoreEl = document.getElementById('comp-score-final');
      if (scoreEl) scoreEl.textContent = `${mockScore.toLocaleString()} PTS`;

      const countEl = document.getElementById('comp-medals-count');
      if (countEl) countEl.textContent = `20 / 20`;

      // Lista de medallas en la pantalla final con sprites reales
      const medalsList = document.getElementById('comp-medals-list');
      if (medalsList) {
        medalsList.innerHTML = '';
        mockMedals.forEach(m => {
          const mBadge = document.createElement('div');
          mBadge.className = 'final-medal-badge';
          mBadge.innerHTML = `<img class="final-medal-img" src="assets/images/medalla${m.bossId}.png" alt="${m.medalName}"> <strong>${m.medalName}</strong> (+${m.score} pts)`;
          medalsList.appendChild(mBadge);
        });
      }

      // Iniciar lluvia de medallas cayendo en pantalla
      if (this.medalsRain) {
        this.medalsRain.start(mockMedals);
      }

      modal.classList.remove('hidden');
      modal.style.display = 'flex';
      this.updateMobileControlsVisibility();
      this.showToast('🏆 [Admin] Mostrando Vista Previa de Victoria (Sin afectar tu partida).');
    } catch (err) {
      console.error("[Admin Victory Test Error]:", err);
      alert("Error al mostrar victoria final: " + err.message);
    }
  }

  // Interacción del jugador con objetos y personajes
  handleInteraction() {
    if (!this.activeInteractEntity) return;

    const { type, data } = this.activeInteractEntity;

    if (type === 'sign') {
      // Leer Letrero con Dato Curioso de Java (Requisito 4)
      audioManager.playSfx('read');
      document.getElementById('sign-title').textContent = data.title;
      document.getElementById('sign-category').textContent = `Categoría: ${data.category}`;
      document.getElementById('sign-body').textContent = data.text;
      document.getElementById('sign-modal').classList.remove('hidden');
      this.updateMobileControlsVisibility();

    } else if (type === 'chest') {
      // 1. Condicional de zona: Si el cofre pertenece a la zona de un jefe alto, validar que el jefe previo esté derrotado
      if (data.requiredBoss && data.requiredBoss > 0) {
        if (!this.player.defeatedBosses.has(data.requiredBoss)) {
          audioManager.playSfx('wrong');
          const reqBoss = BOSSES_DATA.find(b => b.id === data.requiredBoss);
          const reqName = reqBoss ? reqBoss.name : `Jefe ${data.requiredBoss}`;
          const currentBoss = BOSSES_DATA.find(b => b.id === data.bossId);
          const currentName = currentBoss ? currentBoss.name : `Jefe ${data.bossId}`;
          this.showToast(`<img src="assets/icons/candado.png" class="pixel-icon" alt="Sellado"> ¡Cofre sellado mágicamente en la zona de ${currentName}! Debes derrotar primero al Jefe ${data.requiredBoss}: ${reqName}.`);
          return;
        }
      }

      // Abrir Cofre y obtener 1 de 3 items: espada, poción o llaves (Requisito 4)
      data.opened = true;

      if (data.item === 'sword') {
        audioManager.playSfx('sword');
        this.player.attack += 5; // Aumenta 5 de ataque
        this.showToast(`<img src="assets/icons/espada.png" class="pixel-icon" alt="Espada"> ¡Encontraste una Espada de Acero Templado! Ataque +5 (Total: ${this.player.attack})`);
      } else if (data.item === 'potion') {
        audioManager.playSfx('potion');
        this.player.potions += 1; // Suma poción
        this.showToast(`<img src="assets/icons/pocion.png" class="pixel-icon" alt="Poción"> ¡Encontraste una Poción Curativa! Añadida a tu inventario.`);
      } else if (data.item === 'key') {
        audioManager.playSfx('key');
        this.player.keys += 1; // Suma llave para jefe
        this.showToast(`<img src="assets/icons/llave.png" class="pixel-icon" alt="Llave"> ¡Encontraste una Llave de Mazmorra! Necesaria para retar a los jefes.`);
      }

      this.updateHud();
      this.saveGameProgress();

    } else if (type === 'boss') {
      // 1. Ya derrotado
      if (this.player.defeatedBosses.has(data.id)) {
        this.showToast(`<img src="assets/icons/medalla.png" class="pixel-icon" alt="Medalla"> Ya has derrotado a ${data.name}. ¡Su medalla brilla en tus recompensas!`);
        return;
      }

      // 2. Condicional de orden obligatorio: Retar a los jefes en secuencia (1 -> 2 -> 3 -> ... -> 20)
      if (data.id > 1 && !this.player.defeatedBosses.has(data.id - 1)) {
        audioManager.playSfx('wrong');
        const prevBoss = BOSSES_DATA.find(b => b.id === data.id - 1);
        const prevName = prevBoss ? prevBoss.name : `Jefe ${data.id - 1}`;
        this.showToast(`<img src="assets/icons/candado.png" class="pixel-icon" alt="Sellado"> ¡El santuario de ${data.name} está sellado! Debes derrotar primero al Jefe ${data.id - 1}: ${prevName}.`);
        return;
      }

      // 3. Desafiar Jefe (Requiere 1 llave por jefe según Requisito 4)
      if (this.player.keys <= 0) {
        audioManager.playSfx('wrong');
        this.showToast(`<img src="assets/icons/llave.png" class="pixel-icon" alt="Llave"> ¡Necesitas 1 Llave de Mazmorra para desafiar a ${data.name}! Busca cofres en el reino.`);
        return;
      }

      // Consumir 1 llave y entrar a batalla
      this.player.keys--;
      this.updateHud();
      this.gameState = 'battle';
      this.updateMobileControlsVisibility();
      this.battle.startBattle(data);
    }
  }

  // Actualización de física y movimiento
  update(dt) {
    if (this.gameState === 'paused') {
      if (this.input.isPause) {
        audioManager.playSfx('click');
        this.resumeGame();
      }
      return;
    }

    if (this.gameState === 'battle') {
      if (this.input.isPause) {
        if (this.battle) this.battle.togglePause();
      }
      return;
    }

    if (this.gameState !== 'playing') return;

    // Verificar tecla de Pausa (ESC o P)
    if (this.input.isPause) {
      this.pauseGame();
      return;
    }

    // Movimiento del héroe
    let dx = 0;
    let dy = 0;

    if (this.input.isUp) {
      dy -= 1;
      this.player.direction = 'up';
    }
    if (this.input.isDownDir) {
      dy += 1;
      this.player.direction = 'down';
    }
    if (this.input.isLeft) {
      dx -= 1;
      this.player.direction = 'left';
    }
    if (this.input.isRight) {
      dx += 1;
      this.player.direction = 'right';
    }

    // Normalizar vector diagonal para velocidad constante
    if (dx !== 0 && dy !== 0) {
      const length = Math.sqrt(dx * dx + dy * dy);
      dx /= length;
      dy /= length;
    }

    // Actualizar animación del sprite si hay desplazamiento
    if (dx !== 0 || dy !== 0) {
      this.player.isMoving = true;
      this.player.animTimer += dt * 10;
      if (this.player.animTimer >= 1) {
        this.player.animFrame = (this.player.animFrame + 1) % 4;
        this.player.animTimer = 0;
      }
    } else {
      this.player.isMoving = false;
      this.player.animFrame = 0;
    }

    // Colisiones con sólidos y bordes del mapa (Eje X)
    if (dx !== 0) {
      const newX = this.player.x + dx * this.player.speed * dt;
      const nTileX1 = Math.floor(newX / 32);
      const nTileX2 = Math.floor((newX + 24) / 32);
      const nTileY1 = Math.floor(this.player.y / 32);
      const nTileY2 = Math.floor((this.player.y + 24) / 32);

      if (!this.map.isSolid(nTileX1, nTileY1) && !this.map.isSolid(nTileX2, nTileY1) &&
        !this.map.isSolid(nTileX1, nTileY2) && !this.map.isSolid(nTileX2, nTileY2)) {
        this.player.x = newX;
      }
    }

    // Colisiones con sólidos y bordes del mapa (Eje Y)
    if (dy !== 0) {
      const newY = this.player.y + dy * this.player.speed * dt;
      const nTileX1 = Math.floor(this.player.x / 32);
      const nTileX2 = Math.floor((this.player.x + 24) / 32);
      const nTileY1 = Math.floor(newY / 32);
      const nTileY2 = Math.floor((newY + 24) / 32);

      if (!this.map.isSolid(nTileX1, nTileY1) && !this.map.isSolid(nTileX2, nTileY1) &&
        !this.map.isSolid(nTileX1, nTileY2) && !this.map.isSolid(nTileX2, nTileY2)) {
        this.player.y = newY;
      }
    }

    // Centrar cámara suavemente
    this.camera.follow(this.player.x + 12, this.player.y + 14);

    // Detección de entidades cercanas para interactuar
    this.activeInteractEntity = this.map.getNearbyEntity(this.player.x, this.player.y);

    // Actualizar apariencia y texto del botón táctil de acción
    const touchActionBtn = document.getElementById('btn-touch-action');
    if (touchActionBtn) {
      if (this.activeInteractEntity) {
        touchActionBtn.classList.add('entity-nearby');
        const iconEl = touchActionBtn.querySelector('.touch-btn-icon');
        const subEl = touchActionBtn.querySelector('.touch-btn-sub');
        if (this.activeInteractEntity.type === 'boss') {
          const boss = this.activeInteractEntity.data;
          const isDefeated = this.player.defeatedBosses.has(boss.id);
          const isLocked = !isDefeated && boss.id > 1 && !this.player.defeatedBosses.has(boss.id - 1);
          if (iconEl) iconEl.innerHTML = isDefeated ? '<img src="assets/icons/medalla.png" class="pixel-icon" alt="Vencido">' : (isLocked ? '<img src="assets/icons/candado.png" class="pixel-icon" alt="Sellado">' : '<img src="assets/icons/espadas_cruzadas.png" class="pixel-icon" alt="Batalla">');
          if (subEl) subEl.textContent = isDefeated ? '¡Vencido!' : (isLocked ? '¡Sellado!' : '¡Batalla!');
        } else if (this.activeInteractEntity.type === 'chest') {
          const chest = this.activeInteractEntity.data;
          const isLocked = !chest.opened && chest.requiredBoss > 0 && !this.player.defeatedBosses.has(chest.requiredBoss);
          if (iconEl) iconEl.innerHTML = isLocked ? '<img src="assets/icons/candado.png" class="pixel-icon" alt="Sellado">' : '<img src="assets/icons/mochila.png" class="pixel-icon" alt="Cofre">';
          if (subEl) subEl.textContent = isLocked ? '¡Sellado!' : '¡Abrir!';
        } else if (this.activeInteractEntity.type === 'sign') {
          if (iconEl) iconEl.innerHTML = '<img src="assets/icons/pergamino.png" class="pixel-icon" alt="Leer">';
          if (subEl) subEl.textContent = '¡Leer!';
        }
      } else {
        touchActionBtn.classList.remove('entity-nearby');
        const iconEl = touchActionBtn.querySelector('.touch-btn-icon');
        const subEl = touchActionBtn.querySelector('.touch-btn-sub');
        if (iconEl && !iconEl.querySelector('img[src*="espadas_cruzadas"]')) {
          iconEl.innerHTML = '<img src="assets/icons/espadas_cruzadas.png" class="pixel-icon" alt="Acción">';
        }
        if (subEl && subEl.textContent !== '[E] Acción') subEl.textContent = '[E] Acción';
      }
    }

    // Tecla de interacción (E / Espacio / Enter)
    if (this.input.isInteract) {
      this.handleInteraction();
    }
  }

  // Renderizado del juego
  render() {
    const ctx = this.renderer.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.gameState === 'menu') {
      // Fondo animado del Menú Principal: Lluvia de código medieval y antorchas
      this.renderMenuBackground();
      return;
    }

    // 1. Dibujar tiles visibles del mapa
    const startCol = Math.max(0, Math.floor(this.camera.x / 32));
    const endCol = Math.min(this.map.width - 1, Math.ceil((this.camera.x + this.canvas.width) / 32));
    const startRow = Math.max(0, Math.floor(this.camera.y / 32));
    const endRow = Math.min(this.map.height - 1, Math.ceil((this.camera.y + this.canvas.height) / 32));

    for (let r = startRow; r <= endRow; r++) {
      for (let c = startCol; c <= endCol; c++) {
        const screenPos = this.camera.toScreen(c * 32, r * 32);
        const neighbors = this.map.getTileNeighbors ? this.map.getTileNeighbors(c, r) : null;
        this.renderer.drawTile(this.map.tiles[r][c], screenPos.x, screenPos.y, 32, neighbors);
      }
    }

    // 1.5 Dibujar Mesetas decorativas de pasto elevadas (Requisito 7)
    if (this.map.plateaus) {
      this.renderer.drawPlateaus(this.map.plateaus, this.camera);
    }

    // 2. Dibujar Letreros
    this.map.signs.forEach(sign => {
      const pos = this.camera.toScreen(sign.position.x * 32, sign.position.y * 32);
      this.renderer.drawSign(sign, pos.x, pos.y);
    });

    // 2.5 Dibujar Decoraciones de Naturaleza (árboles, hongos, flores, rocas, hierba)
    const decors = this.map.decorations || this.map.vegetation;
    if (decors) {
      decors.forEach(decor => {
        const pos = this.camera.toScreen(decor.x * 32, decor.y * 32);
        this.renderer.drawDecoration(decor, pos.x, pos.y);
      });
    }

    // 3. Dibujar Cofres
    this.map.chests.forEach(chest => {
      const pos = this.camera.toScreen(chest.x * 32, chest.y * 32);
      const isLocked = !chest.opened && chest.requiredBoss > 0 && !this.player.defeatedBosses.has(chest.requiredBoss);
      this.renderer.drawChest(chest, pos.x, pos.y, isLocked);
    });

    // 4. Dibujar los 20 Jefes
    this.map.bosses.forEach(boss => {
      const pos = this.camera.toScreen(boss.position.x * 32, boss.position.y * 32);
      const isDefeated = this.player.defeatedBosses.has(boss.id);
      const isLocked = !isDefeated && boss.id > 1 && !this.player.defeatedBosses.has(boss.id - 1);
      this.renderer.drawBoss(boss, pos.x, pos.y, isDefeated, isLocked);
    });

    // 5. Dibujar al Jugador
    const playerScreenPos = this.camera.toScreen(this.player.x, this.player.y);
    this.renderer.drawPlayer(playerScreenPos.x, playerScreenPos.y, this.player.direction, this.player.isMoving, 0);

    // 5.5 Flechas y Baliza Guía hacia el próximo jefe a enfrentar
    if (this.player && typeof BOSSES_DATA !== 'undefined') {
      const nextBoss = BOSSES_DATA.find(b => !this.player.defeatedBosses.has(b.id));
      if (nextBoss) {
        this.renderer.drawBossGuide(playerScreenPos, nextBoss, this.camera, this.player.x, this.player.y);
      }
    }

    // 6. Indicador de Interacción si hay un objeto cercano
    if (this.activeInteractEntity) {
      let entPos;
      let promptText = "[E] Interactuar";
      let iconType = null;

      if (this.activeInteractEntity.type === 'sign') {
        entPos = this.camera.toScreen(this.activeInteractEntity.data.position.x * 32, this.activeInteractEntity.data.position.y * 32);
        promptText = "[E] Leer Dato";
      } else if (this.activeInteractEntity.type === 'chest') {
        const chest = this.activeInteractEntity.data;
        const isLocked = !chest.opened && chest.requiredBoss > 0 && !this.player.defeatedBosses.has(chest.requiredBoss);
        entPos = this.camera.toScreen(chest.x * 32, chest.y * 32);
        promptText = isLocked ? "[E] Cofre Sellado" : "[E] Abrir Cofre";
        if (isLocked) iconType = 'candado';
      } else if (this.activeInteractEntity.type === 'boss') {
        const boss = this.activeInteractEntity.data;
        const isDefeated = this.player.defeatedBosses.has(boss.id);
        const isLocked = !isDefeated && boss.id > 1 && !this.player.defeatedBosses.has(boss.id - 1);
        entPos = this.camera.toScreen(boss.position.x * 32, boss.position.y * 32);
        if (isDefeated) {
          promptText = `[E] ${boss.name} (Vencido)`;
          iconType = 'medalla';
        } else if (isLocked) {
          promptText = `[E] Bloqueado (Vence al Jefe ${boss.id - 1})`;
          iconType = 'candado';
        } else {
          promptText = `[E] Batalla (1 Llave)`;
        }
      }

      if (entPos) {
        this.renderer.drawInteractPrompt(entPos.x, entPos.y, promptText, iconType);
      }
    }
  }

  // Fondo animado temático para el Menú de Inicio (Requisito 1)
  renderMenuBackground() {
    const ctx = this.renderer.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    // Fondo degradado cósmico medieval
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#020617');
    grad.addColorStop(0.5, '#0f172a');
    grad.addColorStop(1, '#1e1b4b');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Lluvia de código binario y palabras reservadas de Java cayendo
    const t = this.renderer.animTime;
    const javaKeywords = ['public', 'class', 'void', 'int', 'String', 'new', 'return', 'extends', 'implements', 'JVM', '1010', '0101'];

    ctx.font = '12px monospace';
    ctx.textAlign = 'center';

    for (let i = 0; i < 35; i++) {
      const colX = (i * (w / 35)) + 15;
      const speed = 45 + (i % 7) * 15;
      const y = (t * speed + i * 90) % (h + 60) - 30;
      const word = javaKeywords[i % javaKeywords.length];

      ctx.fillStyle = `rgba(56, 189, 248, ${(0.15 + (i % 5) * 0.08)})`;
      ctx.fillText(word, colX, y);
    }

    // Partículas de chispas mágicas doradas flotando
    for (let p = 0; p < 25; p++) {
      const px = (p * 77 + Math.sin(t + p) * 40) % w;
      const py = (h - ((t * 30 + p * 45) % h));
      ctx.fillStyle = 'rgba(251, 191, 36, 0.45)';
      ctx.fillRect(px, py, 3, 3);
    }
  }

  // Bucle principal del juego (Game Loop a 60 FPS)
  gameLoop(currentTime) {
    if (!this.lastTime) this.lastTime = currentTime;
    const dt = Math.min(0.1, (currentTime - this.lastTime) / 1000);
    this.lastTime = currentTime;

    this.renderer.update(dt);
    this.update(dt);
    this.render();

    this.input.resetFrame();
    requestAnimationFrame((t) => this.gameLoop(t));
  }
}

// Iniciar al cargar el DOM con soporte para carga inmediata o diferida
let activeGameSession = null;
function startCodeQuest() {
  if (!activeGameSession) {
    activeGameSession = new CodeQuestGame();
    // Solo exponer en el objeto window si el modo desarrollador está explícitamente activo (?dev=true o ?admin=true)
    if (window.__CODE_QUEST_DEV__) {
      window.gameInstance = activeGameSession;
      console.log("🎮 Code Quest iniciado en Modo Desarrollador / Administrador.");
    }

    // Atajos de consola y disparador por URL para el Administrador
    window.testVictory = () => activeGameSession.triggerAdminVictoryTest();
    window.testVictoryScreen = () => activeGameSession.triggerAdminVictoryTest();

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('test') === 'victory' || urlParams.get('admin') === 'victory') {
      setTimeout(() => {
        activeGameSession.triggerAdminVictoryTest();
      }, 700);
    }
  }
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', startCodeQuest);
} else {
  startCodeQuest();
}

// Desbloqueo universal de audio con el primer clic o toque en cualquier parte de la pantalla
const unlockAudioOnGesture = () => {
  if (typeof audioManager !== 'undefined') {
    if (audioManager.isMuted) return; // Si el usuario ya lo silenció, no forzar música
    if (!audioManager.currentMusic) {
      audioManager.startMusic('menu');
    } else if (audioManager.currentMusic.paused && !audioManager.isMuted) {
      audioManager.currentMusic.play().catch(() => { });
    }
  }
  window.removeEventListener('click', unlockAudioOnGesture);
  window.removeEventListener('keydown', unlockAudioOnGesture);
  window.removeEventListener('touchstart', unlockAudioOnGesture);
};
window.addEventListener('click', unlockAudioOnGesture);
window.addEventListener('keydown', unlockAudioOnGesture);
window.addEventListener('touchstart', unlockAudioOnGesture);
