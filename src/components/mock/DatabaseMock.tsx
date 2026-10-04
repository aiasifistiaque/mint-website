import { Check, Hash, Link2, Plus, Search, TextAa, Toggle, CalendarDays, Archive, FileUp } from '@/components/ui/icons';
import { cx } from '@/components/ui';
import Frame from './Frame';

/**
 * The visual data editor: a model's records as a grid (a cell being edited,
 * rows selected with the bulk bar), and the field's settings beside it.
 */

const COLS = [
	{ icon: TextAa, k: 'Name', w: '1.5fr' },
	{ icon: Link2, k: 'Category', w: '1.1fr' },
	{ icon: Hash, k: 'Price', w: '0.8fr' },
	{ icon: Toggle, k: 'Active', w: '0.6fr' },
	{ icon: CalendarDays, k: 'Updated', w: '0.9fr' },
];
const GRID = COLS.map(c => c.w).join(' ');

const ROWS = [
	{ n: 'Linen shirt', c: 'Apparel', p: '49.00', a: true, u: '2m ago', sel: true },
	{ n: 'Clay mug', c: 'Home', p: '18.50', a: true, u: '1h ago', sel: true, edit: true },
	{ n: 'Wool scarf', c: 'Apparel', p: '35.00', a: false, u: 'Today', sel: true },
	{ n: 'Oak tray', c: 'Home', p: '62.00', a: true, u: 'Yesterday' },
	{ n: 'Canvas tote', c: 'Bags', p: '24.00', a: true, u: 'Oct 2' },
];

const DatabaseMock = ({ className }: { className?: string }) => (
	<Frame
		url='app.mintapp.shop/acme-store/products'
		className={className}
		bodyClassName='grid lg:grid-cols-[1fr_230px]'>
		<div className='min-w-0 p-4'>
			<div className='mb-3 flex items-center justify-between gap-3'>
				<div className='flex items-center gap-1'>
					{['Records', 'Fields', 'API'].map((t, i) => (
						<span
							key={t}
							className={cx('rounded-md px-2.5 py-1', i === 0 ? 'bg-soft font-semibold' : 'text-muted')}>
							{t}
						</span>
					))}
				</div>
				<div className='flex items-center gap-1.5'>
					<span className='hidden items-center gap-1.5 rounded-md border border-line px-2 py-1 text-faint sm:inline-flex'>
						<Search className='size-3' /> Search
					</span>
					<span className='inline-flex items-center gap-1 rounded-md bg-brand px-2.5 py-1 font-medium text-white'>
						<Plus className='size-3' /> Add
					</span>
				</div>
			</div>

			{/* bulk bar */}
			<div className='mb-2 flex items-center gap-2 rounded-lg bg-ink px-3 py-1.5 text-white dark:bg-white/10'>
				<span className='font-medium'>3 selected</span>
				<span className='ml-auto inline-flex items-center gap-1 rounded px-1.5 py-0.5 hover:bg-white/10'>Edit</span>
				<span className='inline-flex items-center gap-1 rounded px-1.5 py-0.5'>
					<Archive className='size-3' /> Archive
				</span>
				<span className='inline-flex items-center gap-1 rounded px-1.5 py-0.5'>
					<FileUp className='size-3' /> Export
				</span>
			</div>

			<div className='overflow-hidden rounded-lg border border-line'>
				<div
					className='grid items-center gap-2 bg-subtle px-3 py-2 font-medium text-muted'
					style={{ gridTemplateColumns: `18px ${GRID}` }}>
					<span />
					{COLS.map(c => (
						<span
							key={c.k}
							className='flex items-center gap-1 truncate'>
							<c.icon className='size-3 text-faint' />
							{c.k}
						</span>
					))}
				</div>
				{ROWS.map(r => (
					<div
						key={r.n}
						className={cx('grid items-center gap-2 border-t border-line px-3 py-[7px]', r.sel && 'bg-violet-500/[0.06]')}
						style={{ gridTemplateColumns: `18px ${GRID}` }}>
						<span
							className={cx(
								'inline-flex size-3.5 items-center justify-center rounded-[4px] border',
								r.sel ? 'border-violet-500 bg-violet-500 text-white' : 'border-line-strong'
							)}>
							{r.sel && <Check className='size-2.5' />}
						</span>
						<span className='truncate font-medium'>{r.n}</span>
						<span>
							<span className='rounded-md border border-line bg-panel px-1.5 py-0.5 text-[11px]'>{r.c}</span>
						</span>
						{r.edit ? (
							<span className='rounded-md bg-panel px-1.5 py-0.5 font-mono text-[11px] ring-2 ring-violet-500'>
								21.00<span className='caret ml-px border-l border-fg' />
							</span>
						) : (
							<span className='font-mono text-[11px]'>{r.p}</span>
						)}
						<span>
							<span className={cx('inline-flex h-3.5 w-6 items-center rounded-full p-0.5', r.a ? 'justify-end bg-emerald-500' : 'bg-line-strong')}>
								<span className='size-2.5 rounded-full bg-white' />
							</span>
						</span>
						<span className='truncate text-faint'>{r.u}</span>
					</div>
				))}
			</div>
			<p className='mt-2 flex items-center gap-1.5 text-[10.5px] text-faint'>
				<span className='size-1.5 rounded-full bg-emerald-500' /> Saved · in history with undo
			</p>
		</div>

		{/* field settings */}
		<div className='hidden border-l border-line bg-subtle p-4 lg:block'>
			<p className='mb-1 text-[10.5px] font-medium uppercase tracking-[0.1em] text-faint'>Field</p>
			<p className='mb-3 flex items-center gap-1.5 text-[13px] font-semibold'>
				<Hash className='size-3.5 text-violet-500' /> Price
			</p>
			{[
				['Type', 'Number'],
				['Required', 'Yes'],
				['Minimum', '0'],
				['Shown in table', 'Yes'],
				['Filter', 'Range'],
			].map(([k, v]) => (
				<div
					key={k}
					className='flex items-center justify-between border-t border-line py-1.5'>
					<span className='text-muted'>{k}</span>
					<span className='font-medium'>{v}</span>
				</div>
			))}
			<p className='mt-4 mb-1.5 text-[10.5px] font-medium uppercase tracking-[0.1em] text-faint'>Public API</p>
			<div className='flex flex-wrap gap-1'>
				{['list', 'read'].map(a => (
					<span
						key={a}
						className='rounded bg-emerald-100 px-1.5 py-0.5 font-mono text-[10.5px] text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-300'>
						{a}
					</span>
				))}
				{['create', 'delete'].map(a => (
					<span
						key={a}
						className='rounded bg-soft px-1.5 py-0.5 font-mono text-[10.5px] text-faint line-through'>
						{a}
					</span>
				))}
			</div>
		</div>
	</Frame>
);

export default DatabaseMock;
