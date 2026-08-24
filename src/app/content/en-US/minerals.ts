import { LocalisedArticle } from '../types';

/**
 * The mineral articles, in English.
 *
 * Numbers are not here — they are in content/nutrient-facts.ts and are joined
 * in by id. Everything in this file is words, which is exactly what a
 * translation replaces.
 *
 * The recipes are for a general reader. Four of the articles carry infant
 * recipes instead, because those nutrients are ones parents search for by
 * name; those four are the ones that want a registered dietitian's review
 * before this library grows any further.
 */
export const MINERALS_EN: Readonly<Record<string, LocalisedArticle>> = {
  /* ------------------------------------------------------------ magnesium */
  magnesium: {
    name: 'Magnesium',
    title: 'Magnesium: the mineral most people quietly miss',
    lede:
      'It is needed for more than three hundred enzyme reactions, most of it is stored in bone ' +
      'where a blood test cannot see it, and roughly half of adults in the US take in less than ' +
      'the recommended amount. Here is where to find it.',
    description:
      'What magnesium does, how much you need by age, and the foods that carry the most of it — ' +
      'ranked from USDA data, per 100 g.',

    whatItDoes: [
      'Magnesium is a cofactor: it does not do the work itself, it is the thing several hundred ' +
        'enzymes need in order to do theirs. That includes the enzymes that build protein, the ' +
        'ones that copy DNA, and the ones that turn food into usable energy — which is why a ' +
        'shortage shows up as vague tiredness rather than as anything specific.',
      'It also sits opposite calcium at the muscle. Calcium signals a muscle fibre to contract; ' +
        'magnesium is part of what lets it release again. The same pairing runs in nerve tissue ' +
        'and in the walls of blood vessels.',
      'About 60% of the magnesium in an adult body is in bone, most of the rest inside cells, and ' +
        'less than 1% in blood. That last number matters more than it sounds: a normal blood ' +
        'magnesium result does not rule out low stores, because the body will pull magnesium out ' +
        'of bone to keep blood levels steady.',
    ],

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake, from milk' },
      'infant-7-12': { who: 'Infants, 7–12 months', note: 'Adequate Intake' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'child-9-13': { who: 'Children, 9–13 years' },
      'men-19-30': { who: 'Men, 19–30' },
      'men-31-plus': { who: 'Men, 31 and over' },
      'women-19-30': { who: 'Women, 19–30' },
      'women-31-plus': { who: 'Women, 31 and over' },
      pregnancy: { who: 'Pregnancy', note: 'Depending on age' },
    },
    intakeNote:
      'These are Recommended Dietary Allowances, except where marked: for infants there is not ' +
      'enough evidence to set one, so an Adequate Intake is given instead. The percentages in the ' +
      'table below are of the 420 mg Daily Value used on food labels, which is a single number ' +
      'for everyone over four and therefore generous for most people reading it.',

    foodsIntro:
      'Magnesium sits in chlorophyll, so green leaves carry it — but seeds, nuts and beans carry ' +
      'far more per bite, because they are storing minerals for a plant that has not grown yet.',

    helps: [
      'Eating it across the day rather than in one go — absorption falls as the dose rises',
      'Whole grains over refined ones: milling removes the germ and bran, where the magnesium is',
      'Soaking or sprouting beans and grains, which breaks down some of the phytate',
    ],
    hinders: [
      'Very high supplemental zinc, which competes for absorption',
      'Phytates in unsoaked whole grains and legumes, which bind magnesium in the gut',
      'Chronic alcohol use and some diuretics, which increase how much is lost in urine',
    ],
    absorptionNote:
      'Absorption from food runs at roughly 30–40% and rises when stores are low, which is the ' +
      'body doing the sensible thing. Supplemental magnesium oxide is poorly absorbed compared ' +
      'with citrate or glycinate; if a clinician has recommended a supplement, the form is worth ' +
      'asking about.',

    shortfall: [
      'People eating mostly refined grains, since milling removes about 80% of the magnesium',
      'Older adults, who absorb less and excrete more',
      'People with type 2 diabetes, coeliac disease or Crohn’s, through losses or malabsorption',
      'Long-term users of proton pump inhibitors, which can lower magnesium over years',
    ],

    recipe: {
      title: 'Pumpkin seed and spinach purée',
      serves: 'From 8 months, and it scales up for the rest of the table',
      ingredients: [
        '2 tbsp pumpkin seeds, unsalted',
        '2 large handfuls of spinach, washed',
        '1 small potato, peeled and cubed',
        '1 tsp olive oil',
        '3–4 tbsp warm water, breast milk or formula, to loosen',
      ],
      steps: [
        {
          title: 'Toast the seeds',
          detail:
            'Dry pan, medium heat, three to four minutes, moving them constantly. They are done ' +
            'when they smell nutty and one or two start to pop. Let them cool completely — warm ' +
            'seeds turn to paste rather than powder.',
        },
        {
          title: 'Grind them',
          detail:
            'To a fine powder in a spice grinder or a small blender. For a baby this is not ' +
            'optional: whole seeds are a choking hazard until well past the second birthday.',
        },
        {
          title: 'Cook the potato',
          detail: 'Simmer in unsalted water for 12–15 minutes, until a knife goes through easily.',
        },
        {
          title: 'Wilt the spinach',
          detail:
            'Add it to the pan for the last 60 seconds. Longer than that and most of the folate ' +
            'ends up in the water rather than in the meal.',
        },
        {
          title: 'Blend',
          detail:
            'Drain, keeping a little of the cooking water. Blend the potato and spinach with the ' +
            'olive oil, then stir in the ground seeds. Loosen to the texture your baby is used to.',
        },
      ],
      note:
        'Introduce seeds the way you would any other new food: on their own first, in the ' +
        'morning, and not alongside anything else new. Speak to your health visitor or ' +
        'paediatrician before starting, particularly if there is a family history of allergy.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Magnesium',
      dri: 'Dietary Reference Intakes for Calcium, Phosphorus, Magnesium, Vitamin D and Fluoride',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ----------------------------------------------------------------- iron */
  iron: {
    name: 'Iron',
    title: 'Iron: why lentils and spinach are not the same iron',
    lede:
      'Iron from plants and iron from meat are chemically different, and your gut treats them ' +
      'differently. Understanding which is which is the difference between eating a lot of iron ' +
      'and absorbing some.',
    description:
      'Heme versus non-heme iron, how much you need by age, what helps and blocks absorption, and ' +
      'the foods highest in iron — ranked from USDA data, per 100 g.',

    whatItDoes: [
      'Most of the iron in your body is doing one job: sitting at the centre of haemoglobin, ' +
        'holding an oxygen molecule so a red blood cell can carry it from your lungs to a muscle. ' +
        'Run short and less oxygen arrives, which is why the first thing people notice is being ' +
        'out of breath on stairs they used to manage.',
      'A smaller share sits in myoglobin, which stores oxygen inside muscle itself, and in ' +
        'enzymes that run the energy machinery of every cell. Iron is also needed for the enzymes ' +
        'that build myelin and several neurotransmitters — which is the reason iron status in the ' +
        'first two years of life is taken so seriously.',
      'The body has no way to excrete iron deliberately. It regulates by absorbing more or less, ' +
        'which cuts both ways: it is why absorption rises when you are short, and why taking ' +
        'supplements nobody prescribed is a genuinely bad idea.',
    ],

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake; stores from birth' },
      'infant-7-12': { who: 'Infants, 7–12 months', note: 'The steepest jump in the whole table' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'men-19-50': { who: 'Men, 19–50' },
      'women-19-50': { who: 'Women, 19–50', note: 'Menstrual losses' },
      'women-51-plus': { who: 'Women, 51 and over' },
      pregnancy: { who: 'Pregnancy' },
      vegetarian: {
        who: 'Vegetarians and vegans',
        note: 'Multiply the figure for your age and sex — absorption from plants is lower',
      },
    },
    intakeNote:
      'The jump at seven months is the one worth knowing about. A baby is born with an iron store ' +
      'that runs out somewhere around six months, at exactly the point milk alone stops covering ' +
      'the need — which is why iron-rich first foods are a priority rather than a nicety.',

    foodsIntro:
      'Ranked by total iron per 100 g. Read it with the next section in mind: the animal foods on ' +
      'this list give up their iron far more readily than the plant ones, so the order here is ' +
      'not the order of what actually reaches your blood.',

    helps: [
      'Vitamin C in the same meal — it can multiply non-heme absorption several times over',
      'A small amount of meat, poultry or fish alongside plant sources, which lifts both',
      'Soaking, sprouting or fermenting beans and grains, which breaks down phytate',
      'Cooking acidic food in a cast-iron pan, which genuinely transfers some',
    ],
    hinders: [
      'Tea and coffee with the meal — the tannins can cut absorption by more than half',
      'Calcium taken at the same time, whether from dairy or a supplement',
      'Phytates in unsoaked wholegrains, legumes and nuts',
      'Long-term acid-suppressing medication, since stomach acid is part of how iron is freed',
    ],
    absorptionNote:
      'This is the whole point of the article. Heme iron, from meat, poultry and fish, is ' +
      'absorbed at roughly 15–35% and is barely affected by what else is on the plate. Non-heme ' +
      'iron, from plants, eggs and fortified foods, is absorbed at roughly 2–20% — and that range ' +
      'is set almost entirely by what it is eaten with. Lentils and spinach are not poor sources; ' +
      'they are sources that need a squeeze of lemon and no tea.',

    shortfall: [
      'Infants from about six months, as the store they were born with runs out',
      'Menstruating women, and anyone with heavy periods in particular',
      'People who are pregnant, where requirement rises by half again',
      'Vegetarians and vegans, who need roughly 1.8 times the figure in the table',
      'Endurance athletes, through foot-strike haemolysis and losses in sweat',
    ],

    recipe: {
      title: 'Red lentil and sweet pepper purée',
      serves: 'From 7 months — an iron source with its own vitamin C built in',
      ingredients: [
        '3 tbsp red lentils, rinsed until the water runs clear',
        '1 small red pepper, deseeded and chopped',
        '1 small carrot, peeled and chopped',
        '150 ml unsalted water or stock',
        '1 tsp olive oil',
        'A squeeze of lemon, at the end',
      ],
      steps: [
        {
          title: 'Rinse the lentils properly',
          detail:
            'Under cold water in a sieve until it runs clear rather than cloudy. This washes off ' +
            'surface starch and some of the phytate that would otherwise bind the iron.',
        },
        {
          title: 'Simmer',
          detail:
            'Lentils, carrot and water in a small pan. Bring to the boil, then down to a low ' +
            'simmer for 15 minutes with the lid ajar.',
        },
        {
          title: 'Add the pepper late',
          detail:
            'In for the last 5 minutes only. Vitamin C degrades with heat and time, and the ' +
            'pepper is here for the vitamin C as much as for the flavour.',
        },
        {
          title: 'Blend and finish',
          detail:
            'Blend smooth with the olive oil, then stir in the lemon off the heat. Loosen with a ' +
            'little cooled cooking water if it is thicker than your baby is used to.',
        },
      ],
      note:
        'Serve this away from a milk feed rather than with one — the calcium in milk competes ' +
        'with the iron for absorption. An hour either side is enough. As always, check with your ' +
        'health visitor or paediatrician before introducing a new food.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Iron',
      dri: 'Dietary Reference Intakes for Vitamin A, Vitamin K, Iron, Zinc and others',
      fdc: 'USDA FoodData Central',
    },
  },

  /* -------------------------------------------------------------- calcium */
  calcium: {
    name: 'Calcium',
    title: 'Calcium: the bank you can only pay into while it is open',
    lede:
      'Almost all of it is in your skeleton, and the skeleton stops accepting deposits somewhere ' +
      'in your late twenties. What you build before then is what you spend for the rest of your ' +
      'life.',
    description:
      'What calcium does beyond bone, how much you need at each age, why vitamin D decides ' +
      'whether you absorb it, and the foods highest in it — from USDA data.',

    whatItDoes: [
      'Around 99% of the calcium in your body is structural — it is the mineral that makes bone ' +
        'and teeth rigid. The other 1% is doing something more urgent: every muscle contraction, ' +
        'every nerve signal and every step of blood clotting needs calcium ions at a very precise ' +
        'concentration.',
      'That 1% is defended absolutely. If blood calcium starts to fall, parathyroid hormone rises ' +
        'and the body dissolves bone to restore it. This is why a blood test tells you almost ' +
        'nothing about calcium intake: the number stays normal right up until the skeleton has ' +
        'been paying for it for years.',
      'Bone mass accumulates through childhood and adolescence, peaks somewhere between the ' +
        'mid-twenties and thirty, and declines slowly afterwards. The teenage years are the ' +
        'single largest deposit anyone makes, which is why the recommendation for a fourteen-year- ' +
        'old is higher than for their parents.',
    ],

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake' },
      'infant-7-12': { who: 'Infants, 7–12 months', note: 'Adequate Intake' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'teen-9-18': { who: 'Ages 9–18', note: 'The highest figure in the table, and not by accident' },
      'adults-19-50': { who: 'Adults, 19–50' },
      'men-51-70': { who: 'Men, 51–70' },
      'women-51-plus': { who: 'Women, 51 and over', note: 'Bone loss accelerates after menopause' },
      'age-71-plus': { who: 'Adults, 71 and over' },
    },
    intakeNote:
      'More is not better. Above roughly 2,000–2,500 mg a day from food and supplements combined, ' +
      'the evidence for benefit disappears and the risk of kidney stones rises. Calcium is a ' +
      'nutrient where the useful range has a ceiling as well as a floor.',

    foodsIntro:
      'Dairy dominates by amount, but not by absorption: the calcium in low-oxalate greens such ' +
      'as kale and bok choy is taken up at roughly twice the rate of the calcium in milk. Spinach ' +
      'is the famous exception — it is rich in calcium and almost none of it is available.',

    helps: [
      'Vitamin D, without which the gut absorbs a fraction of what arrives',
      'Splitting intake — absorption is most efficient in doses of about 500 mg or less',
      'Low-oxalate greens: kale, bok choy, broccoli, watercress',
      'Fermentation and soaking, which reduce the phytate in beans and grains',
    ],
    hinders: [
      'Oxalate, which is why spinach, rhubarb and beet greens give up very little of theirs',
      'Very high sodium intake, which increases calcium lost in urine',
      'Excess caffeine and alcohol, modestly',
      'Taking it at the same time as an iron supplement — each blocks the other',
    ],
    absorptionNote:
      'Absorption sits around 30% from most foods and falls as the dose rises, which is the ' +
      'argument for spreading it across meals rather than taking one large supplement. It also ' +
      'falls with age: an older adult absorbs materially less than a teenager from the same glass ' +
      'of milk, which is part of why the recommendation goes back up after seventy.',

    shortfall: [
      'Teenagers, who need the most and often drink the least milk',
      'Postmenopausal women, through falling oestrogen and faster bone turnover',
      'People avoiding dairy without replacing it with fortified or high-calcium alternatives',
      'People with lactose intolerance who have cut dairy rather than switched form',
      'Anyone on long-term corticosteroids',
    ],

    recipe: {
      title: 'Braised kale and white beans with lemon',
      serves: 'Two, as a side; about twenty minutes',
      ingredients: [
        '250 g kale, stems stripped, leaves torn',
        '1 tin white beans, drained and rinsed',
        '2 cloves garlic, sliced',
        '2 tbsp olive oil',
        '100 ml water or stock',
        'Zest and juice of half a lemon',
        'Black pepper',
      ],
      steps: [
        {
          title: 'Strip the stems',
          detail:
            'Hold the base of the stem and pull the leaf away with the other hand. The stems are ' +
            'edible but take three times as long to soften, and this dish is short.',
        },
        {
          title: 'Soften the garlic',
          detail:
            'Olive oil in a wide pan over low heat, garlic in for two minutes until fragrant and ' +
            'barely coloured. Browned garlic turns bitter and there is nothing here to hide it.',
        },
        {
          title: 'Braise the kale',
          detail:
            'Leaves and the water in, lid on, eight to ten minutes over medium-low until the ' +
            'kale is tender but still green. Kale that has gone olive has lost the texture that ' +
            'made it worth cooking.',
        },
        {
          title: 'Finish',
          detail:
            'Beans in to warm through, then the lemon zest and juice off the heat. Pepper, and ' +
            'no salt until you have tasted it — tinned beans bring their own.',
        },
      ],
      note:
        'Kale is a low-oxalate green, which is the point: its calcium is absorbed at roughly ' +
        'twice the rate of the calcium in spinach. The lemon is not only for flavour — the acid ' +
        'also helps the iron in the beans.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Calcium',
      dri: 'Dietary Reference Intakes for Calcium and Vitamin D',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ----------------------------------------------------------------- zinc */
  zinc: {
    name: 'Zinc',
    title: 'Zinc: the one you notice by taste',
    lede:
      'The body stores almost none of it, which means intake has to be steady rather than ' +
      'occasional. It is also the reason a blunted sense of taste is one of the earliest signs ' +
      'that intake has been low for a while.',
    description:
      'What zinc does for immunity, healing and taste, how much you need by age, why phytate ' +
      'matters, and the foods highest in it — from USDA data.',

    whatItDoes: [
      'Zinc is structural in a way most minerals are not. Hundreds of proteins fold around a zinc ' +
        'ion in order to hold their shape — the "zinc finger" motifs that let transcription ' +
        'factors grip DNA are the best known. Without zinc those proteins do not merely work ' +
        'slowly; they do not form.',
      'It is also central to immune function and to wound healing, both of which depend on cells ' +
        'dividing quickly. Any tissue with a fast turnover — gut lining, skin, immune cells, the ' +
        'taste buds — feels a shortage first.',
      'There is no meaningful zinc store. Unlike iron, which the body hoards, zinc has to arrive ' +
        'more or less continuously, and status falls within weeks of intake dropping.',
    ],

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake' },
      'infant-7-12': { who: 'Infants, 7–12 months' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'child-9-13': { who: 'Children, 9–13 years' },
      'men-14-plus': { who: 'Men, 14 and over' },
      'women-19-plus': { who: 'Women, 19 and over' },
      pregnancy: { who: 'Pregnancy' },
      breastfeeding: { who: 'Breastfeeding' },
    },
    intakeNote:
      'Vegetarians may need up to 50% more than these figures. That is not a rounding allowance — ' +
      'it reflects the phytate content of a plant-based diet, which binds zinc in the gut and can ' +
      'halve how much of it is available.',

    foodsIntro:
      'Oysters are so far ahead that they distort the scale — a single serving carries several ' +
      'days’ worth. Below them the list is red meat, shellfish, seeds and legumes, in that order ' +
      'of availability rather than of amount.',

    helps: [
      'Animal protein in the same meal, which improves uptake from everything on the plate',
      'Soaking, sprouting, fermenting and leavening — all reduce phytate substantially',
      'Sourdough over unleavened bread, for the same reason',
    ],
    hinders: [
      'Phytate in unprocessed wholegrains and legumes, the single largest inhibitor',
      'High-dose iron supplements taken on an empty stomach at the same time',
      'Very high calcium intake, modestly',
      'Chronic diarrhoea or inflammatory bowel disease, through direct loss',
    ],
    absorptionNote:
      'The phytate-to-zinc ratio of a diet predicts absorption better than the zinc content does. ' +
      'This is why the same amount of zinc from beef and from wholemeal bread are not equivalent, ' +
      'and why traditional preparation methods — soaking beans overnight, leavening bread — turn ' +
      'out to have been doing real nutritional work all along.',

    shortfall: [
      'Vegetarians and vegans, through phytate rather than through intake',
      'Older adults, through lower intake and reduced absorption together',
      'People with Crohn’s disease, coeliac disease or chronic diarrhoea',
      'People with sickle cell disease',
      'Heavy drinkers, through reduced absorption and increased urinary loss',
    ],

    recipe: {
      title: 'Beef and pumpkin seed sofrito',
      serves: 'Two, about twenty-five minutes',
      ingredients: [
        '250 g beef mince',
        '3 tbsp pumpkin seeds',
        '1 onion, finely diced',
        '1 red pepper, diced',
        '2 cloves garlic, crushed',
        '1 tsp smoked paprika',
        '1 tbsp olive oil',
        '1 tin chopped tomatoes',
      ],
      steps: [
        {
          title: 'Toast the seeds first',
          detail:
            'Dry pan, three minutes, then tip them out. Doing this before the meat means the pan ' +
            'is clean and the seeds do not steam in the fat.',
        },
        {
          title: 'Brown the beef properly',
          detail:
            'High heat, in one layer, and left alone for two minutes before stirring. Crowding ' +
            'the pan turns it grey, and grey mince has none of the flavour the browning makes.',
        },
        {
          title: 'Build the sofrito',
          detail:
            'Beef out, heat down, onion and pepper in for eight minutes until soft and sweet. ' +
            'Garlic and paprika for the last minute only — paprika burns fast and turns acrid.',
        },
        {
          title: 'Simmer',
          detail:
            'Tomatoes and the beef back in, fifteen minutes at a low simmer. Scatter the seeds ' +
            'over at the table so they stay crisp.',
        },
      ],
      note:
        'Beef and seeds together is the point: the animal protein improves how much zinc you take ' +
        'up from the seeds, which on their own are held back by phytate.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Zinc',
      dri: 'Dietary Reference Intakes for Vitamin A, Vitamin K, Iron, Zinc and others',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------------ potassium */
  potassium: {
    name: 'Potassium',
    title: 'Potassium: the other half of the salt conversation',
    lede:
      'Public health advice has spent forty years telling people to eat less sodium. The ratio ' +
      'between sodium and potassium turns out to predict blood pressure better than either number ' +
      'alone — and almost nobody is short of sodium.',
    description:
      'Why the sodium-to-potassium ratio matters more than either alone, how much potassium you ' +
      'need, and the foods highest in it — ranked from USDA data.',

    whatItDoes: [
      'Potassium is the main positively charged ion inside your cells, as sodium is outside them. ' +
        'The difference across the membrane is what a nerve impulse actually is: a brief, ' +
        'controlled collapse of that gradient, followed by pumping it back. Every heartbeat runs ' +
        'on the same mechanism.',
      'At the kidney, potassium and sodium are handled together. Higher potassium intake ' +
        'increases sodium excretion, which is the mechanism behind its effect on blood pressure — ' +
        'and why the ratio between the two matters more than either figure by itself.',
      'It is also involved in moving glucose into muscle and in maintaining bone, though both ' +
        'effects are smaller and less certain than the cardiovascular one.',
    ],

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake' },
      'infant-7-12': { who: 'Infants, 7–12 months', note: 'Adequate Intake' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'child-9-13': { who: 'Children, 9–13 years' },
      'men-19-plus': { who: 'Men, 19 and over' },
      'women-19-plus': { who: 'Women, 19 and over' },
      pregnancy: { who: 'Pregnancy' },
    },
    intakeNote:
      'All of these are Adequate Intakes rather than RDAs — the evidence was not judged strong ' +
      'enough to set a recommended allowance. The figures were revised downwards in 2019, so ' +
      'older articles quoting 4,700 mg for every adult are citing a superseded number.',

    foodsIntro:
      'Bananas have the reputation and are nowhere near the top. Beans, potatoes with their skin, ' +
      'leafy greens and dried fruit all carry more, and the potato in particular is the food most ' +
      'people underestimate by the widest margin.',

    helps: [
      'Cooking methods that keep the water: roasting and steaming rather than boiling',
      'Eating potatoes and sweet potatoes with the skin on',
      'Beans and lentils, which are dense in it and cheap',
    ],
    hinders: [
      'Boiling and draining, which leaches a large share into water you pour away',
      'Some diuretics, which increase urinary loss substantially',
      'Chronic vomiting or diarrhoea',
    ],
    absorptionNote:
      'Potassium from food is absorbed efficiently and the body regulates the rest through the ' +
      'kidney, so the practical question is intake rather than uptake. One genuine caution: ' +
      'people with reduced kidney function, and people on ACE inhibitors, ARBs or ' +
      'potassium-sparing diuretics, can retain too much. For them high-potassium foods and salt ' +
      'substitutes are a matter for their clinician, not for an article.',

    shortfall: [
      'Anyone eating few vegetables, fruit or legumes — which is most of a typical Western diet',
      'People on thiazide or loop diuretics',
      'People with inflammatory bowel disease or chronic diarrhoea',
      'Heavy drinkers',
    ],

    recipe: {
      title: 'Roast potato and white bean salad',
      serves: 'Two as a main, four as a side',
      ingredients: [
        '600 g small potatoes, skin on, halved',
        '1 tin cannellini beans, drained',
        '2 tbsp olive oil',
        '1 tbsp red wine vinegar',
        '1 tsp Dijon mustard',
        'A large handful of parsley, chopped',
        '2 spring onions, sliced',
      ],
      steps: [
        {
          title: 'Leave the skins on',
          detail:
            'A meaningful share of a potato’s potassium sits in and just under the skin, and ' +
            'peeling is the single easiest way to throw it away.',
        },
        {
          title: 'Roast, do not boil',
          detail:
            'Toss in one tablespoon of the oil, 200°C, 30–35 minutes until the cut faces are ' +
            'golden. Boiling would put a third of the potassium into water you then pour down ' +
            'the sink.',
        },
        {
          title: 'Dress while hot',
          detail:
            'Whisk the vinegar, mustard and remaining oil. Pour it over the potatoes straight ' +
            'out of the oven — hot potato absorbs dressing, cold potato wears it.',
        },
        {
          title: 'Fold in the rest',
          detail: 'Beans, parsley and spring onion, gently, so the potatoes stay whole.',
        },
      ],
      note:
        'If you are on a potassium-sparing diuretic, an ACE inhibitor or an ARB, or have reduced ' +
        'kidney function, talk to your clinician before making high-potassium meals a habit.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Potassium',
      dri: 'Dietary Reference Intakes for Sodium and Potassium',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ----------------------------------------------------------- phosphorus */
  phosphorus: {
    name: 'Phosphorus',
    title: 'Phosphorus: nobody is short of it, and that is the story',
    lede:
      'It is in every cell, in every energy transaction and in most processed food. Deficiency ' +
      'from diet alone is close to unheard of in healthy people — which makes the interesting ' +
      'question the opposite one.',
    description:
      'What phosphorus does, why deficiency is rare, why additives changed the picture, and the ' +
      'foods highest in it — from USDA data.',

    whatItDoes: [
      'Phosphorus is half of the mineral that makes bone rigid — hydroxyapatite is calcium and ' +
        'phosphate together. About 85% of the body’s phosphorus is there.',
      'The rest is doing chemistry. ATP, the molecule every cell spends to do anything at all, is ' +
        'adenosine with three phosphates attached; releasing one is what "spending energy" ' +
        'literally means. DNA and RNA have a phosphate backbone. Cell membranes are built from ' +
        'phospholipids.',
      'Because it is in so much, and because the kidney regulates it tightly, blood phosphate ' +
        'stays in range across an enormous span of intakes in anyone with working kidneys.',
    ],

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake' },
      'infant-7-12': { who: 'Infants, 7–12 months', note: 'Adequate Intake' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'teen-9-18': { who: 'Ages 9–18', note: 'Peak bone building' },
      'adults-19-plus': { who: 'Adults, 19 and over' },
    },
    intakeNote:
      'Most adults take in well above the recommendation without trying. The figure is here for ' +
      'completeness rather than as something to aim at.',

    foodsIntro:
      'Protein-rich food is phosphorus-rich food, almost without exception: dairy, meat, fish, ' +
      'eggs, nuts, seeds and beans. What the ranking does not show is phosphate additives, which ' +
      'are absorbed far more completely than the phosphorus naturally present in food.',

    helps: [
      'Nothing needs to. Absorption from a mixed diet runs at 55–70% without assistance',
      'Vitamin D, modestly, as it does for calcium',
    ],
    hinders: [
      'Phytate, which is why phosphorus in wholegrains and seeds is less available than the number suggests',
      'Phosphate binders, prescribed deliberately in kidney disease',
      'Very high antacid use over long periods',
    ],
    absorptionNote:
      'The distinction that matters is natural versus added. Phosphorus bound into plant tissue ' +
      'as phytate is absorbed at perhaps 40%; phosphate additives in processed food are absorbed ' +
      'at close to 100%. Two foods with the same figure on a label can therefore deliver very ' +
      'different amounts — and additives are not required to be listed as phosphorus.',

    shortfall: [
      'Genuinely rare from diet alone in healthy people',
      'People with alcohol use disorder, through poor intake and increased loss',
      'People recovering from severe malnutrition, where refeeding can drop blood phosphate sharply',
      'People on long-term high-dose antacids that bind it',
      'Very premature infants, whose requirements are exceptional',
    ],

    recipe: {
      title: 'Sardines on toast with tomato and oregano',
      serves: 'One, five minutes',
      ingredients: [
        '1 tin sardines in olive oil',
        '2 thick slices of sourdough',
        '1 ripe tomato, halved',
        'Dried oregano',
        'Lemon',
        'Black pepper',
      ],
      steps: [
        {
          title: 'Toast the bread hard',
          detail:
            'Darker than you would normally. It has to stand up to a wet tomato without going ' +
            'soft in the middle.',
        },
        {
          title: 'Rub with tomato',
          detail:
            'Cut side down, straight onto the hot toast, pressing until the skin is all you have ' +
            'left. This is a Catalan habit and it is better than any spread.',
        },
        {
          title: 'Lay on the sardines',
          detail:
            'Whole, with a little of their oil. The soft bones are where most of the calcium is ' +
            'and they are entirely edible.',
        },
        {
          title: 'Finish',
          detail: 'Oregano crushed between your fingers, lemon, pepper. No salt — the fish has it.',
        },
      ],
      note:
        'Sardines are one of the few foods that are simultaneously high in phosphorus, calcium, ' +
        'vitamin D and omega-3 — an unusual combination that comes from eating the whole fish, ' +
        'bones included.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Phosphorus',
      dri: 'Dietary Reference Intakes for Calcium and Vitamin D',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------------- selenium */
  selenium: {
    name: 'Selenium',
    title: 'Selenium: a mineral that depends on where your food grew',
    lede:
      'The selenium content of a plant reflects the selenium in the soil it grew in, and that ' +
      'varies by more than a hundredfold across the world. It is one of the few nutrients where ' +
      'geography is the main variable.',
    description:
      'Why selenium content depends on soil, how much you need, why the gap between enough and ' +
      'too much is narrow, and the foods highest in it — from USDA data.',

    whatItDoes: [
      'Selenium is built into about twenty-five proteins, and in each of them it sits at the ' +
        'active site as selenocysteine — an amino acid the body assembles specifically for the ' +
        'purpose. The best-known family, the glutathione peroxidases, neutralise peroxides before ' +
        'they damage membranes.',
      'A second family converts thyroid hormone from its storage form, T4, into the active form, ' +
        'T3. Thyroid tissue holds more selenium per gram than any other organ, which is a clue to ' +
        'how central this is.',
      'It also supports immune function and, through the same antioxidant machinery, protects ' +
        'DNA from oxidative damage.',
    ],

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake' },
      'infant-7-12': { who: 'Infants, 7–12 months', note: 'Adequate Intake' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'child-9-13': { who: 'Children, 9–13 years' },
      'adults-14-plus': { who: 'Ages 14 and over' },
      pregnancy: { who: 'Pregnancy' },
      breastfeeding: { who: 'Breastfeeding' },
    },
    intakeNote:
      'The upper limit for adults is 400 µg a day, which is about seven times the recommendation ' +
      '— a narrower margin than most nutrients have. Two or three Brazil nuts a day is a sensible ' +
      'habit; a handful every day is not.',

    foodsIntro:
      'Brazil nuts are in a category of their own and the reason is geological: they grow in ' +
      'Amazonian soil that happens to be selenium-rich. Everything else on the list is seafood, ' +
      'organ meat and, where the soil allows, wheat.',

    helps: [
      'Variety of origin — food from several regions evens out what any one soil provides',
      'Seafood and organ meats, which concentrate it regardless of soil',
      'Vitamin E, with which it works closely against oxidative damage',
    ],
    hinders: [
      'Soil depletion, which is why the same crop varies enormously between countries',
      'Malabsorption conditions, particularly after bowel resection',
      'Dialysis, which removes it',
    ],
    absorptionNote:
      'Absorption is high — 80% or more — and largely unregulated, which is precisely why the ' +
      'upper limit matters. The body does not protect you from too much selenium the way it does ' +
      'from too much iron. Chronic excess causes selenosis: brittle hair and nails first, then ' +
      'gastrointestinal and neurological effects.',

    shortfall: [
      'People eating food grown in selenium-poor soil — parts of Europe, China and New Zealand',
      'People on long-term parenteral nutrition without supplementation',
      'People on dialysis',
      'People with severe gastrointestinal malabsorption',
    ],

    recipe: {
      title: 'Tuna, egg and Brazil nut salad',
      serves: 'Two, ten minutes',
      ingredients: [
        '1 tin tuna in olive oil, drained',
        '2 eggs, soft-boiled',
        '4 Brazil nuts, roughly chopped',
        'Two handfuls of watercress or rocket',
        '1 tbsp olive oil',
        'Juice of half a lemon',
        'Black pepper',
      ],
      steps: [
        {
          title: 'Boil the eggs to seven minutes',
          detail:
            'Into already-boiling water, seven minutes exactly, then straight into cold. The yolk ' +
            'should be set at the edge and still soft in the middle.',
        },
        {
          title: 'Chop the nuts coarsely',
          detail:
            'Four is the number. Brazil nuts carry so much selenium that a larger handful every ' +
            'day would take you past the upper limit, which is not a sentence that applies to ' +
            'many foods.',
        },
        {
          title: 'Dress the leaves first',
          detail:
            'Oil, lemon and pepper tossed through the watercress before anything else goes in, ' +
            'so the leaves are coated rather than sitting in a puddle.',
        },
        {
          title: 'Assemble',
          detail: 'Tuna flaked over, eggs halved on top, nuts scattered last so they stay crunchy.',
        },
      ],
      note:
        'Four Brazil nuts is a portion, not a suggestion to be generous with. They are the single ' +
        'richest common food source of selenium and the gap between a useful amount and too much ' +
        'is unusually small.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Selenium',
      dri: 'Dietary Reference Intakes for Vitamin C, Vitamin E, Selenium and Carotenoids',
      fdc: 'USDA FoodData Central',
    },
  },

  /* --------------------------------------------------------------- copper */
  copper: {
    name: 'Copper',
    title: 'Copper: the mineral iron cannot work without',
    lede:
      'You can eat plenty of iron and still be anaemic if copper is short, because the enzyme ' +
      'that loads iron onto its transport protein is a copper enzyme. It is a small requirement ' +
      'with an outsized failure mode.',
    description:
      'Why copper deficiency looks like iron deficiency, how much you need, what zinc supplements ' +
      'do to it, and the foods highest in it — from USDA data.',

    whatItDoes: [
      'Copper sits at the active site of enzymes that do jobs nothing else can. Cytochrome c ' +
        'oxidase, the last step of the chain that extracts energy from food, is one. Lysyl ' +
        'oxidase, which cross-links collagen and elastin so that connective tissue and blood ' +
        'vessel walls hold together, is another.',
      'Ceruloplasmin, a copper protein, oxidises iron so it can bind to transferrin and be moved ' +
        'around the body. Without enough copper, iron accumulates where it is stored and never ' +
        'reaches the marrow — producing an anaemia that iron supplements do not fix.',
      'It is also needed for the pigment melanin, and for several steps in neurotransmitter ' +
        'synthesis.',
    ],

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake' },
      'infant-7-12': { who: 'Infants, 7–12 months', note: 'Adequate Intake' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'child-9-13': { who: 'Children, 9–13 years' },
      'teen-14-18': { who: 'Ages 14–18' },
      'adults-19-plus': { who: 'Adults, 19 and over' },
      pregnancy: { who: 'Pregnancy' },
      breastfeeding: { who: 'Breastfeeding' },
    },
    intakeNote:
      'Micrograms, not milligrams. Copper is needed in quantities about a thousand times smaller ' +
      'than calcium, and the upper limit for adults is 10 mg — roughly eleven times the ' +
      'recommendation.',

    foodsIntro:
      'Liver and shellfish lead by a wide margin, followed by seeds, nuts, cocoa and wholegrains. ' +
      'Dark chocolate is a genuine source rather than a wishful one.',

    helps: [
      'A varied diet including any of shellfish, offal, nuts, seeds or cocoa',
      'Wholegrains over refined, as with most trace minerals',
    ],
    hinders: [
      'High-dose zinc supplements — the single most common cause of copper deficiency in practice',
      'Very high vitamin C supplementation, modestly',
      'Bariatric surgery and other causes of malabsorption',
    ],
    absorptionNote:
      'The zinc interaction is the one worth knowing. Zinc induces a gut protein called ' +
      'metallothionein, which binds copper and carries it out with the shed cells. Taking 50 mg ' +
      'of zinc a day for months — a dose sold over the counter — can produce a copper deficiency ' +
      'anaemia that looks exactly like iron deficiency and does not respond to iron.',

    shortfall: [
      'People taking high-dose zinc supplements over long periods',
      'People after gastric bypass or other bariatric surgery',
      'Infants fed cow’s milk exclusively, which is low in copper',
      'People with Menkes disease, a rare inherited transport disorder',
    ],

    recipe: {
      title: 'Dark chocolate and toasted seed bark',
      serves: 'Makes one tray; twenty minutes plus setting',
      ingredients: [
        '200 g dark chocolate, 70% or higher',
        '3 tbsp sunflower seeds',
        '3 tbsp pumpkin seeds',
        '2 tbsp sesame seeds',
        'A pinch of flaky salt',
      ],
      steps: [
        {
          title: 'Toast the seeds separately',
          detail:
            'They are different sizes and burn at different rates. Sesame goes first and fastest ' +
            '— thirty seconds past golden and it is bitter.',
        },
        {
          title: 'Melt gently',
          detail:
            'A bowl over barely simmering water, off the heat before the last pieces have gone. ' +
            'Chocolate seizes above about 50°C and there is no recovering it.',
        },
        {
          title: 'Spread thin',
          detail:
            'Onto baking paper, about 5 mm. Thicker and it is a slab rather than a bark, and it ' +
            'takes a hammer to break.',
        },
        {
          title: 'Scatter and set',
          detail:
            'Seeds and salt over while the chocolate is still wet, then an hour at room ' +
            'temperature. The fridge makes it bloom grey.',
        },
      ],
      note:
        'Cocoa and seeds are both genuinely good copper sources, which makes this one of the few ' +
        'recipes on this site that is also a confection.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Copper',
      dri: 'Dietary Reference Intakes for Vitamin A, Vitamin K, Copper, Iron, Zinc and others',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------------ manganese */
  manganese: {
    name: 'Manganese',
    title: 'Manganese: a trace mineral you almost certainly already get',
    lede:
      'A cup of tea, a bowl of oats and a handful of nuts will cover a day’s requirement between ' +
      'them. Dietary deficiency in humans is so rare that most of what is known comes from ' +
      'experimental studies rather than from patients.',
    description:
      'What manganese does, how much you need, why deficiency is almost unknown and inhaled ' +
      'excess is not, and the foods highest in it — from USDA data.',

    whatItDoes: [
      'Manganese activates enzymes rather than being consumed by them. Manganese superoxide ' +
        'dismutase is the version of that antioxidant enzyme that works inside mitochondria, ' +
        'where the most reactive oxygen is produced — a location no other form covers.',
      'It is also needed to build cartilage and bone matrix, and for enzymes in the urea cycle ' +
        'and in carbohydrate metabolism.',
      'Requirements are small and plant foods are dense in it, which together explain why ' +
        'dietary deficiency essentially does not occur in people eating ordinary food.',
    ],

    intake: {
      'infant-7-12': { who: 'Infants, 7–12 months', note: 'Adequate Intake' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'boys-9-13': { who: 'Boys, 9–13' },
      'girls-9-13': { who: 'Girls, 9–13' },
      'men-19-plus': { who: 'Men, 19 and over' },
      'women-19-plus': { who: 'Women, 19 and over' },
      pregnancy: { who: 'Pregnancy' },
    },
    intakeNote:
      'Every one of these is an Adequate Intake. There is no RDA for manganese because the ' +
      'evidence has never been strong enough to set one — the figures are what healthy ' +
      'populations happen to consume.',

    foodsIntro:
      'Wholegrains, nuts, legumes and tea. Pineapple is the outlier people remember, and it ' +
      'genuinely is a good source.',

    helps: [
      'Wholegrains, which are the largest contributor in most diets',
      'Tea, which is unusually rich in it',
      'A varied plant-based diet, which makes deficiency almost impossible',
    ],
    hinders: [
      'High iron intake, which competes for the same transporter',
      'High calcium and phosphorus, modestly',
      'Phytate, as with the other trace minerals',
    ],
    absorptionNote:
      'Absorption is low — a few percent — and falls further as intake rises, which is a large ' +
      'part of why dietary excess is not a practical concern. Inhaled manganese is an entirely ' +
      'different matter: welders and miners exposed to manganese dust can develop a Parkinsonian ' +
      'syndrome, because inhalation bypasses the gut regulation altogether.',

    shortfall: [
      'Almost nobody, from diet alone',
      'People on long-term parenteral nutrition without it',
      'People with severe liver disease, where handling is impaired in both directions',
    ],

    recipe: {
      title: 'Overnight oats with pineapple and pecans',
      serves: 'One, five minutes the night before',
      ingredients: [
        '50 g rolled oats',
        '120 ml milk or a fortified plant drink',
        '2 tbsp yoghurt',
        '80 g fresh pineapple, diced',
        '1 tbsp pecans, chopped',
        '1 tsp chia seeds',
      ],
      steps: [
        {
          title: 'Use rolled, not instant',
          detail:
            'Instant oats are pre-cooked and collapse into paste overnight. Rolled oats soften ' +
            'and keep their shape.',
        },
        {
          title: 'Combine everything but the nuts',
          detail:
            'Oats, milk, yoghurt, chia and half the pineapple in a jar. Stir properly — chia ' +
            'clumps if it is not dispersed before it starts absorbing.',
        },
        {
          title: 'Overnight in the fridge',
          detail: 'Six hours minimum. The chia thickens it and the oats do the rest.',
        },
        {
          title: 'Finish in the morning',
          detail:
            'The rest of the pineapple and the pecans on top. Adding them the night before makes ' +
            'the fruit weep and the nuts go soft.',
        },
      ],
      note:
        'Oats, pecans and pineapple are three of the better manganese sources, which is a slightly ' +
        'absurd thing to say about a breakfast that was chosen because it is good.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Manganese',
      dri: 'Dietary Reference Intakes for Vitamin A, Vitamin K, Manganese and others',
      fdc: 'USDA FoodData Central',
    },
  },
};
