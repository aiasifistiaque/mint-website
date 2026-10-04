import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — Ask your data anything. With any AI.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'Workflow · Analyze', title: 'Ask your data anything.', accent: 'With any AI.' });
}
