import { Routes } from '@angular/router';

/**
 * The routes.
 *
 * Every page is lazily loaded, which on a prerendered site is not about the
 * first paint — that HTML is already on disk — but about how much JavaScript a
 * reader has to download to make the page interactive once it hydrates.
 *
 * Titles are set by each page through the Seo service rather than by the
 * router's `title`, so the title, the description, the canonical link and the
 * structured data are all decided in one place and cannot disagree.
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'features',
    loadComponent: () =>
      import('./pages/features/features.component').then((m) => m.FeaturesComponent),
  },
  {
    path: 'nutrients',
    loadComponent: () =>
      import('./pages/nutrients/nutrients.component').then((m) => m.NutrientsComponent),
  },
  {
    path: 'workouts',
    loadComponent: () =>
      import('./pages/workouts/workouts.component').then((m) => m.WorkoutsComponent),
  },
  {
    path: 'pantry',
    loadComponent: () => import('./pages/pantry/pantry.component').then((m) => m.PantryComponent),
  },
  {
    path: 'pricing',
    loadComponent: () =>
      import('./pages/pricing/pricing.component').then((m) => m.PricingComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent),
  },
  {
    path: 'support',
    loadComponent: () =>
      import('./pages/support/support.component').then((m) => m.SupportComponent),
  },
  {
    path: 'baby-feeding',
    loadComponent: () =>
      import('./articles/baby-feeding/baby-feeding.component').then((m) => m.BabyFeedingComponent),
  },
  {
    path: 'privacy',
    loadComponent: () =>
      import('./pages/privacy/privacy.component').then((m) => m.PrivacyComponent),
  },
  {
    path: 'terms',
    loadComponent: () => import('./pages/terms/terms.component').then((m) => m.TermsComponent),
  },

  // Not for readers: these render one frame each, which is screenshotted and
  // uploaded to App Store Connect. Kept out of the index by the Seo service.
  {
    path: 'app-store-hero',
    loadComponent: () =>
      import('./app-store/app-app-store-screenshot-hero/app-app-store-screenshot-hero.component').then(
        (m) => m.AppStoreScreenshotHeroComponent,
      ),
  },
  {
    path: 'app-store-workouts',
    loadComponent: () =>
      import(
        './app-store/app-app-store-screenshot-workout-feature/app-store-screenshot-hero-workouts.component'
      ).then((m) => m.AppStoreScreenshotHeroWorkoutsComponent),
  },

  // A real page at a real path, so the CloudFront error response can point at
  // /404.html and return an actual 404 instead of answering every unknown URL
  // with the home page and a 200.
  {
    path: '404',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found.component').then((m) => m.NotFoundComponent),
  },
];
