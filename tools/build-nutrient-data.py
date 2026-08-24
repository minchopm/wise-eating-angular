#!/usr/bin/env python3
"""
Rank the catalogue by nutrient, so the articles can be built on our own data.

Every nutrition site on the internet has a page called "foods high in
magnesium". Almost all of them are a list somebody typed out. Ours is computed
from the same USDA records the app ships, so the numbers on the page and the
numbers in the app are the same numbers — and every food on it has a
photograph, because the ranking only keeps foods the archive has a frame for.

    python3 tools/build-nutrient-data.py

Writes src/app/content/nutrient-foods.ts and the frames those foods need into
public/assets/foods/.
"""

from __future__ import annotations

import csv
import json
import os
import pathlib
import subprocess
import sys
import tempfile

from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent

CATALOGUE = pathlib.Path(
    os.environ.get("NUTRIENTS", "/Users/minchomilev/work/wise-eating/Ayura/Legacy/foods.json")
)
ARCHIVE = pathlib.Path(
    os.environ.get("ARCHIVE", "/Users/minchomilev/work/wise-eating/Ayura/Food/food_archive_144.mp4")
)
INDEX = pathlib.Path(
    os.environ.get(
        "FOODS", "/Users/minchomilev/work/wise-eating/ayurveda-data/archive/foods_index.csv"
    )
)

OUT_TS = ROOT / "src/app/content/nutrient-foods.ts"
OUT_IMG = ROOT / "public/assets/foods"

TOP_N = 12
TILE = 224
QUALITY = 78

# The nutrients that get an article, with the reference intake each ranking is
# expressed against. Reference values are the US Daily Values used on the
# Nutrition Facts label (FDA, adults and children 4+), because that is the
# frame the source data was compiled in — the articles say so out loud.
NUTRIENTS: dict[str, dict] = {
    # slug: field path, label, unit, daily value
    "vitamin-a":   {"path": "vitamins.vitaminA_RAE",           "unit": "µg",  "dv": 900},
    "vitamin-c":   {"path": "vitamins.vitaminC",               "unit": "mg",  "dv": 90},
    "vitamin-d":   {"path": "vitamins.vitaminD",               "unit": "µg",  "dv": 20},
    "vitamin-e":   {"path": "vitamins.vitaminE",               "unit": "mg",  "dv": 15},
    "vitamin-k":   {"path": "vitamins.vitaminK",               "unit": "µg",  "dv": 120},
    "thiamin":     {"path": "vitamins.vitaminB1_Thiamin",      "unit": "mg",  "dv": 1.2},
    "riboflavin":  {"path": "vitamins.vitaminB2_Riboflavin",   "unit": "mg",  "dv": 1.3},
    "niacin":      {"path": "vitamins.vitaminB3_Niacin",       "unit": "mg",  "dv": 16},
    "pantothenic-acid": {"path": "vitamins.vitaminB5_PantothenicAcid", "unit": "mg", "dv": 5},
    "vitamin-b6":  {"path": "vitamins.vitaminB6",              "unit": "mg",  "dv": 1.7},
    "vitamin-b12": {"path": "vitamins.vitaminB12",             "unit": "µg",  "dv": 2.4},
    "folate":      {"path": "vitamins.folateDFE",              "unit": "µg",  "dv": 400},
    "choline":     {"path": "vitamins.choline",                "unit": "mg",  "dv": 550},
    "calcium":     {"path": "minerals.calcium",                "unit": "mg",  "dv": 1300},
    "iron":        {"path": "minerals.iron",                   "unit": "mg",  "dv": 18},
    "magnesium":   {"path": "minerals.magnesium",              "unit": "mg",  "dv": 420},
    "phosphorus":  {"path": "minerals.phosphorus",             "unit": "mg",  "dv": 1250},
    "potassium":   {"path": "minerals.potassium",              "unit": "mg",  "dv": 4700},
    "zinc":        {"path": "minerals.zinc",                   "unit": "mg",  "dv": 11},
    "copper":      {"path": "minerals.copper",                 "unit": "mg",  "dv": 0.9},
    "manganese":   {"path": "minerals.manganese",              "unit": "mg",  "dv": 2.3},
    "selenium":    {"path": "minerals.selenium",               "unit": "µg",  "dv": 55},
    "protein":     {"path": "macronutrients.protein",          "unit": "g",   "dv": 50},
    "fibre":       {"path": "macronutrients.fiber",            "unit": "g",   "dv": 28},
}

