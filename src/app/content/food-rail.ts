/**
 * The foods on the hub rail.
 *
 * Curated by hand, and that is the point. Taking the top-ranked food for each
 * nutrient automatically produces a rail of offal — veal liver three times,
 * beef spleen, pork kidneys, goose liver — because organ meats genuinely do
 * carry the most of almost every micronutrient. It is correct and nobody wants
 * to look at it. Deeper in the same lists sit herbs and garnishes that share a
 * placeholder value, which is correct in a different useless way.
 *
 * So these twenty-one are chosen: recognisable, photogenic, and each one still
 * genuinely notable for the nutrient it is filed under. Every figure below was
 * read out of NUTRIENT_FOODS rather than typed, so the rail cannot drift from
 * the tables it links to.
 *
 * Photographs are the 480 px cuts in /assets/foods-lg, not the 224 px
 * thumbnails the ranking tables use — a 62 px circle and a card are not the
 * same job.
 */

export interface RailFood {
  /** The nutrient article this card links to. */
  readonly slug: string;
  /** Photograph: /assets/foods-lg/<frame>.webp */
  readonly frame: number;
  /** Per 100 g, in the nutrient's unit. */
  readonly amount: number;
  readonly unit: string;
  /** Catalogue name; localised at render by foodName(). */
  readonly name: string;
}

export const FOOD_RAIL: readonly RailFood[] = [
  { slug: 'zinc', frame: 12742, amount: 98.9, unit: 'mg', name: 'Oysters, canned' },
  { slug: 'vitamin-b12', frame: 6469, amount: 12.9, unit: 'µg', name: 'Mussels' },
  {
    slug: 'vitamin-c',
    frame: 2621,
    amount: 1680.0,
    unit: 'mg',
    name: 'Acerola, (west indian cherry), raw',
  },
  { slug: 'vitamin-k', frame: 10161, amount: 866.0, unit: 'µg', name: 'Chard, cooked' },
  { slug: 'manganese', frame: 6044, amount: 13.3, unit: 'mg', name: 'Wheat germ, crude' },
  { slug: 'copper', frame: 1297, amount: 4.21, unit: 'mg', name: 'Seeds, sesame butter, paste' },
  { slug: 'selenium', frame: 5978, amount: 147.0, unit: 'µg', name: 'Mixed nuts, unroasted' },
  { slug: 'magnesium', frame: 12570, amount: 700.0, unit: 'mg', name: 'Seeds, hemp seed, hulled' },
  { slug: 'vitamin-b6', frame: 2148, amount: 1.7, unit: 'mg', name: 'Nuts, pistachio nuts, raw' },
  {
    slug: 'vitamin-e',
    frame: 7443,
    amount: 45.0,
    unit: 'mg',
    name: 'Seeds, sunflower seed butter, with salt added',
  },
  { slug: 'choline', frame: 12269, amount: 820.0, unit: 'mg', name: 'Egg, yolk only, raw' },
  { slug: 'niacin', frame: 5248, amount: 22.9, unit: 'mg', name: 'Fish, tuna, cooked' },
  {
    slug: 'vitamin-d',
    frame: 1547,
    amount: 31.9,
    unit: 'µg',
    name: 'Mushrooms, brown, italian, or crimini, exposed to ultraviolet light, raw',
  },
  { slug: 'fibre', frame: 389, amount: 43.4, unit: 'g', name: 'Pinon Nuts, roasted (Navajo)' },
  { slug: 'vitamin-b12', frame: 10850, amount: 12.9, unit: 'µg', name: 'Octopus' },
  { slug: 'vitamin-c', frame: 772, amount: 228.0, unit: 'mg', name: 'Guava, raw' },
  {
    slug: 'vitamin-k',
    frame: 5849,
    amount: 566.0,
    unit: 'µg',
    name: 'Spinach, fresh, cooked, no added fat',
  },
  {
    slug: 'manganese',
    frame: 6790,
    amount: 12.7,
    unit: 'mg',
    name: 'Nuts, hazelnuts or filberts, blanched',
  },
  {
    slug: 'copper',
    frame: 13118,
    amount: 3.23,
    unit: 'mg',
    name: 'Baking chocolate, unsweetened, squares',
  },
  { slug: 'selenium', frame: 10709, amount: 136.0, unit: 'µg', name: 'Flax seeds' },
];
