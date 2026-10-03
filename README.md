# mint-webpage

The marketing website for MINT — a multi-page pitch for the product, with a
**Join the waitlist** form and links into the app (Log in → dashboard).

Next.js 16 (App Router, all pages static) · Tailwind CSS v4 · Plus Jakarta Sans,
Inter and JetBrains Mono · lucide-react.

## Run it

```bash
npm install
cp .env.example .env.local   # point it at your backend and app
npm run dev                  # http://localhost:3100
```

| Variable | What it's for | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, Open Graph | `https://mintapp.shop` |
| `NEXT_PUBLIC_APP_URL` | The MINT app (tenant panel): Log in, Create account, Dashboard, Guides | `https://app.mintapp.shop` |
| `NEXT_PUBLIC_API_URL` | The backend root; the waitlist posts to `<api>/public/waitlist` | `https://api.mintapp.shop` |
| `NEXT_PUBLIC_SIGNUPS_OPEN` | `true` adds "Create account" next to "Join the waitlist" | `false` |

## Pages

| Route | What it is |
|---|---|
| `/` | The pitch: hero, workflow pipeline + step-by-step tabs, who it's for, a day with MINT + AI, AI build flow, data flow, comparison, features, FAQ |
| `/workflow` | The six steps in depth, each with its screen, and the after-launch loop |
| `/product` | Product tour: how it fits together, records, dashboard, data flow, under the hood |
| `/who-its-for` | Six audiences — today vs with MINT, what they build, what they ask their AI — and the day timeline |
| `/features` | Every feature, grouped, each linking to its user guide in the app |
| `/ai` | Connecting an AI assistant (MCP), project keys, safety |
| `/developers` | Public API, filters, customer sign-in widget, website content API |
| `/use-cases` | Eight recipes: the models and what goes live |
| `/security` | Organizations, roles, project access, passkeys, history |
| `/changelog` | What's new, newest first |
| `/about`, `/waitlist`, `/privacy` | — |

## The waitlist

`components/waitlist/WaitlistForm.tsx` posts to the backend's
`POST /public/waitlist` (backend `controllers/waitlist/joinWaitlist.controller.ts`):
one entry per email (signing up again fills in blanks), a hidden honeypot field,
10 sign-ups per IP per 15 minutes. Entries land in the super-admin panel's
**Waitlist** table (`/waitlist`; seed its permission + sidebar item with
`node backend/scripts/seedWaitlist.js`).

## Keep the site in step with the product

The site describes the real product, so **when the product changes, change the
site in the same piece of work**:

- a new or changed feature → `src/content/features.ts` (and the guide link)
- anything people would notice → a new entry at the top of `src/content/changelog.ts`
- a workflow step or screen changes → `src/content/workflow.ts` and its drawing in
  `src/components/mock/mocks.tsx`
- new kinds of users or uses → `src/content/personas.ts`, `src/content/useCases.ts`
- AI / API behaviour → `/ai`, `/developers` (snippets come from the app's user guides)

Content lives in `src/content/*`; pages only lay it out. Colours come from
`src/lib/tones.ts` (one tone per step / group) and the tokens in `src/app/globals.css`.

## Deploy

Static Next.js — import the repo into Vercel and set the variables above.
