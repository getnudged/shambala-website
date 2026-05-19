AGENTS.md

Project guidance for Codex working on the Shambala Holistic & Retreat Centre website.

## Required reading before editing

Before making any code changes, read these files in full:

1. CLAUDE.md
2. shambala-design-system.md
3. shambala-seo-checklist.md
4. .agents/skills/build-page.md
5. shambala-homepage.html

If any of these files are missing, stop and report which file is missing before editing.

## Project summary

This is a full website rebuild for Shambala Holistic & Retreat Centre.

The site must be built as a fast, static Astro website with:

- Astro
- Plain CSS
- CSS custom properties
- Cormorant Garamond for display headings
- Jost for body and UI text
- Astro Content Collections for blog and retreat content
- Netlify Forms for enquiry forms
- Netlify deployment

Do not use:

- Tailwind
- CSS-in-JS
- WordPress
- React unless specifically requested
- Inline styles unless temporarily required for debugging
- Hardcoded colours outside CSS variables

## Reference prototype

Use `shambala-homepage.html` as a visual reference prototype only.

Do not treat it as the production homepage.
Do not simply copy it into `index.html`.
Do not leave production CSS and JavaScript embedded inside one HTML file.

Rebuild the design properly inside Astro using:

- `src/layouts/BaseLayout.astro`
- `src/components/`
- `src/pages/`
- `src/styles/global.css`
- `src/styles/components/`

The prototype can guide:

- visual mood
- colour use
- section order
- spacing
- typography
- homepage layout
- animation feel

The final implementation should be clean, maintainable Astro code.

## Required site structure

Use this URL structure:

- `/`
- `/about/`
- `/therapies/`
- `/therapies/holistic/`
- `/therapies/massage/`
- `/therapies/training/`
- `/retreats/`
- `/retreats/[slug]/`
- `/wellness-days/`
- `/sound-baths-yoga/`
- `/corporate-wellness/`
- `/self-catering/`
- `/getting-here/`
- `/benefits/`
- `/blog/`
- `/blog/[slug]/`
- `/testimonials/`
- `/contact/`

## Navigation

Use this consolidated navigation only:

Welcome | About | Therapies | Retreats | Sound & Yoga | Corporate | Stay | Contact

Therapies dropdown:

- Holistic
- Massage
- Training
- Wellness Days

Do not expand the navigation beyond this without permission.

## Non-negotiable business details

Use these details exactly everywhere:

Name: Shambala Holistic & Retreat Centre  
Address: 48 Geaglum Road, Derrylin, Co. Fermanagh, BT92 9GN  
Phone: +44 7713 744 589  
Email: shambala108@icloud.com  
URL: https://shambalaholisticandretreatcentre.com/

Never use:

- rayoflight108@mac.com
- Gealgum
- Ray of Light
- bumbleprint

## Design rules

Read `shambala-design-system.md` before writing CSS.

Use CSS variables for all brand colours.

Core variables expected:

```css
--lough: #2C4A5A;
--dusk: #4A6741;
--stone: #8B7355;
--parchment: #F5F1E8;
--text: #1C2B35;
--gold: #C4A35A;

Rules:

Page background should be var(--parchment), not white
Headings use Cormorant Garamond
Body and UI text use Jost
Display headings should not use font weight above 400
Labels are uppercase, letter-spaced, and use the design system styling
Buttons should use the design system style
Avoid rounded modern SaaS styling unless explicitly requested
Keep the site calm, earthy, premium, holistic, and local to Fermanagh
SEO rules

Read shambala-seo-checklist.md before building each page.

Every page must have:

One H1 only
Unique meta title
Unique meta description
LocalBusiness schema through BaseLayout
Page-specific schema where required
Descriptive image alt text
Descriptive internal link text
Proper canonical URL

Meta title pattern:

[Page Topic] | Shambala Holistic Retreat Centre | Fermanagh

Before building any page, state:

Page URL
H1
Meta title
Meta description
Primary keyword
Secondary keywords

Then proceed unless asked to wait for approval.

Page-building process

Use .agents/skills/build-page.md as the required page build workflow.

For each page:

Read the relevant project files
Identify the page from the sitemap
State the page SEO plan
Build the page in Astro
Check the page against the SEO checklist
Check the page against the design system
Check NAP details
Run build checks
Commit with a clear message
Homepage section order

The homepage must follow this structure:

Hero with full-bleed visual, H1, quote, and two CTAs
Intro/About with Sukhada, 26+ years, and lake setting
Services grid with 6 cards
Retreats with 3 upcoming retreat cards
The Setting with Lough Erne feature and cross-border note
Sound Bath feature
Testimonials
Corporate wellbeing teaser
Newsletter signup
Footer
File conventions

Use:

src/layouts/BaseLayout.astro
src/components/Nav.astro
src/components/Footer.astro
src/styles/global.css
src/styles/components/
src/content/blog/
src/content/retreats/
src/content/config.ts

Do not put all CSS into one page component unless it is a temporary scaffold.

Commands

After scaffolding Astro, use these commands:

npm run dev
npm run build
npm run preview

Before committing, run:

npm run build

If available, also run:

npm run check

Do not claim the build passes unless the command has actually been run.

Git rules

Make focused commits.

Commit message format:

feat: add [page-name] page
chore: scaffold Astro project
fix: correct [specific issue]
style: refine [specific design area]

For page commits, prefer:

feat: add homepage
feat: add retreats page
feat: add contact page
Safety rules

Do not delete reference files unless asked.

Do not overwrite:

CLAUDE.md
AGENTS.md
shambala-design-system.md
shambala-seo-checklist.md
shambala-homepage.html
.agents/skills/build-page.md

Do not invent missing business details.
If content is missing, add clear placeholder copy and mark it with a TODO comment.

Do not use external APIs or backend services unless asked.
