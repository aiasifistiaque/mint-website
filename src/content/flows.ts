import {
	Boxes,
	ChartLine,
	Plug,
	Code,
	Database,
	Eye,
	Globe,
	History,
	KeyRound,
	LayoutDashboard,
	Lock,
	Search,
	ShieldCheck,
	Sigma,
	Users,
	Webhook,
	Workflow,
	type IconType,
} from '@/components/ui/icons';
import type { Tone } from '@/lib/tones';

/**
 * The step-by-step workflows under the header's Workflows menu
 * (docs/CONTENT_PLAN.md §7). /workflow is the basic workflow (content/workflow.ts);
 * each flow here is a page at /workflow/<id>, laid out by components/flow/FlowPage.
 *
 * Every step comes from the app's user guides — when the product changes,
 * change the step (and its drawing in components/flow/arts.tsx).
 */

/** Who does a step: you in the panel, your AI assistant, or MINT on its own. */
export type Who = 'you' | 'ai' | 'mint';

export type ArtKey =
	| 'project'
	| 'connect'
	| 'plan'
	| 'built'
	| 'deploy'
	| 'edit-live'
	| 'model'
	| 'public'
	| 'access'
	| 'signin'
	| 'call'
	| 'reference'
	| 'pages'
	| 'sidebar'
	| 'dashboard'
	| 'team'
	| 'run'
	| 'wizard'
	| 'fields'
	| 'links'
	| 'privacy'
	| 'create'
	| 'read-key'
	| 'ask'
	| 'scope'
	| 'webhooks';

export type FlowStep = {
	title: string;
	/** Where it happens in the app. */
	where?: string;
	who: Who[];
	body: string;
	points: string[];
	art: ArtKey;
	/** User guide slug in the app — not linked until the user docs are public. */
	guide?: string;
};

export type Included = { icon: IconType; title: string; items: string[] };

export type Flow = {
	id: string;
	href: string;
	/** Header menu entry. */
	menu: { label: string; blurb: string };
	icon: IconType;
	color: Tone;
	eyebrow: string;
	title: string;
	accent: string;
	lead: string;
	/** What you have at the end. */
	result: string;
	time: string;
	steps: FlowStep[];
	includedTitle: string;
	includedLead: string;
	included: Included[];
};

/** The basic workflow, as a menu entry (its page is /workflow). */
export const BASIC_FLOW = {
	href: '/workflow',
	icon: Workflow,
	color: 'violet' as Tone,
	menu: { label: 'The basic workflow', blurb: 'Six steps from an idea to a running business.' },
};

