/**
 * Shape of the three legal pages. `legal.ca.ts` and `legal.en.ts` implement it,
 * the same way the two copy files implement `Copy`.
 */

export type LegalKey = 'notice' | 'privacy' | 'cookies';

export interface LegalSection {
  heading: string;
  /** One string per paragraph. */
  paragraphs: string[];
  /** Optional bullet list, shown after the paragraphs. */
  list?: string[];
}

export interface LegalDoc {
  /** Path this page is served from, e.g. `/en/privacy`. */
  path: string;
  title: string;
  /** For the meta description. */
  description: string;
  intro: string;
  sections: LegalSection[];
}

export interface Legal {
  /** "Last updated" line, already including the date in this language. */
  updated: string;
  /** Link back to the landing page. */
  back: string;
  docs: Record<LegalKey, LegalDoc>;
}
