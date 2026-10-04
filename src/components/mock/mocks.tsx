import {
	AppWindow,
	Building2,
	CalendarDays,
	Check,
	ChevronDown,
	Globe,
	GripVertical,
	Hash,
	Image as ImageIcon,
	LayoutDashboard,
	ListChecks,
	Lock,
	Mail,
	Plus,
	Search,
	Sigma,
	Sparkles,
	Type,
	Users,
} from '@/components/ui/icons';
import { cx } from '@/components/ui';
import Frame, { Chip } from './Frame';

/*
 * Drawings of MINT's screens, one per step of the workflow. They follow the
 * real product (the tenant panel in the admin repo) — when a screen changes
 * there, change its drawing here.
 */

/* ------------------------------------------------------------- panel */

const BOOKINGS = [
	{ guest: 'Amira Khan', room: 'Sea view 2', date: 'Oct 4', status: 'Confirmed', tone: 'green' as const, total: '$420' },
	{ guest: 'Leo Martins', room: 'Garden 1', date: 'Oct 5', status: 'Pending', tone: 'amber' as const, total: '$260' },
	{ guest: 'Sara Ito', room: 'Loft', date: 'Oct 5', status: 'Confirmed', tone: 'green' as const, total: '$610' },
	{ guest: 'Noah Berg', room: 'Sea view 1', date: 'Oct 7', status: 'Cancelled', tone: 'red' as const, total: '$0' },
	{ guest: 'Priya Das', room: 'Garden 2', date: 'Oct 8', status: 'Pending', tone: 'amber' as const, total: '$300' },
	{ guest: 'Tom Okafor', room: 'Loft', date: 'Oct 9', status: 'Confirmed', tone: 'green' as const, total: '$540' },
];

const SIDEBAR = [
	{ icon: LayoutDashboard, label: 'Home', c: 'text-violet-500' },
	{ icon: CalendarDays, label: 'Bookings', active: true, c: 'text-emerald-500' },
	{ icon: Users, label: 'Guests', c: 'text-sky-500' },
	{ icon: Building2, label: 'Rooms', c: 'text-amber-500' },
	{ icon: ImageIcon, label: 'Media', c: 'text-rose-500' },
];

const AVATAR = ['bg-emerald-100 dark:bg-emerald-400/15 text-emerald-700 dark:text-emerald-300', 'bg-sky-100 dark:bg-sky-400/15 text-sky-700 dark:text-sky-300', 'bg-violet-100 dark:bg-violet-400/15 text-violet-700 dark:text-violet-300', 'bg-amber-100 dark:bg-amber-400/15 text-amber-700 dark:text-amber-300', 'bg-rose-100 dark:bg-rose-400/15 text-rose-700 dark:text-rose-300', 'bg-cyan-100 dark:bg-cyan-400/15 text-cyan-700 dark:text-cyan-300'];
const initials = (name: string) =>
	name
		.split(' ')
		.map(w => w[0])
		.join('');