export const FLOWS: Flow[] = [
	/* ---------------------------------------------------------- website */
	{
		id: 'website',
		href: '/workflow/website',
		menu: { label: 'Build a website', blurb: 'Your AI builds the design and the backend. SEO and analytics included.' },
		icon: Globe,
		color: 'amber',
		eyebrow: 'Workflow · Website',
		title: 'Ask for a website.',
		accent: 'Get the design, the backend and the analytics.',
		lead: 'Connect Claude or ChatGPT to a website project and describe your site. Your AI writes the design; MINT becomes its backend — pages, SEO, images, lists and analytics, all editable in the panel. No headache over security, SEO or tracking.',
		result: 'A live site your team edits from the panel — no code change, no redeploy.',
		time: 'An afternoon',
		steps: [
			{
				title: 'Start a website project',
				where: 'Projects → New → Website',
				who: ['you'],
				body: 'Choose Website when you create the project — from scratch, or from a template (a blog, a business site, a portfolio, an online shop) that arrives with its pages, lists and sample content. Either way it comes with the website kit — Pages, SEO and Contents — and a Site setup screen for everything site-wide.',
				points: ['From a template or from scratch — a template’s pages and lists are yours to change', 'Pages, SEO and content-block models, ready and public (read-only)', 'Site setup: name, logo, favicon, colours, font, contact and social links', 'A home page that lists what’s still missing — each with a link to where it’s set'],
				art: 'project',
				guide: 'websites',
			},
			{
				title: 'Connect Claude or ChatGPT',
				where: 'Build → Connect AI',
				who: ['you'],
				body: 'Make a project key with “Can build” on, then add MINT to your assistant. The Connect AI page shows each set-up with your key already filled in.',
				points: ['Claude (web or desktop): add a custom connector with the URL', 'ChatGPT: developer mode, then a connector with the URL', 'Claude Code: one command in your terminal — Cursor: one entry in its MCP settings', 'A key is for one project, acts as you, and can be revoked at once'],
				art: 'connect',
				guide: 'connect-ai',
			},
			{
				title: 'Describe your site',
				where: 'In your AI chat',
				who: ['you', 'ai'],
				body: 'Talk about the business, not the code: “a two-page site for my bakery — a home page, an about page and a menu of our products.” The AI shows you the pages and lists it plans before it writes anything.',
				points: ['Pages, their SEO and their content blocks, in order', 'Lists — products, services, team, testimonials — as models of their own', 'Nothing is saved if any part of the plan is invalid'],
				art: 'plan',
				guide: 'websites#ai-site',
			},
			{
				title: 'The design and the backend get built',
				where: 'Your AI editor + your project',
				who: ['ai', 'mint'],
				body: 'While your AI writes the site’s code and design, it puts everything the site shows into your project instead of into the code. The code reads it back through the site API.',
				points: [
					'Site setup filled in: name, logo, favicon, colours, font, contact, default SEO',
					'Every page with its SEO and content blocks; images in your Media library',
					'Lists become linked models with their public API on',
					'The analytics tracker on every page',
				],
				art: 'built',
				guide: 'websites#ai-site',
			},
			{
				title: 'Deploy and add your domains',
				where: 'Site setup → Domains · Check the site',
				who: ['you'],
				body: 'Deploy the site wherever you host it, list its domains, and run Check the site: it opens your live home page and confirms every tag is really there.',
				points: ['Analytics counts only your domains, so nobody can send visits in your name', 'Indexing switch: off while you build, on when you launch', 'sitemap.xml and robots.txt served for you, wired up by the AI'],
				art: 'deploy',
				guide: 'websites#site-domains',
			},
			{
				title: 'Edit it from the panel',
				where: 'Website → Pages, Contents · Site setup',
				who: ['you'],
				body: 'Change a heading in Contents, a price in Products or the favicon in Site setup — the live site shows it within a minute. Ask the AI to change the site later and it updates the same pages and blocks instead of adding copies.',
				points: ['Draft, Published and Archived pages — take one down without deleting it', 'The menu comes from published pages, with dropdowns from parent pages', 'Blogs, products, members’ areas: one more model each'],
				art: 'edit-live',
				guide: 'websites#build-a-page',
			},
		],
		includedTitle: 'Included. No headache.',
		includedLead: 'The parts of a website developers usually lose a week to are settings in Site setup — and a site built with AI wires them up for you.',
		included: [
			{
				icon: Search,
				title: 'SEO',
				items: ['Title, description, share image and canonical URL per page', 'Default SEO for pages without their own', 'sitemap.xml and robots.txt, generated', 'Google Search Console and Bing verification', '301 and 302 redirects'],
			},
			{
				icon: ChartLine,
				title: 'Analytics',
				items: ['Page views, visitors, visits, bounce rate', 'Top pages, referrers, devices, countries, clicks and events', 'No cookies; visitors with Do Not Track aren’t counted', 'Google, Meta, TikTok, LinkedIn and more — paste an ID', 'Server-side events for Meta and Google'],
			},
			{
				icon: ShieldCheck,
				title: 'Security',
				items: ['Response headers like X-Frame-Options and Content-Security-Policy', 'A read-only site API — no key in your front end', 'Analytics locked to your domains', 'Rate limits on every public call', 'Your team on roles, passkeys and two-step sign-in'],
			},
		],
	},

	/* -------------------------------------------------------------- api */
	{
		id: 'api',
		href: '/workflow/api',
		menu: { label: 'Build an API', blurb: 'From a model to a public REST API with customer sign-in.' },
		icon: Webhook,
		color: 'cyan',
		eyebrow: 'Workflow · API',
		title: 'A REST API,',
		accent: 'the moment you save a model.',
		lead: 'Start an API project, describe your data, switch on the actions you want, choose who may call them. Paging, filters, search, customer accounts, webhooks and a live reference come with it — there is no server to write or run.',
		result: 'A documented REST API for your site, app or script — with customer sign-in.',
		time: 'Under an hour',
		steps: [
			{
				title: 'Start an API project',
				where: 'Projects → New → API',
				who: ['you'],
				body: 'Choose API when you create the project. Start from a template — a booking API, a products & orders API — and its models, endpoints, customer sign-in and webhooks arrive set up; or start from scratch and add your own.',
				points: ['A template is a head start: change every model and endpoint in it', 'Or a blank API project, built your way', 'Its sidebar leads with Public API, Webhooks and Customers'],
				art: 'project',
				guide: 'projects',
			},
			{
				title: 'Model your data',
				where: 'Build → Models',
				who: ['you', 'ai'],
				body: 'Make the models your API serves — products, bookings, posts — in the model builder, or ask your AI to build them. Validation, links and formulas are part of the model, so the API enforces them.',
				points: ['Required fields, allowed values, min/max, unique', 'Links between models; formulas worked out on the server', 'See how models are built in the models workflow'],
				art: 'model',
				guide: 'models',
			},
			{
				title: 'Make it public',
				where: 'API → Public API',
				who: ['you'],
				body: 'Switch a model to Public and tick the actions it answers. It starts with List and Read one; add Create, Update and Delete when you need them. Changes apply at once.',
				points: ['List · Read one · Create · Update · Delete — per model', 'Each project has its own address, from its public name', 'GET on the address describes every public model and its fields'],
				art: 'public',
				guide: 'public-api',
			},
			{
				title: 'Choose who may call it',
				where: 'API → Public API',
				who: ['you'],
				body: 'Open to anyone, only to your signed-in customers, or to customers for their own records only — each customer lists, reads and changes just what they created.',
				points: ['Anyone — a product list, blog posts, opening hours', 'Signed-in customers — a members-only price list', 'Customers, own records only — orders, bookings, support requests', 'Read-only fields: an order’s status or payment reference is set by you, never by a request'],
				art: 'access',
				guide: 'public-api',
			},
			{
				title: 'Add customer sign-in',
				where: 'API → Customers',
				who: ['you'],
				body: 'Drop in the sign-in widget, use MintAuth in your code, or post from your own form. Customers get accounts in your project, and you manage them from the panel.',
				points: ['A ready widget — sign up, sign in, sign out', 'Tokens per project, sent with each call', 'Customers listed and managed in the panel'],
				art: 'signin',
				guide: 'customers',
			},
			{
				title: 'Call it',
				where: 'Your site, app or script',
				who: ['you'],
				body: 'Every list takes paging, sorting, field filters, date ranges and search — and can return only the fields you ask for. Errors say exactly what was wrong.',
				points: ['?status=available&rate_lte=300&sort=-rating', 'Filters by kind of field, and by date', '400 with a plain message, 401, 404, 429 with Retry-After'],
				art: 'call',
				guide: 'public-api#filters',
			},
			{
				title: 'Check it in the reference',
				where: 'API → Public API → reference',
				who: ['mint'],
				body: 'Each project documents its own API from what the live API offers, so it always matches the switches. Every endpoint comes as a curl and a fetch example to paste, and the tester sends real requests.',
				points: ['Every endpoint your site or app can call', 'Copy-paste examples: curl and fetch', 'A tester to send real requests'],
				art: 'reference',
				guide: 'public-api',
			},
			{
				title: 'Tell your other systems',
				where: 'API → Webhooks',
				who: ['you'],
				body: 'When a record is created, changed or deleted — from your app, the panel or your AI — MINT posts it to your server, signed so you know it’s real. A failed delivery is retried, and every one is logged.',
				points: ['Per model: created, changed, deleted', 'Signed with a secret (HMAC-SHA256); a test button', 'Retried 3 times; the last 50 deliveries kept'],
				art: 'webhooks',
				guide: 'public-api#webhooks',
			},
		],
		includedTitle: 'What you didn’t have to write.',
		includedLead: 'The plumbing behind every API, done once and done properly.',
		included: [
			{ icon: Code, title: 'Endpoints', items: ['CRUD for every model', 'Paging, sorting, filters, search', 'Choose the fields that come back', 'Formulas computed on every save', 'Webhooks: signed, retried, logged'] },
			{ icon: KeyRound, title: 'Auth', items: ['Customer sign-up and sign-in', 'Own-records-only access', 'Tokens scoped to the project', 'Sign-in attempts rate-limited'] },
			{ icon: ShieldCheck, title: 'Safety', items: ['Validation with plain error messages', '300 requests a minute per visitor', 'Private records never served', 'Archived projects stop answering'] },
		],
	},

	/* ------------------------------------------------------ admin panel */
	{
		id: 'admin-panel',
		href: '/workflow/admin-panel',
		menu: { label: 'Build an admin panel', blurb: 'Tables, forms, dashboard and roles — your back office.' },
		icon: LayoutDashboard,
		color: 'violet',
		eyebrow: 'Workflow · Admin panel',
		title: 'Your back office,',
		accent: 'built from your models.',
		lead: 'Every model already has a table, a form, filters and a page per record. Shape them the way your team works, arrange the sidebar and dashboard, invite people with the right roles — and run the business from it.',
		result: 'An admin panel and back office your whole team works in every day.',
		time: 'A morning',
		steps: [
			{
				title: 'Start from a template, or blank',
				where: 'Projects → New → App',
				who: ['you'],
				body: 'Pick a ready-made app — a CRM, finance, HR & leave, inventory, projects & tasks — answer a few questions, and its models, pages, sidebar, dashboard and roles are built with sample records. Or start with an empty app and build every part yourself.',
				points: ['A set-up checklist walks you through the template', 'Everything it built is your own copy — change any of it', 'Blank instead? The next steps build it from nothing'],
				art: 'project',
				guide: 'projects',
			},
			{
				title: 'Create your models',
				where: 'Build → Models',
				who: ['you', 'ai'],
				body: 'Each model you create gives the panel a page in the sidebar with a table, search and filters, an add and edit form, a page per record and a permission for roles.',
				points: ['Live as soon as it’s created — nothing to deploy', 'Or ask your AI for a whole feature at once', 'See the models workflow for every detail'],
				art: 'create',
				guide: 'models',
			},
			{
				title: 'Shape every page',
				where: 'Build → Pages',
				who: ['you'],
				body: 'Choose columns and filters, lay out the form in sections, add tabs to the record page for everything linked to it. Work in a draft; your team sees nothing until you publish.',
				points: ['Fields that appear only when they apply', 'Status moves — and a reason asked for each one', 'Totals for ticked rows, and bulk upload', 'Every publish kept as a version you can go back to'],
				art: 'pages',
				guide: 'pages',
			},
			{
				title: 'Arrange the sidebar',
				where: 'Build → Sidebar',
				who: ['you'],
				body: 'Group pages into sections, pick their icons and order, and decide who sees each one. Preview it before you save.',
				points: ['Sections and pages, dragged into place', 'Hide a page from roles that don’t need it', 'Save or discard the whole arrangement'],
				art: 'sidebar',
				guide: 'sidebar',
			},
			{
				title: 'Build the dashboard',
				where: 'Build → Dashboard',
				who: ['you', 'ai'],
				body: 'Put the numbers that matter on the project’s home page: counts and sums, charts over time, recent records — each with conditions, each shown only to the people who may see it.',
				points: ['Numbers, charts and recent lists from any model', 'Conditions: this month, unpaid, assigned to me', 'Your AI can read and change the widgets too'],
				art: 'dashboard',
				guide: 'dashboard',
			},
			{
				title: 'Bring in the team',
				where: 'Organization → Members, Roles',
				who: ['you'],
				body: 'Invite people by email, give them a role — view, add, edit, delete, build — and the projects they work in.',
				points: ['Plain-language roles with standard permissions', 'Every project, or only the ones they need', 'Passkeys, email codes and backup codes for two-step sign-in'],
				art: 'team',
				guide: 'organization',
			},
			{
				title: 'Run the business',
				where: 'Every table',
				who: ['you'],
				body: 'Search, filter, edit many rows at once, import a spreadsheet, export any view — and see who changed what, with an undo.',
				points: ['History on every record, and undo', 'Archive instead of delete; merge duplicates safely', 'Notifications when something comes in'],
				art: 'run',
				guide: 'records',
			},
		],
		includedTitle: 'The back-office tools you’d otherwise build.',
		includedLead: 'Months of admin screens, permissions and audit trails — already there, for every model.',
		included: [
			{ icon: History, title: 'Safety', items: ['History and undo on every record', 'Drafts and versions for every page', 'Archive, restore and safe merges', 'Imports all-or-nothing'] },
			{ icon: Users, title: 'Access', items: ['Roles and permissions', 'Per-project access', 'Private records with owners', 'Sidebar and dashboard per viewer'] },
			{ icon: Lock, title: 'Sign-in', items: ['Passkeys and email codes', 'Backup codes', 'Signed-in devices you can sign out', 'Several organizations, one account'] },
		],
	},

	/* ---------------------------------------------------------- analyze */
	{
		id: 'analyze',
		href: '/workflow/analyze',
		menu: { label: 'Analyze your data with AI', blurb: 'Ask Claude, ChatGPT or any AI about your records — over MCP.' },
		icon: ChartLine,
		color: 'rose',
		eyebrow: 'Workflow · Analyze',
		title: 'Ask your data anything.',
		accent: 'With the AI you already use.',
		lead: 'Connect Claude, ChatGPT, Cursor or any assistant that speaks MCP to a project and ask in plain words — how many, which ones, by month, by room. It reads your records the way you can, works out the answer, and never changes a thing.',
		result: 'Answers about your business in a chat — no exports, spreadsheets or SQL.',
		time: 'Minutes',
		steps: [
			{
				title: 'Make a read-only key',
				where: 'Build → Connect AI → New key',
				who: ['you'],
				body: 'Make a key with “Can read records” on and “Can build” off. It can look at your models and read records to answer questions — and it can’t change anything.',
				points: ['A key is for one project and acts as you — never more than your role can see', 'Choose when it expires: never, or in 7, 30, 90 days or a year', 'See when it was last used, and revoke it at once'],
				art: 'read-key',
				guide: 'connect-ai#mcp-keys',
			},
			{
				title: 'Connect the AI of your choice',
				where: 'Your assistant’s settings',
				who: ['you'],
				body: 'MINT speaks MCP, the open protocol AI assistants use to work with other tools — so you pick the assistant. Your own AI subscription does the thinking; MINT answers its questions with your data.',
				points: ['Claude on the web or desktop: a custom connector', 'ChatGPT: a connector in developer mode', 'Claude Code and Cursor: one command or one settings entry', 'Anything else that speaks MCP over Streamable HTTP'],
				art: 'connect',
				guide: 'connect-ai#mcp-connect',
			},
			{
				title: 'Ask in plain words',
				where: 'In your AI chat',
				who: ['you', 'ai'],
				body: 'Talk about the business, not the database: “How many bookings did we have last month, by room?” “Which clients haven’t paid this month?” The AI looks at your models to see what exists, then reads the records it needs.',
				points: ['It knows your models — their fields, links and options', 'Counts, totals, breakdowns, lists and comparisons, worked out from your records', 'Ask a follow-up; the chat keeps the thread'],
				art: 'ask',
				guide: 'connect-ai#conversation',
			},
			{
				title: 'Stay in control',
				where: 'Every question',
				who: ['mint'],
				body: 'Every read goes through MINT with the key’s permissions: only this project, only the pages your role can view, and nothing written. Revoke the key and the AI loses access on its next question.',
				points: ['Read-only: a key without “Can build” changes nothing', 'Scoped to one project and limited by your role', 'Live data — always the current records, never a stale export'],
				art: 'scope',
				guide: 'connect-ai#safety',
			},
			{
				title: 'Turn a question into a dashboard',
				where: 'Build → Dashboard',
				who: ['you', 'ai'],
				body: 'When a question comes up every week, make it a widget on the project’s home page — arrange it yourself, or ask an AI whose key can build to add it for you.',
				points: ['Numbers, charts and recent lists from any model', 'Conditions: this month, unpaid, assigned to me', 'Each person sees only the widgets for data they may view'],
				art: 'dashboard',
				guide: 'dashboard',
			},
		],
		includedTitle: 'Any AI. Your data. Your rules.',
		includedLead: 'No exports, no data warehouse, no SQL — the assistant asks MINT, and MINT answers within the key’s permissions.',
		included: [
			{ icon: Plug, title: 'Any assistant', items: ['Claude — web, desktop and Claude Code', 'ChatGPT', 'Cursor', 'Any client that speaks MCP', 'Your own subscription does the thinking'] },
			{ icon: ShieldCheck, title: 'Control', items: ['Read-only keys', 'One project per key, never beyond your role', 'Expiry, last used, revoke at once', 'What it reads goes to the AI you chose — pick one your business trusts'] },
			{ icon: Database, title: 'No plumbing', items: ['No exports or copies to keep in sync', 'No SQL, no BI tool to set up', 'Always the live records', 'Questions about every model in the project'] },
		],
	},

	/* ----------------------------------------------------------- models */
	{
		id: 'models',
		href: '/workflow/models',
		menu: { label: 'Build & change models', blurb: 'How models are built — and what each change does later.' },
		icon: Boxes,
		color: 'emerald',
		eyebrow: 'Workflow · Models',
		title: 'Models are the heart.',
		accent: 'Build them once. Change them any time.',
		lead: 'A model is a kind of thing your business keeps — customers, rooms, invoices. Build one with the wizard or your AI, and when the business changes, change the model: every change is safe, versioned and live at once.',
		result: 'Your data, with its table, form, page, API and permission — ready to grow.',
		time: '5 minutes a model',
		steps: [
			{
				title: 'Describe it',
				where: 'Build → Models → New model',
				who: ['you', 'ai'],
				body: 'The wizard walks through eight steps — model, settings, config, form, table, view, filters, sidebar — each starting from suggestions made from your fields. Nothing is created until the last step. Or ask your AI for a whole feature: several linked models in one go, all or nothing.',
				points: ['Press Next through the suggestions, fine-tune later', 'Progress kept in your browser across a reload', 'AI features listed under Models → Features'],
				art: 'wizard',
				guide: 'models#models-wizard',
			},
			{
				title: 'Choose the fields',
				where: 'Wizard → Model',
				who: ['you'],
				body: 'Each field has a label, a key for the API, a kind and whether it’s required. Open a field for more: unique, searchable, min/max, allowed values, a default and help text.',
				points: ['Text, rich text, email, link, number, yes/no, date, colour', 'Options and tags, images, files and video', 'Passwords shown as dots until you click the eye'],
				art: 'fields',
				guide: 'models#models-fields',
			},
			{
				title: 'Link and calculate',
				where: 'Wizard → Model',
				who: ['you'],
				body: 'Link a booking to its guest and room; give it a total that works itself out. Group fields into sections, or rows of them — an invoice’s lines — and number records with codes like INV-0001.',
				points: ['Links show as chips and as tabs on the linked record', 'Formulas: total = nights × room.rate, sum(items.total)', 'Calculated on the server on every save — panel and API alike'],
				art: 'links',
				guide: 'models#formulas',
			},
			{
				title: 'Decide who sees the records',
				where: 'Wizard → Settings · Access',
				who: ['you'],
				body: 'Records are open to everyone whose role can view them in the project — or switch on per-record access for confidential models, and every record gets an owner and a privacy.',
				points: ['Only me · Private (with people you add) · Public', 'Only the owner changes access or deletes', 'Your public API only ever reaches public records'],
				art: 'privacy',
				guide: 'models#models-access',
			},
			{
				title: 'Create — it’s live',
				where: 'Wizard → Sidebar & create',
				who: ['mint'],
				body: 'Press Create model and everything around it exists at once: a sidebar page with a table, search and filters, a form, a page per record, a place on the dashboard, a permission for roles — and a public API if you want one.',
				points: ['No migration, no deploy', 'Names belong to the project alone', 'Its address in the panel and the API is fixed from now on'],
				art: 'create',
				guide: 'models',
			},
		],
		includedTitle: 'Change it whenever the business changes.',
		includedLead: 'Open a model under Build → Models and save — changes apply at once, and every change is kept as a version before it’s applied.',
		included: [
			{ icon: Database, title: 'Safe by design', items: ['Adding a field is always safe', 'Removing one hides it; the values stay', 'Every change versioned first'] },
			{ icon: Sigma, title: 'Kept consistent', items: ['Changing a formula recalculates records', 'Unique checks name the clashing records', 'Linked models can’t be deleted by accident'] },
			{ icon: Eye, title: 'Visible straight away', items: ['New fields in table, form, page and filters', 'Pages tuned in a draft, then published', 'Roll back by loading an old version'] },
		],
	},
];

