/**
 * Company facts, shared by every language.
 *
 * Language-specific things (anchor slugs, locale codes, all prose) live in the
 * `copy.<lang>.ts` files instead.
 *
 * Anything marked TODO is not confirmed yet — it renders as written, so search
 * for "TODO" before the site goes live.
 */

export const company = {
  legalName: 'Taylor Pancaldi Technology Services SL',
  shortName: 'TPTS',
  nrt: 'NRT L-721214-X',
  city: 'Escaldes-Engordany (Andorra)',
  timezone: 'CET',
  /** TODO: confirm the address that goes on the legal notice. */
  email: 'info@taylor-pancaldi.com/',
  founded: 2025,
} as const;

export const people = {
  product: {
    name: 'Marta Pancaldi',
    website: 'https://martacodes.it'
  },
  it: {
    name: 'Teo Taylor'
  }
} as const;
