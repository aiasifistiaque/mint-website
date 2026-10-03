import {
	Briefcase,
	Code2,
	HeartHandshake,
	Rocket,
	Store,
	Workflow,
	type IconType,
} from '@/components/ui/icons';
import type { Tone } from '@/lib/tones';

/**
 * Who MINT is for — the /who-its-for page and the persona strip on home.
 * Each one: what hurts today, what changes, what they'd build, and the kind
 * of thing they'd ask their AI on an ordinary day.
 */

export type Persona = {
	id: string;
	icon: IconType;
	color: Tone;
	who: string;
	examples: string;
	pain: string;
	gain: string;
	builds: string[];
	asks: string[];
};

export const PERSONAS: Persona[] = [
	{
		id: 'small-business',
		icon: Store,
		color: 'emerald',
		who: 'Small business owners',
		examples: 'Cafés, shops, salons, studios, guesthouses',
		pain: 'The business runs on a spreadsheet, a notebook and memory — and only you know how it all fits.',
		gain: 'One app for bookings, customers, stock and money, that your staff can use from day one.',
		builds: ['Bookings', 'Customers', 'Stock', 'Daily takings'],
		asks: ['“Add a loyalty points field to customers.”', '“Who hasn’t visited in 60 days?”'],
	},
	{
		id: 'founders',
		icon: Rocket,
		color: 'violet',
		who: 'Startup founders',
		examples: 'Pre-seed to Series A',
		pain: 'Every week spent on admin panels and back-office tools is a week not spent on the product.',
		gain: 'The back office in an afternoon — and an API to launch the first version of your product on.',
		builds: ['CRM & pipeline', 'Waitlist & users', 'Investor updates', 'MVP back end'],
		asks: ['“Make a pipeline for our pilot customers.”', '“How many sign-ups came from the website this week?”'],
	},
	{
		id: 'operations',
		icon: Workflow,
		color: 'sky',
		who: 'Operations teams',
		examples: 'Ops, finance, HR, support',
		pain: 'The tools you need sit at the bottom of the engineering backlog, behind the product.',
		gain: 'Build the internal tool yourself, with roles, history and a dashboard — and change it the same day.',
		builds: ['Approvals', 'Vendors & contracts', 'Assets', 'Support desk'],
		asks: ['“Only finance should see contract values.”', '“Show open tickets by owner on the dashboard.”'],
	},
	{
		id: 'agencies',
		icon: Briefcase,
		color: 'amber',
		who: 'Agencies & freelancers',
		examples: 'Web studios, consultants, IT partners',
		pain: 'Every client needs a portal, a CMS or a back end — and each one is a new build to maintain.',
		gain: 'A project per client in one organization: their data, their website, their people — set up in hours.',
		builds: ['Client portals', 'Websites & CMS', 'Order systems', 'Reporting'],
		asks: ['“Copy the booking setup we made for the other clinic.”', '“Draft the pages for a bakery’s website.”'],
	},
	{
		id: 'developers',
		icon: Code2,
		color: 'cyan',
		who: 'Developers',
		examples: 'Solo builders, product teams',
		pain: 'Auth, CRUD, admin screens and an API for the hundredth time — before the interesting part.',
		gain: 'Models with a REST API, customer sign-in and an admin panel your client can use. You write the front end.',
		builds: ['API for web & mobile', 'Customer accounts', 'Admin panel', 'Content API'],
		asks: ['“Add a `featured` flag to products and expose it on the API.”', '“Which fields does the orders endpoint filter on?”'],
	},
	{
		id: 'community',
		icon: HeartHandshake,
		color: 'rose',
		who: 'Clinics, schools & nonprofits',
		examples: 'Practices, academies, associations, charities',
		pain: 'Patients, students, members or donors in scattered files — with privacy that matters.',
		gain: 'Records with private access, appointments and sign-in for the people you serve — without an IT team.',
		builds: ['Appointments', 'Members & donors', 'Classes & enrolment', 'Volunteers'],
		asks: ['“Make patient notes private to the doctor who wrote them.”', '“List members whose renewal is due this month.”'],
	},
];

/** "A day with MINT" — one business, one ordinary day, the AI along the way. */
export type Moment = { time: string; who: string; role: string; color: Tone; did: string; prompt?: string; reply?: string };

export const DAY: Moment[] = [
	{
		time: '08:00',
		who: 'Maya',
		role: 'Owner',
		color: 'emerald',
		did: 'Opens the dashboard with her coffee: 86% occupancy, four bookings came in overnight from the website.',
	},
	{
		time: '09:30',
		who: 'Maya',
		role: 'Owner',
		color: 'violet',
		did: 'The kitchen keeps asking about allergies. She asks her AI to fix it.',
		prompt: 'Add dietary requirements to bookings, and show them on the kitchen’s page.',
		reply: 'Added “Dietary needs” (options + notes) to Booking, and a column on Kitchen → Today. Live now.',
	},
	{
		time: '12:15',
		who: 'Lea',
		role: 'Front desk',
		color: 'sky',
		did: 'Filters today’s check-ins, confirms six at once, and undoes one she clicked by mistake.',
	},
	{
		time: '15:00',
		who: 'Maya',
		role: 'Owner',
		color: 'amber',
		did: 'Before the weekly call with the accountant, she asks a question instead of building a report.',
		prompt: 'Which guests next week haven’t paid their deposit?',
		reply: '3 bookings — Leo Martins, Priya Das, Tom Okafor — $860 outstanding in total.',
	},
	{
		time: '18:00',
		who: 'Jonas',
		role: 'Web developer',
		color: 'cyan',
		did: 'Puts live room availability on the website with one call to the public API — no server to run.',
	},
	{
		time: '21:40',
		who: 'A guest',
		role: 'On the website',
		color: 'rose',
		did: 'Books a room and creates an account to manage the stay. The team gets a notification; nobody had to be awake.',
	},
];
