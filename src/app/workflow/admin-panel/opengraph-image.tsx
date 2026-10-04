import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — Your back office, built from your models.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'Workflow · Admin panel', title: 'Your back office,', accent: 'built from your models.' });
}
