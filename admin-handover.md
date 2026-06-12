# Shambala Admin Handover Guide

This guide is for the Netlify Visual Editor workflow for the Shambala Holistic & Retreat Centre website.

## What Sukhada Will Use

Sukhada should edit the site through Netlify Visual Editor, not WordPress and not the code repository.

The website stays as a fast static Astro site. Netlify Visual Editor gives her a friendly editing layer over the Git content files.

## Login Flow

1. Bryan invites Sukhada to the Shambala site in Netlify with limited editor access.
2. Sukhada receives the Netlify invite by email.
3. She creates or confirms her Netlify login.
4. She opens the Shambala site inside Netlify Visual Editor.
5. She edits content, previews the change, then publishes when ready.

This should be configured for the Shambala site only, not every site on the team.

## First Editable Area

The first admin release focuses on events:

- Retreats
- Wellbeing days
- Half-day retreats
- Workshops
- Sound and yoga events
- Optional posters
- Optional supporting schedule images
- Real schedule outlines as website content

## Event Fields

Each event has friendly fields:

- Event title
- URL slug
- Short description
- Event type
- Start date
- End date
- Price
- Currency
- Euro price, if also listed
- Included items
- Facilitators
- Venue details
- Listing image
- Optional poster image
- Optional supporting schedule image
- Schedule outline
- Booking / enquiry details
- Full page copy

## Schedule Rules

Schedules should be entered into the Schedule outline field as normal website content.

Posters and schedule images are optional supporting visuals only. They should not be the only place where the day plan, timings, activities or booking details appear.

## Publishing Rules

Use preview before publish.

Past events are not deleted. They remain in the content archive, but the public listing pages hide them once the event date has passed.

## Bryan Checklist

Before handing this to Sukhada:

- Confirm the Shambala site is connected to Netlify Visual Editor.
- Confirm Git CMS is reading `src/content`.
- Confirm Sukhada has limited access to the Shambala editing workflow only.
- Create or edit one real test event.
- Confirm the event appears on the correct public page.
- Confirm schedule outline content renders on the event detail page.
- Confirm optional poster and schedule images render when supplied.
- Confirm preview then publish works.
- Confirm a past event does not appear in listing pages.

## Later Phase

After events are working comfortably, move the core page copy into structured editable content files:

- Home
- About
- Contact
- Therapies
- Stay
- Sound and Yoga
- Testimonials
- Global business details

The design and page layout should stay locked. Sukhada should edit words, events, images and schedules without needing to manage page structure.
