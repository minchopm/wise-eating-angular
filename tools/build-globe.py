#!/usr/bin/env python3
"""
Build the data the hero globe is made of.

Three artefacts, all derived from sources that live outside this repository:

  1. a land mask, so the globe's points sit on continents rather than being
     scattered evenly over a featureless ball;
  2. simplified coastlines, drawn as faint lines on top of them;
  3. a sprite atlas of real food photographs, one per city marker, cut from
     the frame archive that ships inside the iOS app.

Sources (paths overridable by environment variable):

    GEOJSON   a FeatureCollection of continent MultiPolygons
    ARCHIVE   food_archive_144.mp4 — the small variant, 144px, 30fps
    FOODS     foods_index.csv — name → frame_index for every food in it

Output lands in src/app/three/globe-data.ts and public/assets/globe/.

    python3 tools/build-globe.py
"""

from __future__ import annotations

import base64
import csv
import json
import os
import pathlib
import subprocess
import sys
import tempfile

from PIL import Image, ImageDraw

ROOT = pathlib.Path(__file__).resolve().parent.parent

GEOJSON = pathlib.Path(
    os.environ.get("GEOJSON", "/Users/minchomilev/work/VT-Front-m/public/GeoJson/final.geojson")
)
ARCHIVE = pathlib.Path(
    os.environ.get("ARCHIVE", "/Users/minchomilev/work/wise-eating/Ayura/Food/food_archive_144.mp4")
)
FOODS = pathlib.Path(
    os.environ.get(
        "FOODS", "/Users/minchomilev/work/wise-eating/ayurveda-data/archive/foods_index.csv"
    )
)
NUTRIENTS = pathlib.Path(
    os.environ.get("NUTRIENTS", "/Users/minchomilev/work/wise-eating/Ayura/Legacy/foods.json")
)

OUT_TS = ROOT / "src/app/three/globe-data.ts"
OUT_DIR = ROOT / "public/assets/globe"

# The mask only decides whether a point is on land. 720x360 is half a degree,
# which is finer than the points are ever spaced.
MASK_W, MASK_H = 720, 360

# Coastline simplification, in degrees. Coarse on purpose: these are drawn as
# hairlines behind a field of glowing dots, and every extra vertex is bytes on
# the wire for detail nobody can resolve.
COAST_TOLERANCE = 0.9
COAST_MIN_POINTS = 12

ATLAS_COLS = 8
ATLAS_TILE = 144

# ------------------------------------------------------------------ nutrients

# Adult daily reference values, US Daily Values — the same frame of reference
# the source data was compiled in. Used only to decide which three nutrients
# are worth naming for a given food, never shown as a health claim.
#
#   field in foods.json → (label, reference amount, unit)
REFERENCE: dict[str, tuple[str, float, str]] = {
    "vitamins.vitaminA_RAE": ("Vitamin A", 900, "µg"),
    "vitamins.vitaminC": ("Vitamin C", 90, "mg"),
    "vitamins.vitaminB6": ("Vitamin B6", 1.7, "mg"),
    "vitamins.vitaminB12": ("Vitamin B12", 2.4, "µg"),
    "vitamins.vitaminE": ("Vitamin E", 15, "mg"),
    "vitamins.vitaminK": ("Vitamin K", 120, "µg"),
    "vitamins.folateDFE": ("Folate", 400, "µg"),
    "minerals.calcium": ("Calcium", 1300, "mg"),
    "minerals.iron": ("Iron", 18, "mg"),
    "minerals.magnesium": ("Magnesium", 420, "mg"),
    "minerals.manganese": ("Manganese", 2.3, "mg"),
    "minerals.zinc": ("Zinc", 11, "mg"),
    "minerals.potassium": ("Potassium", 4700, "mg"),
    "minerals.selenium": ("Selenium", 55, "µg"),
}


# --------------------------------------------------------------------- cities

