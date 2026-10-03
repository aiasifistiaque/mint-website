/**
 * Where the website points. Set per deploy (see .env.example); the defaults
 * are production's addresses.
 */

const trim = (url: string) => url.replace(/\/+$/, '');

/** This website (canonical URLs, sitemap, Open Graph). */
export const SITE_URL = trim(process.env.NEXT_PUBLIC_SITE_URL || 'https://mintapp.shop');

/** The MINT app — the tenant panel, where people sign in and work. */
export const APP_URL = trim(process.env.NEXT_PUBLIC_APP_URL || 'https://app.mintapp.shop');

/** The backend's root; the waitlist form posts to `${API_URL}/public/waitlist`. */
export const API_URL = trim(process.env.NEXT_PUBLIC_API_URL || 'https://api.mintapp.shop');

/** Once sign-ups are open, "Create account" shows next to "Join the waitlist". */
export const SIGNUPS_OPEN = process.env.NEXT_PUBLIC_SIGNUPS_OPEN === 'true';

/** The app's own pages the website links to. */
export const APP = {
	login: `${APP_URL}/auth/login`,
	register: `${APP_URL}/auth/register`,
	/** The app sends anyone not signed in to its login page first. */
	dashboard: `${APP_URL}/dashboard`,
	guides: `${APP_URL}/user-docs`,
	guide: (path: string) => `${APP_URL}/user-docs/${path.replace(/^\/+/, '')}`,
};
