import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { ChartLine, Filter, Globe, Lock, Server, UserRound } from '@/components/ui/icons';
import { Accent, Button, IconTile, PageHero, Reveal, Section, SectionHead, TextLink, cx } from '@/components/ui';
import Code from '@/components/ui/Code';
import { SignInMock, SiteMock } from '@/components/mock/mocks';
import DataFlow from '@/components/viz/DataFlow';
import CtaBand from '@/components/site/CtaBand';
import { API_URL } from '@/lib/config';

export const metadata: Metadata = pageMeta({
	title: 'Developers',
	description:
		'A back end you didn’t have to write: a REST API per model with paging, sorting, filters and search, customer sign-in with drop-in site widgets, a website content API and cookie-free analytics.',
	path: '/developers',
});

const PUBLIC = `${API_URL}/public/api/acme-store`;

const ENDPOINTS = [
	{ m: 'GET', p: '/:model', d: 'List — paging, sorting, filters, search, fields', c: 'bg-emerald-100 dark:bg-emerald-400/15 text-emerald-700 dark:text-emerald-300' },
	{ m: 'GET', p: '/:model/:id', d: 'Read one record', c: 'bg-emerald-100 dark:bg-emerald-400/15 text-emerald-700 dark:text-emerald-300' },
	{ m: 'POST', p: '/:model', d: 'Create — a contact form, an order, a booking', c: 'bg-sky-100 dark:bg-sky-400/15 text-sky-700 dark:text-sky-300' },
	{ m: 'PUT', p: '/:model/:id', d: 'Update', c: 'bg-amber-100 dark:bg-amber-400/15 text-amber-700 dark:text-amber-300' },
	{ m: 'DELETE', p: '/:model/:id', d: 'Delete', c: 'bg-rose-100 dark:bg-rose-400/15 text-rose-700 dark:text-rose-300' },
	{ m: 'POST', p: '/auth/register · /auth/login', d: 'Customer accounts', c: 'bg-violet-100 dark:bg-violet-400/15 text-violet-700 dark:text-violet-300' },
];

const FILTERS = [
	['price_lte=300', 'at most 300'],
	['status_in=open,paid', 'one of several'],
	['name_contains=sea', 'contains text'],
	['createdAt=days_7', 'the last 7 days'],
	['sort=-rating,name', 'several sort keys'],
	['fields=name,price', 'only these fields'],
];