# Cities and a food each — capitals, ports, and a few places that are on the
# list only because something specific is eaten there.
#
# `label` is what a reader sees. `query` is what gets looked up in
# foods_index.csv, which uses USDA's naming and so calls sweet corn "Corn,
# sweet, yellow, cooked, boiled, drained, with salt". Keeping the two apart
# means the picture is provably the right food and the caption is still
# readable.
CITIES: list[tuple[str, str, float, float, str, str]] = [
    # city, country, lat, lon, label, query
    ("Tokyo", "Japan", 35.68, 139.69, "Sushi", "Sushi, NFS"),
    ("Seoul", "South Korea", 37.57, 126.98, "Kimchi", "Kimchi"),
    ("Beijing", "China", 39.90, 116.41, "Steamed rice", "Rice, white, cooked, NS as to fat"),
    ("Hanoi", "Vietnam", 21.03, 105.85, "Pho", "Soup, pho, no meat"),
    ("Bangkok", "Thailand", 13.76, 100.50, "Jasmine rice", "Rice, white, cooked, glutinous"),
    ("Mumbai", "India", 19.08, 72.88, "Lentils", "Lentils, NFS"),
    ("Delhi", "India", 28.61, 77.21, "Chicken curry", "Chicken curry"),
    ("Colombo", "Sri Lanka", 6.93, 79.86, "Coconut milk", "Coconut milk"),
    ("Jakarta", "Indonesia", -6.21, 106.85, "Tempeh", "Tempeh, cooked"),
    ("Manila", "Philippines", 14.60, 120.98, "Mango", "Mango, raw"),
    ("Kathmandu", "Nepal", 27.72, 85.32, "Buckwheat", "Buckwheat groats, roasted, cooked"),
    ("Tashkent", "Uzbekistan", 41.30, 69.24, "Melon", "Melons, cantaloupe, raw"),
    ("Tbilisi", "Georgia", 41.72, 44.79, "Walnuts", "Nuts, walnuts, black, dried"),
    ("Istanbul", "Turkey", 41.01, 28.98, "Yoghurt", "Yogurt, NFS"),
    ("Beirut", "Lebanon", 33.89, 35.50, "Hummus", "Hummus, plain"),
    ("Tel Aviv", "Israel", 32.09, 34.78, "Falafel", "Falafel"),
    ("Cairo", "Egypt", 30.04, 31.24, "Fava beans", "Fava beans, cooked"),
    ("Marrakesh", "Morocco", 31.63, -7.99, "Couscous", "Couscous, cooked"),
    ("Tunis", "Tunisia", 36.81, 10.18, "Green olives", "Olives, green"),
    ("Lagos", "Nigeria", 6.52, 3.38, "Fried plantain", "Plantains, yellow, fried, Latino restaurant"),
    ("Addis Ababa", "Ethiopia", 9.03, 38.74, "Coffee", "Coffee, brewed"),
    ("Nairobi", "Kenya", -1.29, 36.82, "Kale", "Kale, raw"),
    ("Cape Town", "South Africa", -33.92, 18.42, "Snapper", "Fish, snapper"),
    ("Athens", "Greece", 37.98, 23.73, "Feta", "Cheese, Feta"),
    ("Sofia", "Bulgaria", 42.70, 23.32, "Yoghurt", "Yogurt, Greek, whole milk, plain"),
    ("Rome", "Italy", 41.90, 12.50, "Pasta", "Pasta, cooked"),
    ("Naples", "Italy", 40.85, 14.27, "Tomatoes", "Tomatoes, raw"),
    ("Madrid", "Spain", 40.42, -3.70, "Olive oil", "Olive oil"),
    ("Lisbon", "Portugal", 38.72, -9.14, "Sardines", "Fish, sardines, canned"),
    ("Paris", "France", 48.86, 2.35, "Baguette", "Bread, French or Vienna"),
    ("Lyon", "France", 45.76, 4.84, "Brie", "Cheese, Brie"),
    ("Bern", "Switzerland", 46.95, 7.45, "Swiss cheese", "Cheese, Swiss"),
    ("Amsterdam", "Netherlands", 52.37, 4.90, "Gouda", "Cheese, gouda"),
    ("Brussels", "Belgium", 50.85, 4.35, "Sprouts", "Brussels sprouts, NS as to form, cooked"),
    ("Berlin", "Germany", 52.52, 13.40, "Rye bread", "Bread, rye"),
    ("Prague", "Czechia", 50.08, 14.44, "Red cabbage", "Cabbage, red, cooked"),
    ("Warsaw", "Poland", 52.23, 21.01, "Beetroot", "Beets, NS as to form, cooked"),
    ("Kyiv", "Ukraine", 50.45, 30.52, "Buckwheat", "Buckwheat groats, roasted, cooked"),
    ("Moscow", "Russia", 55.76, 37.62, "Beetroot", "Beets, NS as to form, cooked"),
    ("Stockholm", "Sweden", 59.33, 18.07, "Pickled herring", "Fish, herring, Atlantic, pickled"),
    ("Oslo", "Norway", 59.91, 10.75, "Salmon", "Fish, salmon, raw"),
    ("Reykjavik", "Iceland", 64.15, -21.94, "Cod", "Fish, cod, Pacific, cooked"),
    ("Dublin", "Ireland", 53.35, -6.26, "Potatoes", "Potatoes, boiled, cooked in skin, flesh, with salt"),
    ("London", "United Kingdom", 51.51, -0.13, "Tea", "Tea, hot, herbal"),
    ("Edinburgh", "United Kingdom", 55.95, -3.19, "Oatmeal", "Oatmeal, NFS"),
    ("New York", "United States", 40.71, -74.01, "Bagel", "Bagel"),
    ("Burlington", "United States", 44.48, -73.21, "Maple syrup", "Syrups, maple"),
    ("Chicago", "United States", 41.88, -87.63, "Sweet corn", "Corn, sweet, yellow, cooked, boiled, drained, with salt"),
    ("New Orleans", "United States", 29.95, -90.07, "Rice", "Rice, white, cooked, NS as to fat"),
    ("Austin", "United States", 30.27, -97.74, "Corn tortilla", "Tortilla, corn"),
    ("San Francisco", "United States", 37.77, -122.42, "Avocado", "Avocado, raw"),
    ("Seattle", "United States", 47.61, -122.33, "Grilled salmon", "Fish, salmon, grilled"),
    ("Anchorage", "United States", 61.22, -149.90, "Blueberries", "Blueberries, raw"),
    ("Montreal", "Canada", 45.50, -73.57, "Maple syrup", "Syrups, maple"),
    ("Vancouver", "Canada", 49.28, -123.12, "Salmon", "Fish, salmon, raw"),
    ("Mexico City", "Mexico", 19.43, -99.13, "Black beans", "Beans, black, mature seeds, cooked, boiled, with salt"),
    ("Oaxaca", "Mexico", 17.07, -96.72, "Chillies", "Peppers, hot chili, red, raw"),
    ("Havana", "Cuba", 23.11, -82.37, "Plantain", "Plantains, yellow, fried, Latino restaurant"),
    ("Bogota", "Colombia", 4.71, -74.07, "Coffee", "Coffee, brewed"),
    ("Lima", "Peru", -12.05, -77.04, "Potatoes", "Potatoes, boiled, cooked in skin, flesh, with salt"),
    ("Cusco", "Peru", -13.53, -71.97, "Quinoa", "Quinoa, cooked"),
    ("La Paz", "Bolivia", -16.50, -68.15, "Quinoa", "Quinoa, cooked"),
    ("Sao Paulo", "Brazil", -23.55, -46.63, "Black beans", "Beans, black, mature seeds, cooked, boiled, with salt"),
    ("Salvador", "Brazil", -12.97, -38.51, "Coconut", "Coconut milk"),
    ("Buenos Aires", "Argentina", -34.60, -58.38, "Beef", "Beef, ground, patty"),
    ("Santiago", "Chile", -33.45, -70.67, "Grapes", "Grapes, raw"),
    ("Sydney", "Australia", -33.87, 151.21, "Grilled fish", "Fish, tilapia, grilled"),
    ("Melbourne", "Australia", -37.81, 144.96, "Coffee", "Coffee, brewed"),
    ("Perth", "Australia", -31.95, 115.86, "Almonds", "Almonds, NFS"),
    ("Auckland", "New Zealand", -36.85, 174.76, "Kiwi fruit", "Kiwi fruit, raw"),
    ("Honolulu", "United States", 21.31, -157.86, "Pineapple", "Pineapple, raw"),
    ("Suva", "Fiji", -18.14, 178.44, "Taro", "Taro, cooked"),
]


