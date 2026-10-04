import { APP } from '@/lib/config';

/** The site's navigation — header, mobile menu and footer read it from here. */

export const NAV = [
	{ href: '/backend', label: 'Backend' },
	{ href: '/product', label: 'Admin panel' },
	{ href: '/ai', label: 'AI' },
	{ href: '/workflow', label: 'Workflow' },
	{ href: '/who-its-for', label: 'Who it’s for' },
	{ href: '/developers', label: 'Developers' },
];

export const FOOTER = [
	{
		title: 'Platform',
		links: [
			{ href: '/backend', label: 'Backend as a service' },
			{ href: '/product', label: 'Admin panel & back office' },
			{ href: '/workflow', label: 'Workflow' },
			{ href: '/features', label: 'All features' },
			{ href: '/ai', label: 'Build with AI' },
			{ href: '/changelog', label: 'Changelog' },
		],
	},
	{
		title: 'Build',
		links: [
			{ href: '/who-its-for', label: 'Who it’s for' },
			{ href: '/use-cases', label: 'Use cases' },
			{ href: '/developers', label: 'Developers' },
			{ href: '/security', label: 'Teams & security' },
			{ href: APP.guides, label: 'Guides', external: true },
		],
	},
	{
		title: 'Company',
		links: [
			{ href: '/about', label: 'About' },
			{ href: '/waitlist', label: 'Join the waitlist' },
			{ href: '/privacy', label: 'Privacy' },
		],
	},
	{
		title: 'Account',
		links: [
			{ href: APP.login, label: 'Log in', external: true },
			{ href: APP.dashboard, label: 'Open dashboard', external: true },
		],
	},
];

export const TAGLINE = 'The backend for every business. Admin panel included.';
export const DESCRIPTION =
	'MINT is backend as a service with an advanced admin panel and back-office tools built in. Build backends, admin panels, websites and APIs from building blocks — or let AI build them — and edit your data visually.';
