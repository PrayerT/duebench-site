import json, base64, urllib.request, time, sys, os

OUT = os.path.dirname(os.path.abspath(__file__))
NO_TEXT = ", no text, no words, no letters, no numbers, no watermark"

JOBS = [
  ("paper-grain", "seamless handmade paper texture, warm ivory cream color, subtle cotton fibers and fine grain, flat even lighting, ultra minimal, soft, high detail scan of blank paper, full frame close-up"),
  ("paper-laid", "fine laid paper texture with very subtle horizontal chain lines, cream white antique paper scan, blank, even lighting, minimal, full frame"),
  ("seal-emblem", "vintage engraved emblem, circular laurel wreath medallion with a single bold checkmark symbol in the center, banknote engraving style, fine crosshatch line art, black ink on white background, symmetrical, centered, isolated"),
  ("seal-rosette", "intricate engraved rosette seal, concentric geometric guilloche rings like a banknote medallion, fine black line art on white, perfectly circular, centered, isolated, minimal"),
  ("guilloche-band", "guilloche security pattern, fine interlacing sine wave lines forming an ornamental horizontal band, banknote certificate border engraving, precise thin black lines on white background, geometric, symmetrical"),
]

for name, prompt in JOBS:
    path = os.path.join(OUT, f"{name}.png")
    if os.path.exists(path) and os.path.getsize(path) > 10000:
        print(f"skip {name} (exists)"); continue
    t0 = time.time()
    body = json.dumps({"model": "x/z-image-turbo", "prompt": prompt + NO_TEXT, "stream": False}).encode()
    req = urllib.request.Request("http://localhost:11434/api/generate", data=body, headers={"Content-Type": "application/json"})
    try:
        with urllib.request.urlopen(req, timeout=420) as r:
            d = json.load(r)
        img = base64.b64decode(d["image"])
        open(path, "wb").write(img)
        print(f"OK {name}: {len(img)//1024}KB in {time.time()-t0:.0f}s", flush=True)
    except Exception as e:
        print(f"FAIL {name}: {e}", flush=True)
        sys.exit(1)
print("ALL DONE")
