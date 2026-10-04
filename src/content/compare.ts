import { Coins, Layers, Rocket, ShieldCheck, Timer, Wrench, type IconType } from '@/components/ui/icons';
import type { Tone } from '@/lib/tones';

/**
 * MINT + your AI vs building the whole project with an AI coding tool
 * (docs/CONTENT_PLAN.md §8) — the /compare page reads this. Keep it honest:
 * no invented benchmarks; anything illustrative says so on the page.
 */

export const REASONS: { icon: IconType; color: Tone; title: string; body: string }[] = [
	{
		icon: Coins,
		color: 'emerald',
		title: 'Fewer tokens',
		body: 'The AI sends a short plan — models, fields, links — instead of writing, reading back and fixing thousands of lines. Its context stays small: it looks at your models, not a whole codebase.',
	},
	{
		icon: Timer,
		color: 'sky',
		title: 'Faster',
		body: 'No scaffolding, no boilerplate, no wiring up auth or an admin. The time goes on your business, not on the plumbing every project needs.',
	},
	{
		icon: Rocket,
		color: 'violet',
		title: 'Live at once',
		body: 'What the AI builds is live the moment it’s built — table, form, page, API. No build step, no hosting to set up, no deploy.',
	},
	{
		icon: ShieldCheck,
		color: 'amber',
		title: 'Nothing breaks',
		body: 'Every plan is checked exactly as the build would run it, and built all or nothing. An invalid plan builds nothing — there’s no half-written migration to clean up.',
	},
	{
		icon: Wrench,
		color: 'rose',
		title: 'Security kept up',
		body: 'Your backend runs on one platform we maintain. Fixes and updates reach every project — you don’t chase dependencies or redeploy to get them.',
	},
	{
		icon: Layers,
		color: 'cyan',
		title: 'Everything under the hood',
		body: 'Auth, roles, two-step sign-in, validation, rate limits, history, media, SEO and analytics are already there — on every project, from day one.',
	},
];

export type CompareRow = { topic: string; alone: string; mint: string };

export const ROWS: CompareRow[] = [
	{
		topic: 'What the AI writes',
		alone: 'Every file: schema, migrations, endpoints, validation, auth, admin screens, docs, config.',
		mint: 'A plan: the models, their fields and links. MINT builds the rest.',
	},
	{
		topic: 'Tokens',
		alone: 'Spent writing code, reading it back, and fixing what fails — again on every change.',
		mint: 'Spent on your business: a short plan you check before anything is built.',
	},
	{
		topic: 'As the project grows',
		alone: 'More code to read for every change; the context — and the bill — grow with it.',
		mint: 'The AI reads your models through MINT’s tools; the context stays small.',
	},
	{
		topic: 'Time to live',
		alone: 'Write, review, test, set up hosting, deploy.',
		mint: 'Live when it’s built. No deploy.',
	},
	{
		topic: 'When the AI gets it wrong',
		alone: 'A failing build, a bad migration or a bug in production — found later.',
		mint: 'The plan is checked first and built all or nothing; invalid plans build nothing.',
	},
	{
		topic: 'Security & patches',
		alone: 'Each project carries its own auth code and dependencies to keep patched.',
		mint: 'One platform, maintained by us; updates reach every project without a redeploy.',
	},
	{
		topic: 'Sign-in, roles, two-step',
		alone: 'Written by the AI, reviewed by you — the riskiest code in the project.',
		mint: 'Built in: roles, project access, passkeys, email codes, sessions, devices.',
	},
	{
		topic: 'Admin panel & back office',
		alone: 'A second app to write and maintain.',
		mint: 'Every model gets tables, forms, record pages, bulk actions, history and undo.',
	},
	{
		topic: 'API & docs',
		alone: 'Endpoints written, then documented by hand.',
		mint: 'REST per model with paging, filters, search — and a live reference that always matches.',
	},
	{
		topic: 'SEO & analytics',
		alone: 'Meta tags, sitemap, robots.txt, tracking and consent — wired up by hand.',
		mint: 'Per-page SEO, sitemap, robots.txt, cookie-free analytics and pixels in Site setup.',
	},
	{
		topic: 'Changing it later',
		alone: 'The AI re-reads the code, edits files; you review and redeploy.',
		mint: 'Change the model or ask the AI — versioned first, live at once.',
	},
	{
		topic: 'Who can change it',
		alone: 'Developers.',
		mint: 'Anyone with the Build permission — in the panel, with no code.',
	},
];

/** A hand-built backend for a small booking system — illustrative. */
export const FILE_TREE = [
	'prisma/schema.prisma',
	'prisma/migrations/…',
	'src/routes/bookings.ts',
	'src/routes/guests.ts',
	'src/routes/rooms.ts',
	'src/validation/*.ts',
	'src/auth/session.ts',
	'src/auth/passwords.ts',
	'src/auth/two-factor.ts',
	'src/auth/roles.ts',
	'src/middleware/rate-limit.ts',
	'src/audit/history.ts',
	'src/uploads/storage.ts',
	'admin/pages/bookings/*.tsx',
	'admin/pages/guests/*.tsx',
	'admin/pages/rooms/*.tsx',
	'admin/components/Table.tsx',
	'admin/components/Form.tsx',
	'admin/components/Filters.tsx',
	'docs/openapi.yaml',
	'tests/**/*.test.ts',
	'Dockerfile · CI · hosting',
];

/** The plan MINT needs for the same thing — what the AI sends. */
export const PLAN = `Guest    name, email, phone
Room     name, rate, photos
Booking  guest → Guest
         room  → Room
         nights, status
         total = nights × room.rate`;
