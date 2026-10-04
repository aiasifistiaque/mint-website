import { Boxes, Check, LayoutDashboard, LayoutTemplate, PanelLeft, Sparkles } from '@/components/ui/icons';
import { Reveal, cx } from '@/components/ui';
import DatabaseMock from '@/components/mock/DatabaseMock';

/**
 * Two ways to build — building blocks, or the AI — meeting in one visual
 * editor. Two cards, converging connectors, then the data editor.
 */

const BLOCKS = [
	{ icon: Boxes, t: 'Model builder', b: 'Fields, links, formulas', c: 'text-emerald-600 dark:text-emerald-400' },
	{ icon: LayoutTemplate, t: 'Page builder', b: 'Tables, forms, detail pages', c: 'text-violet-600 dark:text-violet-400' },
	{ icon: PanelLeft, t: 'Sidebar builder', b: 'Sections, icons, access', c: 'text-sky-600 dark:text-sky-400' },
	{ icon: LayoutDashboard, t: 'Dashboard builder', b: 'Numbers, charts, lists', c: 'text-rose-600 dark:text-rose-400' },
];

const BuildPaths = () => (
	<div>
		<div className='grid gap-4 md:grid-cols-2'>
			<Reveal className='rounded-2xl border border-line bg-panel p-6 shadow-panel'>
				<p className='font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400'>Path A</p>
				<h3 className='mt-2 text-[24px] font-light tracking-[-0.03em]'>Build with blocks</h3>
				<p className='mt-1 text-[14.5px] leading-relaxed text-muted'>Click it together with the visual builders — every step previewed, drafted, then published.</p>
				<div className='mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2'>
					{BLOCKS.map(b => (
						<div
							key={b.t}
							className='flex items-center gap-2.5 rounded-xl border border-line bg-subtle p-3'>
							<span className={cx('glyph size-8 rounded-lg', b.c)}>
								<b.icon
									weight='light'
									className='size-[17px]'
								/>
							</span>
							<span className='min-w-0'>
								<span className='block truncate text-[13px] font-semibold'>{b.t}</span>
								<span className='block truncate text-[11.5px] text-faint'>{b.b}</span>
							</span>
						</div>
					))}
				</div>
			</Reveal>
			<Reveal
				delay={100}
				className='rounded-2xl border border-line bg-panel p-6 shadow-panel'>
				<p className='font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-violet-600 dark:text-violet-400'>Path B</p>
				<h3 className='mt-2 text-[24px] font-light tracking-[-0.03em]'>Let AI build it</h3>
				<p className='mt-1 text-[14.5px] leading-relaxed text-muted'>Describe it to Claude, ChatGPT or Cursor. It plans with you, then builds with the same checks.</p>
				<div className='mt-5 space-y-2 text-[13px]'>
					<p className='ml-auto max-w-[88%] rounded-2xl rounded-br-md bg-brand px-3.5 py-2.5 leading-snug text-white'>
						A shop backend: products with categories, orders with line items, and a total that adds itself up.
					</p>
					<div className='max-w-[92%] rounded-2xl rounded-bl-md border border-line px-3.5 py-2.5'>
						<p className='mb-1.5 flex items-center gap-1.5 font-semibold text-violet-600 dark:text-violet-400'>
							<Sparkles className='size-3.5' /> Built 4 models
						</p>
						{['Product → Category', 'Order → Customer', 'Line item → Order, Product', 'total = Σ line items'].map(l => (
							<p
								key={l}
								className='flex items-center gap-1.5 font-mono text-[11.5px] text-muted'>
								<Check className='size-3 text-emerald-500' />
								{l}
							</p>
						))}
					</div>
				</div>
			</Reveal>
		</div>

		{/* converge */}
		<svg
			aria-hidden
			viewBox='0 0 1000 90'
			preserveAspectRatio='none'
			className='hidden h-[90px] w-full md:block'>
			<defs>
				<linearGradient
					id='bp-a'
					gradientUnits='userSpaceOnUse'
					x1='250'
					y1='0'
					x2='500'
					y2='90'>
					<stop stopColor='#10b981' />
					<stop
						offset='1'
						stopColor='#6366f1'
					/>
				</linearGradient>
				<linearGradient
					id='bp-b'
					gradientUnits='userSpaceOnUse'
					x1='750'
					y1='0'
					x2='500'
					y2='90'>
					<stop stopColor='#a855f7' />
					<stop
						offset='1'
						stopColor='#6366f1'
					/>
				</linearGradient>
			</defs>
			<path
				d='M250 0 C250 60 500 30 500 90'
				stroke='url(#bp-a)'
				strokeWidth='2'
				fill='none'
				className='flow-dash'
				vectorEffect='non-scaling-stroke'
			/>
			<path
				d='M750 0 C750 60 500 30 500 90'
				stroke='url(#bp-b)'
				strokeWidth='2'
				fill='none'
				className='flow-dash'
				vectorEffect='non-scaling-stroke'
			/>
		</svg>
		<div className='mx-auto -mb-2 mt-4 flex w-fit items-center gap-2 rounded-full border border-line bg-panel px-4 py-1.5 text-[13px] font-semibold shadow-panel md:mt-0'>
			<span className='size-2 rounded-full bg-brand' /> One visual editor for your data
		</div>
		<Reveal className='mt-6'>
			<DatabaseMock />
		</Reveal>
	</div>
);

export default BuildPaths;
