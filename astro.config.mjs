import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import react from "@astrojs/react"
import tailwindcss from "@tailwindcss/vite"
import rehypeExternalLinks from 'rehype-external-links';

// https://astro.build/config
export default defineConfig({
  site: "https://twiceware.de",
  integrations: [mdx({
    rehypePlugins: [[rehypeExternalLinks, { target: '_blank', rel: [] }]],
  }), sitemap(), react()],
  vite: {
    plugins: [tailwindcss()],
  },
})
