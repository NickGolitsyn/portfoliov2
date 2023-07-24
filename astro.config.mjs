import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
const env = loadEnv("", process.cwd(), 'STORYBLOK');


// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  integrations: [storyblok({
    accessToken: env.STORYBLOK_TOKEN,
    components: {
      page: 'storyblok/Page',
      feature: 'storyblok/Feature',
      grid: 'storyblok/Grid',
      teaser: 'storyblok/Teaser',
      blogPost: 'storyblok/BlogPost',
      projects: 'storyblok/Projects'
    }
  }), react(), tailwind()],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true
    }
  },
  adapter: vercel()
});