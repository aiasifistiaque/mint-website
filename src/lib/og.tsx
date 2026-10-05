import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

/**
 * Share images (Open Graph / Twitter), drawn at build time: the dark brand
 * card — the mark, an eyebrow, the page's headline in light capitals with its
 * accent in the brand gradient. Each route's opengraph-image.tsx calls og().
 */

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_TYPE = 'image/png';

type OgFont = { name: string; data: ArrayBuffer | Buffer; weight: 200 | 400; style: 'normal' };

/** A TrueType or OpenType file — anything else (an error page, a rate-limit answer) crashes the renderer. */
const isFont = (data: ArrayBuffer) => {
	if (data.byteLength < 1024) return false;
	const tag = new DataView(data).getUint32(0);
	return tag === 0x00010000 || tag === 0x4f54544f /* OTTO */ || tag === 0x74727565 /* true */;
};

/**
 * Outfit from Google Fonts (TTF — what the renderer reads), fetched once per
 * weight per build — every page's image shares it. When Google Fonts can't be
 * reached from the build machine (it happens on Vercel), the image is drawn in
 * Geist (below) rather than failing the build.
 */
const loadFont = async (weight: 200 | 400): Promise<OgFont | null> => {
	try {
		const res = await fetch(`https://fonts.googleapis.com/css2?family=Outfit:wght@${weight}&display=swap`);
		if (!res.ok) return null;
		const url = (await res.text()).match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
		if (!url) return null;
		const file = await fetch(url);
		if (!file.ok) return null;
		const data = await file.arrayBuffer();
		return isFont(data) ? { name: 'Outfit', data, weight, style: 'normal' } : null;
	} catch {
		return null;
	}
};
const fontCache = new Map<number, Promise<OgFont | null>>();

/**
 * When Outfit can't be had: Geist, the font Next ships with its image renderer,
 * read from disk. The renderer's own default doesn't load during a static
 * build, and with no font at all it fails ('split' of undefined).
 */
let fallback: Promise<OgFont | null> | null = null;
const fallbackFont = () =>
	(fallback ??= readFile(join(process.cwd(), 'node_modules/next/dist/compiled/@vercel/og/Geist-Regular.ttf'))
		.then(data => ({ name: 'Geist', data, weight: 400 as const, style: 'normal' as const }))
		.catch(() => null));
const font = (weight: 200 | 400) => {
	if (!fontCache.has(weight)) fontCache.set(weight, loadFont(weight));
	return fontCache.get(weight)!;
};

const Mark = () => (
	<svg
		width='64'
		height='64'
		viewBox='0 0 32 32'>
		<defs>
			<linearGradient
				id='g'
				x1='2'
				y1='2'
				x2='30'
				y2='30'
				gradientUnits='userSpaceOnUse'>
				<stop stopColor='#10b981' />
				<stop
					offset='0.45'
					stopColor='#06b6d4'
				/>
				<stop
					offset='1'
					stopColor='#7c3aed'
				/>
			</linearGradient>
		</defs>
		<rect
			width='32'
			height='32'
			rx='9.5'
			fill='url(#g)'
		/>
		<path
			d='M9.5 22.5V10.5L16 17L22.5 10.5V22.5'
			fill='none'
			stroke='#fff'
			strokeWidth='2.6'
			strokeLinecap='round'
			strokeLinejoin='round'
		/>
		<path
			d='M16 6.6Q16.45 9.05 18.9 9.5Q16.45 9.95 16 12.4Q15.55 9.95 13.1 9.5Q15.55 9.05 16 6.6Z'
			fill='#fff'
		/>
	</svg>
);

export const og = async ({ eyebrow, title, accent }: { eyebrow: string; title: string; accent: string }) => {
	let fonts = (await Promise.all([font(200), font(400)])).filter((f): f is OgFont => !!f);
	if (!fonts.length) fonts = [await fallbackFont()].filter((f): f is OgFont => !!f);
	const long = (title + accent).length;
	const size = long > 70 ? 58 : long > 52 ? 68 : 78;

	return new ImageResponse(
		(
			<div
				style={{
					width: '100%',
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-between',
					padding: '64px 72px',
					background: '#0d0d0d',
					backgroundImage:
						'radial-gradient(circle at 8% 0%, rgba(16,185,129,0.30), transparent 45%), radial-gradient(circle at 100% 10%, rgba(168,85,247,0.32), transparent 45%), radial-gradient(circle at 70% 120%, rgba(6,182,212,0.25), transparent 50%)',
					color: '#faf8f1',
					fontFamily: fonts[0]?.name,
				}}>
				<div style={{ display: 'flex', alignItems: 'center', gap: 22 }}>
					<Mark />
					<span style={{ fontSize: 30, fontWeight: 400, letterSpacing: 12 }}>MINT</span>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column' }}>
					<span style={{ fontSize: 22, letterSpacing: 6, color: '#34d399', textTransform: 'uppercase', marginBottom: 26 }}>{eyebrow}</span>
					<span style={{ fontSize: size, fontWeight: 200, lineHeight: 1.04, textTransform: 'uppercase' }}>{title}</span>
					<span
						style={{
							fontSize: size,
							fontWeight: 200,
							lineHeight: 1.04,
							textTransform: 'uppercase',
							backgroundImage: 'linear-gradient(100deg, #10b981 0%, #06b6d4 35%, #6366f1 70%, #a855f7 100%)',
							backgroundClip: 'text',
							color: 'transparent',
						}}>
						{accent}
					</span>
				</div>
				<div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 20, letterSpacing: 4, color: 'rgba(250,248,241,0.55)', textTransform: 'uppercase' }}>
					<span>Backend · Admin panel · API · AI</span>
					<span>mintapp.shop</span>
				</div>
			</div>
		),
		{ ...OG_SIZE, fonts }
	);
};
