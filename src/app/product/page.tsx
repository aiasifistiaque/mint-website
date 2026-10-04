import type { Metadata } from 'next';
import {
	AppWindow,
	Boxes,
	Building2,
	Code,
	GitBranch,
	Globe,
	History,
	Images,
	LayoutDashboard,
	LayoutTemplate,
	Layers,
	PanelLeft,
	ShieldCheck,
	Users,
	Zap,
} from '@/components/ui/icons';
import { Accent, Button, Container, IconTile, PageHero, Reveal, Section, SectionHead, TextLink, cx } from '@/components/ui';
import { DashboardMock, RecordMock } from '@/components/mock/mocks';
import HeroVisual from '@/components/home/HeroVisual';
import DataFlow from '@/components/viz/DataFlow';
import CtaBand from '@/components/site/CtaBand';
import { APP } from '@/lib/config';
import { tone, type Tone } from '@/lib/tones';

export const metadata: Metadata = {
	title: 'Admin panel & back office',
	description:
		'The admin panel and back-office tools that come with every MINT backend: tables, forms, dashboards, roles, history, media and more — for every model, automatically.',
	alternates: { canonical: '/product' },
};

const PARTS: { icon: typeof Boxes; t: string; b: string; c: Tone }[] = [
	{ icon: Boxes, t: 'Models', b: 'The things you keep track of', c: 'emerald' },
	{ icon: LayoutTemplate, t: 'Pages', b: 'Tables, forms, detail pages', c: 'violet' },
	{ icon: PanelLeft, t: 'Sidebar', b: 'How people find their way', c: 'sky' },
	{ icon: LayoutDashboard, t: 'Dashboard', b: 'The numbers that matter', c: 'rose' },
	{ icon: Images, t: 'Media', b: 'Images, videos and files', c: 'amber' },
	{ icon: History, t: 'History', b: 'Every change, with undo', c: 'cyan' },
	{ icon: Code, t: 'API', b: 'Your data, on your site', c: 'violet' },
];

const UNDER: { icon: typeof Layers; t: string; b: string; c: Tone }[] = [
	{
		c: 'emerald',
		icon: Layers,
		t: 'Real models, not a grid',
		b: 'Every model is a real, validated database collection — required fields, allowed values, links that point at real records.',
	},
	{
		c: 'violet',
		icon: GitBranch,
		t: 'Drafts and versions',
		b: 'Page changes are drafted, previewed and published. Every published version is kept so you can compare and roll back.',
	},
	{
		c: 'amber',
		icon: ShieldCheck,
		t: 'Scoped on every request',
		b: 'Each project’s data belongs to its organization, and every request is checked against it — not just the screens.',
	},
	{
		c: 'cyan',
		icon: History,
		t: 'History on everything',
		b: 'Records keep their full history: who changed which field, from what to what, and when — with undo for mistakes.',
	},
	{
		c: 'rose',
		icon: Zap,
		t: 'Live the moment you save',
		b: 'No build step, no deploy. A saved model has its table, form, filters, page and API straight away.',
	},
	{
		c: 'sky',
		icon: Globe,
		t: 'Apps and websites alike',
		b: 'The same building blocks power an internal app and a public website — one tool to learn, one place for your data.',
	},
];