export const PanelMock = ({ className }: { className?: string }) => (
	<Frame
		url='app.mintapp.shop/seaside-inn/bookings'
		className={className}>
		<div className='flex min-h-[340px]'>
			<div className='hidden w-[164px] shrink-0 border-r border-line bg-subtle p-3 sm:block'>
				<div className='mb-4 flex items-center gap-2 px-2'>
					<span className='inline-flex size-5 items-center justify-center rounded-md bg-brand text-[10px] font-bold text-white'>S</span>
					<span className='font-semibold'>Seaside Inn</span>
				</div>
				{SIDEBAR.map(({ icon: Icon, label, active, c }) => (
					<div
						key={label}
						className={cx(
							'mb-0.5 flex items-center gap-2 rounded-md px-2 py-1.5',
							active ? 'bg-bg font-medium text-fg shadow-sm' : 'text-muted'
						)}>
						<Icon className={cx('size-3.5', c)} />
						{label}
					</div>
				))}
			</div>
			<div className='min-w-0 flex-1 p-4'>
				<div className='mb-3 flex items-center justify-between'>
					<div>
						<p className='text-[14px] font-semibold'>Bookings</p>
						<p className='text-[10.5px] text-faint'>128 records</p>
					</div>
					<span className='inline-flex items-center gap-1 rounded-md bg-brand px-2.5 py-1 font-medium text-white'>
						<Plus className='size-3' /> Add booking
					</span>
				</div>
				<div className='mb-3 flex flex-wrap items-center gap-1.5'>
					<span className='inline-flex items-center gap-1.5 rounded-md border border-line px-2 py-1 text-faint'>
						<Search className='size-3' /> Search bookings
					</span>
					{['Status', 'Date', 'Room'].map(f => (
						<span
							key={f}
							className='inline-flex items-center gap-1 rounded-full border border-dashed border-line-strong px-2 py-0.5 text-muted'>
							<Plus className='size-2.5' />
							{f}
						</span>
					))}
				</div>
				<div className='overflow-hidden rounded-lg border border-line'>
					<div className='grid grid-cols-[1.5fr_1.1fr_0.8fr_1fr_0.7fr] gap-2 bg-subtle px-3 py-2 font-medium text-muted'>
						<span>Guest</span>
						<span>Room</span>
						<span>Date</span>
						<span>Status</span>
						<span className='text-right'>Total</span>
					</div>
					{BOOKINGS.map((r, i) => (
						<div
							key={r.guest}
							className='grid grid-cols-[1.5fr_1.1fr_0.8fr_1fr_0.7fr] items-center gap-2 border-t border-line px-3 py-2'>
							<span className='flex min-w-0 items-center gap-2 font-medium'>
								<span className={cx('inline-flex size-5 shrink-0 items-center justify-center rounded-full text-[9px] font-bold', AVATAR[i % AVATAR.length])}>
									{initials(r.guest)}
								</span>
								<span className='truncate'>{r.guest}</span>
							</span>
							<span className='truncate text-muted'>{r.room}</span>
							<span className='text-muted'>{r.date}</span>
							<span>
								<Chip tone={r.tone}>{r.status}</Chip>
							</span>
							<span className='text-right font-mono text-[11px]'>{r.total}</span>
						</div>
					))}
				</div>
			</div>
		</div>
	</Frame>
);

/* ----------------------------------------------------------- project */

export const ProjectMock = () => (
	<Frame
		url='app.mintapp.shop/projects/new'
		bodyClassName='p-5'>
		<p className='text-[14px] font-semibold'>New project</p>
		<p className='mb-4 text-faint'>Step 1 of 3 · What are you making?</p>
		<div className='grid grid-cols-2 gap-2.5'>
			{[
				{ icon: AppWindow, title: 'App', body: 'Tables, forms and a dashboard for your team', on: true },
				{ icon: Globe, title: 'Website', body: 'Pages, SEO and content, with analytics' },
			].map(({ icon: Icon, title, body, on }) => (
				<div
					key={title}
					className={cx('rounded-xl border p-3', on ? 'border-fg bg-subtle' : 'border-line')}>
					<div className='mb-2 flex items-center justify-between'>
						<Icon className='size-4' />
						<span
							className={cx(
								'inline-flex size-4 items-center justify-center rounded-full border',
								on ? 'border-fg bg-ink text-white' : 'border-line-strong'
							)}>
							{on && <Check className='size-2.5' />}
						</span>
					</div>
					<p className='font-semibold'>{title}</p>
					<p className='mt-0.5 leading-snug text-faint'>{body}</p>
				</div>
			))}
		</div>
		<div className='mt-4 space-y-2.5'>
			<div>
				<p className='mb-1 font-medium'>Name</p>
				<div className='rounded-md border border-line px-2.5 py-1.5'>
					Seaside Inn<span className='caret ml-px border-l border-fg' />
				</div>
			</div>
			<div>
				<p className='mb-1 font-medium'>Address</p>
				<div className='rounded-md border border-line bg-subtle px-2.5 py-1.5 font-mono text-[11px] text-muted'>
					app.mintapp.shop/<span className='text-fg'>seaside-inn</span>
				</div>
			</div>
		</div>
		<div className='mt-5 flex justify-end gap-2'>
			<span className='rounded-md px-3 py-1.5 text-muted'>Cancel</span>
			<span className='rounded-md bg-brand px-3 py-1.5 font-medium text-white'>Continue</span>
		</div>
	</Frame>
);

