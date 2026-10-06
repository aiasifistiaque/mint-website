import {
	ArrowRight,
	Boxes,
	Check,
	ChartLine,
	Code,
	Eye,
	FileUp,
	Globe,
	GripVertical,
	Hash,
	Image as ImageIcon,
	KeyRound,
	LayoutDashboard,
	LayoutTemplate,
	Link2,
	Lock,
	Plus,
	Search,
	Sigma,
	Sparkles,
	Table2,
	Type,
	Users,
} from '@/components/ui/icons';
import { cx } from '@/components/ui';
import Frame, { Chip } from '@/components/mock/Frame';
import { ApiMock, DashboardMock, ModelMock, PagesMock, ProjectMock, RecordMock, SignInMock, SiteBuilderMock, TeamMock } from '@/components/mock/mocks';
import type { ArtKey } from '@/content/flows';

/*
 * Drawings for the step-by-step workflows (content/flows.ts). Like the other
 * mocks they follow the real tenant panel — change them when its screens do.
 */

const Label = ({ children }: { children: React.ReactNode }) => (
	<p className='mb-2 font-mono text-[10px] uppercase tracking-[0.14em] text-faint'>{children}</p>
);

const Toggle = ({ on }: { on?: boolean }) => (
	<span className={cx('relative inline-flex h-4 w-7 shrink-0 rounded-full transition-colors', on ? 'bg-emerald-500' : 'bg-soft ring-1 ring-line-strong')}>
		<span className={cx('absolute top-0.5 size-3 rounded-full bg-white shadow', on ? 'left-3.5' : 'left-0.5')} />
	</span>
);

/* ----------------------------------------------------------- website */

const ConnectArt = () => (
	<Frame
		url='app.mintapp.shop/model-builder/connect'
		bodyClassName='p-5'>
		<div className='mb-4 flex items-center justify-between'>
			<p className='text-[14px] font-medium'>Connect AI</p>
			<span className='inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-[10.5px] font-medium text-white'>
				<Plus className='size-3' /> New key
			</span>
		</div>
		<div className='mb-4 rounded-xl border border-line p-3'>
			<div className='flex items-center gap-2'>
				<KeyRound className='size-4 text-amber-500' />
				<p className='font-medium'>Claude on my laptop</p>
				<span className='ml-auto'>
					<Chip tone='green'>Can build</Chip>
				</span>
			</div>
			<p className='mt-2 truncate rounded-md bg-subtle px-2.5 py-1.5 font-mono text-[10.5px] text-muted'>https://api.mintapp.shop/tenant/mcp/••••••••••••</p>
			<p className='mt-1.5 text-[10.5px] text-faint'>One project · acts as you · last used 2 min ago</p>
		</div>
		<Label>Add it to your assistant</Label>
		<div className='grid grid-cols-2 gap-2'>
			{[
				{ n: 'Claude', h: 'Custom connector', c: 'bg-amber-500' },
				{ n: 'ChatGPT', h: 'Developer mode', c: 'bg-emerald-500' },
				{ n: 'Claude Code', h: 'claude mcp add …', c: 'bg-violet-500' },
				{ n: 'Cursor', h: 'MCP settings', c: 'bg-sky-500' },
			].map(a => (
				<div
					key={a.n}
					className='flex items-center gap-2 rounded-lg border border-line p-2'>
					<span className={cx('inline-flex size-6 shrink-0 items-center justify-center rounded-md text-[10px] font-bold text-white', a.c)}>{a.n[0]}</span>
					<span className='min-w-0'>
						<span className='block truncate font-medium'>{a.n}</span>
						<span className='block truncate font-mono text-[9.5px] text-faint'>{a.h}</span>
					</span>
				</div>
			))}
		</div>
	</Frame>
);

const PlanArt = () => (
	<Frame bodyClassName='p-5'>
		<div className='mb-4 flex items-center gap-2'>
			<span className='inline-flex size-6 items-center justify-center rounded-full bg-soft'>
				<Sparkles className='size-3 text-violet-500' />
			</span>
			<p className='font-medium'>Your AI assistant</p>
			<span className='ml-auto inline-flex items-center gap-1 rounded-full border border-line px-2 py-0.5 text-[10.5px] text-muted'>
				<span className='size-1.5 rounded-full bg-emerald-500' /> MINT connected
			</span>
		</div>
		<div className='mb-3 ml-auto max-w-[86%] rounded-2xl rounded-br-md bg-brand px-3.5 py-2.5 text-[12.5px] leading-relaxed text-white'>
			A site for my bakery: a home page, an about page, and a menu of our products.
		</div>
		<div className='mb-3 rounded-xl border border-line p-3'>
			<p className='mb-2 text-[12px] font-medium'>Here’s the plan — shall I build it?</p>
			<div className='grid grid-cols-2 gap-3 font-mono text-[10.5px]'>
				<div>
					<p className='mb-1 text-faint'>PAGES</p>
					{['/ — Home · 5 blocks', '/about — About · 3 blocks', '/menu — Menu · 2 blocks'].map(p => (
						<p
							key={p}
							className='flex items-center gap-1.5 leading-relaxed'>
							<Check className='size-3 shrink-0 text-emerald-500' />
							{p}
						</p>
					))}
				</div>
				<div>
					<p className='mb-1 text-faint'>LISTS</p>
					{['Products — name, price, photo', 'Testimonials — quote, name'].map(p => (
						<p
							key={p}
							className='flex items-center gap-1.5 leading-relaxed'>
							<Check className='size-3 shrink-0 text-emerald-500' />
							{p}
						</p>
					))}
				</div>
			</div>
		</div>
		<div className='ml-auto w-fit rounded-2xl rounded-br-md bg-brand px-3.5 py-2 text-[12.5px] text-white'>Yes, build it.</div>
	</Frame>
);

