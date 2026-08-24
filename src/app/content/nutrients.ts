/**
 * The nutrient articles.
 *
 * Structure borrowed from Elena's drafts — what it does, how much you need,
 * which foods carry it, and a recipe you can actually cook — because that is
 * the order a worried parent reads in. What is different is the sourcing.
 * Every number here traces to a primary reference: the NIH Office of Dietary
 * Supplements fact sheets and the Dietary Reference Intakes published by the
 * National Academies. Not to a secondary summary, and not to another website.
 *
 * Two rules this file exists to enforce.
 *
 * Nothing here diagnoses. "Low intake is associated with X" is a statement
 * about a population; "you have X" is a statement about a person, and we are
 * not in a position to make it. Every article ends by saying so.
 *
 * And the food lists are not written here. They come from
 * ./nutrient-foods.ts, computed from the same USDA records the app ships — so
 * the article and the app cannot disagree about how much magnesium is in a
 * pumpkin seed.
 */

export interface IntakeBand {
  readonly who: string;
  readonly amount: string;
  readonly note?: string;
}

export interface RecipeStep {
  readonly title: string;
  readonly detail: string;
}

export interface Recipe {
  readonly title: string;
  /** Who it is for — "From 8 months", "Family", and so on. */
  readonly serves: string;
  readonly ingredients: readonly string[];
  readonly steps: readonly RecipeStep[];
  readonly note?: string;
}

export interface Source {
  readonly label: string;
  readonly url: string;
}

export interface NutrientArticle {
  readonly slug: string;
  /** How the nutrient is spoken about. */
  readonly name: string;
  readonly family: 'Vitamin' | 'Mineral' | 'Macronutrient';
  /** The <h1>. Written as a claim, not as a label. */
  readonly title: string;
  readonly lede: string;
  /** Meta description. Under 160 characters. */
  readonly description: string;

  /** What it does in the body. Physiology, not benefit-speak. */
  readonly whatItDoes: readonly string[];
  readonly intake: readonly IntakeBand[];
  readonly intakeNote?: string;

  /** What the ranked food table needs said about it. */
  readonly foodsIntro: string;

  readonly helps: readonly string[];
  readonly hinders: readonly string[];
  readonly absorptionNote?: string;

  /** Who tends to fall short, and why. Never "symptoms you have". */
  readonly shortfall: readonly string[];

  readonly recipe: Recipe;
  readonly sources: readonly Source[];
  readonly updated: string;
}

const ODS = 'https://ods.od.nih.gov/factsheets';

