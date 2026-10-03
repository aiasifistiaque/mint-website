'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FormEvent, useEffect, useState } from 'react';
import { ArrowRight, Check, Loader2 } from '@/components/ui/icons';
import { API_URL, APP } from '@/lib/config';
import { cx } from '@/components/ui';

/**
 * "Join the waitlist" — posts to the backend's POST /public/waitlist
 * (controllers/waitlist/joinWaitlist.controller.ts), which keeps one entry per
 * email and answers with the person's place in line.
 *
 *   inline: one email field and a button, for heroes and CTA bands.
 *   full:   the /waitlist page — name, company, role, team size, use case.
 *
 * The inline form remembers the email for this tab, so /waitlist can prefill
 * it when someone goes on to add their details (same email = same entry).
 */

const EMAIL_KEY = 'mint-waitlist-email';

const TEAM_SIZES = [
	{ value: 'just-me', label: 'Just me' },
	{ value: '2-10', label: '2–10' },
	{ value: '11-50', label: '11–50' },
	{ value: '51-200', label: '51–200' },
	{ value: '200+', label: '200+' },
];

type Result = { position: number; already: boolean };

const remember = (email: string) => {
	try {
		sessionStorage.setItem(EMAIL_KEY, email);
	} catch {}
};
const recall = () => {
	try {
		return sessionStorage.getItem(EMAIL_KEY) || '';
	} catch {
		return '';
	}
};

const join = async (body: Record<string, string>): Promise<Result> => {
	let res: Response;
	try {
		res = await fetch(`${API_URL}/public/waitlist`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});
	} catch {
		throw new Error('We couldn’t reach the server. Check your connection and try again.');
	}
	const data = await res.json().catch(() => ({}));
	if (!res.ok) throw new Error(data?.message || 'Something went wrong — try again in a moment.');
	return data as Result;
};

const ordinal = (n: number) => `#${n.toLocaleString('en-US')}`;

/* ------------------------------------------------------------ inline */

export const WaitlistInline = ({ className, align = 'left', dark }: { className?: string; align?: 'left' | 'center'; dark?: boolean }) => {
	const pathname = usePathname();
	const [email, setEmail] = useState('');
	const [trap, setTrap] = useState('');
	const [busy, setBusy] = useState(false);
	const [error, setError] = useState('');
	const [done, setDone] = useState<Result | null>(null);

	const submit = async (e: FormEvent) => {
		e.preventDefault();
		if (busy) return;
		setBusy(true);
		setError('');
		try {
			const result = await join({ email, source: pathname, website: trap });
			remember(email.trim().toLowerCase());
			setDone(result);
		} catch (err: any) {
			setError(err.message);
		} finally {
			setBusy(false);
		}
	};

	if (done)
		return (
			<Joined
				result={done}
				className={cx(className, align === 'center' && 'mx-auto text-center', dark && 'text-white [&_.text-muted]:text-white/65 [&_a]:text-white')}
				align={align}
			/>
		);

	return (
		<form
			onSubmit={submit}
			className={cx('w-full max-w-[440px]', align === 'center' && 'mx-auto', className)}>
			<div className='flex items-center gap-1.5 rounded-full border border-line-strong bg-white p-1.5 shadow-float transition-colors focus-within:border-violet-400'>
				<label
					htmlFor='waitlist-email'
					className='sr-only'>
					Work email
				</label>
				<input
					id='waitlist-email'
					type='email'
					required
					autoComplete='email'
					placeholder='you@company.com'
					value={email}
					onChange={e => setEmail(e.target.value)}
					className='h-11 min-w-0 flex-1 bg-transparent pl-4 text-[15px] outline-none placeholder:text-faint'
				/>
				<Trap
					value={trap}
					onChange={setTrap}
				/>
				<button
					type='submit'
					disabled={busy}
					className='inline-flex h-11 shrink-0 items-center gap-2 rounded-full bg-brand px-5 text-[14px] font-semibold text-white shadow-[0_8px_24px_-8px_rgb(99_102_241/0.7)] transition-[filter] hover:brightness-110 disabled:opacity-60'>
					{busy ? <Loader2 className='size-4 animate-spin' /> : null}
					Join the waitlist
				</button>
			</div>
			<p
				role={error ? 'alert' : undefined}
				className={cx('mt-3 text-[13px]', error ? (dark ? 'text-rose-300' : 'text-rose-600') : dark ? 'text-white/50' : 'text-faint', align === 'center' && 'text-center')}>
				{error || 'A few teams at a time. One email when your spot opens — no spam.'}
			</p>
		</form>
	);
};

