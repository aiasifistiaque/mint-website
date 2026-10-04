import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { Accent, Container, PageHero, Reveal, cx } from '@/components/ui';
import CtaBand from '@/components/site/CtaBand';
import { RELEASES } from '@/content/changelog';

export const metadata: Metadata = pageMeta({
	title: 'Changelog',
	description:
		'What’s new in MINT — every improvement, newest first.',
	path: '/changelog',
});

const TAG = {
	New: 'bg-emerald-100 dark:bg-emerald-400/15 text-emerald-700 dark:text-emerald-300',
	Improved: 'bg-violet-100 dark:bg-violet-400/15 text-violet-700 dark:text-violet-300',
	Fixed: 'bg-amber-100 dark:bg-amber-400/15 text-amber-700 dark:text-amber-300',
};
const DOT = { New: 'bg-emerald-500', Improved: 'bg-violet-500', Fixed: 'bg-amber-500' };

const fmt = (d: string) =>
	new Date(`${d}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

export default function ChangelogPage() {
	return (
		<>
			<PageHero
				eyebrow='Changelog'
				color='violet'
				title={
					<>
						What’s new <Accent>in MINT.</Accent>
					</>
				}
				lead='MINT improves every week — and every project gets each improvement the moment it ships. Here’s what changed, newest first.'
			/>
			<Container className='pb-24'>
				<ol className='relative max-w-[860px]'>
					<span
						aria-hidden
						className='absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-emerald-300 via-violet-300 to-transparent md:left-[187px]'
					/>
					{RELEASES.map(r => (
						<li
							key={r.date + r.title}
							className='relative grid gap-2 pb-14 pl-10 md:grid-cols-[160px_1fr] md:gap-12 md:pl-0'>
							<span
								aria-hidden
								className={cx(
									'absolute left-0 top-1.5 size-[15px] rounded-full border-[3px] border-bg shadow md:left-[180px]',
									DOT[r.tag || 'New']
								)}
							/>
							<time
								dateTime={r.date}
								className='pt-1 font-mono text-[13px] text-faint md:text-right'>
								{fmt(r.date)}
							</time>
							<Reveal className='md:pl-6'>
								{r.tag && <span className={cx('mb-3 inline-block rounded-full px-2.5 py-0.5 text-[12px] font-bold', TAG[r.tag])}>{r.tag}</span>}
								<h2 className='text-[24px] font-normal tracking-[-0.025em]'>{r.title}</h2>
								<p className='mt-2 text-[16px] leading-relaxed text-muted'>{r.summary}</p>
								<ul className='mt-4 flex flex-col gap-2'>
									{r.items.map(it => (
										<li
											key={it}
											className='flex gap-3 text-[15px] leading-relaxed'>
											<span className={cx('mt-2.5 size-1.5 shrink-0 rounded-full', DOT[r.tag || 'New'])} />
											{it}
										</li>
									))}
								</ul>
							</Reveal>
						</li>
					))}
				</ol>
			</Container>
			<CtaBand />
		</>
	);
}