const BUILT = [
	{ icon: Globe, t: 'Site setup', b: 'Name, logo, favicon, colours, font, SEO', c: 'text-amber-500' },
	{ icon: LayoutTemplate, t: '3 pages', b: 'Each with SEO and 10 content blocks', c: 'text-violet-500' },
	{ icon: ImageIcon, t: '14 images', b: 'Uploaded to your Media library', c: 'text-sky-500' },
	{ icon: Boxes, t: 'Products · Testimonials', b: 'Models with their public API on', c: 'text-emerald-500' },
	{ icon: ChartLine, t: 'Analytics', b: 'The tracker on every page', c: 'text-rose-500' },
];

const BuiltArt = () => (
	<div className='grid gap-3'>
		<div
			aria-hidden
			className='overflow-hidden rounded-2xl border border-line bg-[#0d0d0d] text-[11.5px] text-[#d8d8dc] shadow-panel select-none'>
			<div className='flex h-9 items-center gap-2 border-b border-white/10 px-4 font-mono text-[10.5px] text-white/50'>
				<span className='text-[#3ddc9f]'>●</span> bakery-site/app/page.tsx
			</div>
			<pre className='overflow-x-auto px-5 py-4 font-mono leading-[1.7]'>
				<code>
					<span className='text-[#c792ea]'>const</span> {'{'} page, seo, contents {'}'} = <span className='text-[#c792ea]'>await</span>{' '}
					<span className='text-[#82aaff]'>getPage</span>(<span className='text-[#c3e88d]'>&apos;/&apos;</span>);
					{'\n'}
					<span className='text-white/40'>{'// design in code — words, images and SEO from MINT'}</span>
				</code>
			</pre>
		</div>
		<Frame bodyClassName='p-4'>
			<Label>Built in your project</Label>
			<div className='flex flex-col gap-1.5'>
				{BUILT.map(b => (
					<div
						key={b.t}
						className='flex items-center gap-2.5 rounded-lg border border-line px-3 py-2'>
						<b.icon className={cx('size-4 shrink-0', b.c)} />
						<span className='min-w-0 flex-1'>
							<span className='font-medium'>{b.t}</span> <span className='text-faint'>· {b.b}</span>
						</span>
						<Check className='size-3.5 shrink-0 text-emerald-500' />
					</div>
				))}
			</div>
		</Frame>
	</div>
);

const DeployArt = () => (
	<Frame
		url='app.mintapp.shop/bakery/site-setup'
		bodyClassName='p-5'>
		<div className='mb-4 flex gap-1.5 overflow-x-auto text-[10.5px] [scrollbar-width:none]'>
			{['General', 'SEO', 'Tracking', 'Indexing', 'Domains', 'Check the site'].map((t, i) => (
				<span
					key={t}
					className={cx('shrink-0 rounded-full px-2.5 py-1', i === 5 ? 'bg-fg text-bg' : 'bg-subtle text-muted')}>
					{t}
				</span>
			))}
		</div>
		<Label>Domains</Label>
		<div className='mb-4 flex flex-wrap gap-1.5'>
			{['sweetcrumb.com', 'www.sweetcrumb.com'].map(d => (
				<span
					key={d}
					className='inline-flex items-center gap-1.5 rounded-md border border-line px-2 py-1 font-mono text-[10.5px]'>
					<Globe className='size-3 text-sky-500' />
					{d}
				</span>
			))}
		</div>
		<Label>Check the site · sweetcrumb.com</Label>
		<div className='divide-y divide-line rounded-xl border border-line'>
			{[
				['MINT analytics', 'green', 'On the site'],
				['Google Analytics 4', 'green', 'On the site'],
				['Meta Pixel', 'green', 'On the site'],
				['sitemap.xml · robots.txt', 'green', 'Served'],
				['Search engines', 'blue', 'Indexing on'],
			].map(([n, t, s]) => (
				<div
					key={n}
					className='flex items-center justify-between px-3 py-2'>
					<span>{n}</span>
					<Chip tone={t as 'green' | 'blue'}>{s}</Chip>
				</div>
			))}
		</div>
	</Frame>
);

