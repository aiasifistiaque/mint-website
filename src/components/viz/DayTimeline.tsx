import { Sparkles } from '@/components/ui/icons';
import { DAY } from '@/content/personas';
import { Reveal, cx } from '@/components/ui';
import { tone } from '@/lib/tones';

/**
 * "A day with MINT": one business's ordinary day, hour by hour, with the AI
 * conversations along the way. A centre line on wide screens, a left rail on
 * phones.
 */
const DayTimeline = () => (
	<div className='relative'>
		<div
			aria-hidden
			className='absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-emerald-300 via-violet-300 to-rose-300 md:left-1/2'
		/>
		<ol className='flex flex-col gap-10 md:gap-6'>
			{DAY.map((m, i) => {
				const t = tone(m.color);
				const right = i % 2 === 1;
				return (
					<li
						key={m.time}
						className='relative grid items-start md:grid-cols-2 md:gap-16'>
						<span
							aria-hidden
							className={cx(
								'absolute left-[12px] top-4 z-10 size-[15px] rounded-full border-[3px] border-bg shadow md:left-1/2 md:-translate-x-1/2',
								t.bg
							)}
						/>
						<Reveal className={cx('pl-12 md:pl-0', right ? 'md:col-start-2' : 'md:text-right')}>
							<p className={cx('font-mono text-[13px] font-bold', t.text)}>{m.time}</p>
							<p className='font-display mt-1 text-[17px] font-medium tracking-[-0.01em]'>
								{m.who} <span className='font-sans text-[13px] font-medium text-faint'>· {m.role}</span>
							</p>
							<p className='mt-2 text-[15px] leading-relaxed text-muted'>{m.did}</p>
							{m.prompt && (
								<div className={cx('mt-4 flex flex-col gap-2', right ? 'items-start' : 'md:items-end')}>
									<p className='max-w-[400px] rounded-2xl rounded-br-md bg-brand px-4 py-2.5 text-left text-[14px] leading-snug text-white shadow-panel'>
										{m.prompt}
									</p>
									<p className='flex max-w-[400px] gap-2 rounded-2xl rounded-bl-md border border-line bg-panel px-4 py-2.5 text-left text-[14px] leading-snug shadow-panel'>
										<Sparkles className='mt-0.5 size-4 shrink-0 text-violet-500' />
										{m.reply}
									</p>
								</div>
							)}
						</Reveal>
					</li>
				);
			})}
		</ol>
	</div>
);

export default DayTimeline;
