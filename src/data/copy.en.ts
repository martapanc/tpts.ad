/**
 * English copy – served at `/en`.
 *
 * This is the original text from the concept file (version 6A), which was
 * itself still a draft in places. Where the Catalan has since moved on, the
 * English follows it rather than the concept – see the note on the hero below.
 *
 * Keep this file and `copy.ca.ts` in step: both implement `Copy`, so a missing
 * or renamed key is a type error rather than a silently untranslated page.
 */

import { company, people } from './site';
import type { Copy, Sections } from './copy-types';

const sections: Sections = {
  practices: 'what-we-do',
  projects: 'projects',
  hiring: 'how-to-hire-us',
  company: 'company',
  contact: 'contact',
};

export const copy: Copy = {
  lang: 'en',
  htmlLang: 'en',
  ogLocale: 'en_GB',
  path: '/en',
  nativeName: 'English',

  sections,

  meta: {
    title: `${company.legalName} – Software engineering and IT services`,
    description:
      'Two engineering practices under one Andorran company: product development, and infrastructure design and operations. For clients across the EU, the UK and the United States.',
  },

  nav: [
    { label: 'What we do', href: `#${sections.practices}` },
    { label: 'Projects', href: `#${sections.projects}` },
    { label: 'How we work', href: `#${sections.hiring}` },
    { label: 'Company', href: `#${sections.company}` },
  ],

  hero: {
    // Two lines by design – the break is authored, not wrapped. Keep the second
    // line short enough to fit, in any language.
    titleLine1: 'Software engineering',
    titleLine2Prefix: 'and ',
    titleLine2Accent: 'IT services',
    lead: 'Two engineering practices under one Andorran company: product development, and infrastructure design and operations.\nEach is contracted on its own for clients across the EU, the UK and the United States, and together on projects that need both.',
    meta: 'Remote, CET · previously at Sky, Booking.com and enterprise SaaS platforms',
    primaryCta: 'Contact us',
    secondaryCta: 'What we do',
  },

  practices: {
    title: 'Two practices.',
    intro:
      'Each has its own lead, its own engagements and its own contract. Most work involves one of the two; where a project needs software and the platform under it, we take both on.',
    items: [
      {
        title: 'Product development',
        body: 'Full-stack engineering as an embedded senior developer in your team, or defined projects delivered end-to-end – payments, pricing systems, SSO, accounting platforms.\nTypeScript, React and Next.js, Node.js, Java and Spring Boot, Python, AWS.',
        leadIn: 'Led by ',
        leadName: people.product.name,
        leadWebsite: people.product.website,
        leadTail: ' – eight years across Booking.com, Appetize and Resourcify.',
      },
      {
        title: 'Infrastructure and operations',
        body: 'Infrastructure design, operations and support built on broadcast-scale experience – networking, deployment, monitoring and backup, kept reliable, secure and boring in the best possible sense.',
        leadIn: 'Led by ',
        leadName: people.it.name,
        leadTail: ' – infrastructure and operations, ex Sky UK.',
      },
    ],
  },

  credentials: [
    { pre: 'Shipped at ', strong: 'Booking.com' },
    { pre: 'Shipped at ', strong: 'Sky' },
    { pre: 'Enterprise ', strong: 'SaaS · SSO · payments' },
    { pre: 'Clients in ', strong: 'UK · DE · US' },
  ],

  ownWork: {
    statement:
      'Client engagements take most of our time. The rest goes into our own projects, and that is where the two practices work as one team: ',
    statementAccent:
      'one of us builds the application, the other runs the platform it lives on.',
    note: 'They are the projects where we choose the constraints, and they are in production – we use them to run the company. FlexInvoice and FlexTag are the current examples.',
  },

  // TODO: neither case study page exists yet – both links are hidden until they do.
  caseStudies: [
    {
      title: 'FlexInvoice',
      body: 'The invoicing system we built for our own operations: recurring invoices in two clicks, receipts merged into the final PDF, totals exact by construction. Backend and interface on one side, hosting, deployment and backups on the other.',
      note: "It's on the site because it shows how we build and run something when the only stakeholder is us.",
      link: 'Read the case study',
      linkHref: '',
      visual: {
        kind: 'invoice',
        brand: 'TPTS',
        number: 'No. 2026-081',
        lines: [
          { label: 'Development – July', amount: '€ 7,200.00' },
          { label: 'Retainer', amount: '€ 1,400.00' },
        ],
        totalLabel: 'Total',
        totalAmount: '€ 8,600.00',
      },
    },
    {
      title: 'FlexTag',
      body: 'The asset register we run our own equipment through: a QR code on every laptop and monitor, a label printed straight from the browser, purchase date and invoice in one place. Backend, interface and the service that talks to the label printer on one side; hosting and deployment on the other.',
      note: 'The label printer is the part client work rarely asks for all the way through: writing the integration, then proving it against the physical device rather than stopping at the API.',
      link: 'Read the case study',
      linkHref: '',
      visual: {
        kind: 'label',
        org: 'TPTS',
        tag: 'TPTS-LAP-001',
        name: 'MacBook Pro 14"',
      },
    },
  ],

  hiring: {
    title: 'Working with an Andorran company is simpler than it sounds.',
    intro:
      "Because we're resident in Andorra, direct employment isn't an option – a standard B2B services agreement with TPTS is, and your legal team won't be the first to review one.",
    steps: [
      {
        lead: 'First,',
        body: ' you contract TPTS SL – one agreement with a registered Andorran company, naming the practice and the engineer doing the work.',
      },
      {
        lead: 'Then,',
        body: ' we embed or deliver – day-rate engineering inside your team, or a scoped project end-to-end. EU citizens, remote, CET.',
      },
      {
        lead: 'Every month,',
        body: " one clean itemized invoice, with cross-border handling we've operated for years with UK, EU and US clients.",
      },
    ],
  },

  company: {
    title: 'The company',
    // Line breaks are honoured here: one `\n` starts a new line, two leave a
    // blank line. Anything else wraps normally.
    body: `${company.legalName} is a Societat Limitada registered in ${company.city}.\nTwo engineers, two practices, one contracting entity.`,
    rows: [
      { label: 'Entity', value: company.legalName },
      { label: 'Registration', value: company.nrt, mono: true },
      { label: 'Base', value: `${company.city} · remote, ${company.timezone}` },
      {
        label: 'Practices',
        value: 'Product design & development · infrastructure & operations',
      },
      {
        label: 'Coverage',
        value: 'B2B contracts in the EU, the UK and the US so far (more countries possible)',
      },
      {
        label: 'Languages',
        value: 'English · Italian · French · German · Spanish · Catalan',
      },
    ],
  },

  contact: {
    title: 'Enquiries and new engagements',
    body: "Send a short description of the work – scope, stack, timeframe if you have one. Say which practice it concerns if you already know; if not, we'll tell you. We reply within two working days.",
    cta: 'Contact us',
  },

  footer: {
    copyright: `© ${new Date().getFullYear()} · ${company.legalName} · Andorra`,
    links: [
      { label: 'Legal notice', href: '/en/legal-notice' },
      { label: 'Privacy', href: '/en/privacy' },
      { label: 'Cookies', href: '/en/cookies' },
    ],
  },

  a11y: {
    skipToContent: 'Skip to main content',
    mainNav: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    homeLink: `${company.shortName} – home`,
    languageSwitch: 'Change language',
  },
};