const Joined = ({ result, className, align }: { result: Result; className?: string; align: 'left' | 'center' }) => (
	<div
		role='status'
		className={cx('fade-in w-full max-w-[460px]', className)}>
		<div className={cx('flex items-center gap-3', align === 'center' && 'justify-center')}>
			<span className='inline-flex size-8 items-center justify-center rounded-full bg-brand text-white'>
				<Check className='size-4' />
			</span>
			<p className='text-[17px] font-medium tracking-[-0.01em]'>
				{result.already ? 'You’re already on the list' : 'You’re on the list'}
				{result.position > 0 && <span className='text-muted'> — {ordinal(result.position)}</span>}
			</p>
		</div>
		<p className='mt-3 text-[14px] leading-relaxed text-muted'>
			We’ll email you when your spot opens.{' '}
			<Link
				href='/waitlist#details'
				className='text-fg underline underline-offset-4'>
				Tell us what you’re building
			</Link>{' '}
			and we’ll set your workspace up for it.
		</p>
	</div>
);

/** A field people never see; bots fill it in. */
const Trap = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => (
	<input
		type='text'
		name='website'
		tabIndex={-1}
		autoComplete='off'
		aria-hidden
		value={value}
		onChange={e => onChange(e.target.value)}
		className='absolute -left-[9999px] h-0 w-0 opacity-0'
	/>
);

/* -------------------------------------------------------------- full */

const FIELD =
	'h-11 w-full rounded-xl border border-line-strong bg-white px-3.5 text-[15px] outline-none transition-colors placeholder:text-faint focus:border-violet-400';

