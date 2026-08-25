import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { Seo } from '../../core/seo';
import { SITE } from '../../core/site';
import { PageHeadComponent } from '../../shared/page-head';

/** The date the text below last changed materially. */
const UPDATED = '2026-08-24';

/**
 * The privacy policy.
 *
 * Rewritten from the 2025 version to describe the app as it is now rather than
 * as it was when it shipped: the free tier carries advertising, and this site
 * runs analytics. The previous text said neither, which is the kind of gap
 * that turns an App Store privacy label into a review problem.
 *
 * ⚠ WiseEating LLC should have this reviewed by counsel before it is relied
 * on, and the App Store privacy questionnaire re-checked against it — in
 * particular the categories the advertising SDK collects.
 */
@Component({
  selector: 'we-privacy',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [PageHeadComponent],
  template: `
    <we-page-head
      title="Privacy Policy"
      eyebrow="Legal"
      lede="What Wise Eating does and does not know about you."
      meta="Last updated 24 August 2026"
    />

    <section class="section">
      <div class="wrap wrap--narrow prose">
        <h2>The short version</h2>
        <p>
          What you record in {{ site.name }} — meals, plans, recipes, workouts, notes, your pantry —
          is stored on your device, and in your own iCloud if you have that turned on. It is not
          uploaded to us and we cannot read it. There is no {{ site.name }} account to create and no
          server of ours holding your food diary.
        </p>
        <p>
          Two things do involve other companies: Apple, because the app runs on their platform and
          they handle payment, and an advertising provider, because the free tier of the app shows
          adverts. Both are described in full below.
        </p>

        <h2>Who we are</h2>
        <p>
          {{ site.name }} is operated by {{ site.company }}, a limited liability company
          organised in the State of {{ site.companyState }}, {{ site.companyCountry }}, at
          {{ site.address.street }}, {{ site.address.city }}, {{ site.address.region }}
          {{ site.address.postalCode }}. The App Store listing is currently published under the
          developer account of {{ site.storeSeller }}. You can reach us at
          <a [href]="'mailto:' + site.privacyEmail">{{ site.privacyEmail }}</a
          >.
        </p>

        <h2>What stays on your device</h2>
        <p>
          Everything you enter is written to local storage on your iPhone or iPad, and — if you have
          enabled it in iOS — synchronised through your private iCloud account. That includes:
        </p>
        <ul>
          <li>Meals, food diary entries, plans and personal recipes, including any photos you add</li>
          <li>Pantry and storage contents, quantities, expiry dates and prices</li>
          <li>Workouts, sets, reps and perceived effort</li>
          <li>Mood, energy and symptom entries, and any notes attached to them</li>
          <li>Your goals, dietary preferences, allergens and age settings</li>
        </ul>
        <p>
          We have no access to any of it. If you delete the app, the local copy goes with it; the
          iCloud copy is managed through your Apple ID in iOS Settings.
        </p>

        <h2>The food database</h2>
        <p>
          The USDA food catalogue ships inside the app rather than being fetched from a server.
          Searching, filtering and looking up a nutrient panel therefore happen entirely on the
          device — no query you type is sent anywhere.
        </p>

        <h2>Apple services</h2>
        <ul>
          <li>
            <strong>iCloud.</strong> If enabled, your {{ site.name }} data syncs through your own
            iCloud account. We do not receive your Apple ID credentials and we hold no copy.
          </li>
          <li>
            <strong>Apple Calendar.</strong> When you choose to save a meal, a shopping list or a
            note to Calendar, the entry is written directly into your own calendar on the device.
          </li>
          <li>
            <strong>In-app purchases.</strong> Subscriptions are sold, billed and renewed by Apple.
            We never see your payment details. We receive only Apple's confirmation of what you are
            entitled to.
          </li>
        </ul>
        <p>
          Apple's own handling of that data is governed by
          <a href="https://www.apple.com/legal/privacy/" target="_blank" rel="noopener noreferrer"
            >Apple's Privacy Policy</a
          >.
        </p>

        <h2>Advertising</h2>
        <p>
          The free tier of the app shows adverts supplied by a third-party advertising network. To
          serve them, that network may process an advertising identifier, coarse location derived
          from your IP address, and technical information about your device. It does not receive
          your food diary, your plans, your health entries or anything else you record in the app.
        </p>
        <p>
          On iOS, tracking across apps and websites requires your explicit permission through App
          Tracking Transparency. If you decline, adverts are still shown but are not personalised.
          You can change your answer at any time in
          <strong>Settings → Privacy &amp; Security → Tracking</strong>.
        </p>
        <p>
          Any paid tier that removes advertising removes this processing along with it.
        </p>

        <h2>This website</h2>
        <p>
          The site you are reading uses Google Analytics to count visits and see which pages are
          read, and Google AdSense on some pages. Both may set cookies and process your IP address.
          Nothing on this website is connected to your in-app data, and there is nothing to sign in
          to here.
        </p>
        <p>
          You can block this entirely with any content blocker, or through your browser's own
          settings, without losing access to anything on the site.
        </p>

        <h2>What we do not do</h2>
        <ul>
          <li>We do not sell personal information.</li>
          <li>We do not upload your food, health or training entries to our servers.</li>
          <li>We do not use location services in the app.</li>
          <li>We do not build advertising profiles from what you eat.</li>
        </ul>

        <h2>Children</h2>
        <p>
          The app is rated {{ site.contentRating }} and is intended for adults, including adults
          planning food for a child. It is not directed at children, and we do not knowingly collect
          information from them.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on where you live — the GDPR in the EU and UK, the CCPA/CPRA in California,
          and comparable laws elsewhere — you have rights to access, correct, delete and port your
          personal information, and to object to certain processing.
        </p>
        <p>
          Because your content lives on your device and in your own iCloud, most of those rights are
          exercised directly: delete an entry in the app, or remove the app and its iCloud data
          through iOS Settings. For anything else, or for a request about the advertising or
          analytics described above, write to
          <a [href]="'mailto:' + site.privacyEmail">{{ site.privacyEmail }}</a> and we will respond
          within the period the applicable law allows.
        </p>

        <h2>Security</h2>
        <p>
          Your data rests inside Apple's device and iCloud protections. No system is perfectly
          secure, but keeping your content off our infrastructure means there is no database of ours
          for anyone to breach.
        </p>

        <h2>Changes</h2>
        <p>
          We will update this policy when the app changes in a way that affects it, and the date at
          the top of this page will change with it. Material changes will be announced in the app.
        </p>

        <h2>Contact</h2>
        <p>
          {{ site.company }}<br />
          {{ site.address.street }}<br />
          {{ site.address.city }}, {{ site.address.region }} {{ site.address.postalCode }},
          {{ site.companyCountry }}<br />
          <a [href]="'mailto:' + site.privacyEmail">{{ site.privacyEmail }}</a>
        </p>
      </div>
    </section>
  `,
})
export class PrivacyComponent {
  readonly site = SITE;

  constructor() {
    inject(Seo).apply({
      title: 'Privacy Policy',
      path: '/privacy',
      updated: UPDATED,
      description:
        `How ${SITE.name} handles your data: your food diary, plans and health entries stay on ` +
        'your device and in your own iCloud, never on our servers. What Apple, the advertising ' +
        'network and this website do see, in plain terms.',
    });
  }
}