def resolve_foods() -> dict[str, int]:
    """Map every food name used above to its frame index in the archive."""
    by_name: dict[str, int] = {}
    for row in csv.DictReader(FOODS.open()):
        index = row["frame_index"].strip()
        if index.isdigit():
            by_name.setdefault(row["name"].strip(), int(index))

    resolved: dict[str, int] = {}
    missing: list[str] = []

    for *_, _label, food in CITIES:
        if food in resolved:
            continue
        if food in by_name:
            resolved[food] = by_name[food]
            continue

        # Fall back to the shortest name that contains every word of the one we
        # asked for. Shortest, because "Fish, salmon, raw" should win over
        # "Fish, salmon, raw, farmed, with skin, previously frozen".
        words = [w for w in food.lower().replace(",", " ").split() if len(w) > 2]
        candidates = [
            (len(name), name)
            for name in by_name
            if all(w in name.lower() for w in words)
        ]
        if candidates:
            resolved[food] = by_name[min(candidates)[1]]
            print(f"  ~ {food!r} → {min(candidates)[1]!r}")
        else:
            missing.append(food)

    if missing:
        sys.exit("no archive frame for: " + ", ".join(sorted(set(missing))))
    return resolved


def read_nutrients(wanted: set[str]) -> dict[str, dict]:
    """
    Pull the notable nutrients for each curated food out of the app's catalogue.

    "Notable" means the three that come closest to an adult daily reference per
    100 g. That is a far more interesting caption than a fixed list of the same
    six nutrients under every picture — it is the reason to eat *that* food.

    The catalogue is 72 MB of JSON, so it is scanned object by object rather
    than parsed whole: only the sixty-odd foods on the globe are decoded.
    """
    found: dict[str, dict] = {}
    text = NUTRIENTS.read_text()

    # The file is one flat array of objects, none of which nest deeply enough
    # to confuse a brace counter that ignores braces inside strings.
    depth = 0
    start = -1
    in_string = False
    escaped = False

    for i, ch in enumerate(text):
        if in_string:
            if escaped:
                escaped = False
            elif ch == "\\":
                escaped = True
            elif ch == '"':
                in_string = False
            continue

        if ch == '"':
            in_string = True
        elif ch == "{":
            if depth == 0:
                start = i
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0 and start >= 0:
                chunk = text[start : i + 1]
                # Cheap pre-filter: decoding every one of 14,000 objects to
                # check its name costs far more than a substring test.
                if any(f'"name":"{name}"' in chunk for name in wanted):
                    record = json.loads(chunk)
                    if record.get("name") in wanted:
                        found[record["name"]] = summarise(record)
                start = -1
                if len(found) == len(wanted):
                    break

    return found


