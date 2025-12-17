import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import {
  AppStoreScreenshotHeroComponent
} from './app-store/app-app-store-screenshot-hero/app-app-store-screenshot-hero.component';
import {
  AppStoreScreenshotHeroWorkoutsComponent,
} from './app-store/app-app-store-screenshot-workout-feature/app-store-screenshot-hero-workouts.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Wise Eating - AI Nutrition Planner' },
  { path: 'terms', component: TermsComponent, title: 'Terms of Service - Wise Eating' },
  { path: 'privacy', component: PrivacyComponent, title: 'Privacy Policy - Wise Eating' },
  {
    path: 'app-store-hero',
    component: AppStoreScreenshotHeroComponent,
    title: 'Wise Eating – App Store Preview'
  },
  {
    path: 'app-store-workouts',
    component: AppStoreScreenshotHeroWorkoutsComponent,
    title: 'Wise Eating – App Store Preview'
  },
  { path: '**', redirectTo: '' }
];
