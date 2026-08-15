/**
 * Language registry. `defaultLang` is served from the site root; every other
 * language is served from its own `path`.
 */

import { copy as ca } from './copy.ca';
import { copy as en } from './copy.en';
import type { Copy, Lang } from './copy-types';

export const defaultLang: Lang = 'ca';

export const languages: Record<Lang, Copy> = { ca, en };

/** Every language, in menu order, with the default first. */
export const allLanguages: Copy[] = [ca, en];

/** The other languages, for building the language switch on a given page. */
export function alternates(current: Lang): Copy[] {
  return allLanguages.filter((entry) => entry.lang !== current);
}
