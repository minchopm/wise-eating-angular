import { LocalisedArticle } from '../types';

/** Protein and fibre, in English. Numbers live in nutrient-facts.ts. */
export const MACROS_EN: Readonly<Record<string, LocalisedArticle>> = {
  /* -------------------------------------------------------------- protein */
  protein: {
    name: 'Protein',
    title: 'Protein: the requirement is a floor, not a target',
    lede:
      'The RDA is the amount that prevents deficiency in almost everyone — which is a different ' +
      'question from the amount that is optimal for an athlete, or for someone over seventy ' +
      'trying not to lose muscle.',
    description:
      'What protein is for beyond muscle, how much you need by age and weight, why the RDA is a ' +
      'minimum, and the foods highest in it — from USDA data.',

    whatItDoes: [
      'Protein is not primarily fuel. It is material: enzymes, antibodies, transport proteins, ' +
        'collagen, the contractile machinery of muscle, and every hormone that is not a steroid. ' +
        'The body has no protein store the way it has a fat store — everything that is protein is ' +
        'already doing a job, so a shortfall means dismantling something that was in use.',
      'Nine of the twenty amino acids cannot be made and must arrive in food. What "complete" ' +
        'means is that a protein contains all nine in useful proportion; animal proteins ' +
        'generally do, and most single plant proteins are low in one or two.',
      'That is less of a problem than it was once thought. Eating a variety of plant proteins ' +
        'across a day covers the pattern comfortably — the idea that they had to be combined at ' +
        'the same meal was withdrawn decades ago.',
    ],

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake' },
      'infant-7-12': { who: 'Infants, 7–12 months' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'child-9-13': { who: 'Children, 9–13 years' },
      'men-19-plus': { who: 'Men, 19 and over', note: 'At a reference body weight' },
      'women-19-plus': { who: 'Women, 19 and over', note: 'At a reference body weight' },
      'per-kilo': { who: 'Adults, per kilogram', note: 'The figure the others are derived from' },
      pregnancy: { who: 'Pregnancy and breastfeeding' },
    },
    intakeNote:
      'The per-kilogram figure is the real recommendation; the gram totals are it applied to an ' +
      'average body. And it is explicitly a minimum. Research in older adults and in people ' +
      'training seriously points to higher intakes — often 1.0–1.6 g/kg — being better for ' +
      'holding on to muscle. That is a different question from the one the RDA answers, and it is ' +
      'worth not confusing the two.',

    foodsIntro:
      'Ranked by grams per 100 g. Read it knowing that concentration is not the whole story: a ' +
      'food can be 25% protein and still contribute less to a day than something less dense that ' +
      'you eat more of.',

    helps: [
      'Spreading it across meals rather than loading dinner — muscle protein synthesis responds per meal',
      'Variety among plant sources, which covers the amino acid pattern without any planning',
      'Resistance exercise, without which extra protein is largely just calories',
    ],
    hinders: [
      'Very low overall energy intake, where protein gets burned for fuel instead of used',
      'Advanced age, which blunts the muscle response to a given dose',
      'Some kidney conditions, where intake needs a clinician’s input rather than an article’s',
    ],
    absorptionNote:
      'Protein quality can be measured, and the current standard is DIAAS, which scores how ' +
      'digestible each essential amino acid actually is. Dairy and egg score highest; most single ' +
      'plant sources lower, chiefly through fibre and antinutrients slowing digestion. It matters ' +
      'most at low total intakes and hardly at all at generous ones.',

    shortfall: [
      'Older adults, whose intake often falls just as their requirement rises',
      'People recovering from illness, surgery or injury',
      'People eating very restricted diets for weight loss',
      'Some vegans with low total energy intake, though a varied plant diet covers it easily',
    ],

    recipe: {
      title: 'Greek yoghurt bowl with seeds and lentil crumble',
      serves: 'One, ten minutes',
      ingredients: [
        '200 g Greek yoghurt, full fat',
        '3 tbsp cooked green lentils',
        '1 tbsp pumpkin seeds',
        '1 tbsp hemp seeds',
        '1 tsp olive oil',
        'Lemon zest',
        'Black pepper and flaky salt',
      ],
      steps: [
        {
          title: 'Use strained yoghurt',
          detail:
            'Greek or skyr, not ordinary yoghurt. Straining removes whey and roughly doubles the ' +
            'protein per spoon, which is the entire reason this works.',
        },
        {
          title: 'Crisp the lentils',
          detail:
            'Cooked lentils, patted dry, into a hot pan with the oil for four minutes until some ' +
            'of them pop and go crunchy. Wet lentils will not crisp.',
        },
        {
          title: 'Toast the seeds with them',
          detail: 'In for the last ninety seconds, so they warm through without burning.',
        },
        {
          title: 'Assemble savoury',
          detail:
            'Yoghurt in the bowl, lentils and seeds over, lemon zest, salt and a lot of pepper. ' +
            'This is a savoury breakfast and it is better for it.',
        },
      ],
      note:
        'About thirty grams of protein from three ingredients, and it takes ten minutes — which ' +
        'matters more than the number, because a protein target is met by what you will actually ' +
        'make on a Tuesday.',
    },

    sources: {
      dri: 'Dietary Reference Intakes for Energy, Carbohydrate, Fibre, Fat, Fatty Acids, Cholesterol, Protein and Amino Acids',
      who: 'WHO/FAO/UNU — Protein and Amino Acid Requirements in Human Nutrition',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ---------------------------------------------------------------- fibre */
  fibre: {
    name: 'Fibre',
    title: 'Fibre: the part you do not digest, for the residents who do',
    lede:
      'By definition your body cannot break it down. The bacteria in your colon can, and what ' +
      'they make out of it turns out to be most of the reason fibre matters.',
    description:
      'Soluble versus insoluble fibre, how much you need, what your gut bacteria do with it, and ' +
      'the foods highest in it — from USDA data.',

    whatItDoes: [
      'Soluble fibre dissolves and forms a gel. That gel slows how fast the stomach empties, ' +
        'which flattens the rise in blood glucose after a meal, and it binds bile acids so the ' +
        'liver has to make more from cholesterol — which is the mechanism behind oats and LDL.',
      'Insoluble fibre does not dissolve. It adds bulk and holds water, which speeds transit ' +
        'through the colon and is why it is the kind that helps with constipation.',
      'The part that has changed how nutritionists talk about fibre is fermentation. Colonic ' +
        'bacteria ferment some fibres into short-chain fatty acids — chiefly butyrate, which is ' +
        'the preferred fuel of the cells lining the colon. You are, in a real sense, feeding them ' +
        'so that they feed you.',
    ],

    intake: {
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'boys-9-13': { who: 'Boys, 9–13' },
      'girls-9-13': { who: 'Girls, 9–13' },
      'men-19-50': { who: 'Men, 19–50' },
      'men-51-plus': { who: 'Men, 51 and over' },
      'women-19-50': { who: 'Women, 19–50' },
      'women-51-plus': { who: 'Women, 51 and over' },
      'per-1000-kcal': { who: 'Per 1,000 kcal', note: 'The figure the others are derived from' },
    },
    intakeNote:
      'All Adequate Intakes, and average intake in the US and much of Europe is roughly half of ' +
      'them. This is the single largest gap between recommendation and reality of anything on ' +
      'this site.',

    foodsIntro:
      'Legumes, wholegrains, seeds, and fruit and vegetables eaten with their skins. The gap ' +
      'between a wholegrain and its refined version is larger here than for any other nutrient.',

    helps: [
      'Increasing intake gradually — a sudden jump causes bloating and puts people off for good',
      'Drinking enough water, without which extra fibre can make constipation worse',
      'Variety of type, since different bacteria ferment different fibres',
      'Eating skins, and choosing whole fruit over juice',
    ],
    hinders: [
      'Refining, which removes the bran where most of it is',
      'Juicing, which removes essentially all of it',
      'Some conditions — active flares of inflammatory bowel disease, certain strictures — where ' +
        'a clinician may deliberately restrict it',
    ],
    absorptionNote:
      'Fibre supplements are not equivalent to fibre from food. Isolated psyllium or inulin does ' +
      'one or two of the jobs described above; a bowl of beans does all of them and brings ' +
      'minerals, protein and polyphenols with it. Supplements have their place, mostly a clinical ' +
      'one, but they are not a shortcut past vegetables.',

    shortfall: [
      'Most people in Western countries — average intake is around half the recommendation',
      'Anyone eating mainly refined grains and few vegetables or legumes',
      'People on low-carbohydrate diets who have not deliberately replaced the fibre',
      'Children, whose intake tracks their parents’ closely',
    ],

    recipe: {
      title: 'Black bean, barley and roast squash bowl',
      serves: 'Two, about forty minutes',
      ingredients: [
        '150 g pearl barley',
        '1 tin black beans, drained',
        '500 g squash, cubed, skin on if thin',
        '2 tbsp olive oil',
        '1 tsp cumin seeds',
        'Juice of a lime',
        'A handful of coriander',
        'Chilli flakes',
      ],
      steps: [
        {
          title: 'Barley on first',
          detail:
            'It takes 25–30 minutes, longer than anything else here, and it is the only ' +
            'ingredient with a fixed clock.',
        },
        {
          title: 'Roast the squash with its skin',
          detail:
            'Thin-skinned varieties need no peeling and the skin is where a large share of the ' +
            'fibre sits. 200°C, 25 minutes, with the cumin seeds tossed through.',
        },
        {
          title: 'Warm the beans in their own liquid',
          detail:
            'A few spoons of the tin liquid rather than water — it is starchy and helps ' +
            'everything cling together at the end.',
        },
        {
          title: 'Combine and dress',
          detail: 'Barley, beans and squash together, lime over, coriander and chilli on top.',
        },
      ],
      note:
        'Around 20 g of fibre in one bowl, which is most of a day for an adult woman. If your ' +
        'usual intake is low, build up to this over a couple of weeks rather than starting here ' +
        '— and drink water with it.',
    },

    sources: {
      dri: 'Dietary Reference Intakes for Energy, Carbohydrate, Fibre, Fat, Fatty Acids, Cholesterol, Protein and Amino Acids',
      fda: 'FDA — Dietary Fiber on the Nutrition Facts Label',
      fdc: 'USDA FoodData Central',
    },
  },
};
