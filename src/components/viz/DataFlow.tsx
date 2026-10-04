import { ArrowDown } from '@/components/ui/icons';
import { cx } from '@/components/ui';

/**
 * Where data flows: your team (the app) and your AI on the left, MINT's
 * models in the middle, your website, mobile app and customers on the right.
 * Animated connectors with packets moving along them. An SVG on wide screens;
 * a stacked list on phones, where the drawing's text would be too small.
 */

type Node = { x: number; y: number; title: string; sub: string; color: string };

const LEFT: Node[] = [
	{ x: 30, y: 70, title: 'Your team', sub: 'Tables, forms, dashboard', color: '#10b981' },
	{ x: 30, y: 250, title: 'Your AI assistant', sub: 'Claude, ChatGPT, Cursor', color: '#8b5cf6' },
];
const RIGHT: Node[] = [
	{ x: 700, y: 30, title: 'Your website', sub: 'Pages, SEO, analytics', color: '#06b6d4' },
	{ x: 700, y: 160, title: 'Your mobile app', sub: 'Public API', color: '#0ea5e9' },
	{ x: 700, y: 290, title: 'Your customers', sub: 'Accounts, own records', color: '#f43f5e' },
];
const W = 230;
const H = 76;
const CORE = { x: 365, y: 70, w: 230, h: 256 };
const MODELS = ['Bookings', 'Guests', 'Rooms', 'Payments'];

const curve = (x1: number, y1: number, x2: number, y2: number) => {
	const mx = (x1 + x2) / 2;
	return `M${x1} ${y1} C${mx} ${y1} ${mx} ${y2} ${x2} ${y2}`;
};

const Box = ({ n, dark }: { n: Node; dark?: boolean }) => (
	<g>
		<rect
			x={n.x}
			y={n.y}
			width={W}
			height={H}
			rx='18'
			fill={dark ? 'rgb(255 255 255 / 0.05)' : 'var(--panel)'}
			stroke={dark ? 'rgb(255 255 255 / 0.12)' : 'var(--line)'}
		/>
		<rect
			x={n.x + 16}
			y={n.y + 20}
			width='36'
			height='36'
			rx='11'
			fill={n.color}
			opacity='0.15'
		/>
		<circle
			cx={n.x + 34}
			cy={n.y + 38}
			r='7'
			fill={n.color}
		/>
		<text
			x={n.x + 66}
			y={n.y + 34}
			fontSize='15'
			fontWeight='700'
			fill={dark ? '#fff' : 'var(--fg)'}
			style={{ fontFamily: 'var(--font-display)' }}>
			{n.title}
		</text>
		<text
			x={n.x + 66}
			y={n.y + 54}
			fontSize='12.5'
			fill={dark ? 'rgb(255 255 255 / 0.55)' : 'var(--fg-faint)'}>
			{n.sub}
		</text>
	</g>
);

