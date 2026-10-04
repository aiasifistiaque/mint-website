/**
 * The workflow — the spine of the site. Home shows it as tabs, /workflow as
 * one section per step. Each step names the drawing that shows it
 * (components/mock) and the user guide that covers it in the app.
 *
 * Keep it true to the product: when a step changes in the app, change it here.
 */

import type { Tone } from '@/lib/tones';

export type MockKey = 'project' | 'model' | 'pages' | 'team' | 'dashboard' | 'live';

export type Step = {
	id: string;
	n: string;
	title: string;
	/** One line, for the tabs. */
	short: string;
	body: string;
	points: string[];
	/** How long the step takes, roughly. */
	time: string;
	guide: string;
	mock: MockKey;
	color: Tone;
};

export const STEPS: Step[] = [
	{
		id: 'project',
		n: '01',
		title: 'Start a project',
		short: 'An app or a website, with an address of its own.',
		body: 'A project is a workspace: its own data, pages, sidebar, dashboard and API. Make an app for the work your team does every day, or a website for the people you serve — as many of each as you need.',
		points: [
			'A guided set-up names it, gives it an address and picks where its media lives',
			'Apps for operations, websites with pages, SEO and content blocks ready',
			'Each project is separate — people only see the ones they’re given',
		],
		time: '1 minute',
		guide: 'projects',
		mock: 'project',
		color: 'emerald',
	},
	{
		id: 'model',
		n: '02',
		title: 'Describe your data',
		short: 'Customers, rooms, orders — say what you keep track of.',
		body: 'Name a thing your business keeps track of and list what you know about it. Every model you save becomes a real table, a form, filters and a page per record — immediately, with nothing to deploy.',
		points: [
			'Text, numbers, dates, options, images, files, colours, passwords and more',
			'Link models together — a booking points at its guest and its room',
			'Formulas that calculate themselves: total = nights × room.rate',
			'Or describe it in a sentence and let AI draft the fields',
		],
		time: '5 minutes',
		guide: 'models',
		mock: 'model',
		color: 'sky',
	},
	{
		id: 'pages',
		n: '03',
		title: 'Shape every page',
		short: 'Tables, forms and detail pages — the way your team works.',
		body: 'Choose the columns people see, the filters they reach for, how forms are laid out and what a record’s page shows. Work in a draft, check the preview, then publish — your team never sees a half-finished change.',
		points: [
			'Form sections, and fields that only appear when they apply',
			'Detail pages with tabs for everything linked to a record',
			'Filters, bulk edits, import and export on every table',
			'Drafts and publishing, with every version kept',
		],
		time: '10 minutes',
		guide: 'pages',
		mock: 'pages',
		color: 'violet',
	},
	{
		id: 'team',
		n: '04',
		title: 'Bring in your team',
		short: 'Invite people, give them a role and the projects they need.',
		body: 'Invite people by email. Their role decides what they can do — view, add, edit, delete, build — and their projects decide where. Narrowing someone’s access is as simple as giving them fewer projects.',
		points: [
			'Plain-language roles with standard permissions',
			'Everyone, or just the projects they work on',
			'Two-step sign-in with passkeys or email codes',
			'Belong to several organizations and switch in a click',
		],
		time: '2 minutes',
		guide: 'organization',
		mock: 'team',
		color: 'amber',
	},
	{
		id: 'run',
		n: '05',
		title: 'Run the business',
		short: 'The day-to-day: records, dashboards, history, alerts.',
		body: 'This is where your team lives. Search and filter, edit many rows at once, see the numbers that matter on the home page, and know who changed what — with an undo when someone gets it wrong.',
		points: [
			'A dashboard of numbers, charts and recent records you arrange',
			'Full history on every record: who, what, when — and undo',
			'Notifications when something comes in from your site',
			'Archive instead of delete; merge duplicates safely',
		],
		time: 'Every day',
		guide: 'records',
		mock: 'dashboard',
		color: 'rose',
	},
	{
		id: 'live',
		n: '06',
		title: 'Go live',
		short: 'Open your data to your site and app, with customer sign-in.',
		body: 'Switch on the public API for any model and read it from your website, your mobile app or a script. Let customers create accounts with a drop-in widget and see only their own records. Count visits without cookies.',
		points: [
			'Public API per model — list, read, create, update, delete — you choose',
			'Paging, sorting, search and filters, with a live tester',
			'Customer accounts with a ready widget or your own form',
			'Cookie-free analytics for your website',
		],
		time: 'When you’re ready',
		guide: 'public-api',
		mock: 'live',
		color: 'cyan',
	},
];
