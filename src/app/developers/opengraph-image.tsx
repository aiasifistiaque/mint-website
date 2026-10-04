import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — A backend you didn’t have to write.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'Developers', title: 'A backend', accent: 'you didn’t have to write.' });
}
