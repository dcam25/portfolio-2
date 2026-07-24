import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    draft: z.boolean().optional().default(false),
    heroImage: z.string().optional(),
    heroAlt: z.string().optional(),
    heroCredit: z.string().optional(),
    heroCreditUrl: z.string().url().optional(),
  }),
});

export const collections = { blog };