# What a "foods highest in X" list has to exclude to be worth reading.
#
# The first run of this script produced, in order: cod liver oil, camu camu
# powder, dried Mexican mint marigold, Vegemite, soy protein isolate and
# instant tea powder. Every one of them is the correct answer to "which food
# has the most of this per 100 g" and a useless answer to "what should I eat".
# Nobody eats a hundred grams of dried marigold.
#
# So the filter is by category rather than by magnitude: things that are
# concentrated on purpose (oils, powders, isolates, extracts), things eaten by
# the pinch (herbs, spices), things drunk (beverages, mixes), and things
# manufactured to carry a nutrient (fortified drinks, formula, supplements).
EXCLUDE = (
    # concentrated by design
    "oil,", ", oil", "oil ", "powder", "isolate", "concentrate", "extract",
    "granules", "dry mix", ", dry", "instant", "dehydrated", "freeze-dried",
    # eaten by the pinch
    #
    # The catalogue carries a few hundred spices and herbs under both USDA and
    # local names — "Cinnamon (Darchin)", "Basil (Yerbe di Hole)" — so the
    # `kind` column cannot separate them and the names have to be listed.
    # Every one of these was, at some point, the top answer for a nutrient.
    "spices,", "spice,", "herbs,", "herbes", "seasoning", "masala",
    "thyme", "marjoram", "oregano", "basil", "parsley", "sage", "tarragon",
    "dill weed", "coriander", "chervil", "savory", "marigold", "za'atar",
    "clove", "cinnamon", "nutmeg", "cardamom", "turmeric", "cumin",
    "fenugreek", "paprika", "saffron", "star anise", "asafoetida", "ajwain",
    "bay leaf", "curry leaf", "rosemary", "mint,", "peppermint", "spearmint",
    "chili powder", "mustard seed", "celery seed", "juniper", "mace,",
    "katsuobushi", "kombu", "wakame", "nori", "seaweed", "dulse",
    # drunk, or mixed into a drink
    "beverages,", "drink,", "beverage", "tea,", "coffee, instant",
    # made to carry a nutrient
    "supplement", "fortified", "infant formula", "formula,", "babyfood",
    "baby food", "toddler", "meal replacement", "protein powder",
    "yeast extract", "vegemite", "marmite", "nutritional yeast", "yeast,",
    "leavening", "gelatin", "vitamin",
    # not a food on its own
    "bouillon", "gravy", "shortening", "lard", "tallow", "bran, crude",
    "puree, commercial", "sauce mix", "soup mix", "pudding", "gums,",
    "meal, partially defatted", "cottonseed", "flakes",
    # breakfast cereal is fortified almost by definition
    "cereal,", "cereals,",
    # accurate, and not what anyone reading this is going to cook
    "sea lion", "walrus", "whale", "seal,", "caribou", "moose,", "bear,",
    "alaska native", "beluga",
    # fortified spreads, curdling agents and hydrolysed condiments
    "margarine", "rennin", "soy sauce", "fish sauce", "yeast",
    # meat and dairy analogues, which are fortified to match what they replace
    "meatless", "replacement", "substitute", "analog", "vital wheat gluten",
)

# And a ceiling. Anything carrying more than this many times the Daily Value in
# a hundred grams is a concentrate the list above did not happen to name; the
# ceiling catches it without needing to.
MAX_MULTIPLE = 25

# "Dried" is the single most common way a food gets to the top of one of these
# lists without being edible in quantity — dried chives, dried seaweed, dried
# egg yolk. It is excluded wholesale, except for the dried fruit people
# genuinely eat by the handful.
DRIED_ALLOWED = (
    "apricot", "raisin", "date", "fig", "prune", "cranberr", "cherr",
    "mango", "banana", "peach", "pear", "apple",
)


def stem(name: str) -> str:
    return name.split(",")[0].strip().lower()


def get(record: dict, path: str):
    node = record
    for part in path.split("."):
        node = (node or {}).get(part)
        if node is None:
            return None
    return node.get("value") if isinstance(node, dict) else node


def catalogue() -> list[dict]:
    """Every record in the catalogue, scanned object by object."""
    text = CATALOGUE.read_text()
    out: list[dict] = []
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
                out.append(json.loads(text[start : i + 1]))
                start = -1
    return out


def frames() -> dict[str, int]:
    """Food name → frame index in the archive."""
    by_name: dict[str, int] = {}
    for row in csv.DictReader(INDEX.open()):
        index = row["frame_index"].strip()
        if index.isdigit():
            by_name.setdefault(row["name"].strip(), int(index))
    return by_name


def rank(records: list[dict], spec: dict, available: dict[str, int]) -> list[dict]:
    scored: list[tuple[float, dict]] = []

    for record in records:
        name = record.get("name", "")
        lowered = name.lower()
        if any(bad in lowered for bad in EXCLUDE):
            continue
        if "dried" in lowered and not any(ok in lowered for ok in DRIED_ALLOWED):
            continue
        if name not in available:
            continue
        value = get(record, spec["path"])
        if not value:
            continue
        if value > spec["dv"] * MAX_MULTIPLE:
            continue
        scored.append((float(value), record))

    scored.sort(key=lambda pair: -pair[0])

    picked: list[dict] = []
    seen: set[str] = set()
    for value, record in scored:
        key = stem(record["name"])
        if key in seen:
            continue
        seen.add(key)
        picked.append(
            {
                "name": record["name"],
                "amount": float(f"{value:.3g}"),
                "percent": round(value / spec["dv"] * 100),
                "kcal": round(get(record, "other.energyKcal") or 0) or None,
                "frame": available[record["name"]],
            }
        )
        if len(picked) == TOP_N:
            break
    return picked