export const WaitlistFull = () => {
	const pathname = usePathname();
	const [form, setForm] = useState({ email: '', name: '', company: '', role: '', teamSize: '', useCase: '' });
	const [trap, setTrap] = useState('');
	const [busy, setBusy] = useState(false);
	const [error, setError] = useState('');
	const [done, setDone] = useState<Result | null>(null);

	useEffect(() => {
		const email = recall();
		if (email) setForm(f => (f.email ? f : { ...f, email }));
	}, []);

	const set = (key: keyof typeof form) => (e: { target: { value: string } }) => setForm(f => ({ ...f, [key]: e.target.value }));

	const submit = async (e: FormEvent) => {
		e.preventDefault();
		if (busy) return;
		setBusy(true);
		setError('');
		try {
			const result = await join({ ...form, source: pathname, website: trap });
			remember(form.email.trim().toLowerCase());
			setDone(result);
		} catch (err: any) {
			setError(err.message);
		} finally {
			setBusy(false);
		}
	};

	if (done)
		return (
			<div
				role='status'
				className='fade-in rounded-2xl border border-line bg-white p-8 shadow-float md:p-10'>
				<span className='inline-flex size-12 items-center justify-center rounded-2xl bg-brand text-white shadow-lg'>
					<Check className='size-5' />
				</span>
				<h3 className='mt-6 text-[28px] font-medium tracking-[-0.03em]'>
					{done.already ? 'Thanks — your details are updated' : 'You’re on the list'}
				</h3>
				{done.position > 0 && (
					<p className='mt-2 text-[15px] text-muted'>
						Your place in line: <span className='text-gradient font-mono font-bold'>{ordinal(done.position)}</span>
					</p>
				)}
				<p className='mt-5 text-[15px] leading-relaxed text-muted'>
					We open MINT to a few teams at a time and set each one up for what they told us they’re building. You’ll get one
					email when your spot opens — with a link straight into your new workspace.
				</p>
				<div className='mt-8 flex flex-wrap gap-3'>
					<Link
						href='/workflow'
						className='inline-flex h-10 items-center gap-2 rounded-full border border-line-strong px-5 text-[14px] font-medium hover:bg-subtle'>
						See the workflow
						<ArrowRight className='size-4' />
					</Link>
					<a
						href={APP.login}
						className='inline-flex h-10 items-center rounded-full px-4 text-[14px] text-muted hover:text-fg'>
						Already have access? Log in
					</a>
				</div>
			</div>
		);

	return (
		<form
			id='details'
			onSubmit={submit}
			className='rounded-2xl border border-line bg-white p-6 shadow-float md:p-8'>
			<div className='grid gap-5 sm:grid-cols-2'>
				<Field
					label='Work email'
					required
					className='sm:col-span-2'>
					<input
						type='email'
						required
						autoComplete='email'
						placeholder='you@company.com'
						value={form.email}
						onChange={set('email')}
						className={FIELD}
					/>
				</Field>
				<Field label='Your name'>
					<input
						autoComplete='name'
						placeholder='Ada Lovelace'
						value={form.name}
						onChange={set('name')}
						className={FIELD}
						maxLength={120}
					/>
				</Field>
				<Field label='Company'>
					<input
						autoComplete='organization'
						placeholder='Acme Inc.'
						value={form.company}
						onChange={set('company')}
						className={FIELD}
						maxLength={120}
					/>
				</Field>
				<Field label='Your role'>
					<input
						autoComplete='organization-title'
						placeholder='Founder, ops lead, developer…'
						value={form.role}
						onChange={set('role')}
						className={FIELD}
						maxLength={120}
					/>
				</Field>
				<Field
					label='Team size'
					group>
					<div className='flex flex-wrap gap-1.5'>
						{TEAM_SIZES.map(t => (
							<button
								key={t.value}
								type='button'
								aria-pressed={form.teamSize === t.value}
								onClick={() => setForm(f => ({ ...f, teamSize: f.teamSize === t.value ? '' : t.value }))}
								className={cx(
									'h-11 rounded-xl border px-3.5 text-[14px] transition-colors',
									form.teamSize === t.value ? 'border-violet-500 bg-violet-500 text-white' : 'border-line-strong bg-white hover:border-violet-300'
								)}>
								{t.label}
							</button>
						))}
					</div>
				</Field>
				<Field
					label='What do you want to build?'
					className='sm:col-span-2'>
					<textarea
						rows={4}
						placeholder='A booking system for our three clinics, with a patient sign-in on our website…'
						value={form.useCase}
						onChange={set('useCase')}
						maxLength={2000}
						className={cx(FIELD, 'h-auto resize-y py-3 leading-relaxed')}
					/>
				</Field>
			</div>
			<Trap
				value={trap}
				onChange={setTrap}
			/>
			{error && (
				<p
					role='alert'
					className='mt-5 text-[14px] text-rose-600'>
					{error}
				</p>
			)}
			<div className='mt-7 flex flex-wrap items-center justify-between gap-4'>
				<p className='max-w-[360px] text-[13px] leading-relaxed text-faint'>
					Only your email is required. We use these details to set up your workspace — see{' '}
					<Link
						href='/privacy'
						className='underline underline-offset-2'>
						privacy
					</Link>
					.
				</p>
				<button
					type='submit'
					disabled={busy}
					className='inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-[15px] font-semibold text-white shadow-[0_10px_30px_-8px_rgb(99_102_241/0.6)] transition-[filter] hover:brightness-110 disabled:opacity-60'>
					{busy && <Loader2 className='size-4 animate-spin' />}
					Join the waitlist
					{!busy && <ArrowRight className='size-4' />}
				</button>
			</div>
		</form>
	);
};

/** A labelled input; `group` for a set of buttons (a <label> would click the first one). */
const Field = ({
	label,
	required,
	group,
	className,
	children,
}: {
	label: string;
	required?: boolean;
	group?: boolean;
	className?: string;
	children: React.ReactNode;
}) => {
	const caption = (
		<span className='text-[13px] font-medium'>
			{label}
			{required ? <span className='text-rose-500'> *</span> : <span className='font-normal text-faint'> · optional</span>}
		</span>
	);
	return group ? (
		<div
			role='group'
			aria-label={label}
			className={cx('flex flex-col gap-2', className)}>
			{caption}
			{children}
		</div>
	) : (
		<label className={cx('flex flex-col gap-2', className)}>
			{caption}
			{children}
		</label>
	);
};
