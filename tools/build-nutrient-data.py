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
import re
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

# The rule the blocklist above cannot express.
#
# A blocklist of names is unwinnable here. The catalogue carries the same USDA
# record for dried basil under nine labels — "Tulsi (dried)", "Native Basil",
# "Basil (Yerbe di Hole)", "Pandan leaf (dried)" — and the same dried thyme
# under six. They are named in every language there is, and each one was, at
# some point, the top answer for a nutrient. You cannot enumerate your way out.
#
# But a seasoning has a physical signature that survives translation: it is
# dry, and it is not worth eating for energy. Nuts and seeds are just as dry
# and carry 550-700 kcal per 100 g; grains and flours 350-400; dried fruit
# holds more water than either. Dried herbs and spice blends sit alone in the
# corner where both are low, because what is left after the water goes is
# mostly fibre and ash.
#
# Dried thyme is 7.8 g water and 276 kcal — out. Almonds are 4.4 g and 579 —
# in. Poppy seeds 6.0 and 525 — in, and they belong on the calcium list.
SEASONING_WATER_MAX = 20.0    # g per 100 g
SEASONING_KCAL_MAX = 350.0    # kcal per 100 g

# Names that carry a note somebody left for a human.
#
# The catalogue is partly hand-assembled, and it shows: one entry is called
# "Lovage seed (you had lovage leaf, but not seed)". That went out on a live
# page in seven languages. These markers drop the row rather than try to
# repair it — a name we cannot vouch for is not a name to print.
EDITORIAL = (
    "you had", "you have", "especially", "as a key", "components",
    "fusion element", "(aromatic", "as an ingredient", "if available",
    "traditional)", "note:", "todo",
)

# Real foods that are still not a hundred-gram portion.
#
# The water-and-energy rule is about dryness and cannot see these: a raw
# Scotch bonnet is 88 % water and genuinely one of the richest sources of
# vitamin C in the catalogue. Nobody eats one.
NOT_A_PORTION = (
    "chili", "chilli", "chile", "scotch bonnet", "wasabi", "horseradish",
    # Portion codes from the survey database rather than foods: a row that
    # exists to price a sandwich, not to be eaten on its own.
    "as ingredient", "for use on", "topping", "external fat", "separable fat",
    # Snack products that outrank real protein on a technicality
    "pork skin", "pork rind", "crackling", "snacks,",
    # Condiments, and cheese-shaped products that are not cheese
    "shrimp paste", "fish paste", "processed cheese", "cheese food",
    "imitation", "hot pepper",
    # Trimmings and industrial cuts, which are not a thing anyone is served
    "mechanically separated", "seam fat", "backfat", "fat, chicken",
    "fat, beef", "fat, duck", "fat, goose", "fat, turkey", "fat, pork",
    # Accurate, and not what anyone reading this is going to cook. The list
    # above already had the Arctic species; these are the ones that surfaced
    # once the spices stopped crowding them out.
    "game meat", "beaver", "muskrat", "opossum", "raccoon", "armadillo",
    "elk,", "emu,", "ostrich", "squab", "caviar", "roe,",
    # Poisonous unless prepared a particular way, which is not a footnote we
    # want to be responsible for
    "pokeberry", "pokeweed", "poke,",
    # A spice the residue list missed under an English name
    "grains of selim",
    # Confectionery and snack formats that outrank the food they are made of
    "granola bar", "cereal bar", "breakfast bar", "candy", "potato chip",
    "jaggery",
    # Fortified drinks whose names carry no comma for the beverage rules above
    "energy drink", "jagerbomb", "sports drink", "drink mix",
    # Offal that is accurate and is not going on anyone's shopping list
    "brains", "chitterling", "sweetbread", "lungs", "tripe",
    # Emulsions and sauces that are mostly the oil they are made of
    "mayonnaise", "salad dressing", "sauce, pesto",
    # Dry mixes whose names put the comma somewhere the rules above miss
    "pasta mix", "cake mix", "muffin mix", "seasoning mix",
    # Analogues, which are fortified to match what they replace
    "vegetarian", "veggie burger",
    # Composite dishes.
    #
    # The catalogue folds the USDA survey database in with the reference one,
    # so a hundred grams of onion rings sits beside a hundred grams of
    # almonds and outranks it on vitamin E. Unlike the spice names, this is a
    # closed vocabulary — one database, one language — so listing it is a
    # reasonable thing to do rather than an admission of defeat.
    "fast food", "cookie", "cracker", "cake", "pie,", "waffle", "pancake",
    "sandwich", "soup,", "pizza", "burrito", "taco", "casserole", "souffle",
    "hollandaise", "dressing", "pot roast", "stew,", "salad", "biscuit",
    "muffin", "doughnut", "donut", "brownie", "pastry", "croissant",
    "toaster", "entree", "nugget", "patty", "patties", "pudding", "custard",
    "icing", "frosting", "syrup", "creme", "table fat", "spread,",
    # More offal that is accurate and unshoppable
    "hog maw", "tongue", "maws", "heart,", "grouse",
    # Breakfast cereal again — "Cereals ready-to-eat, ..." puts its comma in a
    # place the entries above do not match
    "ready-to-eat",
)