const EditLiveArt = () => (
	<div className='grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]'>
		<Frame bodyClassName='p-4'>
			<Label>Contents · hero</Label>
			<p className='mb-1 text-[10.5px] text-faint'>Content</p>
			<div className='mb-2 rounded-lg border-2 border-violet-400 px-2.5 py-1.5 text-[12px]'>
				Fresh sourdough, every morning<span className='caret'>|</span>
			</div>
			<p className='mb-1 text-[10.5px] text-faint'>Button text</p>
			<div className='mb-3 rounded-lg border border-line px-2.5 py-1.5'>See the menu</div>
			<span className='inline-flex rounded-full bg-fg px-3 py-1 text-[10.5px] font-medium text-bg'>Save</span>
		</Frame>
		<div className='flex flex-col items-center gap-1 text-faint'>
			<ArrowRight className='size-4 rotate-90 sm:rotate-0' />
			<span className='font-mono text-[9.5px]'>&lt; 1 min</span>
		</div>
		<Frame
			url='sweetcrumb.com'
			bodyClassName='p-4'>
			<div className='rounded-xl bg-gradient-to-br from-amber-100 to-rose-100 p-4 dark:from-amber-400/15 dark:to-rose-400/15'>
				<p className='text-[15px] font-light uppercase leading-tight tracking-wide'>Fresh sourdough, every morning</p>
				<span className='mt-3 inline-flex rounded-full bg-[#0d0d0d] px-3 py-1 text-[10px] text-white'>See the menu</span>
			</div>
			<div className='mt-3 grid grid-cols-3 gap-1.5'>
				{['bg-amber-200 dark:bg-amber-400/25', 'bg-rose-200 dark:bg-rose-400/25', 'bg-orange-200 dark:bg-orange-400/25'].map(c => (
					<span
						key={c}
						className={cx('h-10 rounded-md', c)}
					/>
				))}
			</div>
			<p className='mt-2 text-center text-[10px] text-faint'>No code change · no redeploy</p>
		</Frame>
	</div>
);

const CHANGES = [
	{ page: 'Our breads', what: 'New page', tone: 'blue' as const },
	{ page: 'Home', what: 'Changed', tone: 'amber' as const },
	{ page: 'Old menu', what: 'Removed', tone: 'neutral' as const },
];

const PublishSiteArt = () => (
	<div className='grid items-center gap-3 sm:grid-cols-[1fr_auto_1fr]'>
		<Frame bodyClassName='p-4'>
			<Label>Publish your site</Label>
			{CHANGES.map(c => (
				<div
					key={c.page}
					className='flex items-center justify-between border-b border-line py-1.5 last:border-b-0'>
					<span>{c.page}</span>
					<Chip tone={c.tone}>{c.what}</Chip>
				</div>
			))}
			<p className='mt-3 mb-1 text-[10.5px] text-faint'>Note (optional)</p>
			<div className='mb-3 rounded-lg border border-line px-2.5 py-1.5'>New breads page</div>
			<div className='flex items-center justify-end gap-2'>
				<span className='inline-flex rounded-full border border-line px-3 py-1 text-[10.5px] text-muted'>Cancel</span>
				<span className='inline-flex rounded-full bg-fg px-3 py-1 text-[10.5px] font-medium text-bg'>Publish</span>
			</div>
		</Frame>
		<div className='flex flex-col items-center gap-1 text-faint'>
			<ArrowRight className='size-4 rotate-90 sm:rotate-0' />
			<span className='font-mono text-[9.5px]'>live</span>
		</div>
		<Frame
			url='sweetcrumb.com'
			bodyClassName='p-4'>
			<p className='mb-2 text-[13px] font-light uppercase tracking-wide'>Our breads</p>
			<div className='grid grid-cols-3 gap-1.5'>
				{['bg-amber-200 dark:bg-amber-400/25', 'bg-rose-200 dark:bg-rose-400/25', 'bg-orange-200 dark:bg-orange-400/25'].map(c => (
					<span
						key={c}
						className={cx('h-12 rounded-md', c)}
					/>
				))}
			</div>
			<div className='mt-3 rounded-lg border border-line p-2 font-mono text-[9.5px] leading-relaxed text-faint'>
				<p>title · description · share image</p>
				<p>sitemap · analytics</p>
			</div>
		</Frame>
	</div>
);

/* --------------------------------------------------------------- api */

