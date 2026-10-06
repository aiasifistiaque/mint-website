/**
 * The site builder's themes as the features page draws them (the themes
 * strip). The real ones live in mint-sites src/themes — copy the colours from
 * there when a theme is added or changed (SB-08 adds more).
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
];