/* ------------------------------------------------------------- model */

const FIELDS = [
	{ icon: Users, name: 'Guest', kind: 'Link → Guests', req: true, c: AVATAR[1] },
	{ icon: Building2, name: 'Room', kind: 'Link → Rooms', req: true, c: AVATAR[1] },
	{ icon: CalendarDays, name: 'Check-in', kind: 'Date', req: true, c: AVATAR[3] },
	{ icon: Hash, name: 'Nights', kind: 'Number', c: AVATAR[0] },
	{ icon: ListChecks, name: 'Status', kind: 'Options · 3', c: AVATAR[4] },
	{ icon: Sigma, name: 'Total', kind: 'Formula', note: 'nights × room.rate', c: AVATAR[2] },
	{ icon: Type, name: 'Notes', kind: 'Long text', c: AVATAR[5] },
];

export const ModelMock = () => (
	<Frame
		url='app.mintapp.shop/seaside-inn/model-builder/new'
		bodyClassName='p-5'>
		<div className='mb-4 flex items-center justify-between'>
			<div>
				<p className='text-[14px] font-semibold'>Booking</p>
				<p className='text-faint'>7 fields · table, form and page made for you</p>
			</div>
			<span className='inline-flex items-center gap-1 rounded-md border border-line px-2 py-1 text-muted'>
				<Sparkles className='size-3 text-violet-500' /> <span className='text-gradient font-semibold'>Build with AI</span>
			</span>
		</div>
		<div className='overflow-hidden rounded-lg border border-line'>
			{FIELDS.map(({ icon: Icon, name, kind, req, note, c }, i) => (
				<div
					key={name}
					className={cx('flex items-center gap-2.5 px-3 py-2', i > 0 && 'border-t border-line')}>
					<GripVertical className='size-3 text-faint' />
					<span className={cx('inline-flex size-6 items-center justify-center rounded-md', c)}>
						<Icon className='size-3' />
					</span>
					<span className='font-medium'>{name}</span>
					{req && <span className='text-rose-500'>*</span>}
					{note && <span className='hidden truncate font-mono text-[10.5px] text-faint sm:inline'>{note}</span>}
					<span className='ml-auto inline-flex items-center gap-1 rounded-md border border-line px-2 py-0.5 text-muted'>
						{kind}
						<ChevronDown className='size-3' />
					</span>
				</div>
			))}
		</div>
		<div className='mt-3 flex items-center gap-1.5 rounded-lg border border-dashed border-line-strong px-3 py-2 text-muted'>
			<Plus className='size-3' /> Add a field
		</div>
	</Frame>
);

/* ------------------------------------------------------------- pages */

