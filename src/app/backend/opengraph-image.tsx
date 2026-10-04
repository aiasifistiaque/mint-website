import { OG_SIZE, OG_TYPE, og } from '@/lib/og';

export const alt = 'MINT — Database, API and auth. Admin panel included.';
export const size = OG_SIZE;
export const contentType = OG_TYPE;

export default function Image() {
	return og({ eyebrow: 'Backend as a service', title: 'Database, API and auth.', accent: 'Admin panel included.' });
}
