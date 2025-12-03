import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-store-screenshot-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="screenshot-hero">
      <div class="screenshot-container">
        <div class="hero-copy">
          <h1>
            Wise Eating<br />
            <span class="text-highlight">Nutrition, Workouts &amp; Daily Balance.</span>
          </h1>

          <p class="hero-sub">
            Connect what you eat, how you move, and how you feel. Plan meals from real food data,
            build structured workouts, and see nutrients, calories, and symptoms on one beautiful timeline.
          </p>
        </div>

        <div class="hero-visual">
          <img
            src="assets/nutritions_details_view.png"
            alt="Wise Eating – Nutrition, Workouts & Daily Balance"
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
      padding: 20px 12px 40px; /* smaller top padding */
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
      max-width: 420px;       /* keep container size the same */
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 4px;               /* minimal natural gap */
    }

    .hero-copy {
      padding: 0 8px;
      margin-bottom: -48px;   /* pull text down into the “empty” area of the image */
      position: relative;
      z-index: 2;             /* stays above the image */
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
      overflow: visible;      /* allow image to extend beyond container */
    }

    .app-screenshot {
      display: block;
      width: 115%;            /* slightly larger than container */
      max-width: none;
      height: auto;
      transform: translateY(-8px); /* nudge image up a bit */
    }

    @media (min-width: 768px) {
      .screenshot-container {
        max-width: 480px;
      }

      h1 {
        font-size: 2rem;
      }

      .hero-sub {
        font-size: 1.05rem;
      }
    }
  `]
})
export class AppStoreScreenshotHeroComponent {}
