import {
	Browser,
	Code,
	Database,
	LayoutDashboard,
	type IconType,
} from '@/components/ui/icons';
import type { Tone } from '@/lib/tones';

/**
 * The platform story (docs/CONTENT_PLAN.md): backend as a service with an
 * admin panel and back office built in. Home, /backend and /product read it.
 */

export const POSITIONING = {
	title: 'The backend for every business.',
	accent: 'Admin panel included.',
	lead: 'MINT is backend as a service with an advanced admin panel and back-office tools built in. Build backends, admin panels, websites and APIs from building blocks — or let AI build them for you — then edit your data visually.',
};

/** The four things people build on MINT. */
export type Product = { id: string; icon: IconType; color: Tone; title: string; body: string; points: string[]; href: string };

export const PRODUCTS: Product[] = [
	{
		id: 'backends',
		icon: Database,
		color: 'emerald',
		title: 'Backends',
		body: 'A real database for your models — relations, formulas, validation, private records — with auth and file storage.',
		points: ['Models & relations', 'Formulas', 'Auth & storage'],
		href: '/backend',
	},
	{
		id: 'apis',
		icon: Code,
		color: 'cyan',
		title: 'APIs',
		body: 'A REST API for every model, the moment you save it — paging, filters, search and customer sign-in included.',
		points: ['REST per model', 'Filters & search', 'Customer accounts'],
		href: '/developers',
	},
	{
		id: 'panels',
		icon: LayoutDashboard,
		color: 'violet',
		title: 'Admin panels & back office',
		body: 'The panel your team works in: tables, forms, dashboards, roles and history — for every model, automatically.',
		points: ['Tables & forms', 'Dashboards', 'Roles & history'],
		href: '/product',
	},
	{
		id: 'websites',
		icon: Browser,
		color: 'amber',
		title: 'Websites',
		body: 'Pages, per-page SEO and content blocks your team edits — rendered by your own front end, with cookie-free analytics.',
		points: ['Pages & SEO', 'Content blocks', 'Analytics'],
		href: '/developers#websites',
	},
];

/** The stack, top to bottom: what sits on what. */
export type Layer = { color: Tone; title: string; body: string; parts: string[] };

export const STACK: Layer[] = [
	{
		color: 'amber',
		title: 'Your apps, sites and team',
		body: 'Everything that uses your data',
		parts: ['Website', 'Mobile app', 'Your team', 'AI assistant'],
	},
	{
		color: 'violet',
		title: 'Admin panel & back office',
		body: 'Where your team works',
		parts: ['Tables', 'Forms', 'Dashboards', 'Roles', 'History', 'Notifications'],
	},
	{
		color: 'cyan',
		title: 'API & auth',
		body: 'How everything reaches the data',
		parts: ['REST per model', 'Filters & search', 'Customer sign-in', 'Project keys', 'MCP for AI'],
	},
	{
		color: 'emerald',
		title: 'Database & storage',
		body: 'Your models, done properly',
		parts: ['Models', 'Relations', 'Formulas', 'Validation', 'Private records', 'Media'],
	},
];

/** What building it yourself would take — and MINT ships. */
export const NOT_TO_BUILD = [
	'Database schema and migrations',
	'CRUD endpoints for every model',
	'Validation and relations',
	'Paging, filters, sorting and search',
	'Admin screens for every table',
	'Roles, permissions and project access',
	'Customer sign-up and sign-in',
	'Two-step sign-in and session management',
	'Audit history and undo',
	'File and image storage',
	'Dashboards and charts',
	'A CMS for your website',
];
