import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-store-screenshot-hero-workouts',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="screenshot-hero">
      <div class="screenshot-container">
        <div class="hero-copy">
          <h1>
            Wise Eating<br />
            <span class="text-highlight">Workouts, Muscle Groups &amp; Daily Burn.</span>
          </h1>

          <p class="hero-sub">
            Build structured gym routines, track calories burned, and instantly see which muscle groups you trained —
            all organized on a clean timeline that fits your day. Keep workouts, meals, and notes connected in one place.
          </p>
        </div>

        <div class="hero-visual">
          <img
            src="assets/workouts_timeline_iphone.png"
            alt="Wise Eating – workouts timeline with calories burned and muscle groups"
            class="app-screenshot"
          />
        </div>
      </div>
    </section>
  `,
  styles: [`
    .screenshot-hero {
      position: relative;
      min-height: 100vh;
      padding: 20px 12px 40px;
      background: #000000;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      font-family: system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
    }

    .screenshot-container {
      position: relative;
      z-index: 1;
      width: 100%;
      max-width: 420px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 10px;
    }

    .hero-copy {
      padding: 0 8px;
      position: relative;
      z-index: 2;
    }

    h1 {
      font-size: 1.7rem;
      line-height: 1.2;
      font-weight: 800;
      color: #F9FAFB;
      margin: 0 0 10px;
      letter-spacing: -0.02em;
    }

    .text-highlight {
      background: linear-gradient(135deg, #4ade80 0%, #6366f1 40%, #a855f7 80%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-sub {
      font-size: 0.98rem;
      line-height: 1.7;
      color: #E5E7EB;
      font-weight: 400;
      margin: 0;
    }

    .hero-visual {
      width: 100%;
      display: flex;
      justify-content: center;
      overflow: visible;
    }

    .app-screenshot {
      display: block;
      width: 108%;
      max-width: none;
      height: auto;
      transform: translateY(0px);
    }

    @media (min-width: 768px) {
      .screenshot-container { max-width: 480px; }
      h1 { font-size: 2rem; }
      .hero-sub { font-size: 1.05rem; }
    }
  `]
})
export class AppStoreScreenshotHeroWorkoutsComponent {}
