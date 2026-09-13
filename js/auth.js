// js/auth.js
// Sistema de Autenticación y Gestión de Cuentas de Code Quest

class AuthManager {
  constructor() {
    this.accountsKey = 'code_quest_accounts_v1';
    this.sessionKey = 'code_quest_current_session_v1';
    this.currentUser = null;
    this.init();
  }

  init() {
    // Cargar sesión persistida si existe
    try {
      const sessionRaw = localStorage.getItem(this.sessionKey);
      if (sessionRaw) {
        this.currentUser = JSON.parse(sessionRaw);
      }
    } catch (e) {
      console.error("Error al cargar sesión:", e);
      this.currentUser = null;
    }
  }

  // Obtener todas las cuentas registradas localmente
  getAccounts() {
    try {
      const raw = localStorage.getItem(this.accountsKey);
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  }

  saveAccounts(accounts) {
    localStorage.setItem(this.accountsKey, JSON.stringify(accounts));
  }

  // Hashing ligero de contraseña para no guardarla en texto plano en localStorage
  hashPassword(password) {
    let hash = 0;
    const str = String(password);
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash |= 0;
    }
    return 'h_' + Math.abs(hash).toString(36) + '_' + str.length;
  }

  // Registro con Correo, Contraseña y Nombre de Héroe (acepta ambos órdenes de argumentos)
  register(arg1, arg2, arg3) {
    let email, password, heroName;
    if (String(arg1 || '').includes('@')) {
      email = String(arg1 || '').trim().toLowerCase();
      password = String(arg2 || '').trim();
      heroName = String(arg3 || '').trim();
    } else {
      heroName = String(arg1 || '').trim();
      email = String(arg2 || '').trim().toLowerCase();
      password = String(arg3 || '').trim();
    }

    if (!email || !email.includes('@') || !email.includes('.')) {
      return { success: false, message: 'Ingresa un correo electrónico válido.' };
    }
    if (!password || password.length < 4) {
      return { success: false, message: 'La contraseña debe tener al menos 4 caracteres.' };
    }
    if (!heroName || heroName.length < 2) {
      return { success: false, message: 'El nombre de héroe debe tener al menos 2 caracteres.' };
    }

    const accounts = this.getAccounts();
    const existing = accounts.find(a => a.email === email);
    if (existing) {
      return { success: false, message: 'Ya existe una cuenta con este correo electrónico.' };
    }

    const newUser = {
      id: 'usr_' + Date.now().toString(36),
      email,
      passwordHash: this.hashPassword(password),
      heroName,
      name: heroName,
      provider: 'email',
      registeredAt: new Date().toISOString()
    };

    accounts.push(newUser);
    this.saveAccounts(accounts);
    this.setSession(newUser);

    return { success: true, user: this.sanitizeUser(newUser) };
  }

  // Inicio de sesión con Correo y Contraseña
  login(email, password) {
    email = String(email || '').trim().toLowerCase();
    password = String(password || '').trim();

    if (!email || !password) {
      return { success: false, message: 'Por favor ingresa tu correo y contraseña.' };
    }

    const accounts = this.getAccounts();
    const user = accounts.find(a => a.email === email);
    if (!user) {
      return { success: false, message: 'No existe ninguna cuenta con este correo.' };
    }

    const hash = this.hashPassword(password);
    if (user.passwordHash !== hash) {
      return { success: false, message: 'Contraseña incorrecta. Inténtalo de nuevo.' };
    }

    this.setSession(user);
    return { success: true, user: this.sanitizeUser(user) };
  }

  // Obtener cuentas de Google registradas en este dispositivo
  getGoogleAccounts() {
    const accounts = this.getAccounts();
    return accounts.filter(a => a.provider === 'google' || (a.email && a.email.endsWith('@gmail.com')));
  }

  // Inicio de sesión con Cuenta de Google
  loginWithGoogle(emailOrObj, heroName) {
    let email = '';
    if (typeof emailOrObj === 'object' && emailOrObj !== null) {
      email = emailOrObj.email || '';
      heroName = emailOrObj.name || emailOrObj.heroName || heroName;
    } else {
      email = String(emailOrObj || '').trim().toLowerCase();
    }
    heroName = String(heroName || '').trim();

    if (!email || !email.includes('@') || !email.includes('.')) {
      return { success: false, message: 'Por favor ingresa un correo de Google válido (ej: usuario@gmail.com).' };
    }
    if (!heroName) {
      heroName = email.split('@')[0].replace(/[^a-zA-Z0-9_-]/g, '_');
      heroName = heroName.charAt(0).toUpperCase() + heroName.slice(1);
    }

    const accounts = this.getAccounts();
    let user = accounts.find(a => a.email === email);

    if (!user) {
      // Registrar automáticamente usuario de Google
      user = {
        id: 'goog_' + Date.now().toString(36),
        email,
        passwordHash: null,
        heroName,
        name: heroName,
        provider: 'google',
        registeredAt: new Date().toISOString()
      };
      accounts.push(user);
      this.saveAccounts(accounts);
    } else {
      user.provider = 'google';
      if (heroName && heroName !== 'Google') {
        user.heroName = heroName;
      }
      user.name = user.heroName;
      this.saveAccounts(accounts);
    }

    this.setSession(user);
    return { success: true, user: this.sanitizeUser(user) };
  }

