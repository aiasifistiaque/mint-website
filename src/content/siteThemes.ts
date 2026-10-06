/**
 * The site builder's themes as the features page draws them (the themes
 * strip). The real ones live in mint-sites src/themes — copy the colours from
 * there when a theme is added or changed.
 */

type Mode = { bg: string; fg: string; muted: string; primary: string; onPrimary: string; card: string; border: string; accent: string };

export type SiteTheme = { key: string; label: string; line: string; heading: string; radius: string; pill: boolean; light: Mode; dark: Mode };

export const SITE_THEMES: SiteTheme[] = [
	{
		key: 'studio',
		label: 'Studio',
		line: 'Clean and modern, for most businesses',
		heading: 'ui-sans-serif, system-ui, sans-serif',
		radius: '8px',
		pill: false,
		light: { bg: '#ffffff', fg: '#0f172a', muted: '#5b6474', primary: '#4f46e5', onPrimary: '#ffffff', card: '#f4f5f7', border: '#e3e6ec', accent: '#e0e7ff' },
		dark: { bg: '#0b0d12', fg: '#e8eaf0', muted: '#9aa3b2', primary: '#8b85ff', onPrimary: '#0b0d12', card: '#161a22', border: '#262b37', accent: '#252a4a' },
	},
	{
		key: 'editorial',
		label: 'Editorial',
		line: 'Warm and literary, with serif type',
		heading: 'Georgia, "Times New Roman", serif',
		radius: '3px',
		pill: false,
		light: { bg: '#faf6ef', fg: '#2b2118', muted: '#6f6253', primary: '#b4532a', onPrimary: '#fffaf3', card: '#f1eadf', border: '#e3d8c6', accent: '#f6dccd' },
		dark: { bg: '#17130f', fg: '#efe6d8', muted: '#b3a592', primary: '#e58a5f', onPrimary: '#1a120c', card: '#211b16', border: '#352c23', accent: '#3a2619' },
	},
	{
		key: 'bright',
		label: 'Bright',
		line: 'Friendly and colourful, with pill buttons',
		heading: 'ui-rounded, ui-sans-serif, system-ui, sans-serif',
		radius: '14px',
		pill: true,
		light: { bg: '#fdfcff', fg: '#1c1530', muted: '#635a7a', primary: '#7c3aed', onPrimary: '#ffffff', card: '#f4f1fb', border: '#e7e1f5', accent: '#ff7a59' },
		dark: { bg: '#120e1c', fg: '#ece8f7', muted: '#a69fbd', primary: '#a78bfa', onPrimary: '#120e1c', card: '#1b1629', border: '#2c2540', accent: '#ff9b80' },
	},
	{
		key: 'market',
		label: 'Market',
		line: 'Fresh and trustworthy, made for shops',
		heading: 'ui-sans-serif, system-ui, sans-serif',
		radius: '8px',
		pill: false,
		light: { bg: '#fbfaf7', fg: '#14201a', muted: '#55625a', primary: '#166534', onPrimary: '#ffffff', card: '#f1efe8', border: '#e4e1d8', accent: '#fde68a' },
		dark: { bg: '#0d1310', fg: '#e6efe9', muted: '#9fb0a6', primary: '#4ade80', onPrimary: '#06210f', card: '#151d18', border: '#24302a', accent: '#f59e0b' },
	},
	{
		key: 'calm',
		label: 'Calm',
		line: 'Soft and unhurried, for bookings and care',
		heading: 'Georgia, "Times New Roman", serif',
		radius: '14px',
		pill: true,
		light: { bg: '#f7f5f0', fg: '#26302b', muted: '#5d6862', primary: '#4d6b5a', onPrimary: '#ffffff', card: '#eeebe3', border: '#e2ded3', accent: '#ead9c6' },
		dark: { bg: '#121614', fg: '#e4e9e5', muted: '#a5b0aa', primary: '#9cc3ad', onPrimary: '#0f1a14', card: '#1a201d', border: '#29312c', accent: '#3a2f24' },
	},
	{
		key: 'mono',
		label: 'Mono',
		line: 'Stark and precise, for portfolios',
		heading: 'ui-sans-serif, system-ui, sans-serif',
		radius: '0px',
		pill: false,
		light: { bg: '#ffffff', fg: '#0a0a0a', muted: '#5c5c5c', primary: '#0a0a0a', onPrimary: '#ffffff', card: '#f4f4f4', border: '#e2e2e2', accent: '#ff4d00' },
		dark: { bg: '#0a0a0a', fg: '#f5f5f5', muted: '#a3a3a3', primary: '#f5f5f5', onPrimary: '#0a0a0a', card: '#161616', border: '#2a2a2a', accent: '#ff6a2b' },
	},
	{
		key: 'bistro',
		label: 'Bistro',
		line: 'Warm and inviting, for restaurants',
		heading: 'Georgia, "Times New Roman", serif',
		radius: '3px',
		pill: false,
		light: { bg: '#fbf6ee', fg: '#2a1a17', muted: '#6b5750', primary: '#8c1c2c', onPrimary: '#fff7ef', card: '#f3ebdf', border: '#e8dccb', accent: '#b8893a' },
		dark: { bg: '#160f0d', fg: '#f1e6da', muted: '#bba899', primary: '#e5868f', onPrimary: '#1f0b0e', card: '#201714', border: '#33261f', accent: '#d6a855' },
	},
];
