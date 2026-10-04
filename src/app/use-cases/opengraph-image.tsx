import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — CRMs, bookings, orders, sites and more.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'Use cases', title: 'CRMs, bookings, orders,', accent: 'sites and more.' });
}
