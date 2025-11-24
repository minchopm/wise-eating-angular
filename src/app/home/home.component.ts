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
          <div class="badge-capsule">
            <span class="badge-dot"></span>
            <span>AI-Powered Food & Training Ecosystem</span>
          </div>

          <h1>Wise Eating –<br> <span class="text-highlight">The rhythm of your health.</span></h1>

          <p class="hero-sub">
            Stop guessing. Connect your nutrition, inventory, and training into one seamless timeline.
            Plan with precision, shop with intent, and understand how every meal fuels your movement.
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

          <!-- HERO PILLS (Using SVGs) -->
          <div class="hero-features">
            <div class="feature-pill">
              <!-- Shield Icon -->
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span>Privacy First</span>
            </div>
            <div class="feature-pill">
              <!-- Calendar Icon -->
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
              <span>Smart Timeline</span>
            </div>
            <div class="feature-pill">
              <!-- Activity Icon -->
              <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
              <span>Bio-Feedback</span>
            </div>
          </div>
        </div>

        <div class="hero-visual animate-float">
          <div class="phone-frame-clean">
            <!-- Ensure this image is high quality -->
            <img src="assets/nutritions_details_view.png" alt="Wise Eating App Interface" class="app-screenshot">
          </div>
        </div>
      </div>
    </section>

    <!-- WORKFLOW SECTION (The Wise Cycle) -->
    <section id="app-flow" class="steps-section">
      <div class="container">
        <div class="section-header">
          <span class="section-label">The Workflow</span>
          <h2>Orchestrate your entire day</h2>
          <p>Most apps handle just one piece of the puzzle. Wise Eating unifies the lifecycle of your health—from the grocery store to the gym floor—giving you a complete picture of your body's inputs and outputs.</p>
        </div>

        <div class="steps-grid">
          <!-- Step 1 -->
          <div class="step-card">
            <div class="step-icon-bg">
              <!-- Search Icon -->
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
            <h3>1. Find &amp; Filter</h3>
            <p>Go beyond basic calorie counting. Use advanced semantic search to find foods that match your exact macro goals, allergen restrictions, and age requirements. Build your database with precision.</p>
          </div>

          <!-- Step 2 -->
          <div class="step-card">
            <div class="step-icon-bg">
              <!-- Box/Inventory Icon -->
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
            </div>
            <h3>2. Stock &amp; Manage</h3>
            <p>Your fridge is an inventory. Track batches, expiration dates, and real-time quantities in grams. Reduce waste and know exactly what ingredients you have available for your next meal.</p>
          </div>

          <!-- Step 3 -->
          <div class="step-card">
            <div class="step-icon-bg">
              <!-- Timeline/Layers Icon -->
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
            </div>
            <h3>3. Schedule &amp; Sync</h3>
            <p>Visualize your day on a vertical timeline. Place your meals and workouts in chronological order to understand how your fueling strategy impacts your training performance and recovery.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FEATURE DEEP DIVE (Bento Grid) -->
    <section id="features" class="features-section">
      <div class="container">
        <div class="section-header">
          <h2>Data that drives decisions</h2>
          <p>We believe in granular control. Whether it is the specific muscle group you just trained or the micronutrient density of your lunch, Wise Eating visualizes the data that matters most.</p>
        </div>

        <div class="bento-grid">

          <!-- Feature 1: The Timeline -->
          <div class="bento-item large item-timeline">
            <div class="bento-content">
              <div class="bento-icon-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3>The Integrated Timeline</h3>
              <p>Life isn't a static list. It's a flow. See your nutrition and training interwoven in one vertical view. Understand the relationship between your 12:00 PM meal and your 5:00 PM energy levels.</p>
            </div>
            <div class="visual-circle green-blur"></div>
            <!-- Large decorative SVG -->
            <div class="visual-svg">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#065F46" stroke-width="1" opacity="0.1"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            </div>
          </div>

          <!-- Feature 2: Smart Search -->
          <div class="bento-item item-search">
            <div class="bento-content">
              <div class="bento-icon-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
              <h3>Natural Language Intelligence</h3>
              <p>Type exactly what you need. Filter by complex criteria like <em>"High protein, no dairy, suitable for toddlers"</em> instantly.</p>
            </div>
          </div>

          <!-- Feature 3: Storage -->
          <div class="bento-item item-storage">
            <div class="bento-content">
              <div class="bento-icon-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
              </div>
              <h3>Pantry &amp; Storage</h3>
              <p>Track open batches and available grams. Manage your kitchen like a professional supply chain.</p>
            </div>
          </div>

          <!-- Feature 4: Training -->
          <div class="bento-item large item-training">
            <div class="bento-content">
              <div class="bento-icon-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6.5 17h11"/><path d="M6 20v-2a6 6 0 1 1 12 0v2"/><path d="M15 11l-3-3-3 3"/><path d="M12 8v9"/></svg>
              </div>
              <h3>Training &amp; Bio-Feedback</h3>
              <p>Map your workouts to specific muscle groups. Then, connect the dots: log how your body feels post-training—energized, heavy, or recovering. Turn feelings into actionable data.</p>
            </div>
            <div class="visual-svg">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#FDBA74" stroke-width="1" opacity="0.1"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line></svg>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- NUTRITION SCIENCE (Text Heavy) -->
    <section id="why-nutrition" class="info-section">
      <div class="container info-grid">
        <div class="info-text">
          <span class="info-eyebrow">The Science of Balance</span>
          <h2>Why we track nutrients, not just calories.</h2>
          <p>Modern nutrition science teaches us that the quality of fuel matters just as much as the quantity. A calorie is a unit of energy, but micronutrients are the keys that unlock your body's potential.</p>
          <p>Our bodies require a complex symphony of around 40 different micronutrients—vitamins, minerals, and essential fatty acids—to regulate hormones, rebuild muscle tissue, and maintain cognitive sharpness.</p>
          <p>Wise Eating moves beyond simple tracking. We provide a comprehensive dashboard that highlights your intake of essentials like Zinc, Magnesium, Vitamin B6, and Iron. By visualizing these metrics alongside your training, you can identify gaps in your recovery strategy and adjust your diet to support long-term longevity rather than short-term fluctuations.</p>
        </div>
        <div class="info-image">
          <div class="screenshot-frame">
            <img src="assets/screenshots/wise-eating-nutrients.jpeg" alt="Wise Eating nutrient dashboard" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-box">
          <h2>Your health, organized.</h2>
          <p>Experience the clarity of having your meals, workouts, and inventory in one intelligent system.</p>
          <a href="https://apps.apple.com" target="_blank" class="btn btn-white">View in App Store</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* --- GLOBAL / TYPOGRAPHY --- */
    :host {
      --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      --primary-dark: #111827;
      --primary-green: #059669;
      --text-gray: #4B5563;
      --bg-light: #F8FAFC;
    }

    * { box-sizing: border-box; }

    section { font-family: var(--font-family); }

    /* --- HERO SECTION --- */
    .hero {
      position: relative; overflow: hidden; padding: 140px 0 100px;
      background: var(--bg-light);
    }
    .hero-blob {
      position: absolute; border-radius: 50%; filter: blur(100px); z-index: 0; opacity: 0.5;
    }
    .blob-1 { top: -20%; right: -10%; width: 700px; height: 700px; background: #D1FAE5; }
    .blob-2 { bottom: 0%; left: -10%; width: 600px; height: 600px; background: #E0E7FF; }

    .hero-container {
      position: relative; z-index: 1; display: flex; align-items: center; gap: 70px;
      flex-direction: column; text-align: center;
      @media(min-width: 992px) { flex-direction: row; text-align: left; }
    }
    .hero-text { flex: 1; }

    .badge-capsule {
      display: inline-flex; align-items: center; gap: 8px; padding: 6px 14px;
      background: #fff; border: 1px solid #E2E8F0;
      color: var(--primary-dark); border-radius: 50px;
      font-size: 0.85rem; font-weight: 600; letter-spacing: 0.02em;
      margin-bottom: 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
    }
    .badge-dot { width: 8px; height: 8px; background: var(--primary-green); border-radius: 50%; }

    h1 {
      font-size: 2.75rem; font-weight: 800; color: #0F172A; margin-bottom: 24px;
      letter-spacing: -0.03em; line-height: 1.1;
      @media(min-width: 768px) { font-size: 4rem; }
    }

    .text-highlight {
      background: linear-gradient(135deg, #059669 0%, #10B981 100%);
      -webkit-background-clip: text; -webkit-text-fill-color: transparent;
    }

    .hero-sub {
      font-size: 1.2rem; margin-bottom: 36px; max-width: 560px; color: var(--text-gray);
      margin-left: auto; margin-right: auto; line-height: 1.6; font-weight: 400;
      @media(min-width: 992px){ margin-left: 0; }
    }

    .app-buttons { margin-bottom: 32px; }
    .btn-primary {
      background: #000; color: #fff;
      box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.2);
    }
    .app-store-btn {
      display: inline-flex; align-items: center; gap: 12px;
      padding: 14px 28px; border-radius: 16px; transition: all 0.3s ease; text-decoration: none;
      div { display: flex; flex-direction: column; line-height: 1.1; text-align: left; }
      small { font-size: 0.75rem; opacity: 0.8; font-weight: 500; }
      span { font-size: 1.25rem; font-weight: 600; letter-spacing: 0.02em; }
    }
    .app-store-btn:hover { transform: translateY(-3px); box-shadow: 0 20px 30px -10px rgba(0,0,0,0.25); }

    /* --- HERO ICONS --- */
    .hero-features {
      display: flex; align-items: center; justify-content: center; gap: 16px;
      flex-wrap: wrap;
      @media(min-width: 992px) { justify-content: flex-start; }
    }
    .feature-pill {
      display: flex; align-items: center; gap: 8px;
      background: rgba(255,255,255,0.6); border: 1px solid rgba(0,0,0,0.05);
      padding: 8px 14px; border-radius: 12px; backdrop-filter: blur(8px);
      font-size: 0.9rem; font-weight: 500; color: #334155;
    }
    .feature-pill .icon { width: 18px; height: 18px; color: var(--primary-green); }

    /* --- PHONE VISUAL --- */
    .hero-visual { flex: 1; display: flex; justify-content: center; width: 100%; }
    .phone-frame-clean {
      position: relative; width: 100%; max-width: 340px; height: auto; z-index: 2;
      filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.12));
      transition: transform 0.5s ease;
    }
    .app-screenshot { width: 100%; height: auto; display: block; border-radius: 48px; }

    /* --- STEPS / WORKFLOW --- */
    .steps-section { padding: 120px 0; background: #fff; }
    .section-header { text-align: center; margin-bottom: 80px; max-width: 700px; margin: 0 auto 80px; }
    .section-label {
      font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--primary-green);
      display: block; margin-bottom: 16px;
    }
    .section-header h2 { font-size: 2.5rem; font-weight: 800; margin-bottom: 20px; color: #0F172A; letter-spacing: -0.02em; }
    .section-header p { font-size: 1.15rem; color: #64748B; line-height: 1.7; }

    .steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; }
    .step-card {
      padding: 40px 32px; border-radius: 32px; text-align: left;
      background: #FAFAFA; border: 1px solid transparent; transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .step-card:hover {
      background: #fff; transform: translateY(-8px);
      box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08); border-color: #E2E8F0;
    }
    .step-icon-bg {
      width: 64px; height: 64px; border-radius: 20px; background: #fff;
      display: flex; align-items: center; justify-content: center; margin-bottom: 24px;
      color: #0F172A; border: 1px solid #E2E8F0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
    }
    .step-card h3 { margin-bottom: 16px; font-size: 1.4rem; color: #0F172A; font-weight: 700; }
    .step-card p { color: #64748B; line-height: 1.7; font-size: 1rem; }

    /* --- BENTO GRID --- */
    .features-section { padding: 100px 0; background: #F8FAFC; }
    .bento-grid {
      display: grid; grid-template-columns: 1fr; gap: 24px;
      @media(min-width: 768px) { grid-template-columns: 1fr 1fr 1fr; grid-template-rows: minmax(300px, auto) minmax(300px, auto); }
    }
    .bento-item {
      border-radius: 32px; padding: 40px; overflow: hidden; position: relative;
      background: #fff; border: 1px solid rgba(0,0,0,0.03); box-shadow: 0 4px 20px rgba(0,0,0,0.02);
      transition: 0.3s; display: flex; flex-direction: column; justify-content: flex-start;
    }
    .bento-item:hover { transform: translateY(-4px); box-shadow: 0 20px 40px -10px rgba(0,0,0,0.08); }

    .bento-item.large { @media(min-width: 768px) { grid-column: span 2; } }

    .bento-icon-sm {
      width: 40px; height: 40px; background: #F1F5F9; border-radius: 12px;
      display: flex; align-items: center; justify-content: center; margin-bottom: 20px;
      color: #334155;
    }

    /* Individual Bento Styles */
    .item-timeline { background: #ECFDF5; border: 1px solid #D1FAE5; }
    .item-timeline .bento-content h3 { color: #064E3B; }
    .item-timeline .bento-content p { color: #065F46; opacity: 0.9; }
    .item-timeline .bento-icon-sm { background: rgba(255,255,255,0.6); color: #059669; }

    .item-search { background: #fff; }

    .item-storage { background: #F0F9FF; border: 1px solid #E0F2FE; }
    .item-storage .bento-content h3 { color: #0C4A6E; }
    .item-storage .bento-content p { color: #0369A1; opacity: 0.9; }
    .item-storage .bento-icon-sm { background: rgba(255,255,255,0.6); color: #0284C7; }

    .item-training { background: #111827; color: #fff; border: none; }
    .item-training .bento-content h3 { color: #fff; }
    .item-training .bento-content p { color: #9CA3AF; }
    .item-training .bento-icon-sm { background: #1F2937; color: #FDBA74; }

    .bento-content h3 { font-size: 1.6rem; margin-bottom: 14px; font-weight: 700; line-height: 1.2; letter-spacing: -0.01em; }
    .bento-content p { font-size: 1.05rem; line-height: 1.6; }

    .visual-circle { position: absolute; border-radius: 50%; filter: blur(70px); z-index: 1; pointer-events: none; }
    .green-blur { bottom: -30px; right: -30px; width: 180px; height: 180px; background: rgba(38, 208, 124, 0.3); }

    .visual-svg {
      position: absolute; bottom: -10px; right: -10px; z-index: 1;
      transform: rotate(-10deg) scale(1.2); pointer-events: none;
    }

    /* --- INFO SECTION --- */
    .info-section { padding: 120px 0; background: #fff; }
    .info-grid { display: flex; flex-direction: column-reverse; gap: 60px; align-items: center; }
    @media (min-width: 992px) { .info-grid { flex-direction: row; align-items: center; } }

    .info-text { flex: 1; max-width: 600px; }
    .info-image { flex: 1; display: flex; justify-content: center; position: relative; }

    .info-eyebrow {
      font-size: 0.85rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
      color: var(--primary-green); margin-bottom: 16px; display: block;
    }
    .info-text h2 { font-size: 2.25rem; font-weight: 800; margin-bottom: 24px; line-height: 1.2; color: #0F172A; }
    .info-text p { margin-bottom: 20px; color: #475569; line-height: 1.8; font-size: 1.1rem; }

    .screenshot-frame {
      border-radius: 40px; overflow: hidden; border: 6px solid #F8FAFC;
      box-shadow: 0 30px 60px -15px rgba(0,0,0,0.15);
      max-width: 320px; width: 100%;
    }
    .screenshot-frame img { display: block; width: 100%; height: auto; }

    /* --- CTA --- */
    .cta-section { padding: 80px 0 120px; background: #fff; }
    .cta-box {
      border-radius: 48px; padding: 80px 24px; text-align: center; color: white;
      background: linear-gradient(135deg, #064E3B 0%, #047857 100%);
      box-shadow: 0 30px 60px -20px rgba(6, 78, 59, 0.5);
      position: relative; overflow: hidden;
    }
    .cta-box h2 {
      color: white; margin-bottom: 20px; font-size: 3rem; position: relative; z-index: 2;
      font-weight: 800; letter-spacing: -0.02em;
    }
    .cta-box p { color: rgba(255,255,255,0.85); margin-bottom: 40px; position: relative; z-index: 2; font-size: 1.25rem; max-width: 600px; margin-left: auto; margin-right: auto; }
    .btn-white {
      display: inline-block; padding: 18px 36px; border-radius: 16px; font-weight: 600; text-decoration: none;
      background: #fff; color: #064E3B; position: relative; z-index: 2; font-size: 1.1rem;
      transition: all 0.3s;
    }
    .btn-white:hover { transform: translateY(-4px); box-shadow: 0 15px 30px rgba(0,0,0,0.2); }
  `]
})
export class HomeComponent {}
