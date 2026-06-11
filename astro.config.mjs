/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { defineConfig } from 'astro/config';
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

  site: PUBLIC_BASE_PATH,
  integrations: [react(), sitemap(), robotsTxt(), mdx()],

  adapter: vercel(),
});