const PublicArt = () => (
	<Frame
		url='app.mintapp.shop/seaside-inn/public-api'
		bodyClassName='p-5'>
		<p className='mb-4 text-[14px] font-medium'>Public API</p>
		{[
			{ m: 'Rooms', on: true, a: [1, 1, 0, 0, 0] },
			{ m: 'Bookings', on: true, a: [1, 1, 1, 1, 0] },
			{ m: 'Reviews', on: true, a: [1, 1, 1, 0, 0] },
			{ m: 'Payments', on: false, a: [0, 0, 0, 0, 0] },
		].map(r => (
			<div
				key={r.m}
				className='mb-2 flex items-center gap-3 rounded-xl border border-line px-3 py-2.5'>
				<Toggle on={r.on} />
				<span className='w-[70px] font-medium'>{r.m}</span>
				<span className='flex flex-1 flex-wrap justify-end gap-1'>
					{['List', 'Read', 'Create', 'Update', 'Delete'].map((a, i) => (
						<span
							key={a}
							className={cx(
								'rounded px-1.5 py-0.5 font-mono text-[9.5px]',
								r.a[i] ? 'bg-cyan-50 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300' : 'text-faint line-through decoration-faint/50'
							)}>
							{a}
						</span>
					))}
				</span>
			</div>
		))}
		<p className='mt-3 truncate rounded-md bg-subtle px-2.5 py-1.5 font-mono text-[10.5px] text-muted'>
			GET https://api.mintapp.shop/public/api/seaside-inn/rooms
		</p>
	</Frame>
);

const AccessArt = () => (
	<Frame bodyClassName='p-5'>
		<Label>Bookings · who may call it</Label>
		{[
			{ t: 'Anyone', b: 'No sign-in. Good for lists anyone may read.', on: false },
			{ t: 'Signed-in customers', b: 'Every signed-in customer sees every record.', on: false },
			{ t: 'Customers — own records only', b: 'Each customer lists, reads and changes only what they created.', on: true },
		].map(o => (
			<div
				key={o.t}
				className={cx('mb-2 flex gap-3 rounded-xl border p-3', o.on ? 'border-cyan-400 bg-cyan-50/60 dark:bg-cyan-400/10' : 'border-line')}>
				<span className={cx('mt-0.5 inline-flex size-4 shrink-0 items-center justify-center rounded-full border-2', o.on ? 'border-cyan-500' : 'border-line-strong')}>
					{o.on && <span className='size-1.5 rounded-full bg-cyan-500' />}
				</span>
				<span>
					<span className='block font-medium'>{o.t}</span>
					<span className='block text-[11px] text-muted'>{o.b}</span>
				</span>
			</div>
		))}
		<div className='mt-3 flex items-center gap-2 rounded-lg bg-subtle px-3 py-2 text-[11px] text-muted'>
			<Users className='size-3.5 text-cyan-500' /> Maya sees her 3 bookings — not the other 1,204.
		</div>
	</Frame>
);

const ReferenceArt = () => (
	<Frame
		url='app.mintapp.shop/seaside-inn/public-api#reference'
		bodyClassName='p-5'>
		<Label>API reference</Label>
		<div className='mb-3 divide-y divide-line rounded-xl border border-line font-mono text-[10.5px]'>
			{[
				['GET', '/rooms', 'List rooms'],
				['GET', '/rooms/:id', 'Read one room'],
				['GET', '/bookings', 'List my bookings'],
				['POST', '/bookings', 'Create a booking'],
				['PUT', '/bookings/:id', 'Update my booking'],
			].map(([m, p, d], i) => (
				<div
					key={p + m}
					className={cx('flex items-center gap-2.5 px-3 py-2', i === 3 && 'bg-subtle')}>
					<span
						className={cx(
							'w-10 rounded px-1 py-0.5 text-center text-[9.5px] font-semibold',
							m === 'GET' && 'bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300',
							m === 'POST' && 'bg-sky-50 text-sky-700 dark:bg-sky-400/10 dark:text-sky-300',
							m === 'PUT' && 'bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300'
						)}>
						{m}
					</span>
					<span>{p}</span>
					<span className='ml-auto font-sans text-faint'>{d}</span>
				</div>
			))}
		</div>
		<div className='rounded-xl border border-line p-3'>
			<div className='mb-2 flex items-center justify-between'>
				<p className='font-medium'>Try it</p>
				<span className='rounded-full bg-fg px-2.5 py-0.5 text-[10px] text-bg'>Send</span>
			</div>
			<p className='rounded-md bg-[#0d0d0d] px-3 py-2 font-mono text-[10.5px] leading-relaxed text-[#c3e88d]'>
				201 Created · {'{'} code: &quot;BK-0412&quot;, total: 780 {'}'}
			</p>
		</div>
	</Frame>
);

/* ------------------------------------------------------- admin panel */

