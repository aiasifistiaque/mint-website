import { Reveal } from '@/components/ui';
import { SITE_THEMES, type SiteTheme } from '@/content/siteThemes';

/**
 * The site builder's themes, each as the same little page in light and dark
 * (features page, after "Go live"). Drawn with plain colours — no web fonts
 * are loaded for it.
 */

const Mini = ({ t, mode }: { t: SiteTheme; mode: 'light' | 'dark' }) => {
	const c = t[mode];
	return (
		<div
			className='flex-1 p-4'
			style={{ background: c.bg, color: c.fg }}>
			<div className='flex items-center justify-between'>
				<span
					className='text-[11px] font-semibold'
					style={{ fontFamily: t.heading }}>
					Bloom & Co
				</span>
				<span
					className='h-1.5 w-10 rounded-full'
					style={{ background: c.border }}
				/>
			</div>
			<p
				className='mt-5 truncate text-[19px] font-semibold leading-tight tracking-tight'
				style={{ fontFamily: t.heading }}>
				Fresh flowers
			</p>
			<p
				className='mt-1.5 text-[11px] leading-snug'
				style={{ color: c.muted }}>
				Same page, same words.
			</p>
			<div className='mt-3 flex gap-1.5'>
				<span
					className='px-2.5 py-1 text-[10px] font-semibold'
					style={{ background: c.primary, color: c.onPrimary, borderRadius: t.pill ? 999 : t.radius }}>
					Order now
				</span>
				<span
					className='border px-2.5 py-1 text-[10px] font-semibold'
					style={{ borderColor: c.border, borderRadius: t.pill ? 999 : t.radius }}>
					Menu
				</span>
			</div>
			<div className='mt-4 grid grid-cols-3 gap-1.5'>
				{[0, 1, 2].map(i => (
					<span
						key={i}
						className='h-8 border'
						style={{ background: c.card, borderColor: c.border, borderRadius: t.radius }}
					/>
				))}
			</div>
		</div>
	);
};

export default function ThemesStrip() {
	return (
		<div className='grid gap-4 md:grid-cols-3'>
			{SITE_THEMES.map((t, i) => (
				<Reveal
					key={t.key}
					className='h-full'
					delay={i * 60}>
					<figure className='flex h-full flex-col overflow-hidden rounded-2xl border border-line shadow-panel'>
						<div className='flex flex-1'>
							<Mini
								t={t}
								mode='light'
							/>
							<Mini
								t={t}
								mode='dark'
							/>
						</div>
						<figcaption className='border-t border-line bg-panel px-4 py-3'>
							<p className='text-[14px]'>{t.label}</p>
							<p className='text-[13px] text-muted'>{t.line}</p>
						</figcaption>
					</figure>
				</Reveal>
			))}
		</div>
	);
}
