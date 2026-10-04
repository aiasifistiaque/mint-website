import { Check, MessageSquareText, ListTree, Hammer, Users } from '@/components/ui/icons';
import { cx } from '@/components/ui';
import { tone, Tone } from '@/lib/tones';

/** How a sentence becomes software: describe → plan → build → use. */

const STAGES: { icon: typeof Check; color: Tone; title: string; body: string; art: React.ReactNode }[] = [
	{
		icon: MessageSquareText,
		color: 'violet',
		title: 'You describe',
		body: 'In plain words, in the AI chat you already use.',
		art: (
			<div className='rounded-xl rounded-br-sm bg-brand px-3 py-2 text-[11.5px] leading-snug text-white'>
				“We run a dog-walking business. Track dogs, owners and walks.”
			</div>
		),
	},
	{
		icon: ListTree,
		color: 'sky',
		title: 'AI plans',
		body: 'It looks at what you have and proposes models to check.',
		art: (
			<div className='space-y-1 font-mono text-[10.5px]'>
				{['Owner · name, phone', 'Dog · name, breed → Owner', 'Walk · dog → Dog, date, paid'].map(l => (
					<p
						key={l}
						className='truncate rounded-md bg-sky-50 dark:bg-sky-400/10 px-2 py-1 text-sky-800 dark:text-sky-300'>
						{l}
					</p>
				))}
			</div>
		),
	},
	{
		icon: Hammer,
		color: 'emerald',
		title: 'MINT builds',
		body: 'With the builder’s checks — and only within your role.',
		art: (
			<div className='space-y-1 text-[11px]'>
				{['3 models created', 'Tables, forms, pages', 'Sidebar updated'].map(l => (
					<p
						key={l}
						className='flex items-center gap-1.5'>
						<span className='inline-flex size-4 items-center justify-center rounded-full bg-emerald-500 text-white'>
							<Check className='size-2.5' />
						</span>
						{l}
					</p>
				))}
			</div>
		),
	},
	{
		icon: Users,
		color: 'amber',
		title: 'Your team uses it',
		body: 'Right away. Change it again tomorrow by asking again.',
		art: (
			<div className='overflow-hidden rounded-lg border border-line text-[10.5px]'>
				{[
					['Bruno', 'Mon 9:00', 'Paid'],
					['Luna', 'Mon 11:30', 'Due'],
					['Pepper', 'Tue 8:00', 'Paid'],
				].map(([d, t, p], i) => (
					<div
						key={d}
						className={cx('grid grid-cols-3 gap-1 px-2 py-1', i > 0 && 'border-t border-line')}>
						<span className='font-semibold'>{d}</span>
						<span className='text-faint'>{t}</span>
						<span className={p === 'Paid' ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}>{p}</span>
					</div>
				))}
			</div>
		),
	},
];

const AiFlow = () => (
	<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
		{STAGES.map((s, i) => {
			const t = tone(s.color);
			return (
				<div
					key={s.title}
					className='relative flex flex-col rounded-2xl border border-line bg-panel p-5 text-fg shadow-panel'>
					<div className='mb-4 flex items-center gap-3'>
						<span className={cx('glyph size-10 rounded-xl', t.text)}>
							<s.icon
								weight='light'
								className='size-5'
							/>
						</span>
						<span className={cx('font-mono text-[11px] font-semibold', t.text)}>0{i + 1}</span>
					</div>
					<h3 className='text-[18px] font-medium tracking-[-0.02em]'>{s.title}</h3>
					<p className='mt-1 mb-5 text-[14px] leading-relaxed text-muted'>{s.body}</p>
					<div className='mt-auto rounded-2xl bg-subtle p-3'>{s.art}</div>
					{i < STAGES.length - 1 && (
						<span
							aria-hidden
							className='absolute -right-[15px] top-[38px] z-10 hidden size-7 items-center justify-center rounded-full border border-line bg-panel text-[13px] text-muted shadow-panel lg:flex'>
							→
						</span>
					)}
				</div>
			);
		})}
	</div>
);

export default AiFlow;
