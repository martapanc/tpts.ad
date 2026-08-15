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
  /** TODO: real NRT once the registration completes. */
  nrt: 'NRT L-000000-X',
  city: 'Andorra la Vella',
  timezone: 'CET',
  /** TODO: confirm the address that goes on the legal notice. */
  email: 'hola@taylorpancaldi.com',
  founded: 2026,
} as const;

export const people = {
  product: {
    name: 'Marta Pancaldi',
  },
  // TODO: the infrastructure lead's name is still pending, so each copy file
  // carries a language-appropriate placeholder. Once it is known, add it here
  // and point both copy files at it — a name is not language-specific.
} as const;
