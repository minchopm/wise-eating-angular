import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="legal-wrapper">
      <!-- Background Blobs for Brand Consistency -->
      <div class="legal-blob blob-1"></div>
      <div class="legal-blob blob-2"></div>

      <div class="container relative-z">

        <!-- NAVIGATION: Moved outside the card for better layout -->
        <div class="nav-header">
          <a routerLink="/" class="btn-back">
            <span class="icon-circle">←</span>
            <span class="text">Back to Home</span>
          </a>
        </div>

        <!-- CARD: Glass/Clean Style -->
        <div class="legal-card">
          <h1>Terms of Service</h1>
          <div class="legal-meta">Last Updated: 05.05.2025</div>

          <div class="divider"></div>

          <div class="legal-content">
            <h3>Wise Eating App - Terms of Service</h3>
            <p><strong>Last Updated:</strong> 05.05.2025</p>
            <p>
              Please read these Terms of Service ("Terms") carefully before using the Wise Eating mobile application
              (the "Service") operated by <strong>Arte Soft Ltd.</strong> ("us", "we", or "our").
            </p>
            <p>
              Your access to and use of the Service is conditioned upon your acceptance of and compliance with these Terms.
              These Terms apply to all visitors, users, and others who wish to access or use the Service.
              By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms,
              then you do not have permission to access the Service.
            </p>

            <h3>1. Service Description</h3>
            <p>
              Wise Eating provides users with management features related to their personal information and data stored within the app
              and integrated services. Features may vary based on subscription level.
            </p>

            <h3>2. Subscriptions</h3>
            <ul>
              <li>
                Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a
                recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis,
                depending on the type of subscription plan you select.
              </li>
              <li>
                Subscriptions are managed and auto-renewed through the Apple App Store. You can manage or cancel your subscription
                via your App Store account settings.
              </li>
              <li>
                Failure to pay may result in suspension or termination of access to subscription features.
                Pricing is subject to change upon notice from us.
              </li>
            </ul>

            <h3>3. Accounts and Third-Party Services</h3>
            <ul>
              <li>
                When you connect third-party services, you grant us permission to access and process your data from those services
                as necessary to provide the Service functionality.
              </li>
              <li>
                Your use of third-party services is governed by their respective terms and privacy policies.
                We are not responsible for the data, policies, or practices of any third-party services.
              </li>
              <li>
                You are responsible for safeguarding any credentials used to access the Service or connected third-party services.
              </li>
            </ul>

            <h3>4. Use License</h3>
            <p>
              Subject to these Terms, we grant you a non-transferable, non-exclusive, revocable, limited license to use the Service
              solely for your personal, non-commercial purposes.
            </p>

            <h3>5. Restrictions</h3>
            <p>You agree not to:</p>
            <ul>
              <li>Modify, copy, or create derivative works based on the Service.</li>
              <li>Reverse engineer, decompile, or disassemble the Service.</li>
              <li>
                Use the Service for any illegal purpose or in violation of any local, state, national, or international law.
              </li>
              <li>Attempt to gain unauthorized access to the Service or its related systems or networks.</li>
            </ul>

            <h3>6. Intellectual Property</h3>
            <p>
              The Service and its original content (excluding user-provided data), features, and functionality are and will remain
              the exclusive property of <strong>Arte Soft Ltd.</strong> and its licensors.
            </p>

            <h3>7. Termination</h3>
            <p>
              We may terminate or suspend your access to the Service immediately, without prior notice or liability,
              under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.
              Upon termination, your right to use the Service will cease immediately.
            </p>

            <h3>8. Limitation of Liability</h3>
            <p>
              In no event shall <strong>Arte Soft Ltd.</strong>, nor its directors, employees, partners, agents, suppliers, or affiliates,
              be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation,
              loss of profits, data, use, goodwill, or other intangible losses, resulting from
              (i) your access to or use of or inability to access or use the Service;
              (ii) any conduct or content of any third party on the Service;
              (iii) any content obtained from the Service; and
              (iv) unauthorized access, use or alteration of your transmissions or content,
              whether based on warranty, contract, tort (including negligence) or any other legal theory,
              whether or not we have been informed of the possibility of such damage.
            </p>

            <h3>9. Disclaimer</h3>
            <p>
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis.
              The Service is provided without warranties of any kind, whether express or implied, including, but not limited to,
              implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </p>

            <h3>10. Governing Law</h3>
            <p>
              These Terms shall be governed and construed in accordance with the laws of <strong>Bulgaria</strong>,
              without regard to its conflict of law provisions.
            </p>

            <h3>11. Changes</h3>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
              If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              What constitutes a material change will be determined at our sole discretion.
              By continuing to access or use our Service after any revisions become effective,
              you agree to be bound by the revised terms.
            </p>

            <h3>12. Contact Us</h3>
            <p>
              If you have any questions about these Terms, please contact us at:
              <strong>support&#64;arte-soft.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    /* Wrapper & Background */
    .legal-wrapper {
      position: relative;
      padding: 120px 0 80px;
      background: var(--bg-light);
      min-height: 100vh;
      overflow: hidden;
    }

    .relative-z { position: relative; z-index: 2; }

    /* Subtle Background Blobs */
    .legal-blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      z-index: 0;
      opacity: 0.4;
    }
    .blob-1 {
      top: -10%;
      left: -10%;
      width: 600px;
      height: 600px;
      background: rgba(38, 208, 124, 0.2);
    }
    .blob-2 {
      bottom: 10%;
      right: -10%;
      width: 500px;
      height: 500px;
      background: rgba(139, 92, 246, 0.2);
    }

    /* Navigation Button */
    .nav-header {
      margin-bottom: 24px;
    }

    .btn-back {
      display: inline-flex;
      align-items: center;
      gap: 12px;
      font-weight: 600;
      color: var(--text-muted);
      transition: all 0.3s ease;
      text-decoration: none;
    }

    .icon-circle {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      background: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: var(--shadow-sm);
      border: 1px solid #E2E8F0;
      transition: all 0.3s ease;
    }

    .btn-back:hover .text { color: var(--primary-dark); }
    .btn-back:hover .icon-circle {
      background: var(--primary-green);
      color: white;
      border-color: var(--primary-green);
      transform: translateX(-4px);
    }

    /* Card Styles */
    .legal-card {
      background: rgba(255, 255, 255, 0.9);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 1);
      padding: 40px 30px;
      border-radius: 24px;
      box-shadow: var(--shadow-lg);
      max-width: 800px;
      margin: 0 auto;
    }
    @media (min-width: 768px) {
      .legal-card {
        padding: 60px;
      }
    }

    h1 {
      font-size: 2.5rem;
      margin-bottom: 10px;
      color: var(--text-main);
      background: var(--gradient-main);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: inline-block;
    }

    .legal-meta {
      color: var(--text-muted);
      font-size: 0.95rem;
      font-weight: 500;
    }

    .divider {
      height: 1px;
      background: linear-gradient(90deg, #E2E8F0 0%, transparent 100%);
      margin: 30px 0;
    }

    /* Content Typography */
    h3 {
      margin-top: 40px;
      margin-bottom: 16px;
      color: var(--text-main);
      font-size: 1.25rem;
    }

    p,
    li {
      line-height: 1.7;
      color: #4B5563;
      margin-bottom: 16px;
    }

    ul {
      list-style: disc;
      padding-left: 20px;
      margin-bottom: 24px;
    }

    li {
      margin-bottom: 8px;
    }

    .link-highlight {
      color: var(--accent-purple);
      font-weight: 600;
      border-bottom: 1px solid transparent;
    }
    .link-highlight:hover {
      border-bottom-color: var(--accent-purple);
    }
  `]
})
export class TermsComponent {}
