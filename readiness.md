# Shambala Website Live Readiness

Last reviewed: 2026-06-02

This file tracks what remains before the Astro site is ready for the live Netlify environment at `https://shambalaholisticandretreatcentre.com/`.

## Current Readiness Status

Not ready for live launch yet.

The static build is healthy, the main generated routes respond locally, and there are no Astro diagnostics. The remaining launch work is mostly content confirmation, required missing pages, redirects, deployment headers, and production Netlify form verification.

## Verified Today

- `npm run check` passed with 0 errors, 0 warnings, and 0 hints.
- `npm run build` passed and generated 41 static pages.
- Astro generated WebP assets for the current JPEG source images.
- Local production preview responded with `200 OK` for:
  - `/`
  - `/contact/`
  - `/retreats/touching-the-earth/`
- Local production preview responded with `404 Not Found` for missing required routes:
  - `/therapies-2/`
- `/benefits/` and `/testimonials/` have since been added and generated successfully in the Astro build.
- Representative generated pages have one H1, canonical tags, and JSON-LD schema.
- Contact, newsletter, and retreat enquiry forms include Netlify form attributes and hidden `form-name` fields in generated HTML.
- No production source reference was found for the old email `rayoflight108@mac.com`, wrong road spelling `Gealgum`, old public brand `Ray of Light`, or `bumbleprint`, excluding the internal content audit/reference notes.

## Launch Blockers

- [ ] Add Netlify redirects.
  Required old URLs currently return 404 locally. At minimum:
  - `/therapies-2/` to `/therapies/`
  - `/shambala-holistic-centre/` to `/about/`
  - `/workshops/` decision needed: either keep as a live workshops page intentionally, or redirect to `/sound-baths-yoga/` as the SEO checklist originally required.

