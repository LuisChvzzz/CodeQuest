// js/security.js
// Módulo de Seguridad y Protección Anti-Inspección de Code Quest
(function() {
  'use strict';

  // 1. Verificación de Modo Desarrollador / Administrador (?dev=true, ?admin=true o ?test=victory)
  const urlParams = new URLSearchParams(window.location.search);
  const isDev = urlParams.get('dev') === 'true' || 
                urlParams.get('debug') === '1' || 
                urlParams.get('admin') === 'true' || 
                urlParams.get('admin') === '1' || 
                urlParams.get('admin') === 'victory' || 
                urlParams.get('test') === 'victory';
  window.__CODE_QUEST_DEV__ = isDev;

  if (isDev) {
    console.info("🛠️ [Code Quest Security] Modo Desarrollador / Administrador activo. Inspección y atajos habilitados.");
    return;
  }

  // 2. Bloqueo de Menú Contextual (Clic Derecho)
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }, { capture: true });

  // 3. Bloqueo de Atajos de Teclado de Herramientas de Desarrollador e Inspección
  window.addEventListener('keydown', (e) => {
    // Tecla F12 (Herramientas de Desarrollador)
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    const isCtrlOrCmd = e.ctrlKey || e.metaKey;

    // Ctrl+Shift+I / Cmd+Opt+I (Inspector de Elementos)
    // Ctrl+Shift+J / Cmd+Opt+J (Consola de Desarrollador)
    // Ctrl+Shift+C / Cmd+Opt+C (Selector de Elementos)
    if (isCtrlOrCmd && e.shiftKey && ['I', 'i', 'J', 'j', 'C', 'c'].includes(e.key)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+U / Cmd+Opt+U (Ver Código Fuente de la Página)
    if (isCtrlOrCmd && (e.key === 'U' || e.key === 'u')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }

    // Ctrl+S / Cmd+S (Guardar Página Web en Disco)
    if (isCtrlOrCmd && (e.key === 'S' || e.key === 's')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, { capture: true });

  // 4. Silenciar logs de consola en producción para no exponer datos de depuración
  try {
    const noop = () => {};
    window.console.log = noop;
    window.console.info = noop;
    window.console.table = noop;
    window.console.dir = noop;
    window.console.debug = noop;
  } catch (err) {}

  // 5. Detección y Advertencia Disuasoria si se abren las DevTools
  let devToolsWarningIssued = false;
  const threshold = 160;

  const detectDevTools = () => {
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;

    if (widthDiff || heightDiff) {
      if (!devToolsWarningIssued) {
        devToolsWarningIssued = true;
        try {
          console.clear();
          const warningHeader = 'color: #ef4444; font-size: 18px; font-weight: bold; background: #1e1b4b; padding: 8px 12px; border: 2px solid #ef4444; border-radius: 6px;';
          const warningBody = 'color: #fef08a; font-size: 13px; font-weight: normal; background: #0f172a; padding: 6px 10px; display: block; margin-top: 4px; border-left: 3px solid #f59e0b;';
          console.warn(
            '%c⚔️ CODE QUEST - ZONA PROTEGIDA ⚔️\n' +
            '%cEl código del juego está protegido contra inspección y trampas.\nCualquier alteración de variables o valores anulará tu registro en el Ranking Global oficial.',
            warningHeader,
            warningBody
          );
        } catch (e) {}
      }
    } else {
      devToolsWarningIssued = false;
    }
  };

  setInterval(detectDevTools, 800);
  window.addEventListener('resize', detectDevTools);

  // 6. Prevenir arrastre indebido de sprites e imágenes
  document.addEventListener('dragstart', (e) => {
    if (e.target && e.target.tagName === 'IMG') {
      e.preventDefault();
    }
  });

})();
