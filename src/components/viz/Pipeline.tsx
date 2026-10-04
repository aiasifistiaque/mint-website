import { Fragment } from 'react';
import { AppWindow, Boxes, LayoutTemplate, Rocket, TrendingUp, Users } from '@/components/ui/icons';
import { STEPS } from '@/content/workflow';
import { cx } from '@/components/ui';
import { tone } from '@/lib/tones';

/**
 * The six workflow steps as a pipeline: coloured nodes joined by animated
 * connectors. Horizontal on wide screens, vertical
 * on phones.
 */

const ICONS = [AppWindow, Boxes, LayoutTemplate, Users, TrendingUp, Rocket];

const Connector = ({ from, to, vertical }: { from: string; to: string; vertical?: boolean }) => {
	const id = `c-${from.slice(1)}-${to.slice(1)}-${vertical ? 'v' : 'h'}`;
	return (
	<svg
		aria-hidden
		className={vertical ? 'mx-auto h-8 w-3 lg:hidden' : 'hidden h-3 w-7 shrink-0 self-center lg:block'}
		viewBox={vertical ? '0 0 12 32' : '0 0 100 12'}
		preserveAspectRatio='none'>
		<defs>
			<linearGradient
				id={id}
				gradientUnits='userSpaceOnUse'
				x1={vertical ? '6' : '0'}
				y1={vertical ? '0' : '6'}
				x2={vertical ? '6' : '100'}
				y2={vertical ? '32' : '6'}>
				<stop stopColor={from} />
				<stop
					offset='1'
					stopColor={to}
				/>
			</linearGradient>
		</defs>
		<path
			d={vertical ? 'M6 0 V32' : 'M0 6 H100'}
			stroke={`url(#${id})`}
			strokeWidth='2'
			fill='none'
			className='flow-dash'
			vectorEffect='non-scaling-stroke'
		/>
	</svg>
	);
};

const Pipeline = ({ dark }: { dark?: boolean }) => (
	<div className='flex flex-col lg:flex-row lg:items-stretch'>
		{STEPS.map((s, i) => {
			const Icon = ICONS[i];
			const t = tone(s.color);
			const next = STEPS[i + 1];
			return (
				<Fragment key={s.id}>
					<a
						href={`/workflow#${s.id}`}
						className={cx(
							'group relative flex flex-1 items-center gap-4 rounded-2xl border p-4 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 lg:flex-col lg:items-start lg:gap-3 lg:p-5',
							dark ? 'border-white/10 bg-white/[0.04] hover:bg-white/[0.07]' : 'border-line bg-panel shadow-panel hover:shadow-float'
						)}>
						<span className={cx('glyph size-11 rounded-2xl', dark ? 'glyph-ink text-white/85' : t.text)}>
							<Icon
								weight='light'
								className='size-[21px]'
							/>
						</span>
						<span>
							<span className={cx('block font-mono text-[11px] font-semibold', dark ? 'text-white/50' : t.text)}>{s.n}</span>
							<span className='font-display block text-[15.5px] font-normal leading-tight tracking-[-0.01em]'>{s.title}</span>
							<span className={cx('mt-1 block text-[12.5px]', dark ? 'text-white/50' : 'text-faint')}>{s.time}</span>
						</span>
					</a>
					{next && (
						<>
							<Connector
								from={t.hex}
								to={tone(next.color).hex}
							/>
							<Connector
								vertical
								from={t.hex}
								to={tone(next.color).hex}
							/>
						</>
					)}
				</Fragment>
			);
		})}
	</div>
);

export default Pipeline;
