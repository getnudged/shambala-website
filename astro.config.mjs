import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shambalaholisticandretreatcentre.com',
  output: 'static',
  vite: {
    server: {
      hmr: {
        path: '/vite-hmr/'
      }
    }
  }
});
