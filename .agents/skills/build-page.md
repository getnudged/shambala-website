# Skill: Build a Shambala Website Page
## .agents/skills/build-page.md

Use this skill whenever building or editing any page on the Shambala website.

---

## Pre-Build Checklist (do this before writing any code)

1. Read CLAUDE.md if not already done this session
2. Identify the page from the site map
3. State out loud (in your response):
   - Page URL slug
   - H1 text (single, keyword-optimised)
   - Meta title (pattern: `[Topic] | Shambala Holistic Retreat Centre | Fermanagh`)
   - Meta description (150–160 chars exactly)
   - Primary keyword target
   - Secondary keywords
4. Get approval or proceed if in autonomous mode

---

## Build Pattern (Astro)

Every page follows this structure:

```astro
---
// src/pages/[page-name].astro
import BaseLayout from '../layouts/BaseLayout.astro';

const meta = {
  title: "Page Title | Shambala Holistic Retreat Centre | Fermanagh",
  description: "150-160 char description with primary keyword.",
  canonical: "https://shambalaholisticandretreatcentre.com/page-slug/"
};

// Add page-specific schema here (Event, Service, etc.)
const schema = { ... };
---

<BaseLayout {meta} {schema}>
  <!-- Page content -->
</BaseLayout>
```

---

## Section Order (Homepage)

1. Hero — full-bleed, H1, quote blockquote, two CTAs
2. Intro / About — who Sukhada is, 26+ years, the lake setting
3. Services grid — 6 cards, each linking to its page
4. Retreats — 3 upcoming retreat cards
5. The Setting — Lough Erne feature, cross-border note
6. Sound Bath feature — what is a sound bath
7. Testimonials — 3 quotes
8. Corporate — teaser strip
9. Newsletter signup
10. Footer

## Section Order (Retreat Page)

1. Hero — retreat name as H1, dates, price
2. Overview — what this retreat is, who it's for
3. Full schedule — Friday / Saturday / Sunday
4. What's included — accommodation, meals, sessions
5. Facilitators — Sukhada + any guest teachers
6. Pricing — £ and € clearly stated
7. Enquiry form (Netlify Form — not a link to contact page)
8. Location — embedded map, getting here link
9. Related retreats — 2 other retreat cards

---

## CSS Rules

- Never hardcode colour values — always `var(--lough)` etc.
- Never use font-weight above 500 on display headings
- Always use `clamp()` for responsive font sizes
- Section padding minimum: `padding-block: 6rem`
- Max content width: `1280px` centred with `margin-inline: auto`
- Images always get `loading="lazy"` unless above the fold

---

## Self-Review Before Committing

Run through this before every git commit:

**SEO**
- [ ] Single H1 on the page
- [ ] H1 contains primary keyword
- [ ] Meta title is unique and within 60 chars
- [ ] Meta description is 150–160 chars and contains primary keyword
- [ ] All images have descriptive alt text
- [ ] All images named `shambala-[subject]-[detail].jpg`
- [ ] Internal links use descriptive anchor text (not "click here")
- [ ] LocalBusiness schema present (via BaseLayout)
- [ ] Page-specific schema present if applicable

**Content**
- [ ] No reference to "Ray of Light"
- [ ] No reference to "rayoflight108@mac.com"
- [ ] Address uses "Geaglum" (not "Gealgum")
- [ ] Email is "shambala108@icloud.com"
- [ ] Phone is "+44 7713 744 589"
- [ ] CTAs are action-first
- [ ] No pop-up modals hiding content

**Design**
- [ ] Only CSS variables used for colours
- [ ] Cormorant Garamond for display headings
- [ ] Jost for body and UI text
- [ ] Labels are uppercase, tracked, var(--stone) colour
- [ ] Buttons match design system (square corners, no border-radius)
- [ ] Page background is var(--parchment), not white

**Git commit message format:**
`feat: add [page-name] page — [H1 text]`
Example: `feat: add retreats/touching-the-earth — Touching the Earth Grounding Retreat`
