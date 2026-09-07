"""
Grade unitar „Cadru 35”, aplicat identic pe toate fotografiile color.
Emulează un negativ scanat: umbre ridicate și ușor reci, lumini calde,
saturație redusă, grain fin. Rulat o singură dată, rezultatul e commit-uit.
"""
import sys, os
from PIL import Image, ImageEnhance, ImageFilter
import numpy as np

def curve(x, lift, gamma, roll):
    """Curbă de film: umbre ridicate, high-light rulat lin."""
    x = lift + (1.0 - lift) * x
    x = np.power(x, gamma)
    return x * (1.0 - roll) + roll * (1.0 - np.power(1.0 - x, 2.2))

def grade(src, dst, max_w=1800):
    im = Image.open(src).convert("RGB")
    if im.width > max_w:
        im = im.resize((max_w, round(im.height * max_w / im.width)), Image.LANCZOS)

    a = np.asarray(im).astype(np.float32) / 255.0

    # curbă de bază, aceeași pe toate canalele
    a = curve(a, lift=0.045, gamma=1.06, roll=0.22)

    # split toning: umbre spre albastru-neutru, lumini spre chihlimbar
    lum = a @ np.array([0.2126, 0.7152, 0.0722], dtype=np.float32)
    sh = np.clip(1.0 - lum * 1.9, 0, 1)[..., None]
    hi = np.clip((lum - 0.42) * 1.7, 0, 1)[..., None]
    a += sh * np.array([-0.012, 0.000, 0.030], dtype=np.float32)
    a += hi * np.array([0.030, 0.008, -0.026], dtype=np.float32)

    # desaturare controlată spre luminanță
    lum2 = (a @ np.array([0.2126, 0.7152, 0.0722], dtype=np.float32))[..., None]
    a = lum2 + (a - lum2) * 0.86

    a = np.clip(a, 0, 1)
    out = Image.fromarray((a * 255).astype(np.uint8))

    # grain fin, monocrom, proporțional cu zonele medii
    rng = np.random.default_rng(35)
    g = rng.normal(0, 3.4, (out.height, out.width)).astype(np.float32)
    g = np.asarray(Image.fromarray((g + 128).astype(np.uint8)).filter(
        ImageFilter.GaussianBlur(0.45)), dtype=np.float32) - 128.0
    b = np.asarray(out).astype(np.float32) + g[..., None]
    out = Image.fromarray(np.clip(b, 0, 255).astype(np.uint8))

    out = ImageEnhance.Contrast(out).enhance(1.04)
    out.save(dst, "JPEG", quality=86, optimize=True, progressive=True)
    return out.size

if __name__ == "__main__":
    for p in sys.argv[1:]:
        print(os.path.basename(p), grade(p, p))
