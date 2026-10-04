import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import Link from 'next/link';
import { Boxes, Rocket } from '@/components/ui/icons';
import { Accent, Container, IconTile, PageHero, Reveal, cx } from '@/components/ui';
import CtaBand from '@/components/site/CtaBand';
import { USE_CASES } from '@/content/useCases';
import { tone, type Tone } from '@/lib/tones';

export const metadata: Metadata = pageMeta({
	title: 'Use cases',
	description:
		'What teams build on MINT: CRMs, bookings, inventory, orders, invoices, support desks, company websites and mobile app back ends.',
	path: '/use-cases',
});

const COLORS: Tone[] = ['emerald', 'sky', 'violet', 'amber', 'rose', 'cyan', 'violet', 'emerald'];

export default function UseCasesPage() {
	return (
		<>
			<PageHero
				eyebrow='Use cases'
				color='emerald'
				title={
					<>
						If you keep track of it, <Accent>you can run it on MINT.</Accent>
					</>
				}
				lead='Eight things teams build in their first week — each a recipe of a few models, and what goes live on their site or app.'
			/>

			<Container className='pb-24'>
				<div className='mb-10 flex flex-wrap gap-2'>
					{USE_CASES.map((u, i) => (
						<Link
							key={u.id}
							href={`#${u.id}`}
							className={cx('inline-flex items-center gap-2 rounded-full px-4 py-2 text-[14px] font-medium', tone(COLORS[i]).soft, tone(COLORS[i]).text)}>
							<u.icon className='size-4' />
							{u.title}
						</Link>
					))}
				</div>
				<div className='grid gap-5 md:grid-cols-2'>
					{USE_CASES.map((u, i) => {
						const t = tone(COLORS[i]);
						return (
							<Reveal
								key={u.id}
								delay={(i % 2) * 80}>
								<article
									id={u.id}
									className='group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-panel p-7 shadow-panel transition-shadow hover:shadow-float'>
									<div
										aria-hidden
										className={cx('absolute -right-16 -top-16 size-48 rounded-full bg-gradient-to-br opacity-15 transition-opacity group-hover:opacity-25', t.grad)}
									/>
									<IconTile
										color={COLORS[i]}
										solid
										className='relative'>
										<u.icon />
									</IconTile>
									<h2 className='relative mt-6 text-[28px] font-normal tracking-[-0.03em]'>{u.title}</h2>
									<p className='relative mt-2 text-[15.5px] leading-relaxed text-muted'>{u.pitch}</p>
									<div className='relative mt-6 rounded-2xl bg-subtle p-4'>
										<p className='mb-2.5 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.1em] text-faint'>
											<Boxes className='size-3.5' /> Models
										</p>
										<div className='flex flex-wrap items-center gap-1.5'>
											{u.models.map((m, j) => (
												<span
													key={m}
													className='inline-flex items-center gap-1.5'>
													<span className={cx('rounded-lg border bg-panel px-2.5 py-1 text-[13px] font-semibold', t.border)}>{m}</span>
													{j < u.models.length - 1 && <span className='text-faint'>→</span>}
												</span>
											))}
										</div>
									</div>
									<p className='relative mt-4 flex gap-2 text-[14.5px] leading-relaxed'>
										<Rocket className={cx('mt-0.5 size-4 shrink-0', t.text)} />
										<span>
											<span className='font-semibold'>Goes live: </span>
											<span className='text-muted'>{u.live}</span>
										</span>
									</p>
								</article>
							</Reveal>
						);
					})}
				</div>
			</Container>

			<CtaBand
				title={
					<>
						Don’t see yours? <Accent>Tell us what you’d build.</Accent>
					</>
				}
			/>
		</>
	);
}
