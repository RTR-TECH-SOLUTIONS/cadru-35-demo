// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Preview pentru client, publicat pe GitHub Pages sub /cadru-35-demo/.
// La proiectul real (domeniu propriu) se scot `site` și `base`, iar helperul
// din src/lib/url.ts devine identitate — nu trebuie atins niciun link.
export default defineConfig({
  site: 'https://rtr-tech-solutions.github.io',
  base: '/cadru-35-demo',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()]
  }
});
