import type { Metadata } from 'next';
import Link from 'next/link';
import { Check, Clock } from '@/components/ui/icons';
import { Accent, Button, Container, PageHero, Reveal, Section, SectionHead, cx } from '@/components/ui';
import StepMock from '@/components/mock/StepMock';
import { SignInMock, SiteMock } from '@/components/mock/mocks';
import CtaBand from '@/components/site/CtaBand';
import { STEPS } from '@/content/workflow';
import { tone } from '@/lib/tones';
import Pipeline from '@/components/viz/Pipeline';
import BuildPaths from '@/components/viz/BuildPaths';
import FlowCards from '@/components/flow/FlowCards';

export const metadata: Metadata = {
	title: 'Workflow',
	description:
		'How a business goes from an idea to a running app on MINT: start a project, describe your data, shape the pages, bring in the team, run it, go live.',
	alternates: { canonical: '/workflow' },
};

const LOOP = [
	{ t: 'Notice', b: 'Someone on the team needs a new field, a filter, a report.', c: 'amber' as const },
	{ t: 'Draft', b: 'Change the model or the page in a draft — or ask your AI to. The live app is untouched.', c: 'violet' as const },
	{ t: 'Preview', b: 'See the table, form and page exactly as your team will.', c: 'sky' as const },
	{ t: 'Publish', b: 'One click. Every version is kept, so you can go back.', c: 'emerald' as const },
];

export default function WorkflowPage() {
	return (
		<>
			<PageHero
				eyebrow='The basic workflow'
				color='violet'
				title={
					<>
						Six steps from idea to <Accent>running business.</Accent>
					</>
				}
				lead='MINT is built around one path: the person who understands how the business works builds the tool that runs it. Here is every step, and what you get at each one.'>
				<Button
					href='/waitlist'
					variant='brand'
					arrow>
					Join the waitlist
				</Button>
				<Button
					href='/workflow/website'
					variant='secondary'>
					Build a website
				</Button>
			</PageHero>

			<Container className='-mt-6 pb-20'>
				<Reveal>
					<Pipeline />
				</Reveal>
			</Container>

			<Section className='border-t border-line'>
				<SectionHead
					eyebrow='More workflows'
					color='amber'
					title={
						<>
							Building something specific? <Accent>Follow its workflow.</Accent>
						</>
					}
					lead='Step-by-step guides for a website, an API, an admin panel — and how models are built and changed.'
				/>
				<FlowCards except='/workflow' />
			</Section>

			<Section tone='subtle'>
				<SectionHead
					align='center'
					eyebrow='Before you start'
					color='emerald'
					title={
						<>
							Every step works two ways: <Accent>blocks or AI.</Accent>
						</>
					}
					lead='Each step below can be done with the visual builders, or by asking your AI assistant — and you can mix the two. Everything ends up in the same visual editor.'
				/>
				<BuildPaths />
			</Section>

			{/* step index */}
			<div className='sticky top-16 z-30 hidden border-y border-line bg-bg/90 md:block'>
				<Container className='flex h-12 items-center gap-1 overflow-x-auto'>
					{STEPS.map(s => (
						<Link
							key={s.id}
							href={`#${s.id}`}
							className='caps flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 !text-[10.5px] text-muted transition-colors hover:bg-subtle hover:text-fg'>
							<span className={cx('size-2 rounded-full', tone(s.color).bg)} />
							{s.title}
						</Link>
					))}
				</Container>
			</div>

			{STEPS.map((s, i) => (
				<section
					key={s.id}
					id={s.id}
					className={cx('border-t border-line py-20 md:py-28', i % 2 === 1 && 'bg-subtle')}>
					<Container>
						<div className='grid items-center gap-12 lg:grid-cols-2 lg:gap-20'>
							<Reveal className={cx(i % 2 === 1 && 'lg:order-2')}>
								<div className='mb-6 flex items-center gap-3'>
									<span className={cx('glyph size-12 rounded-2xl font-mono text-[14px]', tone(s.color).text)}>
										{s.n}
									</span>
									<span className={cx('inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-mono text-[12px] font-medium', tone(s.color).soft, tone(s.color).text)}>
										<Clock className='size-3.5' /> {s.time}
									</span>
								</div>
								<h2 className='text-[36px] font-extralight leading-[1.04] tracking-[-0.04em] md:text-[52px]'>{s.title}</h2>
								<p className='mt-5 text-[17px] leading-[1.7] text-muted'>{s.body}</p>
								<ul className='mt-8 flex flex-col gap-3'>
									{s.points.map(p => (
										<li
											key={p}
											className='flex gap-3 text-[15px]'>
											<span className={cx('mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full', tone(s.color).soft, tone(s.color).text)}>
												<Check className='size-3' />
											</span>
											{p}
										</li>
									))}
								</ul>
							</Reveal>
							<Reveal
								delay={100}
								className={cx(i % 2 === 1 && 'lg:order-1')}>
								{s.mock === 'live' ? (
									<div className='grid gap-5'>
										<StepMock mock='live' />
										<div className='grid gap-5 sm:grid-cols-2'>
											<SignInMock />
											<SiteMock />
										</div>
									</div>
								) : (
									<StepMock mock={s.mock} />
								)}
							</Reveal>
						</div>
					</Container>
				</section>
			))}

			{/* the loop */}
			<Section tone='subtle'>
				<SectionHead
					eyebrow='After launch'
					color='violet'
					title={
						<>
							The business changes. <Accent>So does the app</Accent> — the same afternoon.
						</>
					}
					lead='Going live isn’t the end of the workflow; it’s the start of a loop. Every change goes through a draft and a preview, so improving the tool never breaks the work.'
				/>
				<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
					{LOOP.map((l, i) => (
						<Reveal
							key={l.t}
							delay={i * 80}
							className='relative rounded-2xl border border-line bg-panel p-6 shadow-panel'>
							<span className={cx('glyph mb-6 size-10 rounded-xl font-mono text-[13px]', tone(l.c).text)}>
								0{i + 1}
							</span>
							<h3 className='text-[19px] font-medium tracking-[-0.02em]'>{l.t}</h3>
							<p className='mt-2 text-[14px] leading-relaxed text-muted'>{l.b}</p>
							{i < LOOP.length - 1 && (
								<span
									aria-hidden
									className='absolute -right-[15px] top-1/2 z-10 hidden size-7 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-panel text-[13px] text-muted shadow-panel lg:flex'>
									→
								</span>
							)}
						</Reveal>
					))}
				</div>
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
}
