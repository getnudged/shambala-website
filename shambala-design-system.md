# Shambala Holistic & Retreat Centre — Design System
*Version 1.0 · May 2026 · For use in Claude Design / Cowork*

---

## 0. Site Audit Summary

### What the current site IS
A genuine, long-established (26+ years) holistic wellness retreat on the shores of Upper Lough Erne, Derrylin, Co. Fermanagh. The offer is rich: residential retreats, massage, holistic therapies, Reiki, yoga, sound baths, corporate wellbeing, self-catering accommodation. The practitioner (Sukhada) is credentialed and deeply experienced. The Lough Erne lakeside setting is world-class.

### What the current site IS NOT
- Modern (built in WordPress with Slider Revolution, circa 2018–2021 assets)
- Visually distinctive — stock photos, generic layout, white background, no clear design language
- SEO-optimised (per the full SEO report: broken emails, bad URLs, zero schema, pop-up modals hiding content, inconsistent NAP, missing blog)
- Conversion-optimised (no booking system, "Book Now" goes to a contact form)
- Locally targeted (geographic inconsistency between NI and ROI, no Getting Here page)
- Structurally sound (duplicate H1s, /therapies-2/ URLs, old Ray of Light branding surfacing)

### Design Verdict
The site needs a complete redesign, not a patch job. The brand deserves something that feels as restorative and distinctive as the place itself. The lake, the landscape, the quiet — these must become the visual language.

---

## 1. Brand Direction

### 1.1 Design Philosophy
**"Still Water"** — The aesthetic mirrors what Shambala promises: calm, depth, presence. Design is unhurried. Typography breathes. Colour is drawn from the landscape: water, stone, moss, evening sky. Nothing shouts. Everything invites.

This is the antithesis of the busy wellness-spa aesthetic (marble, gold, blush pink). It is rooted in place — specifically Lough Erne and the Fermanagh landscape — and in genuine practice rather than lifestyle aspiration.

### 1.2 Aesthetic Keywords
Serene · Grounded · Luminous · Ancient · Intimate · Real

---

## 2. Colour System

All colours are drawn from the Lough Erne landscape palette.

```css
:root {
  /* Primary palette */
  --colour-lough:       #2C4A5A;   /* Deep lake water — primary brand */
  --colour-dusk:        #4A6741;   /* Fermanagh moss & forest — secondary */
  --colour-stone:       #8B7355;   /* Limestone & earth — accent warm */
  --colour-mist:        #E8E4DC;   /* Morning mist — light background */
  --colour-parchment:   #F5F1E8;   /* Warm off-white — page background */

  /* Semantic */
  --colour-text-primary:   #1C2B35;   /* Near-black, warm */
  --colour-text-secondary: #5A6B74;   /* Muted supporting text */
  --colour-text-inverse:   #F5F1E8;   /* On dark backgrounds */

  /* Functional */
  --colour-cta:            #4A6741;   /* Primary CTA — dusk green */
  --colour-cta-hover:      #3A5232;
  --colour-cta-secondary:  #2C4A5A;   /* Secondary CTA — lough blue */
  --colour-border:         rgba(44, 74, 90, 0.15);
  --colour-overlay:        rgba(28, 43, 53, 0.55);

  /* Retreats / Events accent */
  --colour-gold:           #C4A35A;   /* Candlelight — used sparingly for event highlights */
}
```

