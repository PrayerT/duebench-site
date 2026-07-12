"""Post-process AI textures into web-ready decor assets."""
from PIL import Image, ImageOps, ImageEnhance
import os

HERE = os.path.dirname(os.path.abspath(__file__))
PUB = os.path.join(HERE, "..", "public", "decor")
os.makedirs(PUB, exist_ok=True)

# 1) body grain: laid paper -> neutral mid-gray luminance noise tile 512px
im = Image.open(os.path.join(HERE, "paper-laid.png")).convert("L")
im = im.resize((512, 512), Image.LANCZOS)
im = ImageOps.autocontrast(im, cutoff=1)          # spread the subtle grain
# center histogram on mid-gray so overlay blend is brightness-neutral
mean = sum(im.histogram()[i] * i for i in range(256)) / (512 * 512)
im = im.point(lambda p: max(0, min(255, int(p - mean + 128))))
im.save(os.path.join(PUB, "grain.webp"), quality=55)

# 2) contact-card texture: handmade grain, kept warm, darkened for the ink card
im2 = Image.open(os.path.join(HERE, "paper-grain.png")).convert("L")
im2 = im2.resize((512, 512), Image.LANCZOS)
im2 = ImageOps.autocontrast(im2, cutoff=1)
mean2 = sum(im2.histogram()[i] * i for i in range(256)) / (512 * 512)
im2 = im2.point(lambda p: max(0, min(255, int(p - mean2 + 128))))
im2.save(os.path.join(PUB, "grain-strong.webp"), quality=55)

for f in os.listdir(PUB):
    print(f, os.path.getsize(os.path.join(PUB, f)) // 1024, "KB")
