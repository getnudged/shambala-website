import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    pubDate: z.date(),
    keywords: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional()
  })
});

const retreats = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    year: z.number().optional(),
    dateNote: z.string().optional(),
    price: z.number(),
    currency: z.string().default('GBP'),
    priceEUR: z.number().optional(),
    includes: z.array(z.string()).default([]),
    facilitators: z.array(z.string()).default([]),
    slug: z.string().optional()
  })
});

export const collections = { blog, retreats };
