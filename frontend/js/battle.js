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

    // HUD del jugador en batalla
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

    // Elementos del Workbench de Código Java (IDE de Batalla)
    this.battleInterface = document.querySelector('.battle-interface');
    this.battleDialogBox = document.querySelector('.battle-dialog-box');
    this.codePanel = document.getElementById('battle-code-panel');
    this.codeTypeBadge = document.getElementById('code-type-badge');
    this.codeLevelBadge = document.getElementById('code-level-badge');
    this.codeTitle = document.getElementById('code-challenge-title');
    this.codeInstruction = document.getElementById('code-challenge-instruction');
    this.codeExpectedOutput = document.getElementById('code-expected-output-badge');
    this.btnCodeReset = document.getElementById('btn-code-reset');

    this.fixCodeContainer = document.getElementById('fix-code-container');
    this.codeEditor = document.getElementById('battle-code-editor');
    this.codeLineNumbers = document.getElementById('code-line-numbers');
    this.fillBlankContainer = document.getElementById('fill-blank-container');
    this.dragDropContainer = document.getElementById('drag-drop-container');
    this.dragDropCodeArea = document.getElementById('drag-drop-code-area');
    this.dragDropTokensTray = document.getElementById('drag-drop-tokens-tray');

    this.consoleOutput = document.getElementById('battle-console-output');
    this.consoleStatusLed = document.getElementById('console-status-led');
    this.btnConsoleClear = document.getElementById('btn-console-clear');

    this.btnCodeBack = document.getElementById('btn-code-back');
    this.btnCodeTest = document.getElementById('btn-code-test');
    this.btnCodeAttack = document.getElementById('btn-code-attack');

    this.currentChallenge = null;
    this.currentChallengeType = 'multiple_choice';
    this.dragDropState = { slotted: {}, selectedToken: null };
    this.currentBossChallenges = [];

    // Elementos del DOM para Pausa y Retirada en Combate
    this.btnBattlePause = document.getElementById('btn-battle-pause');
    this.pauseModal = document.getElementById('battle-pause-modal');
    this.btnResume = document.getElementById('btn-battle-resume');
    this.btnRetreat = document.getElementById('btn-battle-retreat');
    this.playerCombatantBox = document.getElementById('battle-player-combatant-box');

    // Cuadro de Explicación en la Arena (cuando el jugador se equivoca)
    this.explanationCard = document.getElementById('battle-explanation-card');
    this.explQuestionBadge = document.getElementById('expl-q-badge');
    this.explQuestionText = document.getElementById('expl-question-text');
    this.explUserAnswer = document.getElementById('expl-user-answer');
    this.explCorrectAnswer = document.getElementById('expl-correct-answer');
    this.explDetailText = document.getElementById('expl-detail-text');
    this.explDamageNotice = document.getElementById('expl-damage-notice');
    this.explDamageText = document.getElementById('expl-damage-text');
    this.btnCloseExplanation = document.getElementById('btn-close-explanation');
    this.boundExplanationKeyHandler = null;

    this.isPaused = false;
    this.isEscaping = false;

    this.setupListeners();
  }

  setupListeners() {
    this.btnAttack.addEventListener('click', () => {
      if (this.isEscaping || this.isPaused) return;
      audioManager.playSfx('click');
      this.triggerAttackTurn();
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

    // Listeners del Workbench de Código Java
    if (this.btnCodeBack) {
      this.btnCodeBack.addEventListener('click', () => {
        if (this.isEscaping || this.isPaused) return;
        audioManager.playSfx('click');
        this.showMainMenu();
      });
    }

    if (this.btnCodeReset) {
      this.btnCodeReset.addEventListener('click', () => {
        this.resetCurrentPracticalChallenge();
      });
    }

    if (this.btnCodeTest) {
      this.btnCodeTest.addEventListener('click', () => {
        this.handleCodeTest();
      });
    }

    if (this.btnCodeAttack) {
      this.btnCodeAttack.addEventListener('click', () => {
        this.handleCodeAttack();
      });
    }

    if (this.btnConsoleClear) {
      this.btnConsoleClear.addEventListener('click', () => {
        this.clearConsole();
      });
    }

    if (this.codeEditor) {
      this.codeEditor.addEventListener('input', () => {
        this.updateLineNumbers();
      });

      this.codeEditor.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
          e.preventDefault();
          const start = this.codeEditor.selectionStart;
          const end = this.codeEditor.selectionEnd;
          this.codeEditor.value = this.codeEditor.value.substring(0, start) + '    ' + this.codeEditor.value.substring(end);
          this.codeEditor.selectionStart = this.codeEditor.selectionEnd = start + 4;
          this.updateLineNumbers();
        }
      });
    }

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

    // Botón de cerrar la explicación pedagógica en la arena
    if (this.btnCloseExplanation) {
      this.btnCloseExplanation.addEventListener('click', () => {
        audioManager.playSfx('click');
        this.hideExplanationCard();
      });
    }
  }

  startBattle(boss) {
    this.hideExplanationCardDirect();
    this.activeBoss = boss;
    this.bossMaxHp = boss.hp;
    this.bossCurrentHp = boss.hp;
    this.mistakesCount = 0;
    this.isPlayerTurn = true;
    this.isAnswering = false;
    this.isAttacking = false;
    this.attackFrame = 0;
    this.currentQuestionIndex = 0;

    // Obtener las 20 preguntas del jefe y barajar su orden aleatoriamente en cada enfrentamiento (Fisher-Yates)
    const baseQuestions = QUESTIONS_DATA[boss.level] || QUESTIONS_DATA[boss.id] || QUESTIONS_DATA[1] || [];
    this.currentBossQuestions = [...baseQuestions];
    for (let i = this.currentBossQuestions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.currentBossQuestions[i], this.currentBossQuestions[j]] = [this.currentBossQuestions[j], this.currentBossQuestions[i]];
    }

    // Obtener y barajar los ejercicios prácticos de este nivel
    const baseChallenges = (typeof CHALLENGES_DATA !== 'undefined' && (CHALLENGES_DATA[boss.level] || CHALLENGES_DATA[boss.id])) || [];
    this.currentBossChallenges = [...baseChallenges];
    for (let i = this.currentBossChallenges.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.currentBossChallenges[i], this.currentBossChallenges[j]] = [this.currentBossChallenges[j], this.currentBossChallenges[i]];
    }
    this.currentPracticalIndex = 0;

    // Iniciar música específica del jefe (assets/audio/jefe{id}.mp3)
    audioManager.startMusic('battle', boss.id);

    // Iniciar loop de animación de combate
    this.startCombatAnimationLoop();

    // Inicializar marcadores de jefe y jugador
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
    this.hideExplanationCardDirect();
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
    if (this.game && typeof this.game.saveGameProgress === 'function') {
      this.game.saveGameProgress();
    }
  }

  updateBossHpBar() {
    const pct = Math.max(0, Math.min(100, (this.bossCurrentHp / this.bossMaxHp) * 100));
    this.bossHpFillEl.style.width = `${pct}%`;
    this.bossHpTextEl.textContent = `${Math.max(0, this.bossCurrentHp)} / ${this.bossMaxHp} HP`;
  }

  // Actualiza las estadísticas visuales del jugador
  updatePlayerBattleStats() {
    if (this.playerNameEl) this.playerNameEl.textContent = this.game.player.name;
    if (this.playerAttackEl) this.playerAttackEl.innerHTML = `<img src="assets/icons/espada.png" class="pixel-icon" alt="Ataque"> ATQ: ${this.game.player.attack}`;
    if (this.playerHpFillEl) {
      const pct = Math.max(0, Math.min(100, (this.game.player.hearts / this.game.player.maxHearts) * 100));
      this.playerHpFillEl.style.width = `${pct}%`;
    }
    if (this.playerHpTextEl) this.playerHpTextEl.innerHTML = `${this.game.player.hearts} / ${this.game.player.maxHearts} <img src="assets/icons/corazon_lleno.png" class="pixel-icon" alt="Vida">`;
    if (this.playerPotionsEl) this.playerPotionsEl.innerHTML = `<img src="assets/icons/pocion.png" class="pixel-icon" alt="Pociones"> ${this.game.player.potions}`;
    if (this.playerKeysEl) this.playerKeysEl.innerHTML = `<img src="assets/icons/llave.png" class="pixel-icon" alt="Llaves"> ${this.game.player.keys}`;
    if (this.playerScoreEl) this.playerScoreEl.innerHTML = `<img src="assets/icons/estrella.png" class="pixel-icon" alt="Puntos"> ${this.game.player.totalScore.toLocaleString()} PTS`;
  }

  setDialog(text) {
    this.battleDialogEl.textContent = text;
  }

  showMainMenu() {
    if (this.battleInterface) this.battleInterface.classList.remove('coding-mode');
    if (this.battleDialogBox) this.battleDialogBox.classList.remove('hidden');
    if (this.codePanel) this.codePanel.classList.add('hidden');
    this.actionsPanel.classList.remove('hidden');
    this.questionPanel.classList.add('hidden');
    this.inventoryPanel.classList.add('hidden');
  }

  // Selección aleatoria equilibrada entre los 4 tipos de desafío:
  // 1. Pregunta clásica de opción múltiple
  // 2. Código mal escrito (depuración / fix_code)
  // 3. Código incompleto con espacios a rellenar (fill_blank)
  // 4. Código con elementos para arrastrar y soltar (drag_drop)
  triggerAttackTurn() {
    const bossLvl = this.activeBoss ? this.activeBoss.level : 1;
    const bossPracticals = (typeof CHALLENGES_DATA !== 'undefined' && CHALLENGES_DATA[bossLvl]) || [];

    const availableModes = ['multiple_choice'];
    if (bossPracticals.some(c => c.type === 'fix_code')) availableModes.push('fix_code');
    if (bossPracticals.some(c => c.type === 'fill_blank')) availableModes.push('fill_blank');
    if (bossPracticals.some(c => c.type === 'drag_drop')) availableModes.push('drag_drop');

    const selectedMode = availableModes[Math.floor(Math.random() * availableModes.length)];

    if (selectedMode === 'multiple_choice') {
      this.currentChallengeType = 'multiple_choice';
      this.showQuestion();
    } else {
      const matching = bossPracticals.filter(c => c.type === selectedMode);
      const challenge = matching[Math.floor(Math.random() * matching.length)];
      this.showPracticalChallenge(challenge);
    }
  }

  showPracticalChallenge(challenge) {
    this.currentChallenge = challenge;
    this.currentChallengeType = challenge.type;

    if (this.actionsPanel) this.actionsPanel.classList.add('hidden');
    if (this.inventoryPanel) this.inventoryPanel.classList.add('hidden');
    if (this.questionPanel) this.questionPanel.classList.add('hidden');
    if (this.battleDialogBox) this.battleDialogBox.classList.add('hidden');

    if (this.battleInterface) this.battleInterface.classList.add('coding-mode');
    if (this.codePanel) this.codePanel.classList.remove('hidden');

    // Metadatos
    if (this.codeLevelBadge) {
      this.codeLevelBadge.textContent = `Nivel ${this.activeBoss.level}`;
    }

    if (this.codeTypeBadge) {
      this.codeTypeBadge.className = 'code-type-badge';
      if (challenge.type === 'fix_code') {
        this.codeTypeBadge.classList.add('type-fix');
        this.codeTypeBadge.innerHTML = `<img src="assets/icons/espada.png" class="pixel-icon" alt="Bug"> Código con Error`;
      } else if (challenge.type === 'fill_blank') {
        this.codeTypeBadge.classList.add('type-fill');
        this.codeTypeBadge.innerHTML = `<img src="assets/icons/pergamino.png" class="pixel-icon" alt="Fill"> Rellenar Espacios`;
      } else if (challenge.type === 'drag_drop') {
        this.codeTypeBadge.classList.add('type-drag');
        this.codeTypeBadge.innerHTML = `<img src="assets/icons/foco.png" class="pixel-icon" alt="Drag"> Arrastrar y Soltar`;
      }
    }

    if (this.codeTitle) {
      this.codeTitle.textContent = challenge.title || 'Desafío Práctico de Java';
    }

    if (this.codeInstruction) {
      this.codeInstruction.textContent = challenge.instruction || '';
    }

    if (this.codeExpectedOutput) {
      this.codeExpectedOutput.textContent = challenge.expectedOutput || '';
    }

    // Configurar editor específico según tipo
    if (challenge.type === 'fix_code') {
      if (this.fixCodeContainer) this.fixCodeContainer.classList.remove('hidden');
      if (this.fillBlankContainer) this.fillBlankContainer.classList.add('hidden');
      if (this.dragDropContainer) this.dragDropContainer.classList.add('hidden');

      if (this.codeEditor) {
        this.codeEditor.value = challenge.initialCode;
        this.updateLineNumbers();
      }
    } else if (challenge.type === 'fill_blank') {
      if (this.fixCodeContainer) this.fixCodeContainer.classList.add('hidden');
      if (this.fillBlankContainer) this.fillBlankContainer.classList.remove('hidden');
      if (this.dragDropContainer) this.dragDropContainer.classList.add('hidden');

      this.renderFillBlanks(challenge);
    } else if (challenge.type === 'drag_drop') {
      if (this.fixCodeContainer) this.fixCodeContainer.classList.add('hidden');
      if (this.fillBlankContainer) this.fillBlankContainer.classList.add('hidden');
      if (this.dragDropContainer) this.dragDropContainer.classList.remove('hidden');

      this.renderDragDrop(challenge);
    }

    // Reinicializar consola interactiva
    this.clearConsole();
    this.appendConsoleLine('> [Terminal javac & java lista]', 'system-line');
    this.appendConsoleLine('> Usa "Probar Código" para verificar sin riesgo, o "⚔️ ATACAR" para compilar y golpear al jefe.', 'system-line');
    if (this.consoleStatusLed) {
      this.consoleStatusLed.className = 'console-status-led ready';
      this.consoleStatusLed.textContent = '● Lista';
    }
  }

  renderFillBlanks(challenge) {
    if (!this.fillBlankContainer) return;
    this.fillBlankContainer.innerHTML = '';

    const parts = challenge.template.split(/\{\{(blank_\d+)\}\}/g);
    const container = document.createElement('div');
    container.className = 'fill-blank-code-wrapper';

    parts.forEach(part => {
      if (part.startsWith('blank_')) {
        const blankDef = (challenge.blanks && challenge.blanks.find(b => b.id === part)) || { placeholder: '...' };
        const input = document.createElement('input');
        input.type = 'text';
        input.className = 'fill-blank-input';
        input.dataset.blankId = part;
        input.placeholder = blankDef.placeholder || '...';
        input.autocomplete = 'off';
        input.spellcheck = false;
        input.addEventListener('input', () => {
          input.style.width = Math.max(60, (input.value.length + 1) * 9) + 'px';
        });
        container.appendChild(input);
      } else {
        container.appendChild(document.createTextNode(part));
      }
    });

    this.fillBlankContainer.appendChild(container);
  }

  renderDragDrop(challenge) {
    if (!this.dragDropCodeArea || !this.dragDropTokensTray) return;
    this.dragDropCodeArea.innerHTML = '';
    this.dragDropTokensTray.innerHTML = '';
    this.dragDropState = { slotted: {}, selectedToken: null };

    // 1. Renderizar ranuras en el código
    const parts = challenge.template.split(/\{\{(slot_\d+)\}\}/g);
    parts.forEach(part => {
      if (part.startsWith('slot_')) {
        const slot = document.createElement('span');
        slot.className = 'code-drop-slot';
        slot.dataset.slotId = part;
        slot.textContent = '[ Soltar ]';

        slot.addEventListener('dragover', (e) => {
          e.preventDefault();
          slot.classList.add('slot-hover');
        });
        slot.addEventListener('dragleave', () => {
          slot.classList.remove('slot-hover');
        });
        slot.addEventListener('drop', (e) => {
          e.preventDefault();
          slot.classList.remove('slot-hover');
          const token = e.dataTransfer.getData('text/plain');
          if (token) {
            this.placeTokenInSlot(part, token);
          }
        });

        // Soporte de clic para accesibilidad y dispositivos táctiles
        slot.addEventListener('click', () => {
          if (this.dragDropState.selectedToken) {
            this.placeTokenInSlot(part, this.dragDropState.selectedToken);
            this.dragDropState.selectedToken = null;
            this.updateTokenTraySelection();
          } else if (this.dragDropState.slotted[part]) {
            this.removeTokenFromSlot(part);
          }
        });

        this.dragDropCodeArea.appendChild(slot);
      } else {
        this.dragDropCodeArea.appendChild(document.createTextNode(part));
      }
    });

    // 2. Barajar y renderizar fichas en la bandeja
    const shuffledTokens = [...challenge.tokens];
    for (let i = shuffledTokens.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledTokens[i], shuffledTokens[j]] = [shuffledTokens[j], shuffledTokens[i]];
    }

    shuffledTokens.forEach((tokenText, idx) => {
      const chip = document.createElement('div');
      chip.className = 'code-token-chip';
      chip.draggable = true;
      chip.textContent = tokenText;
      chip.dataset.token = tokenText;
      chip.dataset.tokenId = `token_${idx}`;

      chip.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', tokenText);
      });

      chip.addEventListener('click', () => {
        if (this.dragDropState.selectedToken === tokenText) {
          this.dragDropState.selectedToken = null;
        } else {
          this.dragDropState.selectedToken = tokenText;
        }
        this.updateTokenTraySelection();
      });

      this.dragDropTokensTray.appendChild(chip);
    });
  }

  placeTokenInSlot(slotId, tokenText) {
    this.dragDropState.slotted[slotId] = tokenText;
    const slotEl = this.dragDropCodeArea.querySelector(`[data-slot-id="${slotId}"]`);
    if (slotEl) {
      slotEl.textContent = tokenText;
      slotEl.classList.add('slot-filled');
    }
    audioManager.playSfx('click');
  }

  removeTokenFromSlot(slotId) {
    delete this.dragDropState.slotted[slotId];
    const slotEl = this.dragDropCodeArea.querySelector(`[data-slot-id="${slotId}"]`);
    if (slotEl) {
      slotEl.textContent = '[ Soltar ]';
      slotEl.classList.remove('slot-filled');
    }
    audioManager.playSfx('click');
  }

  updateTokenTraySelection() {
    const chips = this.dragDropTokensTray.querySelectorAll('.code-token-chip');
    chips.forEach(c => {
      if (c.dataset.token === this.dragDropState.selectedToken) {
        c.classList.add('selected-token');
      } else {
        c.classList.remove('selected-token');
      }
    });
  }

  getUserCurrentCode() {
    if (!this.currentChallenge) return '';

    if (this.currentChallenge.type === 'fix_code') {
      return this.codeEditor ? this.codeEditor.value.trim() : '';
    }

    if (this.currentChallenge.type === 'fill_blank') {
      let code = this.currentChallenge.template;
      if (this.fillBlankContainer) {
        const inputs = this.fillBlankContainer.querySelectorAll('.fill-blank-input');
        inputs.forEach(inp => {
          const blankId = inp.dataset.blankId;
          const val = inp.value.trim();
          code = code.replace(new RegExp(`\\{\\{${blankId}\\}\\}`, 'g'), val);
        });
      }
      return code.trim();
    }

    if (this.currentChallenge.type === 'drag_drop') {
      let code = this.currentChallenge.template;
      if (this.currentChallenge.slots) {
        for (const slot of this.currentChallenge.slots) {
          const val = this.dragDropState.slotted[slot.id] || '';
          code = code.replace(new RegExp(`\\{\\{${slot.id}\\}\\}`, 'g'), val);
        }
      }
      return code.trim();
    }

    return '';
  }

  updateLineNumbers() {
    if (!this.codeEditor || !this.codeLineNumbers) return;
    const lineCount = (this.codeEditor.value.split('\n').length) || 1;
    let linesHtml = '';
    for (let i = 1; i <= lineCount; i++) {
      linesHtml += i + '<br>';
    }
    this.codeLineNumbers.innerHTML = linesHtml;
  }

  clearConsole() {
    if (this.consoleOutput) this.consoleOutput.innerHTML = '';
  }

  appendConsoleLine(text, className = '') {
    if (!this.consoleOutput) return;
    const div = document.createElement('div');
    div.className = 'console-line' + (className ? ' ' + className : '');
    div.textContent = text;
    this.consoleOutput.appendChild(div);
    this.consoleOutput.scrollTop = this.consoleOutput.scrollHeight;
  }

  handleCodeTest() {
    audioManager.playSfx('click');
    const code = this.getUserCurrentCode();

    this.clearConsole();
    this.appendConsoleLine('> Compilando código en Solucion.java...', 'system-line');

    const evalResult = javaEvaluator.evaluate(code, this.currentChallenge);

    evalResult.logs.forEach(log => {
      let cls = '';
      if (log.startsWith('✔')) cls = 'success';
      else if (log.startsWith('❌')) cls = 'error';
      else if (log.startsWith('>')) cls = 'system-line';
      this.appendConsoleLine(log, cls);
    });

    if (this.consoleStatusLed) {
      if (evalResult.success) {
        this.consoleStatusLed.className = 'console-status-led success';
        this.consoleStatusLed.textContent = '● Correcto';
      } else {
        this.consoleStatusLed.className = 'console-status-led error';
        this.consoleStatusLed.textContent = '● Error';
      }
    }
  }

  handleCodeAttack() {
    if (this.isAnswering) return;
    this.isAnswering = true;
    audioManager.playSfx('click');

    const code = this.getUserCurrentCode();

    this.clearConsole();
    this.appendConsoleLine('> Compilando y ejecutando código para ataque...', 'system-line');

    const evalResult = javaEvaluator.evaluate(code, this.currentChallenge);

    evalResult.logs.forEach(log => {
      let cls = '';
      if (log.startsWith('✔')) cls = 'success';
      else if (log.startsWith('❌')) cls = 'error';
      else if (log.startsWith('>')) cls = 'system-line';
      this.appendConsoleLine(log, cls);
    });

    if (this.consoleStatusLed) {
      this.consoleStatusLed.className = evalResult.success ? 'console-status-led success' : 'console-status-led error';
      this.consoleStatusLed.textContent = evalResult.success ? '● Éxito' : '● Error';
    }

    if (evalResult.success) {
      // ÉXITO: El jugador corrigió/completó el código correctamente y ataca al jefe
      audioManager.playSfx('correct');

      setTimeout(() => {
        if (this.codePanel) this.codePanel.classList.add('hidden');
        if (this.battleInterface) this.battleInterface.classList.remove('coding-mode');
        if (this.battleDialogBox) this.battleDialogBox.classList.remove('hidden');

        audioManager.playSfx('slash');
        this.triggerPlayerAttackAnimation();

        const damage = this.game.player.attack;
        this.bossCurrentHp -= damage;
        this.updateBossHpBar();
        this.animateSprite(this.bossSpriteCanvas, 'shake');

        this.setDialog(`⚔️ ¡Código corregido y compilación perfecta!\n💥 ¡Atacas a ${this.activeBoss.name} infligiendo ${damage} puntos de daño!`);

        setTimeout(() => {
          if (this.bossCurrentHp <= 0) {
            this.handleVictory();
          } else {
            this.isAnswering = false;
            this.showMainMenu();
          }
        }, 1800);
      }, 700);

    } else {
      // ERROR: El código tenía errores o no fue corregido. El jugador sufre daño de batalla.
      this.mistakesCount++;
      audioManager.playSfx('wrong');

      setTimeout(() => {
        if (this.codePanel) this.codePanel.classList.add('hidden');
        if (this.battleInterface) this.battleInterface.classList.remove('coding-mode');
        if (this.battleDialogBox) this.battleDialogBox.classList.remove('hidden');

        audioManager.playSfx('hurt');
        const bossDmg = this.activeBoss.attack;
        this.game.player.hearts = Math.max(0, this.game.player.hearts - bossDmg);
        this.game.updateHud();
        this.updatePlayerBattleStats();
        this.animateSprite(this.playerSpriteCanvas, 'flash-red');

        this.setDialog(`❌ ¡Error en la compilación / ejecución!\n💥 ${this.activeBoss.name} contraataca y te quita ${bossDmg} corazón(es).`);

        this.showExplanationCardForChallenge(this.currentChallenge, evalResult, bossDmg);
      }, 800);
    }
  }

  resetCurrentPracticalChallenge() {
    if (!this.currentChallenge) return;
    audioManager.playSfx('click');
    if (this.currentChallenge.type === 'fix_code') {
      if (this.codeEditor) {
        this.codeEditor.value = this.currentChallenge.initialCode;
        this.updateLineNumbers();
      }
    } else if (this.currentChallenge.type === 'fill_blank') {
      this.renderFillBlanks(this.currentChallenge);
    } else if (this.currentChallenge.type === 'drag_drop') {
      this.renderDragDrop(this.currentChallenge);
    }
    this.clearConsole();
    this.appendConsoleLine('> Código restaurado a su estado inicial.', 'system-line');
    if (this.consoleStatusLed) {
      this.consoleStatusLed.className = 'console-status-led ready';
      this.consoleStatusLed.textContent = '● Lista';
    }
  }

  showExplanationCardForChallenge(challenge, evalRes, bossDmg) {
    if (!this.explanationCard || !challenge) return;

    if (this.explQuestionBadge) {
      const bossLvl = this.activeBoss ? this.activeBoss.level : 1;
      this.explQuestionBadge.textContent = `Nivel ${bossLvl} • ${challenge.theme}`;
    }

    if (this.explQuestionText) {
      this.explQuestionText.textContent = challenge.instruction || '';
    }

    if (this.explUserAnswer) {
      this.explUserAnswer.textContent = evalRes.errorMsg || 'Código con errores de compilación o salida inexacta';
    }

    if (this.explCorrectAnswer) {
      this.explCorrectAnswer.textContent = `Salida esperada: "${challenge.expectedOutput}"`;
    }

    if (this.explDetailText) {
      this.explDetailText.textContent = challenge.explanation || 'Revisa con atención las reglas de sintaxis y palabras clave de Java.';
    }

    if (this.explDamageText) {
      const bossName = this.activeBoss ? this.activeBoss.name : 'El jefe';
      this.explDamageText.textContent = `${bossName} te ha quitado ${bossDmg} corazón(es).`;
    }

    this.explanationCard.classList.remove('hidden');

    if (this.boundExplanationKeyHandler) {
      window.removeEventListener('keydown', this.boundExplanationKeyHandler);
      this.boundExplanationKeyHandler = null;
    }

    this.boundExplanationKeyHandler = (e) => {
      if (e.code === 'Space' || e.code === 'Enter' || e.code === 'Escape') {
        e.preventDefault();
        audioManager.playSfx('click');
        this.hideExplanationCard();
      }
    };
    window.addEventListener('keydown', this.boundExplanationKeyHandler);
  }

  showInventory() {
    this.actionsPanel.classList.add('hidden');
    this.questionPanel.classList.add('hidden');
    this.inventoryPanel.classList.remove('hidden');

    const invList = document.getElementById('battle-inventory-items');
    invList.innerHTML = `
      <div class="inv-card">
        <div class="inv-icon"><img src="assets/icons/espada.png" class="pixel-icon pixel-icon-lg" alt="Espada"></div>
        <div class="inv-details">
          <h4>Espada Heroica</h4>
          <p>Poder de Ataque: <strong>${this.game.player.attack}</strong></p>
        </div>
      </div>
      <div class="inv-card">
        <div class="inv-icon"><img src="assets/icons/pocion.png" class="pixel-icon pixel-icon-lg" alt="Poción"></div>
        <div class="inv-details">
          <h4>Poción de Vida (${this.game.player.potions})</h4>
          <p>Restaura 1 Corazón de vida</p>
        </div>
        <button id="btn-use-potion-battle" class="btn-retro btn-small" ${this.game.player.potions <= 0 || this.game.player.hearts >= 5 ? 'disabled' : ''}>
          Usar
        </button>
      </div>
      <div class="inv-card">
        <div class="inv-icon"><img src="assets/icons/llave.png" class="pixel-icon pixel-icon-lg" alt="Llaves"></div>
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

    // Banco de 20 preguntas barajadas del jefe actual
    const qList = (this.currentBossQuestions && this.currentBossQuestions.length > 0)
      ? this.currentBossQuestions
      : (QUESTIONS_DATA[this.activeBoss.level] || QUESTIONS_DATA[this.activeBoss.id] || QUESTIONS_DATA[1]);
    const rawQuestion = qList[this.currentQuestionIndex % qList.length];
    this.currentQuestionIndex++;

    // Barajar los incisos al azar para que la respuesta correcta varíe libremente entre A, B, C y D
    const mappedOptions = rawQuestion.options.map((text, idx) => ({
      text,
      isCorrect: idx === rawQuestion.correct
    }));

    // Algoritmo de Fisher-Yates
    for (let i = mappedOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [mappedOptions[i], mappedOptions[j]] = [mappedOptions[j], mappedOptions[i]];
    }

    const shuffledOptions = mappedOptions.map(item => item.text);
    const newCorrectIndex = mappedOptions.findIndex(item => item.isCorrect);

    this.currentQuestion = {
      ...rawQuestion,
      options: shuffledOptions,
      correct: newCorrectIndex
    };

    const qTitle = document.getElementById('battle-question-text');
    const optionsContainer = document.getElementById('battle-options-container');

    qTitle.textContent = this.currentQuestion.question;
    optionsContainer.innerHTML = '';

    this.currentQuestion.options.forEach((optText, index) => {
      const btn = document.createElement('button');
      btn.className = 'btn-retro btn-option';

      const letterSpan = document.createElement('span');
      letterSpan.className = 'option-letter';
      letterSpan.textContent = `${String.fromCharCode(65 + index)}) `;

      btn.appendChild(letterSpan);
      btn.appendChild(document.createTextNode(optText));
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

        this.setDialog(`⚔️ ¡Ataque certero!\n💥 ¡Atacas a ${this.activeBoss.name} infligiendo ${damage} puntos de daño!`);

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

        // Cuadro inferior de combate: solo se muestra lo que va pasando en la batalla (sin la explicación)
        this.setDialog(`❌ ¡Respuesta incorrecta!\n💥 ${this.activeBoss.name} contraataca y te quita ${bossDmg} corazón(es).`);

        // Desplegar el cuadro grande de explicación en la arena con su botón de cerrar
        this.showExplanationCard(selectedIndex, bossDmg);
      }, 700);
    }
  }

  // Muestra el cuadro de explicación pedagógica en la arena
  showExplanationCard(selectedIndex, bossDmg) {
    if (!this.explanationCard || !this.currentQuestion) return;

    if (this.explQuestionBadge) {
      const bossLvl = this.activeBoss ? this.activeBoss.level : 1;
      this.explQuestionBadge.textContent = `Nivel ${bossLvl} • Desafío de Java`;
    }

    if (this.explQuestionText) {
      this.explQuestionText.textContent = this.currentQuestion.question || '';
    }

    if (this.explUserAnswer) {
      const userLetter = String.fromCharCode(65 + selectedIndex);
      const userText = (this.currentQuestion.options && this.currentQuestion.options[selectedIndex]) || 'Opción no válida';
      this.explUserAnswer.textContent = `${userLetter}) ${userText}`;
    }

    if (this.explCorrectAnswer) {
      const correctIdx = this.currentQuestion.correct;
      const correctLetter = String.fromCharCode(65 + correctIdx);
      const correctText = (this.currentQuestion.options && this.currentQuestion.options[correctIdx]) || '';
      this.explCorrectAnswer.textContent = `${correctLetter}) ${correctText}`;
    }

    if (this.explDetailText) {
      this.explDetailText.textContent = this.currentQuestion.explanation || 'Revisa con atención los conceptos clave de Java para este tema.';
    }

    if (this.explDamageText) {
      const bossName = this.activeBoss ? this.activeBoss.name : 'El jefe';
      this.explDamageText.textContent = `${bossName} te ha quitado ${bossDmg} corazón(es).`;
    }

    // Mostrar el cuadro en la arena
    this.explanationCard.classList.remove('hidden');

    if (this.boundExplanationKeyHandler) {
      window.removeEventListener('keydown', this.boundExplanationKeyHandler);
      this.boundExplanationKeyHandler = null;
    }

    this.boundExplanationKeyHandler = (e) => {
      if (e.code === 'Space' || e.code === 'Enter' || e.code === 'Escape') {
        e.preventDefault();
        audioManager.playSfx('click');
        this.hideExplanationCard();
      }
    };
    window.addEventListener('keydown', this.boundExplanationKeyHandler);
  }

  // Cierra el cuadro de explicación y continúa el flujo de combate
  hideExplanationCard() {
    this.hideExplanationCardDirect();

    // Si el jugador se quedó sin vida tras el contraataque, pantalla de derrota
    if (this.game && this.game.player && this.game.player.hearts <= 0) {
      this.handleDefeat();
    } else {
      this.isAnswering = false;
      this.showMainMenu();
    }
  }

  // Oculta el cuadro directamente sin avanzar turnos ni evaluar derrotas
  hideExplanationCardDirect() {
    if (this.boundExplanationKeyHandler) {
      window.removeEventListener('keydown', this.boundExplanationKeyHandler);
      this.boundExplanationKeyHandler = null;
    }
    if (this.explanationCard) {
      this.explanationCard.classList.add('hidden');
    }
  }

  // Secuencia de ataque con avance hacia el frente
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
    this.hideExplanationCardDirect();
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

    if (this.game && typeof this.game.saveGameProgress === 'function') {
      this.game.saveGameProgress();
    }

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

      // Comprobar si se han derrotado todos los jefes
      if (this.game.player.defeatedBosses.size >= 20) {
        this.game.handleGameComplete();
      } else if (defeatedBossId === 20) {
        const remaining = 20 - this.game.player.defeatedBosses.size;
        this.game.showToast(`¡Derrotaste al Jefe 20! Pero aún debes vencer a ${remaining} jefe(s) restante(s) para completar el juego.`);
      }
    };
  }

  handleDefeat() {
    this.hideExplanationCardDirect();
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
    this.hideExplanationCardDirect();
    if (this.advanceTimeout) {
      clearTimeout(this.advanceTimeout);
      this.advanceTimeout = null;
    }
    if (this.battleDialogEl) {
      this.battleDialogEl.style.cursor = 'default';
    }
    if (this.battleInterface) {
      this.battleInterface.classList.remove('coding-mode');
    }
    if (this.codePanel) {
      this.codePanel.classList.add('hidden');
    }
    if (this.battleDialogBox) {
      this.battleDialogBox.classList.remove('hidden');
    }
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

    // Sprite del jugador mirando hacia el jefe
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
      // Estado de reposo orientado hacia el jefe
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
