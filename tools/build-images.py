#!/usr/bin/env python3
"""
Derive every image the site ships from the originals in `art/`.

The originals are what came out of the design tools and off the simulator:
1024-square logos and 2168-tall screenshots, several megabytes each. The site
never displays one at more than about 640 CSS pixels, so shipping them as-is
meant sending roughly 20 MB to load a page that needs under one.

Run after changing anything in `art/`:

    python3 tools/build-images.py

It is deliberately idempotent and writes only into `public/`.
"""

from __future__ import annotations

import pathlib
import sys

from PIL import Image, ImageDraw, ImageFont

ROOT = pathlib.Path(__file__).resolve().parent.parent
ART = ROOT / "art"
PUBLIC = ROOT / "public"
SHOTS = PUBLIC / "assets/shots"
ICONS = PUBLIC / "assets"

# The brand, as the stylesheet has it.
INK = (3, 12, 9)
LEAF = (38, 208, 124)
MINT = (110, 231, 183)
VIOLET = (167, 139, 250)
TEXT = (234, 245, 240)
DIM = (138, 163, 154)

# Phone screenshots. Rendered at twice the largest size the device frame is
# ever given, which is what a 2x display needs and nothing more.
SHOT_WIDTH = 640
SHOT_QUALITY = 80

# The nine App Store screenshots, downloaded from the live listing. These are
# raw app screens with no bezel of their own, which is why the site draws one
# around them — unlike the older marketing renders, which came with a frame
# baked in and ended up inside a second one.
SCREENSHOTS = [f"store-{n:02d}" for n in range(1, 10)]

# Wide editorial images.
WIDE = {"baby-feeding": 1200}

# The App Store screenshot routes are rendered in a browser and captured at
# device resolution, so those two need the original pixels rather than the
# 640-wide version the website displays.
FULL = ["nutritions_details_view", "workouts_timeline_iphone"]

# The App Store icon, at the sizes iOS and the web manifest ask for.
ICON_SIZES = [180, 192, 512]


def load(name: str) -> Image.Image:
    path = ART / f"{name}.png"
    if not path.exists():
        sys.exit(f"missing original: {path}")
    return Image.open(path)


def resize(image: Image.Image, width: int) -> Image.Image:
    height = round(image.height * width / image.width)
    return image.resize((width, height), Image.LANCZOS)


def as_webp(image: Image.Image, out: pathlib.Path, quality: int) -> None:
    out.parent.mkdir(parents=True, exist_ok=True)
    # Flattened onto the page ground rather than kept transparent: every one of
    # these sits on the dark background anyway, and an opaque WebP is markedly
    # smaller than one carrying an alpha channel it never uses.
    flat = Image.new("RGB", image.size, INK)
    if image.mode in ("RGBA", "LA"):
        flat.paste(image, mask=image.split()[-1])
    else:
        flat.paste(image.convert("RGB"))
    flat.save(out, "WEBP", quality=quality, method=6)
    print(f"  {out.relative_to(ROOT)}  {out.stat().st_size / 1024:.0f} KB")


def build_screenshots() -> None:
    print("screenshots →")
    for name in SCREENSHOTS:
        as_webp(resize(load(name), SHOT_WIDTH), SHOTS / f"{name}.webp", SHOT_QUALITY)


def build_full() -> None:
    print("full-size shots (App Store capture) →")
    for name in FULL:
        source = load(name)
        as_webp(source, SHOTS / f"{name}.full.webp", 92)


def build_wide() -> None:
    print("editorial images →")
    for name, width in WIDE.items():
        as_webp(resize(load(name), width), SHOTS / f"{name}.webp", 78)


def build_icons() -> None:
    print("icons →")
    source = load("logo")
    for size in ICON_SIZES:
        out = ICONS / f"icon-{size}.png"
        resize(source, size).convert("RGB").save(out, "PNG", optimize=True)
        print(f"  {out.relative_to(ROOT)}  {out.stat().st_size / 1024:.0f} KB")

    # The header and footer mark: the apple on its own, transparent, so it
    # sits on the dark page as a glass object rather than as a white tile.
    # Saved as PNG rather than WebP because it needs its alpha channel.
    mark = resize(load("apple glass only"), 128)
    out = ICONS / "mark.png"
    mark.save(out, "PNG", optimize=True)
    print(f"  {out.relative_to(ROOT)}  {out.stat().st_size / 1024:.0f} KB")


