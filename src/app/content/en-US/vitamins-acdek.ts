import { LocalisedArticle } from '../types';

/** Vitamins A, C, D, E and K, in English. Numbers live in nutrient-facts.ts. */
export const VITAMINS_ACDEK_EN: Readonly<Record<string, LocalisedArticle>> = {
  /* ------------------------------------------------------------ vitamin A */
  'vitamin-a': {
    name: 'Vitamin A',
    title: 'Vitamin A: two different things under one name',
    lede:
      'Retinol from animal food and carotenoids from plants are both called vitamin A, and they ' +
      'behave nothing alike. One accumulates and can reach toxic levels; the other is converted ' +
      'only as needed and essentially cannot.',
    description:
      'Retinol versus carotenoids, how much vitamin A you need by age, why the upper limit ' +
      'matters in pregnancy, and the foods highest in it — from USDA data.',

    whatItDoes: [
      'The classic role is vision. Retinal, a form of vitamin A, binds to a protein in the retina ' +
        'to make rhodopsin, and rhodopsin is what changes shape when a photon hits it. Night ' +
        'blindness is the earliest functional sign of deficiency for exactly this reason, and ' +
        'globally vitamin A deficiency remains a leading cause of preventable childhood blindness.',
      'Less famously, it regulates gene expression. Retinoic acid binds receptors in the nucleus ' +
        'and switches on genes that control how epithelial cells differentiate — skin, gut ' +
        'lining, the airways. This is why deficiency shows up as dry skin and repeated infection ' +
        'as much as it shows up in the eye.',
      'It is also required for immune cell development and for normal foetal development, which ' +
        'is the source of both its importance and its hazard in pregnancy.',
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
      'upper-limit': {
        who: 'Upper limit, adults',
        note: 'Preformed retinol only — carotenoids are not counted',
      },
    },
    intakeNote:
      'RAE means retinol activity equivalents, which is the unit that makes retinol and ' +
      'carotenoids comparable: 1 µg RAE is 1 µg of retinol, or 12 µg of beta-carotene. Older ' +
      'sources use International Units and some use "IU" and "RE" interchangeably, which they are ' +
      'not. If a label gives IU, the conversion depends on the form.',

    foodsIntro:
      'Liver is at the top by a distance that makes the rest of the list look flat, and that is ' +
      'the practical warning as much as the finding. Below it, orange and dark green vegetables ' +
      'carry carotenoids, which the body converts as it needs them.',

    helps: [
      'Fat in the same meal — both forms are fat-soluble and a fat-free salad absorbs little',
      'Cooking and chopping vegetables, which breaks cell walls and releases carotenoids',
      'Adequate zinc, which is needed to mobilise vitamin A from liver stores',
    ],
    hinders: [
      'Very low-fat diets',
      'Fat malabsorption — coeliac disease, pancreatic insufficiency, cystic fibrosis',
      'Zinc deficiency, which can produce functional vitamin A deficiency despite adequate intake',
    ],
    absorptionNote:
      'The asymmetry is the thing to remember. Preformed retinol is absorbed at 70–90% and stored ' +
      'in the liver, so excess accumulates: chronic high intake causes headaches, liver damage ' +
      'and bone loss, and high intake in early pregnancy is teratogenic. Beta-carotene is ' +
      'absorbed far less efficiently and converted only as required — eat enough carrots to turn ' +
      'your palms orange and you have caused a cosmetic effect, not a toxicity.',

    shortfall: [
      'Populations relying on staple grains with few vegetables or animal foods',
      'People with fat malabsorption of any cause',
      'Premature infants, who are born with small stores',
      'People with severe liver disease, where storage and release both fail',
    ],

    recipe: {
      title: 'Roast carrot and sweet potato soup',
      serves: 'Four, about forty-five minutes',
      ingredients: [
        '500 g carrots, halved lengthways',
        '400 g sweet potato, cubed',
        '1 onion, quartered',
        '3 tbsp olive oil',
        '1 tsp ground cumin',
        '900 ml stock',
        '2 tbsp full-fat yoghurt or cream, to serve',
      ],
      steps: [
        {
          title: 'Roast rather than boil',
          detail:
            '200°C, 35 minutes, until the edges have caught. Roasting concentrates the sugars ' +
            'and the flavour; boiling dilutes both into water you will then have to season back.',
        },
        {
          title: 'Use the oil generously',
          detail:
            'Three tablespoons sounds like a lot for vegetables. Carotenoids are fat-soluble and ' +
            'a fat-free version of this soup delivers a fraction of the vitamin A.',
        },
        {
          title: 'Toast the cumin',
          detail:
            'Thirty seconds in the dry pan before it goes near liquid. Ground spice added to ' +
            'stock tastes dusty; the same spice bloomed in heat does not.',
        },
        {
          title: 'Blend and finish',
          detail:
            'Stock in, ten minutes at a simmer, then blend smooth. A spoon of yoghurt at the ' +
            'table is not only decoration — the fat helps absorption too.',
        },
      ],
      note:
        'This recipe uses carotenoids rather than retinol deliberately. If you are pregnant, ' +
        'liver and high-dose retinol supplements are the forms to avoid; orange vegetables are ' +
        'not.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamin A',
      dri: 'Dietary Reference Intakes for Vitamin A, Vitamin K, Iron, Zinc and others',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------------ vitamin C */
  'vitamin-c': {
    name: 'Vitamin C',
    title: 'Vitamin C: less about colds than about collagen',
    lede:
      'The evidence that it prevents colds is weak and has been for fifty years. The evidence ' +
      'that without it your body cannot build connective tissue is absolute — that is what ' +
      'scurvy is.',
    description:
      'What vitamin C actually does, how much you need, why it multiplies iron absorption, and ' +
      'the foods highest in it — ranked from USDA data.',

    whatItDoes: [
      'Vitamin C is the cofactor for the enzymes that hydroxylate proline and lysine in collagen. ' +
        'Without that step the collagen triple helix does not hold, and connective tissue ' +
        'throughout the body loses integrity — bleeding gums, poor wound healing, joint pain. ' +
        'That is scurvy, and it is not a historical curiosity: it still appears in people with ' +
        'very restricted diets.',
      'It is also the body’s main water-soluble antioxidant, and it regenerates vitamin E after ' +
        'vitamin E has neutralised a radical in a membrane. The two work as a pair across the ' +
        'boundary between watery and fatty compartments.',
      'And it reduces dietary iron from the ferric to the ferrous form, which is the form the gut ' +
        'can absorb. This is the single most useful practical fact about it.',
    ],

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake' },
      'infant-7-12': { who: 'Infants, 7–12 months', note: 'Adequate Intake' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'child-9-13': { who: 'Children, 9–13 years' },
      'men-19-plus': { who: 'Men, 19 and over' },
      'women-19-plus': { who: 'Women, 19 and over' },
      smokers: { who: 'Smokers', note: 'Added to the figure for age and sex' },
      pregnancy: { who: 'Pregnancy' },
      breastfeeding: { who: 'Breastfeeding' },
    },
    intakeNote:
      'Plasma saturates at around 200 mg a day; beyond that the kidney excretes the rest and the ' +
      'commonly sold 1,000 mg tablet mostly produces expensive urine. Very high doses can cause ' +
      'diarrhoea and, in susceptible people, kidney stones.',

    foodsIntro:
      'Citrus has the reputation; peppers, blackcurrants and acerola have the numbers. A red bell ' +
      'pepper carries roughly three times the vitamin C of an orange for the same weight.',

    helps: [
      'Eating it raw where the food allows — it is the most heat-sensitive vitamin there is',
      'Steaming rather than boiling, and keeping the cooking water if you boil',
      'Buying and eating fresh produce sooner, since content falls during storage',
    ],
    hinders: [
      'Heat, light, air and time — all four degrade it',
      'Boiling and draining, which can lose more than half',
      'Smoking, which raises turnover enough to change the recommendation',
    ],
    absorptionNote:
      'Absorption is nearly complete at ordinary intakes and falls sharply above about 1 g, which ' +
      'is the body regulating. The interaction worth building meals around is iron: vitamin C in ' +
      'the same meal can multiply the absorption of non-heme iron several times over, which makes ' +
      'lemon on lentils a nutritional act rather than a culinary one.',

    shortfall: [
      'People eating very few fruits or vegetables — the classic modern scurvy risk',
      'Smokers, who need an extra 35 mg a day',
      'People with severe malabsorption or on dialysis',
      'Infants fed unmodified cow’s milk, which is very low in it',
    ],

    recipe: {
      title: 'Raw red pepper and tomato salad with parsley',
      serves: 'Two, ten minutes, no heat at all',
      ingredients: [
        '2 red bell peppers, deseeded and sliced thin',
        '2 ripe tomatoes, wedged',
        'A large bunch of flat-leaf parsley, chopped',
        'Half a red onion, sliced paper-thin',
        '2 tbsp olive oil',
        'Juice of one lemon',
        'Black pepper',
      ],
      steps: [
        {
          title: 'Nothing gets cooked',
          detail:
            'That is the whole design. Vitamin C is destroyed by heat faster than any other ' +
            'vitamin, and a raw pepper carries several times the vitamin C of a roasted one.',
        },
        {
          title: 'Soak the onion',
          detail:
            'Sliced thin, in cold water for ten minutes, then drained. This takes the harshness ' +
            'out without cooking it.',
        },
        {
          title: 'Use the whole bunch of parsley',
          detail:
            'Parsley is not a garnish here — weight for weight it carries more vitamin C than a ' +
            'lemon, and a large bunch is a real contribution rather than a decoration.',
        },
        {
          title: 'Dress at the table',
          detail:
            'Oil, lemon and pepper mixed in just before eating. Dressed early, the salt and acid ' +
            'draw water out and the peppers go limp.',
        },
      ],
      note:
        'Serve this alongside lentils, beans or a wholegrain and the vitamin C will multiply how ' +
        'much iron you absorb from them. That pairing is the most useful thing on this page.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamin C',
      dri: 'Dietary Reference Intakes for Vitamin C, Vitamin E, Selenium and Carotenoids',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------------ vitamin D */
  'vitamin-d': {
    name: 'Vitamin D',
    title: 'Vitamin D: the one you mostly do not eat',
    lede:
      'Almost every other nutrient comes from food. This one is made in your skin from sunlight, ' +
      'which is why the advice about it changes with latitude, season and how much of the year ' +
      'you spend indoors.',
    description:
      'Why vitamin D is different from every other vitamin, how much you need by age, and the few ' +
      'foods that actually contain it — ranked from USDA data.',

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

    intake: {
      'infant-0-12': { who: 'Infants, 0–12 months', note: 'Adequate Intake' },
      'age-1-70': { who: 'Children and adults, 1–70' },
      'age-71-plus': { who: 'Adults, 71 and over' },
      pregnancy: { who: 'Pregnancy and breastfeeding' },
    },
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
      'People with fat malabsorption — coeliac disease, Crohn’s, after bariatric surgery',
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
            'flakes. Steaming rather than boiling keeps the fat — and the vitamin D dissolved in ' +
            'it — in the food instead of in the water.',
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

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamin D',
      dri: 'Dietary Reference Intakes for Calcium and Vitamin D',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------------ vitamin E */
  'vitamin-e': {
    name: 'Vitamin E',
    title: 'Vitamin E: the one that protects the fats you are made of',
    lede:
      'Cell membranes are built from fats, and fats go rancid. Vitamin E is the molecule that ' +
      'sits in the membrane and stops the chain reaction before it spreads.',
    description:
      'What vitamin E does in cell membranes, how much you need, why supplements have ' +
      'disappointed, and the foods highest in it — from USDA data.',

    whatItDoes: [
      'Every cell membrane is a double layer of fatty acids, and polyunsaturated ones oxidise ' +
        'readily. Once one does, it produces a radical that attacks the next — a chain reaction ' +
        'that would take a membrane apart. Alpha-tocopherol sits within the membrane and ' +
        'terminates that chain.',
      'Having done so it is itself oxidised, and vitamin C regenerates it. The two vitamins are a ' +
        'relay across the fatty and watery compartments of a cell, which is why they are almost ' +
        'always discussed together.',
      'There are eight naturally occurring forms, but human tissue selectively retains ' +
        'alpha-tocopherol; the liver has a transfer protein specifically for it and lets the ' +
        'others go. That is why the requirement is written in alpha-tocopherol and not in ' +
        '"vitamin E".',
    ],

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake' },
      'infant-7-12': { who: 'Infants, 7–12 months', note: 'Adequate Intake' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'child-9-13': { who: 'Children, 9–13 years' },
      'adults-14-plus': { who: 'Ages 14 and over' },
      breastfeeding: { who: 'Breastfeeding' },
    },
    intakeNote:
      'Requirement rises with polyunsaturated fat intake, since that is what vitamin E is ' +
      'protecting. Conveniently, the foods highest in polyunsaturated fat — seeds, nuts, ' +
      'vegetable oils — are also the foods highest in vitamin E, so the two tend to arrive ' +
      'together.',

    foodsIntro:
      'Seeds, nuts and the oils pressed from them, then green leaves and avocado. There is very ' +
      'little in animal food, and almost none in refined carbohydrate.',

    helps: [
      'Fat in the meal, as with all the fat-soluble vitamins',
      'Eating the nuts and seeds rather than the oils, which brings fibre and minerals with it',
      'Adequate vitamin C, which regenerates it after it has done its job',
    ],
    hinders: [
      'Fat malabsorption of any cause',
      'Very low-fat diets',
      'Deep frying and prolonged high heat, which destroy it in the oil itself',
    ],
    absorptionNote:
      'High-dose supplements have repeatedly failed to show the benefits the biochemistry ' +
      'suggested, and some trials found harm at 400 IU a day and above — including more ' +
      'haemorrhagic stroke, since vitamin E has a mild anticoagulant effect. This is one of the ' +
      'clearest cases in nutrition of a nutrient that is essential in food and unhelpful in a ' +
      'capsule.',

    shortfall: [
      'Genuinely rare in people eating an ordinary diet',
      'People with cystic fibrosis, cholestatic liver disease or pancreatic insufficiency',
      'Very premature infants',
      'People with abetalipoproteinaemia, a rare inherited disorder of fat transport',
    ],

    recipe: {
      title: 'Almond, sunflower seed and spinach pesto',
      serves: 'Makes a jar; ten minutes',
      ingredients: [
        '60 g almonds, toasted',
        '30 g sunflower seeds, toasted',
        '100 g spinach leaves',
        '1 clove garlic',
        '120 ml olive oil',
        'Juice of half a lemon',
        '30 g hard cheese, grated (optional)',
      ],
      steps: [
        {
          title: 'Toast the nuts and seeds',
          detail:
            'Eight minutes at 180°C, or in a dry pan with attention. Untoasted almonds make a ' +
            'pesto that tastes of nothing in particular.',
        },
        {
          title: 'Blitz the solids first',
          detail:
            'Nuts, seeds, garlic and spinach to a rough rubble before any oil goes in. Adding ' +
            'oil early makes it emulsify into a paste rather than break down.',
        },
        {
          title: 'Add the oil in a stream',
          detail:
            'Motor running, slowly. This is where the vitamin E is — both from the oil and from ' +
            'what the oil is carrying out of the nuts.',
        },
        {
          title: 'Season last',
          detail:
            'Lemon, then cheese if you are using it, then taste before adding any salt. Hard ' +
            'cheese is salty enough that many jars need none.',
        },
      ],
      note:
        'Spinach instead of basil is not a compromise — it is milder, cheaper, available all ' +
        'year, and carries vitamin E and vitamin K of its own.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamin E',
      dri: 'Dietary Reference Intakes for Vitamin C, Vitamin E, Selenium and Carotenoids',
      fdc: 'USDA FoodData Central',
    },
  },

  /* ------------------------------------------------------------ vitamin K */
  'vitamin-k': {
    name: 'Vitamin K',
    title: 'Vitamin K: clotting, bone, and one important drug interaction',
    lede:
      'The K is for Koagulation, from the German paper that described it. Ninety years later the ' +
      'clotting role is still the reason newborns are given an injection of it on the day they ' +
      'are born.',
    description:
      'What vitamin K does for clotting and bone, how much you need, why warfarin users need ' +
      'consistency rather than avoidance, and the foods highest in it.',

    whatItDoes: [
      'Vitamin K is the cofactor for an enzyme that adds a carboxyl group to certain proteins, ' +
        'and that modification is what lets them bind calcium. Several clotting factors depend on ' +
        'it; without the modification they circulate but cannot work.',
      'The same chemistry applies to osteocalcin in bone and to matrix Gla protein in blood ' +
        'vessel walls, where it appears to help keep calcium in bone and out of arteries. That ' +
        'part of the story is younger and less settled than the clotting part.',
      'There are two dietary forms. K1, phylloquinone, comes from green leaves and is the bulk of ' +
        'intake. K2, menaquinone, comes from fermented food and animal products, and is also made ' +
        'by gut bacteria — though how much of that the body actually absorbs is still debated.',
    ],

    intake: {
      'infant-0-6': { who: 'Infants, 0–6 months', note: 'Adequate Intake' },
      'infant-7-12': { who: 'Infants, 7–12 months', note: 'Adequate Intake' },
      'child-1-3': { who: 'Children, 1–3 years' },
      'child-4-8': { who: 'Children, 4–8 years' },
      'child-9-13': { who: 'Children, 9–13 years' },
      'teen-14-18': { who: 'Ages 14–18' },
      'men-19-plus': { who: 'Men, 19 and over' },
      'women-19-plus': { who: 'Women, 19 and over' },
    },
    intakeNote:
      'All Adequate Intakes; there is no RDA. The infant figures are tiny and are not the whole ' +
      'story: newborns are born with very little vitamin K and breast milk carries little, which ' +
      'is why an intramuscular dose at birth is standard practice in most countries and prevents ' +
      'a rare but catastrophic bleeding disorder.',

    foodsIntro:
      'Dark green leaves, overwhelmingly. Kale, spinach, collards and broccoli carry more than ' +
      'anything else, and the difference between a green vegetable and everything else is larger ' +
      'here than for any other vitamin.',

    helps: [
      'Fat in the meal — it is fat-soluble and greens are not',
      'Fermented foods such as natto and some cheeses, for the K2 forms',
      'Simply eating green vegetables regularly, which covers it comfortably',
    ],
    hinders: [
      'Fat malabsorption',
      'Long courses of broad-spectrum antibiotics, which reduce gut bacterial synthesis',
      'Some cholesterol-lowering drugs that bind bile acids',
    ],
    absorptionNote:
      'If you take warfarin, the advice is consistency, not avoidance. Vitamin K is the exact ' +
      'thing warfarin blocks, so a week of large salads followed by a week of none makes the dose ' +
      'swing — which is dangerous in both directions. Eating a steady amount of greens is easier ' +
      'to dose around than eating none. Newer anticoagulants such as apixaban and rivaroxaban do ' +
      'not have this interaction. Any change here belongs with the clinician managing the ' +
      'prescription.',

    shortfall: [
      'Newborns, universally, until they are given the standard dose',
      'People with fat malabsorption or biliary obstruction',
      'People on long-term broad-spectrum antibiotics',
      'People with very low intake of green vegetables over long periods',
    ],

    recipe: {
      title: 'Charred broccoli with anchovy and garlic oil',
      serves: 'Two as a side, fifteen minutes',
      ingredients: [
        '400 g broccoli, cut into long spears',
        '3 tbsp olive oil',
        '4 anchovy fillets',
        '2 cloves garlic, sliced',
        'A pinch of chilli flakes',
        'Lemon',
      ],
      steps: [
        {
          title: 'Cut spears, not florets',
          detail:
            'Through the stem lengthways so each piece has a flat face. Flat faces char; florets ' +
            'just steam and roll around.',
        },
        {
          title: 'Blanch two minutes',
          detail:
            'Boiling salted water, then drain and dry thoroughly. Wet broccoli will not colour ' +
            'no matter how hot the pan is.',
        },
        {
          title: 'Melt the anchovies into the oil',
          detail:
            'Low heat, with the garlic and chilli, until the anchovies dissolve completely — ' +
            'three or four minutes. They stop tasting of fish and start tasting of savoury.',
        },
        {
          title: 'Char and dress',
          detail:
            'Broccoli into a very hot dry pan, cut side down, three minutes untouched. Then the ' +
            'anchovy oil over, and lemon.',
        },
      ],
      note:
        'The oil is doing nutritional work as well as culinary: vitamin K is fat-soluble and ' +
        'broccoli eaten without any fat gives up much less of it.',
    },

    sources: {
      ods: 'NIH Office of Dietary Supplements — Vitamin K',
      dri: 'Dietary Reference Intakes for Vitamin A, Vitamin K, Iron, Zinc and others',
      fdc: 'USDA FoodData Central',
    },
  },
};
