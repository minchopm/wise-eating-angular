import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Wise Eating - AI Nutrition Planner' },
  { path: 'terms', component: TermsComponent, title: 'Terms of Service - Wise Eating' },
  { path: 'privacy', component: PrivacyComponent, title: 'Privacy Policy - Wise Eating' },
  { path: '**', redirectTo: '' }
];