export const PagesMock = () => (
	<Frame
		url='app.mintapp.shop/seaside-inn/builder/bookings'
		bodyClassName='grid gap-0 sm:grid-cols-[1fr_1.1fr]'>
		<div className='border-b border-line p-4 sm:border-r sm:border-b-0'>
			<div className='mb-3 flex gap-1'>
				{['Table', 'Form', 'Page', 'Filters'].map((t, i) => (
					<span
						key={t}
						className={cx('rounded-md px-2 py-1', i === 1 ? 'bg-soft font-medium' : 'text-muted')}>
						{t}
					</span>
				))}
			</div>
			<p className='mb-2 font-medium'>Sections</p>
			{[
				{ t: 'Stay', f: 'Guest · Room · Check-in · Nights' },
				{ t: 'Payment', f: 'Status · Total' },
				{ t: 'Cancellation', f: 'Reason', rule: 'Shown when Status is Cancelled' },
			].map(s => (
				<div
					key={s.t}
					className='mb-2 rounded-lg border border-line p-2.5'>
					<p className='font-medium'>{s.t}</p>
					<p className='text-faint'>{s.f}</p>
					{s.rule && <p className='mt-1.5 inline-flex rounded bg-violet-50 dark:bg-violet-400/10 px-1.5 py-0.5 text-[10.5px] font-medium text-violet-600 dark:text-violet-400'>{s.rule}</p>}
				</div>
			))}
			<div className='mt-3 flex items-center justify-between rounded-lg bg-subtle px-2.5 py-2'>
				<span className='text-muted'>Draft · 3 changes</span>
				<span className='rounded-md bg-brand px-2.5 py-1 font-medium text-white'>Publish</span>
			</div>
		</div>
		<div className='bg-subtle p-4'>
			<p className='mb-3 font-medium text-muted'>Preview</p>
			<div className='rounded-xl border border-line bg-bg p-3.5'>
				<p className='mb-3 text-[13px] font-semibold'>Add booking</p>
				{[
					['Guest', 'Amira Khan'],
					['Room', 'Sea view 2'],
					['Check-in', 'Oct 4, 2026'],
				].map(([l, v]) => (
					<div
						key={l}
						className='mb-2'>
						<p className='mb-1 text-[10.5px] text-muted'>{l}</p>
						<div className='rounded-md border border-line px-2 py-1.5'>{v}</div>
					</div>
				))}
				<div className='mb-2'>
					<p className='mb-1 text-[10.5px] text-muted'>Status</p>
					<div className='flex items-center justify-between rounded-md border border-line px-2 py-1.5'>
						<Chip tone='green'>Confirmed</Chip>
						<ChevronDown className='size-3 text-faint' />
					</div>
				</div>
				<div className='mt-3 flex justify-end border-t border-line pt-3'>
					<span className='rounded-md bg-brand px-2.5 py-1 font-medium text-white'>Save</span>
				</div>
			</div>
		</div>
	</Frame>
);

/* -------------------------------------------------------------- team */

const PEOPLE = [
	{ name: 'Maya Chen', email: 'maya@seaside.inn', role: 'Owner', projects: 'All projects' },
	{ name: 'Jonas Weber', email: 'jonas@seaside.inn', role: 'Builder', projects: 'All projects' },
	{ name: 'Lea Moreau', email: 'lea@seaside.inn', role: 'Front desk', projects: 'Seaside Inn' },
	{ name: 'Sam Patel', email: 'sam@agency.co', role: 'Viewer', projects: 'Website' },
];

export const TeamMock = () => (
	<Frame
		url='app.mintapp.shop/org/members'
		bodyClassName='p-5'>
		<div className='mb-4 flex items-center justify-between'>
			<p className='text-[14px] font-semibold'>People</p>
			<span className='inline-flex items-center gap-1 rounded-md bg-brand px-2.5 py-1 font-medium text-white'>
				<Mail className='size-3' /> Invite
			</span>
		</div>
		<div className='mb-4 rounded-xl border border-amber-200 dark:border-amber-400/25 bg-amber-50/60 dark:bg-amber-400/10 p-3'>
			<p className='mb-2 font-medium'>Invite by email</p>
			<div className='flex flex-wrap gap-1.5'>
				<span className='flex-1 rounded-md border border-line bg-bg px-2 py-1.5 text-muted'>nina@seaside.inn</span>
				<span className='inline-flex items-center gap-1 rounded-md border border-line bg-bg px-2 py-1.5'>
					Front desk <ChevronDown className='size-3 text-faint' />
				</span>
			</div>
			<div className='mt-2 flex flex-wrap gap-1'>
				{['view', 'create', 'edit'].map(p => (
					<span
						key={p}
						className='inline-flex items-center gap-1 rounded bg-emerald-50 dark:bg-emerald-400/10 px-1.5 py-0.5 text-[10.5px] font-medium text-emerald-700 dark:text-emerald-300'>
						<Check className='size-2.5' /> records:{p}
					</span>
				))}
				<span className='inline-flex items-center gap-1 rounded bg-soft px-1.5 py-0.5 text-[10.5px] text-faint line-through'>
					records:delete
				</span>
			</div>
		</div>
		{PEOPLE.map((p, i) => (
			<div
				key={p.email}
				className={cx('flex items-center gap-2.5 py-2', i > 0 && 'border-t border-line')}>
				<span className={cx('inline-flex size-6 items-center justify-center rounded-full text-[10px] font-semibold', AVATAR[(i + 2) % AVATAR.length])}>
					{initials(p.name)}
				</span>
				<div className='min-w-0 flex-1'>
					<p className='truncate font-medium'>{p.name}</p>
					<p className='truncate text-[10.5px] text-faint'>{p.email}</p>
				</div>
				<span className='hidden text-muted sm:inline'>{p.projects}</span>
				<span className={cx('rounded-md px-2 py-0.5 font-medium', AVATAR[(i + 2) % AVATAR.length])}>{p.role}</span>
			</div>
		))}
	</Frame>
);