# The residue the physical rule leaves behind.
#
# Water-and-energy removes the dried leaves, which is the overwhelming bulk of
# the problem. What it cannot see are the seasonings that are oily: a Sichuan
# peppercorn is 500 kcal per 100 g because it is a seed, and so are berbere,
# annatto and nigella. This is a short list of what actually surfaced in the
# rankings afterwards, not another attempt to enumerate the world's spices —
# the enumeration is the fallback, and it is short because the rule above did
# the work.
SEASONING_NAMES = (
    "sichuan", "andaliman", "timur", "peppercorn", "long pepper",
    "berbere", "baharat", "mitmita", "radhuni", "annatto", "achiote",
    "safflower", "nigella", "carom", "kasuri", "methi", "five spice",
    "aleppo", "sumac", "spice", "mace", "curry leaf", "curry leave",
    "mahleb", "grains of paradise",
)

# "Dried" is the single most common way a food gets to the top of one of these
# lists without being edible in quantity — dried chives, dried seaweed, dried
# egg yolk. It is excluded wholesale, except for the dried fruit people
# genuinely eat by the handful.
DRIED_ALLOWED = (
    "apricot", "raisin", "date", "fig", "prune", "cranberr", "cherr",
    "mango", "banana", "peach", "pear", "apple",
)


# Words that describe how a food was handled, not what it is.
#
# They have to come out before two names can be compared, or "Lentils, raw"
# and "Chickpeas, mature seeds, raw" look like the same food because they
# share the word "raw".
PREPARATION = {
    "raw", "cooked", "boiled", "braised", "simmered", "steamed", "baked",
    "fried", "roasted", "toasted", "broiled", "canned", "frozen", "dried",
    "fresh", "cured", "smoked", "drained", "solids", "prepared", "uncooked",
    "whole", "ground", "hulled", "blanched", "shelled", "peeled", "sliced",
    "chopped", "mature", "seed", "seeds", "kernel", "kernels", "nuts",
    "variety", "meat", "meats", "products", "byproducts", "by", "and", "or",
    "of", "the", "a", "in", "with", "without", "as", "to", "for", "all",
    "classes", "class", "unspecified", "ns", "nfs", "type", "types",
    "separable", "lean", "only", "trimmed", "fat", "choice", "select",
    "grade", "low", "reduced", "added", "sodium", "salt", "salted",
    "unsalted", "sweetened", "unsweetened", "enriched", "includes", "food",
    "foods", "usda", "distribution", "program", "commodity", "commercial",
    "domesticated", "common", "mixed", "species", "moist", "heat", "dry",
    "light", "dark", "regular", "plain", "style", "stick", "sticks",
    # colours, which otherwise fuse a white bread with a white cornmeal
    "white", "red", "green", "yellow", "brown", "black", "blue", "golden",
}


def ingredients(name: str) -> set[str]:
    """
    The words in a name that say what the food actually is.

    Deduplicating on the text before the first comma was letting the same food
    through several times over — five rows of liver on the folate list, four
    of oysters on zinc, four of salmon on vitamin D — because "Goose, liver,
    raw" and "Turkey, all classes, liver, cooked" have different first words.
    Comparing what is left after the preparation vocabulary is stripped
    catches them: both are liver.

    It is deliberately aggressive. On a list of twelve, one row of liver and
    one of beef is what a reader wants; the second and third are the same
    advice taking up space.
    """
    words = re.sub(r"[^a-z ]", " ", name.lower()).split()
    out = set()
    for word in words:
        if len(word) > 3 and word.endswith("s"):
            word = word[:-1]
        if word in PREPARATION or len(word) < 3:
            continue
        out.add(word)
    return out


