"""Parametric guilloché generator — banknote-style interlaced sine bands.
Outputs SVG with stroke=currentColor so CSS controls the tint per theme."""
import math, os

OUT = os.path.dirname(os.path.abspath(__file__))

def band(width=1200, height=64, waves=7, points=480, amp_ratio=0.36, freq=3.0):
    """Horizontal interlaced band: `waves` phase-shifted harmonic pairs."""
    paths = []
    cy = height / 2
    amp = height * amp_ratio
    for k in range(waves):
        ph = math.pi * 2 * k / waves
        pts = []
        for i in range(points + 1):
            t = i / points
            x = t * width
            # two superposed harmonics give the classic lens-shaped weave
            y = cy + amp * math.sin(2 * math.pi * freq * t + ph) \
                   + amp * 0.45 * math.sin(2 * math.pi * freq * 2 * t - ph * 1.6)
            pts.append(f"{x:.1f},{y:.1f}")
        paths.append('<polyline points="' + " ".join(pts) + '"/>')
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width} {height}" '
            f'preserveAspectRatio="none" fill="none" stroke="currentColor" '
            f'stroke-width="0.7" stroke-linecap="round">' + "".join(paths) + "</svg>")

def rosette(size=480, rings=9, points=720, r_base=0.30, r_amp=0.135, lobes=12):
    """Circular guilloché rosette — the medallion under a seal."""
    c = size / 2
    paths = []
    for k in range(rings):
        ph = math.pi * 2 * k / rings
        rr_base = size * (r_base + 0.012 * k)
        rr_amp = size * r_amp * (1 - k * 0.05)
        pts = []
        for i in range(points + 1):
            a = math.pi * 2 * i / points
            r = rr_base + rr_amp * math.sin(lobes * a + ph) * math.cos(3 * a - ph)
            pts.append(f"{c + r * math.cos(a):.1f},{c + r * math.sin(a):.1f}")
        paths.append('<polyline points="' + " ".join(pts) + '"/>')
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {size} {size}" '
            f'fill="none" stroke="currentColor" stroke-width="0.6" '
            f'stroke-linecap="round">' + "".join(paths) + "</svg>")

open(os.path.join(OUT, "guilloche-band.svg"), "w").write(band())
open(os.path.join(OUT, "guilloche-rosette.svg"), "w").write(rosette())
for f in ("guilloche-band.svg", "guilloche-rosette.svg"):
    print(f, os.path.getsize(os.path.join(OUT, f)) // 1024, "KB")
