import Link from 'next/link';
import { ReactNode } from 'react';
import { Check, Clock, MapPin } from '@/components/ui/icons';
import { Accent, Button, Container, PageHero, Reveal, Section, SectionHead, cx } from '@/components/ui';
import CtaBand from '@/components/site/CtaBand';
import type { Flow, Who } from '@/content/flows';
import { tone } from '@/lib/tones';
import FlowArt from './arts';
import FlowCards from './FlowCards';

/**
 * One step-by-step workflow (content/flows.ts): the hero with an index of the
 * steps, the steps on a numbered rail — each with where it happens, who does
 * it and its drawing — then what's included, and the other workflows.
 */

const WHO: Record<Who, { label: string; cls: string }> = {
	you: { label: 'You', cls: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300' },
	ai: { label: 'Your AI', cls: 'bg-violet-50 text-violet-700 dark:bg-violet-400/10 dark:text-violet-300' },
	mint: { label: 'MINT', cls: 'bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300' },
};

export const WhoBadge = ({ who }: { who: Who }) => (
	<span className={cx('caps inline-flex items-center rounded-full px-2.5 py-1 !text-[10.5px] !font-normal', WHO[who].cls)}>{WHO[who].label}</span>
);

const StepIndex = ({ flow }: { flow: Flow }) => {
	const t = tone(flow.color);
	return (
		<div className='rounded-3xl border border-line bg-panel p-6 shadow-float'>
			<p className='caps text-faint'>You end with</p>
			<p className='mt-2 text-[17px] leading-snug'>{flow.result}</p>
			<p className={cx('mt-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[11.5px]', t.soft, t.text)}>
				<Clock className='size-3.5' /> {flow.time}
			</p>
			<ol className='mt-6 flex flex-col border-t border-line pt-4'>
				{flow.steps.map((s, i) => (
					<li key={s.title}>
						<Link
							href={`#step-${i + 1}`}
							className='group flex items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-subtle'>
							<span className={cx('glyph size-7 rounded-full font-mono text-[11px]', t.text)}>
								{i + 1}
							</span>
							<span className='flex-1 text-[14px]'>{s.title}</span>
							<span className='hidden gap-1 sm:flex'>
								{s.who.map(w => (
									<span
										key={w}
										title={WHO[w].label}
										className={cx('size-2 rounded-full', w === 'you' ? 'bg-emerald-500' : w === 'ai' ? 'bg-violet-500' : 'bg-cyan-500')}
									/>
								))}
							</span>
						</Link>
					</li>
				))}
			</ol>
			<div className='mt-4 flex flex-wrap gap-1.5 border-t border-line pt-4'>
				{(['you', 'ai', 'mint'] as Who[]).map(w => (
					<WhoBadge
						key={w}
						who={w}
					/>
				))}
			</div>
		</div>
	);
};

const FlowPage = ({ flow, children }: { flow: Flow; children?: ReactNode }) => {
	const t = tone(flow.color);
	return (
		<>
			<PageHero
				eyebrow={flow.eyebrow}
				color={flow.color}
				title={
					<>
						{flow.title} <Accent>{flow.accent}</Accent>
					</>
				}
				lead={flow.lead}
				aside={<StepIndex flow={flow} />}>
				<Button
					href='/waitlist'
					variant='brand'
					arrow>
					Join the waitlist
				</Button>
				<Button
					href='/features'
					variant='secondary'>
					All features
				</Button>
			</PageHero>

			{/* the steps, on a rail */}
			<section className='relative border-t border-line py-20 md:py-28'>
				<Container>
					<SectionHead
						eyebrow='Step by step'
						color={flow.color}
						title={
							<>
								{flow.steps.length} steps. <Accent>Here’s each one.</Accent>
							</>
						}
					/>
					<div className='relative'>
						<span
							aria-hidden
							className={cx('absolute bottom-8 left-[23px] top-2 hidden w-px bg-gradient-to-b opacity-40 md:block', t.grad)}
						/>
						<ol className='flex flex-col gap-20 md:gap-28'>
							{flow.steps.map((s, i) => (
								<li
									key={s.title}
									id={`step-${i + 1}`}
									className='relative grid grid-cols-[minmax(0,1fr)] gap-10 md:pl-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16'>
									<span
										className={cx(
											'glyph absolute left-0 top-0 size-12 rounded-2xl font-mono text-[14px] ring-8 ring-bg',
											t.text
										)}>
										{String(i + 1).padStart(2, '0')}
									</span>
									<Reveal className='pl-16 md:pl-0'>
										<div className='mb-4 flex flex-wrap items-center gap-2'>
											{s.who.map(w => (
												<WhoBadge
													key={w}
													who={w}
												/>
											))}
											{s.where && (
												<span className='inline-flex items-center gap-1.5 font-mono text-[11.5px] text-faint'>
													<MapPin className='size-3.5' />
													{s.where}
												</span>
											)}
										</div>
										<h3 className='text-[26px] font-extralight leading-[1.1] md:text-[34px]'>{s.title}</h3>
										<p className='mt-4 text-[16.5px] leading-[1.75] text-muted'>{s.body}</p>
										<ul className='mt-6 flex flex-col gap-2.5'>
											{s.points.map(p => (
												<li
													key={p}
													className='flex gap-3 text-[15px]'>
													<span className={cx('mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full', t.soft, t.text)}>
														<Check className='size-3' />
													</span>
													{p}
												</li>
											))}
										</ul>
									</Reveal>
									<Reveal delay={100}>
										<FlowArt art={s.art} />
									</Reveal>
								</li>
							))}
						</ol>
					</div>
				</Container>
			</section>

			{children}

			{/* included */}
			<Section tone='ink'>
				<SectionHead
					dark
					eyebrow='Included'
					color={flow.color}
					title={flow.includedTitle}
					lead={flow.includedLead}
				/>
				<div className='grid gap-4 md:grid-cols-3'>
					{flow.included.map((g, i) => (
						<Reveal
							key={g.title}
							delay={i * 80}
							className='rounded-2xl border border-white/10 bg-white/[0.04] p-6'>
							<span className='glyph glyph-ink mb-6 size-11 rounded-xl text-white/85'>
								<g.icon
									weight='light'
									className='size-[22px]'
								/>
							</span>
							<h3 className='text-[17px] font-light'>{g.title}</h3>
							<ul className='mt-4 flex flex-col gap-2.5'>
								{g.items.map(it => (
									<li
										key={it}
										className='flex gap-2.5 text-[14px] text-white/70'>
										<Check className='mt-1 size-3 shrink-0 text-emerald-400' />
										{it}
									</li>
								))}
							</ul>
						</Reveal>
					))}
				</div>
			</Section>

			<Section>
				<SectionHead
					eyebrow='More workflows'
					color='violet'
					title={
						<>
							Pick the next thing <Accent>to build.</Accent>
						</>
					}
				/>
				<FlowCards except={flow.href} />
			</Section>

			<CtaBand
				title={
					<>
						Start at step one. <Accent>We’ll save you a spot.</Accent>
					</>
				}
			/>
		</>
	);
};

export default FlowPage;
