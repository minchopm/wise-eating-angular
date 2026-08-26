import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RevealDirective, RevealStaggerDirective } from '../../core/reveal.directive';
import { faqEntity, Seo } from '../../core/seo';
import { DATA, SITE, url } from '../../core/site';
import { TiltDirective } from '../../core/tilt.directive';
import { HeroCanvasComponent } from '../../three/hero-canvas.component';
import { StoreButtonComponent } from '../../shared/store-button';

/**
 * The nine App Store screenshots, in the order they tell a story.
 *
 * Captions are written here rather than in the template so the gallery is a
 * list to iterate rather than nine near-identical blocks of markup — and so
 * the alt text, which is the only description a screen reader gets of a
 * picture of a screen, sits next to the caption it has to agree with.
 */
export interface Shot {
  readonly file: string;
  readonly title: string;
  readonly body: string;
  readonly alt: string;
}

const SHOTS: readonly Shot[] = [
  {
    file: 'store-01',
    title: 'The day, in one screen',
    body: 'Meals, nutrients, water and goals against the hours they actually happened in.',
    alt: 'A day in Wise Eating: nutrient rings, goal progress and the meals logged so far',
  },
  {
    file: 'store-02',
    title: 'Training on the same line',
    body: 'Sessions, muscle groups worked and calories burned, next to what you ate.',
    alt: 'A workout in Wise Eating, showing muscle groups trained and the exercises logged',
  },
  {
    file: 'store-03',
    title: 'Food, with the label read for you',
    body: 'Top nutrients and allergen warnings on the row, before you open anything.',
    alt: 'A food list in Wise Eating showing top nutrients and allergen warnings per item',
  },
  {
    file: 'store-04',
    title: 'What is in the cupboard',
    body: 'Quantities, batches and every consumption event against a single product.',
    alt: 'A storage record in Wise Eating showing available quantity and its consumption history',
  },
  {
    file: 'store-05',
    title: 'A week, generated',
    body: 'Ask for a plan with your constraints; adjust any meal it comes back with.',
    alt: 'The meal plan builder in Wise Eating, with prompts and a day of planned meals',
  },
  {
    file: 'store-06',
    title: 'Lists that suggest themselves',
    body: 'The shopping list proposes what you have been eating and what has run out.',
    alt: 'A new shopping list in Wise Eating with suggested items drawn from recent meals',
  },
  {
    file: 'store-07',
    title: 'Notes, tied to real food',
    body: 'Write how a day went and link the exact foods it involved.',
    alt: 'A journal entry in Wise Eating with the foods eaten that day linked to it',
  },
  {
    file: 'store-08',
    title: 'Nutrients per 100 g, always',
    body: 'Every stored food carries its full panel, allergens included.',
    alt: 'A storage list in Wise Eating showing per-100g nutrients and allergens for each food',
  },
  {
    file: 'store-09',
    title: 'A month at a glance',
    body: 'Meals and training across weeks, which is the scale habits are visible at.',
    alt: 'A month view in Wise Eating with meals and workouts marked across the calendar',
  },
];

/**
 * Example queries, and where each one goes.
 *
 * These are things the app parses, not things this page can answer — the
 * search reads a whole USDA catalogue on the device, and the site has the
 * rankings rather than the catalogue. Rather than mock up an input that
 * swallows what you type, each example links to the page behind the
 * constraint it expresses: an iron query to iron, a weaning query to the
 * article about feeding a baby.
 */
const QUERIES = [
  { text: 'beef proteins less than 15', path: '/nutrients/protein' },
  { text: 'vegetarian, rich in iron', path: '/nutrients/iron' },
  { text: 'high protein, no milk', path: '/nutrients/calcium' },
  { text: 'low sugar, high fibre, under 200 kcal', path: '/nutrients/fibre' },
  { text: 'alkaline, no nightshades', path: '/nutrients/potassium' },
  { text: 'suitable from 8 months, no honey', path: '/baby-feeding' },
] as const;

const FAQ = [
  {
    q: 'Where does the nutrition data come from?',
    a:
      'Every food in Wise Eating comes from USDA FoodData Central, the food composition database ' +
      'published by the United States Department of Agriculture. It is the reference table ' +
      'dietitians, researchers and food manufacturers use, and it carries far more than calories ' +
      '— vitamins, minerals, amino acids and fatty acids, per food and per portion.',
  },
  {
    q: 'Is Wise Eating only useful in the United States?',
    a:
      'No. USDA data is American in origin but international in use: most countries have no ' +
      'national food composition table of comparable depth, and the ones that do — Canada among ' +
      'them — derive much of their data from it. An apple is an apple. The app is used the same ' +
      'way anywhere.',
  },
  {
    q: 'Does it replace a dietitian or a doctor?',
    a:
      'No, and it is not designed to. Wise Eating is a planning and education tool. It does not ' +
      'diagnose, treat or cure anything, and nutrient figures are estimates rather than ' +
      'measurements. If you have symptoms, a diagnosis or a child to feed, talk to a clinician ' +
      'and use the app to carry out what you agree.',
  },
  {
    q: 'What does it cost?',
    a:
      'The app is free, and the free tier includes the entire food database, search, the diary, ' +
      'the pantry and shopping lists. Paid tiers start at $2.99 a month to remove advertising, ' +
      'and add AI meal and training plans above that.',
  },
  {
    q: 'Which devices does it run on?',
    a: `Wise Eating runs on iPhone and iPad, and needs ${SITE.minimumOs} or later.`,
  },
];

@Component({
  selector: 'we-home',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    HeroCanvasComponent,
    StoreButtonComponent,
    RevealDirective,
    RevealStaggerDirective,
    TiltDirective,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  readonly site = SITE;
  readonly data = DATA;
  readonly queries = QUERIES;
  readonly shots = SHOTS;
  readonly faq = FAQ;

  constructor() {
    inject(Seo).apply({
      title: 'Home',
      path: '/',
      description:
        `${DATA.foods.toLocaleString('en-US')} laboratory-measured foods from USDA FoodData ` +
        'Central, with every vitamin and mineral, natural-language search, AI meal and training ' +
        'plans, and a pantry that knows what you already own. Free on iPhone and iPad.',
      entities: [faqEntity(url('/'), FAQ)],
    });
  }
}