const SidebarArt = () => (
	<Frame bodyClassName='grid grid-cols-[150px_1fr]'>
		<div className='border-r border-line bg-subtle p-3'>
			{[
				{ s: 'Front desk', p: ['Bookings', 'Guests', 'Rooms'] },
				{ s: 'Money', p: ['Payments', 'Invoices'] },
				{ s: 'Website', p: ['Pages', 'Contents'] },
			].map(sec => (
				<div
					key={sec.s}
					className='mb-3'>
					<p className='mb-1 font-mono text-[9.5px] uppercase tracking-[0.12em] text-faint'>{sec.s}</p>
					{sec.p.map((p, i) => (
						<p
							key={p}
							className={cx('flex items-center gap-1.5 rounded-md px-1.5 py-1', sec.s === 'Front desk' && i === 0 && 'bg-panel shadow-panel')}>
							<GripVertical className='size-3 text-faint' />
							{p}
						</p>
					))}
				</div>
			))}
		</div>
		<div className='p-4'>
			<Label>Page · Payments</Label>
			<p className='mb-1 text-[10.5px] text-faint'>Icon</p>
			<div className='mb-3 flex gap-1.5'>
				{[Table2, LayoutDashboard, Hash, Sigma].map((I, i) => (
					<span
						key={i}
						className={cx('inline-flex size-7 items-center justify-center rounded-md border', i === 2 ? 'border-violet-400 text-violet-500' : 'border-line text-muted')}>
						<I className='size-3.5' />
					</span>
				))}
			</div>
			<p className='mb-1 text-[10.5px] text-faint'>Who sees it</p>
			{[
				['Owner', true],
				['Manager', true],
				['Front desk', false],
			].map(([r, on]) => (
				<div
					key={r as string}
					className='flex items-center justify-between py-1'>
					<span className='flex items-center gap-1.5'>
						<Eye className={cx('size-3.5', on ? 'text-emerald-500' : 'text-faint')} />
						{r}
					</span>
					<Toggle on={on as boolean} />
				</div>
			))}
		</div>
	</Frame>
);

/* ------------------------------------------------------------ models */

const WIZARD = ['Model', 'Settings', 'Config', 'Form', 'Table', 'View', 'Filters', 'Sidebar & create'];

const WizardArt = () => (
	<Frame
		url='app.mintapp.shop/model-builder/new'
		bodyClassName='p-5'>
		<p className='mb-4 text-[14px] font-medium'>New model · Invoices</p>
		<div className='mb-5 grid grid-cols-8 gap-1'>
			{WIZARD.map((s, i) => (
				<span
					key={s}
					className={cx('h-1.5 rounded-full', i < 3 ? 'bg-emerald-500' : i === 3 ? 'bg-emerald-300 dark:bg-emerald-400/50' : 'bg-soft')}
				/>
			))}
		</div>
		<div className='grid grid-cols-2 gap-x-4 gap-y-1.5'>
			{WIZARD.map((s, i) => (
				<p
					key={s}
					className={cx('flex items-center gap-2', i > 3 && 'text-faint')}>
					<span
						className={cx(
							'inline-flex size-5 shrink-0 items-center justify-center rounded-full font-mono text-[9.5px]',
							i < 3 ? 'bg-emerald-500 text-white' : i === 3 ? 'border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400' : 'border border-line'
						)}>
						{i < 3 ? <Check className='size-2.5' /> : i + 1}
					</span>
					{s}
				</p>
			))}
		</div>
		<div className='mt-5 flex items-center justify-between rounded-xl bg-subtle px-3 py-2.5 text-[11px]'>
			<span className='flex items-center gap-1.5 text-muted'>
				<Sparkles className='size-3.5 text-violet-500' /> Suggested from your fields
			</span>
			<span className='rounded-full bg-fg px-3 py-1 text-[10.5px] font-medium text-bg'>Next</span>
		</div>
	</Frame>
);

const KINDS = [
	{ i: Type, t: 'Text', c: 'text-sky-500' },
	{ i: Hash, t: 'Number', c: 'text-emerald-500' },
	{ i: Sigma, t: 'Formula', c: 'text-violet-500' },
	{ i: Link2, t: 'Link to record', c: 'text-cyan-500' },
	{ i: Check, t: 'Yes / No', c: 'text-emerald-500' },
	{ i: Table2, t: 'Options', c: 'text-amber-500' },
	{ i: ImageIcon, t: 'Images', c: 'text-rose-500' },
	{ i: FileUp, t: 'Files', c: 'text-sky-500' },
	{ i: Lock, t: 'Password', c: 'text-faint' },
];