**Do not use:**
- Purple gradients
- Clinical white (#FFFFFF) as a page background
- Bright coral, millennial pink, or sage green clichés

---

## 3. Typography

### 3.1 Font Stack

```css
/* Display — headings, hero text */
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');
--font-display: 'Cormorant Garamond', Georgia, serif;

/* Body — paragraphs, UI text */
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap');
--font-body: 'Jost', system-ui, sans-serif;

/* Utility — labels, small caps, metadata */
--font-label: 'Jost', system-ui, sans-serif;
```

**Rationale:**
- Cormorant Garamond: literary, breath-giving, ancient without being fusty. The italic weight especially carries a handwritten warmth. Perfect for retreat names, hero lines, and pull quotes.
- Jost: geometric but humanist. Clean. Modern without being cold. Pairs with Cormorant without competing.

### 3.2 Type Scale

```css
--text-hero:   clamp(3.5rem, 7vw, 7rem);    /* Hero h1 */
--text-display:clamp(2.5rem, 4.5vw, 5rem);   /* Section titles */
--text-h2:     clamp(2rem, 3vw, 3.25rem);
--text-h3:     clamp(1.4rem, 2vw, 2rem);
--text-body:   1.125rem;                      /* 18px */
--text-small:  0.875rem;                      /* 14px */
--text-label:  0.75rem;  letter-spacing: 0.12em; text-transform: uppercase;
```

### 3.3 Type Rules
- Display headings: font-weight 300 (light) — do not bold headings
- Body text: line-height 1.75, max-width 68ch
- Pull quotes: Cormorant Garamond Italic, font-size --text-h3, colour --colour-lough
- Section labels (e.g. "Our Retreats", "Holistic Therapies"): --font-label, --text-label, --colour-stone, tracked

---

## 4. Layout System

### 4.1 Grid
```css
--grid-max:    1280px;
--grid-gutter: clamp(1.5rem, 4vw, 4rem);
--grid-cols:   12;
```

### 4.2 Spacing Scale
```css
--space-xs:   0.5rem;
--space-s:    1rem;
--space-m:    2rem;
--space-l:    4rem;
--space-xl:   7rem;
--space-2xl:  12rem;
```

Sections use `padding-block: var(--space-xl)` as a minimum. Breathing room is a brand value.

### 4.3 Layout Principles
- Asymmetric grid breaking — images bleed to edge on one side, text floats
- Generous whitespace between sections
- Full-bleed photography sections alternating with parchment-background content sections
- Mobile-first: single column, large touch targets, text-first
- No carousels on mobile — stacked cards only

---

## 5. Imagery Guidelines

### 5.1 Photography Style
- **Required:** Real photography of the actual centre, Lough Erne, treatment rooms, Sukhada
- **Style:** Natural light, soft focus, golden hour and blue hour preferred
- **Forbidden:** Stock photography of strangers on massage tables, generic "spa" imagery, WhatsApp screenshots used as hero images

### 5.2 Image Treatment
```css
/* Overlay for legibility on hero images */
.hero-image::after {
  content: '';
  background: linear-gradient(
    to bottom,
    transparent 40%,
    var(--colour-overlay) 100%
  );
}

/* All images: slight warm tone via CSS filter */
.site-image {
  filter: saturate(0.9) brightness(0.97);
}
```

### 5.3 Alt Text Rules (SEO)
Every image must have descriptive alt text following this pattern:
`[Subject] at Shambala Holistic Retreat Centre, Derrylin, Co. Fermanagh`

Example: `alt="Yoga session on the lakeside lawn at Shambala Holistic Retreat Centre, Derrylin, Co. Fermanagh"`

---

## 6. Component Library

### 6.1 Buttons

```css
/* Primary CTA */
.btn-primary {
  font-family: var(--font-label);
  font-size: var(--text-label);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--colour-text-inverse);
  background: var(--colour-cta);
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 0;            /* Deliberately square — architectural, not bubbly */
  transition: background 0.3s ease, transform 0.2s ease;
}
.btn-primary:hover {
  background: var(--colour-cta-hover);
  transform: translateY(-2px);
}

/* Ghost / secondary */
.btn-ghost {
  background: transparent;
  border: 1px solid currentColor;
  color: var(--colour-lough);
  padding: 0.9rem 2.25rem;
  /* Same label typography */
}
```

**CTA Copy Standards (always action-first):**
- ✅ "Reserve Your Place"
- ✅ "Book a Massage"
- ✅ "Enquire About Retreats"
- ✅ "Check Availability"
- ❌ "Learn More"
- ❌ "Click Here"
- ❌ "Submit"

### 6.2 Cards (Retreat / Service)

```css
.card {
  background: var(--colour-parchment);
  border: 1px solid var(--colour-border);
  border-radius: 2px;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(28, 43, 53, 0.12);
}

/* Card image ratio */
.card__image {
  aspect-ratio: 4 / 3;
  object-fit: cover;
}

/* Card label (e.g. "Weekend Retreat · £260") */
.card__meta {
  font-family: var(--font-label);
  font-size: var(--text-label);
  color: var(--colour-stone);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
```

### 6.3 Navigation

```css
/* Desktop nav */
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem var(--grid-gutter);
  background: transparent;           /* Transparent on hero */
  transition: background 0.4s ease;
}
.nav--scrolled {
  background: var(--colour-parchment);
  box-shadow: 0 2px 20px rgba(28, 43, 53, 0.08);
}

/* Nav links */
.nav__link {
  font-family: var(--font-label);
  font-size: var(--text-label);
  color: var(--colour-text-inverse); /* White on transparent nav */
  letter-spacing: 0.08em;
  text-transform: uppercase;
  position: relative;
}
.nav__link::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0; right: 0;
  height: 1px;
  background: var(--colour-gold);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.nav__link:hover::after { transform: scaleX(1); }
```

**Consolidated nav items (from current bloated 14-item menu):**
```
Welcome  |  About  |  Therapies ▾  |  Retreats  |  Sound & Yoga  |  Corporate  |  Stay  |  Contact
```
Dropdown "Therapies" contains: Holistic Therapies · Massage · Training · Wellness Days

### 6.4 Section Dividers
Use the Lough Erne wave motif as an SVG section divider between full-bleed photography and parchment content sections — an organic curve rather than a hard horizontal line.

---

## 7. Page Structure & SEO Architecture

### 7.1 Site Map (New)

```
/ (Homepage)
├── /about/                         (was /shambala-holistic-centre/)
├── /therapies/                     (was /therapies-2/ — 301 redirect required)
│   ├── /therapies/holistic/
│   ├── /therapies/massage/         (was /massage/)
│   └── /therapies/training/        (was /services/)
├── /retreats/                      (keep URL, but convert modals to real pages)
│   ├── /retreats/touching-the-earth/
│   ├── /retreats/tai-chi-yoga-weekend/
│   ├── /retreats/tai-chi-yoga-half-day/
│   └── /retreats/[additional-retreats]/
├── /wellness-days/                 (keep)
├── /sound-baths-yoga/              (was /workshops/)
├── /corporate-wellness/            (keep)
├── /self-catering/                 (keep)
├── /getting-here/                  (NEW — critical for local SEO)
├── /benefits/                      (expand into rich resource)
├── /blog/                          (NEW — critical for content SEO)
│   └── /blog/[post-slug]/
├── /testimonials/                  (keep)
└── /contact/                       (keep)
```

### 7.2 Homepage H1 (Single, SEO-optimised)
```html
<h1>Shambala Holistic & Retreat Centre — Wellness Retreat, Derrylin, Co. Fermanagh</h1>
```
The decorative Hippocrates quote must be a `<p>` or `<blockquote>`, not an H1.

### 7.3 Meta Title Template
Pattern: `[Page Topic] | Shambala Holistic Retreat Centre | Fermanagh`

| Page | Title |
|---|---|
| Homepage | Shambala Holistic & Retreat Centre \| Wellness Retreat Fermanagh |
| Retreats | Wellness Retreats Northern Ireland \| Shambala Fermanagh |
| Therapies | Holistic Therapies Fermanagh \| Derrylin & Enniskillen \| Shambala |
| Massage | Massage Therapy Fermanagh \| Enniskillen \| Shambala Retreat Centre |
| Sound Baths | Sound Bath Northern Ireland \| Yoga & Sound Healing Fermanagh |
| Corporate | Corporate Wellness Northern Ireland \| Shambala Retreat Centre |
| Getting Here | Getting to Shambala \| Fermanagh from Cavan, Monaghan & Beyond |
| Blog | Wellness Blog \| Shambala Holistic Retreat Centre Fermanagh |

### 7.4 Homepage Meta Description
```
Welcome to Shambala — a holistic wellness retreat on the shores of Upper Lough Erne, Derrylin, Co. Fermanagh. Book massage, yoga, sound baths & residential retreats in Northern Ireland. Open to visitors from across Ireland.
```
(156 characters — within Google's display range)

---

## 8. Schema Markup Requirements

Every page must include these in the `<head>`:

### 8.1 LocalBusiness (all pages)
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
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "description": "By appointment — contact for availability"
  },
  "sameAs": [
    "https://www.facebook.com/ShambalaHolisticCentre/"
  ]
}
```

### 8.2 Event (each retreat page)
```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "[Retreat Name]",
  "startDate": "[YYYY-MM-DDTHH:MM]",
  "endDate": "[YYYY-MM-DDTHH:MM]",
  "location": {
    "@type": "Place",
    "name": "Shambala Holistic & Retreat Centre",
    "address": { ... }
  },
  "offers": {
    "@type": "Offer",
    "price": "[price]",
    "priceCurrency": "GBP",
    "availability": "https://schema.org/InStock"
  },
  "organizer": {
    "@type": "Organization",
    "name": "Shambala Holistic & Retreat Centre"
  }
}
```

### 8.3 BreadcrumbList
Enable via Yoast SEO — auto-generated when breadcrumbs are activated.

---

## 9. NAP Consistency Standards

The following must be identical across the website, Google Business Profile, Facebook, and all directories:

```
Business Name:  Shambala Holistic & Retreat Centre
Address:        48 Geaglum Road, Derrylin, Co. Fermanagh, BT92 9GN
Phone:          +44 7713 744 589   (or local: 07713 744 589 — pick one, use everywhere)
Email:          shambala108@icloud.com
Website:        https://shambalaholisticandretreatcentre.com/
```

**Items to fix immediately:**
- [ ] Footer mailto points to `rayoflight108@mac.com` → change to `shambala108@icloud.com`
- [ ] Address inconsistency "Geaglum" vs "Gealgum" — verify correct spelling, update everywhere
- [ ] Logo alt text "cropped rol transparent background" → "Shambala Holistic and Retreat Centre logo"
- [ ] Any remaining "Ray of Light" references → update to Shambala
- [ ] meta-author = 'bumbleprint' → remove or change to "Shambala Holistic & Retreat Centre"

---

## 10. Image Naming Convention

```
shambala-[subject]-[location]-[number].jpg

