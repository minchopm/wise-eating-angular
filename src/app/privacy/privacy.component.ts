import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="legal-wrapper">
      <!-- Prismatic Background Blobs -->
      <div class="legal-blob blob-1"></div>
      <div class="legal-blob blob-2"></div>

      <div class="container relative-z">

        <!-- NAVIGATION: Moved outside the card -->
        <div class="nav-header">
          <a routerLink="/" class="btn-back">
            <span class="icon-circle">←</span>
            <span class="text">Back to Home</span>
          </a>
        </div>

        <!-- CARD: Glass/Clean Style -->
        <div class="legal-card">
          <h1>Privacy Policy</h1>
          <div class="legal-meta">Last Updated: 05.05.2025</div>

          <div class="divider"></div>

          <div class="legal-content">
            <h3>Privacy Policy for Wise Eating App</h3>
            <p><strong>Last Updated:</strong> 05.05.2025</p>
            <p>
              Thank you for using Wise Eating ("App"). This Privacy Policy describes how your personal information
              is handled when you use our App.
            </p>

            <h3>Information We Collect</h3>
            <p>
              Wise Eating is designed so that your data stays under your control. We, as the developer, do not
              collect or store your personal data on our own servers.
            </p>
            <ul>
              <li>
                <strong>On-Device Data:</strong>
                Information you enter in the App (such as meals, shopping lists, notes, or other content) is stored
                locally on your device or, where applicable, in your private Apple iCloud account linked to your Apple ID.
                We do not have access to this information.
              </li>
              <li>
                <strong>Apple Calendar Usage:</strong>
                When you choose to save meals, shopping lists, or notes to Apple Calendar from within the App, these entries
                are stored directly in your personal Apple account (iCloud or local calendars) and remain under your control.
                The App accesses this data only on your device as needed to display and manage your events. We do not receive
                your Apple ID credentials and we do not copy this information to our own infrastructure.
              </li>
              <li>
                <strong>No Analytics, Device or Location Tracking:</strong>
                We do not collect usage data about how you interact with the App, we do not collect device information
                (such as device model or operating system version) for analytics, and we do not use location services
                or store your location data.
              </li>
            </ul>

            <h3>How We Use Your Information</h3>
            <p>
              Because we do not collect your personal data on our own servers, any information you provide is used
              only on your device (or in your private iCloud) to power the App’s features.
            </p>
            <ul>
              <li>To display and manage your meals, shopping lists, notes, and related information within the App.</li>
              <li>To allow you to save and view these items in Apple Calendar if you choose to do so.</li>
              <li>To process subscription payments via Apple’s App Store (billing and payment details are handled by Apple).</li>
            </ul>

            <h3>Sharing Your Information</h3>
            <p>
              We do not sell your personal information and we do not share your in-App data with third parties for
              marketing or analytics.
            </p>
            <ul>
              <li>
                <strong>Apple Services:</strong>
                When you use Apple services (such as Apple Calendar, iCloud, or in-app purchases) through the App,
                data is handled according to Apple’s APIs and policies. Please refer to Apple’s privacy policy for details.
              </li>
              <li>
                <strong>Legal Requirements:</strong>
                If ever required by law, subpoena, or other legal process, we may be obliged to disclose limited information,
                but as we do not host your personal content, what we can disclose is inherently minimal.
              </li>
            </ul>

            <h3>Data Security</h3>
            <p>
              Your data is stored using Apple’s security and storage mechanisms (on your device and/or in iCloud).
              While no system can be guaranteed completely secure, Apple’s infrastructure provides industry-standard protections
              for your data.
            </p>

            <h3>Your Choices and Rights</h3>
            <ul>
              <li>You can manage what you store in Wise Eating directly within the App.</li>
              <li>You can control access to Apple Calendar, iCloud, and other permissions through your device settings.</li>
              <li>
                Depending on your jurisdiction, you may have rights to access, correct, or delete your personal information.
                Because we do not host your data, such actions are typically managed through your device and Apple services.
              </li>
            </ul>

            <h3>Cookies and Tracking Technologies</h3>
            <p>
              Wise Eating does not use cookies or third-party tracking technologies within the App. Any tracking or identifiers
              used by Apple’s App Store or system services are governed by Apple’s own policies.
            </p>

            <h3>Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy
              within the App or by other appropriate means.
            </p>

            <h3>Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <strong>office&#64;arte-soft.com</strong>
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

    /* Background Blobs - Consistent with Brand */
    .legal-blob {
      position: absolute;
      border-radius: 50%;
      filter: blur(80px);
      z-index: 0;
      opacity: 0.4;
    }
    .blob-1 {
      top: -5%;
      right: -5%;
      width: 500px;
      height: 500px;
      background: rgba(38, 208, 124, 0.25);
    }
    .blob-2 {
      bottom: 15%;
      left: -10%;
      width: 450px;
      height: 450px;
      background: rgba(139, 92, 246, 0.25);
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

    .btn-back:hover .text {
      color: var(--primary-dark);
    }
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
      -webkit-backdrop-filter: blur(10px);
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
      /* Gradient Text Effect */
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
      font-weight: 700;
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
      transition: 0.2s;
    }
    .link-highlight:hover {
      border-bottom-color: var(--accent-purple);
    }
  `]
})
export class PrivacyComponent {}
