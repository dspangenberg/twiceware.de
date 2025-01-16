import { defineCollection, z } from "astro:content"
import { glob } from 'astro/loaders';

const work = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    role: z.string(),
    dateStart: z.coerce.date(),
    dateEnd: z.union([z.coerce.date(), z.string()]),
  }),
})


const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
})

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
})

const rechtliches = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/rechtliches" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
  }),
})

export const collections = { work, blog, projects, rechtliches }
