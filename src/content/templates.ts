import {
	BedDouble,
	BookOpenCheck,
	Building,
	CalendarDays,
	ChartLine,
	Contact,
	FolderKanban,
	Images,
	Package,
	ReceiptText,
	ShoppingBag,
	Store,
	type IconType,
} from '@/components/ui/icons';
import type { Tone } from '@/lib/tones';

/**
 * Ready-made project templates — the home page's "Start from a template" and
 * the first workflow step read this. Keep it to the templates the product
 * offers (backend/docs/templates: the starters and T-13): when one is added or renamed there,
 * change it here.
 */

export type TemplateKind = 'App' | 'API' | 'Website';
export type Template = { icon: IconType; name: string; kind: TemplateKind; body: string };

export const KIND_TONE: Record<TemplateKind, Tone> = { App: 'emerald', API: 'cyan', Website: 'amber' };

export const TEMPLATES: Template[] = [
	{ icon: ChartLine, name: 'Finance management', kind: 'App', body: 'Accounts, transactions, invoices, bills and budgets' },
	{ icon: Contact, name: 'CRM', kind: 'App', body: 'Companies, people, deals and a pipeline dashboard' },
	{ icon: CalendarDays, name: 'HR & leave', kind: 'App', body: 'Employees, leave requests, allowances and holidays' },
	{ icon: Package, name: 'Inventory', kind: 'App', body: 'Stock by location, suppliers and purchase orders' },
	{ icon: FolderKanban, name: 'Projects & tasks', kind: 'App', body: 'Projects, their tasks, who’s on them, when they’re due' },
	{ icon: ReceiptText, name: 'Bookkeeping practice', kind: 'App', body: 'Clients, deadlines, billing and their books' },
	{ icon: BedDouble, name: 'Booking API', kind: 'API', body: 'Services, staff and hours; bookings by your customers' },
	{ icon: ShoppingBag, name: 'Products & orders API', kind: 'API', body: 'A catalogue, orders and wishlists for your own app' },
	{ icon: Store, name: 'E-commerce', kind: 'Website', body: 'Collections, products with variants, cart and orders' },
	{ icon: BookOpenCheck, name: 'Blog', kind: 'Website', body: 'Posts, authors, categories and tags, with SEO' },
	{ icon: Building, name: 'Business site', kind: 'Website', body: 'Services, team, testimonials and a contact form' },
	{ icon: Images, name: 'Portfolio', kind: 'Website', body: 'Case studies with galleries, and enquiries' },
];

/** What happens when you start from one — in order. */
export const TEMPLATE_STEPS = [
	{ title: 'Pick one', body: 'An app, an API or a website, made for a kind of business.' },
	{ title: 'Answer a few questions', body: 'Your business name, currency, what you sell — they fill the template in.' },
	{ title: 'It’s built for you', body: 'Models, pages, sidebar, dashboard, roles, API and sample records — with a set-up checklist.' },
	{ title: 'Make it yours', body: 'Everything is your project’s own copy: rename, add fields, remove what you don’t need.' },
];

/** Starting from scratch instead. */
export const SCRATCH_POINTS = [
	'An empty app, API or website project',
	'Build it with the visual builders, or describe it to your AI',
	'Change your mind any time — every model, page and endpoint stays editable',
];
