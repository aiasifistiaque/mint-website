import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — If you keep track of anything, MINT is for you.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'Who it’s for', title: 'If you keep track of anything,', accent: 'MINT is for you.' });
}
