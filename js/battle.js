// Motor de Combate por Turnos de Code Quest (Estilo RPG / Pokémon)
class BattleManager {
  constructor(game) {
    this.game = game;
    this.activeBoss = null;
    this.bossCurrentHp = 0;
    this.bossMaxHp = 0;
    this.currentQuestion = null;
    this.mistakesCount = 0;
    this.isPlayerTurn = true;
    this.isAnswering = false;
    this.isAttacking = false;
    this.attackFrame = 0;
    this.battleLog = "";

    // Elementos del DOM de Combate
    this.overlay = document.getElementById('battle-screen');
    this.bossNameEl = document.getElementById('battle-boss-name');
    this.bossLevelEl = document.getElementById('battle-boss-level');
    this.bossHpFillEl = document.getElementById('battle-boss-hp-fill');
    this.bossHpTextEl = document.getElementById('battle-boss-hp-text');
    this.bossSpriteCanvas = document.getElementById('battle-boss-sprite');
    this.playerSpriteCanvas = document.getElementById('battle-player-sprite');
    this.battleDialogEl = document.getElementById('battle-dialog-text');

    // Elementos del HUD del Jugador en Batalla (Requisito 9)
    this.playerNameEl = document.getElementById('battle-player-name');
    this.playerAttackEl = document.getElementById('battle-player-attack-stat');
    this.playerHpFillEl = document.getElementById('battle-player-hp-fill');
    this.playerHpTextEl = document.getElementById('battle-player-hp-text');
    this.playerPotionsEl = document.getElementById('battle-player-potions-text');
    this.playerKeysEl = document.getElementById('battle-player-keys-text');
    this.playerScoreEl = document.getElementById('battle-player-score-text');
    this.attackLunge = 0;

    // Paneles de opciones
    this.actionsPanel = document.getElementById('battle-actions-panel');
    this.questionPanel = document.getElementById('battle-question-panel');
    this.inventoryPanel = document.getElementById('battle-inventory-panel');

    this.btnAttack = document.getElementById('btn-battle-attack');
    this.btnInventory = document.getElementById('btn-battle-inventory');
    this.btnBackAction = document.getElementById('btn-battle-back');

    // Elementos del DOM para Pausa y Retirada en Combate
    this.btnBattlePause = document.getElementById('btn-battle-pause');
    this.pauseModal = document.getElementById('battle-pause-modal');
    this.btnResume = document.getElementById('btn-battle-resume');
    this.btnRetreat = document.getElementById('btn-battle-retreat');
    this.playerCombatantBox = document.getElementById('battle-player-combatant-box');

    this.isPaused = false;
    this.isEscaping = false;

    this.setupListeners();
  }

  setupListeners() {
    this.btnAttack.addEventListener('click', () => {
      if (this.isEscaping || this.isPaused) return;
      audioManager.playSfx('click');
      this.showQuestion();
    });

    this.btnInventory.addEventListener('click', () => {
      if (this.isEscaping || this.isPaused) return;
      audioManager.playSfx('click');
      this.showInventory();
    });

    this.btnBackAction.addEventListener('click', () => {
      if (this.isEscaping || this.isPaused) return;
      audioManager.playSfx('click');
      this.showMainMenu();
    });

    // Control de Pausa en Combate
    if (this.btnBattlePause) {
      this.btnBattlePause.addEventListener('click', () => {
        if (!this.isEscaping) this.togglePause();
      });
    }

    if (this.btnResume) {
      this.btnResume.addEventListener('click', () => {
        audioManager.playSfx('click');
        this.resumeBattle();
      });
    }

    if (this.btnRetreat) {
      this.btnRetreat.addEventListener('click', () => {
        audioManager.playSfx('click');
        this.handleRetreat();
      });
    }
  }

