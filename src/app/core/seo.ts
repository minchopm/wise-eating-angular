import { DOCUMENT } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { DATA, SITE, url } from './site';

/** One step in the trail, in the order a reader would walk it. */
export interface Crumb {
  readonly label: string;
  readonly path: string;
}

export interface PageMeta {
  readonly title: string;
  readonly description: string;
  /** Route path, e.g. '/nutrients'. '/' for the home page. */
  readonly path: string;
  /** The trail above this page. The home page and the page itself are added. */
  readonly crumbs?: readonly Crumb[];
  /** ISO date this page's content last changed materially. */
  readonly updated?: string;
  /** Extra entities to append to the graph — an FAQPage, an Article, say. */
  readonly entities?: readonly Record<string, unknown>[];
  /** Keep this page out of the index. Used by the screenshot routes. */
  readonly noindex?: boolean;
  /**
   * The same page in other languages.
   *
   * Search engines treat hreflang as a claim each page makes about the whole
   * group, and they discard a group whose members disagree about who is in
   * it — so every page in a set has to list every member, including itself.
   */
  readonly alternates?: readonly { hreflang: string; path: string }[];
  /** BCP 47 for this page. Sets <html lang>. */
  readonly locale?: string;
}

/**
 * Titles, descriptions, canonical links and structured data.
 *
 * Two things here are worth knowing.
 *
 * The site is prerendered, so all of this ends up in the static HTML a crawler
 * downloads rather than being assembled by a script it may or may not run.
 *
 * And the structured data is one connected `@graph` rather than a pile of
 * separate blocks. Search engines resolve `@id` references, so saying the
 * publisher once and pointing at it from the site, the app and every page
 * describes an entity they can reconcile — where four disconnected objects
 * that happen to share a name do not.
 */
@Injectable({ providedIn: 'root' })
export class Seo {
  private readonly doc = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  apply(page: PageMeta): void {
    const full =
      page.path === '/' ? `${SITE.name} — ${SITE.category}` : `${page.title} — ${SITE.name}`;
    const canonical = url(page.path);

    this.title.setTitle(full);

    for (const [key, content] of Object.entries(this.tags(page, full, canonical))) {
      if (!content) continue;
      this.meta.updateTag(
        key.startsWith('og:') ? { property: key, content } : { name: key, content },
        key.startsWith('og:') ? `property="${key}"` : `name="${key}"`,
      );
    }

    this.setLink('canonical', canonical);
    this.setAlternates(page);
    this.setJsonLd(this.graph(page, full, canonical));

    if (page.locale) {
      this.doc.documentElement.setAttribute('lang', page.locale.split('-')[0]);
    }
  }

  private tags(page: PageMeta, full: string, canonical: string): Record<string, string> {
    return {
      description: page.description,

      // Without max-image-preview:large a result gets a thumbnail rather than
      // the wide card, and max-snippet:-1 lets the description come from the
      // page instead of being truncated to a default.
      robots: page.noindex
        ? 'noindex, nofollow'
        : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',

      'og:type': 'website',
      'og:site_name': SITE.name,
      'og:locale': (page.locale ?? 'en-US').replace('-', '_'),
      'og:title': full,
      'og:description': page.description,
      'og:url': canonical,
      'og:image': url('/og.png'),
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:type': 'image/png',
      'og:image:alt': `${SITE.name} — ${SITE.tagline}`,

      'twitter:card': 'summary_large_image',
      'twitter:title': full,
      'twitter:description': page.description,
      'twitter:image': url('/og.png'),
      'twitter:image:alt': `${SITE.name} — ${SITE.tagline}`,

      // Safari's smart app banner — a one-tap route to the listing from any
      // page, on the device the app actually runs on.
      'apple-itunes-app': `app-id=${SITE.appStoreId}`,
    };
  }

  /** The publisher, the site and the app — said once, referenced everywhere. */
  private graph(page: PageMeta, full: string, canonical: string): Record<string, unknown> {
    const org = {
      '@type': 'Organization',
      '@id': url('/#organization'),
      name: SITE.company,
      alternateName: SITE.companyShort,
      url: url('/'),
      logo: {
        '@type': 'ImageObject',
        '@id': url('/#logo'),
        url: url('/assets/icon-512.png'),
        width: 512,
        height: 512,
        caption: SITE.name,
      },
      image: { '@id': url('/#logo') },
      email: SITE.contactEmail,
      // Named contact points as well as the bare email, so a machine reading
      // this can route rather than guess. An assistant asked "how do I make a
      // GDPR request to this company" has an answer that is not "email
      // support and hope"; the legal one does the same for a takedown or a
      // notice. All three already receive — see scripts/mail/.
      contactPoint: [
        {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: SITE.contactEmail,
          availableLanguage: ['en'],
        },
        {
          '@type': 'ContactPoint',
          contactType: 'privacy',
          email: SITE.privacyEmail,
        },
        {
          '@type': 'ContactPoint',
          contactType: 'legal',
          email: SITE.legalEmail,
        },
      ],
      foundingDate: SITE.incorporated,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.city,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.country,
      },
    };

