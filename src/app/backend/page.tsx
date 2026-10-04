import type { Metadata } from 'next';
import {
	Archive,
	Bell,
	Check,
	FileUp,
	History,
	Images,
	LayoutDashboard,
	Link2,
	Lock,
	PanelLeft,
	Pencil,
	Sigma,
	SlidersHorizontal,
	SquareStack,
	Users,
} from '@/components/ui/icons';
import { Accent, Button, IconTile, PageHero, Reveal, Section, SectionHead, TextLink, cx } from '@/components/ui';
import Code from '@/components/ui/Code';
import { ModelMock, SignInMock } from '@/components/mock/mocks';
import DatabaseMock from '@/components/mock/DatabaseMock';
import StackDiagram from '@/components/viz/StackDiagram';
import BuildPaths from '@/components/viz/BuildPaths';
import StackMini from '@/components/viz/StackMini';
import CtaBand from '@/components/site/CtaBand';
import { NOT_TO_BUILD } from '@/content/platform';
import { API_URL, APP } from '@/lib/config';
import type { Tone } from '@/lib/tones';

export const metadata: Metadata = {
	title: 'Backend as a service',
	description:
		'A database, REST API, auth and storage — with an advanced admin panel and back-office tools built in. Build it with blocks or let AI build it, then edit your data visually.',
	alternates: { canonical: '/backend' },
};

const DATABASE: { icon: typeof Link2; t: string; b: string; c: Tone }[] = [
	{ icon: Link2, t: 'Relations', b: 'Link models to each other; linked records open from anywhere.', c: 'sky' },
	{ icon: Sigma, t: 'Formulas', b: 'Fields that calculate themselves and stay up to date.', c: 'violet' },
	{ icon: SlidersHorizontal, t: 'Validation', b: 'Required fields, allowed values, defaults — enforced on every write.', c: 'amber' },
	{ icon: Lock, t: 'Private records', b: 'Records only their owner, or the people they share with, can open.', c: 'rose' },
];

const EDITING: { icon: typeof Pencil; t: string; c: Tone }[] = [
	{ icon: Pencil, t: 'Tables and forms for every model', c: 'violet' },
	{ icon: SquareStack, t: 'Bulk edit, archive and merge', c: 'sky' },
	{ icon: FileUp, t: 'Import and export spreadsheets', c: 'emerald' },
	{ icon: History, t: 'History on every record, with undo', c: 'amber' },
	{ icon: Archive, t: 'Archive instead of delete', c: 'rose' },
	{ icon: SlidersHorizontal, t: 'Filters and search on every field', c: 'cyan' },
];

const BACK_OFFICE: { icon: typeof Users; t: string; b: string; c: Tone }[] = [
	{ icon: LayoutDashboard, t: 'Dashboards', b: 'Numbers, charts and recent lists from any model.', c: 'rose' },
	{ icon: Users, t: 'Roles & access', b: 'Standard permissions, per-project access, invitations.', c: 'amber' },
	{ icon: PanelLeft, t: 'Your own sidebar', b: 'Sections, icons, and who sees each page.', c: 'sky' },
	{ icon: Bell, t: 'Notifications', b: 'When records come in from your site or app.', c: 'violet' },
	{ icon: Images, t: 'Media library', b: 'Images, videos and files, per project or shared.', c: 'emerald' },
	{ icon: History, t: 'Activity', b: 'Everything that changed in the project, by whom.', c: 'cyan' },
];

