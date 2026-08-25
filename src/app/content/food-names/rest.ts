import { FoodNames } from '../food-names';

/**
 * The foods that only reach the English and German pages.
 *
 * English and German carry all twenty-four articles; the other five languages
 * carry the core eight. So these hundred and fifteen foods need two languages
 * rather than seven, and the day a locale gains a nineteenth article is the
 * day it needs its share of them. Until then, writing translations nobody can
 * read is work with no reader.
 *
 * The English column is not a pass-through. USDA descriptors are a controlled
 * vocabulary, not a language — "Beef, variety meats and by-products, liver,
 * cooked, braised" is unreadable in its own tongue — so English gets a
 * rewritten display name here like everyone else, and the grading and trim
 * boilerplate comes off. What stays is the part that changes the numbers:
 * raw or cooked, lean or not.
 */
export const REST_FOOD_NAMES: FoodNames = {
  'Acerola, (west indian cherry), raw': { en: 'Acerola cherry, raw', de: 'Acerolakirsche, roh' },
  'Almonds, NFS': { en: 'Almonds', de: 'Mandeln' },
  'Almonds, unroasted': { en: 'Almonds, raw', de: 'Mandeln, ungeröstet' },
  'Amaranth leaves, raw': { en: 'Amaranth leaves, raw', de: 'Amarantblätter, roh' },
  'Apricot, dried': { en: 'Apricots, dried', de: 'Aprikosen, getrocknet' },
  'Bacon bits': { en: 'Bacon bits', de: 'Speckwürfel' },
  'Baking chocolate, unsweetened, liquid': {
    en: 'Unsweetened baking chocolate, liquid',
    de: 'Ungesüßte Kuvertüre, flüssig',
  },
  'Beef, New Zealand, imported, variety meats and by-products, liver, raw': {
    en: 'Beef liver, raw',
    de: 'Rinderleber, roh',
  },
  'Beef, variety meats and by-products, kidneys, cooked, simmered': {
    en: 'Beef kidney, simmered',
    de: 'Rinderniere, gegart',
  },
  'Beef, variety meats and by-products, liver, cooked, braised': {
    en: 'Beef liver, braised',
    de: 'Rinderleber, geschmort',
  },
  'Beef, variety meats and by-products, liver, raw': {
    en: 'Beef liver, raw',
    de: 'Rinderleber, roh',
  },
  'Black mustard': { en: 'Black mustard seed', de: 'Schwarzer Senfsamen' },
  'Calamari, cooked': { en: 'Squid, cooked', de: 'Tintenfisch, gegart' },
  'Canada Goose, breast meat only, skinless, raw': {
    en: 'Wild goose breast, skinless, raw',
    de: 'Wildgansbrust, ohne Haut, roh',
  },
  'Carrot juice, 100%': { en: 'Carrot juice', de: 'Karottensaft' },
  'Cashews, NFS': { en: 'Cashews', de: 'Cashewkerne' },
  'Cassava Leaves (Nsaka)': { en: 'Cassava leaves', de: 'Maniokblätter' },
  'Chard, cooked': { en: 'Chard, cooked', de: 'Mangold, gegart' },
  'Cheese, American, reduced fat': {
    en: 'Processed cheese, reduced fat',
    de: 'Schmelzkäse, fettreduziert',
  },
  'Cheese, gjetost': { en: 'Brunost (whey cheese)', de: 'Brunost (Molkenkäse)' },
  'Chicken, broiler or fryers, breast, skinless, boneless, meat only, cooked, grilled': {
    en: 'Chicken breast, skinless, grilled',
    de: 'Hähnchenbrust, ohne Haut, gegrillt',
  },
  'Chicken, liver, all classes, cooked, pan-fried': {
    en: 'Chicken liver, pan-fried',
    de: 'Hühnerleber, gebraten',
  },
  'Cornmeal, white (Navajo)': { en: 'White cornmeal', de: 'Weißes Maismehl' },
  'Cress, cooked': { en: 'Cress, cooked', de: 'Kresse, gegart' },
  'Crustaceans, shrimp, mixed species, cooked, moist heat (may contain additives to retain moisture)':
    { en: 'Prawns, cooked', de: 'Garnelen, gegart' },
  'Currants, european black, raw': { en: 'Blackcurrants, raw', de: 'Schwarze Johannisbeeren, roh' },
  'Dandelion greens, cooked': { en: 'Dandelion greens, cooked', de: 'Löwenzahnblätter, gegart' },
  'Dandelion greens, cooked, boiled, drained, with salt': {
    en: 'Dandelion greens, boiled and salted',
    de: 'Löwenzahnblätter, gekocht und gesalzen',
  },
  "Davidson's Plum": { en: 'Davidson’s plum', de: 'Davidsonpflaume' },
  'Drumstick leaves, raw': { en: 'Moringa leaves, raw', de: 'Moringablätter, roh' },
  'Drumstick pods, raw': { en: 'Moringa pods, raw', de: 'Moringaschoten, roh' },
  'Egg, yolk only, raw': { en: 'Egg yolk, raw', de: 'Eigelb, roh' },
  'Fish, eel, mixed species, raw': { en: 'Eel, raw', de: 'Aal, roh' },
  'Fish, fish sticks, frozen, prepared': {
    en: 'Fish fingers, cooked',
    de: 'Fischstäbchen, zubereitet',
  },
  'Fish, tuna, cooked': { en: 'Tuna, cooked', de: 'Thunfisch, gegart' },
  'Fruit juice, acai blend': { en: 'Açaí juice blend', de: 'Açaí-Saftmischung' },
  'Garlic bread, frozen': { en: 'Garlic bread, frozen', de: 'Knoblauchbrot, tiefgekühlt' },
  'Garlic sauce': { en: 'Garlic sauce', de: 'Knoblauchsauce' },
  'Garlic, raw': { en: 'Garlic, raw', de: 'Knoblauch, roh' },
  'Grape leaves, canned': { en: 'Vine leaves, canned', de: 'Weinblätter, aus dem Glas' },
  'Grape leaves, raw': { en: 'Vine leaves, raw', de: 'Weinblätter, roh' },
  'Grapes, muscadine, raw': { en: 'Muscadine grapes, raw', de: 'Muscadine-Trauben, roh' },
  'Guava, raw': { en: 'Guava, raw', de: 'Guave, roh' },
  'Ham, canned': { en: 'Ham, canned', de: 'Schinken, aus der Dose' },
  Hazelnuts: { en: 'Hazelnuts', de: 'Haselnüsse' },
  'Hearts of palm, raw': { en: 'Hearts of palm, raw', de: 'Palmherzen, roh' },
  'Hoja santa (Mexico)': { en: 'Hoja santa', de: 'Hoja santa' },
  'Hummus, commercial': { en: 'Hummus, shop-bought', de: 'Hummus, gekauft' },
  'Kiwifruit, ZESPRI SunGold, raw': { en: 'Golden kiwifruit, raw', de: 'Gelbe Kiwi, roh' },
  'Lamb, Australian, imported, fresh, tenderloin, boneless, separable lean only, trimmed to 1/8" fat, cooked, roasted':
    { en: 'Lamb tenderloin, lean, roasted', de: 'Lammfilet, mager, gebraten' },
  'Lamb, New Zealand, imported, liver, cooked, soaked and fried': {
    en: 'Lamb liver, fried',
    de: 'Lammleber, gebraten',
  },
  'Lambsquarters, raw (Northern Plains Indians)': {
    en: 'Fat hen (lambsquarters), raw',
    de: 'Weißer Gänsefuß, roh',
  },
  'Lemon grass (citronella), raw': { en: 'Lemongrass, raw', de: 'Zitronengras, roh' },
  'Lemon peel, raw': { en: 'Lemon zest, raw', de: 'Zitronenschale, roh' },
  'Licorice root': { en: 'Liquorice root', de: 'Süßholzwurzel' },
  'Liverwurst spread': { en: 'Liver sausage spread', de: 'Streichleberwurst' },
  Lobster: { en: 'Lobster', de: 'Hummer' },
  Lovage: { en: 'Lovage', de: 'Liebstöckel' },
  'Mixed nuts, unroasted': { en: 'Mixed nuts, raw', de: 'Nussmischung, ungeröstet' },
  'Mixed seeds': { en: 'Mixed seeds', de: 'Saatenmischung' },
  Molasses: { en: 'Molasses', de: 'Melasse' },
  'Mollusks, abalone, mixed species, raw': { en: 'Abalone, raw', de: 'Seeohr, roh' },
  'Mollusks, mussel, blue, cooked, moist heat': {
    en: 'Blue mussels, cooked',
    de: 'Miesmuscheln, gegart',
  },
  'Mollusks, oyster, Pacific, cooked, moist heat': {
    en: 'Pacific oysters, cooked',
    de: 'Pazifische Austern, gegart',
  },
  'Mollusks, oyster, eastern, wild, cooked, moist heat': {
    en: 'Wild Atlantic oysters, cooked',
    de: 'Wilde Atlantikaustern, gegart',
  },
  'Mushrooms, shiitake, cooked, without salt': {
    en: 'Shiitake mushrooms, cooked',
    de: 'Shiitake-Pilze, gegart',
  },
  'Mustard greens, cooked, boiled, drained, without salt': {
    en: 'Mustard greens, boiled',
    de: 'Senfblätter, gekocht',
  },
  'Mustard spinach, (tendergreen), raw': { en: 'Komatsuna, raw', de: 'Komatsuna, roh' },
  'Native Lemongrass': { en: 'Native lemongrass', de: 'Wildes Zitronengras' },
  'Nuts, hazelnuts or filberts, blanched': {
    en: 'Hazelnuts, blanched',
    de: 'Haselnüsse, blanchiert',
  },
  'Nuts, macadamia nuts, raw': { en: 'Macadamia nuts, raw', de: 'Macadamianüsse, roh' },
  'Nuts, pecans': { en: 'Pecans', de: 'Pekannüsse' },
  'Nuts, pistachio nuts, raw': { en: 'Pistachios, raw', de: 'Pistazien, roh' },
  Oats: { en: 'Oats', de: 'Hafer' },
  'Orange juice, 100%, frozen, not reconstituted': {
    en: 'Orange juice concentrate, frozen',
    de: 'Orangensaftkonzentrat, tiefgekühlt',
  },
  'Papad, grilled or broiled': { en: 'Papadum, grilled', de: 'Papadam, gegrillt' },
  'Pate, truffle flavor': { en: 'Truffle-flavoured pâté', de: 'Pastete mit Trüffelaroma' },
  'Peanut butter, lower sugar': { en: 'Peanut butter, low sugar', de: 'Erdnussmus, zuckerarm' },
  'Peanut flour, low fat': { en: 'Peanut flour, low fat', de: 'Erdnussmehl, fettarm' },
  'Peas, green, split, mature seeds, raw': { en: 'Split peas, dry', de: 'Schälerbsen, trocken' },
  'Peppers, sweet, red, sauteed': { en: 'Red peppers, sautéed', de: 'Rote Paprika, gebraten' },
  'Peppers, sweet, yellow, raw': { en: 'Yellow peppers, raw', de: 'Gelbe Paprika, roh' },
  'Pinon Nuts, roasted (Navajo)': { en: 'Pine nuts, roasted', de: 'Pinienkerne, geröstet' },
  Pistachios: { en: 'Pistachios', de: 'Pistazien' },
  'Pork bacon, NS as to fresh, smoked or cured, reduced sodium, cooked': {
    en: 'Bacon, low salt, cooked',
    de: 'Frühstücksspeck, salzarm, gebraten',
  },
  'Pork, fresh, shoulder, blade, boston (roasts), separable lean only, cooked, roasted': {
    en: 'Pork shoulder, lean, roasted',
    de: 'Schweineschulter, mager, gebraten',
  },
  'Pork, fresh, variety meats and by-products, kidneys, cooked, braised': {
    en: 'Pork kidney, braised',
    de: 'Schweineniere, geschmort',
  },
  'Potato sticks, plain': { en: 'Potato sticks', de: 'Kartoffelsticks' },
  'Pumpkin, canned, without salt': { en: 'Pumpkin, canned', de: 'Kürbis, aus der Dose' },
  "Restaurant, family style, chicken fingers, from kid's menu": {
    en: 'Chicken goujons, restaurant',
    de: 'Hähnchenstreifen, Restaurant',
  },
  'Rose Hips, wild (Northern Plains Indians)': { en: 'Rosehips, wild', de: 'Hagebutten, wild' },
  'Rosehip (Mosqueta)': { en: 'Rosehip', de: 'Hagebutte' },
  'Salami, pork, beef, less sodium': { en: 'Salami, low salt', de: 'Salami, salzarm' },
  'Seeds, flaxseed': { en: 'Linseed', de: 'Leinsaat' },
  'Seeds, sesame flour, high-fat': { en: 'Sesame flour, full-fat', de: 'Sesammehl, vollfett' },
  'Seeds, sunflower seed butter, with salt added': {
    en: 'Sunflower seed butter, salted',
    de: 'Sonnenblumenmus, gesalzen',
  },
  'Seeds, sunflower seed kernels, toasted, with salt added': {
    en: 'Sunflower seeds, toasted and salted',
    de: 'Sonnenblumenkerne, geröstet und gesalzen',
  },
  'Semolina, enriched': { en: 'Semolina, enriched', de: 'Hartweizengrieß, angereichert' },
  Sorrel: { en: 'Sorrel', de: 'Sauerampfer' },
  'Spinach, fresh, cooked, no added fat': { en: 'Spinach, cooked', de: 'Spinat, gegart' },
  'Sugars, maple': { en: 'Maple sugar', de: 'Ahornzucker' },
  'Sunflower seeds, plain, unsalted': {
    en: 'Sunflower seeds, unsalted',
    de: 'Sonnenblumenkerne, ungesalzen',
  },
  'Sweet potato, frozen, cooked, baked, without salt': {
    en: 'Sweet potato, baked',
    de: 'Süßkartoffel, gebacken',
  },
  'Tamarind leaf': { en: 'Tamarind leaves', de: 'Tamarindenblätter' },
  'Teff, uncooked': { en: 'Teff, dry', de: 'Teff, roh' },
  'Turkey, all classes, light meat, cooked, roasted': {
    en: 'Turkey breast, roasted',
    de: 'Putenbrust, gebraten',
  },
  'Turkey, ground, fat free, pan-broiled crumbles': {
    en: 'Turkey mince, fat free, cooked',
    de: 'Putenhackfleisch, fettfrei, gebraten',
  },
  'Turkey, whole, giblets, raw': { en: 'Turkey giblets, raw', de: 'Puteninnereien, roh' },
  'Turkey, young hen, skin only, cooked, roasted': {
    en: 'Turkey skin, roasted',
    de: 'Putenhaut, gebraten',
  },
  'Veal, leg (top round), separable lean only, cooked, pan-fried, not breaded': {
    en: 'Veal topside, lean, pan-fried',
    de: 'Kalbsoberschale, mager, gebraten',
  },
  'Veal, leg, top round, cap off, cutlet, boneless, cooked, grilled': {
    en: 'Veal escalope, grilled',
    de: 'Kalbsschnitzel, gegrillt',
  },
  'Veal, variety meats and by-products, liver, cooked, braised': {
    en: 'Veal liver, braised',
    de: 'Kalbsleber, geschmort',
  },
  'Veal, variety meats and by-products, liver, cooked, pan-fried': {
    en: 'Veal liver, pan-fried',
    de: 'Kalbsleber, gebraten',
  },
  'Venison, steak': { en: 'Venison steak', de: 'Hirschsteak' },
  'Wheat germ, crude': { en: 'Wheat germ, raw', de: 'Weizenkeime, roh' },
};
