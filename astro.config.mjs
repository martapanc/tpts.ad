// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// The canonical domain: every canonical, hreflang and sharing URL is built from
// it. The company's other domain, tpts.ad, should redirect here.
const SITE = 'https://taylor-pancaldi.com';

export default defineConfig({
  site: SITE,
  prefetch: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
