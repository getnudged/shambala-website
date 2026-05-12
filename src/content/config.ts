import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
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
    startDate: z.date(),
    endDate: z.date(),
    price: z.number(),
    currency: z.string().default('GBP'),
    priceEUR: z.number().optional(),
    includes: z.array(z.string()).default([]),
    facilitators: z.array(z.string()).default([]),
    slug: z.string().optional()
  })
});

export const collections = { blog, retreats };
