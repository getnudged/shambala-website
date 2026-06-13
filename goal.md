# Goal: Netlify Pro Admin System for Shambala

## Project Understanding

Create a WordPress-style editing experience for Shambala Holistic & Retreat Centre without moving the site to WordPress.

The public website remains a fast static Astro site. The admin/editing layer should use Netlify Pro tooling so Sukhada can log in, edit content through a friendly interface, add or update events, upload optional posters, write schedule outlines as website content, and publish changes without touching code, GitHub, Markdown, YAML, or Netlify build logs.

Sukhada is assumed to be highly non-technical, so the admin experience must use plain labels, clear required fields, minimal choices, and safe defaults.

## Recommended Technical Direction

Use Netlify Visual Editor with Git CMS on the Netlify Pro account.

Reasoning:

- Netlify Visual Editor is built for structured content editing and non-technical editors.
- Netlify documents Visual Editor support for Astro.
- Netlify documents Git CMS as a two-way sync option for file-based content.
- The site is already a Git-backed Astro project with Markdown content collections.
- Netlify Git Gateway is now deprecated, so it should not be the first-choice approach for a new setup.
- A custom password/login inside Astro would be the wrong architecture for a static site.

## Important Auth Clarification

Netlify Pro password protection is useful for protecting deploys and previews, but it is not the same thing as a secure custom `/admin/` login for editing production content.

The admin/editor access should be handled by Netlify account/team/editor access rather than a homemade login form. The user experience can still feel simple:

1. Sukhada receives an invite.
2. She logs in with her email.
3. She opens the editor.
4. She edits fields and uploads files.
5. She saves/publishes.

## Definition of Complete

The admin project is complete when:

- Sukhada can log in using a Netlify-managed account or approved editor access.
- Sukhada can edit retreat and wellness day content without touching code.
- Sukhada can add new retreats, wellness days, workshops, sound baths, yoga sessions, and other events.
- Sukhada can upload and assign optional posters.
- Sukhada can write and edit event schedules directly as website content.
- Sukhada can edit key page copy across the website.
- Sukhada can update testimonials and important global details where appropriate.
- Expired events automatically disappear from public listings.
- Old event records are not deleted unless deliberately removed.
- Public pages continue to build as a static Astro site.
- `npm run build` passes.
- `npm run check` passes if available.
- A deploy preview is tested before merging the final work.

## Content Areas to Make Editable

### Global Content

- Site name.
- Contact phone.
- Contact email.
- Address.
- WhatsApp link.
- Footer columns.
- Navigation labels only if deliberately changed.
- Social links if added later.
- SEO defaults where appropriate.

### Core Pages

- Home.
- About.
- Therapies overview.
- Holistic therapies.
- Massage.
- Training and workshops.
- Retreats index.
- Wellness days.
- Sound baths and yoga.
- Sound baths.
- Yoga.
- Corporate wellness.
- Self-catering accommodation.
- Getting here.
- Benefits.
- Testimonials.
- Contact.

### Dynamic Content

- Retreats.
- Wellness days.
- Workshops.
- Half-day retreats.
- Sound bath events.
- Yoga events.
- Corporate/group events if needed.
- Blog posts if the client wants ongoing articles.

### Media

- Optional retreat posters.
- Event schedule outlines as structured website content.
- Page images.
- Gallery images.

## Event Model

Every editable event should support:

- Title.
- Slug.
- Event type.
- Short description.
- Full body copy.
- Start date.
- End date.
- Display date note if needed.
- Start/end time.
- Structured schedule outline.
- Price in GBP.
- Price in EUR where relevant.
- Venue name.
- Venue address.
- Venue map link.
- Facilitators.
- Included items.
- Optional poster image.
- Poster alt text.
- Schedule rows with day/date, time, activity, facilitator and notes.
- Booking/enquiry instructions.
- Draft/published status if supported.

## Event Expiry

Past events should be removed from public listings automatically.

Rules:

- Use `endDate` when present.
- Fall back to `startDate` when there is no `endDate`.
- Do not delete the content file automatically.
- Keep old detail pages available unless the event is manually unpublished or deleted.
- Apply the same filtering to homepage, retreats index, wellness days, and related event sections.

## Implementation Plan

### Phase 1: Audit and Content Model

- Map every current page and content collection.
- Identify hardcoded copy that must move into editable content files.
- Define editor-friendly models for pages, events, testimonials, global settings, optional posters, and structured schedule outlines.
- Confirm the exact Netlify Pro/editor access setup.

Checkpoint branch:

```text
feature/admin-audit-content-model
```

### Phase 2: Netlify Visual Editor Foundation

- Add Netlify Visual Editor configuration.
- Configure Astro support.
- Configure Git CMS content source.
- Configure static asset upload paths.
- Test editor access on a deploy preview.

Checkpoint branch:

```text
feature/admin-visual-editor-foundation
```

### Phase 3: Retreats, Wellness Days and Events

- Make `src/content/retreats/` editable.
- Add clear event type options.
- Add safe required fields.
- Add optional poster fields and required schedule outline fields.
- Test creating a new event from the editor.

Checkpoint branch:

```text
feature/admin-events-editor
```

### Phase 4: Page Copy Editing

- Move key page copy out of `.astro` files and into structured editable content.
- Keep design/layout in Astro components.
- Make only content editable, not layout/code.
- Test the most important pages first: Home, About, Retreats, Wellness Days, Workshops, Contact.

Checkpoint branch:

```text
feature/admin-page-copy-editor
```

### Phase 5: Media Handling

- Confirm upload folders.
- Add editor fields for optional posters and structured schedule outlines.
- Require alt text.
- Prevent confusing field names.
- Test uploaded media on public pages.

Checkpoint branch:

```text
feature/admin-media-editor
```

### Phase 6: Event Expiry

- Add shared helper for upcoming/past events.
- Update all public listing pages to use it.
- Test with past and future event dates.

Checkpoint branch:

```text
feature/admin-event-expiry
```

### Phase 7: Handover

- Create a short Sukhada-friendly guide.
- Include screenshots if useful.
- Test with one real content change.
- Confirm rollback path through Git.

Checkpoint branch:

```text
feature/admin-handover
```

## Client-Facing Interim Workflow

Until the admin system is built, use:

```text
shambala-client-content-change-template.docx
```

The client can fill this in with:

- Page copy changes.
- New event details.
- Existing event updates.
- Optional posters to attach.
- Schedule outlines to paste/write as editable website content.
- Removals.
- Urgent changes.

Bryan can then make the changes manually while the admin system is being built.

## Open Decisions

- Confirm Sukhada's admin email address.
- Confirm whether she should have full editor access or a limited editor role.
- Confirm whether old event detail pages should remain accessible after expiry.
- Confirm whether blog editing should be included in the first admin release.
- Confirm whether every page must be editable immediately or whether events should ship first.
- Confirm whether the client wants draft/review workflow before publishing.
- Confirm final upload folder structure for posters and page images.

## Non-Goals

- Do not migrate the site to WordPress.
- Do not add a custom database.
- Do not build a homemade password system in Astro.
- Do not expose layout/design controls to Sukhada.
- Do not let public visitors edit content.
- Do not automatically delete old events without explicit approval.
