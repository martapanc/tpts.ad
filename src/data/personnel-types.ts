/**
 * Shape of the personnel page. `personnel.ca.ts` and `personnel.en.ts`
 * implement it, the same way the copy files implement `Copy`.
 */

export interface Person {
  name: string;
  /** What they do for clients, e.g. "Software engineer". */
  role: string;
  /** Extra responsibility within the company, e.g. "Company director". */
  also?: string;
  nationality: string;
  /** Two or three sentences, no more. */
  summary: string;
  /** Stack or focus areas, one line. */
  focus: string;
  website?: { href: string; label: string };
}

export interface Personnel {
  /** Path this page is served from, e.g. `/en/personnel`. */
  path: string;
  title: string;
  description: string;
  intro: string;
  labels: { nationality: string; focus: string };
  people: Person[];
  back: string;
}
