import { Component, HostListener } from '@angular/core';
import {
  RouterOutlet,
  RouterLink,
  RouterLinkActive,
  Router,
  NavigationEnd
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  template: `
    <!-- Navbar (hidden on /app-store-hero) -->
    <nav class="navbar" *ngIf="showShell" [class.scrolled]="isScrolled">
      <div class="container nav-container">

        <!-- Brand Logo -->
        <a routerLink="/" class="logo">
          <img src="assets/WiseEating-logo.png" alt="Wise Eating Logo" class="logo-img">
          <span class="brand-name">Wise Eating</span>
        </a>

        <!-- Desktop Navigation -->
        <div class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" fragment="features">Features</a>
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" fragment="how-it-works">How it Works</a>
          <a routerLink="/privacy" routerLinkActive="active">Privacy</a>
        </div>

        <!-- CTA Button -->
        <a class="btn-download" href="https://apps.apple.com/us/app/wiseeating/id6751406823" target="_blank">
          <span>Get App</span>
        </a>
      </div>
    </nav>

    <!-- Main Content Area -->
    <main>
      <router-outlet></router-outlet>
    </main>

    <!-- Footer (hidden on /app-store-hero) -->
    <footer class="footer" *ngIf="showShell">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <h3 class="brand-gradient">Wise Eating</h3>
            <p>Your AI-powered nutrition companion.<br>Eat smarter, live better.</p>
          </div>

          <div class="footer-links-group">
            <div class="footer-col">
              <h4>Company</h4>
              <a href="mailto:mincho.milev@gmail.com">Contact</a>
              <a href="#">Press Kit</a>
            </div>
            <div class="footer-col">
              <h4>Legal</h4>
              <a routerLink="/terms">Terms of Service</a>
              <a routerLink="/privacy">Privacy Policy</a>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; {{ year }} Arte Soft Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    /* --- NAVBAR --- */
    .navbar {
      position: fixed; top: 0; width: 100%; z-index: 1000;
      background: transparent;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 24px 0;
    }

    .navbar.scrolled {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      padding: 16px 0;
      box-shadow: 0 4px 20px rgba(0,0,0,0.03);
      border-bottom: 1px solid rgba(255,255,255,0.5);
    }

    .nav-container { display: flex; justify-content: space-between; align-items: center; }

    .logo {
      display: flex; align-items: center; gap: 12px;
      text-decoration: none;
    }

    .logo-img {
      height: 48px;
      width: auto;
      object-fit: contain;
      filter: drop-shadow(0 4px 6px rgba(38, 208, 124, 0.2));
      transition: transform 0.3s ease;
    }

    .logo:hover .logo-img {
      transform: scale(1.05) rotate(-5deg);
    }

    .brand-name {
      font-weight: 800; font-size: 1.25rem; color: #1F2937;
      letter-spacing: -0.02em;
    }

    .nav-links { display: none; gap: 32px; @media(min-width: 768px) { display: flex; } }

    .nav-links a {
      font-weight: 500; color: #64748B; position: relative;
      transition: color 0.3s; font-size: 0.95rem; text-decoration: none;
      &:hover { color: #059669; }
      &.active { color: #1F2937; font-weight: 600; }
    }

    .btn-download {
      background: linear-gradient(135deg, #26D07C 0%, #8B5CF6 100%);
      color: white; padding: 10px 24px; border-radius: 50px;
      font-weight: 600; font-size: 0.95rem; text-decoration: none;
      box-shadow: 0 4px 12px rgba(38, 208, 124, 0.25);
      transition: all 0.3s ease;
      &:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(139, 92, 246, 0.35); }
    }

    .footer { background: #1F2937; color: #9CA3AF; padding: 80px 0 30px; }
    .footer-top {
      display: flex; flex-direction: column; gap: 40px; margin-bottom: 50px;
      @media(min-width: 768px) { flex-direction: row; justify-content: space-between; }
    }
    .footer-brand { max-width: 300px; }
    .brand-gradient {
      font-size: 1.5rem; font-weight: 800; margin-bottom: 16px;
      background: linear-gradient(135deg, #26D07C 0%, #8B5CF6 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: inline-block;
    }
    .footer-brand p { color: #9CA3AF; line-height: 1.6; }
    .footer-links-group { display: flex; gap: 60px; }
    .footer-col h4 {
      color: #fff; margin-bottom: 20px; font-size: 0.85rem;
      text-transform: uppercase; letter-spacing: 1.5px; font-weight: 700;
    }
    .footer-col a {
      display: block; margin-bottom: 12px; color: #D1D5DB; transition: 0.3s; text-decoration: none;
      &:hover { color: #26D07C; transform: translateX(2px); }
    }
    .footer-bottom {
      border-top: 1px solid #374151; padding-top: 30px;
      text-align: center; font-size: 0.85rem; color: #6B7280;
    }
  `]
})
export class AppComponent {
  year = new Date().getFullYear();
  isScrolled = false;
  showShell = true;

  // Routes without header/footer
  private readonly shelllessRoutes = ['/app-store-hero'];

  // Routes that should force black status bar + body background
  private readonly screenshotRoutes = ['/app-store-hero'];

  constructor(private router: Router, private meta: Meta) {
    // Initial state (direct load)
    this.updateForUrl(this.router.url);

    // React to navigation
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateForUrl(event.urlAfterRedirects);
      });
  }

  private updateForUrl(url: string) {
    this.updateShellVisibility(url);
    this.updateScreenshotMode(url);
  }

  private updateShellVisibility(url: string) {
    this.showShell = !this.shelllessRoutes.some(route => url.startsWith(route));
  }

  private updateScreenshotMode(url: string) {
    const isScreenshotPage = this.screenshotRoutes.some(route => url.startsWith(route));

    // Add/remove a class on <body> so global CSS can react
    document.body.classList.toggle('screenshot-mode', isScreenshotPage);

    // Update <meta name="theme-color"> dynamically
    this.meta.updateTag({
      name: 'theme-color',
      content: isScreenshotPage ? '#000000' : '#F8FAFC' // or whatever your normal color is
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}
