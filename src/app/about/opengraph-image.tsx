import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — Software that fits every business.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'About', title: 'Software that fits', accent: 'every business.' });
}