def stem(name: str) -> str:
    """
    What two entries have to share to count as the same food.

    Deduplicating on the text before the first comma let "Poppy Seeds",
    "Poppy Seeds (Mohn)" and "Poppy Seeds (Posto)" all through as three
    separate foods, which is how the calcium list ended up with four rows of
    poppy seeds. The parenthetical in those names is a gloss — the same food
    under a German and a Bengali name — so it comes off before comparing.
    """
    base = re.sub(r"\([^)]*\)", " ", name.split(",")[0])
    base = base.split("/")[0]
    words = re.sub(r"[^a-z ]", " ", base.lower()).split()
    # Singularised, because "Poppy Seeds" and "Poppy seed (Posto)" are one food
    # and were two rows on the manganese list.
    return " ".join(w[:-1] if len(w) > 3 and w.endswith("s") else w for w in words)


def is_seasoning(record: dict) -> bool:
    """Dry and not worth eating for energy — see SEASONING_* above."""
    water = get(record, "other.water")
    kcal = get(record, "other.energyKcal")
    if water is None or kcal is None:
        # No composition to judge by. Those rows are hand-added and are the
        # ones most likely to be a herb, so the benefit of the doubt goes the
        # other way.
        return True
    if water < SEASONING_WATER_MAX and kcal < SEASONING_KCAL_MAX:
        return True
    # Peppercorns, which the energy test lets through because they are seeds.
    # A dry thing called a pepper is a peppercorn; a sweet or bell pepper is
    # ninety per cent water and untouched by this.
    return water < SEASONING_WATER_MAX and "pepper" in record.get("name", "").lower()


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


def clean(name: str) -> str:
    """
    The name as it should appear on a page.

    The catalogue is partly hand-assembled and it shows: doubled spaces where
    a word was deleted, the USDA distribution-programme boilerplate, curly and
    straight apostrophes used interchangeably. None of that is worth showing a
    reader, and some of it is worth refusing to show — a name with an empty
    comma field lost a word somewhere and we cannot say which.
    """
    text = name.replace("\u2019", "'").replace("\u2018", "'")
    text = re.sub(r"\s*\(Includes foods for USDA'?s Food Distribution Program\)", "", text)
    text = re.sub(r"\s+", " ", text).strip().strip(",").strip()
    return re.sub(r"\s+,", ",", text)


def is_broken(name: str) -> bool:
    """A name that lost a word: "Cheese,  with wine"."""
    return bool(re.search(r",\s*,", name)) or bool(re.search(r",\s{2,}", name))


def rank(records: list[dict], spec: dict, available: dict[str, int]) -> list[dict]:
    scored: list[tuple[float, dict]] = []

    for record in records:
        name = record.get("name", "")
        if is_broken(name):
            continue
        # Apostrophes are curly in some rows and straight in others, so
        # "Za'atar" in the list above never matched "Za\u2019atar herbs".
        lowered = name.lower().replace("\u2019", "'").replace("\u2018", "'")
        if any(bad in lowered for bad in EXCLUDE):
            continue
        if any(bad in lowered for bad in EDITORIAL):
            continue
        if any(bad in lowered for bad in NOT_A_PORTION):
            continue
        if any(bad in lowered for bad in SEASONING_NAMES):
            continue
        if lowered.strip() in (
            "bear", "beaver", "elk", "emu", "whale", "seal", "heart", "brains",
        ):
            continue
        # A footnote marker from whatever page the row was copied off.
        if re.search(r"\[\d+\]", name):
            continue
        if "dried" in lowered and not any(ok in lowered for ok in DRIED_ALLOWED):
            continue
        if is_seasoning(record):
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
    # Two entries carrying the same nutrient value to three figures *and* the
    # same energy are the same USDA record wearing a different name. Comparing
    # names alone does not catch "Lime leaf (dried)" and "Thai basil (dried)"
    # sharing a row of numbers to the decimal place, and they were both on the
    # calcium list.
    compositions: set[tuple[float, float]] = set()
    taken: set[str] = set()
    for value, record in scored:
        key = stem(record["name"])
        if key in seen:
            continue
        parts = ingredients(record["name"])
        if parts & taken:
            continue
        fingerprint = (
            round(value, 3),
            round(float(get(record, "other.energyKcal") or 0), 1),
        )
        if fingerprint in compositions:
            continue
        seen.add(key)
        taken |= parts
        compositions.add(fingerprint)
        picked.append(
            {
                "name": clean(record["name"]),
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
