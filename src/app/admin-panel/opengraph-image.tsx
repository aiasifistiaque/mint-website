import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — Every feature. On every model.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'Admin panel', title: 'Every feature.', accent: 'On every model.' });
}
