import {
	BedDouble,
	Building,
	Contact,
	Headset,
	Package,
	ReceiptText,
	ShoppingBag,
	Smartphone,
	type IconType,
} from '@/components/ui/icons';

/**
 * What people build — the /use-cases page and the chips on home. Each one is
 * a recipe: the models it needs and what goes live.
 */

export type UseCase = {
	id: string;
	icon: IconType;
	title: string;
	pitch: string;
	models: string[];
	live: string;
};

export const USE_CASES: UseCase[] = [
	{
		id: 'crm',
		icon: Contact,
		title: 'CRM',
		pitch: 'Every client, every deal and every conversation in one place — with the pipeline on the dashboard.',
		models: ['Clients', 'Contacts', 'Deals', 'Activities'],
		live: 'A contact form on your site that drops leads straight into Deals.',
	},
	{
		id: 'bookings',
		icon: BedDouble,
		title: 'Bookings',
		pitch: 'Rooms, tables, appointments or classes — who’s coming, when, and what they owe.',
		models: ['Guests', 'Rooms', 'Bookings', 'Payments'],
		live: 'Guests book on your website and sign in to manage their stays.',
	},
	{
		id: 'inventory',
		icon: Package,
		title: 'Inventory',
		pitch: 'Stock by location, with what’s low on the dashboard and every movement in history.',
		models: ['Products', 'Locations', 'Stock moves', 'Suppliers'],
		live: 'Live stock levels on your shop, read from the public API.',
	},
	{
		id: 'orders',
		icon: ShoppingBag,
		title: 'Orders',
		pitch: 'From order to delivery: status, items and totals that calculate themselves.',
		models: ['Customers', 'Orders', 'Order items', 'Deliveries'],
		live: 'Customers place orders on your site and track them from their account.',
	},
	{
		id: 'invoices',
		icon: ReceiptText,
		title: 'Invoices',
		pitch: 'Invoices with line items, taxes and totals as formulas — and who’s paid at a glance.',
		models: ['Clients', 'Invoices', 'Line items', 'Payments'],
		live: 'A client portal where each client sees only their own invoices.',
	},
	{
		id: 'support',
		icon: Headset,
		title: 'Support desk',
		pitch: 'Tickets with priorities, owners and statuses — and a team that knows who’s on what.',
		models: ['Customers', 'Tickets', 'Replies'],
		live: 'Customers open tickets from your site; your team hears about each one.',
	},
	{
		id: 'website',
		icon: Building,
		title: 'Company website',
		pitch: 'Pages, SEO and content blocks your team edits — rendered by your own front end.',
		models: ['Pages', 'Content blocks', 'Posts'],
		live: 'Two calls render any page; cookie-free analytics count the visits.',
	},
	{
		id: 'mobile',
		icon: Smartphone,
		title: 'Mobile app back end',
		pitch: 'Accounts, data and media for your app, without running a server.',
		models: ['Your app’s models', 'Customers', 'Media'],
		live: 'Your app signs people in and reads and writes their own records.',
	},
];
