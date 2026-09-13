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

    if (!email || !email.includes('@')) {
      email = 'jugador.google@gmail.com';
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
      if (!user.heroName) user.heroName = heroName;
      user.name = user.heroName;
      this.saveAccounts(accounts);
    }

    this.setSession(user);
    return { success: true, user: this.sanitizeUser(user) };
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