Examples:
shambala-lough-erne-sunset-view-01.jpg
shambala-holistic-massage-treatment-room-01.jpg
shambala-yoga-session-lakeside-01.jpg
shambala-sound-bath-singing-bowls-01.jpg
shambala-retreat-centre-exterior-01.jpg
shambala-sukhada-reiki-session-01.jpg
```

All WhatsApp-sourced images (`WhatsApp-Image-2026-xx-xx...`) must be renamed before uploading to the new site.

---

## 11. Page-by-Page Content Requirements

### 11.1 Homepage
**Above the fold:**
- Full-bleed hero video/image — Lough Erne, dawn light or golden hour
- Single H1 (see 7.2)
- Hippocrates quote as styled blockquote below H1
- Two CTAs: "Explore Retreats" (primary) + "Book a Therapy" (ghost)

**Below the fold sections:**
1. **Who we are** — Sukhada's story, 26+ years, founded 1999 → 2006 → 2012
2. **Our Therapies** — 4-card grid: Holistic · Massage · Sound Bath · Yoga (with links)
3. **Upcoming Retreats** — 3 cards, each with own page URL, date, price
4. **The Setting** — Lough Erne feature, cross-border welcome message
5. **Testimonials** — 3 quotes pulled from Testimonials page
6. **Trust bar** — Logos: qualifications, associations, experience years
7. **Corporate Wellness** — teaser with CTA
8. **Newsletter / mailing list** signup

**Keywords to target on homepage:**
`wellness retreat Northern Ireland`, `holistic massage Fermanagh`, `sound bath Northern Ireland`, `yoga retreat Ireland`

### 11.2 Retreats Page
- Remove all pop-up modals
- Each retreat = its own card → its own dedicated page (`/retreats/[retreat-name]/`)
- Each retreat page: 400+ words, full schedule, pricing in £ and €, Event schema, "Reserve Your Place" CTA linking to enquiry form (not contact page)
- Filter/sort: upcoming by date

**Missing keyword targets:** `yoga retreat Ireland`, `mindfulness retreat Ireland`, `weekend retreat Ireland`, `wellness retreat Cavan`, `shamanic retreat Ireland`

### 11.3 Getting Here (NEW PAGE)
- Map embed
- Driving times from: Belfast (2h), Dublin (2h), Derry (1.5h), Enniskillen (20min), Cavan (40min), Monaghan (50min)
- Note re cross-border travel (no passport required)
- Dual GBP/EUR pricing explicitly mentioned
- Nearest airports: Belfast City (BHD), Dublin, Belfast International (BFS)
- **Keyword targets:** `wellness retreat Cavan`, `wellness retreat from Dublin`, `holistic centre Cavan`, `retreat near Enniskillen`

### 11.4 Blog (NEW)
Start with these 3 posts (target publication: Month 1):
1. `What Is a Sound Bath? Everything You Need to Know` → targets `what is a sound bath`, `sound bath Ireland`
2. `5 Reasons to Book a Wellness Retreat in Northern Ireland` → targets `wellness retreat Northern Ireland`
3. `The Benefits of Reiki — What to Expect at Your First Session` → targets `reiki Fermanagh`, `reiki benefits`

Then 2 posts/month from the list in the SEO report.

---

## 12. Booking / Enquiry System

Current state: "Book Now" → Contact page (friction, manual). Replace with:

**Recommended:** Integrate [Calendly](https://calendly.com) (free tier) or [Acuity Scheduling](https://acuityscheduling.com) for therapy bookings.

For retreats: a dedicated enquiry form per retreat page (not the generic contact form) with fields:
- Name, Email, Phone
- Which retreat
- Number of guests
- Dietary requirements
- How did you hear about us

This data feeds directly to Sukhada's email. No manual copy-paste from a contact form.

---

## 13. Google Business Profile Checklist

- [ ] Claim/verify the profile at business.google.com
- [ ] Name: `Shambala Holistic & Retreat Centre` (exact match to website)
- [ ] Primary category: `Wellness Centre`
- [ ] Secondary categories: `Day Spa`, `Yoga Studio`, `Massage Therapist`, `Retreat Centre`
- [ ] Description: include `wellness retreat Fermanagh`, `holistic massage Northern Ireland`, `sound bath`, `yoga`, `Reiki`, `Upper Lough Erne`
- [ ] Add 20+ photos: centre exterior, Lough Erne setting, treatment rooms, yoga space, retreat meals
- [ ] Set opening hours or "By appointment"
- [ ] Post to GBP 2–4x/month (retreats, events, seasonal content)
- [ ] Actively request Google Reviews after every session/retreat

---

## 14. Accessibility & Performance Standards

- All colour combinations must meet WCAG AA contrast (4.5:1 for body, 3:1 for large text)
- All images: width + height attributes set to prevent layout shift
- Font loading: `font-display: swap` on all Google Fonts
- Lazy loading: `loading="lazy"` on all images below the fold
- Core Web Vitals targets: LCP < 2.5s, CLS < 0.1, INP < 200ms
- Mobile-first: all tap targets minimum 44px × 44px

---

## 15. What's Already Working — Maintain These

Per the SEO report, these must be preserved in the rebuild:

- ✅ Canonical tags on all pages
- ✅ Open Graph and Twitter Card tags
- ✅ `en_GB` locale setting
- ✅ Meta robots allowing full indexing
- ✅ HTTPS
- ✅ Dual GBP/EUR pricing (a genuine competitive differentiator)
- ✅ Facebook presence (ShambalaHolisticCentre) — link from new site
- ✅ Testimonials page — expand content, surface quotes on service pages

---

*End of Design System · Shambala Holistic & Retreat Centre · May 2026*
*Prepared for use in Claude Design. Questions: cross-reference the companion SEO report (Shambala_SEO_Review_2026.pdf)*
