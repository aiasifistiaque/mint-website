import { Cookie, CreditCard, MessageSquareText, Package, Search, ShoppingCart, UserRound, WhatsApp, CalendarDays, type IconType } from '@/components/ui/icons';
import type { Tone } from '@/lib/tones';

/**
 * Site widgets — the home page's "Widgets for your own site" and the
 * developers page read this. Keep it to what the product has (backend
 * docs/widgets): `live` only for widgets tenants can switch on today; the
 * rest are the work orders being built, shown as "Next".
 */

export type SiteWidget = { icon: IconType; name: string; body: string; tone: Tone; live?: boolean };

export const WIDGETS: SiteWidget[] = [
	{ icon: UserRound, name: 'Login & account', body: 'Sign up, sign in, sign out — as a card or a header button', tone: 'emerald', live: true },
	{ icon: ShoppingCart, name: 'Cart', body: 'Add-to-cart on any product; follows customers between devices', tone: 'amber' },
	{ icon: CreditCard, name: 'Checkout & payments', body: 'Priced on the server, paid to your own merchant account', tone: 'rose' },
	{ icon: Package, name: 'My orders', body: 'Order history and tracking in the account', tone: 'sky' },
	{ icon: MessageSquareText, name: 'Forms', body: 'Contact and newsletter, straight into your models', tone: 'violet' },
	{ icon: CalendarDays, name: 'Booking', body: 'Free slots worked out on the server — no double bookings', tone: 'cyan' },
	{ icon: WhatsApp, name: 'WhatsApp button', body: 'A floating chat button with a ready message', tone: 'emerald' },
	{ icon: Cookie, name: 'Cookie consent', body: 'Tracking tags fire only after visitors agree', tone: 'amber' },
	{ icon: Search, name: 'Search', body: 'Instant results from products, posts and pages', tone: 'sky' },
];

/** What every widget gets from the panel. */
export const WIDGET_POINTS = [
	'One script tag per page, then a line of HTML wherever a widget goes',
	'Switch each one on, set its options and reword every text — in your own language too',
	'Your colour, font and corners; light or dark to match the page',
	'Sealed off from your CSS, so neither breaks the other',
	'A live preview of your changes before you save',
];

/** Payments, by the organization's country (Checkout, next). */
export const PAYMENT_PROVIDERS = [
	{ name: 'Stripe', where: 'Everywhere' },
	{ name: 'SSLCommerz', where: 'Bangladesh' },
	{ name: 'bKash', where: 'Bangladesh' },
];
