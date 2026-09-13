// js/firebase_config.js
// Configuración de Firebase para Code Quest: Reino de Java
//
// ============================================================================
// GUÍA RÁPIDA DE CONFIGURACIÓN (100% GRATIS):
// ============================================================================
// 1. Entra a https://console.firebase.google.com/ e inicia sesión con tu cuenta Google.
// 2. Haz clic en "Agregar proyecto" (nómbralo por ejemplo: CodeQuest).
// 3. En el menú lateral izquierdo ve a:
//    - "Compilación" (Build) -> "Authentication" -> botón "Comenzar".
//    - En la pestaña "Método de acceso" (Sign-in method), haz clic en "Google",
//      activa la casilla "Habilitar", selecciona tu correo de asistencia y haz clic en "Guardar".
// 4. En la parte superior izquierda, haz clic en el engranaje ⚙️ -> "Configuración del proyecto".
// 5. En "Tus apps", haz clic en el icono web </> para registrar la app (ej: CodeQuest Web).
// 6. Copia los valores de tu objeto "firebaseConfig" y pégalos en las variables de abajo:
// ============================================================================

window.FIREBASE_CONFIG = {
  apiKey: "TU_API_KEY_AQUI",
  authDomain: "tu-proyecto.firebaseapp.com",
  projectId: "tu-proyecto",
  storageBucket: "tu-proyecto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

// Inicialización segura del SDK de Firebase si se han proporcionado las credenciales
(function initFirebase() {
  if (typeof firebase !== 'undefined') {
    const config = window.FIREBASE_CONFIG;
    const isConfigured = config && config.apiKey && config.apiKey !== "TU_API_KEY_AQUI" && !config.apiKey.includes("TU_API_KEY");
    
    if (isConfigured) {
      try {
        if (!firebase.apps.length) {
          firebase.initializeApp(config);
          console.log("🔥 Firebase Authentication inicializado correctamente con Google Provider.");
        }
      } catch (err) {
        console.error("Error al inicializar Firebase:", err);
      }
    } else {
      console.log("ℹ️ Firebase SDK listo. Puedes colocar tus credenciales en js/firebase_config.js para usar la ventana emergente oficial de Google.");
    }
  }
})();