def font(names: list[str], size: int) -> ImageFont.FreeTypeFont:
    for name in names:
        for folder in ("/System/Library/Fonts/Supplemental", "/System/Library/Fonts"):
            path = pathlib.Path(folder) / name
            if path.exists():
                return ImageFont.truetype(str(path), size)
    return ImageFont.load_default(size)


def build_og() -> None:
    """
    The social card.

    1200x630 is what every platform crops to, and the safe area is roughly the
    middle 80% — anything closer to an edge than that gets eaten by one client
    or another, so nothing meaningful goes there.
    """
    print("social card →")
    W, H = 1200, 630
    card = Image.new("RGB", (W, H), INK)
    draw = ImageDraw.Draw(card, "RGBA")

    # Two soft radial washes.
    #
    # Built at a sixteenth scale and resized up rather than drawn as stacked
    # ellipses: a stack accumulates alpha at the centre and blows out to a flat
    # disc, where computing the falloff once per pixel gives an actual
    # gradient. At this blur the low-resolution source is invisible.
    def wash(cx: float, cy: float, radius: float, colour, peak: int) -> Image.Image:
        small = Image.new("RGBA", (W // 16, H // 16), (*colour, 0))
        px = small.load()
        sx, sy, sr = cx / 16, cy / 16, radius / 16
        for y in range(small.height):
            for x in range(small.width):
                d = ((x - sx) ** 2 + (y - sy) ** 2) ** 0.5 / sr
                if d >= 1:
                    continue
                # Smoothstep falloff, squared — bright core, long soft tail.
                t = 1 - d
                px[x, y] = (*colour, int(peak * t * t * (3 - 2 * t) * t))
        return small.resize((W, H), Image.LANCZOS)

    for spec in [
        (170, 40, 700, LEAF, 62),
        (1090, 630, 640, VIOLET, 58),
        (700, 300, 460, (251, 191, 36), 16),
    ]:
        card = Image.alpha_composite(card.convert("RGBA"), wash(*spec)).convert("RGB")

    draw = ImageDraw.Draw(card, "RGBA")

    # A scattering of points, echoing the globe on the home page.
    seed = 0x9E3779B9

    def rnd() -> float:
        nonlocal seed
        seed ^= (seed << 13) & 0xFFFFFFFF
        seed ^= seed >> 17
        seed ^= (seed << 5) & 0xFFFFFFFF
        seed &= 0xFFFFFFFF
        return seed / 0x100000000

    for _ in range(300):
        x, y = rnd() * W, rnd() * H
        r = 0.7 + rnd() * 1.6
        tint = [LEAF, MINT, VIOLET, (251, 191, 36), TEXT][int(rnd() * 5)]
        draw.ellipse([x - r, y - r, x + r, y + r], fill=(*tint, int(50 + rnd() * 110)))

    # The apple, transparent, pasted through its own alpha.
    icon = resize(load("apple glass only"), 100).convert("RGBA")
    card.paste(icon, (84, 78), icon)

    draw.text((198, 100), "WISE EATING", font=font(["Helvetica.ttc"], 24), fill=MINT)
    draw.text(
        (198, 133),
        "USDA nutrition & training, on iPhone",
        font=font(["Helvetica.ttc"], 21),
        fill=DIM,
    )

    # Kept in step with the H1 on the home page. Both used to promise "every
    # food on earth", which is not what the app has: it has the foods that
    # have been through a laboratory, which is a smaller and better claim.
    title = font(["Georgia Bold.ttf"], 84)
    draw.text((88, 248), "12,601 foods.", font=title, fill=TEXT)
    draw.text((88, 348), "Measured, not guessed.", font=title, fill=LEAF)

    draw.text(
        (88, 486),
        "USDA FoodData Central  ·  39 nutrient fields each  ·  22 vitamins  ·  11 minerals",
        font=font(["Helvetica.ttc"], 26),
        fill=DIM,
    )

    out = PUBLIC / "og.png"
    card.save(out, "PNG", optimize=True)
    print(f"  {out.relative_to(ROOT)}  {out.stat().st_size / 1024:.0f} KB")


if __name__ == "__main__":
    build_screenshots()
    build_full()
    build_wide()
    build_icons()
    build_og()
    print("done")
