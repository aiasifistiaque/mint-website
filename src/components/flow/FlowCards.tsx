import Link from 'next/link';
import { ArrowUpRight } from '@/components/ui/icons';
import { Reveal, cx } from '@/components/ui';
import { ALL_FLOWS } from '@/content/flows';
import { tone } from '@/lib/tones';

/** Cards for the workflows (the header's Workflows menu), minus `except`. */
const FlowCards = ({ except }: { except?: string }) => {
	const flows = ALL_FLOWS.filter(f => f.href !== except);
	return (
		<div className={cx('grid gap-4 sm:grid-cols-2', flows.length % 3 === 0 ? 'lg:grid-cols-3' : flows.length === 5 ? 'lg:grid-cols-5' : 'lg:grid-cols-4')}>
			{flows.map((f, i) => {
				const t = tone(f.color);
				return (
					<Reveal
						key={f.href}
						delay={i * 60}>
						<Link
							href={f.href}
							className='group flex h-full flex-col rounded-2xl border border-line bg-panel p-5 shadow-panel transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-float'>
							<div className='mb-8 flex items-start justify-between'>
								<span className={cx('glyph size-10 rounded-xl', t.text)}>
									<f.icon
										weight='light'
										className='size-5'
									/>
								</span>
								<ArrowUpRight className='size-4 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
							</div>
							<h3 className='text-[15px] font-normal'>{f.label}</h3>
							<p className='mt-1.5 text-[13.5px] leading-relaxed text-muted'>{f.blurb}</p>
						</Link>
					</Reveal>
				);
			})}
		</div>
	);
};

export default FlowCards;