/* --------------------------------------------------------- dashboard */

const BARS = [38, 52, 44, 61, 58, 73, 66, 81, 77, 92, 86, 98];

const ROOM_MIX = [
	{ k: 'Sea view', v: 42, c: '#10b981' },
	{ k: 'Garden', v: 28, c: '#06b6d4' },
	{ k: 'Loft', v: 18, c: '#8b5cf6' },
	{ k: 'Suite', v: 12, c: '#f59e0b' },
];

/** A donut from stroke-dasharray segments. */
export const Donut = ({ parts, size = 92 }: { parts: { v: number; c: string }[]; size?: number }) => {
	const r = 15.9155; // circumference 100
	let offset = 25;
	return (
		<svg
			viewBox='0 0 42 42'
			width={size}
			height={size}>
			<circle
				cx='21'
				cy='21'
				r={r}
				fill='none'
				stroke='var(--bg-muted)'
				strokeWidth='6'
			/>
			{parts.map(p => {
				const el = (
					<circle
						key={p.c}
						cx='21'
						cy='21'
						r={r}
						fill='none'
						stroke={p.c}
						strokeWidth='6'
						strokeDasharray={`${p.v - 1.5} ${100 - p.v + 1.5}`}
						strokeDashoffset={offset}
					/>
				);
				offset -= p.v;
				return el;
			})}
		</svg>
	);
};

export const DashboardMock = () => (
	<Frame
		url='app.mintapp.shop/seaside-inn'
		bodyClassName='p-5'>
		<div className='mb-4 flex items-center justify-between'>
			<p className='text-[14px] font-semibold'>Good morning, Maya 👋</p>
			<span className='rounded-md border border-line px-2 py-0.5 text-muted'>This month</span>
		</div>
		<div className='mb-3 grid grid-cols-3 gap-2.5'>
			{[
				{ k: 'Bookings', v: '128', d: '+12%', c: 'from-emerald-50 dark:from-emerald-400/10 to-panel text-emerald-600 dark:text-emerald-400' },
				{ k: 'Revenue', v: '$48.2k', d: '+8%', c: 'from-sky-50 dark:from-sky-400/10 to-panel text-sky-600 dark:text-sky-400' },
				{ k: 'Occupancy', v: '86%', d: '+4 pts', c: 'from-violet-50 dark:from-violet-400/10 to-panel text-violet-600 dark:text-violet-400' },
			].map(s => (
				<div
					key={s.k}
					className={cx('rounded-xl border border-line bg-gradient-to-br p-3', s.c)}>
					<p className='text-muted'>{s.k}</p>
					<p className='mt-1 text-[18px] font-bold tracking-[-0.02em] text-fg'>{s.v}</p>
					<p className='text-[10.5px] font-semibold'>▲ {s.d}</p>
				</div>
			))}
		</div>
		<div className='mb-3 grid grid-cols-[1.5fr_1fr] gap-2.5'>
			<div className='rounded-xl border border-line p-3'>
				<div className='mb-3 flex items-center justify-between'>
					<p className='font-medium'>Bookings by week</p>
					<span className='text-faint'>12 wks</span>
				</div>
				<div className='flex h-[84px] items-end gap-1'>
					{BARS.map((h, i) => (
						<div
							key={i}
							className='grow flex-1 rounded-t-[3px] bg-gradient-to-t from-emerald-400 to-cyan-400'
							style={{ height: `${h}%`, opacity: 0.35 + (i / BARS.length) * 0.65, animationDelay: `${i * 40}ms` }}
						/>
					))}
				</div>
			</div>
			<div className='flex flex-col items-center justify-center rounded-xl border border-line p-3'>
				<Donut parts={ROOM_MIX} />
				<div className='mt-2 grid w-full grid-cols-2 gap-x-2 gap-y-0.5 text-[10px]'>
					{ROOM_MIX.map(r => (
						<span
							key={r.k}
							className='flex items-center gap-1 text-muted'>
							<span
								className='size-1.5 rounded-full'
								style={{ background: r.c }}
							/>
							{r.k}
						</span>
					))}
				</div>
			</div>
		</div>
		<div className='rounded-xl border border-line p-3'>
			<p className='mb-2 font-medium'>Latest bookings</p>
			{BOOKINGS.slice(0, 3).map((r, i) => (
				<div
					key={r.guest}
					className='flex items-center justify-between border-t border-line py-1.5 first:border-t-0'>
					<span className='flex items-center gap-2'>
						<span className={cx('inline-flex size-5 items-center justify-center rounded-full text-[9px] font-bold', AVATAR[i])}>{initials(r.guest)}</span>
						{r.guest}
					</span>
					<Chip tone={r.tone}>{r.status}</Chip>
				</div>
			))}
		</div>
	</Frame>
);

