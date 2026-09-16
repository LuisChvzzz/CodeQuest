# backend/scripts/process_user_icons.py
# Procesa los iconos JPEG proporcionados por el usuario, elimina el fondo de cuadrícula falsa (checkerboard)
# y genera PNGs transparentes perfectamente centrados y listos para Code Quest.

import os
import shutil
from PIL import Image
from collections import deque

ICONS_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..', 'frontend', 'assets', 'icons'))
BACKUP_DIR = os.path.join(ICONS_DIR, 'original_jpeg')
os.makedirs(BACKUP_DIR, exist_ok=True)

def is_background_pixel(r, g, b, lum_min=120):
    # Los contornos oscuros/negros del icono NUNCA son fondo
    if max(r, g, b) < 65:
        return False
    # Píxeles con color saturado (rojo, oro, azul, verde, etc.) NUNCA son fondo
    sat = max(r, g, b) - min(r, g, b)
    if sat > 25:
        return False
    # Reflejos o brillos blancos puros (> 236) son del icono
    lum = (r + g + b) / 3.0
    if lum > 236:
        return False
    # El fondo checkerboard es gris neutro (luminancia entre lum_min y 235, saturación baja)
    return (lum_min <= lum <= 235)

def remove_background_and_square(img_path, base_name=''):
    img = Image.open(img_path).convert('RGB')
    w, h = img.size
    rgba = img.convert('RGBA')
    pixels = rgba.load()
    
    # Para espadas_cruzadas, evitar que la compresión JPEG en row 58 se filtre al interior del acero
    lum_min = 148 if base_name == 'espadas_cruzadas' else 120
    
    visited = set()
    queue = deque()
    
    # 1. Sembrar desde todos los píxeles del borde exterior que coincidan con fondo
    for x in range(w):
        for y in [0, h - 1]:
            if (x, y) not in visited:
                r, g, b = img.getpixel((x, y))
                if is_background_pixel(r, g, b, lum_min):
                    queue.append((x, y))
                    visited.add((x, y))
    for y in range(h):
        for x in [0, w - 1]:
            if (x, y) not in visited:
                r, g, b = img.getpixel((x, y))
                if is_background_pixel(r, g, b, lum_min):
                    queue.append((x, y))
                    visited.add((x, y))
                    
    # BFS para eliminar todo el fondo exterior conectado
    while queue:
        cx, cy = queue.popleft()
        pixels[cx, cy] = (0, 0, 0, 0)
        for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < w and 0 <= ny < h and (nx, ny) not in visited:
                r, g, b = img.getpixel((nx, ny))
                if is_background_pixel(r, g, b, lum_min):
                    visited.add((nx, ny))
                    queue.append((nx, ny))
                    
    # 2. Detectar huecos interiores bimodales EXCLUSIVAMENTE para candado (el arco del grillete)
    # Evita perforar hojas de espadas o altavoces metálicos que tienen tonos grises legítimos de acero
    if base_name == 'candado':
        visited_interior = set()
        for y in range(h):
            for x in range(w):
                if (x, y) not in visited and (x, y) not in visited_interior:
                    r, g, b = img.getpixel((x, y))
                    if is_background_pixel(r, g, b, lum_min) and (max(r, g, b) - min(r, g, b) <= 15):
                        comp = []
                        q = deque([(x, y)])
                        visited_interior.add((x, y))
                        while q:
                            px, py = q.popleft()
                            comp.append((px, py))
                            for dx, dy in [(-1, 0), (1, 0), (0, -1), (0, 1)]:
                                nx, ny = px + dx, py + dy
                                if 0 <= nx < w and 0 <= ny < h and (nx, ny) not in visited and (nx, ny) not in visited_interior:
                                    nr, ng, nb = img.getpixel((nx, ny))
                                    if is_background_pixel(nr, ng, nb, lum_min) and (max(nr, ng, nb) - min(nr, ng, nb) <= 15):
                                        visited_interior.add((nx, ny))
                                        q.append((nx, ny))
                        has_dark = any(145 <= (img.getpixel(p)[0] + img.getpixel(p)[1] + img.getpixel(p)[2]) / 3 <= 175 for p in comp)
                        has_light = any(200 <= (img.getpixel(p)[0] + img.getpixel(p)[1] + img.getpixel(p)[2]) / 3 <= 230 for p in comp)
                        if has_dark and has_light and len(comp) > 100:
                            for px, py in comp:
                                pixels[px, py] = (0, 0, 0, 0)
                                visited.add((px, py))
                            
    # 3. Recortar al contenido y centrar en lienzo cuadrado con margen
    bbox = rgba.getbbox()
    if bbox:
        cropped = rgba.crop(bbox)
        cw, ch = cropped.size
        dim = max(cw, ch)
        margin = max(4, int(dim * 0.05))
        canvas_dim = dim + margin * 2
        square_img = Image.new('RGBA', (canvas_dim, canvas_dim), (0, 0, 0, 0))
        offset_x = (canvas_dim - cw) // 2
        offset_y = (canvas_dim - ch) // 2
        square_img.paste(cropped, (offset_x, offset_y), cropped)
        return square_img
    return rgba

print("\n🎨 Procesando Iconos del Usuario y Quitando Fondo...")

jpeg_files = [f for f in os.listdir(ICONS_DIR) if f.endswith(('.jpeg', '.jpg'))]
source_dir = ICONS_DIR
if not jpeg_files:
    jpeg_files = [f for f in os.listdir(BACKUP_DIR) if f.endswith(('.jpeg', '.jpg'))]
    source_dir = BACKUP_DIR

print(f"📦 Se encontraron {len(jpeg_files)} iconos JPEG para procesar desde {source_dir}.")

for f in sorted(jpeg_files):
    src_path = os.path.join(source_dir, f)
    # Hacer copia de seguridad del JPEG original
    backup_path = os.path.join(BACKUP_DIR, f)
    if not os.path.exists(backup_path):
        shutil.copy2(src_path, backup_path)
        
    base_name = os.path.splitext(f)[0]
    processed_img = remove_background_and_square(src_path, base_name)
    
    # Guardar PNG principal
    target_png = os.path.join(ICONS_DIR, f"{base_name}.png")
    processed_img.save(target_png, "PNG", optimize=True)
    print(f"  ✨ Creado PNG transparente: {base_name}.png ({processed_img.size[0]}x{processed_img.size[1]})")
    
    # Aliases necesarios para Code Quest
    if base_name == 'pause':
        alias_path = os.path.join(ICONS_DIR, 'pausa.png')
        processed_img.save(alias_path, "PNG", optimize=True)
        print(f"  📎 Alias creado: pausa.png")
    elif base_name == 'foco':
        alias_path = os.path.join(ICONS_DIR, 'sabio_foco.png')
        processed_img.save(alias_path, "PNG", optimize=True)
        print(f"  📎 Alias creado: sabio_foco.png")

print("\n✅ ¡Todos los iconos han sido procesados con éxito y tienen fondo 100% transparente!")
