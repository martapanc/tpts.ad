// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// TODO: replace with the real production domain once it is registered.
const SITE = 'https://taylorpancaldi.com';

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