const FieldsArt = () => (
	<Frame bodyClassName='p-5'>
		<Label>Field · Status</Label>
		<div className='mb-4 grid grid-cols-[1fr_1fr_auto] items-center gap-2'>
			<span className='rounded-lg border border-line px-2.5 py-1.5'>Status</span>
			<span className='rounded-lg border border-line px-2.5 py-1.5 font-mono text-[10.5px] text-muted'>status</span>
			<span className='rounded-lg border-2 border-amber-400 px-2.5 py-1.5'>Options</span>
		</div>
		<div className='mb-4 grid grid-cols-2 gap-x-4 gap-y-1.5 rounded-xl bg-subtle p-3 text-[11px]'>
			{[
				['Allowed values', 'Draft · Sent · Paid'],
				['Default', 'Draft'],
				['Required', 'Yes'],
				['Searchable', 'Yes'],
			].map(([k, v]) => (
				<p key={k}>
					<span className='text-faint'>{k}</span> <span className='font-medium'>{v}</span>
				</p>
			))}
		</div>
		<Label>Kinds</Label>
		<div className='grid grid-cols-3 gap-1.5'>
			{KINDS.map(k => (
				<span
					key={k.t}
					className='flex items-center gap-1.5 rounded-lg border border-line px-2 py-1.5 text-[11px]'>
					<k.i className={cx('size-3.5 shrink-0', k.c)} />
					<span className='truncate'>{k.t}</span>
				</span>
			))}
		</div>
	</Frame>
);

const LinksArt = () => (
	<Frame bodyClassName='p-5'>
		<div className='grid grid-cols-[1fr_auto_1fr] items-center gap-2'>
			<div className='rounded-xl border-2 border-emerald-400 p-3'>
				<p className='mb-1.5 flex items-center gap-1.5 font-medium'>
					<Boxes className='size-3.5 text-emerald-500' /> Booking
				</p>
				{['guest → Guest', 'room → Room', 'nights', 'total ƒ'].map(f => (
					<p
						key={f}
						className='font-mono text-[10.5px] leading-relaxed text-muted'>
						{f}
					</p>
				))}
			</div>
			<div className='flex flex-col gap-6 text-faint'>
				<ArrowRight className='size-4' />
				<ArrowRight className='size-4' />
			</div>
			<div className='flex flex-col gap-2'>
				{[
					['Guest', 'name, email'],
					['Room', 'name, rate'],
				].map(([m, f]) => (
					<div
						key={m}
						className='rounded-xl border border-line p-2.5'>
						<p className='font-medium'>{m}</p>
						<p className='font-mono text-[10px] text-faint'>{f}</p>
					</div>
				))}
			</div>
		</div>
		<div className='mt-4 rounded-xl border border-violet-200 bg-violet-50/70 p-3 dark:border-violet-400/25 dark:bg-violet-400/10'>
			<p className='mb-1 flex items-center gap-1.5 font-mono text-[10.5px] text-violet-600 dark:text-violet-400'>
				<Sigma className='size-3.5' /> total
			</p>
			<p className='font-mono text-[12px]'>nights × room.rate</p>
			<p className='mt-1.5 text-[10.5px] text-muted'>3 × 260 = 780 · worked out on every save</p>
		</div>
		<div className='mt-2 flex items-center justify-between rounded-lg bg-subtle px-3 py-2 text-[11px]'>
			<span className='text-muted'>Record code</span>
			<span className='font-mono'>BK-0412</span>
		</div>
	</Frame>
);

const PrivacyArt = () => (
	<Frame bodyClassName='p-5'>
		<div className='mb-4 flex items-center justify-between rounded-xl border border-line px-3 py-2.5'>
			<span className='flex items-center gap-2 font-medium'>
				<Lock className='size-4 text-rose-500' /> Restrict access to each record
			</span>
			<Toggle on />
		</div>
		<Label>Manage access · Contract — Delta Foods</Label>
		<div className='mb-3 grid grid-cols-3 gap-1.5'>
			{['Only me', 'Private', 'Public'].map((p, i) => (
				<span
					key={p}
					className={cx('rounded-lg border py-1.5 text-center', i === 1 ? 'border-rose-400 bg-rose-50/60 font-medium dark:bg-rose-400/10' : 'border-line text-muted')}>
					{p}
				</span>
			))}
		</div>
		<div className='flex flex-col gap-1.5'>
			{[
				['Amira Khan', 'Owner'],
				['Leo Park', 'Can view'],
			].map(([n, r], i) => (
				<div
					key={n}
					className='flex items-center gap-2 rounded-lg border border-line px-3 py-2'>
					<span className={cx('inline-flex size-6 items-center justify-center rounded-full text-[10px] font-medium', i ? 'bg-sky-100 text-sky-700 dark:bg-sky-400/15 dark:text-sky-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-400/15 dark:text-rose-300')}>
						{n[0]}
					</span>
					{n}
					<span className='ml-auto text-[10.5px] text-faint'>{r}</span>
				</div>
			))}
		</div>
	</Frame>
);

