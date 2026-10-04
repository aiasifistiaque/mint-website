import { Reveal, cx } from '@/components/ui';
import { STACK } from '@/content/platform';
import { tone } from '@/lib/tones';

/**
 * Backend as a service, as layers: your apps and team on top of the admin
 * panel, on top of the API, on top of the database. Each layer slightly
 * narrower than the one under it, joined by a dashed spine.
 */
const StackDiagram = ({ dark }: { dark?: boolean }) => (
	<div className='relative mx-auto flex max-w-[980px] flex-col items-center gap-3'>
		<span
			aria-hidden
			className={cx('absolute bottom-6 top-6 left-1/2 w-px -translate-x-1/2 border-l border-dashed', dark ? 'border-white/20' : 'border-line-strong')}
		/>
		{STACK.map((l, i) => {
			const t = tone(l.color);
			return (
				<Reveal
					key={l.title}
					delay={i * 90}
					className='relative w-full'>
					<div
						className={cx(
							'mx-auto flex flex-col gap-4 rounded-2xl border p-5 md:flex-row md:items-center md:gap-6',
							dark ? 'border-white/10 bg-ink-2' : 'border-line bg-panel shadow-panel'
						)}
						style={{ maxWidth: `${780 + i * 66}px` }}>
						<div className='flex shrink-0 items-center gap-3 md:w-[260px]'>
							<span className={cx('h-10 w-1.5 shrink-0 rounded-full bg-gradient-to-b', t.grad)} />
							<span>
								<span className={cx('block font-mono text-[11px] font-semibold uppercase tracking-[0.12em]', dark ? 'text-white/50' : t.text)}>
									Layer {STACK.length - i}
								</span>
								<span className='font-display block text-[17px] font-medium tracking-[-0.01em]'>{l.title}</span>
								<span className={cx('block text-[12.5px]', dark ? 'text-white/50' : 'text-faint')}>{l.body}</span>
							</span>
						</div>
						<div className='flex flex-wrap gap-1.5'>
							{l.parts.map(p => (
								<span
									key={p}
									className={cx(
										'rounded-full px-3 py-1 text-[12.5px] font-medium',
										dark ? 'bg-white/[0.08] text-white/85' : cx(t.soft, t.text)
									)}>
									{p}
								</span>
							))}
						</div>
					</div>
				</Reveal>
			);
		})}
	</div>
);

export default StackDiagram;
