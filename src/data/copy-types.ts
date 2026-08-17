/**
 * Shape of a language's copy file. `copy.ca.ts` and `copy.en.ts` implement it;
 * components only ever read from this interface, never from a specific language.
 */

export type Lang = 'ca' | 'en';

export interface NavItem {
  label: string;
  href: string;
  /** Renders in the gold accent — used for the Contact entry. */
  accent?: boolean;
}

export interface Practice {
  title: string;
  body: string;
  leadIn: string;
  leadName: string;
  leadTail: string;
}

export interface Credential {
  pre: string;
  strong: string;
}

export interface Step {
  lead: string;
  body: string;
}

export interface FactRow {
  label: string;
  value: string;
  /** Renders in the monospace face — used for registration numbers. */
  mono?: boolean;
}

export interface InvoiceLine {
  label: string;
  amount: string;
}

/**
 * In-page anchor slugs. Each language gets its own so URLs read in the
 * language of the page they belong to.
 */
export interface Sections {
  practices: string;
  projects: string;
  hiring: string;
  company: string;
  contact: string;
}

export interface Copy {
  lang: Lang;
  /** Value for <html lang> and hreflang. */
  htmlLang: string;
  /** Value for og:locale, e.g. ca_AD. */
  ogLocale: string;
  /** Path this language is served from. */
  path: string;
  /** Name of this language in itself, for the language switch. */
  nativeName: string;

  sections: Sections;
  meta: { title: string; description: string };
  nav: NavItem[];
  hero: {
    titleLine1: string;
    titleLine2Prefix: string;
    titleLine2Accent: string;
    lead: string;
    meta: string;
    primaryCta: string;
    secondaryCta: string;
  };
  practices: { title: string; intro: string; items: Practice[] };
  credentials: Credential[];
  ownWork: { statement: string; statementAccent: string; note: string };
  caseStudy: {
    title: string;
    body: string;
    note: string;
    link: string;
    /** Empty string hides the link until the case study page exists. */
    linkHref: string;
    invoice: {
      brand: string;
      number: string;
      lines: InvoiceLine[];
      totalLabel: string;
      totalAmount: string;
    };
  };
  hiring: { title: string; intro: string; steps: Step[] };
  company: { title: string; body: string; rows: FactRow[] };
  contact: { title: string; body: string; cta: string };
  footer: { copyright: string; links: NavItem[] };
  a11y: {
    skipToContent: string;
    mainNav: string;
    openMenu: string;
    closeMenu: string;
    homeLink: string;
    languageSwitch: string;
  };
}