const CreateArt = () => (
	<Frame bodyClassName='p-5'>
		<div className='mb-4 flex items-center gap-2'>
			<span className='inline-flex size-8 items-center justify-center rounded-lg bg-emerald-500 text-white'>
				<Check className='size-4' />
			</span>
			<span>
				<span className='block text-[13px] font-medium'>Invoices is live</span>
				<span className='block text-[10.5px] text-faint'>Nothing to deploy</span>
			</span>
		</div>
		<div className='grid grid-cols-2 gap-2'>
			{[
				{ i: Table2, t: 'Table, search, filters', c: 'text-sky-500' },
				{ i: LayoutTemplate, t: 'Add & edit form', c: 'text-violet-500' },
				{ i: Eye, t: 'A page per record', c: 'text-amber-500' },
				{ i: LayoutDashboard, t: 'Dashboard source', c: 'text-rose-500' },
				{ i: KeyRound, t: 'A role permission', c: 'text-emerald-500' },
				{ i: Code, t: 'Public API, if you want', c: 'text-cyan-500' },
			].map(x => (
				<div
					key={x.t}
					className='flex items-center gap-2 rounded-lg border border-line px-2.5 py-2'>
					<x.i className={cx('size-4 shrink-0', x.c)} />
					<span className='truncate text-[11px]'>{x.t}</span>
				</div>
			))}
		</div>
		<div className='mt-3 flex items-center gap-2 rounded-lg bg-subtle px-3 py-2 text-[11px] text-muted'>
			<Search className='size-3.5' /> Sidebar → Money → <span className='font-medium text-fg'>Invoices</span>
		</div>
	</Frame>
);

/* ----------------------------------------------------------- analyze */

const ReadKeyArt = () => (
	<Frame
		url='app.mintapp.shop/model-builder/connect'
		bodyClassName='p-5'>
		<p className='mb-4 text-[14px] font-medium'>New key</p>
		<p className='mb-1 text-[10.5px] text-faint'>Name</p>
		<div className='mb-4 rounded-lg border border-line px-2.5 py-1.5'>ChatGPT — weekly numbers</div>
		<div className='divide-y divide-line rounded-xl border border-line'>
			{[
				['Can build', 'Create and change models and pages', false],
				['Can read records', 'Read records to answer questions', true],
			].map(([t, b, on]) => (
				<div
					key={t as string}
					className='flex items-center gap-3 px-3 py-2.5'>
					<span className='min-w-0 flex-1'>
						<span className='block font-medium'>{t}</span>
						<span className='block truncate text-[10.5px] text-faint'>{b}</span>
					</span>
					<Toggle on={on as boolean} />
				</div>
			))}
			<div className='flex items-center justify-between px-3 py-2.5'>
				<span className='font-medium'>Expires</span>
				<span className='rounded-md bg-subtle px-2 py-0.5 text-[11px]'>In 90 days</span>
			</div>
		</div>
		<div className='mt-4 flex items-center gap-2 rounded-lg bg-subtle px-3 py-2 text-[11px] text-muted'>
			<Eye className='size-3.5 text-rose-500' /> Looks and reads — changes nothing
		</div>
	</Frame>
);

const AskArt = () => (
	<Frame bodyClassName='p-5'>
		<div className='mb-4 flex items-center gap-2'>
			<span className='inline-flex size-6 items-center justify-center rounded-full bg-soft'>
				<Sparkles className='size-3 text-violet-500' />
			</span>
			<p className='font-medium'>Your AI assistant</p>
			<span className='ml-auto inline-flex items-center gap-1 rounded-full border border-line px-2 py-0.5 text-[10.5px] text-muted'>
				<span className='size-1.5 rounded-full bg-emerald-500' /> MINT · read only
			</span>
		</div>
		<div className='mb-3 ml-auto max-w-[86%] rounded-2xl rounded-br-md bg-brand px-3.5 py-2.5 text-[12.5px] leading-relaxed text-white'>
			How many bookings did we have last month, by room — and what did each bring in?
		</div>
		<p className='mb-2 font-mono text-[10px] text-faint'>mint · query_records · Bookings, Rooms</p>
		<div className='rounded-2xl rounded-bl-md border border-line p-3'>
			<p className='mb-2.5 text-[12.5px]'>September: 64 bookings, $21,480. Sea view rooms led:</p>
			{[
				['Sea view 2', 18, 7020],
				['Sea view 1', 15, 5850],
				['Loft', 12, 4560],
				['Garden 1', 11, 2290],
				['Garden 2', 8, 1760],
			].map(([r, n, v]) => (
				<div
					key={r as string}
					className='mb-1.5 grid grid-cols-[72px_1fr_56px] items-center gap-2 text-[11px]'>
					<span className='truncate'>{r}</span>
					<span className='h-2 rounded-full bg-soft'>
						<span
							className='block h-2 rounded-full bg-gradient-to-r from-rose-400 to-violet-500'
							style={{ width: `${((n as number) / 18) * 100}%` }}
						/>
					</span>
					<span className='text-right font-mono text-[10.5px] text-muted'>${(v as number).toLocaleString('en-US')}</span>
				</div>
			))}
			<p className='mt-2.5 text-[12px] text-muted'>Garden 2 is down 40% on August. Want it on the dashboard?</p>
		</div>
	</Frame>
);

