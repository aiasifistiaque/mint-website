import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — What’s new in MINT.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'Changelog', title: 'What’s new', accent: 'in MINT.' });
}
