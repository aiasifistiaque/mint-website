import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Sparkles, X, Check } from '@/components/ui/icons';
import { Accent, Button, Container, IconTile, PageHero, Reveal, Section, SectionHead, cx } from '@/components/ui';
import DayTimeline from '@/components/viz/DayTimeline';
import CtaBand from '@/components/site/CtaBand';
import { PERSONAS } from '@/content/personas';
import { tone } from '@/lib/tones';

export const metadata: Metadata = {
	title: 'Who it’s for',
	description:
		'MINT is for small business owners, founders, operations teams, agencies, developers, clinics, schools and nonprofits — anyone who runs something real and needs software that fits.',
	alternates: { canonical: '/who-its-for' },
};

export default function WhoPage() {
	return (
		<>
			<PageHero
				eyebrow='Who it’s for'
				color='amber'
				title={
					<>
						For everyone who runs <Accent warm>something real.</Accent>
					</>
				}
				lead='The café owner, the founder, the ops lead, the agency, the developer and the clinic all need the same thing: software that fits how they work, that they can change themselves. That’s MINT.'
				aside={
					<div className='grid grid-cols-2 gap-3'>
						{PERSONAS.map((p, i) => (
							<Link
								key={p.id}
								href={`#${p.id}`}
								className={cx(
									'group flex items-center gap-3 rounded-2xl border border-line bg-panel p-3.5 shadow-panel transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-float',
									i % 2 === 1 && 'translate-y-6'
								)}>
								<IconTile
									color={p.color}
									solid
									className='size-10'>
									<p.icon />
								</IconTile>
								<span className='font-display text-[14px] font-medium leading-tight'>{p.who}</span>
							</Link>
						))}
					</div>
				}>
				<Button
					href='/waitlist'
					variant='brand'
					arrow>
					Join the waitlist
				</Button>
				<Button
					href='#a-day'
					variant='secondary'>
					See a day with MINT
				</Button>
			</PageHero>

			{PERSONAS.map((p, i) => {
				const t = tone(p.color);
				return (
					<section
						key={p.id}
						id={p.id}
						className={cx('py-20 md:py-28', i % 2 === 0 ? 'bg-subtle' : 'bg-bg')}>
						<Container>
							<div className='grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20'>
								<Reveal>
									<div className='mb-6 flex items-center gap-4'>
										<IconTile
											color={p.color}
											solid
											className='size-14 rounded-[18px] [&>svg]:size-6'>
											<p.icon />
										</IconTile>
										<div>
											<h2 className='text-[32px] font-light leading-tight tracking-[-0.035em] md:text-[42px]'>{p.who}</h2>
											<p className={cx('text-[14px] font-medium', t.text)}>{p.examples}</p>
										</div>
									</div>
									<div className='grid gap-3 sm:grid-cols-2'>
										<div className='rounded-2xl border border-rose-100 dark:border-rose-400/25 bg-rose-50/60 dark:bg-rose-400/10 p-5'>
											<p className='mb-2 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-rose-500'>
												<X className='size-3.5' /> Today
											</p>
											<p className='text-[15px] leading-relaxed text-fg/80'>{p.pain}</p>
										</div>
										<div className='rounded-2xl border border-emerald-100 dark:border-emerald-400/25 bg-emerald-50/60 dark:bg-emerald-400/10 p-5'>
											<p className='mb-2 inline-flex items-center gap-1.5 text-[12px] font-bold uppercase tracking-[0.12em] text-emerald-600 dark:text-emerald-400'>
												<Check className='size-3.5' /> With MINT
											</p>
											<p className='text-[15px] leading-relaxed text-fg/80'>{p.gain}</p>
										</div>
									</div>
									<p className='mt-8 mb-3 text-[13px] font-semibold text-muted'>What they build</p>
									<div className='flex flex-wrap gap-2'>
										{p.builds.map(b => (
											<span
												key={b}
												className={cx('rounded-full border px-3.5 py-1.5 text-[13.5px] font-medium', t.border, t.soft, t.text)}>
												{b}
											</span>
										))}
									</div>
								</Reveal>
								<Reveal
									delay={120}
									className='rounded-2xl border border-line bg-panel p-6 shadow-float'>
									<p className='mb-5 inline-flex items-center gap-2 text-[13px] font-semibold text-violet-600 dark:text-violet-400'>
										<Sparkles className='size-4' /> An ordinary day, with their AI
									</p>
									<div className='flex flex-col gap-3'>
										{p.asks.map(a => (
											<p
												key={a}
												className='ml-auto max-w-[92%] rounded-2xl rounded-br-md bg-brand px-4 py-3 text-[14.5px] leading-snug text-white'>
												{a.replace(/[“”]/g, '')}
											</p>
										))}
										<p className='mr-auto flex max-w-[92%] items-center gap-2 rounded-2xl rounded-bl-md border border-line px-4 py-3 text-[14px] text-muted'>
											<span className='flex gap-1'>
												{[0, 1, 2].map(d => (
													<span
														key={d}
														className={cx('size-1.5 animate-bounce rounded-full', t.bg)}
														style={{ animationDelay: `${d * 150}ms` }}
													/>
												))}
											</span>
											Working in your project…
										</p>
									</div>
								</Reveal>
							</div>
						</Container>
					</section>
				);
			})}

			<Section
				id='a-day'
				className='border-t border-line'>
				<SectionHead
					align='center'
					eyebrow='A day with MINT'
					color='rose'
					title={
						<>
							What it looks like <Accent>on a Tuesday.</Accent>
						</>
					}
					lead='One guesthouse, one ordinary day. The team works, the AI helps, the website books — and nobody waits for a developer.'
				/>
				<DayTimeline />
				<div className='mt-16 flex justify-center'>
					<Link
						href='/use-cases'
						className='group inline-flex items-center gap-2 text-[15px] font-semibold'>
						Browse use cases <ArrowRight className='size-4 transition-transform group-hover:translate-x-0.5' />
					</Link>
				</div>
			</Section>

			<CtaBand
				title={
					<>
						Whoever you are, <Accent>start with one project.</Accent>
					</>
				}
			/>
		</>
	);
}
