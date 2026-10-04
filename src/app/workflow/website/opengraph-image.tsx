import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — Ask for a website. Design, backend, analytics.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'Workflow · Website', title: 'Ask for a website.', accent: 'Design, backend, analytics.' });
}