    const website = {
      '@type': 'WebSite',
      '@id': url('/#website'),
      url: url('/'),
      name: SITE.name,
      description: SITE.tagline,
      publisher: { '@id': url('/#organization') },
      inLanguage: 'en',
    };

    const app = {
      '@type': 'MobileApplication',
      '@id': url('/#app'),
      name: SITE.storeName,
      alternateName: SITE.name,
      applicationCategory: 'HealthApplication',
      applicationSubCategory: 'Nutrition',
      operatingSystem: SITE.minimumOs,
      softwareVersion: SITE.version,
      datePublished: SITE.published,
      dateModified: SITE.updated,
      contentRating: SITE.contentRating,
      url: url('/'),
      installUrl: SITE.appStore,
      downloadUrl: SITE.appStore,
      description:
        `A nutrition and training app for iPhone and iPad built on ${DATA.source}: ` +
        `${DATA.foods.toLocaleString('en-US')} foods with full macro- and micronutrient ` +
        'panels, natural-language food search, AI meal and workout planning, pantry ' +
        'tracking and shopping lists, on one shared timeline.',
      inLanguage: 'en',
      author: { '@id': url('/#organization') },
      publisher: { '@id': url('/#organization') },
      image: { '@id': url('/#logo') },
      featureList: [
        `${DATA.foods.toLocaleString('en-US')} foods from ${DATA.source}`,
        `${DATA.nutrientFields} nutrient fields per food, including ${DATA.vitamins} vitamins and ${DATA.minerals} minerals`,
        'Natural-language food search — "beef proteins less than 15"',
        'AI weekly meal plans built from real foods',
        'AI training programmes and weekly workout schedules',
        'Diet, allergen, pH/alkalinity and age-suitability filters',
        'Pantry and storage tracking with expiry dates',
        'Shopping lists generated from your plans',
        'Optional food price and budget tracking',
        'Emotion and symptom tracking on a shared timeline',
      ],
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'USD',
        lowPrice: '0',
        highPrice: '69.99',
        offerCount: 7,
        availability: 'https://schema.org/InStock',
      },
    };

    const webPage: Record<string, unknown> = {
      '@type': 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: full,
      description: page.description,
      isPartOf: { '@id': url('/#website') },
      about: { '@id': url('/#app') },
      primaryImageOfPage: { '@id': url('/#logo') },
      inLanguage: 'en',
      datePublished: SITE.published,
      dateModified: page.updated ?? SITE.updated,
    };

    // A single-item trail is the home page pointing at itself, which is noise;
    // Google ignores it and it makes the graph harder to read.
    const trail = [{ label: 'Home', path: '/' }, ...(page.crumbs ?? [])];
    if (page.path !== '/') trail.push({ label: page.title, path: page.path });

    if (trail.length > 1) {
      webPage['breadcrumb'] = { '@id': `${canonical}#breadcrumb` };
    }

    return {
      '@context': 'https://schema.org',
      '@graph': [
        org,
        website,
        app,
        webPage,
        ...(trail.length > 1
          ? [
              {
                '@type': 'BreadcrumbList',
                '@id': `${canonical}#breadcrumb`,
                itemListElement: trail.map((crumb, i) => ({
                  '@type': 'ListItem',
                  position: i + 1,
                  name: crumb.label,
                  item: url(crumb.path),
                })),
              },
            ]
          : []),
        ...(page.entities ?? []),
      ],
    };
  }

  /**
   * The hreflang set.
   *
   * Rewritten from scratch on every navigation rather than updated in place:
   * a leftover alternate from the previous page is a claim that two unrelated
   * pages are translations of each other, and it is invisible until an index
   * report says so months later.
   */
  private setAlternates(page: PageMeta): void {
    for (const stale of Array.from(
      this.doc.head.querySelectorAll('link[rel="alternate"][hreflang]'),
    )) {
      stale.remove();
    }

    if (!page.alternates?.length) return;

    for (const alternate of page.alternates) {
      const link = this.doc.createElement('link');
      link.setAttribute('rel', 'alternate');
      link.setAttribute('hreflang', alternate.hreflang);
      link.setAttribute('href', url(alternate.path));
      this.doc.head.appendChild(link);
    }

    // x-default is where a reader whose language is not in the set should
    // land. That is the root, which is English.
    const fallback = this.doc.createElement('link');
    fallback.setAttribute('rel', 'alternate');
    fallback.setAttribute('hreflang', 'x-default');
    fallback.setAttribute('href', url(page.alternates[0].path));
    this.doc.head.appendChild(fallback);
  }

  private setLink(rel: string, href: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', rel);
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }

  private setJsonLd(data: Record<string, unknown>): void {
    const id = 'we-jsonld';
    this.doc.getElementById(id)?.remove();

    const script = this.doc.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    // `<` cannot appear raw inside a script element without ending it early.
    script.textContent = JSON.stringify(data).replace(/</g, '\\u003c');
    this.doc.head.appendChild(script);
  }
}

/** Builds an FAQPage entity from question/answer pairs. */
export function faqEntity(
  id: string,
  items: readonly { q: string; a: string }[],
): Record<string, unknown> {
  return {
    '@type': 'FAQPage',
    '@id': `${id}#faq`,
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
}