  startBattle(boss) {
    this.activeBoss = boss;
    this.bossMaxHp = boss.hp;
    this.bossCurrentHp = boss.hp;
    this.mistakesCount = 0;
    this.isPlayerTurn = true;
    this.isAnswering = false;
    this.isAttacking = false;
    this.attackFrame = 0;
    this.currentQuestionIndex = 0;

    // Iniciar música específica del jefe (assets/audio/jefe{id}.mp3)
    audioManager.startMusic('battle', boss.id);

    // Iniciar loop de animación de combate
    this.startCombatAnimationLoop();

    // Inicializar HUD de jefe y del jugador (Requisito 9)
    this.bossNameEl.textContent = boss.name;
    this.bossLevelEl.textContent = `NIVEL ${boss.level}`;
    this.updateBossHpBar();
    this.updatePlayerBattleStats();

    // Renderizar sprites de combate
    this.renderCombatSprites();

    // Diálogo introductorio del jefe
    this.setDialog(`¡${boss.name} aparece! "${boss.intro}"`);

    // Mostrar menú de acciones principales
    this.showMainMenu();

    // Desplegar pantalla
    this.overlay.classList.remove('hidden');

    // Ocultar controles táctiles durante el combate para no obstruir preguntas
    if (this.game.updateMobileControlsVisibility) {
      this.game.updateMobileControlsVisibility();
    }

    // Resetear estados de pausa y huida
    this.isPaused = false;
    this.isEscaping = false;
    if (this.pauseModal) this.pauseModal.classList.add('hidden');
    if (this.playerCombatantBox) this.playerCombatantBox.classList.remove('player-escaping');
    if (this.btnAttack) this.btnAttack.disabled = false;
    if (this.btnInventory) this.btnInventory.disabled = false;
    if (this.btnBattlePause) this.btnBattlePause.disabled = false;
  }

  // Pausa de Combate
  pauseBattle() {
    if (this.isEscaping) return;
    this.isPaused = true;
    audioManager.playSfx('pause');
    if (this.pauseModal) {
      this.pauseModal.classList.remove('hidden');
    }
  }

  resumeBattle() {
    this.isPaused = false;
    audioManager.stopSfx('pause');
    if (this.pauseModal) {
      this.pauseModal.classList.add('hidden');
    }
  }

  togglePause() {
    if (this.isPaused) {
      this.resumeBattle();
    } else {
      this.pauseBattle();
    }
  }

  // Retirada del Combate con Animación de Escape
  handleRetreat() {
    if (this.isEscaping) return;
    this.resumeBattle(); // Cerrar modal de pausa
    this.isEscaping = true;
    this.isAnswering = true; // Bloquear selección de preguntas o botones

    // Deshabilitar interacción durante el escape
    if (this.btnAttack) this.btnAttack.disabled = true;
    if (this.btnInventory) this.btnInventory.disabled = true;
    if (this.btnBattlePause) this.btnBattlePause.disabled = true;

    this.setDialog("¡El héroe decide retirarse del combate! Huida táctica hacia un lugar seguro...");
    audioManager.playSfx('retreat');

    // Desplazar al jugador a la derecha hacia fuera de la pantalla
    if (this.playerCombatantBox) {
      this.playerCombatantBox.classList.add('player-escaping');
    }

    // Al terminar la animación (~1.55s), finalizar la retirada
    setTimeout(() => {
      this.finishRetreat();
    }, 1550);
  }

  finishRetreat() {
    if (this.playerCombatantBox) {
      this.playerCombatantBox.classList.remove('player-escaping');
    }
    if (this.btnAttack) this.btnAttack.disabled = false;
    if (this.btnInventory) this.btnInventory.disabled = false;
    if (this.btnBattlePause) this.btnBattlePause.disabled = false;

    this.isEscaping = false;
    this.isAnswering = false;

    // Cerrar la pantalla de combate
    this.closeBattleQuietly();

    // Reubicar al jugador a una distancia prudente en el mapa (48px al sur del jefe)
    // para no reiniciar la interacción accidentalmente
    if (this.game && this.game.player) {
      this.game.player.y += 48;
      this.game.player.direction = 'down';
      // Limitar bordes del mapa
      this.game.player.y = Math.min(this.game.player.y, (this.game.map.height - 3) * 32);
      this.game.camera.follow(this.game.player.x + 12, this.game.player.y + 14);
      this.game.updateHud();
    }

    // Reanudar música de exploración y estado de juego
    audioManager.startMusic('explore');
    this.game.gameState = 'playing';
    if (this.game.updateMobileControlsVisibility) {
      this.game.updateMobileControlsVisibility();
    }

    // Notificación clara: Los ítems usados (llave y pociones) se han consumido y no se recuperan
    this.game.showToast("¡Te has retirado de la batalla! Los ítems consumidos (llaves y pociones) no se pueden recuperar.");
  }

  updateBossHpBar() {
    const pct = Math.max(0, Math.min(100, (this.bossCurrentHp / this.bossMaxHp) * 100));
    this.bossHpFillEl.style.width = `${pct}%`;
    this.bossHpTextEl.textContent = `${Math.max(0, this.bossCurrentHp)} / ${this.bossMaxHp} HP`;
  }

