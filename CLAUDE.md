# Shambala Holistic & Retreat Centre — Website Project
## CLAUDE.md — Master Context for Claude Code

---

## Project Overview

Full website rebuild for Shambala Holistic & Retreat Centre.
- **Live site (old):** https://shambalaholisticandretreatcentre.com/
- **Owner:** Sukhada Smith-Repass
- **Location:** 48 Geaglum Road, Derrylin, Co. Fermanagh, BT92 9GN, Northern Ireland
- **Phone:** +44 7713 744 589
- **Email:** shambala108@icloud.com

## Tech Stack

- **Framework:** Astro (static site generator — fast, SEO-friendly, no JS overhead)
- **Styling:** Plain CSS with CSS custom properties (no Tailwind, no CSS-in-JS)
- **Fonts:** Cormorant Garamond + Jost via Google Fonts
- **Deployment:** Netlify (static hosting, free tier)
- **CMS:** Astro Content Collections for blog posts and retreat pages (Markdown files)
- **Forms:** Netlify Forms for enquiry forms (no backend needed)
- **Booking:** Calendly embed for therapy bookings

## Design System

Full design system is in `shambala-design-system.md`. Read it before touching any CSS.

Key values (never hardcode — always use CSS variables):
```css
--lough:     #2C4A5A   /* Primary brand — deep lake blue */
--dusk:      #4A6741   /* CTA green */
--stone:     #8B7355   /* Warm accent */
--parchment: #F5F1E8   /* Page background */
--text:      #1C2B35   /* Body text */
--gold:      #C4A35A   /* Highlight accent — use sparingly */
```

Fonts:
- Display/headings: `'Cormorant Garamond', Georgia, serif` — always weight 300 or 400, never bold
- Body/UI: `'Jost', system-ui, sans-serif`
- Labels: Jost, 0.7rem, letter-spacing 0.18em, uppercase

## SEO Rules

Full SEO requirements in `shambala-seo-checklist.md`. Non-negotiable:

- Every page gets ONE H1 only — keyword-optimised per the SEO doc
- Every page gets a unique meta title (pattern: `[Page Topic] | Shambala Holistic Retreat Centre | Fermanagh`)
- Every page gets a unique meta description (150–160 chars)
- LocalBusiness schema JSON-LD goes in the `<head>` of every page
- Event schema goes on every individual retreat page
- Every image: descriptive alt text following `[subject] at Shambala Holistic Retreat Centre, Derrylin, Co. Fermanagh`
- Every image: renamed to `shambala-[subject]-[detail].jpg` before use
- No content hidden in modals — every retreat is its own page

## NAP — Use Exactly This Everywhere

```
Name:    Shambala Holistic & Retreat Centre
Address: 48 Geaglum Road, Derrylin, Co. Fermanagh, BT92 9GN
Phone:   +44 7713 744 589
Email:   shambala108@icloud.com
URL:     https://shambalaholisticandretreatcentre.com/
```

**Never use:**
- rayoflight108@mac.com (old email — wrong)
- "Gealgum" (wrong spelling)
- "Ray of Light" (old brand name)
- bumbleprint (old developer name)

## Site Map & URL Structure

```
/                           Homepage
/about/                     About Sukhada & the centre
/therapies/                 Therapies overview
/therapies/holistic/        Holistic therapies
/therapies/massage/         Massage
/therapies/training/        Reiki training
/retreats/                  Retreats index
/retreats/[slug]/           Individual retreat pages
/wellness-days/             Wellness days
/sound-baths-yoga/          Sound baths & yoga
/corporate-wellness/        Corporate wellbeing
/self-catering/             Self-catering accommodation
/getting-here/              Location & directions (NEW)
/benefits/                  Benefits of holistic therapies
/blog/                      Blog index (NEW)
/blog/[slug]/               Individual blog posts
/testimonials/              Testimonials
/contact/                   Contact & booking
```

## Navigation (consolidated — do not expand)

```
Welcome | About | Therapies ▾ | Retreats | Sound & Yoga | Corporate | Stay | Contact
```
Therapies dropdown: Holistic · Massage · Training · Wellness Days

## Component Conventions

- All components in `src/components/`
- Layout wrapper in `src/layouts/BaseLayout.astro`
- BaseLayout handles: fonts, CSS variables, nav, footer, LocalBusiness schema, meta tags
- Page-specific schema (Event, Service) goes in the individual page frontmatter
- No inline styles — all CSS in `src/styles/`
- Global styles in `src/styles/global.css`
- Component styles co-located in `src/styles/components/[name].css`

## CTA Copy Rules

Always action-first. Never passive.

| ✅ Use | ❌ Never |
|---|---|
| Reserve Your Place | Learn More |
| Book a Massage | Click Here |
| Enquire About Retreats | Submit |
| Check Availability | Find Out More |
| Plan Your Wellness Day | Read More |

## Image Handling

