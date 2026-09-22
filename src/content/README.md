# Editing site content

This folder holds **all the text and data** shown on the site. Components
under `src/components/` read from here — you should not need to touch them to
update content. Copy (headlines, descriptions) and data (events, gallery,
team, links) live together so a future committee member can edit the site
without learning React.

## What lives where

| What you want to change          | File                    | Notes                                                       |
| -------------------------------- | ----------------------- | ----------------------------------------------------------- |
| Events (workshops, hackathons…)  | `events.ts`             | Append to the `events` array; images go in `public/images/events/` |
| Gallery photos                   | `gallery.ts`            | Add to `galleryItems`; images go in `public/images/gallery/<category>/` |
| Team members & groups            | `team.ts`               | Keep `group` matching a group id; photos in `public/images/team/` |
| Site name/tagline, navigation     | `site.ts` (`siteConfig`, `navItems`) | Labels + routes                                  |
| Join URL, email, socials         | `site.ts` (`links`)     | Empty values hide/neutralize those buttons and rows         |
| Home / About page copy           | `home.ts`, `about.ts`   | Plain text + structured lists                               |
| Contact channels (rows shown on the Contact page) | `contact.ts` | Built from `links` in `site.ts` — fill those to activate rows |

See the comment at the top of each file for the exact shape of an entry —
every file includes a filled-in example you can copy.

## Ground rules

- **Never invent content.** Only add real events, photos, and people. Empty
  lists render tasteful "coming soon" states — leave them empty rather than
  adding placeholders.
- **Images first.** A gallery/event/team entry that references a photo needs
  the file to exist under `public/images/…` or the page shows a missing image.
- **Don't invent links.** In `site.ts`, `links.joinUrl` and the socials start
  empty on purpose; fill them only with real destinations.

## Running the site locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Verifying changes before committing

```bash
npx tsc --noEmit   # type errors would break the build
npm run lint       # style/lint checks
npm run build      # production build — catches most mistakes
```

CI runs all three on every push/PR to `main`, so a broken change gets caught
there too.
