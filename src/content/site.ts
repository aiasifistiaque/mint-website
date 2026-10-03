import { APP } from '@/lib/config';

/** The site's navigation — header, mobile menu and footer read it from here. */

export const NAV = [
	{ href: '/workflow', label: 'Workflow' },
	{ href: '/product', label: 'Product' },
	{ href: '/who-its-for', label: 'Who it’s for' },
	{ href: '/ai', label: 'AI' },
	{ href: '/developers', label: 'Developers' },
	{ href: '/use-cases', label: 'Use cases' },
];

export const FOOTER = [
	{
		title: 'Product',
		links: [
			{ href: '/workflow', label: 'Workflow' },
			{ href: '/product', label: 'Product tour' },
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

export const TAGLINE = 'Describe your business. Get the app that runs it.';
export const DESCRIPTION =
	'MINT turns the things your business keeps track of into a ready app — tables, forms, dashboards and an API — for your whole team. No code, nothing to deploy.';
