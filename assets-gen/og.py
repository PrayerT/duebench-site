"""Compose the 1200x630 og:image from brand tokens + generated decor."""
import math, os
from PIL import Image, ImageDraw, ImageFont, ImageOps

HERE = os.path.dirname(os.path.abspath(__file__))
W, H = 1200, 630
PAPER = (250, 248, 242)
INK = (24, 34, 54)
MUTED = (91, 99, 115)
GREEN = (14, 138, 80)

img = Image.new("RGB", (W, H), PAPER)

# --- paper grain, multiply at low strength ---
grain = Image.open(os.path.join(HERE, "paper-laid.png")).convert("L").resize((W, W)).crop((0, 0, W, H))
grain = ImageOps.autocontrast(grain, cutoff=1)
grain_rgb = Image.merge("RGB", (grain, grain, grain))
from PIL import ImageChops
mul = ImageChops.multiply(img, grain_rgb.point(lambda p: min(255, p//6 + 213)))
img = Image.blend(img, mul, 0.5)

# --- guilloché band across the lower area (ink, subtle) ---
band = Image.new("RGBA", (W, H), (0, 0, 0, 0))
d = ImageDraw.Draw(band)
bh, by = 110, H - 148   # band height, top y
waves, freq = 7, 4.0
for k in range(waves):
    ph = math.pi * 2 * k / waves
    pts = []
    for i in range(601):
        t = i / 600
        x = t * W
        y = by + bh/2 + bh*0.36*math.sin(2*math.pi*freq*t + ph) \
                     + bh*0.16*math.sin(2*math.pi*freq*2*t - ph*1.6)
        pts.append((x, y))
    d.line(pts, fill=INK + (46,), width=2)
img = Image.alpha_composite(img.convert("RGBA"), band)

# --- rosette watermark, right side (green, faint) ---
ros = Image.new("RGBA", (W, H), (0, 0, 0, 0))
d = ImageDraw.Draw(ros)
cx, cy, S = 985, 240, 460
rings, lobes = 14, 18
for k in range(rings):
    ph = math.pi * 2 * k / rings
    base = S * (0.20 + 0.115 * k / rings)
    amp = S * (0.055 - 0.0022 * k / rings)
    pts = []
    for i in range(361):
        a = math.pi * 2 * i / 360
        r = base + amp*math.sin(lobes*a + ph) + amp*0.5*math.sin(6*a - 2*ph)
        pts.append((cx + r*math.cos(a), cy + r*math.sin(a)))
    d.line(pts, fill=GREEN + (34,), width=2)
img = Image.alpha_composite(img, ros)

draw = ImageDraw.Draw(img)

def font(path, size, axes=None):
    f = ImageFont.truetype(os.path.join(HERE, path), size)
    if axes:
        try: f.set_variation_by_axes(axes)
        except Exception: pass
    return f

news = font("Newsreader.ttf", 118, [72, 600])
inter_md = font("Inter.ttf", 46, [32, 500])
inter_rg = font("Inter.ttf", 27, [16, 400])

# wordmark with green dot
x0, y0 = 84, 158
draw.text((x0, y0), "DueBench", font=news, fill=INK)
wm_w = draw.textlength("DueBench", font=news)
draw.text((x0 + wm_w + 6, y0), ".", font=news, fill=GREEN)

# tagline + services
draw.text((x0, y0 + 168), "We show our work.", font=inter_md, fill=INK)
draw.text((x0, y0 + 244), "Verified lead lists  ·  Plain-English code audits", font=inter_rg, fill=MUTED)

# tick badge before the domain, bottom-left above band
ty = H - 74
draw.ellipse((x0, ty, x0 + 34, ty + 34), outline=GREEN, width=3, fill=(228, 242, 233))
# checkmark
draw.line([(x0+9, ty+18), (x0+15, ty+24), (x0+26, ty+11)], fill=GREEN, width=4, joint="curve")
draw.text((x0 + 46, ty + 2), "duebench.com", font=inter_rg, fill=INK)

out = os.path.join(HERE, "og.png")
img.convert("RGB").save(out, optimize=True)
print("og.png", os.path.getsize(out)//1024, "KB")