  // Actualizar estadísticas visibles del jugador en batalla (Requisito 9)
  updatePlayerBattleStats() {
    if (this.playerNameEl) this.playerNameEl.textContent = this.game.player.name;
    if (this.playerAttackEl) this.playerAttackEl.textContent = `🗡️ ATQ: ${this.game.player.attack}`;
    if (this.playerHpFillEl) {
      const pct = Math.max(0, Math.min(100, (this.game.player.hearts / this.game.player.maxHearts) * 100));
      this.playerHpFillEl.style.width = `${pct}%`;
    }
    if (this.playerHpTextEl) this.playerHpTextEl.textContent = `${this.game.player.hearts} / ${this.game.player.maxHearts} ❤️`;
    if (this.playerPotionsEl) this.playerPotionsEl.textContent = `🧪 ${this.game.player.potions}`;
    if (this.playerKeysEl) this.playerKeysEl.textContent = `🗝️ ${this.game.player.keys}`;
    if (this.playerScoreEl) this.playerScoreEl.textContent = `⭐ ${this.game.player.totalScore.toLocaleString()} PTS`;
  }

  setDialog(text) {
    this.battleDialogEl.textContent = text;
  }

  showMainMenu() {
    this.actionsPanel.classList.remove('hidden');
    this.questionPanel.classList.add('hidden');
    this.inventoryPanel.classList.add('hidden');
  }

  showInventory() {
    this.actionsPanel.classList.add('hidden');
    this.questionPanel.classList.add('hidden');
    this.inventoryPanel.classList.remove('hidden');

    const invList = document.getElementById('battle-inventory-items');
    invList.innerHTML = `
      <div class="inv-card">
        <div class="inv-icon">🗡️</div>
        <div class="inv-details">
          <h4>Espada Heroica</h4>
          <p>Poder de Ataque: <strong>${this.game.player.attack}</strong></p>
        </div>
      </div>
      <div class="inv-card">
        <div class="inv-icon">🧪</div>
        <div class="inv-details">
          <h4>Poción de Vida (${this.game.player.potions})</h4>
          <p>Restaura 1 Corazón de vida</p>
        </div>
        <button id="btn-use-potion-battle" class="btn-retro btn-small" ${this.game.player.potions <= 0 || this.game.player.hearts >= 5 ? 'disabled' : ''}>
          Usar
        </button>
      </div>
      <div class="inv-card">
        <div class="inv-icon">🗝️</div>
        <div class="inv-details">
          <h4>Llaves de Mazmorra</h4>
          <p>Disponibles: <strong>${this.game.player.keys}</strong></p>
        </div>
      </div>
    `;

    const btnUsePotion = document.getElementById('btn-use-potion-battle');
    if (btnUsePotion) {
      btnUsePotion.addEventListener('click', () => {
        if (this.game.player.potions > 0 && this.game.player.hearts < 5) {
          this.game.player.potions--;
          this.game.player.hearts = Math.min(5, this.game.player.hearts + 1);
          this.game.updateHud();
          this.updatePlayerBattleStats();
          audioManager.playSfx('potion');
          this.setDialog("¡Has bebido una poción! Recuperas 1 Corazón de vida.");
          this.showInventory(); // Refrescar vista
        }
      });
    }
  }

