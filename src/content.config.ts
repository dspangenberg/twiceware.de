import { defineCollection, z } from "astro:content"
import { glob } from "astro/loaders"

const work = defineCollection({
  loader: glob({ pattern: "**/*", base: "./src/content/work" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
})


const blog = defineCollection({
  loader: glob({ pattern: "**/*", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
})

const projekte = defineCollection({
  loader: glob({ pattern: "**/*", base: "./src/content/projekte" }),
  schema: z.object({
    title: z.string(),
    summary: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    website: z.string().optional(),
    repoUrl: z.string().optional(),
    extUrl: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().optional(),
    homeFeatured: z.boolean().optional(),
    category: z.string()
  }),
})

const rechtliches = defineCollection({
  loader: glob({ pattern: "**/*", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
  }),
})

const pages = defineCollection({
  loader: glob({ pattern: "**/*", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    isFooterLink: z.boolean().optional(),
  }),
})

export const collections = { work, blog, projekte, rechtliches, pages }