def summarise(record: dict) -> dict:
    """The handful of numbers worth putting on a hover card, per 100 g."""
    def get(path: str):
        node = record
        for part in path.split("."):
            node = (node or {}).get(part)
            if node is None:
                return None
        return node.get("value") if isinstance(node, dict) else node

    ranked = []
    for path, (label, reference, unit) in REFERENCE.items():
        value = get(path)
        if not value:
            continue
        ranked.append(
            {
                "label": label,
                # Two significant figures is as much precision as an estimate
                # from a composition table can honestly carry.
                "amount": float(f"{value:.2g}"),
                "unit": unit,
                "percent": round(value / reference * 100),
            }
        )

    ranked.sort(key=lambda n: -n["percent"])

    energy = get("other.energyKcal")
    protein = get("macronutrients.protein")

    return {
        "kcal": round(energy) if energy else None,
        "protein": float(f"{protein:.2g}") if protein else None,
        "notable": ranked[:3],
    }


# ----------------------------------------------------------------- geography


def rings() -> list[list[tuple[float, float]]]:
    """Every polygon ring in the source, as (lon, lat) lists."""
    data = json.loads(GEOJSON.read_text())
    out: list[list[tuple[float, float]]] = []

    for feature in data["features"]:
        geometry = feature["geometry"]
        polygons = (
            geometry["coordinates"]
            if geometry["type"] == "MultiPolygon"
            else [geometry["coordinates"]]
        )
        for polygon in polygons:
            for ring in polygon:
                out.append([(float(p[0]), float(p[1])) for p in ring])
    return out


def build_mask(all_rings: list[list[tuple[float, float]]]) -> Image.Image:
    """Rasterise the continents into an equirectangular land/sea mask."""
    mask = Image.new("1", (MASK_W, MASK_H), 0)
    draw = ImageDraw.Draw(mask)

    for ring in all_rings:
        pixels = [
            ((lon + 180.0) / 360.0 * MASK_W, (90.0 - lat) / 180.0 * MASK_H) for lon, lat in ring
        ]
        if len(pixels) >= 3:
            draw.polygon(pixels, fill=1)
    return mask