/* --------------------------------------------------------------- API */

export const ApiMock = () => (
	<div
		aria-hidden
		className='overflow-hidden rounded-2xl border border-line bg-[#0c0c0d] text-[12px] text-[#d8d8dc] shadow-panel select-none'>
		<div className='flex h-9 items-center gap-2 border-b border-white/10 px-4 font-mono text-[11px] text-white/50'>
			<span className='text-[#3ddc9f]'>●</span> site/app/rooms/page.tsx
		</div>
		<pre className='overflow-x-auto p-5 font-mono text-[12px] leading-[1.75]'>
			<code>
				<span className='text-white/40'>{'// Your public API — no server to run'}</span>
				{'\n'}
				<span className='text-[#c792ea]'>const</span> res = <span className='text-[#c792ea]'>await</span>{' '}
				<span className='text-[#82aaff]'>fetch</span>(
				{'\n  '}
				<span className='text-[#c3e88d]'>{"'https://api.mintapp.shop/public/api/seaside-inn/rooms'"}</span> +
				{'\n  '}
				<span className='text-[#c3e88d]'>{"'?status=available&rate_lte=300&sort=-rating'"}</span>
				{'\n'});
				{'\n'}
				<span className='text-[#c792ea]'>const</span> {'{'} doc, total {'}'} = <span className='text-[#c792ea]'>await</span> res.
				<span className='text-[#82aaff]'>json</span>();
				{'\n\n'}
				<span className='text-white/40'>{'// → { total: 4, doc: [{ name: "Garden 1", rate: 260, … }] }'}</span>
			</code>
		</pre>
	</div>
);

/* ---------------------------------------------------------------- AI */

export const AiChatMock = () => (
	<Frame bodyClassName='p-5'>
		<div className='mb-4 flex items-center gap-2'>
			<span className='inline-flex size-6 items-center justify-center rounded-full bg-soft'>
				<Sparkles className='size-3 text-violet-500' />
			</span>
			<p className='font-semibold'>Your AI assistant</p>
			<span className='ml-auto inline-flex items-center gap-1 rounded-full border border-line px-2 py-0.5 text-[10.5px] text-muted'>
				<span className='size-1.5 rounded-full bg-emerald-500' /> MINT connected
			</span>
		</div>
		<div className='ml-auto mb-3 max-w-[85%] rounded-2xl rounded-br-md bg-brand px-3.5 py-2.5 text-[12.5px] leading-relaxed text-white'>
			We rent rooms. Track guests, rooms and bookings — a booking’s total is nights times the room’s rate.
		</div>
		<div className='mb-3 rounded-xl border border-violet-200 dark:border-violet-400/25 bg-violet-50/70 dark:bg-violet-400/10 p-3 font-mono text-[11px]'>
			<p className='mb-1.5 font-semibold text-violet-600 dark:text-violet-400'>mint · plan_feature</p>
			{['Guest — name, email, phone', 'Room — name, rate, photos', 'Booking — guest → Guest, room → Room, nights, total = nights × room.rate'].map(
				l => (
					<p
						key={l}
						className='flex gap-1.5 leading-relaxed'>
						<Check className='mt-[3px] size-3 shrink-0 text-emerald-500' />
						<span>{l}</span>
					</p>
				)
			)}
		</div>
		<div className='max-w-[90%] rounded-2xl rounded-bl-md border border-line px-3.5 py-2.5 text-[12.5px] leading-relaxed'>
			Done — three models are live in <span className='font-medium'>Seaside Inn</span>, each with its table, form and page. Want a
			dashboard with this month’s bookings next?
		</div>
	</Frame>
);