  // Verifica si Firebase está configurado con credenciales válidas
  isFirebaseConfigured() {
    if (typeof firebase === 'undefined' || typeof window === 'undefined' || !window.FIREBASE_CONFIG) return false;
    const key = window.FIREBASE_CONFIG.apiKey;
    const hasValidKey = key && key !== "TU_API_KEY_AQUI" && !key.includes("TU_API_KEY");
    if (hasValidKey && firebase.apps && !firebase.apps.length) {
      try {
        firebase.initializeApp(window.FIREBASE_CONFIG);
      } catch (e) {}
    }
    return !!(hasValidKey && firebase.apps && firebase.apps.length > 0);
  }

  // Procesa y guarda un usuario autenticado con Firebase
  processFirebaseUser(fbUser) {
    if (!fbUser) return { success: false, message: 'No se recibió usuario de Firebase.' };

    const email = fbUser.email || 'jugador@gmail.com';
    const heroName = fbUser.displayName || email.split('@')[0];

    const accounts = this.getAccounts();
    let user = accounts.find(a => a.email === email);

    if (!user) {
      user = {
        id: 'fb_' + fbUser.uid,
        email,
        passwordHash: null,
        heroName,
        name: heroName,
        provider: 'google',
        firebaseUid: fbUser.uid,
        photoURL: fbUser.photoURL || null,
        registeredAt: new Date().toISOString()
      };
      accounts.push(user);
      this.saveAccounts(accounts);
    } else {
      user.provider = 'google';
      user.firebaseUid = fbUser.uid;
      if (fbUser.displayName) {
        user.heroName = fbUser.displayName;
        user.name = fbUser.displayName;
      }
      if (fbUser.photoURL) user.photoURL = fbUser.photoURL;
      this.saveAccounts(accounts);
    }

    this.setSession(user);
    return { success: true, user: this.sanitizeUser(user) };
  }

  // Comprueba si el usuario acaba de volver de una redirección de Google
  async checkRedirectResult() {
    if (!this.isFirebaseConfigured() || typeof firebase === 'undefined' || !firebase.auth) return null;
    try {
      const result = await firebase.auth().getRedirectResult();
      if (result && result.user) {
        console.log("Sesión restaurada desde redirección de Google:", result.user.email);
        return this.processFirebaseUser(result.user);
      }
    } catch (e) {
      console.warn("Aviso en checkRedirectResult:", e);
    }
    return null;
  }

  // Inicio de sesión oficial con Google a través de Firebase Authentication
  async signInWithFirebaseGoogle() {
    if (!this.isFirebaseConfigured()) {
      return {
        success: false,
        needsConfig: true,
        message: 'Firebase no está configurado aún en js/firebase_config.js.'
      };
    }

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    });

    try {
      const result = await firebase.auth().signInWithPopup(provider);
      return this.processFirebaseUser(result.user);
    } catch (error) {
      console.error("Firebase Google Auth Error:", error);

      // Si el navegador bloqueó la ventana emergente (popup-blocked), usar redirección automática
      if (error.code === 'auth/popup-blocked') {
        console.warn("Ventana emergente bloqueada por el navegador. Redirigiendo con signInWithRedirect...");
        try {
          await firebase.auth().signInWithRedirect(provider);
          return { success: false, isRedirecting: true, message: 'Ventana emergente bloqueada. Redirigiendo a Google...' };
        } catch (redirectErr) {
          return {
            success: false,
            message: 'Tu navegador bloqueó las ventanas emergentes. Por favor permite popups para este sitio en la barra superior del navegador.'
          };
        }
      }

      if (error.code === 'auth/popup-closed-by-user') {
        return { success: false, message: 'Se canceló la ventana de Google.' };
      }
      if (error.code === 'auth/unauthorized-domain') {
        return {
          success: false,
          message: 'Dominio no autorizado en Firebase. Añade este dominio en Firebase Console -> Authentication -> Settings -> Dominios autorizados.'
        };
      }
      return { success: false, message: error.message || 'Error al autenticar con Google en Firebase.' };
    }
  }

  // Modo Invitado (Guest)
  loginAsGuest() {
    const guestUser = {
      id: 'guest_' + Date.now().toString(36),
      email: 'invitado@codequest.local',
      heroName: 'Héroe Invitado',
      name: 'Héroe Invitado',
      provider: 'guest',
      isGuest: true
    };
    this.setSession(guestUser);
    return guestUser;
  }

  // Establecer sesión activa
  setSession(user) {
    const safeUser = this.sanitizeUser(user);
    this.currentUser = safeUser;
    try {
      localStorage.setItem(this.sessionKey, JSON.stringify(safeUser));
    } catch (e) {}
  }

  // Cerrar sesión
  logout() {
    this.currentUser = null;
    try {
      localStorage.removeItem(this.sessionKey);
    } catch (e) {}
  }

  // Obtener usuario actualmente conectado
  getCurrentUser() {
    return this.currentUser;
  }

  // Limpiar datos sensibles antes de exponer el usuario
  sanitizeUser(user) {
    const hName = user.heroName || user.name || 'Héroe';
    return {
      id: user.id,
      email: user.email,
      heroName: hName,
      name: hName,
      provider: user.provider || 'email',
      isGuest: !!user.isGuest
    };
  }
}

// Instancia global del gestor de autenticación
const authManager = new AuthManager();
