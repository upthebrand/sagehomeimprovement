// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Set PUBLIC_SITE_URL in Netlify (Site settings → Environment variables), e.g. https://www.sagehomeimprove.com
// Used for canonical URLs, Open Graph, and JSON-LD. Fallback matches the business email domain.
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://sagehomeimprove.com',
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});