/** What each kind of change to a model does (the models workflow). */
export const MODEL_CHANGES: { change: string; result: string; tone: 'safe' | 'care' | 'blocked' }[] = [
	{ change: 'Add a field', result: 'Always safe. It appears in the table, form, record page and filters straight away.', tone: 'safe' },
	{ change: 'Rename the title', result: 'Any time. The name and address stay fixed, so links and the API keep working.', tone: 'safe' },
	{ change: 'Change a formula', result: 'Existing records are recalculated.', tone: 'safe' },
	{ change: 'Change columns, filters, form or tabs', result: 'In a draft under Pages. Publish when it’s right; load an old version to roll back.', tone: 'safe' },
	{ change: 'Remove a field', result: 'Hidden, not erased — the values stay in the records. Add it back to see them.', tone: 'care' },
	{ change: 'Change a field’s kind', result: 'Flagged before you save: old values stay as they were and may not read as the new kind.', tone: 'care' },
	{ change: 'Make a field unique', result: 'Refused while records share a value — you’re told which ones to fix.', tone: 'care' },
	{ change: 'Disable the model', result: 'The page goes away; the model and its records are kept.', tone: 'care' },
	{ change: 'Delete the model', result: 'Removes the model and its page. Records stay unless you tick it and type the name. Not while another model links to it.', tone: 'blocked' },
];

/** All workflows for menus: the basic one first. */
export const ALL_FLOWS = [
	{ href: BASIC_FLOW.href, icon: BASIC_FLOW.icon, color: BASIC_FLOW.color, ...BASIC_FLOW.menu },
	...FLOWS.map(f => ({ href: f.href, icon: f.icon, color: f.color, ...f.menu })),
];
