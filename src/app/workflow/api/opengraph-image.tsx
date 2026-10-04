import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — A REST API, the moment you save a model.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'Workflow · API', title: 'A REST API,', accent: 'the moment you save a model.' });
}