- All images in `src/images/`
- Naming: `shambala-[subject]-[location-detail]-[number].jpg`
- Astro's `<Image>` component for all images (handles optimisation automatically)
- `loading="lazy"` on all below-fold images
- Explicit `width` and `height` on all images (prevents CLS)
- WebP conversion handled by Astro build

## Blog & Content

- Blog posts: Markdown files in `src/content/blog/`
- Retreat pages: Markdown files in `src/content/retreats/`
- Frontmatter schema defined in `src/content/config.ts`

Blog post frontmatter:
```yaml
---
title: "What Is a Sound Bath? Everything You Need to Know"
description: "Discover what a sound bath is, what to expect, and why it is one of the most powerful stress-relief tools available — at Shambala, Co. Fermanagh."
pubDate: 2026-06-01
keywords: ["sound bath Ireland", "what is a sound bath", "sound healing Northern Ireland"]
image: "shambala-sound-bath-singing-bowls-01.jpg"
imageAlt: "Tibetan singing bowls at Shambala Holistic Retreat Centre, Derrylin, Co. Fermanagh"
---
```

Retreat page frontmatter:
```yaml
---
title: "Touching the Earth — Grounding Retreat"
description: "A weekend of yoga, T'ai Chi Qigong, forest bathing and meditation on the shores of Upper Lough Erne. Join Shambala for a grounding residential retreat in Fermanagh."
startDate: 2026-06-20
endDate: 2026-06-22
price: 260
currency: GBP
priceEUR: 300
includes: ["Accommodation", "All meals", "Yoga sessions", "Sound bath", "Forest bathing"]
facilitators: ["Sukhada Smith-Repass", "Fiona"]
slug: "touching-the-earth"
---
```

## Schema Markup

LocalBusiness schema (goes in BaseLayout.astro — rendered on every page):
```json
{
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  "name": "Shambala Holistic & Retreat Centre",
  "url": "https://shambalaholisticandretreatcentre.com",
  "telephone": "+447713744589",
  "email": "shambala108@icloud.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "48 Geaglum Road",
    "addressLocality": "Derrylin",
    "addressRegion": "Co. Fermanagh",
    "postalCode": "BT92 9GN",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 54.1869,
    "longitude": -7.7046
  },
  "sameAs": ["https://www.facebook.com/ShambalaHolisticCentre/"]
}
```

## Build Commands

```bash
npm run dev      # Local dev server at localhost:4321
npm run build    # Production build to ./dist/
npm run preview  # Preview production build locally
```

## Deployment

- Netlify — connect GitHub repo, build command `npm run build`, publish dir `dist`
- Environment variables: none needed for static build
- Forms: Netlify Forms (add `netlify` attribute to any <form> element)
- Custom domain: shambalaholisticandretreatcentre.com (point DNS to Netlify after launch)

## Session Workflow

Each Claude Code session should follow this pattern:
1. Read CLAUDE.md (this file)
2. Read shambala-design-system.md
3. Check shambala-seo-checklist.md for the page being built
4. State the page URL, H1, meta title and meta description before writing any code
5. Build the page
6. Self-review: check against SEO checklist, design system, NAP rules, CTA rules
7. Git commit with descriptive message

## Current Build Status

Track page completion here — update after each session:

- [ ] Project scaffolding (Astro init, global CSS, BaseLayout, Nav, Footer)
- [ ] Homepage (`/`)
- [ ] About (`/about/`)
- [ ] Therapies overview (`/therapies/`)
- [ ] Holistic Therapies (`/therapies/holistic/`)
- [ ] Massage (`/therapies/massage/`)
- [ ] Reiki Training (`/therapies/training/`)
- [ ] Retreats index (`/retreats/`)
- [ ] Touching the Earth (`/retreats/touching-the-earth/`)
- [ ] Tai Chi & Yoga Weekend (`/retreats/tai-chi-yoga-weekend/`)
- [ ] Half-Day Stillness (`/retreats/half-day-stillness/`)
- [ ] Wellness Days (`/wellness-days/`)
- [ ] Sound Baths & Yoga (`/sound-baths-yoga/`)
- [ ] Corporate Wellness (`/corporate-wellness/`)
- [ ] Self Catering (`/self-catering/`)
- [ ] Getting Here (`/getting-here/`)
- [ ] Benefits (`/benefits/`)
- [ ] Blog index (`/blog/`)
- [ ] Blog post 1: What Is a Sound Bath (`/blog/what-is-a-sound-bath/`)
- [ ] Blog post 2: 5 Reasons to Book a Retreat (`/blog/wellness-retreat-northern-ireland/`)
- [ ] Blog post 3: Benefits of Reiki (`/blog/benefits-of-reiki-fermanagh/`)
- [ ] Testimonials (`/testimonials/`)
- [ ] Contact (`/contact/`)
- [ ] 301 redirects config (old URLs → new)
- [ ] Netlify deploy & domain switch
