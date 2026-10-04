import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — The backend for every business. Admin panel included.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'Backend as a service', title: 'The backend for every business.', accent: 'Admin panel included.' });
}
