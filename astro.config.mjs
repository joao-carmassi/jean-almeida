/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import { loadEnv } from 'vite';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

const { PUBLIC_BASE_PATH } = loadEnv(process.env.NODE_ENV, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Poppins',
      cssVariable: '--font-poppins',
      weights: ['400', '500', '600', '700'],
      optimizedFallbacks: true,
      fallbacks: ['Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Montserrat',
      cssVariable: '--font-montserrat',
      weights: ['400', '500', '600', '700'],
      optimizedFallbacks: true,
      fallbacks: ['Arial', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Manison',
      cssVariable: '--font-manison',
      weights: ['400', '500', '600', '700'],
      optimizedFallbacks: true,
      fallbacks: ['Georgia', 'serif'],
    },
  ],

  site: PUBLIC_BASE_PATH,
  integrations: [react(), sitemap(), robotsTxt(), mdx()],

  adapter: vercel(),
});
