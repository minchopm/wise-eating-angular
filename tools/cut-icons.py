#!/usr/bin/env python3
"""
Cut the generated icon sheet into thirteen transparent PNGs.

The generator was asked for a transparent background and produced a white one,
so the background has to be removed here. Naively keying out "everything near
white" would eat the icons alive: they are translucent glass, and their
brightest highlights are as close to white as the paper is.

What works instead is connectivity. The background is the one white region
that touches the border of the sheet; a highlight inside a glass jar is just
as white and touches nothing. So the mask is a flood fill seeded from the
edges, and every enclosed bright pixel survives by construction.

    python3 tools/cut-icons.py

Writes art/icon-<name>.png. Re-runnable; overwrites.
"""

from __future__ import annotations

import pathlib
import sys

import numpy as np
from PIL import Image, ImageDraw, ImageFilter
from scipy import ndimage

ROOT = pathlib.Path(__file__).resolve().parent.parent
SHEET = ROOT / "art/icons-sheet.png"

# How far from pure white still counts as background, per channel.
WHITE_TOLERANCE = 26

# Blobs smaller than this are specks the flood fill missed, not icons.
MIN_AREA = 4000

# Every icon is written into a square of this side, centred, with a margin —
# so that a wide leaf and a tall bottle end up the same optical weight in a
# 52px tile rather than one dwarfing the other.
CANVAS = 512
MARGIN = 0.10

# Reading order on the sheet: left to right, top to bottom. The blobs are
# sorted into the same order below, so this list is the whole mapping.
NAMES = [
    "nutrients",   # DNA helix
    "search",      # magnifying glass
    "plan",        # calendar
    "training",    # dumbbell
    "pantry",      # storage jar
    "baby",        # feeding bottle
    "list",        # checklist
    "person",      # single figure
    "clinician",   # stethoscope
    "team",        # group of figures
    "trend",       # arrow over bars
    "mail",        # envelope
    "leaf",        # leaf
]


def background_mask(rgb: Image.Image) -> np.ndarray:
    """True where the pixel is sheet, not icon."""
    # Flood fill from every corner and from the middle of each edge, in case a
    # corner happens to sit under an icon's shadow.
    probe = rgb.copy()
    w, h = probe.size
    seeds = [
        (0, 0), (w - 1, 0), (0, h - 1), (w - 1, h - 1),
        (w // 2, 0), (w // 2, h - 1), (0, h // 2), (w - 1, h // 2),
    ]
    SENTINEL = (255, 0, 255)
    for seed in seeds:
        if probe.getpixel(seed) == SENTINEL:
            continue
        ImageDraw.floodfill(probe, seed, SENTINEL, thresh=WHITE_TOLERANCE)

    filled = np.asarray(probe)
    return (
        (filled[:, :, 0] == 255) & (filled[:, :, 1] == 0) & (filled[:, :, 2] == 255)
    )


def alpha_from(mask: np.ndarray) -> Image.Image:
    """
    Turn the background mask into a soft alpha channel.

    The flood fill produces a hard, slightly ragged edge — it stops wherever
    the glass starts fading into the paper. Blurring it by a pixel and then
    pushing the midtones back out gives an edge that is soft where the glass
    is soft and still crisp where the glass is solid.
    """
    alpha = Image.fromarray(np.where(mask, 0, 255).astype(np.uint8), "L")
    alpha = alpha.filter(ImageFilter.GaussianBlur(1.1))
    lut = [0 if v < 40 else min(255, int((v - 40) * 255 / 170)) for v in range(256)]
    return alpha.point(lut)


def blobs(mask: np.ndarray) -> list[tuple[int, int, int, int]]:
    """Bounding boxes of each icon, in reading order."""
    labels, count = ndimage.label(~mask)
    boxes: list[tuple[int, int, int, int]] = []

    for index in range(1, count + 1):
        ys, xs = np.where(labels == index)
        if ys.size < MIN_AREA:
            continue
        boxes.append((int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1))

    if not boxes:
        sys.exit("no icons found — is the sheet really on a white background?")

    # Reading order. Rows are found by clustering on vertical centre, because
    # the icons in a row do not share a top edge — a leaf and a bottle are
    # different heights and the generator centred neither.
    heights = [b[3] - b[1] for b in boxes]
    band = sum(heights) / len(heights) * 0.6

    boxes.sort(key=lambda b: (b[1] + b[3]) / 2)
    rows: list[list[tuple[int, int, int, int]]] = []
    for box in boxes:
        centre = (box[1] + box[3]) / 2
        if rows and centre - (rows[-1][0][1] + rows[-1][0][3]) / 2 < band:
            rows[-1].append(box)
        else:
            rows.append([box])

    ordered: list[tuple[int, int, int, int]] = []
    for row in rows:
        ordered.extend(sorted(row, key=lambda b: b[0]))
    return ordered


def place(icon: Image.Image) -> Image.Image:
    """Centre an icon in a square canvas at a consistent optical size."""
    inner = int(CANVAS * (1 - MARGIN * 2))
    scale = inner / max(icon.width, icon.height)
    sized = icon.resize(
        (max(1, round(icon.width * scale)), max(1, round(icon.height * scale))),
        Image.LANCZOS,
    )

    out = Image.new("RGBA", (CANVAS, CANVAS), (0, 0, 0, 0))
    out.paste(sized, ((CANVAS - sized.width) // 2, (CANVAS - sized.height) // 2), sized)
    return out


def main() -> None:
    if not SHEET.exists():
        sys.exit(f"missing sheet: {SHEET}")

    sheet = Image.open(SHEET)
    rgb = Image.new("RGB", sheet.size, (255, 255, 255))
    rgb.paste(sheet, mask=sheet.split()[-1] if sheet.mode == "RGBA" else None)

    mask = background_mask(rgb)
    cut = rgb.convert("RGBA")
    cut.putalpha(alpha_from(mask))

    boxes = blobs(mask)
    print(f"found {len(boxes)} icons, expected {len(NAMES)}")
    if len(boxes) != len(NAMES):
        for i, box in enumerate(boxes):
            print(f"  {i}: {box}  {box[2]-box[0]}x{box[3]-box[1]}")
        sys.exit("count mismatch — check MIN_AREA, or the sheet layout changed")

    for name, box in zip(NAMES, boxes):
        out = ROOT / f"art/icon-{name}.png"
        place(cut.crop(box)).save(out, "PNG", optimize=True)
        print(f"  {out.name:24} {box[2]-box[0]:4}x{box[3]-box[1]:<4} → {out.stat().st_size/1024:.0f} KB")


if __name__ == "__main__":
    main()
