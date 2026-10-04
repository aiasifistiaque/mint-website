import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — Your AI, building your backend.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'Build with AI', title: 'Your AI,', accent: 'building your backend.' });
}