export const NUTRIENTS: readonly NutrientArticle[] = [
  /* ------------------------------------------------------------ magnesium */
  {
    slug: 'magnesium',
    name: 'Magnesium',
    family: 'Mineral',
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

    intake: [
      { who: 'Infants, 0–6 months', amount: '30 mg', note: 'Adequate Intake, from milk' },
      { who: 'Infants, 7–12 months', amount: '75 mg', note: 'Adequate Intake' },
      { who: 'Children, 1–3 years', amount: '80 mg' },
      { who: 'Children, 4–8 years', amount: '130 mg' },
      { who: 'Children, 9–13 years', amount: '240 mg' },
      { who: 'Men, 19–30', amount: '400 mg' },
      { who: 'Men, 31 and over', amount: '420 mg' },
      { who: 'Women, 19–30', amount: '310 mg' },
      { who: 'Women, 31 and over', amount: '320 mg' },
      { who: 'Pregnancy', amount: '350–400 mg', note: 'Depending on age' },
    ],
    intakeNote:
      'These are Recommended Dietary Allowances from the Dietary Reference Intakes, except where ' +
      'marked: for infants there is not enough evidence to set an RDA, so an Adequate Intake is ' +
      'given instead. The percentages in the table below are of the 420 mg Daily Value used on ' +
      'food labels, which is a single number for everyone over four and therefore generous for ' +
      'most people reading it.',

    foodsIntro:
      'Magnesium sits in chlorophyll, so green leaves carry it — but seeds, nuts and beans carry ' +
      'far more per bite, because they are storing minerals for a plant that has not grown yet. ' +
      'This is the catalogue ranked by magnesium per 100 g, spices and supplements excluded.',

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
      'People with type 2 diabetes, coeliac disease or Crohn\'s, through losses or malabsorption',
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

    sources: [
      { label: 'NIH Office of Dietary Supplements — Magnesium', url: `${ODS}/Magnesium-HealthProfessional/` },
      {
        label: 'Dietary Reference Intakes for Calcium, Phosphorus, Magnesium, Vitamin D and Fluoride',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK109825/',
      },
      { label: 'USDA FoodData Central', url: 'https://fdc.nal.usda.gov/' },
    ],
    updated: '2026-08-25',
  },

  /* ----------------------------------------------------------------- iron */
  {
    slug: 'iron',
    name: 'Iron',
    family: 'Mineral',
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
      'A smaller share sits in myoglobin, which stores oxygen inside muscle itself, and in enzymes ' +
        'that run the energy machinery of every cell. Iron is also needed for the enzymes that ' +
        'build myelin and several neurotransmitters — which is the reason iron status in the ' +
        'first two years of life is taken so seriously.',
      'The body has no way to excrete iron deliberately. It regulates by absorbing more or less, ' +
        'which cuts both ways: it is why absorption rises when you are short, and why taking ' +
        'supplements nobody prescribed is a genuinely bad idea.',
    ],

    intake: [
      { who: 'Infants, 0–6 months', amount: '0.27 mg', note: 'Adequate Intake; stores from birth' },
      { who: 'Infants, 7–12 months', amount: '11 mg', note: 'The steepest jump in the whole table' },
      { who: 'Children, 1–3 years', amount: '7 mg' },
      { who: 'Children, 4–8 years', amount: '10 mg' },
      { who: 'Men, 19–50', amount: '8 mg' },
      { who: 'Women, 19–50', amount: '18 mg', note: 'Menstrual losses' },
      { who: 'Women, 51 and over', amount: '8 mg' },
      { who: 'Pregnancy', amount: '27 mg' },
      { who: 'Vegetarians and vegans', amount: '1.8× the above', note: 'Lower absorption from plant sources' },
    ],
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
      'A small amount of meat, poultry or fish alongside plant sources, which improves absorption from both',
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
      'This is the whole point of the article. Heme iron, from meat, poultry and fish, is absorbed ' +
      'at roughly 15–35% and is barely affected by what else is on the plate. Non-heme iron, from ' +
      'plants, eggs and fortified foods, is absorbed at roughly 2–20% — and that range is set ' +
      'almost entirely by what it is eaten with. Lentils and spinach are not poor sources; they ' +
      'are sources that need a squeeze of lemon and no tea.',

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
        'Serve this away from a milk feed rather than with one — the calcium in milk competes with ' +
        'the iron for absorption. An hour either side is enough. As always, check with your ' +
        'health visitor or paediatrician before introducing a new food.',
    },

    sources: [
      { label: 'NIH Office of Dietary Supplements — Iron', url: `${ODS}/Iron-HealthProfessional/` },
      {
        label: 'Dietary Reference Intakes for Vitamin A, Vitamin K, Arsenic, Boron, Chromium, Copper, Iodine, Iron…',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK222310/',
      },
      { label: 'USDA FoodData Central', url: 'https://fdc.nal.usda.gov/' },
    ],
    updated: '2026-08-25',
  },

  /* ------------------------------------------------------------ vitamin D */
  {
    slug: 'vitamin-d',
    name: 'Vitamin D',
    family: 'Vitamin',
    title: 'Vitamin D: the one you mostly do not eat',
    lede:
      'Almost every other nutrient comes from food. This one is made in your skin from sunlight, ' +
      'which is why the advice about it changes with latitude, season and how much of the year ' +
      'you spend indoors.',
    description:
      'Why vitamin D is different from every other vitamin, how much you need by age, and the ' +
      'few foods that actually contain it — ranked from USDA data.',

    whatItDoes: [
      'Vitamin D governs how much calcium you absorb from what you eat. Without enough, you can ' +
        'have a calcium-rich diet and still not get the calcium into your bones — which is what ' +
        'rickets in children and osteomalacia in adults actually are.',
      'It behaves more like a hormone than a vitamin. Your skin makes it from UVB light, your ' +
        'liver and then your kidneys convert it into the active form, and receptors for it turn ' +
        'up in tissue that has nothing obvious to do with bone: immune cells, muscle, gut lining.',
      'Because it is fat-soluble, it is stored rather than flushed. That is useful over a winter ' +
        'and it is also why vitamin D is one of the few nutrients where supplementing carelessly ' +
        'can actually harm you.',
    ],

    intake: [
      { who: 'Infants, 0–12 months', amount: '10 µg (400 IU)', note: 'Adequate Intake' },
      { who: 'Children and adults, 1–70', amount: '15 µg (600 IU)' },
      { who: 'Adults, 71 and over', amount: '20 µg (800 IU)' },
      { who: 'Pregnancy and breastfeeding', amount: '15 µg (600 IU)' },
    ],
    intakeNote:
      'Micrograms and International Units are both in common use and 1 µg = 40 IU, which is a ' +
      'frequent source of confusion on labels. These figures assume minimal sun exposure — they ' +
      'are deliberately set for the worst case, because the alternative is advice that only works ' +
      'in July.',

    foodsIntro:
      'This is the shortest genuinely useful list on the site, and that is the finding. Outside ' +
      'oily fish, egg yolk and things that have been fortified on purpose, food is not where ' +
      'vitamin D comes from.',

    helps: [
      'Eating it with fat, since it is fat-soluble and a fat-free meal absorbs less',
      'Sunlight on skin — midday, arms and face, and far less time than most people assume',
      'Fortified foods, which in many countries are the main dietary source by a wide margin',
    ],
    hinders: [
      'Latitude and season: above roughly 37°, winter sunlight makes almost none',
      'Sunscreen, glass and clothing, all of which block UVB',
      'Darker skin, which needs longer exposure for the same amount',
      'Age, which reduces how efficiently skin makes it',
    ],

    shortfall: [
      'Breastfed infants, which is why supplementation is routinely recommended for them',
      'People who cover up, work indoors, or live at northern latitudes through winter',
      'People with darker skin living far from the equator',
      'Older adults, through less time outdoors and less efficient synthesis',
      'People with fat malabsorption — coeliac disease, Crohn\'s, after bariatric surgery',
    ],

    recipe: {
      title: 'Salmon and sweet potato mash',
      serves: 'From 7 months; one of the few meals that is a real dietary source',
      ingredients: [
        '40 g salmon fillet, skin and bones removed with care',
        '1 small sweet potato, peeled and cubed',
        '1 tsp olive oil or unsalted butter',
        '2–3 tbsp warm water, breast milk or formula',
      ],
      steps: [
        {
          title: 'Check the fish twice',
          detail:
            'Run a finger across the fillet both ways. Pin bones are fine, sharp and easy to ' +
            'miss, and this is the step not to hurry.',
        },
        {
          title: 'Steam together',
          detail:
            'Sweet potato for 12 minutes, then the salmon on top for a further 6–8 until it ' +
            'flakes. Steaming rather than boiling keeps the fat — and the vitamin D dissolved ' +
            'in it — in the food instead of in the water.',
        },
        {
          title: 'Flake and check again',
          detail: 'Break the salmon apart with a fork and look through it once more for bones.',
        },
        {
          title: 'Mash',
          detail:
            'Mash the sweet potato with the oil, fold the salmon through, and loosen to the ' +
            'texture your baby manages. Serve warm, not hot.',
        },
      ],
      note:
        'Oily fish is on most first-foods lists from around six months, and is also a common ' +
        'allergen — introduce it on its own, early in the day. Official advice limits oily fish ' +
        'to a couple of portions a week for young children. Ask your paediatrician first.',
    },

    sources: [
      { label: 'NIH Office of Dietary Supplements — Vitamin D', url: `${ODS}/VitaminD-HealthProfessional/` },
      {
        label: 'Dietary Reference Intakes for Calcium and Vitamin D',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK56070/',
      },
      { label: 'USDA FoodData Central', url: 'https://fdc.nal.usda.gov/' },
    ],
    updated: '2026-08-25',
  },

  /* ---------------------------------------------------------- vitamin B12 */
  {
    slug: 'vitamin-b12',
    name: 'Vitamin B12',
    family: 'Vitamin',
    title: 'Vitamin B12: only from animals, or from a factory',
    lede:
      'No plant makes B12. Neither does any animal — bacteria make it, and animals accumulate it. ' +
      'That single fact decides everything about who needs to pay attention to it.',
    description:
      'Where vitamin B12 actually comes from, how much you need, why absorption fails with age ' +
      'and medication, and the foods highest in it — ranked from USDA data.',

    whatItDoes: [
      'B12 is needed to finish making red blood cells. Without it they come out large, few and ' +
        'poorly formed — megaloblastic anaemia — and the tiredness that follows is the same ' +
        'tiredness low iron causes, from a completely different mechanism.',
      'It also maintains the myelin sheath around nerves. This is the half that matters most, ' +
        'because nerve damage from long-standing deficiency can become permanent, and it can ' +
        'develop while the blood picture still looks normal.',
      'And it works with folate in the reaction that recycles homocysteine. Taking large amounts ' +
        'of folate can correct the anaemia of B12 deficiency while the nerve damage continues ' +
        'underneath — which is precisely why self-treating with a B-complex is unwise.',
    ],

    intake: [
      { who: 'Infants, 0–6 months', amount: '0.4 µg', note: 'Adequate Intake' },
      { who: 'Infants, 7–12 months', amount: '0.5 µg', note: 'Adequate Intake' },
      { who: 'Children, 1–3 years', amount: '0.9 µg' },
      { who: 'Children, 4–8 years', amount: '1.2 µg' },
      { who: 'Children, 9–13 years', amount: '1.8 µg' },
      { who: 'Adults', amount: '2.4 µg' },
      { who: 'Pregnancy', amount: '2.6 µg' },
      { who: 'Breastfeeding', amount: '2.8 µg' },
    ],
    intakeNote:
      'These are small numbers, and that is misleading. The issue with B12 is almost never how ' +
      'much is on the plate — it is whether the body can still take it off the plate.',

    foodsIntro:
      'Liver and shellfish are so far ahead of everything else that the list is barely a ranking. ' +
      'Note what is absent: no unfortified plant food appears, because none contains it.',

    helps: [
      'Stomach acid and intrinsic factor, the two things that free B12 from food and carry it across the gut',
      'Fortified foods and supplements, where the B12 is already free and does not need stomach acid',
      'Spreading intake across the day — absorption per meal is capped at a couple of micrograms',
    ],
    hinders: [
      'Metformin, taken long term',
      'Proton pump inhibitors and H2 blockers, which reduce the acid needed to release it',
      'Atrophic gastritis, common with age, which reduces intrinsic factor',
      'Gastric or ileal surgery, which removes the tissue that produces or absorbs it',
    ],
    absorptionNote:
      'Spirulina, nori and fermented foods are often listed as plant sources. Most of what they ' +
      'contain are B12 analogues that occupy the receptor without doing the job, and some ' +
      'evidence suggests they can make matters worse rather than better. Anyone eating no animal ' +
      'foods needs a supplement or fortified foods — this is not a matter of dietary preference.',

    shortfall: [
      'Vegans and long-term vegetarians without fortified foods or a supplement',
      'Adults over about fifty, through falling stomach acid',
      'People on metformin or long-term acid suppression',
      'Breastfed infants of mothers who are deficient — stores at birth are low and run out fast',
      'People after bariatric surgery or with Crohn\'s affecting the ileum',
    ],

    recipe: {
      title: 'Chicken liver and apple purée',
      serves: 'From 7 months, once or twice a month at most',
      ingredients: [
        '30 g chicken liver, trimmed',
        '1 small sweet apple, peeled and cored',
        '1 small potato, peeled and cubed',
        '1 tsp unsalted butter or olive oil',
        'Water to loosen',
      ],
      steps: [
        {
          title: 'Trim the liver',
          detail: 'Cut away any pale connective tissue and green-tinged areas. Rinse and pat dry.',
        },
        {
          title: 'Cook the potato and apple',
          detail: 'Simmer together in unsalted water for about 12 minutes until both are soft.',
        },
        {
          title: 'Cook the liver through',
          detail:
            'Gently in the butter for 5–6 minutes, turning, until no pink remains anywhere. ' +
            'Offal is one of the places where "just cooked" is not good enough for a baby.',
        },
        {
          title: 'Blend',
          detail:
            'Everything together, smooth, loosening with the cooking water. The apple is doing ' +
            'real work here — it takes the edge off a strong flavour.',
        },
      ],
      note:
        'Liver is extraordinarily rich in vitamin A as well as B12, and vitamin A accumulates. ' +
        'Twice a month is the usual ceiling for a small child, and liver is not recommended at all ' +
        'in pregnancy for the same reason. Check with your paediatrician before you start.',
    },

    sources: [
      { label: 'NIH Office of Dietary Supplements — Vitamin B12', url: `${ODS}/VitaminB12-HealthProfessional/` },
      {
        label: 'Dietary Reference Intakes for Thiamin, Riboflavin, Niacin, Vitamin B6, Folate, Vitamin B12…',
        url: 'https://www.ncbi.nlm.nih.gov/books/NBK114310/',
      },
      { label: 'USDA FoodData Central', url: 'https://fdc.nal.usda.gov/' },
    ],
    updated: '2026-08-25',
  },
];

/** Look one up by slug. */
export function nutrientBySlug(slug: string): NutrientArticle | undefined {
  return NUTRIENTS.find((n) => n.slug === slug);
}
