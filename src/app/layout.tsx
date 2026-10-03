import type { Metadata, Viewport } from 'next';
import { Inter, Inter_Tight, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/site/Header';
import Footer from '@/components/site/Footer';
import { DESCRIPTION, TAGLINE } from '@/content/site';
import { SITE_URL } from '@/lib/config';
import './globals.css';

// Headings: Inter Tight, light and tightly set. Text: Inter. Labels and code: JetBrains Mono.
const display = Inter_Tight({ subsets: ['latin'], variable: '--font-display-face', display: 'swap' });
const sans = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
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
	themeColor: '#fbfbfd',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang='en'
			className={`${display.variable} ${sans.variable} ${mono.variable}`}>
			<body className='flex min-h-dvh flex-col'>
				<a
					href='#main'
					className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-fg focus:px-4 focus:py-2 focus:text-bg'>
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
