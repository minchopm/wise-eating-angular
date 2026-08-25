import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Seo } from '../../core/seo';
import { SITE } from '../../core/site';
import { PageHeadComponent } from '../../shared/page-head';

const UPDATED = '2026-08-24';

/**
 * Terms of service.
 *
 * Carried over from the 2025 text, with the operator changed to the US entity
 * and a health disclaimer added — the previous version described a generic
 * data app and said nothing about nutrition advice, which is the one thing
 * this product actually needs to disclaim.
 *
 * The governing law names Wyoming because that is where WiseEating LLC is
 * organised — Articles of Organization filed with the Wyoming Secretary of
 * State on 12 December 2025.
 *
 * ⚠ The limitation of liability is boilerplate and has not been checked
 * against Wyoming law by anyone qualified to do so.
 */
@Component({
  selector: 'we-terms',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeadComponent, RouterLink],
  template: `
    <we-page-head
      title="Terms of Service"
      eyebrow="Legal"
      lede="The agreement between you and WiseEating LLC for the use of the app and this site."
      meta="Last updated 24 August 2026"
    />

    <section class="section">
      <div class="wrap wrap--narrow prose">
        <p>
          Please read these Terms of Service ("Terms") before using the {{ site.storeName }} mobile
          application and this website (together, the "Service"), operated by
          {{ site.company }} ("we", "us", "our").
        </p>
        <p>
          By downloading, accessing or using the Service you agree to be bound by these Terms. If
          you do not agree with any part of them, do not use the Service.
        </p>

        <h2>1. What the Service is</h2>
        <p>
          {{ site.name }} is a nutrition and training planning tool. It provides food composition
          data drawn from USDA FoodData Central, search and filtering over that data, meal and
          training planning (including AI-assisted generation on paid tiers), pantry and shopping
          management, and a personal diary. Features vary by subscription tier.
        </p>

        <h2>2. Health disclaimer — read this one</h2>
        <p>
          <strong>
            {{ site.name }} is not a medical device and does not provide medical advice.
          </strong>
          It does not diagnose, treat, cure or prevent any disease or condition. Nutrient values
          shown in the app are estimates derived from public composition data; the actual content of
          a food varies with variety, soil, season, storage and preparation.
        </p>
        <p>
          Do not use the Service as a substitute for professional advice. If you have a medical
          condition, are pregnant, are managing a child's diet, or have symptoms of any kind,
          consult a qualified clinician. If you believe you have a medical emergency, contact your
          local emergency service.
        </p>
        <p>
          AI-generated meal and training plans are suggestions produced by software. They are not
          reviewed by a clinician or a dietitian, and you remain responsible for deciding whether
          they are appropriate for you.
        </p>

        <h2>3. Subscriptions and payment</h2>
        <ul>
          <li>
            Parts of the Service are sold as auto-renewing subscriptions billed monthly or annually
            through the Apple App Store.
          </li>
          <li>
            Payment is taken by Apple at confirmation of purchase. Subscriptions renew automatically
            unless cancelled at least 24 hours before the end of the current period.
          </li>
          <li>
            You manage and cancel subscriptions in your Apple ID account settings, not through us.
            Refunds are handled by Apple under their own policy.
          </li>
          <li>
            Prices may change. Where a change affects an existing subscription, Apple will notify
            you and ask you to confirm before it takes effect.
          </li>
        </ul>

        <h2>4. Your content</h2>
        <p>
          Everything you record in the app remains yours. It is stored on your device and, if you
          enable it, in your own iCloud — we hold no copy and claim no rights over it. See the
          <a routerLink="/privacy">Privacy Policy</a> for the detail.
        </p>
        <p>
          You are responsible for keeping your own backups. Deleting the app, or removing its iCloud
          data through iOS Settings, deletes your content permanently and we cannot restore it.
        </p>

        <h2>5. Licence</h2>
        <p>
          Subject to these Terms, we grant you a personal, revocable, non-exclusive,
          non-transferable licence to use the Service for your own purposes, including professional
          use with your own clients where your tier permits it.
        </p>

        <h2>6. What you may not do</h2>
        <ul>
          <li>Reverse engineer, decompile or disassemble the app, except where law permits it.</li>
          <li>Extract or redistribute the bundled food database as a dataset in its own right.</li>
          <li>Use the Service to provide clinical diagnosis or to represent its output as such.</li>
          <li>Use the Service unlawfully, or attempt to gain unauthorised access to our systems.</li>
        </ul>

        <h2>7. Third-party data and services</h2>
        <p>
          Food composition data originates from USDA FoodData Central, a public dataset published by
          the United States Department of Agriculture. We present it in good faith and do not
          warrant its completeness or accuracy for any particular purpose.
        </p>
        <p>
          The Service relies on Apple's platform services, and the free tier includes third-party
          advertising. Your use of those is governed by the respective providers' own terms.
        </p>

        <h2>8. Intellectual property</h2>
        <p>
          The Service, its design, software and original content — excluding the public food data
          and excluding anything you create — are the property of {{ site.company }} and its
          licensors.
        </p>

        <h2>9. Termination</h2>
        <p>
          We may suspend or end your access if you breach these Terms. You may stop using the
          Service at any time by deleting the app; cancel any active subscription through Apple
          first, as deleting the app does not cancel it.
        </p>

        <h2>10. Warranties and liability</h2>
        <p>
          The Service is provided "as is" and "as available", without warranties of any kind, express
          or implied, including merchantability, fitness for a particular purpose and
          non-infringement.
        </p>
        <p>
          To the fullest extent permitted by law, {{ site.company }} and its officers, employees and
          suppliers are not liable for indirect, incidental, special, consequential or punitive
          damages, or for loss of profits, data or goodwill, arising from your use of or inability
          to use the Service.
        </p>
        <p>
          Nothing in these Terms excludes liability that cannot lawfully be excluded, including for
          death or personal injury caused by negligence, or for fraud.
        </p>

        <h2>11. Governing law</h2>
        <p>
          {{ site.company }} is a limited liability company organised under the laws of the State of
          {{ site.companyState }}, {{ site.companyCountry }}. These Terms are governed by
          {{ site.companyState }} law and applicable United States federal law, without regard to
          conflict-of-law rules, and any dispute will be brought in the state or federal courts
          sitting in {{ site.companyState }}.
        </p>
        <p>
          If you are a consumer resident in the European Union, the United Kingdom or another
          jurisdiction whose law gives you the right to bring proceedings locally and to the
          protection of your own consumer law, nothing here takes that right away.
        </p>

        <h2>12. Changes</h2>
        <p>
          We may revise these Terms. Where a revision is material we will give at least 30 days'
          notice in the app or on this site before it takes effect. Continuing to use the Service
          after that means you accept the revised Terms.
        </p>

        <h2>13. Contact</h2>
        <p>
          {{ site.company }}<br />
          {{ site.address.street }}<br />
          {{ site.address.city }}, {{ site.address.region }} {{ site.address.postalCode }},
          {{ site.companyCountry }}<br />
          <a [href]="'mailto:' + site.legalEmail">{{ site.legalEmail }}</a>
        </p>
        <p>
          Apple's standard end user licence agreement also applies to the app:
          <a
            href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
            target="_blank"
            rel="noopener noreferrer"
            >apple.com/legal/internet-services/itunes/dev/stdeula</a
          >.
        </p>
      </div>
    </section>
  `,
})
export class TermsComponent {
  readonly site = SITE;

  constructor() {
    inject(Seo).apply({
      title: 'Terms of Service',
      path: '/terms',
      updated: UPDATED,
      description:
        `The terms governing use of ${SITE.name} and this website, including the health ` +
        'disclaimer, how App Store subscriptions work, and who owns what you record in the app.',
    });
  }
}
