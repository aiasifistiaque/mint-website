import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — Build them once. Change them any time.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'Workflow · Models', title: 'Build them once.', accent: 'Change them any time.' });
}
