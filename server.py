# server.py (Root Launcher)
# Redirige la ejecución al servidor seguro en backend/server.py

import os
import sys

backend_server = os.path.join(os.path.dirname(__file__), 'backend', 'server.py')

if os.path.exists(backend_server):
    with open(backend_server, 'rb') as f:
        code = compile(f.read(), backend_server, 'exec')
        exec(code)
else:
    import http.server
    import socketserver
    PORT = 8085
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("", PORT), http.server.SimpleHTTPRequestHandler) as httpd:
        print(f"Servidor en http://localhost:{PORT}")
        httpd.serve_forever()
