# Icon set — generation prompts

Thirteen icons replace the emoji currently used in `.card__icon` tiles. They
have to look like they came out of the same box as the app icon: the faceted
crystal apple, `art/apple glass only.png`.

**Feed that file to the generator as a style/reference image if it accepts
one.** It is worth more than any adjective below.

---

## How to use this

1. Paste the **style block** verbatim. Do not paraphrase it between icons —
   the whole point is that all thirteen share one material and one light.
2. Append **one subject line**.
3. Paste the **negative prompt**.
4. Generate all thirteen in one session, so the model's state drifts as little
   as possible. If one comes out different, regenerate it rather than
   accepting it — a set is only as consistent as its worst member.

Save as `art/icon-<name>.png`, 1024×1024, **transparent background**.

---

## Style block — paste this every time

```
A single 3D icon, rendered in translucent faceted crystal glass, floating on a
fully transparent background.

Material: polished glass with visible flat facets, like a cut gemstone. Milky
mint-green and pale lilac inside, shifting iridescent where the light passes
through. Soft internal caustics and a faint rainbow refraction at the edges.
One small warm amber glow suspended inside the form, like a captured ember.

Light: a single soft key light from the upper left, a cool rim light from the
lower right, gentle contact shadow directly beneath the object. Studio
lighting, no harsh speculars.

Composition: the object sits centred, filling about 80 percent of a square
frame, seen straight on with a very slight three-quarter tilt. Same camera
angle, same lens, same distance for every icon in this set.

Form: bold and simple, readable as a silhouette at 48 pixels. Few large
shapes rather than many small ones. No thin lines, no fine detail, no
engraved patterns.

Style: premium product render, octane quality, clean and modern, soft and
tactile. Not cartoon, not flat vector, not neon, not glowing wireframe.
```

## Negative prompt

```
text, letters, numbers, watermark, logo, drop shadow on background,
solid background, white background, dark background, gradient background,
flat design, 2D vector, outline icon, sticker, emoji, cartoon, clipart,
photorealistic food photography, human faces, hands, cluttered detail,
thin lines, noise, grain, multiple objects, busy composition
```

---

## The thirteen subjects

Append one line to the style block.

| File | Subject line | Replaces | Used on |
| --- | --- | --- | --- |
| `icon-nutrients` | `Subject: a DNA double helix, two smooth ribbons twisting around each other, the rungs between them as small suspended amber beads.` | 🧬 | home bento, features |
| `icon-search` | `Subject: a magnifying glass with a thick round crystal lens and a short chunky handle, tilted slightly.` | ⌕ | features |
| `icon-plan` | `Subject: a calendar block — a rounded slab with a thick top bar and three rows of shallow round dimples where the dates would be.` | 🗓️ | home bento, features |
| `icon-training` | `Subject: a dumbbell, two chunky rounded weights on a short thick bar, seen at a slight angle.` | 🏋️ | home bento, features, who-for |
| `icon-pantry` | `Subject: a storage jar with a rounded lid, wide and squat, a warm amber glow suspended inside it.` | 🧊 | home bento, features |
| `icon-baby` | `Subject: a baby's feeding bottle with a rounded teat and a soft tapered body.` | 🍼 | home bento |
| `icon-list` | `Subject: a shopping list — a rounded rectangular slab with three horizontal bars across it and a small tick mark beside the top one.` | 🧾 | home bento, support |
| `icon-person` | `Subject: a simple person — a sphere for the head above a smooth rounded torso, no face, no limbs.` | 👤 | who-for |
| `icon-clinician` | `Subject: a stethoscope, one continuous thick looping tube with a round chest piece at the bottom.` | 🩺 | who-for |
| `icon-team` | `Subject: three smooth rounded pillars of different heights standing together, like a small group seen from the front.` | 🏢 | who-for |
| `icon-trend` | `Subject: an upward arrow curving over three ascending rounded bars.` | 📈 | features |
| `icon-mail` | `Subject: a sealed envelope, a rounded rectangle with a soft triangular flap across the front.` | ✉ | support |
| `icon-leaf` | `Subject: a single broad leaf with a thick central vein, gently curved, the same green leaf as on the crystal apple.` | 👶 pill | baby-feeding article |

`icon-team` deliberately avoids an office block. A building is a literal
translation of "employers" and reads as bureaucracy; three figures standing
together reads as the people the wellbeing programme is actually for.

`icon-pantry` replaces the ice cube for the same reason — the section is about
a whole kitchen inventory, and an ice cube says freezer and nothing else.

---

## After generating

Drop the PNGs in `art/`, then:

```bash
python3 tools/build-images.py
```

The build resizes each to 96px, writes `public/assets/icons/`, and the
templates swap `<span class="card__icon">🧬</span>` for an `<img>`. Nothing
about the tile — size, radius, the green-to-violet gradient behind it —
changes; the icon just sits inside it.

## What to check before accepting one

- **Squint at it.** If the silhouette turns to mush, the form is too detailed.
- **Put it on `#0B1E18`.** They are only ever seen on near-black green. An icon
  that relies on a light background will disappear.
- **Line all thirteen up.** The light has to come from the same side, the
  objects have to be the same size in frame, and the glass has to be the same
  glass. Any one that stands out ruins the set rather than improving itself.
