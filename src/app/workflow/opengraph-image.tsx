import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — Six steps from idea to running business.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'The basic workflow', title: 'Six steps from idea', accent: 'to running business.' });
}