def cut_all(wanted: list[int]) -> None:
    """
    Pull every frame we need in a single decode.

    One ffmpeg call per frame means one decode of an eight-minute video per
    frame — a few hundred of those is half an hour of watching a progress
    counter. A single `select` expression listing all of them decodes once and
    writes them in frame order, which is why the numbering below can be zipped
    straight back onto the sorted list.
    """
    todo = [f for f in wanted if not (OUT_IMG / f"{f}.webp").exists()]
    if not todo:
        print("  every frame already cut")
        return

    print(f"  one pass for {len(todo)} frames…")
    expression = "+".join(f"eq(n\\,{f})" for f in todo)

    with tempfile.TemporaryDirectory() as tmp:
        pattern = str(pathlib.Path(tmp) / "f_%05d.png")
        subprocess.run(
            ["ffmpeg", "-v", "error", "-y", "-i", str(ARCHIVE),
             "-vf", f"select='{expression}'", "-vsync", "0", pattern],
            check=True,
        )

        produced = sorted(pathlib.Path(tmp).glob("f_*.png"))
        if len(produced) != len(todo):
            sys.exit(f"ffmpeg returned {len(produced)} frames, expected {len(todo)}")

        for frame, png in zip(todo, produced):
            image = Image.open(png).convert("RGB").resize((TILE, TILE), Image.LANCZOS)
            image.save(OUT_IMG / f"{frame}.webp", "WEBP", quality=QUALITY, method=6)


def main() -> None:
    for path in (CATALOGUE, ARCHIVE, INDEX):
        if not path.exists():
            sys.exit(f"missing source: {path}")

    print("reading the catalogue…")
    records = catalogue()
    available = frames()
    print(f"  {len(records)} foods, {len(available)} with a photograph")

    OUT_IMG.mkdir(parents=True, exist_ok=True)
    OUT_TS.parent.mkdir(parents=True, exist_ok=True)

    tables: dict[str, list[dict]] = {}
    wanted: set[int] = set()

    for slug, spec in NUTRIENTS.items():
        top = rank(records, spec, available)
        tables[slug] = top
        wanted.update(item["frame"] for item in top)
        head = top[0] if top else {"name": "—", "amount": 0}
        print(f"  {slug:20} {len(top):2} foods, leader: {head['name'][:44]} ({head['amount']}{spec['unit']})")

    print(f"cutting {len(wanted)} frames…")
    cut_all(sorted(wanted))

    body = {
        slug: {
            "unit": spec["unit"],
            "dailyValue": spec["dv"],
            "foods": tables[slug],
        }
        for slug, spec in NUTRIENTS.items()
    }

    OUT_TS.write_text(
        "/**\n"
        " * Generated by tools/build-nutrient-data.py. Do not edit by hand.\n"
        " *\n"
        " * For each nutrient, the foods in the catalogue that carry the most of\n"
        " * it per 100 g — computed from the same USDA records the app ships, not\n"
        " * typed out from another website. `frame` is the photograph, cut from\n"
        " * the app's food archive and served from /assets/foods/<frame>.webp.\n"
        " *\n"
        " * Percentages are of the US Daily Value used on the Nutrition Facts\n"
        " * label. Spices, supplements, infant formula and fortified products are\n"
        " * excluded: a list that opens with dried thyme is correct and useless.\n"
        " */\n\n"
        "export interface RankedFood {\n"
        "  readonly name: string;\n"
        "  /** Amount per 100 g, in the nutrient's unit. */\n"
        "  readonly amount: number;\n"
        "  /** Percent of the US Daily Value, per 100 g. */\n"
        "  readonly percent: number;\n"
        "  readonly kcal: number | null;\n"
        "  /** Frame number; the photograph is /assets/foods/<frame>.webp. */\n"
        "  readonly frame: number;\n"
        "}\n\n"
        "export interface NutrientTable {\n"
        "  readonly unit: string;\n"
        "  readonly dailyValue: number;\n"
        "  readonly foods: readonly RankedFood[];\n"
        "}\n\n"
        f"export const NUTRIENT_FOODS: Readonly<Record<string, NutrientTable>> = {json.dumps(body, indent=2, ensure_ascii=False)};\n",
        encoding="utf8",
    )
    print(f"wrote {OUT_TS.relative_to(ROOT)}  {OUT_TS.stat().st_size / 1024:.0f} KB")


if __name__ == "__main__":
    main()
