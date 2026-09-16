# backend/server.py
# Servidor de Desarrollo Local de Code Quest con Anti-Caché y Seguridad

import http.server
import socketserver
import os
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
ROOT_DIR = os.path.abspath(os.path.join(BASE_DIR, '..'))
FRONTEND_DIR = os.path.join(ROOT_DIR, 'frontend')

# Si la carpeta frontend existe, servir desde ella; si no, servir desde la raíz
SERVE_DIR = FRONTEND_DIR if os.path.exists(FRONTEND_DIR) else ROOT_DIR

class SecureDevHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=SERVE_DIR, **kwargs)

    def end_headers(self):
        # Cabeceras anti-caché y de seguridad HTTP
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        self.send_header('X-Content-Type-Options', 'nosniff')
        self.send_header('X-Frame-Options', 'DENY')
        self.send_header('X-XSS-Protection', '1; mode=block')
        super().end_headers()

PORT = 8085
socketserver.TCPServer.allow_reuse_address = True

if __name__ == '__main__':
    with socketserver.TCPServer(("", PORT), SecureDevHandler) as httpd:
        print(f"==================================================")
        print(f"🛡️ Servidor Backend/Frontend Code Quest Activo")
        print(f"🌐 URL Local: http://localhost:{PORT}")
        print(f"📁 Directorio de Frontend: {SERVE_DIR}")
        print(f"🔒 Cabeceras de Seguridad y Anti-Caché habilitadas")
        print(f"==================================================")
        sys.stdout.flush()
        httpd.serve_forever()
