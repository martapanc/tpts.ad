# Taylor Pancaldi Technology Services SL — landing page

Astro static site built from `design/Taylor Pancaldi Landing.dc.html`, **version 6A**
(two practices, one company).

| Route | Language |
| --- | --- |
| `/` | Catalan – the primary language |
| `/en` | English |
| `/avis-legal`, `/privacitat`, `/galetes` | Catalan legal pages |
| `/en/legal-notice`, `/en/privacy`, `/en/cookies` | English legal pages |
| `/personal`, `/en/personnel` | Personnel page (names, roles, nationalities) |

```bash
npm run dev      # dev server
npm run build    # static output into dist/
npm run preview  # serve the build
npm run check    # astro + TypeScript diagnostics
```

## Where things live

| Path | What it is |
| --- | --- |
| `src/data/copy.ca.ts` | **All Catalan page text.** |
| `src/data/copy.en.ts` | **All English page text.** |
| `src/data/copy-types.ts` | The `Copy` interface both files implement. |
| `src/data/i18n.ts` | Language registry — the default language and the switch. |
| `src/data/site.ts` | Company facts, shared by both languages. |
| `src/data/legal.ca.ts`, `legal.en.ts` | **Text of the legal pages**, implementing `legal-types.ts`. |
| `src/layouts/Legal.astro` | A legal page, in whatever language it is handed. |
| `src/data/personnel.ca.ts`, `personnel.en.ts` | **Text of the personnel page** – the only place people are named. |
| `src/layouts/PersonnelPage.astro` | The personnel page, in whatever language it is handed. |
| `src/assets/projects/` | The FlexInvoice and FlexTag previews – the products' own output from made-up data. |
| `public/og-*.png` | Sharing images, one per language. Source: `design/og-image.html`. |
| `src/styles/tokens.css` | Colours, type scale, layout metrics taken from 6A. |
| `src/layouts/Landing.astro` | The page, in whatever language it is handed. |
| `src/components/` | One component per band of the page, in page order. |
| `design/` | The original Claude Design concept file, for reference. |

Components carry their own scoped CSS. Anything shared (`.page`, `.btn`, `.ruled`,
`.lead`) lives in `src/styles/global.css`.

> One footgun worth knowing: `.page` sets `margin-inline: auto`, so a scoped rule
> on the same element that sets `margin: 0` will silently un-centre it. Put `.page`
> on its own wrapper element instead.

## How the two languages work

No component imports a language. `src/pages/index.astro` and
`src/pages/en/index.astro` are two-line files that each hand a `copy` object to
`Landing.astro`, which passes it down. Because both copy files implement `Copy`,
a key that is missing or renamed in one language is a **type error**, not a
silently untranslated page — so `npm run check` is the guard against drift.

Each language owns its own anchor slugs (`#que-fem` vs `#what-we-do`), its
`<html lang>`, its `og:locale`, and its footer link targets. `Base.astro` emits
`hreflang` alternates for both plus `x-default` pointing at Catalan.

**Adding a third language:** copy a copy file, translate it, register it in
`src/data/i18n.ts`, and add a two-line page under `src/pages/<lang>/`. The
language switch in the header picks it up automatically.

**Changing the page structure:** edit `Landing.astro` or a component once; every
language gets it.

## Not finalised yet

Search the source for `TODO` and `DRAFT`. Currently open:

- **Domain** – `astro.config.mjs` uses `taylor-pancaldi.com` for canonical,
  sharing and hreflang URLs. The company's other domain, `tpts.ad`, should
  redirect to it (or swap them in that one line if `tpts.ad` is to be primary).
- **Case study pages** – neither FlexInvoice's nor FlexTag's exists yet, so
  `linkHref` is empty on both entries in both languages and neither link
  renders. Set one to show its link.
- **Legal pages** – written to match the site as built (no cookies, analytics or
  forms) but not reviewed by a lawyer. The legal notice gives the town only: the
  registered street address and the company registry number are still to add.
  Update the "last updated" date in both `legal.*.ts` files when they change.
- **Catalan copy** – a first pass translated from the English concept. The
  "avorrits en el millor sentit" line in the infrastructure blurb is flagged
  `DRAFT`; the joke may want rephrasing.
- **Language preference** – a visitor landing on `/` always gets Catalan. If you
  want `Accept-Language` redirection, that needs a server (Vercel middleware or
  a redirect rule); the site is fully static today.

### A note on the headline

The hero is two lines by design, with the break authored rather than wrapped.
Both languages use the concept's wording — "Software engineering and IT
services." / "Enginyeria de programari i serveis informàtics." A longer second
line (e.g. "infrastructure services") pushes the hero to three lines and breaks
the composition, so keep replacements short.
