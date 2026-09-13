import http.server
import socketserver
import sys

class NoCacheHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

PORT = 8085
socketserver.TCPServer.allow_reuse_address = True

if __name__ == '__main__':
    with socketserver.TCPServer(("", PORT), NoCacheHandler) as httpd:
        print(f"Servidor Code Quest con anti-caché corriendo en http://localhost:{PORT}")
        sys.stdout.flush()
        httpd.serve_forever()
