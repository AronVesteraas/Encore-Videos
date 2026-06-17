# Encore Videos — Landing Page

Production [Next.js](https://nextjs.org) (App Router + TypeScript) implementation of the
Encore Videos marketing site. Ported from the Claude Design HTML/React prototype with
static prerendering, self-hosted Google Fonts, optimized images, and SEO metadata.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & deploy

```bash
npm run build    # static-prerendered production build
npm run start    # serve the production build
```

The page prerenders fully static, so it deploys to any Node host or static-friendly
platform (Vercel, Netlify, etc.). On Vercel: push the repo and import it — no extra config.

## Project structure

- `app/layout.tsx` — fonts (`next/font`), SEO metadata, no-flash theme script
- `app/page.tsx` — composes the page sections
- `app/globals.css` — design-system styles (light-first, blue accent, dark theme)
- `components/` — `Nav`, `Hero`, `Channels`, `Revenue`, `HowItWorks`, `About`,
  `Contact`, `BookCall`, `Footer`, plus `Reveal`, `useCountUp`, `Button`, `Icon`, `Logo`
- `lib/data.ts` — channel roster, steps, stats, and contact constants

## Editing content

- **Channels / avatars** — edit `CHANNELS` in `lib/data.ts`. Set a channel's `avatar`
  to an image URL or a `/public` path (e.g. `"/avatars/andreas.jpg"`) to drop in a real
  photo; otherwise a branded gradient + initials avatar is generated automatically.
- **Email / Calendly** — `EMAIL` and `CALENDLY` in `lib/data.ts`.
- **Theme** — light by default; the nav toggle persists the choice in `localStorage`.

## Notes

- The contact form validates and shows a success state but does not yet submit anywhere.
  Wire it to a form service (Formspree, Resend, a route handler, etc.) to deliver to
  `aron@encorevideos.com`.
