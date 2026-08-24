import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RevealDirective, RevealStaggerDirective } from '../../core/reveal.directive';
import { Seo } from '../../core/seo';
import { SITE } from '../../core/site';
import { PageHeadComponent } from '../../shared/page-head';
import { StoreButtonComponent } from '../../shared/store-button';

const GOALS = [
  {
    name: 'Fat loss',
    body: 'Higher frequency, more conditioning, and a plan that keeps protein up while the total comes down.',
  },
  {
    name: 'Strength',
    body: 'Lower reps, longer rests, and the compound lifts kept at the front of the session.',
  },
  {
    name: 'Muscle gain',
    body: 'Volume distributed across the week, with enough recovery between sessions to use it.',
  },
  {
    name: 'General fitness',
    body: 'Mixed days — a bit of strength, a bit of conditioning, and something that is not a barbell.',
  },
  {
    name: 'Mobility',
    body: 'Ranges you actually lack, worked often, in sessions short enough that you do them.',
  },
  {
    name: 'Recovery',
    body: 'Deliberately easy weeks. The plan says so out loud rather than leaving you to guess.',
  },
] as const;

@Component({
  selector: 'we-workouts',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    RouterLink,
    PageHeadComponent,
    StoreButtonComponent,
    RevealDirective,
    RevealStaggerDirective,
  ],
  template: `
    <we-page-head
      title="Training"
      eyebrow="The other half"
      lede="A workout log and an AI programme builder that live in the same app as your food —
            because the two questions have never actually been separate."
    />

    <section class="section">
      <div class="wrap split">
        <div appReveal="up">
          <h2>Why it is in a nutrition app at all</h2>
          <p>
            Because "am I eating enough protein" is not answerable without knowing what you did on
            Tuesday, and "why am I not recovering" is not answerable without knowing what you ate.
            Keeping the two in separate apps means neither one can tell you anything interesting.
          </p>
          <p>
            {{ site.name }} puts sessions and meals on the same timeline, in the order they
            happened. That is the whole trick. Everything below is what you can put on it.
          </p>
        </div>

        <div class="split__shot" appReveal="zoom" [revealDelay]="120">
          <div class="device">
            <img
              src="/assets/shots/store-02.webp"
              alt="A training session and meals on the same day in Wise Eating"
              width="640"
              height="1391"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="section section--raised">
      <div class="wrap">
        <div class="section-head section-head--centre">
          <p class="eyebrow"><span class="eyebrow__dot"></span>Programmes</p>
          <h2>Pick a goal. Adjust the rest.</h2>
          <p>
            Tell the app what you are training for, what equipment you have and which days you can
            train. It builds a week you can then change however you like.
          </p>
        </div>

        <div class="goals" appRevealStagger="65">
          @for (goal of goals; track goal.name) {
            <article class="card" appReveal="up">
              <h3>{{ goal.name }}</h3>
              <p>{{ goal.body }}</p>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap split split--reverse">
        <div appReveal="up">
          <h2>Logging that survives contact with a gym</h2>
          <p>
            A training log is only useful if you keep it, and you only keep it if entering a set
            takes a couple of seconds between rounds.
          </p>
          <ul class="ticks">
            <li>Exercises, sets, reps, load and time</li>
            <li>Perceived effort against the session, so the week has intensity and not just volume</li>
            <li>Full body, splits, cardio, mobility and mixed days as first-class session types</li>
            <li>Notes on anything — a niggle, a PR, a session cut short</li>
            <li>Weeks compared against weeks, which is the scale training actually happens on</li>
          </ul>
        </div>

        <div appReveal="up" [revealDelay]="100">
          <h2>For people who write plans for others</h2>
          <p>
            Personal trainers, fitness instructors and coaches use the same builder to draft
            programmes, try variations against each other, and keep a library of session shapes that
            work.
          </p>
          <p>
            The nutrition side is in the same place, so a conversation about a client's training can
            include what they have actually been eating without exporting anything.
          </p>
          <div class="disclaimer">
            <p>
              Programmes generated by the app are software suggestions, not clinical prescriptions.
              Anyone with an injury, a condition or a return-to-sport question needs a qualified
              professional, not an algorithm.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="wrap">
        <div class="closing" appReveal="zoom">
          <h2>Train, eat, and see both at once.</h2>
          <div class="closing__actions">
            <we-store-button />
            <a class="btn btn--ghost" routerLink="/features">Everything else it does</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .split {
        display: grid;
        gap: clamp(36px, 5vw, 72px);
        align-items: center;

        h2 {
          margin-bottom: 20px;
          font-size: var(--step-3);
        }
      }

      .split__shot {
        display: flex;
        justify-content: center;
      }

      .split .ticks {
        margin-top: 22px;
      }

      .split .disclaimer {
        margin-top: 26px;
      }

      @media (min-width: 900px) {
        .split {
          grid-template-columns: minmax(0, 1fr) minmax(0, 0.78fr);
        }

        .split--reverse {
          grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
          align-items: start;
        }
      }

      .goals {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
      }

      .closing {
        padding: clamp(40px, 6vw, 76px) var(--gutter);
        border: 1px solid var(--line-strong);
        border-radius: var(--radius-lg);
        text-align: center;
        background:
          radial-gradient(70% 130% at 50% 0%, rgba(38, 208, 124, 0.16), transparent 66%),
          var(--surface);

        h2 {
          margin-bottom: 28px;
        }
      }

      .closing__actions {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 14px;
      }
    `,
  ],
})
export class WorkoutsComponent {
  readonly site = SITE;
  readonly goals = GOALS;

  constructor() {
    inject(Seo).apply({
      title: 'Training',
      path: '/workouts',
      description:
        `${SITE.name}'s training side: AI programmes for fat loss, strength, muscle gain, ` +
        'mobility and general fitness, plus set-by-set logging that shares one timeline with your ' +
        'meals — so recovery and nutrition can finally be looked at together.',
    });
  }
}