def rle(mask: Image.Image) -> str:
    """
    Run-length encode the mask, row-major, starting from sea.

    A land mask is enormous stretches of one value and then the other, so RLE
    takes 259,200 pixels down to a few thousand runs. Runs are written in
    base-64 digits with a continuation bit, which keeps the whole thing a
    plain ASCII string that a TypeScript module can hold without any parsing
    beyond a loop.
    """
    ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
    bits = mask.tobytes()  # 1-bit, row-padded — unpack via getdata instead
    del bits

    flat = list(mask.getdata())
    runs: list[int] = []
    current = 0
    length = 0
    for value in flat:
        v = 1 if value else 0
        if v == current:
            length += 1
        else:
            runs.append(length)
            current = v
            length = 1
    runs.append(length)

    out: list[str] = []
    for run in runs:
        # Little-endian base-32 digits; the high bit of each digit says
        # "another digit follows".
        while True:
            digit = run & 31
            run >>= 5
            out.append(ALPHABET[digit + (32 if run else 0)])
            if not run:
                break
    return "".join(out)


def simplify(points: list[tuple[float, float]], tolerance: float) -> list[tuple[float, float]]:
    """Douglas-Peucker, iterative so a long coastline cannot blow the stack."""
    if len(points) < 3:
        return points

    keep = [False] * len(points)
    keep[0] = keep[-1] = True
    stack = [(0, len(points) - 1)]

    while stack:
        first, last = stack.pop()
        if last <= first + 1:
            continue

        ax, ay = points[first]
        bx, by = points[last]
        dx, dy = bx - ax, by - ay
        norm = (dx * dx + dy * dy) ** 0.5

        worst, worst_at = 0.0, -1
        for i in range(first + 1, last):
            px, py = points[i]
            if norm == 0:
                distance = ((px - ax) ** 2 + (py - ay) ** 2) ** 0.5
            else:
                distance = abs(dy * px - dx * py + bx * ay - by * ax) / norm
            if distance > worst:
                worst, worst_at = distance, i

        if worst > tolerance:
            keep[worst_at] = True
            stack.append((first, worst_at))
            stack.append((worst_at, last))

    return [p for p, k in zip(points, keep) if k]


def build_coast(all_rings: list[list[tuple[float, float]]]) -> list[list[int]]:
    """Simplified coastlines, quantised to a tenth of a degree."""
    out: list[list[int]] = []
    for ring in all_rings:
        thin = simplify(ring, COAST_TOLERANCE)
        if len(thin) < COAST_MIN_POINTS:
            continue
        flat: list[int] = []
        for lon, lat in thin:
            flat.append(round(lon * 10))
            flat.append(round(lat * 10))
        out.append(flat)
    return out


# --------------------------------------------------------------------- atlas


