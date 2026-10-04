import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/config';
import { RELEASES } from '@/content/changelog';

const PAGES = ['', '/backend', '/workflow', '/workflow/website', '/workflow/api', '/workflow/admin-panel', '/workflow/models', '/product', '/admin-panel', '/compare', '/who-its-for', '/features', '/ai', '/developers', '/use-cases', '/security', '/changelog', '/about', '/waitlist', '/privacy'];

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date(RELEASES[0]?.date || Date.now());
	return PAGES.map(p => ({ url: `${SITE_URL}${p}`, lastModified, changeFrequency: p === '/changelog' ? 'weekly' : 'monthly', priority: p === '' ? 1 : 0.7 }));
}
