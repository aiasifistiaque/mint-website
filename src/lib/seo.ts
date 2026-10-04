import type { Metadata } from 'next';

/**
 * A page's metadata: title, description, canonical URL, and the Open Graph and
 * Twitter cards that link previews use. The share image comes from the page's
 * opengraph-image.tsx (lib/og.tsx); pages without one use the site's.
 */
export const pageMeta = ({ title, description, path }: { title: string; description: string; path: string }): Metadata => ({
	title,
	description,
	alternates: { canonical: path },
	openGraph: {
		type: 'website',
		siteName: 'MINT',
		locale: 'en_US',
		title: `${title} · MINT`,
		description,
		url: path,
	},
	twitter: { card: 'summary_large_image', title: `${title} · MINT`, description },
});