export default function DevelopersPage() {
	return (
		<>
			<PageHero
				eyebrow='For developers'
				color='cyan'
				title={
					<>
						Backend as a service, <Accent>admin panel included.</Accent>
					</>
				}
				lead='Model the data yourself, or let your client or AI do it. You get a database, a REST API, customer sign-in and a content API for your front end — and they get an admin panel they can actually use. No servers, no migrations.'
				aside={
					<Code
						label='app/products/page.tsx'
						code={`// List products from your MINT project
const res = await fetch(
  '${PUBLIC}/products' +
  '?status=active&price_lte=300&sort=-rating&limit=12'
);
const { doc, total } = await res.json();`}
					/>
				}>
				<Button
					href='/waitlist'
					variant='brand'
					arrow>
					Join the waitlist
				</Button>
				<Button
					href='/workflow/api'
					variant='secondary'>
					Build an API, step by step
				</Button>
			</PageHero>

			<Section tone='ink'>
				<SectionHead
					dark
					eyebrow='Architecture'
					color='cyan'
					title={
						<>
							The team edits. <Accent>Your code reads.</Accent>
						</>
					}
					lead='One project, one set of models. The panel, the AI connection and your public API all work on the same records, with the same rules.'
				/>
				<DataFlow dark />
			</Section>

			<Section>
				<div className='grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20'>
					<div>
						<SectionHead
							className='mb-10 md:mb-10'
							eyebrow='Public API'
							color='emerald'
							title='An API for every model.'
							lead='Switch it on per model and pick the actions it allows. Open to everyone, to signed-in customers, or to each customer’s own records only.'
						/>
						<div className='overflow-hidden rounded-2xl border border-line bg-panel shadow-panel'>
							{ENDPOINTS.map((e, i) => (
								<div
									key={e.m + e.p}
									className={cx('flex items-center gap-3 px-5 py-3.5', i > 0 && 'border-t border-line')}>
									<span className={cx('w-[64px] shrink-0 rounded-md py-1 text-center font-mono text-[11px] font-bold', e.c)}>{e.m}</span>
									<span className='min-w-0 flex-1'>
										<span className='block truncate font-mono text-[13px] font-semibold'>{e.p}</span>
										<span className='block text-[13px] text-muted'>{e.d}</span>
									</span>
								</div>
							))}
						</div>
					</div>
					<div>
						<SectionHead
							className='mb-10 md:mb-10'
							eyebrow='Filters'
							color='violet'
							title='Ask for exactly what you need.'
							lead='The same filter syntax your team’s tables use — every option documented in the project’s API reference, with a live tester.'
						/>
						<div className='grid gap-2.5 sm:grid-cols-2'>
							{FILTERS.map(([q, d], i) => (
								<Reveal
									key={q}
									delay={i * 40}
									className='rounded-2xl border border-line bg-panel p-4 shadow-panel'>
									<p className='font-mono text-[13px] font-semibold text-violet-600 dark:text-violet-400'>{q}</p>
									<p className='mt-1 text-[13px] text-muted'>{d}</p>
								</Reveal>
							))}
						</div>
						<div className='mt-6 flex items-center gap-3 rounded-2xl border border-amber-200 dark:border-amber-400/25 bg-amber-50/70 dark:bg-amber-400/10 p-4 text-[14px]'>
							<Filter className='size-4 shrink-0 text-amber-600 dark:text-amber-400' />
							Up to 100 records a page, sensible rate limits, and clear errors for anything unsupported.
						</div>
					</div>
				</div>
			</Section>

			<Section
				tone='subtle'
				id='widgets'>
				<div className='grid items-center gap-14 lg:grid-cols-2 lg:gap-20'>
					<div>
						<SectionHead
							className='mb-8 md:mb-8'
							eyebrow='Customer accounts & widgets'
							color='rose'
							title={
								<>
									Sign-in for your customers, <Accent warm>in one script tag.</Accent>
								</>
							}
							lead='Add mint.js once and place the Login widget anywhere — a card on an account page or a button in your header. Switch it on, reword it and give it your colours in the panel. Mint gives your scripts the signed-in customer and an authenticated fetch, and each customer only ever sees their own records. Cart, checkout and payments are next.'
						/>
						<Code
							label='index.html'
							code={`<script src="${API_URL}/public/mint.js" data-project="acme-store" async></script>
<div data-mint="login"></div>

// later, in your code
await Mint.auth.ready;
const res = await Mint.api('orders?sort=-createdAt');`}
						/>
						<TextLink
							href='/workflow/api#step-4'
							className='mt-8'>
							Customer sign-in, step by step
						</TextLink>
					</div>
					<Reveal>
						<SignInMock />
					</Reveal>
				</div>
			</Section>

			<Section id='websites'>
				<div className='grid items-center gap-14 lg:grid-cols-2 lg:gap-20'>
					<Reveal className='order-2 lg:order-1'>
						<SiteMock />
					</Reveal>
					<div className='order-1 lg:order-2'>
						<SectionHead
							className='mb-8 md:mb-8'
							eyebrow='Websites'
							color='sky'
							title='Content your team edits, rendered by your code.'
							lead='Website projects come with pages, per-page SEO and content blocks. Render any page in two calls, and count visits without cookies.'
						/>
						<Code
							label='site.ts'
							code={`const site = await fetch('${PUBLIC}/site').then(r => r.json());
const about = await fetch('${PUBLIC}/pages/by-path?path=/about').then(r => r.json());`}
						/>
					</div>
				</div>
			</Section>

			<Section tone='subtle'>
				<SectionHead
					eyebrow='What you skip'
					color='amber'
					title='All the parts you’d otherwise build first.'
				/>
				<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-5'>
					{[
						{ icon: Server, t: 'Servers & deploys', c: 'emerald' as const },
						{ icon: Lock, t: 'Auth & sessions', c: 'violet' as const },
						{ icon: UserRound, t: 'Admin panel', c: 'sky' as const },
						{ icon: Globe, t: 'A CMS', c: 'amber' as const },
						{ icon: ChartLine, t: 'Analytics', c: 'rose' as const },
					].map(x => (
						<div
							key={x.t}
							className='flex items-center gap-3 rounded-2xl border border-line bg-panel p-4 shadow-panel'>
							<IconTile
								color={x.c}
								solid>
								<x.icon />
							</IconTile>
							<span className='font-display text-[15px] font-medium'>{x.t}</span>
						</div>
					))}
				</div>
			</Section>

			<CtaBand
				title={
					<>
						Ship the front end. <Accent>We’ve got the back.</Accent>
					</>
				}
			/>
		</>
	);
}
