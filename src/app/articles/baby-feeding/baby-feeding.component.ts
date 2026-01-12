// baby-feeding.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

type SubList = {
  label: string;
  items: string[];
  ordered?: boolean;
};

type RecipeStep = {
  title: string;
  bullets?: string[];
  sublists?: SubList[];
  note?: string; // for special inline notes/warnings
};

type Recipe = {
  id: string;
  title: string;
  ageLabel: string;

  // optional "quick lines" (kept from your Salmon short list)
  quickLines?: string[];

  ingredients: string[];
  steps: RecipeStep[];
  storage: string[];

  extraNotes?: string[];
};

@Component({
  selector: 'app-baby-feeding',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './baby-feeding.component.html',
  styleUrls: ['./baby-feeding.component.scss'],
})
export class BabyFeedingComponent {
  // STRICT: use the values exactly as provided in the article
  calciumGuidance = [
    { age: '0 to 0.5 months', amount: '210 mg' },
    { age: '0.5 to 1 year old', amount: '270 mg' },
    { age: '1 to 3 years old', amount: '500 mg' },
  ];

  openRecipeIds = new Set<string>(['r1']);

  toggleRecipe(id: string) {
    if (this.openRecipeIds.has(id)) this.openRecipeIds.delete(id);
    else this.openRecipeIds.add(id);
  }

  isOpen(id: string) {
    return this.openRecipeIds.has(id);
  }

  recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Chickpeas, Veggie & Egg Yolk Purée with Olive Oil and Tahini',
      ageLabel: 'for 6+ months',
      ingredients: [
        '140 g cooked chickpeas (without husk)',
        '(about ½ cup cooked, or ¼ cup dry before cooking)',
        '1 small red or yellow pepper OR 1 small carrot, peeled and chopped',
        '1 cooked egg yolk (from 1 hard-boiled egg)',
        '1 Tbsp extra-virgin olive oil',
        '1 Tbsp sesame tahini (smooth, unsalted)',
        '2–4 Tbsp warm water, breast milk, or formula (for thinning)',
      ],
      steps: [
        {
          title: '1. Prepare the chickpeas',
          sublists: [
            {
              label: 'If using dried chickpeas:',
              ordered: true,
              items: [
                'Soak overnight (8–10 hours) in plenty of water.',
                'Drain, rinse, and boil in fresh water for 45–60 minutes until very soft.',
                'Remove skins (husks) — this makes digestion easier and texture smoother.',
              ],
            },
            {
              label: 'If using canned chickpeas:',
              ordered: true,
              items: [
                'Choose unsalted, rinse well in warm water.',
                'Remove husks manually if possible (they slip off easily).',
              ],
            },
          ],
        },
        {
          title: '2. Cook the vegetable',
          bullets: [
            'If using carrot → peel, slice, and steam or boil for 10–12 minutes until soft.',
            'If using red/yellow pepper → remove seeds and inner membranes, steam or roast for 8–10 minutes until soft (optional: peel the skin for extra smoothness).',
          ],
        },
        {
          title: '3. Cook the egg yolk',
          bullets: [
            'Hard-boil one egg for 10 minutes.',
            'Cool under cold water, peel, and separate the yolk (use yolk only).',
            'Mash gently.',
          ],
        },
        {
          title: '4. Combine and blend',
          bullets: ['In a baby blender or food processor, combine:'],
          sublists: [
            {
              label: '',
              items: [
                'Cooked chickpeas',
                'Cooked vegetable (pepper or carrot)',
                'Mashed egg yolk',
                '1 Tbsp extra-virgin olive oil',
                '1 Tbsp sesame tahini',
              ],
            },
          ],
        },
        {
          title: '',
          bullets: [
            'Add 2–4 Tbsp warm water, breast milk, or formula and blend until smooth and creamy.',
            'Add more liquid for a softer purée texture.',
          ],
        },
        {
          title: '5. Serve warm (not hot)',
          bullets: [
            'Test the temperature on your wrist.',
            'Offer 1–2 teaspoons first; increase gradually as tolerated.',
          ],
        },
      ],
      storage: [
        'Refrigerate leftovers up to 24 hours.',
        'Freeze in small portions (1–2 Tbsp each) for up to 1 month.',
        'Reheat gently in a warm water bath and stir before serving.',
      ],
    },

    {
      id: 'r2',
      title: 'Spinach, Potato, Egg Yolk & Cottage Cheese Purée',
      ageLabel: 'for 6+ months',
      ingredients: [
        '2 small potatoes, peeled and diced',
        '1 small handful fresh spinach leaves (about 1 cup loosely packed)',
        '1 cooked egg yolk (from 1 hard-boiled egg)',
        '1 Tbsp plain cottage cheese (unsalted, smooth type)',
        '1 Tbsp ghee or extra-virgin olive oil',
        '2–4 Tbsp warm water, breast milk, or formula (for thinning)',
      ],
      steps: [
        {
          title: '1. Cook the potatoes',
          sublists: [
            {
              label: '',
              ordered: true,
              items: [
                'Peel and dice the potatoes.',
                'Place in a small saucepan, cover with water, and boil or steam for 10–12 minutes until soft.',
                'Drain and keep a little of the cooking water.',
              ],
            },
          ],
        },
        {
          title: '2. Cook the spinach',
          sublists: [
            {
              label: '',
              ordered: true,
              items: [
                'Wash the spinach thoroughly.',
                'Steam or boil lightly for 2–3 minutes, just until wilted and soft.',
                'Drain well (squeeze out extra water if needed).',
              ],
            },
          ],
          note: 'Do not reuse spinach water — discard it to avoid nitrate buildup.',
        },
        {
          title: '3. Cook the egg yolk',
          sublists: [
            {
              label: '',
              ordered: true,
              items: [
                'Hard-boil one egg for 10 minutes.',
                'Cool under water, peel, and separate the yolk (use only the yolk at this age).',
                'Mash the yolk with a spoon.',
              ],
            },
          ],
        },
        {
          title: '4. Combine and blend',
          sublists: [
            {
              label: '',
              ordered: true,
              items: ['In a blender or bowl, combine:'],
            },
          ],
        },
        {
          title: '',
          sublists: [
            {
              label: '',
              items: [
                'Cooked potatoes',
                'Spinach',
                'Mashed egg yolk',
                'Cottage cheese',
                'Ghee or olive oil',
              ],
            },
          ],
        },
        {
          title: '',
          sublists: [
            {
              label: '',
              ordered: true,
              items: [
                'Add a few tablespoons of the reserved potato water or breast milk/formula.',
                'Blend or mash until smooth and creamy (or leave a bit of texture if your baby is ready).',
              ],
            },
          ],
        },
        {
          title: '5. Serve warm',
          bullets: [
            'Check temperature (should be just warm).',
            'Offer 1–2 teaspoons at first, increasing gradually as tolerated.',
          ],
        },
      ],
      storage: [
        'Refrigerate leftovers for up to 24 hours.',
        'Freeze small portions (1–2 Tbsp each) for up to 1 month.',
        'Reheat gently and stir in a splash of water or milk before serving.',
      ],
      extraNotes: [
        'Introduce each new food separately the first time if your baby hasn’t tried it before.',
        'Use fresh spinach, not frozen with added salt.',
        'Do not add salt, sugar, or spices.',
        'If texture is too thick, thin with warm water or milk to reach a smooth purée consistency.',
      ],
    },

    {
      id: 'r3',
      title: 'Salmon, Carrot & Potato Purée with Olive Oil & Sunflower Seed Powder',
      ageLabel: 'for 12 months +',
      quickLines: [
        'Salmon',
        '1 carrot',
        '1 potato',
        '1 table spoon olive oil',
        '1 handful of sunflower seeds powder',
      ],
      ingredients: [
        '60–70 g salmon fillet (fresh or frozen, boneless, skin removed)',
        '1 small carrot, peeled and chopped',
        '1 small potato, peeled and diced',
        '1 Tbsp extra-virgin olive oil',
        '1 Tbsp finely ground sunflower seed powder (unsalted, freshly ground)',
        '2–4 Tbsp warm water or breast milk/formula (to thin if needed)',
      ],
      steps: [
        {
          title: '1. Prepare and cook the vegetables',
          sublists: [
            {
              label: '',
              ordered: true,
              items: [
                'Peel and cut the carrot and potato into small pieces.',
                'Steam or boil them together in a small pot with just enough water to cover.',
                'Cook until both are very soft — about 10–15 minutes.',
              ],
            },
          ],
        },
        {
          title: '2. Cook the salmon',
          sublists: [
            {
              label: '',
              ordered: true,
              items: [
                'In a separate steamer or small saucepan, place the salmon.',
                'Add a few tablespoons of water, cover, and steam or poach on low heat for 8–10 minutes, until it flakes easily and is fully opaque (no raw parts).',
                'Let it cool slightly and check carefully for bones.',
              ],
            },
          ],
        },
        {
          title: '3. Blend or mash',
          sublists: [
            {
              label: '',
              ordered: true,
              items: [
                'Combine the cooked salmon, carrot, and potato in a baby-safe blender or bowl.',
                'Add 1 Tbsp olive oil and 1 Tbsp sunflower seed powder.',
                'Add a few spoonfuls of the vegetable cooking liquid or milk/formula.',
                'Blend or mash until smooth and creamy (or leave small soft pieces if your child already chews well).',
              ],
            },
          ],
        },
        {
          title: '4. Serve warm',
          bullets: [
            'Test the temperature on your wrist — it should be just warm.',
            'Offer 3–4 Tbsp for one serving; you can refrigerate leftovers for the next meal.',
          ],
        },
      ],
      storage: [
        'Refrigerate up to 24 hours in a sealed container.',
        'Freeze in small portions (2 Tbsp each) for 1 month.',
        'Reheat gently in a warm water bath and stir before serving.',
      ],
      extraNotes: [
        'Always use unsalted, raw sunflower seeds — grind them finely just before use.',
        'Add the olive oil after cooking (not during boiling) to preserve nutrients.',
        'Introduce each ingredient separately first if you haven’t already.',
        'Avoid adding salt, butter, or spices.',
      ],
    },
  ];

  references: Array<{
    label: string;
    href?: string;
    note?: string;
    group: 'primary' | 'additional';
  }> = [
    // From the original article
    {
      label: 'Pressman, Alan; Buff, Sheila. Vitamins and Minerals: Encyclopedia Step by Step.',
      href: 'https://www.ciela.com/vitamini-i-minerali-enciklopedija-st-pka-po-st-pka.html',
      group: 'primary',
    },
    // Additional reputable sources (helpful for EU/US readers)
    {
      label: 'NIH Office of Dietary Supplements — Calcium (Consumer)',
      href: 'https://ods.od.nih.gov/factsheets/Calcium-Consumer/',
      note: 'Plain-language overview of calcium, sources, and general guidance (U.S.).',
      group: 'additional',
    },
    {
      label: 'National Academies — Dietary Reference Intakes (Calcium & Vitamin D) report brief',
      href: 'https://nap.nationalacademies.org/resource/13050/Vitamin-D-and-Calcium-2010-Report-Brief.pdf',
      note: 'Background on how DRIs are established and used.',
      group: 'additional',
    },
    {
      label: 'American Academy of Pediatrics — Infant Food & Feeding',
      href: 'https://www.aap.org/en/patient-care/healthy-active-living-for-families/infant-food-and-feeding/',
      note: 'General pediatric guidance on starting solids and feeding safely.',
      group: 'additional',
    },
    {
      label: 'CDC — Introducing solid foods',
      href: 'https://www.cdc.gov/infant-toddler-nutrition/foods-and-drinks/when-what-and-how-to-introduce-solid-foods.html',
      note: 'Readiness signs and practical tips for introducing solids.',
      group: 'additional',
    },
    {
      label: 'DietaryGuidelines.gov — Food Sources of Calcium',
      href: 'https://www.dietaryguidelines.gov/food-sources-calcium',
      note: 'Examples of calcium sources by serving size.',
      group: 'additional',
    },
    {
      label: 'USDA FoodData Central',
      href: 'https://fdc.nal.usda.gov/',
      note: 'Primary U.S. nutrition database for food composition data.',
      group: 'additional',
    },
  ];
}