- [ ] Add Netlify security headers.
  There is currently no `netlify.toml` or `_headers` file. Add baseline headers for `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, `X-Frame-Options` or CSP `frame-ancestors`, and a carefully tested Content Security Policy.

- [ ] Add or confirm `robots.txt` and XML sitemap output.
  No `robots.txt` or sitemap file was found in the repo. For Astro, add `@astrojs/sitemap` or a static sitemap before launch.

- [ ] Confirm all TODO and placeholder content has been resolved or deliberately accepted.
  There are visible TODO/placeholders in retreat detail pages and several service pages. These should not ship unless the client approves them as temporary copy.

- [ ] Verify Netlify Forms in a deployed preview.
  Local HTML looks correct, but Netlify form capture, notification emails, spam handling, and success behaviour must be tested on Netlify.

## High Priority Before Launch

- [ ] Align the main navigation with the project rule:
  `Welcome | About | Therapies | Retreats | Sound & Yoga | Corporate | Stay | Contact`
  Current nav omits `Welcome` and `Contact`, and includes `Blog`.

- [ ] Decide whether `/workshops/` is a first-class page.
  The required sitemap does not include `/workshops/`, but the app currently builds it and the footer links to it.

- [ ] Add a real `og-image.jpg` or update the default OG image path.
  `BaseLayout.astro` points social sharing to `/og-image.jpg`; that asset was not found in the repo.

- [ ] Rename existing source images to project naming convention.
  Current files are `src/images/Shambala House.jpeg` and `src/images/upper-lough-ern.jpeg`. They should become descriptive names like `shambala-retreat-centre-exterior-01.jpg` and `shambala-upper-lough-erne-view-01.jpg`.

- [ ] Add more real photography.
  The site currently has very few actual image assets. Priority images: Sukhada, treatment room, yoga/sound bath setup, accommodation, exterior, Lough Erne setting.

- [ ] Confirm all retreat prices, dates, deposits, cancellation wording, schedules, inclusions, and facilitators.
  Several retreat pages are generated from draft content and include confirmation notes.

- [ ] Confirm therapy pricing and treatment lists with the client.
  Massage, holistic therapies, training, sound bath dates, self-catering details, and corporate activity options have TODO notes.

## Security Audit Notes

- Static Astro output means there is no custom server-side application code in this repo.
- No local `.env` files were found by the audit.
- No `fetch()` calls or custom API endpoints were found in `src`.
- External links found are limited to Google Fonts, Google Maps, Facebook schema, and WhatsApp booking CTA.
- Forms are Netlify-hosted static forms, so live risk is mainly spam, notification routing, and accidental collection of unnecessary personal data.
- Add spam controls before launch:
  - Netlify honeypot field on contact/newsletter/retreat forms.
  - Consider Netlify reCAPTCHA only if spam appears after launch.
  - Add clear privacy copy near enquiry forms once privacy policy exists.
- Add security headers at Netlify level.
- Keep dependencies current before launch with `npm outdated` and review any `npm audit` findings.

## Endpoint And Route Test Plan

Run after every major launch change:

```bash
npm run check
npm run build
npm run preview
```

Then verify representative routes:

```bash
curl -I http://127.0.0.1:4321/
curl -I http://127.0.0.1:4321/contact/
curl -I http://127.0.0.1:4321/retreats/
curl -I http://127.0.0.1:4321/retreats/touching-the-earth/
curl -I http://127.0.0.1:4321/blog/what-is-a-sound-bath/
curl -I http://127.0.0.1:4321/benefits/
curl -I http://127.0.0.1:4321/testimonials/
curl -I http://127.0.0.1:4321/therapies-2/
```

Expected before launch:

- Required public pages return `200`.
- Legacy URLs return `301` or `302` to the correct new route.
- Unknown URLs return `404`.
- Generated HTML includes canonical tags and LocalBusiness schema.
- Individual retreat pages include Event schema.

## Image Intake Workflow

When the client supplies images:

- [ ] Save originals outside production source if needed for backup.
- [ ] Rename production assets with the Shambala convention: `shambala-[subject]-[detail]-[number].jpg`.
- [ ] Place source images in `src/images/`.
- [ ] Use Astro `<Image>` where possible so the build emits optimized WebP assets.
- [ ] Add descriptive alt text in the required pattern: `[subject] at Shambala Holistic Retreat Centre, Derrylin, Co. Fermanagh`.
- [ ] Use `loading="eager"` only for the main hero image; use lazy loading below the fold.
- [ ] Run `npm run build` and confirm the optimized WebP output is generated.

If an image is added directly in chat, convert it to WebP or add it as a source image and let Astro generate WebP, then place it in the section/page specified.

## Production Deployment Checklist

- [ ] Add `netlify.toml` with build command `npm run build`, publish directory `dist`, redirects, and headers.
- [ ] Confirm Netlify site build uses the same Node version as local development.
- [ ] Deploy a Netlify preview.
- [ ] Submit real test enquiries through:
  - Contact form
  - Newsletter form
  - One retreat enquiry form
- [ ] Confirm form submissions arrive in Netlify dashboard.
- [ ] Confirm notification emails go to `shambala108@icloud.com`.
- [ ] Confirm success states or redirect behaviour after submit.
- [ ] Verify HTTPS on the custom domain.
- [ ] Verify both apex and `www` domain behaviour.
- [ ] Submit sitemap in Google Search Console.
- [ ] Confirm Google Search Console can crawl `/`, `/retreats/`, `/contact/`, and one retreat detail page.
- [ ] Run a Lighthouse pass on mobile for homepage and contact page.
- [ ] Review rendered mobile navigation manually.
- [ ] Review all footer links manually.

## Client Content Needed

- [ ] Final list of client UX/detail changes.
- [ ] Final approved retreat dates and prices.
- [ ] Retreat facilitator biographies.
- [ ] Full retreat daily schedules.
- [ ] Massage and therapy pricing confirmation.
- [ ] Reiki training dates, duration, and pricing.
- [ ] Sound bath and yoga schedule confirmation.
- [ ] Self-catering capacity, room details, and photos.
- [ ] Testimonials approved for publication.
- [ ] Privacy policy and cookie policy wording.
- [ ] Social sharing image or approved hero image for `og-image.jpg`.