const ScopeArt = () => (
	<Frame bodyClassName='p-5'>
		<Label>What this key can do</Label>
		<div className='divide-y divide-line rounded-xl border border-line'>
			{[
				['Project', 'Seaside Inn only'],
				['Acts as', 'Amira Khan · Manager'],
				['Reads', 'Bookings, Guests, Rooms, Payments'],
				['Writes', 'Nothing'],
				['Last used', '2 minutes ago'],
			].map(([k, v]) => (
				<div
					key={k}
					className='flex items-center justify-between gap-3 px-3 py-2.5'>
					<span className='text-faint'>{k}</span>
					<span className={cx('truncate text-right', k === 'Writes' && 'text-emerald-600 dark:text-emerald-400')}>{v}</span>
				</div>
			))}
		</div>
		<div className='mt-3 flex items-center justify-between rounded-xl border border-rose-200 px-3 py-2.5 dark:border-rose-400/25'>
			<span className='flex items-center gap-2'>
				<Lock className='size-3.5 text-rose-500' /> Stop it at once
			</span>
			<span className='rounded-full border border-rose-300 px-2.5 py-0.5 text-[10.5px] text-rose-600 dark:border-rose-400/40 dark:text-rose-400'>Revoke</span>
		</div>
	</Frame>
);

const WebhooksArt = () => (
	<Frame bodyClassName='p-5'>
		<Label>Webhook · Bookings</Label>
		<div className='rounded-xl border border-line px-3 py-2.5'>
			<div className='truncate font-mono text-[12px]'>https://desk.seaside-inn.com/hooks/mint</div>
			<div className='mt-2 flex flex-wrap gap-1.5'>
				{['Created', 'Changed'].map(e => (
					<span
						key={e}
						className='rounded-full border border-line px-2.5 py-0.5 text-[10.5px] text-muted'>
						{e}
					</span>
				))}
				<span className='ml-auto font-mono text-[10.5px] text-faint'>signed · sha256</span>
			</div>
		</div>
		<div className='mt-3 divide-y divide-line rounded-xl border border-line'>
			{[
				['create', 'Amira Khan · 3 nights', '200', true],
				['update', 'Room 12 → Room 14', '200', true],
				['create', 'Jon Park · 1 night', '503 · retried, 200', true],
			].map(([event, what, status, ok], i) => (
				<div
					key={i}
					className='flex items-center gap-2.5 px-3 py-2'>
					<span className={cx('size-2 shrink-0 rounded-full', ok ? 'bg-emerald-500' : 'bg-rose-500')} />
					<span className='w-12 font-mono text-[11px] text-faint'>{event as string}</span>
					<span className='flex-1 truncate text-[12px]'>{what as string}</span>
					<span className='font-mono text-[11px] text-muted'>{status as string}</span>
				</div>
			))}
		</div>
	</Frame>
);

/** The drawing for a workflow step. */
const FlowArt = ({ art }: { art: ArtKey }) => {
	switch (art) {
		case 'project':
			return <ProjectMock />;
		case 'connect':
			return <ConnectArt />;
		case 'plan':
			return <PlanArt />;
		case 'built':
			return <BuiltArt />;
		case 'deploy':
			return <DeployArt />;
		case 'edit-live':
			return <EditLiveArt />;
		case 'model':
			return <ModelMock />;
		case 'public':
			return <PublicArt />;
		case 'access':
			return <AccessArt />;
		case 'signin':
			return (
				<div className='mx-auto max-w-[420px]'>
					<SignInMock />
				</div>
			);
		case 'call':
			return <ApiMock />;
		case 'reference':
			return <ReferenceArt />;
		case 'pages':
			return <PagesMock />;
		case 'sidebar':
			return <SidebarArt />;
		case 'dashboard':
			return <DashboardMock />;
		case 'team':
			return <TeamMock />;
		case 'run':
			return <RecordMock />;
		case 'wizard':
			return <WizardArt />;
		case 'fields':
			return <FieldsArt />;
		case 'links':
			return <LinksArt />;
		case 'privacy':
			return <PrivacyArt />;
		case 'create':
			return <CreateArt />;
		case 'read-key':
			return <ReadKeyArt />;
		case 'ask':
			return <AskArt />;
		case 'scope':
			return <ScopeArt />;
		case 'webhooks':
			return <WebhooksArt />;
		case 'builder':
			return <SiteBuilderMock />;
		case 'publish-site':
			return <PublishSiteArt />;
	}
};

export default FlowArt;