/* -------------------------------------------------------------- site */

export const SiteMock = () => (
	<Frame
		url='app.mintapp.shop/seaside-web/analytics'
		bodyClassName='p-5'>
		<div className='mb-4 flex items-center justify-between'>
			<p className='text-[14px] font-semibold'>Analytics</p>
			<span className='inline-flex items-center gap-1 rounded-full border border-line px-2 py-0.5 text-[10.5px] text-muted'>
				<Lock className='size-2.5 text-emerald-500' /> No cookies
			</span>
		</div>
		<div className='mb-3 grid grid-cols-3 gap-2.5'>
			{[
				{ k: 'Visitors', v: '3,412' },
				{ k: 'Page views', v: '9,870' },
				{ k: 'Sign-ups', v: '214' },
			].map(s => (
				<div
					key={s.k}
					className='rounded-xl border border-line p-3'>
					<p className='text-faint'>{s.k}</p>
					<p className='mt-1 text-[17px] font-semibold tracking-[-0.02em]'>{s.v}</p>
				</div>
			))}
		</div>
		<svg
			viewBox='0 0 300 70'
			className='mb-3 h-[76px] w-full'
			preserveAspectRatio='none'>
			<defs>
				<linearGradient
					id='site-line'
					x1='0'
					x2='1'>
					<stop stopColor='#06b6d4' />
					<stop
						offset='1'
						stopColor='#8b5cf6'
					/>
				</linearGradient>
				<linearGradient
					id='site-fill'
					x1='0'
					y1='0'
					x2='0'
					y2='1'>
					<stop
						stopColor='#8b5cf6'
						stopOpacity='0.22'
					/>
					<stop
						offset='1'
						stopColor='#06b6d4'
						stopOpacity='0'
					/>
				</linearGradient>
			</defs>
			<path
				d='M0 55 C30 50 45 42 70 44 S110 30 135 33 S175 18 200 22 S245 10 270 12 L300 6 L300 70 L0 70Z'
				fill='url(#site-fill)'
			/>
			<path
				d='M0 55 C30 50 45 42 70 44 S110 30 135 33 S175 18 200 22 S245 10 270 12 L300 6'
				fill='none'
				stroke='url(#site-line)'
				strokeWidth='2'
			/>
		</svg>
		<div className='grid grid-cols-2 gap-2.5'>
			<div className='rounded-xl border border-line p-3'>
				<p className='mb-1.5 font-medium'>Top pages</p>
				{[
					['/', '41%'],
					['/rooms', '27%'],
					['/book', '13%'],
				].map(([p, v]) => (
					<p
						key={p}
						className='flex justify-between py-0.5 font-mono text-[11px]'>
						<span>{p}</span>
						<span className='text-faint'>{v}</span>
					</p>
				))}
			</div>
			<div className='rounded-xl border border-line p-3'>
				<p className='mb-1.5 font-medium'>Sources</p>
				{[
					['google.com', '52%'],
					['instagram.com', '21%'],
					['Direct', '18%'],
				].map(([p, v]) => (
					<p
						key={p}
						className='flex justify-between py-0.5 text-[11px]'>
						<span className='truncate'>{p}</span>
						<span className='text-faint'>{v}</span>
					</p>
				))}
			</div>
		</div>
	</Frame>
);