export default function ProductPage() {
	return (
		<>
			<PageHero
				eyebrow='Admin panel & back office'
				color='sky'
				title={
					<>
						An admin panel for every model. <Accent>A back office for every business.</Accent>
					</>
				}
				lead='Every backend on MINT comes with the panel your team works in: tables and forms for every model, dashboards, roles, history and notifications — shaped around your data, and nothing to code.'>
				<Button
					href='/waitlist'
					variant='brand'
					arrow>
					Join the waitlist
				</Button>
				<Button
					href='/workflow'
					variant='secondary'>
					See the workflow
				</Button>
			</PageHero>

			<Container className='pb-24'>
				<Reveal>
					<HeroVisual />
				</Reveal>
			</Container>

			{/* structure */}
			<Section tone='subtle'>
				<SectionHead
					eyebrow='How it fits together'
					color='amber'
					title={
						<>
							An organization. Its projects. <Accent>Everything inside.</Accent>
						</>
					}
					lead='Your company is an organization. Inside it, each project — an app or a website — is a workspace of its own, with the same seven parts.'
				/>
				<Reveal>
					<div className='rounded-3xl border border-line bg-panel p-5 shadow-float md:p-8'>
						<div className='mb-6 flex items-center gap-3'>
							<IconTile
								color='amber'
								solid>
								<Building2 />
							</IconTile>
							<div>
								<p className='text-[15px] font-medium'>Seaside Group</p>
								<p className='text-[13px] text-muted'>Organization · 12 people · 3 projects</p>
							</div>
							<span className='ml-auto hidden items-center gap-1.5 rounded-full border border-line px-3 py-1 text-[12.5px] text-muted sm:inline-flex'>
								<Users className='size-3.5' /> Roles & access
							</span>
						</div>
						<div className='grid gap-4 lg:grid-cols-[1.6fr_1fr_1fr]'>
							<div className='ring-brand rounded-2xl bg-gradient-to-br from-emerald-50/70 dark:from-emerald-400/10 via-panel to-violet-50/70 dark:to-violet-400/10 p-5'>
								<div className='mb-5 flex items-center gap-2'>
									<AppWindow className='size-4' />
									<p className='font-medium'>Seaside Inn</p>
									<span className='ml-1 rounded-full bg-emerald-100 dark:bg-emerald-400/15 px-2 py-0.5 text-[11px] font-semibold text-emerald-700 dark:text-emerald-300'>App</span>
								</div>
								<div className='grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-4'>
									{PARTS.map(p => (
										<div
											key={p.t}
											className='rounded-xl border border-line bg-bg p-3'>
											<span className={cx('mb-2 inline-flex size-7 items-center justify-center rounded-lg', tone(p.c).soft, tone(p.c).text)}>
												<p.icon className='size-3.5' />
											</span>
											<p className='text-[13px] font-medium'>{p.t}</p>
											<p className='mt-0.5 text-[11.5px] leading-snug text-faint'>{p.b}</p>
										</div>
									))}
								</div>
							</div>
							{[
								{ icon: AppWindow, name: 'Harbour Café', kind: 'App' },
								{ icon: Globe, name: 'seaside.inn', kind: 'Website' },
							].map(p => (
								<div
									key={p.name}
									className='flex flex-col rounded-2xl border border-line p-5'>
									<div className='flex items-center gap-2'>
										<p.icon className='size-4' />
										<p className='font-medium'>{p.name}</p>
										<span className='ml-1 rounded-full bg-soft px-2 py-0.5 text-[11px] text-muted'>{p.kind}</span>
									</div>
									<div className='mt-5 flex flex-1 flex-col justify-end gap-1.5'>
										{PARTS.slice(0, 4).map(x => (
											<div
												key={x.t}
												className={cx('h-2 rounded-full opacity-40', tone(x.c).bg)}
												style={{ width: `${55 + ((x.t.length * 7) % 40)}%` }}
											/>
										))}
									</div>
								</div>
							))}
						</div>
					</div>
				</Reveal>
			</Section>

			{/* records */}
			<Section>
				<div className='grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20'>
					<div>
						<SectionHead
							className='mb-8 md:mb-8'
							eyebrow='Records'
							color='violet'
							title={
								<>
									Data that <Accent>stays right.</Accent>
								</>
							}
							lead='Every record has its own page: its fields, the records linked to it in tabs, and its whole history. Totals calculate themselves; fields only appear when they apply; private records stay private.'
						/>
						<TextLink href={APP.guide('records')}>How records work</TextLink>
					</div>
					<Reveal>
						<RecordMock />
					</Reveal>
				</div>
			</Section>

			{/* dashboard */}
			<Section tone='subtle'>
				<div className='grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20'>
					<Reveal className='order-2 lg:order-1'>
						<DashboardMock />
					</Reveal>
					<div className='order-1 lg:order-2'>
						<SectionHead
							className='mb-8 md:mb-8'
							eyebrow='Dashboard'
							color='rose'
							title={
								<>
									Open the app. <Accent>Know where you stand.</Accent>
								</>
							}
							lead='Pick the numbers, charts and recent lists for each project’s home page from your own models. People only see the widgets for data they’re allowed to view.'
						/>
						<TextLink href={APP.guide('dashboard')}>Arrange a dashboard</TextLink>
					</div>
				</div>
			</Section>

			{/* data flow */}
			<Section tone='ink'>
				<SectionHead
					dark
					eyebrow='Connected'
					color='cyan'
					title={
						<>
							One set of data. <Accent>Everywhere it’s needed.</Accent>
						</>
					}
					lead='Your team works in the app, your AI builds alongside them, and your website and mobile app read the same records through the public API.'
				/>
				<DataFlow dark />
			</Section>

			{/* under the hood */}
			<Section>
				<SectionHead
					eyebrow='Under the hood'
					color='cyan'
					title='Built like real software, because it is.'
					lead='MINT isn’t a spreadsheet with a coat of paint. It’s the same architecture a development team would build for you — shared by every project, and improved for everyone at once.'
				/>
				<div className='grid gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-panel md:grid-cols-2 lg:grid-cols-3'>
					{UNDER.map((u, i) => (
						<Reveal
							key={u.t}
							delay={(i % 3) * 60}
							className='bg-panel p-7'>
							<IconTile
								color={u.c}
								solid>
								<u.icon />
							</IconTile>
							<h3 className='mt-5 text-[18px] font-medium tracking-[-0.015em]'>{u.t}</h3>
							<p className='mt-2 text-[14.5px] leading-relaxed text-muted'>{u.b}</p>
						</Reveal>
					))}
				</div>
				<div className='mt-10'>
					<TextLink href='/features'>Browse every feature</TextLink>
				</div>
			</Section>

			<CtaBand />
		</>
	);
}
