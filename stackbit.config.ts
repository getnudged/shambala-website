import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { GitContentSource } from '@stackbit/cms-git';
import { defineStackbitConfig } from '@stackbit/types';

const projectDir = path.dirname(fileURLToPath(import.meta.url));

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  ssgName: 'custom',
  nodeVersion: '22',
  devCommand: 'npm run dev -- --host 127.0.0.1 --port {PORT}',
  experimental: {
    ssg: {
      name: 'Astro',
      logPatterns: {
        up: ['is ready', 'astro']
      },
      directRoutes: {
        'socket.io': 'socket.io'
      },
      passthrough: ['/vite-hmr/**']
    }
  },
  contentSources: [
    new GitContentSource({
      rootPath: projectDir,
      contentDirs: ['src/content'],
      assetsConfig: {
        referenceType: 'static',
        staticDir: 'public',
        uploadDir: 'retreat-posters',
        publicPath: '/'
      },
      models: [
        {
          type: 'page',
          name: 'RetreatEvent',
          label: 'Retreats, Wellbeing Days & Events',
          filePath: 'retreats/{slug}.md',
          urlPath: '/retreats/{slug}',
          labelField: 'title',
          hideContent: false,
          fields: [
            { type: 'string', name: 'title', label: 'Event title', required: true },
            { type: 'string', name: 'slug', label: 'URL slug' },
            { type: 'text', name: 'description', label: 'Short description', required: true },
            {
              type: 'enum',
              name: 'eventType',
              label: 'Event type',
              options: [
                { label: 'Weekend retreat', value: 'weekend-retreat' },
                { label: 'Residential retreat', value: 'residential-retreat' },
                { label: 'Wellbeing day', value: 'wellbeing-day' },
                { label: 'Half-day retreat', value: 'half-day-retreat' },
                { label: 'Workshop', value: 'workshop' },
                { label: 'Sound / yoga event', value: 'sound-yoga-event' }
              ]
            },
            { type: 'date', name: 'startDate', label: 'Start date' },
            { type: 'date', name: 'endDate', label: 'End date' },
            { type: 'number', name: 'year', label: 'Year, if exact date is not confirmed' },
            { type: 'string', name: 'dateNote', label: 'Date note' },
            { type: 'number', name: 'price', label: 'Price', required: true },
            {
              type: 'enum',
              name: 'currency',
              label: 'Primary currency',
              options: [
                { label: 'GBP', value: 'GBP' },
                { label: 'EUR', value: 'EUR' }
              ],
              default: 'GBP'
            },
            { type: 'number', name: 'priceEUR', label: 'Euro price, if also listed' },
            { type: 'list', name: 'includes', label: 'Included items', items: { type: 'string' } },
            { type: 'list', name: 'facilitators', label: 'Facilitators', items: { type: 'string' } },
            { type: 'string', name: 'venueName', label: 'Venue name' },
            { type: 'string', name: 'venueAddress', label: 'Venue street address' },
            { type: 'string', name: 'venueLocality', label: 'Venue town / locality' },
            { type: 'string', name: 'venueRegion', label: 'Venue county / region' },
            { type: 'string', name: 'venuePostalCode', label: 'Venue postcode / Eircode' },
            { type: 'string', name: 'venueCountry', label: 'Venue country code' },
            { type: 'string', name: 'venueMapUrl', label: 'Venue map URL' },
            { type: 'image', name: 'cardImage', label: 'Listing image' },
            { type: 'string', name: 'cardImageAlt', label: 'Listing image alt text' },
            { type: 'image', name: 'posterImage', label: 'Optional poster image' },
            { type: 'string', name: 'posterAlt', label: 'Poster alt text' },
            { type: 'image', name: 'scheduleImage', label: 'Optional supporting schedule image' },
            { type: 'string', name: 'scheduleAlt', label: 'Schedule image alt text' },
            {
              type: 'list',
              name: 'scheduleOutline',
              label: 'Schedule outline',
              items: {
                type: 'object',
                fields: [
                  { type: 'string', name: 'day', label: 'Day / date' },
                  { type: 'string', name: 'time', label: 'Time' },
                  { type: 'string', name: 'activity', label: 'Activity', required: true },
                  { type: 'string', name: 'facilitator', label: 'Facilitator' },
                  { type: 'text', name: 'notes', label: 'Notes' }
                ]
              }
            },
            { type: 'text', name: 'bookingNote', label: 'Booking / enquiry details' },
            { type: 'markdown', name: 'markdown_content', label: 'Full page copy' }
          ]
        },
        {
          type: 'page',
          name: 'BlogPost',
          label: 'Blog posts',
          filePath: 'blog/{slug}.md',
          urlPath: '/blog/{slug}',
          labelField: 'title',
          hideContent: false,
          fields: [
            { type: 'string', name: 'title', label: 'Post title', required: true },
            { type: 'string', name: 'seoTitle', label: 'SEO title' },
            { type: 'text', name: 'description', label: 'Meta description', required: true },
            { type: 'date', name: 'pubDate', label: 'Publication date', required: true },
            { type: 'list', name: 'keywords', label: 'Keywords', items: { type: 'string' } },
            { type: 'image', name: 'image', label: 'Featured image' },
            { type: 'string', name: 'imageAlt', label: 'Featured image alt text' },
            { type: 'markdown', name: 'markdown_content', label: 'Post copy' }
          ]
        }
      ]
    })
  ]
});
