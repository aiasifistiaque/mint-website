import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — Your AI writes a plan, not a codebase.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'MINT + AI vs AI coding', title: 'Your AI writes a plan,', accent: 'not a codebase.' });
}