const DataFlow = ({ dark }: { dark?: boolean }) => {
	const paths = [
		...LEFT.map(n => ({ d: curve(n.x + W, n.y + H / 2, CORE.x, n.y < 150 ? CORE.y + 80 : CORE.y + 176), c: n.color })),
		...RIGHT.map(n => ({ d: curve(CORE.x + CORE.w, CORE.y + CORE.h / 2, n.x, n.y + H / 2), c: n.color })),
	];

	return (
		<>
			<svg
				viewBox='0 0 960 400'
				className='hidden h-auto w-full md:block'
				role='img'
				aria-label='Your team and your AI work in MINT; MINT serves your website, mobile app and customers.'>
				<defs>
					<linearGradient
						id='core-grad'
						x1='0'
						y1='0'
						x2='1'
						y2='1'>
						<stop stopColor='#10b981' />
						<stop
							offset='0.5'
							stopColor='#06b6d4'
						/>
						<stop
							offset='1'
							stopColor='#8b5cf6'
						/>
					</linearGradient>
				</defs>
				{paths.map((p, i) => (
					<g key={i}>
						<path
							d={p.d}
							stroke={p.c}
							strokeOpacity='0.25'
							strokeWidth='2'
							fill='none'
						/>
						<path
							d={p.d}
							stroke={p.c}
							strokeWidth='2'
							fill='none'
							className='flow-dash'
						/>
						<circle
							r='4.5'
							fill={p.c}>
							<animateMotion
								dur={`${2.6 + (i % 3) * 0.5}s`}
								repeatCount='indefinite'
								path={p.d}
								begin={`${i * 0.35}s`}
							/>
						</circle>
					</g>
				))}
				{LEFT.map(n => (
					<Box
						key={n.title}
						n={n}
						dark={dark}
					/>
				))}
				{RIGHT.map(n => (
					<Box
						key={n.title}
						n={n}
						dark={dark}
					/>
				))}
				{/* the core */}
				<rect
					x={CORE.x - 2}
					y={CORE.y - 2}
					width={CORE.w + 4}
					height={CORE.h + 4}
					rx='26'
					fill='url(#core-grad)'
				/>
				<rect
					x={CORE.x}
					y={CORE.y}
					width={CORE.w}
					height={CORE.h}
					rx='24'
					fill={dark ? '#12141f' : 'var(--panel)'}
				/>
				<text
					x={CORE.x + 22}
					y={CORE.y + 38}
					fontSize='18'
					fontWeight='800'
					fill={dark ? '#fff' : 'var(--fg)'}
					style={{ fontFamily: 'var(--font-display)' }}>
					mint
				</text>
				<text
					x={CORE.x + 22}
					y={CORE.y + 58}
					fontSize='12'
					fill={dark ? 'rgb(255 255 255 / 0.55)' : 'var(--fg-faint)'}>
					Seaside Inn · 4 models
				</text>
				{MODELS.map((m, i) => (
					<g key={m}>
						<rect
							x={CORE.x + 18}
							y={CORE.y + 76 + i * 42}
							width={CORE.w - 36}
							height='32'
							rx='10'
							fill={dark ? 'rgb(255 255 255 / 0.06)' : 'var(--bg-subtle)'}
						/>
						<circle
							cx={CORE.x + 36}
							cy={CORE.y + 92 + i * 42}
							r='4'
							fill={['#10b981', '#0ea5e9', '#f59e0b', '#8b5cf6'][i]}
						/>
						<text
							x={CORE.x + 50}
							y={CORE.y + 96.5 + i * 42}
							fontSize='13'
							fontWeight='600'
							fill={dark ? '#fff' : 'var(--fg)'}>
							{m}
						</text>
						<text
							x={CORE.x + CORE.w - 30}
							y={CORE.y + 96.5 + i * 42}
							fontSize='11'
							textAnchor='end'
							fill={dark ? 'rgb(255 255 255 / 0.45)' : 'var(--fg-faint)'}
							style={{ fontFamily: 'var(--font-mono)' }}>
							API ✓
						</text>
					</g>
				))}
			</svg>

			{/* phones */}
			<div className='flex flex-col items-center gap-2 md:hidden'>
				{[LEFT, [{ title: 'mint', sub: 'Your models, pages and API', color: '#6366f1' }], RIGHT].map((col, i) => (
					<div
						key={i}
						className='flex w-full flex-col items-center gap-2'>
						{col.map(n => (
							<div
								key={n.title}
								className={cx(
									'flex w-full items-center gap-3 rounded-2xl border p-3.5',
									dark ? 'border-white/10 bg-white/5' : 'border-line bg-panel',
									i === 1 && 'ring-brand'
								)}>
								<span
									className='size-3 rounded-full'
									style={{ background: n.color }}
								/>
								<span>
									<span className='font-display block text-[15px] font-medium'>{n.title}</span>
									<span className={cx('text-[13px]', dark ? 'text-white/55' : 'text-faint')}>{n.sub}</span>
								</span>
							</div>
						))}
						{i < 2 && <ArrowDown className={cx('size-4', dark ? 'text-white/40' : 'text-faint')} />}
					</div>
				))}
			</div>
		</>
	);
};

export default DataFlow;
