import { ArrowUpRight, Check, Minus, X } from '@/components/ui/icons';
import { Accent, Container, Dot, Eyebrow, IconTile, Pill, Reveal, Section, SectionHead, TextLink, cx } from '@/components/ui';
import { WaitlistInline } from '@/components/waitlist/WaitlistForm';
import WorkflowTabs from '@/components/home/WorkflowTabs';
import FlowCards from '@/components/flow/FlowCards';
import HeroVisual from '@/components/home/HeroVisual';
import StepMock from '@/components/mock/StepMock';
import Pipeline from '@/components/viz/Pipeline';
import DataFlow from '@/components/viz/DataFlow';
import AiFlow from '@/components/viz/AiFlow';
import DayTimeline from '@/components/viz/DayTimeline';
import ProductCards from '@/components/viz/ProductCards';
import BuildPaths from '@/components/viz/BuildPaths';
import StackDiagram from '@/components/viz/StackDiagram';
import { NOT_TO_BUILD, POSITIONING } from '@/content/platform';
import CtaBand from '@/components/site/CtaBand';
import Faq from '@/components/site/Faq';
import { STEPS } from '@/content/workflow';
import { FEATURE_GROUPS } from '@/content/features';
import { USE_CASES } from '@/content/useCases';
import { PERSONAS } from '@/content/personas';
import { tone } from '@/lib/tones';

const HIGHLIGHTS = ['Models', 'Pages', 'Dashboard', 'History & undo', 'Roles', 'Public API', 'Customer accounts', 'Connect your AI'].flatMap(t =>
	FEATURE_GROUPS.flatMap(g => g.features.filter(f => f.title === t).map(f => ({ ...f, color: g.color })))
);

const STATS = [
	{ v: '6', l: 'steps from idea to live', c: 'text-gradient' },
	{ v: '0', l: 'servers to run or deploy', c: 'text-gradient-warm' },
	{ v: '1', l: 'workspace for team, site and app', c: 'text-gradient' },
	{ v: 'Any', l: 'AI assistant that speaks MCP', c: 'text-gradient-warm' },
];

type Mark = 'yes' | 'no' | 'some';
const COMPARE: { row: string; sheet: Mark; custom: Mark; mint: Mark }[] = [
	{ row: 'Ready the same day', sheet: 'yes', custom: 'no', mint: 'yes' },
	{ row: 'A real database with relations', sheet: 'no', custom: 'yes', mint: 'yes' },
	{ row: 'Forms, filters and a page per record', sheet: 'no', custom: 'yes', mint: 'yes' },
	{ row: 'Roles and per-project access', sheet: 'some', custom: 'yes', mint: 'yes' },
	{ row: 'Full history with undo', sheet: 'some', custom: 'some', mint: 'yes' },
	{ row: 'An API for your site and app', sheet: 'no', custom: 'yes', mint: 'yes' },
	{ row: 'Change it yourself, by asking your AI', sheet: 'no', custom: 'no', mint: 'yes' },
];

const MarkIcon = ({ m }: { m: Mark }) =>
	m === 'yes' ? (
		<span className='mx-auto inline-flex size-6 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-400/15 text-emerald-600 dark:text-emerald-400'>
			<Check className='size-3.5' />
		</span>
	) : m === 'no' ? (
		<span className='mx-auto inline-flex size-6 items-center justify-center rounded-full bg-rose-50 dark:bg-rose-400/10 text-rose-400'>
			<X className='size-3.5' />
		</span>
	) : (
		<span className='mx-auto inline-flex size-6 items-center justify-center rounded-full bg-amber-50 dark:bg-amber-400/10 text-amber-500'>
			<Minus className='size-3.5' />
		</span>
	);

