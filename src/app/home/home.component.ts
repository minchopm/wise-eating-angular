import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- HERO SECTION -->
    <section class="hero">
      <div class="hero-blob blob-1"></div>
      <div class="hero-blob blob-2"></div>

      <div class="container hero-container">
        <div class="hero-text animate-fade-up">
          <span class="badge">✨ AI-Powered Food & Training Coach</span>

          <h1>Wise Eating –<br> <span class="text-highlight">Nutrition, Workouts & Daily Balance.</span></h1>

          <p class="hero-sub">
            Connect what you eat, how you move, and how you feel. Plan meals from real food data,
            build structured workouts, and see nutrients, calories, and symptoms on one beautiful timeline.
          </p>

          <div class="app-buttons">
            <a href="https://apps.apple.com" target="_blank" class="app-store-btn btn-primary">
              <svg viewBox="0 0 384 512" width="20"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 43.3-25.6 63.7 26.5 1.3 52.7-4.7 69.5-26.1z"/></svg>
              <div>
                <small>Download on the</small>
                <span>App Store</span>
              </div>
            </a>
          </div>

          <!-- HERO FEATURES PILLS -->
          <div class="hero-features">
            <div class="feature-pill">
              <span class="icon">🔒</span>
              <span>Privacy First</span>
            </div>
            <div class="feature-pill">
              <span class="icon">📅</span>
              <span>Smart Timeline</span>
            </div>
            <div class="feature-pill">
              <span class="icon">🧬</span>
              <span>Deep Science</span>
            </div>
          </div>
        </div>

        <div class="hero-visual animate-float">
          <div class="phone-frame-clean">
            <!-- Ideally this image shows the "Day View" or "Timeline" -->
            <img src="assets/nutritions_details_view.png" alt="Wise Eating App" class="app-screenshot">
          </div>
        </div>
      </div>
    </section>

    <!-- THE WISE CYCLE (Workflow) -->
    <section id="app-flow" class="steps-section">
      <div class="container">
        <div class="section-header">
          <span class="badge-sub">The Wise Cycle</span>
          <h2>How Wise Eating fits into your day</h2>
          <p>Wise Eating brings planning, shopping, eating, and training into a single, coherent workflow.</p>
        </div>

        <div class="steps-grid">
          <div class="step-card">
            <div class="step-icon-bg">🔍</div>
            <h3>1. Find &amp; Plan</h3>
            <p>
              Search the food database using clear phrases such as
              <em>"high protein, no milk"</em>, review the nutrient profile, and add chosen foods to a daily or weekly plan.
            </p>
          </div>
          <div class="step-card">
            <div class="step-icon-bg">📦</div>
            <h3>2. Shop &amp; Store</h3>
            <p>
              Record what you keep at home: products, quantities, and expiry dates. Plan meals based on what is already
              in your pantry, fridge, or freezer, and reduce unnecessary food waste.
            </p>
          </div>
          <div class="step-card">
            <div class="step-icon-bg">⚡</div>
            <h3>3. Align &amp; Track</h3>
            <p>
              Log meals, snacks, and workouts on one timeline. Over time you can see how your food choices relate to
              energy, mood, symptoms, and progress toward your goals.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- PRODUCT HIGHLIGHTS (Bento Grid) -->
    <section id="features" class="features-section">
      <div class="container">
        <div class="section-header">
          <h2>Deep data, beautifully presented</h2>
          <p>From the exact gram of ingredients in your fridge to the specific muscle group you trained.</p>
        </div>

        <div class="bento-grid">
          <!-- Feature 1: The Timeline -->
          <div class="bento-item large item-1">
            <div class="bento-content">
              <h3>The Integrated Timeline</h3>
              <p>
                View meals, workouts, symptoms, and notes in one chronological timeline. This helps you connect what
                you ate, how you moved, and how you felt across the day or week.
              </p>
            </div>
            <div class="visual-circle green-blur"></div>
            <div class="visual-icon floating-icon">⏱️</div>
          </div>

          <!-- Feature 2: Natural Language Search -->
          <div class="bento-item item-2">
            <div class="bento-content">
              <h3>AI Semantic Search</h3>
              <p>
                Use natural-language queries such as <em>"vegetarian, rich in iron"</em> and combine them with filters
                for allergens, age groups, or specific nutrients to quickly find suitable foods.
              </p>
            </div>
            <div class="visual-icon">🧠</div>
          </div>

          <!-- Feature 3: Storage & Inventory -->
          <div class="bento-item item-3">
            <div class="bento-content">
              <h3>Smart Pantry & Storage</h3>
              <p>
                Maintain a clear overview of foods at home by tracking batches, quantities, and expiry dates. Log
                consumption so you always know what is available when planning meals.
              </p>
            </div>
            <div class="visual-icon">🧊</div>
          </div>

          <!-- Feature 4: Muscle & Bio-Feedback -->
          <div class="bento-item large item-4">
            <div class="bento-content">
              <h3>Training & Bio-Feedback</h3>
              <p>
                Describe your training sessions with targeted muscle groups and link them to your journal entries.
                Over time you can review how specific meals and training patterns relate to your mood, energy,
                recovery, or symptoms.
              </p>
            </div>
            <div class="visual-icon">🏋️‍♂️</div>
          </div>
        </div>
      </div>
    </section>

    <!-- NUTRITION SCIENCE / EDUCATION -->
    <section id="why-nutrition" class="info-section">
      <div class="container info-grid">
        <div class="info-text">
          <span class="info-eyebrow">Food as everyday medicine</span>
          <h2>Why nutrients – not just calories – matter</h2>
          <p>Modern nutrition science and traditional medical wisdom both teach us to use food wisely as medicine. That means choosing certain foods more often and limiting others, especially in large amounts.</p>
          <p>Diet is one of the most important foundations of health—along with exercise, good sleep, and recovery from everyday stress. It’s worth the effort to build healthy eating habits and choose foods that provide enough of both macronutrients and micronutrients.</p>
          <p>Our bodies need around 40 different micronutrients to function properly. When we don’t get enough of them, it can contribute to disease, illness, and imbalances in the body.</p>
          <p>Wise Eating helps you see, in a simple visual way, how your meals contribute to essentials like Zinc, Magnesium, Vitamin B6, and Iron.</p>
        </div>
        <div class="info-image">
          <div class="screenshot-frame">
            <img src="assets/wise_eating_nutrients.png" alt="Wise Eating nutrient dashboard" />
          </div>
        </div>
      </div>
    </section>

    <!-- WHO IS THIS FOR -->
    <section id="who-for" class="info-section alt-bg">
      <div class="container info-grid info-grid-reverse">
        <div class="info-text">
          <span class="info-eyebrow">Who is this app for?</span>
          <h2>Designed for individuals, professionals, and teams</h2>
          <ul class="bullet-list">
            <li>
              <div class="bullet-icon">👤</div>
              <div>
                <strong>Individuals &amp; Families</strong>
                <p>People who want to eat wisely, check for allergens, and track how food affects their mood and energy.</p>
              </div>
            </li>
            <li>
              <div class="bullet-icon">🩺</div>
              <div>
                <strong>Health Professionals</strong>
                <p>Nutritionists, pediatricians, and food therapists who need accurate data to create plans for clients.</p>
              </div>
            </li>
            <li>
              <div class="bullet-icon">🏢</div>
              <div>
                <strong>Employers &amp; Teams</strong>
                <p>Organizations offering tools for better health, well-being, and productivity.</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="info-image">
          <div class="screenshot-frame">
            <img src="assets/wise-eating-search.png" alt="Wise Eating food search and lists" />
          </div>
        </div>
      </div>
    </section>

    <!-- DATA, LIMITATIONS & MINDSET -->
    <section id="science" class="info-section">
      <div class="container narrow">
        <div class="section-header">
          <h2>Science-based estimates, not medical diagnostics</h2>
          <p>Wise Eating helps you review and improve your diet, but it does not replace professional medical advice.</p>
        </div>
        <div class="info-text-wide">
          <p>You should keep in mind that the micronutrient calculations in this app are general estimates based on data from the U.S. Department of Agriculture database and similar sources.</p>
          <p>We encourage you to use the application wisely: let it help you improve your eating habits and make more informed food choices, but remember that your well-being depends not only on diet. It is also strongly influenced by physical activity, your goals, healthy relationships, and getting enough sleep.</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-box">
          <h2>Ready to eat – and live – wiser?</h2>
          <p>Start building meal and training plans that actually fit your life, not someone else’s template.</p>
          <a href="https://apps.apple.com" target="_blank" class="btn btn-white">View in App Store</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* --- HERO SECTION --- */
    .hero {
      position: relative; overflow: hidden; padding: 120px 0 80px;
      background: #F8FAFC;
    }
    .hero-blob {
      position: absolute; border-radius: 50%; filter: blur(100px); z-index: 0; opacity: 0.4;
    }
    .blob-1 { top: -20%; right: -10%; width: 600px; height: 600px; background: #D1FAE5; }
    .blob-2 { bottom: 10%; left: -10%; width: 500px; height: 500px; background: #E0E7FF; }

    .hero-container {
      position: relative; z-index: 1; display: flex; align-items: center; gap: 60px;
      flex-direction: column; text-align: center;
      @media(min-width: 992px) { flex-direction: row; text-align: left; }
    }
    .hero-text { flex: 1; }

    .badge {
      display: inline-flex; align-items: center; gap: 6px; padding: 6px 14px;
      background: #fff; border: 1px solid #E2E8F0;
      color: var(--primary-dark, #0f172a); border-radius: 50px; font-size: 0.85rem; font-weight: 600;
      margin-bottom: 24px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }

    .badge-sub {
      display: inline-block; font-size: 0.85rem; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.08em; color: #059669; margin-bottom: 12px;
      background: #ECFDF5; padding: 4px 12px; border-radius: 20px;
    }

    h1 {
      font-size: 2.5rem; font-weight: 800; color: #111; margin-bottom: 20px;
      letter-spacing: -0.02em; line-height: 1.1;
      @media(min-width: 768px) { font-size: 3.5rem; }
    }

    .text-highlight { color: #059669; }

    .hero-sub {
      font-size: 1.125rem; margin-bottom: 30px; max-width: 500px; color: #4B5563;
      margin-left: auto; margin-right: auto; line-height: 1.6;
      @media(min-width: 992px){ margin-left: 0; }
    }

    .app-buttons { margin-bottom: 24px; }
    .btn-primary {
      background: #111; color: #fff;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
      &:hover { background: #000; transform: translateY(-2px); box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
    }
    .app-store-btn {
      display: inline-flex; align-items: center; gap: 10px;
      padding: 12px 24px; border-radius: 14px; transition: all 0.3s ease; text-decoration: none;
      div { display: flex; flex-direction: column; line-height: 1.1; text-align: left; }
      small { font-size: 0.7rem; opacity: 0.8; }
      span { font-size: 1.1rem; font-weight: 600; }
    }

    /* --- HERO FEATURES --- */
    .hero-features {
      display: flex; align-items: center; justify-content: center; gap: 12px;
      flex-wrap: wrap;
      @media(min-width: 992px) { justify-content: flex-start; }
    }

    .feature-pill {
      display: flex; align-items: center; gap: 8px;
      background: #fff; border: 1px solid #E2E8F0;
      padding: 8px 16px; border-radius: 30px;
      font-size: 0.85rem; font-weight: 600; color: #4B5563;
      box-shadow: 0 2px 4px rgba(0,0,0,0.02);
    }

    .feature-pill .icon { font-size: 1rem; }

    /* --- PHONE VISUAL --- */
    .hero-visual { flex: 1; display: flex; justify-content: center; width: 100%; }
    .phone-frame-clean {
      position: relative; width: 100%; max-width: 320px; height: auto; z-index: 2;
      filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15));
    }
    .app-screenshot { width: 100%; height: auto; display: block; border-radius: 40px; }

    /* --- SECTIONS --- */
    .steps-section { padding: 100px 0; background: #fff; }
    .section-header { text-align: center; margin-bottom: 60px; max-width: 600px; margin: 0 auto 60px; }
    .section-header h2 { font-size: 2.2rem; font-weight: 800; margin-bottom: 12px; color: #111; line-height: 1.2; }
    .section-header p { font-size: 1.1rem; color: #64748B; }

    .steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
    .step-card {
      padding: 32px; border-radius: 24px; text-align: center;
      background: #fff; border: 1px solid #F1F5F9; transition: 0.3s;
    }
    .step-card:hover { transform: translateY(-5px); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1); border-color: #E2E8F0; }
    .step-icon-bg { font-size: 3rem; margin-bottom: 20px; display: inline-block; }
    .step-card h3 { margin-bottom: 12px; font-size: 1.25rem; color: #111; font-weight: 700; }
    .step-card p { color: #64748B; line-height: 1.6; }
    .step-card em { color: #059669; font-style: normal; font-weight: 600; background: #ECFDF5; padding: 0 4px; border-radius: 4px; }

    /* --- BENTO GRID --- */
    .features-section { padding: 100px 0; background: #F8FAFC; }
    .bento-grid {
      display: grid; grid-template-columns: 1fr; gap: 24px;
      @media(min-width: 768px) { grid-template-columns: 1fr 1fr 1fr; grid-template-rows: 280px 280px; }
    }
    .bento-item {
      border-radius: 30px; padding: 32px; overflow: hidden; position: relative;
      background: #fff; border: 1px solid #F1F5F9;
      transition: 0.3s; display: flex; flex-direction: column; justify-content: space-between;
      &:hover { box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1); transform: translateY(-4px); }
    }
    .bento-item.large { @media(min-width: 768px) { grid-column: span 2; } }

    /* Specific Bento Styles */
    .item-1 { background: #ECFDF5; border: none; }
    .item-2 { background: #FFF; }
    .item-3 { background: #F0F9FF; border-color: #E0F2FE; }
    .item-4 { background: #1F2937; color: #fff; border: none; }

    .item-4 h3, .item-4 p { color: #fff; }
    .item-4 p { opacity: 0.8; }
    .item-4 em { color: #FDBA74; font-style: normal; } /* Orange accent for muscles */
    .item-2 em { color: #2563EB; font-style: normal; font-weight: 600; }

    .bento-content h3 { font-size: 1.5rem; margin-bottom: 12px; font-weight: 700; line-height: 1.2; }
    .bento-content p { font-size: 0.95rem; line-height: 1.6; color: #4B5563; }
    .item-1 .bento-content p { color: #065F46; }
    .item-3 .bento-content p { color: #0C4A6E; }

    .visual-circle { position: absolute; border-radius: 50%; filter: blur(60px); z-index: 1; pointer-events: none; }
    .green-blur { bottom: -20px; right: -20px; width: 150px; height: 150px; background: rgba(38, 208, 124, 0.2); }
    .visual-icon { align-self: flex-end; font-size: 3rem; opacity: 1; margin-top: 16px; }
    .floating-icon { opacity: 0.6; }

    /* --- INFO / CONTENT SECTIONS --- */
    .info-section { padding: 90px 0; background: #fff; }
    .info-section.alt-bg { background: #F9FAFB; }

    .info-grid {
      display: flex;
      flex-direction: column-reverse;
      gap: 50px;
      align-items: center;
    }

    .info-grid.info-grid-reverse { flex-direction: column; }

    @media (min-width: 992px) {
      .info-grid { flex-direction: row; align-items: flex-start; }
      .info-grid.info-grid-reverse { flex-direction: row-reverse; }
    }

    .info-text { flex: 1; max-width: 620px; }
    .info-image { flex: 1; display: flex; justify-content: center; }

    .info-eyebrow {
      display: inline-block; font-size: 0.85rem; font-weight: 600; text-transform: uppercase;
      letter-spacing: 0.08em; color: #059669; margin-bottom: 12px;
    }

    .info-text h2 { font-size: 2rem; font-weight: 800; margin-bottom: 24px; line-height: 1.2; }
    .info-text p { margin-bottom: 16px; color: #4B5563; line-height: 1.7; }

    .bullet-list {
      list-style: none; padding: 0; margin: 0;
      display: flex; flex-direction: column; gap: 24px;
    }

    .bullet-list li { display: flex; gap: 16px; align-items: flex-start; }

    .bullet-icon {
      width: 42px; height: 42px; border-radius: 12px; background: #ECFDF5;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.3rem; flex-shrink: 0; color: #059669;
    }

    .bullet-list strong { display: block; margin-bottom: 6px; color: #111827; font-size: 1.1rem; }
    .bullet-list p { margin: 0; color: #64748B; font-size: 0.95rem; }

    .screenshot-frame {
      max-width: 300px; width: 100%;
    }

    .screenshot-frame img { display: block; width: 100%; height: auto; }

    .container.narrow { max-width: 800px; text-align: center; }
    .info-text-wide { max-width: 700px; margin: 0 auto; color: #4B5563; font-size: 0.98rem; line-height: 1.7; }
    .info-text-wide p { margin-bottom: 16px; }

    /* --- CTA --- */
    .cta-section { padding: 80px 0 120px; }
    .cta-box {
      border-radius: 40px; padding: 70px 24px; text-align: center; color: white;
      background: linear-gradient(135deg, #10B981 0%, #047857 100%);
      box-shadow: 0 20px 40px -10px rgba(16, 185, 129, 0.4);
      position: relative; overflow: hidden;
    }
    .cta-box h2 {
      color: white; margin-bottom: 16px; font-size: 2.5rem; position: relative; z-index: 2;
      background: none; -webkit-text-fill-color: white; font-weight: 800;
    }
    .cta-box p { color: rgba(255,255,255,0.9); margin-bottom: 32px; position: relative; z-index: 2; font-size: 1.1rem; }
    .btn-white {
      display: inline-block; padding: 14px 28px; border-radius: 12px; font-weight: 600; text-decoration: none;
      background: #fff; color: #047857; position: relative; z-index: 2; border: 2px solid transparent;
      transition: all 0.3s;
      &:hover { background: #F8FAFC; transform: translateY(-2px); box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
    }
  `]
})
export class HomeComponent {}
