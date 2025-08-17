import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://greenzonesite.ru',
  output: 'static', // ВАЖНО: не 'server', а 'static'
  integrations: [tailwind()],
});
