# MINT website — content plan (v3)

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

1. **Hero** — H1 + supporting line, waitlist form, product shot.
1b. **What is MINT** — in plain words: what it is, what it does, why it matters; then who it's for (six audiences) and a waitlist button. (Replaces the later Who it's for section.)
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

---

## 7. v3 — step-by-step workflows, admin panel features, new look

**The ask (2026-10-04):** Workflow becomes a dropdown — the basic workflow as it is, then *build a website*
(connect Claude or ChatGPT; design and backend get built for you; analytics, SEO and security included, so a
developer has no headache), the same for *APIs* and *admin panels*, and *how models are built and changed*.
A page with every admin panel feature. Step by step, so people learn how it works. Dark mode black like
thinkcrypt.dev; uppercase headings; slimmer body text and nav/footer items; a better logo.

### Navigation

Header: **Backend · Admin panel ▾ · AI · Workflows ▾ · Who it’s for · Developers**. Dropdowns open on hover and
on click/keyboard; the mobile menu shows them as groups. Footer gets a **Workflows** column.

| Menu | Item | Route |
|---|---|---|
| Admin panel ▾ | Overview — how the back office fits together | `/product` |
| | Every feature — the full list, grouped | `/admin-panel` **new** |
| Workflows ▾ | The basic workflow — six steps, idea to running business | `/workflow` |
| | Build a website — AI builds the design and backend; SEO, analytics, security in | `/workflow/website` **new** |
| | Build an API — models to a public REST API with customer sign-in | `/workflow/api` **new** |
| | Build an admin panel — tables, forms, dashboard, roles | `/workflow/admin-panel` **new** |
| | Build & change models — the wizard, AI features, and what each change does | `/workflow/models` **new** |

### Every workflow page — one template (`components/flow/FlowPage`)

1. Hero: what you end with + "time it takes" + who does each part (you · your AI · MINT).
2. **Step rail** — numbered steps on a vertical line; each with title, what to do, what you get, a *where* tag
   (e.g. *Build → Connect AI*), and a drawing.
3. **Included — no headache**: what MINT handles for you (security, SEO, analytics…).
4. Other workflows (cards) + CTA.

Content in `src/content/flows.ts`; facts from the app's user guides (websites, analytics, connect-ai,
public-api, customers, models, pages, sidebar, dashboard, organization, records).

**Website** (`/workflow/website`): 1 Start a website project (kit: Pages, SEO, Contents + Site setup) →
2 Connect Claude or ChatGPT (key with *Can build*; connector URL / Claude Code command) → 3 Describe the site
(it shows the pages and lists it plans first) → 4 Design and backend get built (site code in your AI editor;
site setup, pages + SEO + blocks, images to Media, lists become models with a public API, tracker on every page)
→ 5 Deploy and add your domains (Check the site) → 6 Edit from the panel (live within a minute, no redeploy).
Included: per-page SEO, sitemap + robots.txt, Search Console/Bing verification, redirects; cookie-free analytics,
pixels and server-side tracking; security headers, domain-locked analytics, read-only site API, rate limits.

**API** (`/workflow/api`): model → make it public (actions) → choose who may call it → customer sign-in →
call it (paging, filters, search, fields) → API reference and tester. Included: validation messages, rate limits,
private records never served, formulas computed on the server, docs that match the switches.

**Admin panel** (`/workflow/admin-panel`): models give pages → shape pages (draft → publish) → sidebar →
dashboard → team and roles → run it. Included: history and undo, two-step sign-in, project isolation, versions.

**Models** (`/workflow/models`): describe (8-step wizard, or AI builds a whole feature) → field kinds → links,
formulas, sections, record codes → who sees records → create (live at once). Then **"When it needs to change"** —
a table of change → what happens (add/remove field, change kind, unique, formula, title, page layout, disable,
delete), and the notice → draft → preview → publish loop.

### `/admin-panel` — every feature

Hero with the panel drawing; feature groups with tone each: Tables · Forms · Record pages · Many rows at once ·
History & safety · Dashboards & sidebar · Team & access · Sign-in & devices · Media · Data kinds. Then the
"you'd otherwise build" list and a link to the admin-panel workflow.

### Design

- **Dark mode = thinkcrypt.dev's neutral black**: background `#0D0D0D`, cards `#1B1B1B`, text `#FAF8F1`
  (warm off-white), deepest bands `#060508`. No blue tint anywhere in dark surfaces. Light mode's ink bands use
  the same black.
- **Headings uppercase** (h1–h3), extra-light, slightly open tracking.
- **Slimmer**: body text weight 250 (Outfit is variable); header/footer items weight 300.
- **Logo**: a new mark — an "M" drawn as one continuous stroke over three stacked layers (the backend stack),
  on the brand gradient; wordmark **MINT** in light, widely spaced capitals. Same mark as the favicon.

## 8. `/compare` — MINT + your AI vs AI coding alone

**The ask (2026-10-04):** a page on why MINT + AI beats building the whole project with Claude Code, Codex or
Cursor: fewer tokens, faster, live deployment, nothing breaks, security patches handled, everything under the hood
— a side-by-side comparison.

Header: **AI** becomes a dropdown — Build with AI (`/ai`), MINT + AI vs AI coding (`/compare`), Build a website
with AI (`/workflow/website`).

1. Hero: "Your AI writes a plan, not a codebase." — what changes when the same assistant builds on MINT.
2. **What the AI has to produce** — a file tree of a hand-built backend vs the one short plan MINT needs
   (illustrative, labelled so).
3. **Six reasons** — fewer tokens · faster · live at once · nothing breaks (plans checked, all or nothing) ·
   security kept up (one platform, updated for every project) · everything under the hood.
4. **Side by side** — a row per concern (what the AI writes, tokens, time to live, hosting, mistakes, security,
   auth, admin panel, API docs, SEO/analytics, changing later, who can change it, context as it grows).
5. **Under the hood** — the list from `NOT_TO_BUILD`.
6. **Use both** — your AI still writes the front end; MINT is everything behind it.

Keep it honest: no invented benchmarks; illustrations say they are illustrations.

Also (same day): no Log in anywhere (access is by waitlist); no links into the user guides until they're public;
neutral "glyph" icon tiles instead of gradient ones; WhatsApp + back-to-top buttons on every page.
