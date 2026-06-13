import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    type: z.string().optional(),
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
  loader: glob({ pattern: '**/*.md', base: './src/content/retreats' }),
  schema: z.object({
    type: z.string().optional(),
    title: z.string(),
    description: z.string(),
    eventType: z.string().optional(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
    year: z.number().optional(),
    dateNote: z.string().optional(),
    price: z.number(),
    currency: z.string().default('GBP'),
    priceEUR: z.number().optional(),
    includes: z.array(z.string()).default([]),
    facilitators: z.array(z.string()).default([]),
    slug: z.string().optional(),
    cardImage: z.string().optional(),
    cardImageAlt: z.string().optional(),
    posterImage: z.string().optional(),
    posterPdf: z.string().optional(),
    posterAlt: z.string().optional(),
    scheduleImage: z.string().optional(),
    scheduleAlt: z.string().optional(),
    scheduleOutline: z.array(z.object({
      day: z.string().optional(),
      time: z.string().optional(),
      activity: z.string(),
      facilitator: z.string().optional(),
      notes: z.string().optional()
    })).default([]),
    bookingNote: z.string().optional(),
    venueName: z.string().optional(),
    venueAddress: z.string().optional(),
    venueLocality: z.string().optional(),
    venueRegion: z.string().optional(),
    venuePostalCode: z.string().optional(),
    venueCountry: z.string().optional(),
    venueMapUrl: z.string().optional()
  })
});

export const collections = { blog, retreats };
