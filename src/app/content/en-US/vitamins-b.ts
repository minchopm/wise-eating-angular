import { LocalisedArticle } from '../types';

/** The B vitamins and choline, in English. Numbers live in nutrient-facts.ts. */
export const VITAMINS_B_EN: Readonly<Record<string, LocalisedArticle>> = {
  /* -------------------------------------------------------------- thiamin */
  thiamin: {
    name: 'Thiamin',
    title: 'Thiamin: what happens when a staple food is polished',
    lede:
      'Beriberi appeared across Asia in the nineteenth century, spread by a piece of technology: ' +
      'the machine that strips the bran off rice. The vitamin is in the part that was being ' +
      'thrown away.',
    description:
      'What thiamin (vitamin B1) does, how much you need, why alcohol is the main modern risk, ' +
      'and the foods highest in it — from USDA data.',

    whatItDoes: [
      'Thiamin is the cofactor for the enzymes that let a cell get energy from carbohydrate. ' +
        'Pyruvate dehydrogenase, the step that feeds sugar into the citric acid cycle, does not ' +
        'run without it — so the tissues that depend most on glucose, which are nerve and heart ' +
        'muscle, fail first.',
      'That explains the two classic forms of deficiency. Dry beriberi is neurological: numbness, ' +
        'weakness, difficulty walking. Wet beriberi is cardiac: an enlarged heart and fluid ' +
        'retention.',
      'Wernicke–Korsakoff syndrome is the same deficiency arriving fast, usually in the context ' +
        'of heavy alcohol use, and it can cause permanent memory damage. It is a medical ' +
        'emergency and it is treated with intravenous thiamin before anything else, including ' +
        'glucose — because giving glucose first consumes what little thiamin is left.',
    ],

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake' },
      'infant-7-12': { who: 'Infants, 7–12 months', note: 'Adequate Intake' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'child-9-13': { who: 'Children, 9–13 years' },
      'men-14-plus': { who: 'Men, 14 and over' },
      'women-19-plus': { who: 'Women, 19 and over' },
      pregnancy: { who: 'Pregnancy and breastfeeding' },
    },
    intakeNote:
      'Stores are small — a few weeks’ worth — which is why deficiency can develop faster than ' +
      'for most vitamins. There is no upper limit set, because excess is excreted readily and no ' +
      'harm from food or supplements has been established.',

    foodsIntro:
      'Pork is the standout among common foods. Beyond it: wholegrains, legumes, seeds and, in ' +
      'countries that mandate it, fortified flour — which is the single reason beriberi is rare ' +
      'in the West today.',

    helps: [
      'Wholegrains rather than refined, since milling removes most of it',
      'Fortified flour and cereals, where the law requires them',
      'Legumes and seeds, which are dense in it',
    ],
    hinders: [
      'Alcohol, which impairs absorption and increases loss — the dominant risk factor',
      'Prolonged boiling, since thiamin is water-soluble and heat-sensitive',
      'Raw fish and shellfish in quantity, which contain thiaminase',
      'Long-term high-dose diuretics',
    ],
    absorptionNote:
      'Thiamin dissolves into cooking water and is destroyed by prolonged heat, so a food’s ' +
      'figure in a table is an upper bound rather than a promise. Sulphites, used as ' +
      'preservatives, also degrade it.',

    shortfall: [
      'People with alcohol use disorder — by a wide margin the commonest cause in wealthy countries',
      'People after bariatric surgery',
      'People with prolonged vomiting, including severe morning sickness',
      'People on long-term diuretics for heart failure',
      'Populations dependent on polished rice without fortification',
    ],

    recipe: {
      title: 'Pork and white bean stew with rosemary',
      serves: 'Four, about an hour',
      ingredients: [
        '500 g pork shoulder, cubed',
        '2 tins white beans, drained',
        '1 onion, diced',
        '2 carrots, sliced',
        '3 cloves garlic',
        '1 sprig rosemary',
        '600 ml stock',
        '1 tbsp olive oil',
      ],
      steps: [
        {
          title: 'Brown the pork in batches',
          detail:
            'Two or three batches, not one. A crowded pan drops below searing temperature and ' +
            'the meat boils in its own juice, which is the difference between a stew that tastes ' +
            'of something and one that does not.',
        },
        {
          title: 'Build the base',
          detail:
            'Onion and carrot in the same pan for eight minutes, scraping up everything the pork ' +
            'left behind. That fond is most of the flavour.',
        },
        {
          title: 'Simmer low and long',
          detail:
            'Pork back in, stock, garlic and rosemary. Barely bubbling, lid ajar, forty-five ' +
            'minutes. A rolling boil makes shoulder tough rather than tender.',
        },
        {
          title: 'Beans at the end',
          detail:
            'Last ten minutes only — they are already cooked and longer turns them to mush. ' +
            'Serve with the broth, which holds thiamin that leached out of the meat.',
        },
      ],
      note:
        'Eat the liquid, not just the solids. Thiamin is water-soluble, and a stew keeps what a ' +
        'boil-and-drain would have poured away.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Thiamin',
      dri: 'Dietary Reference Intakes for Thiamin, Riboflavin, Niacin, Vitamin B6, Folate and Vitamin B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ----------------------------------------------------------- riboflavin */
  riboflavin: {
    name: 'Riboflavin',
    title: 'Riboflavin: the vitamin that turns your urine yellow',
    lede:
      'That bright yellow after a multivitamin is riboflavin being excreted, and it is harmless. ' +
      'It is also a useful reminder of what the vitamin is: something the body takes what it ' +
      'needs from and discards the rest of, daily.',
    description:
      'What riboflavin (vitamin B2) does, how much you need, why light destroys it, and the foods ' +
      'highest in it — from USDA data.',

    whatItDoes: [
      'Riboflavin becomes two coenzymes, FAD and FMN, which sit at the centre of the reactions ' +
        'that move electrons around. The electron transport chain — the final stage of extracting ' +
        'energy from food — depends on them directly.',
      'It is also needed to activate other vitamins. Vitamin B6 and folate both require ' +
        'riboflavin-dependent enzymes to reach their working forms, and the enzyme that converts ' +
        'tryptophan into niacin needs it too. A riboflavin shortage therefore produces a ' +
        'functional shortage of several other B vitamins at once.',
      'And it regenerates glutathione, one of the body’s main antioxidants.',
    ],

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake' },
      'infant-7-12': { who: 'Infants, 7–12 months', note: 'Adequate Intake' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'child-9-13': { who: 'Children, 9–13 years' },
      'men-14-plus': { who: 'Men, 14 and over' },
      'women-19-plus': { who: 'Women, 19 and over' },
      pregnancy: { who: 'Pregnancy' },
      breastfeeding: { who: 'Breastfeeding' },
    },

    foodsIntro:
      'Dairy, eggs, organ meats and green vegetables. Milk is the largest single contributor in ' +
      'most Western diets, which is why the packaging matters more than it sounds.',

    helps: [
      'Opaque packaging — this is a real effect, not a technicality',
      'Dairy, eggs and green vegetables eaten regularly',
      'Fortified cereals and flour where mandated',
    ],
    hinders: [
      'Light. Milk left in a glass bottle in sunlight loses a large share within hours',
      'Boiling and discarding the water',
      'Some psychiatric and cancer medications, which interfere with its metabolism',
    ],
    absorptionNote:
      'Riboflavin is remarkably stable to heat and remarkably unstable to light — the opposite of ' +
      'vitamin C. The move from glass milk bottles on doorsteps to opaque cartons was, ' +
      'incidentally, a nutritional improvement.',

    shortfall: [
      'People who consume no dairy and few green vegetables',
      'Vegans without fortified foods',
      'People with alcohol use disorder',
      'Pregnant and breastfeeding women with limited diets',
    ],

    recipe: {
      title: 'Mushroom and spinach frittata',
      serves: 'Two to three, twenty minutes',
      ingredients: [
        '6 eggs',
        '250 g mushrooms, sliced',
        '150 g spinach',
        '40 g hard cheese, grated',
        '2 tbsp olive oil',
        'Black pepper',
      ],
      steps: [
        {
          title: 'Cook the mushrooms dry first',
          detail:
            'Hot pan, no oil, until they have released their water and it has evaporated. Oil ' +
            'first and they stew in it and never brown.',
        },
        {
          title: 'Wilt and drain the spinach',
          detail:
            'In the same pan, a minute, then squeeze it out. Wet spinach makes a watery frittata ' +
            'that will not set properly.',
        },
        {
          title: 'Low heat, most of the way',
          detail:
            'Oil in, eggs beaten with the cheese and pepper, then the lowest heat for eight to ' +
            'ten minutes. High heat makes it rubbery at the bottom and raw on top.',
        },
        {
          title: 'Finish under the grill',
          detail: 'Two minutes, until the surface is just set and lightly coloured.',
        },
      ],
      note:
        'Eggs, mushrooms and cheese are three of the better riboflavin sources, and mushrooms ' +
        'contribute vitamin D as well if they have been exposed to UV.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Riboflavin',
      dri: 'Dietary Reference Intakes for Thiamin, Riboflavin, Niacin, Vitamin B6, Folate and Vitamin B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* --------------------------------------------------------------- niacin */
  niacin: {
    name: 'Niacin',
    title: 'Niacin: the vitamin your body can make, if it has enough protein',
    lede:
      'Unusually, you can build niacin from tryptophan — an amino acid in protein. That is why ' +
      'pellagra struck maize-eating populations and not the people whose staple was wheat.',
    description:
      'What niacin (vitamin B3) does, how the body makes it from tryptophan, why nixtamalisation ' +
      'mattered, and the foods highest in it — from USDA data.',

    whatItDoes: [
      'Niacin becomes NAD and NADP, which are the carriers that move hydrogen and electrons ' +
        'through hundreds of reactions. NAD is involved in more enzymatic steps than almost any ' +
        'other molecule in the body.',
      'Deficiency produces pellagra: dermatitis on sun-exposed skin, diarrhoea, and dementia. It ' +
        'killed tens of thousands in the American South in the early twentieth century before the ' +
        'cause was understood.',
      'The historical detail is worth knowing. Maize contains niacin in a bound form the gut ' +
        'cannot release. Mesoamerican cultures had for millennia soaked maize in lime water — ' +
        'nixtamalisation — which frees it. Maize was exported to Europe and America without the ' +
        'technique, and pellagra followed.',
    ],

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake, as preformed niacin' },
      'infant-7-12': { who: 'Infants, 7–12 months', note: 'Adequate Intake' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'child-9-13': { who: 'Children, 9–13 years' },
      'men-14-plus': { who: 'Men, 14 and over' },
      'women-14-plus': { who: 'Women, 14 and over' },
      pregnancy: { who: 'Pregnancy' },
      breastfeeding: { who: 'Breastfeeding' },
    },
    intakeNote:
      'NE means niacin equivalents: 1 mg of niacin, or 60 mg of tryptophan, which the body ' +
      'converts at roughly that ratio. A diet with adequate protein therefore supplies a large ' +
      'share of its own niacin without any niacin being present.',

    foodsIntro:
      'Meat, fish and poultry lead, then wholegrains, legumes and seeds. Remember that the table ' +
      'counts preformed niacin only — a high-protein food is contributing more than its number ' +
      'shows.',

    helps: [
      'Adequate protein, which supplies tryptophan the body converts',
      'Nixtamalised maize — masa, tortillas — rather than plain cornmeal',
      'Adequate riboflavin, B6 and iron, all of which the conversion pathway needs',
    ],
    hinders: [
      'Untreated maize as a staple, where the niacin is bound and unavailable',
      'Low protein intake, which removes the tryptophan route',
      'Carcinoid syndrome, which diverts tryptophan elsewhere',
      'Isoniazid, used for tuberculosis, which interferes with the conversion',
    ],
    absorptionNote:
      'High-dose nicotinic acid — a gram or more, prescribed historically for cholesterol — ' +
      'causes an intense flushing of the face and chest, and at those doses can damage the liver. ' +
      'That is a pharmacological effect at hundreds of times the dietary requirement, and has ' +
      'nothing to do with niacin from food.',

    shortfall: [
      'Populations dependent on untreated maize or sorghum',
      'People with alcohol use disorder',
      'People with carcinoid syndrome or Hartnup disease',
      'People on long-term isoniazid without supplementation',
    ],

    recipe: {
      title: 'Chicken thighs with paprika and tomatoes',
      serves: 'Four, forty minutes',
      ingredients: [
        '8 chicken thighs, bone in, skin on',
        '2 tsp smoked paprika',
        '1 tin chopped tomatoes',
        '1 onion, sliced',
        '4 cloves garlic, whole',
        '1 tbsp olive oil',
        'A handful of parsley',
      ],
      steps: [
        {
          title: 'Dry the skin',
          detail:
            'Kitchen paper, thoroughly, then season. Damp skin steams instead of crisping and ' +
            'you cannot fix it later.',
        },
        {
          title: 'Render skin side down',
          detail:
            'Cold pan, medium heat, eight minutes without moving them. Starting cold lets the ' +
            'fat render out before the skin sets, which is what makes it crisp rather than ' +
            'leathery.',
        },
        {
          title: 'Paprika off the heat',
          detail:
            'Onion softened in the rendered fat, then the pan off the heat before the paprika ' +
            'goes in. It burns in seconds over direct heat and turns bitter.',
        },
        {
          title: 'Braise skin side up',
          detail:
            'Tomatoes and garlic in, chicken back on top with the skin above the liquid, 25 ' +
            'minutes at 190°C. Parsley at the end.',
        },
      ],
      note:
        'Chicken supplies both preformed niacin and the tryptophan the body converts into more of ' +
        'it, which is why poultry covers this requirement so comfortably.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Niacin',
      dri: 'Dietary Reference Intakes for Thiamin, Riboflavin, Niacin, Vitamin B6, Folate and Vitamin B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ----------------------------------------------------- pantothenic acid */
  'pantothenic-acid': {
    name: 'Pantothenic acid',
    title: 'Pantothenic acid: named after the Greek for “from everywhere”',
    lede:
      'The name is a description of where it is found, which is essentially all food. Isolated ' +
      'deficiency has been produced experimentally and is otherwise close to unknown.',
    description:
      'What pantothenic acid (vitamin B5) does, how much you need, why deficiency is almost ' +
      'unheard of, and the foods highest in it — from USDA data.',

    whatItDoes: [
      'Pantothenic acid is the backbone of coenzyme A, which is the molecule that carries acetyl ' +
        'groups. Every fat that gets broken down, every fatty acid that gets built, and the entry ' +
        'point of the citric acid cycle all run through acetyl-CoA.',
      'It is also part of acyl carrier protein, which holds a growing fatty acid chain while it ' +
        'is being assembled.',
      'Because coenzyme A sits at a junction where carbohydrate, fat and protein metabolism all ' +
        'meet, there is no tidy set of deficiency symptoms — everything slows at once.',
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
      'All Adequate Intakes. No RDA has been set and no upper limit either, because neither ' +
      'deficiency nor excess from food has produced enough evidence to define one.',

    foodsIntro:
      'Liver, mushrooms, avocado, eggs, sunflower seeds and wholegrains — but the honest summary ' +
      'is that the range across ordinary foods is narrow, which is what the name is telling you.',

    helps: ['Eating varied whole foods, which is the entire strategy'],
    hinders: [
      'Heavy processing and refining, which removes a substantial share',
      'Prolonged boiling',
      'Alcohol use disorder, as for the other B vitamins',
    ],
    absorptionNote:
      'The interesting failure mode is not dietary. "Burning feet syndrome" was described in ' +
      'prisoners of war in the Second World War and responded to pantothenic acid specifically, ' +
      'which is most of what is known about isolated human deficiency.',

    shortfall: [
      'Almost nobody, from an ordinary diet',
      'People with severe malnutrition generally, alongside other deficiencies',
      'People with alcohol use disorder',
    ],

    recipe: {
      title: 'Mushrooms on toast with a soft egg',
      serves: 'One, twelve minutes',
      ingredients: [
        '200 g mixed mushrooms, torn',
        '1 egg',
        '1 thick slice of sourdough',
        '1 tbsp butter',
        '1 clove garlic',
        'Thyme leaves',
        'Black pepper',
      ],
      steps: [
        {
          title: 'Tear, do not slice',
          detail:
            'Torn edges are rough and catch more heat, which browns better than the smooth face ' +
            'a knife leaves.',
        },
        {
          title: 'Hot and dry to start',
          detail:
            'Mushrooms into a hot dry pan in one layer. They will release water; wait for it to ' +
            'go before the butter does in.',
        },
        {
          title: 'Butter, garlic, thyme',
          detail:
            'Once dry and starting to colour. Two minutes more, and the garlic grated rather ' +
            'than chopped so it disappears into the butter.',
        },
        {
          title: 'Soft egg on top',
          detail: 'Fried gently or poached, over the mushrooms on toast rubbed with the garlic stub.',
        },
      ],
      note:
        'Mushrooms and eggs are both among the better sources, and this is a five-ingredient meal ' +
        'that happens to be one.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Pantothenic Acid',
      dri: 'Dietary Reference Intakes for Thiamin, Riboflavin, Niacin, Vitamin B6, Folate and Vitamin B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ----------------------------------------------------------- vitamin B6 */
  'vitamin-b6': {
    name: 'Vitamin B6',
    title: 'Vitamin B6: essential, and the one B vitamin with a real upper limit',
    lede:
      'It runs more than a hundred enzyme reactions, almost all of them involving amino acids. It ' +
      'is also the only water-soluble vitamin where long-term high supplement doses are known to ' +
      'cause nerve damage.',
    description:
      'What vitamin B6 does, how much you need by age, why high-dose supplements can harm nerves, ' +
      'and the foods highest in it — from USDA data.',

    whatItDoes: [
      'Its active form, pyridoxal phosphate, is the cofactor for the enzymes that move amino ' +
        'groups around. That means it is involved in building and breaking down essentially every ' +
        'amino acid — more than a hundred reactions in total.',
      'Several of those reactions make neurotransmitters: serotonin, dopamine, GABA. It is also ' +
        'needed for the first step of haem synthesis, which is why deficiency can cause a ' +
        'microcytic anaemia that looks like iron deficiency.',
      'And it works with folate and B12 to clear homocysteine.',
    ],

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake' },
      'infant-7-12': { who: 'Infants, 7–12 months', note: 'Adequate Intake' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'child-9-13': { who: 'Children, 9–13 years' },
      'adults-19-50': { who: 'Adults, 19–50' },
      'men-51-plus': { who: 'Men, 51 and over' },
      'women-51-plus': { who: 'Women, 51 and over' },
      pregnancy: { who: 'Pregnancy' },
    },
    intakeNote:
      'The upper limit for adults is 100 mg a day. Supplements sold at 50–100 mg are common, and ' +
      'sustained intake at or above that has produced peripheral neuropathy — numbness and ' +
      'unsteadiness, sometimes only partly reversible. This is the clearest example of a ' +
      'water-soluble vitamin that is not harmless in excess.',

    foodsIntro:
      'Fish, poultry, organ meats, potatoes, chickpeas and bananas. It is widely distributed, ' +
      'which is why frank deficiency usually points at a medication or a malabsorption problem ' +
      'rather than at the diet.',

    helps: [
      'Eating it from food rather than from high-dose supplements',
      'Adequate riboflavin, which is needed to activate it',
      'Minimally processed foods — refining removes a large share',
    ],
    hinders: [
      'Isoniazid, penicillamine and some other drugs, which bind it directly',
      'Prolonged cooking and food processing',
      'Alcohol use disorder',
      'Kidney disease and dialysis',
    ],
    absorptionNote:
      'If a supplement is prescribed alongside isoniazid, that is deliberate and appropriate — ' +
      'the drug depletes B6 and the supplement prevents neuropathy from the drug. The risk ' +
      'described above is unsupervised long-term high doses, not that.',

    shortfall: [
      'People on isoniazid, cycloserine or penicillamine',
      'People with kidney disease or on dialysis',
      'People with autoimmune conditions such as rheumatoid arthritis or coeliac disease',
      'People with alcohol use disorder',
    ],

    recipe: {
      title: 'Chickpea, potato and tuna salad',
      serves: 'Two, twenty minutes',
      ingredients: [
        '400 g new potatoes, halved',
        '1 tin chickpeas, drained',
        '1 tin tuna, drained',
        '2 spring onions, sliced',
        '2 tbsp olive oil',
        '1 tbsp red wine vinegar',
        '1 tsp Dijon mustard',
        'Parsley',
      ],
      steps: [
        {
          title: 'Start the potatoes in cold water',
          detail:
            'Cold, salted, then brought to a simmer. Dropping potatoes into boiling water cooks ' +
            'the outside before the middle and they break up.',
        },
        {
          title: 'Do not overboil',
          detail:
            'Fifteen minutes, until a knife just goes in. B6 is water-soluble, and every extra ' +
            'minute is more of it in the pan rather than in the food.',
        },
        {
          title: 'Dress hot',
          detail:
            'Vinegar, mustard and oil whisked and poured over the drained potatoes immediately, ' +
            'so they absorb rather than repel it.',
        },
        {
          title: 'Fold in the rest',
          detail: 'Chickpeas, tuna, spring onion and parsley, gently, once the potatoes have cooled a little.',
        },
      ],
      note:
        'Potatoes, chickpeas and tuna are three of the better B6 sources and they happen to make ' +
        'a good lunch, which is not always how these things work out.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamin B6',
      dri: 'Dietary Reference Intakes for Thiamin, Riboflavin, Niacin, Vitamin B6, Folate and Vitamin B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ---------------------------------------------------------- vitamin B12 */
  'vitamin-b12': {
    name: 'Vitamin B12',
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

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake' },
      'infant-7-12': { who: 'Infants, 7–12 months', note: 'Adequate Intake' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'child-9-13': { who: 'Children, 9–13 years' },
      adults: { who: 'Adults' },
      pregnancy: { who: 'Pregnancy' },
      breastfeeding: { who: 'Breastfeeding' },
    },
    intakeNote:
      'These are small numbers, and that is misleading. The issue with B12 is almost never how ' +
      'much is on the plate — it is whether the body can still take it off the plate.',

    foodsIntro:
      'Liver and shellfish are so far ahead of everything else that the list is barely a ranking. ' +
      'Note what is absent: no unfortified plant food appears, because none contains it.',

    helps: [
      'Stomach acid and intrinsic factor, which free B12 from food and carry it across the gut',
      'Fortified foods and supplements, where the B12 is already free',
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
      'People after bariatric surgery or with Crohn’s affecting the ileum',
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
        'Twice a month is the usual ceiling for a small child, and liver is not recommended at ' +
        'all in pregnancy for the same reason. Check with your paediatrician before you start.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamin B12',
      dri: 'Dietary Reference Intakes for Thiamin, Riboflavin, Niacin, Vitamin B6, Folate and Vitamin B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* --------------------------------------------------------------- folate */
  folate: {
    name: 'Folate',
    title: 'Folate: the vitamin that has to be there before you know you need it',
    lede:
      'The neural tube closes within the first 28 days of pregnancy — often before a woman knows ' +
      'she is pregnant. That single piece of timing is why folate is fortified into flour in more ' +
      'than eighty countries.',
    description:
      'Folate versus folic acid, how much you need, why the timing in pregnancy is everything, ' +
      'and the foods highest in it — from USDA data.',

    whatItDoes: [
      'Folate carries single-carbon units around, and the reactions that need them are the ones ' +
        'that build DNA. Any tissue dividing quickly — bone marrow, gut lining, a growing embryo ' +
        '— depends on a steady supply.',
      'Without it, cells begin division and cannot finish. In marrow this produces megaloblastic ' +
        'anaemia, the same picture B12 deficiency causes, because B12 and folate meet in the same ' +
        'reaction.',
      'In an embryo, the failure is structural. The neural tube — which becomes the brain and ' +
        'spinal cord — closes between days 21 and 28 after conception. Adequate folate at that ' +
        'moment substantially reduces the risk of spina bifida and anencephaly. Adequate folate ' +
        'two months later does not help.',
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
      'DFE means dietary folate equivalents, which exist because folic acid from supplements and ' +
      'fortified food is absorbed roughly 1.7 times better than folate from food. Public health ' +
      'guidance in most countries is that anyone who could become pregnant takes 400 µg of folic ' +
      'acid daily — not once pregnant, but beforehand, precisely because of the timing above.',

    foodsIntro:
      'The name comes from folium, Latin for leaf, and the ranking bears it out: leafy greens, ' +
      'legumes, liver and — where the law requires it — fortified flour.',

    helps: [
      'Eating greens raw or lightly cooked, since folate is heat-sensitive',
      'Legumes, which are dense in it and keep it better than leaves do',
      'Fortified flour and cereals, where mandated',
    ],
    hinders: [
      'Prolonged boiling, which can destroy or leach away most of it',
      'Alcohol, which impairs absorption and increases excretion',
      'Methotrexate and some anticonvulsants, which are folate antagonists',
      'Coeliac disease and other malabsorption',
    ],
    absorptionNote:
      'One caution about supplements. High folic acid intake can mask the anaemia of B12 ' +
      'deficiency while the neurological damage progresses unnoticed — which is why the upper ' +
      'limit of 1,000 µg for adults exists, and why a B-complex is a poor way to self-treat ' +
      'tiredness.',

    shortfall: [
      'Anyone who could become pregnant and is not supplementing',
      'People with alcohol use disorder',
      'People on methotrexate, sulfasalazine or certain anticonvulsants',
      'People with coeliac disease or inflammatory bowel disease',
    ],

    recipe: {
      title: 'Warm lentil salad with asparagus and soft egg',
      serves: 'Two, twenty-five minutes',
      ingredients: [
        '150 g Puy lentils',
        '250 g asparagus, woody ends snapped off',
        '2 eggs',
        '2 tbsp olive oil',
        '1 tbsp sherry vinegar',
        '1 shallot, finely diced',
        'A handful of parsley',
      ],
      steps: [
        {
          title: 'Simmer the lentils, do not boil them',
          detail:
            'Twenty minutes at a bare simmer in unsalted water. A rolling boil splits their ' +
            'skins and you end up with soup.',
        },
        {
          title: 'Steam the asparagus briefly',
          detail:
            'Three to four minutes, still with a bite. Folate is one of the most heat-fragile ' +
            'vitamins, and asparagus boiled to softness has given most of it up.',
        },
        {
          title: 'Soft-boil the eggs',
          detail: 'Six and a half minutes from boiling, then into cold water and peeled carefully.',
        },
        {
          title: 'Dress warm',
          detail:
            'Shallot, vinegar and oil over the drained lentils while still hot; asparagus and ' +
            'parsley folded in; eggs halved on top.',
        },
      ],
      note:
        'Lentils, asparagus and egg yolk are all strong folate sources. Keeping the cooking short ' +
        'is not fussiness here — it is most of the difference between the number on the label and ' +
        'the number on the plate.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Folate',
      dri: 'Dietary Reference Intakes for Thiamin, Riboflavin, Niacin, Vitamin B6, Folate and Vitamin B12',
      fdc: 'USDA FoodData Central',
    },
  },

  /* -------------------------------------------------------------- choline */
  choline: {
    name: 'Choline',
    title: 'Choline: recognised as essential only in 1998',
    lede:
      'It was assumed for decades that the body made enough of its own. It does make some — just ' +
      'not enough — and most adults take in less than the recommendation, which was only ' +
      'published in 1998.',
    description:
      'What choline does for membranes, memory and the liver, how much you need, and the foods ' +
      'highest in it — from USDA data.',

    whatItDoes: [
      'Choline is the head group of phosphatidylcholine, which is the main phospholipid in every ' +
        'cell membrane you have. Structurally it is one of the materials the body is built from ' +
        'rather than a catalyst.',
      'It is also the precursor of acetylcholine, the neurotransmitter of memory, attention and ' +
        'every voluntary muscle contraction.',
      'And it is needed to export fat from the liver as VLDL. Without enough, fat accumulates ' +
        'there — choline deficiency reliably produces fatty liver in controlled studies, which is ' +
        'how the requirement was established in the first place.',
    ],

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake' },
      'infant-7-12': { who: 'Infants, 7–12 months', note: 'Adequate Intake' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'child-9-13': { who: 'Children, 9–13 years' },
      'men-14-plus': { who: 'Men, 14 and over' },
      'women-14-plus': { who: 'Women, 14 and over' },
      pregnancy: { who: 'Pregnancy' },
      breastfeeding: { who: 'Breastfeeding' },
    },
    intakeNote:
      'All Adequate Intakes. Most national surveys find average intake well below them, ' +
      'particularly in people who do not eat eggs — and requirements in pregnancy are higher ' +
      'because the foetal brain draws heavily on maternal supply.',

    foodsIntro:
      'Egg yolk and liver dominate. Beyond them, meat, fish, soy, cruciferous vegetables and ' +
      'beans contribute, but nothing comes close to the first two.',

    helps: [
      'Eating whole eggs rather than whites — essentially all the choline is in the yolk',
      'Liver, occasionally, which is the densest source there is',
      'Soy, cruciferous vegetables and beans for people who avoid both',
    ],
    hinders: [
      'Discarding yolks, which removes almost all of the choline from an egg',
      'Low folate intake, since the two pathways partly substitute for each other',
      'Certain genetic variants that raise individual requirement substantially',
    ],
    absorptionNote:
      'Gut bacteria convert some dietary choline into TMAO, a compound associated in ' +
      'observational studies with cardiovascular risk. The evidence is not settled and does not ' +
      'currently support avoiding choline-rich foods — but it is why you will see the topic ' +
      'argued about, and why "more is better" is not the conclusion to draw.',

    shortfall: [
      'People who avoid eggs and organ meats',
      'Pregnant women, whose requirement rises and whose intake often does not',
      'Postmenopausal women, who lose the oestrogen-driven boost to internal synthesis',
      'People with certain common genetic variants in the synthesis pathway',
    ],

    recipe: {
      title: 'Shakshuka with whole eggs',
      serves: 'Two, twenty-five minutes',
      ingredients: [
        '4 eggs',
        '1 tin chopped tomatoes',
        '1 red pepper, sliced',
        '1 onion, sliced',
        '2 cloves garlic',
        '1 tsp cumin',
        '1 tsp paprika',
        '2 tbsp olive oil',
        'Parsley or coriander',
      ],
      steps: [
        {
          title: 'Cook the base down properly',
          detail:
            'Onion and pepper for ten minutes, then tomatoes for another ten until thick enough ' +
            'that a spoon leaves a trail. A watery base will not hold the eggs where you put them.',
        },
        {
          title: 'Make wells',
          detail:
            'Press four hollows with the back of a spoon and crack an egg into each. Whole eggs ' +
            '— the yolk is where essentially all the choline is.',
        },
        {
          title: 'Lid on, heat low',
          detail:
            'Six to eight minutes. You want the whites set and the yolks still soft; the lid ' +
            'cooks the tops without overcooking the bottoms.',
        },
        {
          title: 'Herbs at the table',
          detail: 'Scattered on after it comes off the heat, so they stay green.',
        },
      ],
      note:
        'Four yolks between two people covers a substantial share of a day’s choline, which is ' +
        'difficult to do any other way without eating liver.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Choline',
      dri: 'Dietary Reference Intakes for Thiamin, Riboflavin, Niacin, Vitamin B6, Folate, Vitamin B12 and Choline',
      fdc: 'USDA FoodData Central',
    },
  },
};
