import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    // This allows Railway's domain to show your website
    allowedHosts: ['imvu-calendar.up.railway.app']
  },
  server: {
    host: '0.0.0.0'
  }
});