export default function BackendPage() {
	return (
		<>
			<PageHero
				eyebrow='Backend as a service'
				color='cyan'
				title={
					<>
						Backend as a service. <Accent>With the admin panel your team actually uses.</Accent>
					</>
				}
				lead='A database, a REST API, auth and storage — plus an advanced admin panel and back-office tools on top. Build it from blocks or let AI build it, then edit everything visually. For every business, and every developer.'
				aside={<StackMini />}>
				<Button
					href='/waitlist'
					variant='brand'
					arrow>
					Join the waitlist
				</Button>
				<Button
					href={APP.login}
					variant='secondary'>
					Log in
				</Button>
			</PageHero>

			<Section tone='ink'>
				<SectionHead
					dark
					align='center'
					eyebrow='The stack'
					color='cyan'
					title={
						<>
							Four layers. <Accent>Zero servers.</Accent>
						</>
					}
					lead='Each layer is built on the one below and kept in step automatically — change a model and its API, admin screens and dashboards change with it.'
				/>
				<StackDiagram dark />
			</Section>

			{/* database */}
			<Section>
				<div className='grid items-center gap-14 lg:grid-cols-2 lg:gap-20'>
					<div>
						<SectionHead
							className='mb-8 md:mb-8'
							eyebrow='Layer 1 · Database'
							color='emerald'
							title={
								<>
									Models, <Accent>done properly.</Accent>
								</>
							}
							lead='Describe what you keep track of and MINT creates a real database collection for it — text, numbers, dates, options, images, files, colours, passwords and more.'
						/>
						<div className='grid gap-3 sm:grid-cols-2'>
							{DATABASE.map(d => (
								<div
									key={d.t}
									className='flex gap-3 rounded-2xl border border-line bg-panel p-4 shadow-panel'>
									<IconTile
										color={d.c}
										className='size-10'>
										<d.icon />
									</IconTile>
									<div>
										<p className='text-[15px] font-semibold'>{d.t}</p>
										<p className='mt-0.5 text-[13.5px] leading-relaxed text-muted'>{d.b}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<Reveal>
						<ModelMock />
					</Reveal>
				</div>
			</Section>

			{/* visual editing */}
			<Section tone='subtle'>
				<SectionHead
					eyebrow='Edit it visually'
					color='violet'
					title={
						<>
							Your database, <Accent>as easy as a spreadsheet.</Accent>
						</>
					}
					lead='Every model gets a table and a form the moment it exists. Edit records, change many at once, bring a spreadsheet in — with validation on every change and an undo for every mistake.'
				/>
				<Reveal>
					<DatabaseMock />
				</Reveal>
				<div className='mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3'>
					{EDITING.map(e => (
						<div
							key={e.t}
							className='flex items-center gap-3 rounded-2xl border border-line bg-panel p-4'>
							<IconTile
								color={e.c}
								className='size-9'>
								<e.icon />
							</IconTile>
							<span className='text-[14.5px] font-medium'>{e.t}</span>
						</div>
					))}
				</div>
			</Section>

			{/* api */}
			<Section>
				<div className='grid items-center gap-14 lg:grid-cols-2 lg:gap-20'>
					<div>
						<SectionHead
							className='mb-8 md:mb-8'
							eyebrow='Layer 2 · API & auth'
							color='cyan'
							title={
								<>
									An API you <Accent>never had to write.</Accent>
								</>
							}
							lead='Turn on the public API for a model and pick what it allows — list, read, create, update, delete. Paging, sorting, filters and search are built in; customers sign in with a drop-in widget and only ever see their own records.'
						/>
						<Code
							label='orders.ts'
							code={`// A signed-in customer's own orders
await MintAuth.ready;
const res = await MintAuth.fetch('orders?status_in=paid,shipped&sort=-createdAt');
const { doc } = await res.json();

// Anyone: the product catalogue
fetch('${API_URL}/public/api/acme-store/products?price_lte=50')`}
						/>
						<TextLink
							href='/developers'
							className='mt-8'>
							The developer overview
						</TextLink>
					</div>
					<Reveal>
						<SignInMock />
					</Reveal>
				</div>
			</Section>

			{/* back office */}
			<Section tone='subtle'>
				<SectionHead
					eyebrow='Layer 3 · Admin panel & back office'
					color='violet'
					title={
						<>
							Back-office tools <Accent>for every business.</Accent>
						</>
					}
					lead='The internal tools every business ends up needing — built once, done properly, and shaped around your models.'
				/>
				<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{BACK_OFFICE.map((b, i) => (
						<Reveal
							key={b.t}
							delay={(i % 3) * 60}
							className='rounded-2xl border border-line bg-panel p-6 shadow-panel'>
							<IconTile
								color={b.c}
								solid>
								<b.icon />
							</IconTile>
							<h3 className='mt-5 text-[18px] font-medium tracking-[-0.015em]'>{b.t}</h3>
							<p className='mt-1.5 text-[14px] leading-relaxed text-muted'>{b.b}</p>
						</Reveal>
					))}
				</div>
				<div className='mt-10'>
					<TextLink href='/product'>Tour the admin panel</TextLink>
				</div>
			</Section>

			{/* build */}
			<Section>
				<SectionHead
					align='center'
					eyebrow='Build it your way'
					color='emerald'
					title={
						<>
							Blocks or AI. <Accent>Same backend.</Accent>
						</>
					}
				/>
				<BuildPaths />
			</Section>

			{/* vs build your own */}
			<Section tone='subtle'>
				<div className='grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
					<SectionHead
						className='mb-0 md:mb-0'
						eyebrow='Versus building it yourself'
						color='rose'
						title={
							<>
								Months of plumbing, <Accent warm>already done.</Accent>
							</>
						}
						lead='Everything on this list is something a team usually builds before the product can start. On MINT, it’s there on day one.'
					/>
					<div className='overflow-hidden rounded-2xl border border-line bg-panel shadow-panel'>
						<div className='grid grid-cols-[1fr_110px_90px] items-center border-b border-line px-5 py-3.5 text-[12.5px] font-semibold text-muted'>
							<span>What a backend needs</span>
							<span className='text-center'>From scratch</span>
							<span className='text-center text-gradient'>MINT</span>
						</div>
						{NOT_TO_BUILD.map((n, i) => (
							<div
								key={n}
								className={cx('grid grid-cols-[1fr_110px_90px] items-center px-5 py-2.5 text-[14px]', i > 0 && 'border-t border-line')}>
								<span>{n}</span>
								<span className='text-center text-[12px] text-faint'>You write it</span>
								<span className='flex justify-center'>
									<span className='inline-flex size-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-400/15 dark:text-emerald-400'>
										<Check className='size-3.5' />
									</span>
								</span>
							</div>
						))}
					</div>
				</div>
			</Section>

			<CtaBand
				title={
					<>
						Your backend is waiting. <Accent>So is your back office.</Accent>
					</>
				}
			/>
		</>
	);
}