  showQuestion() {
    this.actionsPanel.classList.add('hidden');
    this.inventoryPanel.classList.add('hidden');
    this.questionPanel.classList.remove('hidden');

    // Banco de 20 preguntas ordenadas del jefe actual (sin azar, secuencial 1..20)
    const qList = QUESTIONS_DATA[this.activeBoss.level] || QUESTIONS_DATA[this.activeBoss.id] || QUESTIONS_DATA[1];
    const question = qList[this.currentQuestionIndex % qList.length];
    this.currentQuestion = question;
    this.currentQuestionIndex++;

    const qTitle = document.getElementById('battle-question-text');
    const optionsContainer = document.getElementById('battle-options-container');

    qTitle.textContent = question.question;
    optionsContainer.innerHTML = '';

    question.options.forEach((optText, index) => {
      const btn = document.createElement('button');
      btn.className = 'btn-retro btn-option';
      btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)})</span> ${optText}`;
      btn.addEventListener('click', () => this.handleAnswer(index));
      optionsContainer.appendChild(btn);
    });

    this.setDialog(`Pregunta de Java (Nivel ${this.activeBoss.level}): ¡Elige la respuesta correcta para atacar!`);
  }

  handleAnswer(selectedIndex) {
    if (this.isAnswering) return;
    this.isAnswering = true;

    const isCorrect = selectedIndex === this.currentQuestion.correct;
    const optionsContainer = document.getElementById('battle-options-container');
    const optionButtons = optionsContainer.querySelectorAll('button');

    optionButtons.forEach((btn, idx) => {
      btn.disabled = true;
      if (idx === this.currentQuestion.correct) {
        btn.classList.add('correct');
      } else if (idx === selectedIndex) {
        btn.classList.add('wrong');
      }
    });

    if (isCorrect) {
      // ACIERTO: Ataque del jugador al jefe
      audioManager.playSfx('correct');
      setTimeout(() => {
        audioManager.playSfx('slash');
        this.triggerPlayerAttackAnimation();

        const damage = this.game.player.attack;
        this.bossCurrentHp -= damage;
        this.updateBossHpBar();
        this.animateSprite(this.bossSpriteCanvas, 'shake');

        this.setDialog(`¡Correcto! ${this.currentQuestion.explanation}\n¡Atacas a ${this.activeBoss.name} infligiendo ${damage} puntos de daño!`);

        setTimeout(() => {
          if (this.bossCurrentHp <= 0) {
            this.handleVictory();
          } else {
            this.isAnswering = false;
            this.showMainMenu();
          }
        }, 1800);
      }, 600);

    } else {
      // ERROR: Daño recibido por el jefe
      this.mistakesCount++;
      audioManager.playSfx('wrong');

      setTimeout(() => {
        audioManager.playSfx('hurt');
        const bossDmg = this.activeBoss.attack;
        this.game.player.hearts = Math.max(0, this.game.player.hearts - bossDmg);
        this.game.updateHud();
        this.updatePlayerBattleStats();
        this.animateSprite(this.playerSpriteCanvas, 'flash-red');

        this.setDialog(`¡Incorrecto! ${this.currentQuestion.explanation}\n${this.activeBoss.name} contraataca y te quita ${bossDmg} corazón(es).`);

        setTimeout(() => {
          if (this.game.player.hearts <= 0) {
            this.handleDefeat();
          } else {
            this.isAnswering = false;
            this.showMainMenu();
          }
        }, 2200);
      }, 700);
    }
  }

  // Animación secuencial de espadazo usando los 3 sprites recortados de ataque con embestida hacia adelante (Requisito 8)
  triggerPlayerAttackAnimation() {
    this.isAttacking = true;
    this.attackFrame = 0; // jugador_ataque_1.png (elevación de espada y anticipación)
    this.attackLunge = 16; // avance inicial hacia el jefe

    setTimeout(() => {
      this.attackFrame = 1; // jugador_ataque_2.png (estocada descendente cortante con impacto)
      this.attackLunge = 38; // estocada profunda
      if (this.bossSpriteCanvas) {
        this.animateSprite(this.bossSpriteCanvas, 'shake');
      }

      setTimeout(() => {
        this.attackFrame = 2; // jugador_ataque_3.png (corte amplio extendido y remate)
        this.attackLunge = 24;

        setTimeout(() => {
          this.isAttacking = false;
          this.attackFrame = 0;
          this.attackLunge = 0;
        }, 220);
      }, 200);
    }, 180);
  }

  handleVictory() {
    audioManager.playSfx('victory');

    // Calcular puntaje de la medalla según fallos
    // Menos errores = Más puntaje
    const basePoints = 1000;
    const penaltyPerError = 180;
    let earnedPoints = Math.max(250, basePoints - (this.mistakesCount * penaltyPerError));
    if (this.mistakesCount === 0) {
      earnedPoints += 300; // Bono de respuesta perfecta
    }

    // Guardar medalla obtenida
    const medalObj = {
      bossId: this.activeBoss.id,
      bossName: this.activeBoss.name,
      medalName: this.activeBoss.medal,
      medalIcon: this.activeBoss.medalIcon,
      theme: this.activeBoss.theme,
      mistakes: this.mistakesCount,
      score: earnedPoints,
      date: new Date().toLocaleTimeString()
    };

    // Evitar duplicar si ya la tenía (actualizar puntaje si fue mejor)
    const existingIdx = this.game.player.medals.findIndex(m => m.bossId === this.activeBoss.id);
    if (existingIdx >= 0) {
      if (earnedPoints > this.game.player.medals[existingIdx].score) {
        this.game.player.medals[existingIdx] = medalObj;
      }
    } else {
      this.game.player.medals.push(medalObj);
    }

    this.game.player.defeatedBosses.add(this.activeBoss.id);
    this.game.player.totalScore += earnedPoints;
    this.game.updateHud();

    // Mostrar Modal de Victoria sobre el jefe
    this.showVictoryModal(medalObj);
  }

  showVictoryModal(medal) {
    const modal = document.getElementById('boss-victory-modal');
    document.getElementById('vic-boss-name').textContent = this.activeBoss.name;

    // Desplegar el sprite real de la medalla ganada
    const medalIconEl = document.getElementById('vic-medal-icon');
    if (medalIconEl) {
      medalIconEl.innerHTML = `<img src="assets/images/medalla${this.activeBoss.id}.png" class="victory-medal-popup" alt="${medal.medalName}">`;
    }

    document.getElementById('vic-medal-name').textContent = medal.medalName;
    document.getElementById('vic-mistakes').textContent = medal.mistakes;
    document.getElementById('vic-score').textContent = `+${medal.score} PTS`;

    modal.classList.remove('hidden');

    const btnAccept = document.getElementById('btn-victory-accept');
    btnAccept.onclick = () => {
      audioManager.playSfx('click');
      modal.classList.add('hidden');
      const defeatedBossId = this.activeBoss ? this.activeBoss.id : null;
      this.closeBattle();

      // Verificar si venció al último jefe (Jefe 20)
      if (defeatedBossId === 20 || this.game.player.defeatedBosses.size >= 20) {
        this.game.handleGameComplete();
      }
    };
  }

  handleDefeat() {
    audioManager.stopMusic();
    audioManager.playSfx('gameover'); // assets/audio/gameover.mp3

    const gameOverModal = document.getElementById('game-over-modal');
    gameOverModal.classList.remove('hidden');

    const btnRevive = document.getElementById('btn-revive');
    if (btnRevive) {
      btnRevive.onclick = () => {
        audioManager.playSfx('click');
        audioManager.stopSfx('gameover');
        audioManager.stopMusic();
        gameOverModal.classList.add('hidden');
        this.closeBattleQuietly();
        this.game.respawnWithProgress(); // Reaparece conservando todo su progreso
      };
    }

    const btnMenu = document.getElementById('btn-gameover-menu');
    if (btnMenu) {
      btnMenu.onclick = () => {
        audioManager.playSfx('click');
        audioManager.stopSfx('gameover');
        audioManager.stopMusic();
        gameOverModal.classList.add('hidden');
        this.closeBattleQuietly();
        this.game.returnToMainMenu();
      };
    }
  }

  closeBattleQuietly() {
    this.resumeBattle();
    this.stopCombatAnimationLoop();
    this.overlay.classList.add('hidden');
    this.activeBoss = null;
    this.isAnswering = false;
    this.isEscaping = false;
    if (this.playerCombatantBox) {
      this.playerCombatantBox.classList.remove('player-escaping');
    }
    if (this.game.updateMobileControlsVisibility) {
      this.game.updateMobileControlsVisibility();
    }
  }

  closeBattle() {
    this.closeBattleQuietly();
    audioManager.startMusic('explore');
    this.game.gameState = 'playing';
    if (this.game.updateMobileControlsVisibility) {
      this.game.updateMobileControlsVisibility();
    }
  }

  startCombatAnimationLoop() {
    this.stopCombatAnimationLoop();
    const loop = () => {
      if (this.activeBoss && !this.overlay.classList.contains('hidden')) {
        this.renderCombatSprites();
        this.animCombatReq = requestAnimationFrame(loop);
      }
    };
    this.animCombatReq = requestAnimationFrame(loop);
  }

  stopCombatAnimationLoop() {
    if (this.animCombatReq) {
      cancelAnimationFrame(this.animCombatReq);
      this.animCombatReq = null;
    }
  }

  // Renderizar sprites animados 2D en el panel de batalla usando los sprites recortados
  renderCombatSprites() {
    if (!this.activeBoss) return;
    const time = performance.now() / 1000;

    // 1. Boss Sprite Canvas (enemigo{id}.png escalado a tamaño imponente en 160x160)
    const bCtx = this.bossSpriteCanvas.getContext('2d');
    bCtx.imageSmoothingEnabled = false;
    bCtx.clearRect(0, 0, 160, 160);

    const bHover = Math.sin(time * 3.5) * 6;
    const bossImg = this.game.renderer.bossImgs[this.activeBoss.id];

    // Aura detrás del jefe en combate
    const auraPulse = (Math.sin(time * 4) + 1) * 0.5;
    bCtx.fillStyle = this.activeBoss.color || '#f59e0b';
    bCtx.globalAlpha = 0.22 + auraPulse * 0.25;
    bCtx.beginPath();
    bCtx.arc(80, 80 + bHover, 58, 0, Math.PI * 2);
    bCtx.fill();
    bCtx.globalAlpha = 1.0;

    if (bossImg && bossImg.complete && bossImg.naturalWidth > 0) {
      // 16x16 escalado a 112x112 en el centro
      bCtx.drawImage(bossImg, 24, 24 + bHover, 112, 112);
    } else {
      bCtx.fillStyle = this.activeBoss.color;
      bCtx.fillRect(30, 30 + bHover, 100, 100);
    }

    // 2. Player Sprite Canvas (Mirando hacia arriba al jefe - Requisito 6)
    const pCtx = this.playerSpriteCanvas.getContext('2d');
    pCtx.imageSmoothingEnabled = false;
    pCtx.clearRect(0, 0, 160, 160);

    const pHover = Math.abs(Math.sin(time * 3)) * 2;

    // Sombra del jugador en combate
    pCtx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    pCtx.beginPath();
    pCtx.ellipse(80, 146, 42, 10, 0, 0, Math.PI * 2);
    pCtx.fill();

    if (this.isEscaping) {
      // Animación de retirada: el héroe corre/camina hacia la derecha
      const walkRightSprites = this.game.renderer.playerSprites.walk.right;
      const walkFrame = Math.floor((time * 7) % 2); // Alternar entre frame 0 y frame 1
      const escapeImg = walkRightSprites[walkFrame] || walkRightSprites[0];

      if (escapeImg && escapeImg.complete && escapeImg.naturalWidth > 0) {
        // jugador_caminando_derecha (14x18 escalado a 84x108)
        pCtx.drawImage(escapeImg, 38, 22 - pHover, 84, 108);
      } else {
        pCtx.fillStyle = '#38bdf8';
        pCtx.fillRect(35, 20 - pHover, 90, 115);
      }
    } else if (this.isAttacking) {
      // Animación activa de espadazo usando jugador_ataque_1, 2 o 3 con avance hacia el jefe (arriba y adelante)
      const attackSprites = this.game.renderer.playerSprites.attack;
      const atkImg = attackSprites[this.attackFrame] || attackSprites[0];
      const lunge = this.attackLunge || 0;

      if (atkImg && atkImg.complete && atkImg.naturalWidth > 0) {
        if (this.attackFrame === 1) {
          // jugador_ataque_2 (17x27) - Estocada hacia arriba hacia el jefe
          pCtx.drawImage(atkImg, 42 + lunge * 0.4, 12 - lunge * 0.4, 76, 124);
        } else {
          // jugador_ataque_1 y 3 (23x18) - Preparación y remate
          pCtx.drawImage(atkImg, 26 + lunge * 0.4, 38 - lunge * 0.4, 110, 94);
        }
      }
    } else {
      // Reposo en combate mirando HACIA ARRIBA (hacia el jefe - Requisito 6)
      const playerImg = this.game.renderer.playerSprites.idle.up;

      if (playerImg && playerImg.complete && playerImg.naturalWidth > 0) {
        // 14x18 escalado a 84x108 mirando hacia arriba (al jefe)
        pCtx.drawImage(playerImg, 38, 22 - pHover, 84, 108);
      } else {
        pCtx.fillStyle = '#38bdf8';
        pCtx.fillRect(35, 20 - pHover, 90, 115);
      }
    }
  }

  animateSprite(canvas, animation) {
    if (animation === 'shake') {
      canvas.classList.add('sprite-shake');
      setTimeout(() => canvas.classList.remove('sprite-shake'), 500);
    } else if (animation === 'flash-red') {
      canvas.classList.add('sprite-hurt');
      setTimeout(() => canvas.classList.remove('sprite-hurt'), 500);
    }
  }
}
