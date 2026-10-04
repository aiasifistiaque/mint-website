# MINT website — content plan (v2)

## 1. Positioning

**MINT is backend as a service with an advanced admin panel and back-office tools built in — for every business and every developer.**

One sentence for the hero:
> The backend for every business. Admin panel included.

Supporting line:
> Build backends, admin panels, websites and APIs from building blocks — or let AI build them for you. Then edit your data visually, with a back office your whole team can use.

### Message pillars

| Pillar | What we say | Proof on the page |
|---|---|---|
| **Backend as a service** | A real database, a REST API, auth and file storage — live the moment you save a model. No servers, no migrations. | Stack diagram, API code, model builder drawing |
| **Two ways to build** | Use building blocks (model builder, page builder, sidebar, dashboard) — or describe it and let your AI build it over MCP. Same result, same checks. | Blocks vs AI split visual |
| **Edit everything visually** | Models in a visual builder; records in tables and forms — bulk edits, import/export, history and undo. No SQL, no admin to code. | Database / data-editor drawing |
| **Back office for every business** | Dashboards, roles, per-project access, notifications, media — the internal tools every business needs. | Panel, dashboard, team drawings |
| **For developers too** | Skip auth, CRUD, admin screens and a CMS; ship the front end. | Developers page, data-flow diagram |

### What you build (four products, one platform)

1. **Backends** — database models, relations, formulas, validation, auth, storage
2. **APIs** — REST per model, filters, search, customer sign-in
3. **Admin panels & back office** — tables, forms, dashboards, roles, history
4. **Websites** — pages, SEO, content blocks, cookie-free analytics

### Audiences

- **Businesses** (owners, ops teams, clinics, nonprofits): the back office, without developers.
- **Developers & agencies**: the backend and admin panel, without building them.
- Everyone: the AI builds and answers questions on an ordinary day.

## 2. Sitemap & navigation

Header: **Backend · Admin panel · AI · Workflow · Who it’s for · Developers** + theme toggle, Log in, Join the waitlist.
Footer adds Features, Use cases, Teams & security, Changelog, About, Privacy, Guides.

| Route | Title | Change |
|---|---|---|
| `/` | Home | Rewritten around the BaaS positioning (below) |
| `/backend` | **Backend as a service** | **New** |
| `/product` | Admin panel & back office | Retitled + re-angled (was “Product tour”) |
| `/workflow` | Workflow | Opens with the two ways to build |
| `/ai` | Build with AI | Adds “AI builds the backend” framing |
| `/developers` | Developers | Leads with BaaS for developers |
| `/features` | Features | New first group: **Backend** |
| `/who-its-for`, `/use-cases`, `/security`, `/changelog`, `/about`, `/waitlist`, `/privacy` | — | Copy touch-ups; changelog entry for v2 |

## 3. Home — section by section

1. **Hero** — H1 + supporting line, waitlist form, “Already have access? Log in”, product shot.
2. **What you build** — four product cards (Backends, APIs, Admin panels, Websites), each with a small visual.
3. **Two ways to build** — Building blocks ↔ AI builds it, converging on **one visual editor** (data-editor drawing).
4. **Backend as a service** — the stack diagram (Database → API & auth → Admin panel & back office → your apps, sites and team) + what’s included.
5. **The workflow** — six-step pipeline + step-by-step screens (existing).
6. **Who it’s for** — businesses and developers (existing personas).
7. **A day with MINT** — the AI in the everyday (existing timeline).
8. **One source of truth** — data-flow diagram (existing).
9. **Why MINT** — Spreadsheet vs Build your own backend vs MINT.
10. **Features**, **FAQ** (adds “Is MINT a backend as a service?”, “Can developers use it?”), closing **CTA**.

## 4. `/backend` — section by section

1. Hero: “Backend as a service. *With the admin panel your team actually uses.*” + stack diagram.
2. **The database** — models, field kinds, relations, formulas, validation, private records (model-builder drawing).
3. **Edit it visually** — tables, forms, bulk edit, import/export, history & undo (data-editor drawing).
4. **API & auth, automatic** — REST per model, filters, customer accounts (code).
5. **Admin panel & back-office tools** — dashboards, roles, sidebar, notifications, media.
6. **Build with blocks — or let AI build it.**
7. **What you don’t have to build** — checklist vs building your own.
8. CTA.

## 5. Design changes

- **Dark mode**: follows the system by default; a toggle in the header (and mobile menu) switches light/dark and remembers the choice. No flash on load. Every surface, tone and drawing gets a dark variant.
- **Type**: Outfit for headlines (extra-light) and body (light) — slim and geometric; labels JetBrains Mono. Header and footer items in small spaced caps.
- Keep the tone colours, Phosphor duotone icons, and the modernist, slim style.

## 6. Keep it true

Claims stay inside what the product does today (see the app’s user guides). New product changes update `src/content/*` and the drawings — see README.
