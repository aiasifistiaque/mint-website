import { LayoutDashboard, ListChecks, Workflow, type IconType } from '@/components/ui/icons';
import { ALL_FLOWS } from '@/content/flows';
import { APP } from '@/lib/config';
import type { Tone } from '@/lib/tones';

/** The site's navigation — header, mobile menu and footer read it from here. */

export type NavChild = { href: string; label: string; blurb: string; icon: IconType; color: Tone };
export type NavItem = { href: string; label: string; children?: NavChild[] };

export const NAV: NavItem[] = [
	{ href: '/backend', label: 'Backend' },
	{
		href: '/product',
		label: 'Admin panel',
		children: [
			{ href: '/product', label: 'Overview', blurb: 'How the admin panel and back office fit together.', icon: LayoutDashboard, color: 'violet' },
			{ href: '/admin-panel', label: 'Every feature', blurb: 'Tables, forms, bulk actions, history, roles, media — all of it.', icon: ListChecks, color: 'sky' },
			{ href: '/workflow/admin-panel', label: 'Build one, step by step', blurb: 'Models, pages, sidebar, dashboard and team.', icon: Workflow, color: 'emerald' },
		],
	},
	{ href: '/ai', label: 'AI' },
	{ href: '/workflow', label: 'Workflows', children: ALL_FLOWS },
	{ href: '/who-its-for', label: 'Who it’s for' },
	{ href: '/developers', label: 'Developers' },
];

export const FOOTER = [
	{
		title: 'Platform',
		links: [
			{ href: '/backend', label: 'Backend as a service' },
			{ href: '/product', label: 'Admin panel' },
			{ href: '/admin-panel', label: 'Panel features' },
			{ href: '/features', label: 'All features' },
			{ href: '/ai', label: 'Build with AI' },
			{ href: '/changelog', label: 'Changelog' },
		],
	},
	{
		title: 'Workflows',
		links: [
			{ href: '/workflow', label: 'The basics' },
			{ href: '/workflow/website', label: 'Websites' },
			{ href: '/workflow/api', label: 'APIs' },
			{ href: '/workflow/admin-panel', label: 'Admin panels' },
			{ href: '/workflow/models', label: 'Models' },
		],
	},
	{
		title: 'Build',
		links: [
			{ href: '/who-its-for', label: 'Who it’s for' },
			{ href: '/use-cases', label: 'Use cases' },
			{ href: '/developers', label: 'Developers' },
			{ href: '/security', label: 'Security' },
			{ href: APP.guides, label: 'Guides', external: true },
		],
	},
	{
		title: 'Company',
		links: [
			{ href: '/about', label: 'About' },
			{ href: '/waitlist', label: 'Waitlist' },
			{ href: '/privacy', label: 'Privacy' },
			{ href: APP.login, label: 'Log in', external: true },
			{ href: APP.dashboard, label: 'Dashboard', external: true },
		],
	},
];

export const TAGLINE = 'The backend for every business. Admin panel included.';
export const DESCRIPTION =
	'MINT is backend as a service with an advanced admin panel and back-office tools built in. Build backends, admin panels, websites and APIs from building blocks — or let AI build them — and edit your data visually.';
