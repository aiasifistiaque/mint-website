import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, Outfit } from 'next/font/google';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import Fabs from '@/components/site/Fabs';
import { DESCRIPTION, TAGLINE } from '@/content/site';
import { SITE_URL } from '@/lib/config';
import { THEME_SCRIPT } from '@/components/site/ThemeToggle';
import './globals.css';

// Headings and text: Outfit — slim and geometric (light weights). Labels and code: JetBrains Mono.
const sans = Outfit({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

/** Structured data for search engines: the organization and the product. */
const JSON_LD = {
	'@context': 'https://schema.org',
	'@graph': [
		{ '@type': 'Organization', name: 'MINT', url: SITE_URL, logo: `${SITE_URL}/icon.svg` },
		{
			'@type': 'SoftwareApplication',
			name: 'MINT',
			applicationCategory: 'BusinessApplication',
			operatingSystem: 'Web',
			url: SITE_URL,
			description: DESCRIPTION,
		},
	],
};

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: { default: `MINT — ${TAGLINE}`, template: '%s · MINT' },
	description: DESCRIPTION,
	applicationName: 'MINT',
	keywords: ['backend as a service', 'BaaS', 'admin panel', 'back office', 'no-code backend', 'REST API', 'headless CMS', 'MCP', 'AI app builder', 'Claude', 'ChatGPT'],
	openGraph: {
		type: 'website',
		siteName: 'MINT',
		locale: 'en_US',
		title: `MINT — ${TAGLINE}`,
		description: DESCRIPTION,
		url: SITE_URL,
	},
	robots: { index: true, follow: true },
	twitter: { card: 'summary_large_image', title: `MINT — ${TAGLINE}`, description: DESCRIPTION },
	alternates: { canonical: '/' },
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#fbfbfd' },
		{ media: '(prefers-color-scheme: dark)', color: '#0d0d0d' },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
			className={`${sans.variable} ${mono.variable}`}>
			<head>
				<script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
				/>
			</head>
			<body className='flex min-h-dvh flex-col'>
				<a
					href='#main'
					className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-white'>
					Skip to content
				</a>
				<Header />
				<main
					id='main'
					className='flex-1'>
					{children}
				</main>
				<Footer />
				<Fabs />
			</body>
		</html>
	);
}
