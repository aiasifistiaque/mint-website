/**
 * What's new — the /changelog page. Newest first.
 *
 * Add an entry whenever something people would notice ships in the app
 * (the product's own engineering log is backend/docs/multi-tenancy/CHANGELOG.md;
 * this is the customer-facing version of it). Write for the people who use
 * MINT: what they can now do, not how it was built.
 */

export type Release = {
	date: string; // YYYY-MM-DD
	title: string;
	summary: string;
	items: string[];
	tag?: 'New' | 'Improved' | 'Fixed';
};

export const RELEASES: Release[] = [
	{
		date: '2026-10-06',
		title: 'Site builder: add, move and pop-ups',
		summary: 'The visual site builder — still rolling out — can now build pages, not just edit them.',
		items: [
			'An Add tab with every block and ready-made section: click one to add it, or drag it onto the page where a blue line shows',
			'Move blocks by dragging them on the page or in the outline; copy, paste and duplicate them, even onto another page',
			'Double-click a heading, a button or a paragraph to type straight onto the page',
			'Pop-ups, side drawers and small popovers that open from any button — with Esc, a close button and screen-reader support built in',
			'Keyboard shortcuts for undo, copy, paste, duplicate, delete and moving',
			'Still to come before it opens: styles and themes, your data on your pages, and AI that builds a site for you',
		],
	},
	{
		date: '2026-10-06',
		title: 'A visual site builder is on the way',
		summary: 'Soon you’ll build and edit your website by clicking on it — no code, and nothing goes live until you publish. It’s being rolled out now.',
		items: [
			'Your page as visitors see it: click a heading, a picture or a button and change it in the panel beside it',
			'An outline of every block on the page, and widths for phone, tablet and desktop, in light and dark',
			'Changes save themselves as a draft, with undo and redo — your live site doesn’t change while you work',
			'Publish shows exactly what changed and anything to fix first, then puts it all live at once',
			'MINT hosts the published site for you, with each page’s SEO, a sitemap, redirects and a page-not-found page',
			'Still to come before it opens: adding and moving blocks, styles and themes, your data on your pages, and AI that builds a site for you',
		],
	},
	{
		date: '2026-10-06',
		title: 'A guided start for new accounts',
		tag: 'Improved',
		summary: 'Signing up now walks you to your first working project, step by step, with a guide for each step.',
		items: [
			'A welcome email with the six steps to a first project and a link to each guide',
			'Your first home page explains what you can build (an app, a website or an API) and starts one in a click',
			'Once you have a project, a Getting started checklist on your dashboards ticks itself off as you go',
			'The user guides now live at docs.mintapp.shop',
			'Simpler sign-in, sign-up and start pages, in the same look as this website',
		],
	},
	{
		date: '2026-10-06',
		title: 'Checkout and payments on your own site',
		tag: 'New',
		summary: 'Your site can now take orders and card payments — straight into your own Stripe account, priced by our server.',
		items: [
			'A Checkout widget: the buyer’s details and address, the order at your prices, and Pay on Stripe’s secure page',
			'Orders arrive in your own orders table as Awaiting payment, and turn Paid only when Stripe confirms — nobody can mark their own order paid',
			'Paid orders lower your stock, empty the buyer’s cart, notify your team and email the buyer a receipt from your address',
			'A Thank-you page widget and a My orders widget for your customers’ account page',
			'A Payments page in each project: connect Stripe in test or live mode and see every payment and how it went',
			'Coming next: SSLCommerz and bKash in Bangladesh, cash on delivery, bank transfer and refunds',
		],
	},
	{
		date: '2026-10-06',
		title: 'Email from your own address',
		tag: 'New',
		summary: 'Add your business email’s server once, and MINT sends your emails to customers from your own address.',
		items: [
			'An Email page in your organization: pick Gmail, Outlook, Zoho or another provider, add your login, send a test',
			'Customers who sign up on your sites get a welcome from you, not from us',
			'Every email you send is listed with whether it went — and if it didn’t, why, in plain words',
			'Your email password is stored encrypted and never shown again',
			'New to MINT? You now get a welcome email, and joining the waitlist confirms your place in the queue',
		],
	},
	{
		date: '2026-10-05',
		title: 'A cart for your own site',
		tag: 'New',
		summary: 'Tell MINT which model is your catalogue, switch the Cart widget on, and any button on your site becomes an add-to-cart button.',
		items: [
			'A Shop section on the Widgets page: pick your products model and which field is the name, price, image, stock, status and variants — filled in for you if you started from the E-commerce or Products & orders template',
			'Add-to-cart on any button, a cart button with a count and a cart drawer — or the cart itself on a /cart page',
			'Products with sizes or colours ask which one, with each one’s price and what’s sold out',
			'Prices, stock and the subtotal always come from your catalogue on our server — a page can’t change what something costs',
			'Guests’ carts stay in their browser and join their account when they sign in, so a cart follows a customer from phone to laptop',
			'Keep carts in MINT, or in a model of your own so your team sees every cart line',
		],
	},
	{
		date: '2026-10-05',
		title: 'Widgets for your own site',
		tag: 'New',
		summary: 'Add MINT to a website you host yourself with one script tag, then place ready-made widgets on it — starting with customer sign-in.',
		items: [
			'Login & account: sign up, sign in and sign out, as a card or a button in your header',
			'A Widgets page in each project: switch widgets on, set their options, reword every text and see a live preview before you save',
			'Your colour, font and corners on every widget, light or dark to match the page — and sealed off from your site’s CSS',
			'Your organization now has a country: pick it from a searchable list with flags and dialling codes. It decides which payment providers your sites can use',
			'Every new app, API and website now opens on its templates, and a template builds the whole thing: models, pages, sidebar, dashboard, roles and sample records',
			'Coming next: checkout and payments to your own merchant account — Stripe, plus SSLCommerz and bKash in Bangladesh',
		],
	},
	{
		date: '2026-10-05',
		title: 'Start from a template',
		tag: 'New',
		summary: 'A new project can start from a ready-made template — or from scratch, as before. Either way, everything in it is yours to change.',
		items: [
			'Templates for apps (CRM, finance, HR & leave, inventory, projects & tasks, bookkeeping), APIs (bookings, products & orders) and websites (e-commerce, blog, business site, portfolio)',
			'A few questions fill the template in; models, pages, sidebar, dashboard, roles, API and sample records arrive built',
			'Pick the template right in New project — the project opens on its questions — or choose later on its Get started page',
			'A set-up checklist on the new project’s home page',
			'Read-only fields on the public API: an order’s status or payment reference is set by your team, never by a request',
		],
	},
	{
		date: '2026-10-04',
		title: 'API projects and webhooks',
		tag: 'New',
		summary: 'A project can now be an API — the back end of your own app or site — and any project can tell your other systems when records change.',
		items: [
			'A new kind of project, API: its sidebar starts with Public API, Webhooks and Customers',
			'The API dashboard: your base address, the endpoints that are on, calls in the last day and the latest calls',
			'Webhooks: your server gets every new, changed or deleted record — from the panel, the API or your AI',
			'Signed with a secret so you know it’s real, retried 3 times, every delivery logged, and a Send test button',
			'Every endpoint in the API reference now comes as a curl and a fetch example to copy',
		],
	},
	{
		date: '2026-10-04',
		title: 'Step-by-step workflows',
		tag: 'New',
		summary: 'Learn MINT one step at a time: a workflow for each thing you build, and every admin panel feature on one page.',
		items: [
			'Build a website: connect Claude or ChatGPT, and the design and backend get built — SEO, analytics and security included',
			'Build an API, build an admin panel, and how models are built and changed later',
			'Every admin panel feature, grouped, each linked to its guide',
			'A new logo, and a deeper black in dark mode',
			'MINT + AI vs AI coding: why your AI should write a plan, not a codebase — side by side',
			'Chat with us on WhatsApp from any page',
			'Analyze your data with any AI: a read-only key, plain-word questions, answers from your live records',
			'A What is MINT section on the home page, and a proper preview image for every page when it’s shared'
		],
	},
	{
		date: '2026-10-04',
		title: 'Backend as a service, and dark mode',
		tag: 'Improved',
		summary: 'The website now tells the whole story: MINT is backend as a service with the admin panel and back office built in.',
		items: [
			'A new Backend page: the stack, the database, visual data editing, API and auth, back-office tools',
			'Two ways to build, side by side: building blocks or your AI',
			'Dark mode across the site, following your system or your choice',
		],
	},
	{
		date: '2026-10-04',
		title: 'Waitlist and a new home on the web',
		tag: 'New',
		summary: 'MINT has a full website — and early access opens through a waitlist, a few teams at a time.',
		items: [
			'Join the waitlist from any page; tell us what you’re building and we’ll set your workspace up for it',
			'The workflow, product tour, AI, developer and use-case pages explain MINT end to end',
		],
	},
	{
		date: '2026-10-04',
		title: 'Filters on the public API',
		tag: 'Improved',
		summary: 'Your site can now ask for exactly the records it needs, with the same filters your team uses in the app.',
		items: [
			'Filter any list by field: equals, not, in, greater or less than, between, contains',
			'Date shortcuts like today, this week or the last 7 days',
			'Search, sorting on several fields, and choosing which fields come back',
			'Every option documented in the project’s API reference, with recipes',
		],
	},
	{
		date: '2026-10-03',
		title: 'Password fields and searchable dropdowns',
		tag: 'Improved',
		summary: 'Small things that make everyday forms nicer.',
		items: [
			'A password field kind: hidden in the panel until you click to show it, and kept out of history',
			'Every dropdown is searchable',
			'Choose the prefix for a model’s record codes',
			'Website settings in one place, as cards that each save on their own',
		],
	},
	{
		date: '2026-10-03',
		title: 'History in every project, and notifications',
		tag: 'New',
		summary: 'Know what happened, and hear about what matters.',
		items: [
			'A project-wide activity page: every change, by whom, when',
			'Notifications when a record comes in from your website or app',
			'A get-started wizard that walks a new project from empty to its first records',
		],
	},
	{
		date: '2026-10-03',
		title: 'Website workspace',
		tag: 'New',
		summary: 'Website projects get their own home: pages, SEO, content and analytics side by side.',
		items: ['A new-project wizard for apps and websites', 'Website set-up, pages and content in one workspace'],
	},
	{
		date: '2026-10-02',
		title: 'Build with your own AI',
		tag: 'New',
		summary: 'Connect Claude, ChatGPT, Cursor or any MCP assistant to a project and build by describing what you need.',
		items: [
			'Project keys you can limit to reading, set to expire, and revoke',
			'The assistant plans models with you, then builds them with the same checks as the model builder',
			'An AI can build a whole website — pages, SEO and content — through the same connection',
		],
	},
	{
		date: '2026-10-02',
		title: 'Go live: public API, customer accounts, analytics',
		tag: 'New',
		summary: 'Open any model to your own site or app, with sign-in for your customers.',
		items: [
			'Per-model public API: choose list, read, create, update and delete',
			'Customer accounts with a drop-in sign-in widget; customers see only their own records',
			'Cookie-free analytics for websites: visitors, pages, sources and events',
			'A live API reference and tester in every project',
		],
	},
	{
		date: '2026-10-02',
		title: 'Organizations, projects and teams',
		tag: 'New',
		summary: 'MINT opens to teams: an organization for your company, projects inside it, people with roles.',
		items: [
			'Projects with their own address — app.mintapp.shop/your-project',
			'Invite people by email, with standard roles and per-project access',
			'Belong to several organizations and switch between them',
			'Two-step sign-in with passkeys or email codes, and a list of your signed-in devices',
			'A media library per project, or shared across the organization',
		],
	},
];
