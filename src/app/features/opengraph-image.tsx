import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — Everything included. On every project.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'Features', title: 'Everything included.', accent: 'On every project.' });
}
