import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — Join the waitlist.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'Early access', title: 'Join the', accent: 'waitlist.' });
}