export default function Home() {
	return (
		<>
			{/* ------------------------------------------------------- hero */}
			<section className='relative overflow-hidden pb-28'>
				<div
					aria-hidden
					className='mesh pointer-events-none absolute inset-0'
				/>
				<div
					aria-hidden
					className='bg-grid pointer-events-none absolute inset-0'
				/>
				<Container className='relative pt-14 md:pt-20'>
					<div className='mx-auto flex max-w-[900px] flex-col items-center text-center'>
						<Pill className='fade-in mb-8'>
							<Dot /> Backend as a service · early access
						</Pill>
						<h1 className='fade-in text-balance text-[40px] font-extralight leading-[1] tracking-[-0.05em] [animation-delay:60ms] sm:text-[56px] md:text-[70px]'>
							{POSITIONING.title} <Accent>{POSITIONING.accent}</Accent>
						</h1>
						<p className='fade-in mt-7 max-w-[640px] text-pretty text-[18px] leading-[1.7] text-muted [animation-delay:120ms] md:text-[20px]'>
							{POSITIONING.lead}
						</p>
						<div className='fade-in mt-10 flex w-full flex-col items-center [animation-delay:180ms]'>
							<WaitlistInline align='center' />
						</div>
					</div>
					<div className='fade-in mt-16 [animation-delay:260ms] md:mt-20'>
						<HeroVisual />
					</div>
				</Container>
			</section>

			{/* --------------------------------------------- what people build */}
			<section className='border-y border-line bg-panel py-7'>
				<div className='relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]'>
					<div className='marquee flex w-max gap-3'>
						{[...USE_CASES, ...USE_CASES].map((u, i) => {
							const t = tone((['emerald', 'sky', 'violet', 'amber', 'rose', 'cyan'] as const)[i % 6]);
							return (
								<a
									key={`${u.id}-${i}`}
									href={`/use-cases#${u.id}`}
									aria-hidden={i >= USE_CASES.length}
									tabIndex={i >= USE_CASES.length ? -1 : undefined}
									className='inline-flex items-center gap-2.5 rounded-full border border-line bg-panel px-4 py-2 text-[14px] font-medium transition-colors hover:border-line-strong'>
									<span className={cx('inline-flex size-7 items-center justify-center rounded-full', t.soft, t.text)}>
										<u.icon className='size-3.5' />
									</span>
									{u.title}
								</a>
							);
						})}
					</div>
				</div>
			</section>

			{/* ---------------------------------------------- what you build */}
			<Section id='build'>
				<SectionHead
					eyebrow='One platform'
					color='emerald'
					title={
						<>
							Backends, APIs, admin panels and websites. <Accent>One place.</Accent>
						</>
					}
					lead='Whatever you’re building — the back office for a shop, the API for a mobile app, a client portal or a company website — it starts from the same models, in the same workspace.'
				/>
				<ProductCards />
			</Section>

			{/* --------------------------------------------- two ways to build */}
			<Section
				tone='subtle'
				id='two-ways'>
				<SectionHead
					align='center'
					eyebrow='Two ways to build'
					color='violet'
					title={
						<>
							Use the blocks. <Accent>Or let AI build it.</Accent>
						</>
					}
					lead='Click your backend together with visual builders, or describe it to your AI assistant. Either way you land in the same place: your data, edited visually — no SQL, no admin screens to code.'
				/>
				<BuildPaths />
			</Section>

			{/* ------------------------------------------- backend as a service */}
			<Section
				tone='ink'
				id='baas'>
				<SectionHead
					dark
					align='center'
					eyebrow='Backend as a service'
					color='cyan'
					title={
						<>
							The whole stack, <Accent>live the moment you save.</Accent>
						</>
					}
					lead='A database, an API with auth, and the admin panel and back office on top — hosted, secured and kept up to date for you.'
				/>
				<StackDiagram dark />
				<div className='mx-auto mt-14 max-w-[980px]'>
					<p className='mb-4 text-center font-mono text-[12px] uppercase tracking-[0.14em] text-white/50'>What you don’t have to build</p>
					<div className='flex flex-wrap justify-center gap-2'>
						{NOT_TO_BUILD.map(n => (
							<span
								key={n}
								className='inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[13px] text-white/75'>
								<Check className='size-3.5 text-emerald-400' />
								{n}
							</span>
						))}
					</div>
					<div className='mt-10 flex justify-center'>
						<TextLink
							href='/backend'
							className='text-white'>
							Explore backend as a service
						</TextLink>
					</div>
				</div>
			</Section>

			{/* -------------------------------------------------- pipeline */}
			<Section id='workflow'>
				<SectionHead
					eyebrow='The workflow'
					title={
						<>
							From an idea to a running business, <Accent>in six steps.</Accent>
						</>
					}
					lead='No tickets, no sprints, no handover. The person who knows how the business works builds the tool that runs it — and changes it the day the business changes.'
				/>
				<Reveal>
					<Pipeline />
				</Reveal>
				<div className='mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4'>
					{STATS.map(s => (
						<div
							key={s.l}
							className='bg-panel p-6'>
							<p className={cx('font-display text-[44px] font-extralight leading-none tracking-[-0.02em]', s.c)}>{s.v}</p>
							<p className='mt-2 text-[14px] text-muted'>{s.l}</p>
						</div>
					))}
				</div>
			</Section>

			{/* ---------------------------------------------- step by step */}
			<Section
				tone='subtle'
				id='steps'>
				<SectionHead
					eyebrow='Step by step'
					color='violet'
					title={
						<>
							See every step, <Accent>exactly as it looks.</Accent>
						</>
					}
					lead='Pick a step to see the screen you’ll use. It plays through on its own, too.'
				/>
				<WorkflowTabs
					mocks={STEPS.map(s => (
						<StepMock
							key={s.id}
							mock={s.mock}
						/>
					))}
				/>
				<div className='mt-14'>
					<TextLink href='/workflow'>Walk through the whole workflow</TextLink>
				</div>
			</Section>

			{/* ---------------------------------------------- workflows */}
			<Section id='workflows'>
				<SectionHead
					eyebrow='Workflows'
					color='amber'
					title={
						<>
							A website, an API, an admin panel — <Accent>step by step.</Accent>
						</>
					}
					lead='Each workflow walks through what to do, who does it — you, your AI or MINT — and what you get. Security, SEO and analytics included, so there’s nothing left to worry about.'
				/>
				<FlowCards />
			</Section>

			{/* ------------------------------------------------ who it's for */}
			<Section id='who'>
				<SectionHead
					eyebrow='Who it’s for'
					color='amber'
					title={
						<>
							Built for anyone who runs <Accent warm>something real.</Accent>
						</>
					}
					lead='A café owner and a developer want different things from software. MINT gives both of them what they came for.'
				/>
				<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
					{PERSONAS.map((p, i) => {
						const t = tone(p.color);
						return (
							<Reveal
								key={p.id}
								delay={(i % 3) * 70}>
								<a
									href={`/who-its-for#${p.id}`}
									className='group flex h-full flex-col rounded-2xl border border-line bg-panel p-6 shadow-panel transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-float'>
									<div className='flex items-start justify-between'>
										<IconTile
											color={p.color}
											solid>
											<p.icon />
										</IconTile>
										<ArrowUpRight className='size-4 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
									</div>
									<h3 className='mt-5 text-[19px] font-medium tracking-[-0.02em]'>{p.who}</h3>
									<p className='text-[13px] text-faint'>{p.examples}</p>
									<p className='mt-3 text-[14.5px] leading-relaxed text-muted'>{p.gain}</p>
									<div className='mt-5 flex flex-wrap gap-1.5'>
										{p.builds.map(b => (
											<span
												key={b}
												className={cx('rounded-full px-2.5 py-1 text-[12px] font-medium', t.soft, t.text)}>
												{b}
											</span>
										))}
									</div>
								</a>
							</Reveal>
						);
					})}
				</div>
			</Section>

			{/* -------------------------------------------------- a day with */}
			<Section
				tone='subtle'
				id='a-day'>
				<SectionHead
					align='center'
					eyebrow='A day with MINT'
					color='rose'
					title={
						<>
							Your AI, <Accent>in the everyday.</Accent>
						</>
					}
					lead='Not a launch-day trick. Follow one guesthouse through an ordinary Tuesday — and see where a sentence to the AI replaces a ticket, a report or a late night.'
				/>
				<DayTimeline />
			</Section>

			{/* --------------------------------------------------------- AI */}
			<Section
				tone='ink'
				id='ai'>
				<SectionHead
					dark
					eyebrow='Build with AI'
					color='violet'
					title={
						<>
							Say it in a sentence. <Accent>Watch it appear.</Accent>
						</>
					}
					lead='Connect Claude, ChatGPT, Cursor — any assistant that speaks MCP — to a project. Describe what you need; it plans with you and builds with the same checks as the builder, never doing more than your role allows.'
				/>
				<AiFlow />
				<div className='mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-[14px] text-white/60'>
					{['Your AI subscription does the thinking', 'Keys per project — read-only or builder', 'Every change lands in history'].map(t => (
						<span
							key={t}
							className='inline-flex items-center gap-2'>
							<Check className='size-4 text-emerald-400' /> {t}
						</span>
					))}
					<TextLink
						href='/ai'
						className='text-white'>
						How AI building works
					</TextLink>
				</div>
			</Section>

			{/* ---------------------------------------------------- data flow */}
			<Section id='developers'>
				<SectionHead
					eyebrow='One source of truth'
					color='cyan'
					title={
						<>
							Your team, your site, your app — <Accent>one set of data.</Accent>
						</>
					}
					lead='What your team edits in MINT is what your website shows and your mobile app reads. Switch on the public API per model, let customers sign in, and stop copying data between tools.'
				/>
				<Reveal className='rounded-3xl border border-line bg-panel p-4 shadow-panel md:p-8'>
					<DataFlow />
				</Reveal>
				<div className='mt-10'>
					<TextLink href='/developers'>Read the developer overview</TextLink>
				</div>
			</Section>

			{/* ---------------------------------------------------- the why */}
			<Section
				tone='subtle'
				id='why'>
				<div className='grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20'>
					<SectionHead
						className='mb-0 md:mb-0'
						eyebrow='Why MINT'
						color='rose'
						title={
							<>
								Spreadsheets break. <Accent warm>Building your own backend</Accent> takes months.
							</>
						}
						lead='Most businesses run on a spreadsheet that’s outgrown itself; most developers rebuild the same backend and admin screens for every project. MINT is the third way: a real backend with the admin panel built in — ready today, and yours to change.'
					/>
					<Reveal>
						<div className='overflow-hidden rounded-2xl border border-line bg-panel shadow-panel'>
							<div className='grid grid-cols-[1.6fr_repeat(3,1fr)] items-center border-b border-line px-5 py-4 text-center text-[13px] font-semibold'>
								<span />
								<span className='text-muted'>Spreadsheet</span>
								<span className='text-muted'>Build your own</span>
								<span className='mx-auto rounded-full bg-brand px-3 py-1 text-white'>MINT</span>
							</div>
							{COMPARE.map((c, i) => (
								<div
									key={c.row}
									className={cx(
										'grid grid-cols-[1.6fr_repeat(3,1fr)] items-center px-5 py-3.5 text-center text-[14px]',
										i > 0 && 'border-t border-line'
									)}>
									<span className='pr-3 text-left font-medium'>{c.row}</span>
									<MarkIcon m={c.sheet} />
									<MarkIcon m={c.custom} />
									<MarkIcon m={c.mint} />
								</div>
							))}
						</div>
					</Reveal>
				</div>
			</Section>

			{/* --------------------------------------------------- features */}
			<Section id='features'>
				<SectionHead
					eyebrow='Everything included'
					color='sky'
					title='One workspace instead of a stack of tools.'
					lead='The parts every business tool needs — built once, done properly, and shared by every project you make.'
				/>
				<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
					{HIGHLIGHTS.map((f, i) => (
						<Reveal
							key={f.title}
							delay={(i % 4) * 60}
							className='rounded-2xl border border-line bg-panel p-6 shadow-panel transition-shadow hover:shadow-float'>
							<IconTile color={f.color}>
								<f.icon />
							</IconTile>
							<h3 className='mt-5 text-[17px] font-medium tracking-[-0.015em]'>{f.title}</h3>
							<p className='mt-1.5 text-[14px] leading-relaxed text-muted'>{f.body}</p>
						</Reveal>
					))}
				</div>
				<div className='mt-10'>
					<TextLink href='/features'>See all features</TextLink>
				</div>
			</Section>

			{/* --------------------------------------------------------- FAQ */}
			<Section
				tone='subtle'
				id='faq'>
				<div className='grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
					<div>
						<Eyebrow color='violet'>Questions</Eyebrow>
						<h2 className='text-[34px] font-extralight leading-[1.06] tracking-[-0.035em] md:text-[50px]'>
							Good to <Accent>know.</Accent>
						</h2>
					</div>
					<Faq />
				</div>
			</Section>

			<CtaBand />
		</>
	);
}