def build_atlas(frames: dict[str, int]) -> dict[str, int]:
    """
    Cut one frame per food out of the archive and pack them into a sprite sheet.

    Extracted by exact frame number rather than by timestamp: the archive is a
    frame-packed video where frame N is food N, and seeking to N/30 seconds
    lands on the previous picture for a third of them.
    """
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    names = sorted(frames)
    cols = ATLAS_COLS
    rows_needed = (len(names) + cols - 1) // cols

    sheet = Image.new("RGB", (cols * ATLAS_TILE, rows_needed * ATLAS_TILE), (3, 12, 9))
    tile_of: dict[str, int] = {}

    with tempfile.TemporaryDirectory() as tmp:
        for slot, name in enumerate(names):
            index = frames[name]
            out = pathlib.Path(tmp) / f"{slot}.png"
            subprocess.run(
                [
                    "ffmpeg", "-v", "error", "-y",
                    "-i", str(ARCHIVE),
                    "-vf", f"select=eq(n\\,{index})",
                    "-vsync", "0", "-frames:v", "1",
                    str(out),
                ],
                check=True,
            )
            if not out.exists():
                sys.exit(f"ffmpeg produced no frame {index} for {name!r}")

            tile = Image.open(out).convert("RGB").resize((ATLAS_TILE, ATLAS_TILE), Image.LANCZOS)
            sheet.paste(tile, ((slot % cols) * ATLAS_TILE, (slot // cols) * ATLAS_TILE))
            tile_of[name] = slot
            print(f"  {slot + 1:>3}/{len(names)}  {name}")

    path = OUT_DIR / "foods.webp"
    sheet.save(path, "WEBP", quality=82, method=6)
    print(f"  atlas {sheet.size[0]}x{sheet.size[1]} → {path.stat().st_size / 1024:.0f} KB")
    return tile_of


# ---------------------------------------------------------------------- emit


def main() -> None:
    for path in (GEOJSON, ARCHIVE, FOODS):
        if not path.exists():
            sys.exit(f"missing source: {path}")

    print("resolving foods →")
    frames = resolve_foods()

    print("cutting frames →")
    tiles = build_atlas(frames)

    print("nutrients →")
    queries = {query for *_, query in CITIES}
    facts = read_nutrients(queries)
    for query in sorted(queries - set(facts)):
        print(f"  ! no nutrient record for {query!r}")
    print(f"  {len(facts)}/{len(queries)} foods have a panel")

    print("geography →")
    all_rings = rings()
    mask = build_mask(all_rings)
    packed = rle(mask)
    coast = build_coast(all_rings)
    coast_points = sum(len(c) for c in coast) // 2
    print(f"  mask {MASK_W}x{MASK_H} → {len(packed) / 1024:.1f} KB encoded")
    print(f"  coast {len(coast)} rings, {coast_points} points")

    markers = [
        {
            "city": city,
            "country": country,
            "lat": lat,
            "lon": lon,
            "food": label,
            "source": query,
            "tile": tiles[query],
            **facts.get(query, {"kcal": None, "protein": None, "notable": []}),
        }
        for city, country, lat, lon, label, query in CITIES
    ]

    OUT_TS.write_text(
        '/**\n'
        ' * Generated by tools/build-globe.py. Do not edit by hand.\n'
        ' *\n'
        ' * The land mask, the coastlines and the city markers the hero globe is\n'
        ' * built from, plus the tile index of each city\'s food in the sprite atlas\n'
        ' * at /assets/globe/foods.webp.\n'
        ' */\n\n'
        "/** Equirectangular land mask, run-length encoded. See decodeLand(). */\n"
        f"export const LAND_W = {MASK_W};\n"
        f"export const LAND_H = {MASK_H};\n"
        f"export const LAND_RLE =\n  '{packed}';\n\n"
        "/** Coastline rings, as flat [lon*10, lat*10, …] arrays. */\n"
        f"export const COAST: readonly (readonly number[])[] = {json.dumps(coast)};\n\n"
        "export interface Notable {\n"
        "  readonly label: string;\n"
        "  readonly amount: number;\n"
        "  readonly unit: string;\n"
        "  /** Percent of an adult daily reference value, per 100 g. */\n"
        "  readonly percent: number;\n"
        "}\n\n"
        "export interface Marker {\n"
        "  readonly city: string;\n"
        "  readonly country: string;\n"
        "  readonly lat: number;\n"
        "  readonly lon: number;\n"
        "  readonly food: string;\n"
        "  /** The USDA record the picture was cut from. */\n"
        "  readonly source: string;\n"
        "  /** Energy per 100 g, kcal. Null where the record has none. */\n"
        "  readonly kcal: number | null;\n"
        "  /** Protein per 100 g, grams. */\n"
        "  readonly protein: number | null;\n"
        "  /** The three nutrients this food is most notable for, per 100 g. */\n"
        "  readonly notable: readonly Notable[];\n"
        "  /** Index into the sprite atlas, row-major, 8 tiles per row. */\n"
        "  readonly tile: number;\n"
        "}\n\n"
        f"export const ATLAS_COLS = {ATLAS_COLS};\n"
        f"export const ATLAS_TILES = {len(tiles)};\n\n"
        f"export const MARKERS: readonly Marker[] = {json.dumps(markers, indent=2)};\n",
        encoding="utf8",
    )
    size = OUT_TS.stat().st_size / 1024
    print(f"wrote {OUT_TS.relative_to(ROOT)}  {size:.0f} KB  ({len(markers)} markers)")


if __name__ == "__main__":
    main()
