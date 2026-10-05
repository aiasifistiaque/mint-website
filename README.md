# mint-webpage

The marketing website for MINT — backend as a service with the admin panel and
back office built in — a multi-page pitch for the product, with a
**Join the waitlist** form. There is no Log in while access is by waitlist, and no links into the
app's user guides until they're public. A WhatsApp chat button (`lib/contact.ts`) and back-to-top
button sit on every page.

Next.js 16 (App Router, all pages static) · Tailwind CSS v4 · Outfit (uppercase
headings, light body) and JetBrains Mono · Phosphor icons · light and dark mode
(dark is a neutral black, `#0D0D0D`). Content plan: `docs/CONTENT_PLAN.md`.

## Run it

```bash
npm install
cp .env.example .env.local   # point it at your backend and app
npm run dev                  # http://localhost:3100
```

| Variable | What it's for | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, Open Graph | `https://mintapp.shop` |
| `NEXT_PUBLIC_APP_URL` | The MINT app (tenant panel) — used for Create account when signups open | `https://app.mintapp.shop` |
| `NEXT_PUBLIC_API_URL` | The backend root; the waitlist posts to `<api>/public/waitlist` | `https://api.mintapp.shop` |
| `NEXT_PUBLIC_SIGNUPS_OPEN` | `true` adds "Create account" next to "Join the waitlist" | `false` |

## Pages

| Route | What it is |
|---|---|
| `/` | The pitch: hero, what you build (backends, APIs, admin panels, websites), start from a template or from scratch (`content/templates.ts`), blocks or AI, the BaaS stack, workflow pipeline + step-by-step tabs, who it's for, a day with MINT + AI, AI build flow, data flow, comparison, features, FAQ |
| `/backend` | Backend as a service: the stack, database, visual data editing, API & auth, back-office tools, vs building your own |
| `/workflow` | The basic workflow: six steps in depth, each with its screen, and the after-launch loop |
| `/workflow/website`, `/workflow/api`, `/workflow/admin-panel`, `/workflow/models` | Step-by-step workflows (`content/flows.ts`, laid out by `components/flow/FlowPage`, drawings in `components/flow/arts.tsx`) — the header's Workflows menu |
| `/product` | Admin panel & back office: how it fits together, records, dashboard, data flow, under the hood |
| `/admin-panel` | Every admin panel feature, grouped (`content/adminPanel.ts`) |
| `/workflow/analyze` | Analyze your data with any AI over MCP (read-only keys) |
| `/compare` | MINT + your AI vs building it all with an AI coding tool, side by side (`content/compare.ts`) |
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
- a workflow step or screen changes → `src/content/workflow.ts` / `src/content/flows.ts` and its drawing in
  `src/components/mock/mocks.tsx` / `src/components/flow/arts.tsx`
- an admin panel feature → `src/content/adminPanel.ts`
- new kinds of users or uses → `src/content/personas.ts`, `src/content/useCases.ts`
- project templates added or renamed → `src/content/templates.ts`
- AI / API behaviour → `/ai`, `/developers` (snippets come from the app's user guides)

Content lives in `src/content/*`; pages only lay it out. Colours come from
`src/lib/tones.ts` (one tone per step / group) and the tokens in `src/app/globals.css`
(light in `:root`, dark in `[data-theme='dark']`; use `bg-panel`, not `bg-white`, and give
any hard-coded colour a `dark:` variant). Icons come from `src/components/ui/icons.tsx`; put them on a neutral `glyph` tile (`IconTile`, `NumberTile`) in one
thin colour — no gradient tiles.

## SEO and share images

Every page's metadata comes from `pageMeta()` (`lib/seo.ts`: title, description, canonical, Open Graph,
Twitter). Share images are drawn at build time by `lib/og.tsx` from each route's `opengraph-image.tsx`
(the root one covers pages without their own). The layout adds JSON-LD (Organization + SoftwareApplication).

## Deploy

Static Next.js — import the repo into Vercel and set the variables above.
