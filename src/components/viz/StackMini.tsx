import { cx } from '@/components/ui';
import { STACK } from '@/content/platform';
import { tone } from '@/lib/tones';

/** The stack, small — four stepped layers for a hero. */
const StackMini = () => (
	<div
		aria-hidden
		className='relative mx-auto flex max-w-[460px] flex-col gap-2.5 [perspective:1200px]'>
		{STACK.map((l, i) => {
			const t = tone(l.color);
			return (
				<div
					key={l.title}
					className='rounded-2xl border border-line bg-panel p-4 shadow-float'
					style={{ marginLeft: `${(STACK.length - 1 - i) * 18}px`, marginRight: `${(STACK.length - 1 - i) * 18}px` }}>
					<div className='flex items-center gap-3'>
						<span className={cx('h-8 w-1.5 shrink-0 rounded-full bg-gradient-to-b', t.grad)} />
						<div className='min-w-0'>
							<p className={cx('font-mono text-[10px] font-semibold uppercase tracking-[0.12em]', t.text)}>Layer {STACK.length - i}</p>
							<p className='font-display truncate text-[15px] font-medium tracking-[-0.01em]'>{l.title}</p>
						</div>
					</div>
					<div className='mt-3 flex flex-wrap gap-1'>
						{l.parts.slice(0, 4).map(p => (
							<span
								key={p}
								className={cx('rounded-full px-2 py-0.5 text-[11px] font-medium', t.soft, t.text)}>
								{p}
							</span>
						))}
					</div>
				</div>
			);
		})}
	</div>
);

export default StackMini;
