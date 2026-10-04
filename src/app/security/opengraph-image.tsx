import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — The right access for everyone.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'Teams & security', title: 'The right access', accent: 'for everyone.' });
}
