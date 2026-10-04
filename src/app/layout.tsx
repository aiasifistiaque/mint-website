import type { Metadata, Viewport } from 'next';
import { Inter_Tight, JetBrains_Mono, Manrope } from 'next/font/google';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { DESCRIPTION, TAGLINE } from '@/content/site';
import { SITE_URL } from '@/lib/config';
import { THEME_SCRIPT } from '@/components/site/ThemeToggle';
import './globals.css';

// Headings: Inter Tight, light and tightly set. Text: Manrope. Labels and code: JetBrains Mono.
const display = Inter_Tight({ subsets: ['latin'], variable: '--font-display-face', display: 'swap' });
const sans = Manrope({ subsets: ['latin'], variable: '--font-body', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: { default: `MINT — ${TAGLINE}`, template: '%s · MINT' },
	description: DESCRIPTION,
	applicationName: 'MINT',
	openGraph: {
		type: 'website',
		siteName: 'MINT',
		title: `MINT — ${TAGLINE}`,
		description: DESCRIPTION,
		url: SITE_URL,
	},
	twitter: { card: 'summary_large_image', title: `MINT — ${TAGLINE}`, description: DESCRIPTION },
	alternates: { canonical: '/' },
};

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#fbfbfd' },
		{ media: '(prefers-color-scheme: dark)', color: '#08090c' },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
			className={`${display.variable} ${sans.variable} ${mono.variable}`}>
			<head>
				<script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
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
			</body>
		</html>
	);
}
