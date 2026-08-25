import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RevealDirective, RevealStaggerDirective } from '../../core/reveal.directive';
import { faqEntity, Seo } from '../../core/seo';
import { DATA, SITE, url } from '../../core/site';
import { PageHeadComponent } from '../../shared/page-head';

const FAQ = [
  {
    q: 'The app is large. Why?',
    a:
      `The whole USDA catalogue — ${DATA.foods.toLocaleString('en-US')} foods with their full ` +
      'nutrient panels — ships inside the app rather than being fetched from a server. That is ' +
      'what makes search instant and offline, and it is what the download size buys you. It is ' +
      'downloaded once.',
  },
  {
    q: 'Does it work offline?',
    a:
      'Search, nutrient panels, the diary, the pantry and workout logging all work with no ' +
      'connection at all. The AI planning features need one, because the generation happens ' +
      'remotely.',
  },
  {
    q: 'How do I move my data to a new phone?',
    a:
      'Sign in to the same Apple ID with iCloud enabled and the data follows you. There is no ' +
      'Wise Eating account to migrate, because there is no Wise Eating server holding anything.',
  },
  {
    q: 'I found a food with wrong or missing numbers.',
    a:
      'Most likely the underlying USDA record has never had that nutrient measured, in which case ' +
      'the app shows a dash rather than a zero. If a value looks genuinely wrong rather than ' +
      'absent, send us the food name and what you expected and we will check it against the source.',
  },
  {
    q: 'Can I use it professionally, with clients?',
    a:
      'Yes. Dietitians, trainers and coaches use it to structure plans and keep records. It is a ' +
      'planning tool and not a clinical system, so it does not replace your own professional ' +
      'judgement or your practice records.',
  },
  {
    q: 'How do I cancel a subscription?',
    a:
      'In iOS Settings, tap your name, then Subscriptions. Cancelling stops the renewal and you ' +
      'keep access until the paid period ends. Deleting the app does not cancel it.',
  },
  {
    q: 'Is my data used to train an AI model?',
    a:
      'No. Your diary, plans and health entries stay on your device. What is sent when you ask for ' +
      'an AI plan is the request itself — your goal, constraints and preferences — not your history.',
  },
  {
    q: 'Which languages does the app support?',
    a: 'English at present. Other languages are on the list.',
  },
];

@Component({
  selector: 'we-support',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink, PageHeadComponent, RevealDirective, RevealStaggerDirective],
  template: `
    <we-page-head
      title="Support"
      eyebrow="Help"
      lede="Answers to the things that come up most, and a real address for everything else."
    />

    <section class="section section--tight">
      <div class="wrap contact" appReveal="up">
        <div class="card contact__card">
          <span class="card__icon" aria-hidden="true"><img src="/assets/icons/mail.webp" alt="" width="30" height="30" loading="lazy" decoding="async" /></span>
          <h2>Write to us</h2>
          <p>
            Bug reports, questions, refunds you cannot get from Apple, and disagreements about
            nutrition science all land in the same inbox. We read them.
          </p>
          <a class="btn btn--primary" [href]="'mailto:' + site.contactEmail">{{
            site.contactEmail
          }}</a>
        </div>

        <div class="card contact__card">
          <span class="card__icon" aria-hidden="true"><img src="/assets/icons/list.webp" alt="" width="30" height="30" loading="lazy" decoding="async" /></span>
          <h2>Billing &amp; refunds</h2>
          <p>
            Subscriptions are sold and billed by Apple, so cancellations and refunds go through them
            rather than through us.
          </p>
          <a
            class="btn btn--ghost"
            href="https://reportaproblem.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            >reportaproblem.apple.com</a
          >
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap wrap--narrow">
        <div class="section-head">
          <h2>Frequently asked</h2>
        </div>

        <div class="faq" appRevealStagger="50">
          @for (item of faq; track item.q) {
            <details appReveal="up">
              <summary>
                <h3>{{ item.q }}</h3>
                <span class="mark" aria-hidden="true"></span>
              </summary>
              <p>{{ item.a }}</p>
            </details>
          }
        </div>

        <div class="disclaimer after">
          <p>
            {{ site.name }} is not a medical service and we cannot give medical advice. For anything
            clinical — a diagnosis, a symptom, a child's diet, a condition you are managing — please
            speak to a qualified professional. The <a routerLink="/terms">terms</a> set this out in
            full.
          </p>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .contact {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 20px;
      }

      .contact__card h2 {
        margin-bottom: 14px;
        font-size: var(--step-2);
      }

      .contact__card .btn {
        margin-top: 8px;
      }

      .faq {
        border-top: 1px solid var(--line);
      }

      .faq details {
        border-bottom: 1px solid var(--line);
      }

      .faq summary {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        padding: 22px 0;
        cursor: pointer;
        list-style: none;
      }

      .faq summary::-webkit-details-marker {
        display: none;
      }

      .faq h3 {
        font-family: var(--font-body);
        font-size: var(--step-0);
        font-weight: 600;
        transition: color 0.25s var(--ease);
      }

      .faq summary:hover h3 {
        color: var(--accent);
      }

      .faq p {
        margin: 0;
        padding-bottom: 24px;
        color: var(--text-dim);
      }

      .mark {
        position: relative;
        flex: none;
        width: 16px;
        height: 16px;
      }

      .mark::before,
      .mark::after {
        content: '';
        position: absolute;
        inset: 50% 0 auto;
        height: 1.6px;
        border-radius: 2px;
        background: var(--accent);
        transition: transform 0.3s var(--ease-out);
      }

      .mark::after {
        transform: rotate(90deg);
      }

      details[open] .mark::after {
        transform: rotate(0deg);
      }

      .after {
        margin-top: 40px;
      }

      .after a {
        color: var(--accent);
        text-decoration: underline;
        text-underline-offset: 3px;
      }
    `,
  ],
})
export class SupportComponent {
  readonly site = SITE;
  readonly faq = FAQ;

  constructor() {
    inject(Seo).apply({
      title: 'Support',
      path: '/support',
      description:
        `Help with ${SITE.name}: offline use, moving to a new phone, missing nutrient values, ` +
        'professional use, cancelling a subscription, and how to reach a human.',
      entities: [faqEntity(url('/support'), FAQ)],
    });
  }
}