/* ---------------------------------------------------------- customers */

export const SignInMock = () => (
	<Frame
		url='seasideinn.com/account'
		bodyClassName='flex items-center justify-center bg-subtle p-8'>
		<div className='w-full max-w-[250px] rounded-2xl border border-line bg-bg p-5 shadow-panel'>
			<p className='text-center text-[14px] font-semibold'>Sign in to Seaside Inn</p>
			<p className='mb-4 text-center text-faint'>See and manage your bookings</p>
			<div className='mb-2 rounded-md border border-line px-2.5 py-1.5 text-muted'>amira@mail.com</div>
			<div className='mb-3 rounded-md border border-line px-2.5 py-1.5 tracking-[0.3em] text-muted'>••••••••</div>
			<div className='rounded-md bg-brand py-1.5 text-center font-medium text-white'>Sign in</div>
			<p className='mt-3 text-center text-[10.5px] text-faint'>
				New here? <span className='text-fg underline'>Create an account</span>
			</p>
		</div>
	</Frame>
);

/* ------------------------------------------------------------ record */

const HISTORY = [
	{ who: 'Lea', what: 'set Status to Confirmed', when: '2m' },
	{ who: 'Jonas', what: 'added Notes', when: '1h' },
	{ who: 'Website', what: 'created this booking', when: '3h' },
];

export const RecordMock = () => (
	<Frame
		url='app.mintapp.shop/seaside-inn/bookings/BK-0128'
		bodyClassName='grid sm:grid-cols-[1.35fr_0.65fr]'>
		<div className='p-5'>
			<p className='font-mono text-[10.5px] text-faint'>Bookings / BK-0128</p>
			<div className='mt-1 mb-4 flex items-center gap-2'>
				<p className='text-[15px] font-semibold'>Amira Khan · Sea view 2</p>
				<Chip tone='green'>Confirmed</Chip>
			</div>
			<div className='mb-4 flex gap-1 border-b border-line'>
				{['Overview', 'Payments · 2', 'Messages · 5'].map((t, i) => (
					<span
						key={t}
						className={cx('-mb-px border-b px-2 pb-2', i === 0 ? 'border-fg font-medium' : 'border-transparent text-muted')}>
						{t}
					</span>
				))}
			</div>
			<div className='grid grid-cols-2 gap-x-4 gap-y-3'>
				{[
					['Guest', <span key='g' className='inline-flex items-center gap-1 rounded-md border border-line px-1.5 py-0.5'><Users className='size-3 text-faint' />Amira Khan</span>],
					['Room', <span key='r' className='inline-flex items-center gap-1 rounded-md border border-line px-1.5 py-0.5'><Building2 className='size-3 text-faint' />Sea view 2</span>],
					['Check-in', 'Oct 4, 2026'],
					['Nights', '3'],
					['Rate', '$140'],
					['Total', <span key='t' className='inline-flex items-center gap-1.5 font-mono'>$420 <Sigma className='size-3 text-violet-500' /></span>],
				].map(([k, v]) => (
					<div key={k as string}>
						<p className='mb-1 text-[10.5px] text-faint'>{k}</p>
						<div className='font-medium'>{v}</div>
					</div>
				))}
			</div>
		</div>
		<div className='border-t border-line bg-subtle p-4 sm:border-t-0 sm:border-l'>
			<p className='mb-3 font-medium'>History</p>
			{HISTORY.map(h => (
				<div
					key={h.what}
					className='mb-3 flex gap-2'>
					<span className='mt-1 size-1.5 shrink-0 rounded-full bg-line-strong' />
					<div>
						<p className='leading-snug'>
							<span className='font-medium'>{h.who}</span> <span className='text-muted'>{h.what}</span>
						</p>
						<p className='text-[10.5px] text-faint'>{h.when} ago</p>
					</div>
				</div>
			))}
			<span className='mt-1 inline-flex rounded-md border border-line bg-bg px-2 py-1 text-muted'>Undo last change</span>
		</div>
	</Frame>
);
