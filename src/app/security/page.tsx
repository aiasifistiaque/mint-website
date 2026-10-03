import type { Metadata } from 'next';
import { Archive, Building2, Eye, FolderKanban, Fingerprint, History, KeyRound, Lock, MonitorSmartphone, ShieldCheck, Users } from '@/components/ui/icons';
import { Accent, IconTile, PageHero, Reveal, Section, SectionHead, TextLink, cx } from '@/components/ui';
import { TeamMock } from '@/components/mock/mocks';
import CtaBand from '@/components/site/CtaBand';
import { APP } from '@/lib/config';
import type { Tone } from '@/lib/tones';

export const metadata: Metadata = {
	title: 'Teams & security',
	description:
		'Organizations, roles and per-project access; passkeys and two-step sign-in; signed-in devices; full history; data scoped to its organization on every request.',
	alternates: { canonical: '/security' },
};

const ROLES = [
	{ r: 'Owner', p: ['view', 'create', 'edit', 'delete', 'build', 'manage'], c: 'bg-violet-100 text-violet-700' },
	{ r: 'Builder', p: ['view', 'create', 'edit', 'delete', 'build'], c: 'bg-sky-100 text-sky-700' },
	{ r: 'Front desk', p: ['view', 'create', 'edit'], c: 'bg-emerald-100 text-emerald-700' },
	{ r: 'Viewer', p: ['view'], c: 'bg-amber-100 text-amber-700' },
];
const PERMS = ['view', 'create', 'edit', 'delete', 'build', 'manage'];

const POINTS: { icon: typeof Lock; t: string; b: string; c: Tone; guide?: string }[] = [
	{ icon: Fingerprint, t: 'Passkeys & two-step sign-in', b: 'Sign in with a passkey, or add an email code on top of your password. Backup codes for the day you lose a device.', c: 'violet', guide: 'account#overview' },
	{ icon: MonitorSmartphone, t: 'Signed-in devices', b: 'See every device on your account, where and when it signed in, and sign any of them out.', c: 'sky', guide: 'account#devices' },
	{ icon: History, t: 'History on every record', b: 'Who changed which field, from what to what, and when — with undo for mistakes.', c: 'emerald', guide: 'records#history' },
	{ icon: Lock, t: 'Private records', b: 'Records only their owner — or the people they share them with — can open.', c: 'rose', guide: 'models#models-access' },
	{ icon: ShieldCheck, t: 'Scoped on every request', b: 'Every project’s data belongs to its organization; every API call is checked against it.', c: 'amber' },
	{ icon: Archive, t: 'Archive, not delete', b: 'Hide records everywhere without losing them, and bring them back when you need them.', c: 'cyan', guide: 'records#bulk' },
	{ icon: KeyRound, t: 'Scoped keys', b: 'AI and API keys belong to one project, carry only the access you give them, and can expire.', c: 'violet', guide: 'connect-ai#mcp-keys' },
	{ icon: Eye, t: 'Secrets stay secret', b: 'Password fields are masked in the panel and kept out of history; site secrets never reach the public API.', c: 'emerald' },
];

export default function SecurityPage() {
	return (
		<>
			<PageHero
				eyebrow='Teams & security'
				color='amber'
				title={
					<>
						Everyone in. <Accent>Each with the right access.</Accent>
					</>
				}
				lead='Invite your whole team without worrying about who can see what. Roles decide what people can do; projects decide where. And every change is on the record.'
				aside={<TeamMock />}
			/>

			<Section tone='subtle'>
				<SectionHead
					eyebrow='Roles & projects'
					color='sky'
					title='Plain permissions. No surprises.'
					lead='Roles use a short, standard set of permissions. Narrowing someone’s access is as simple as giving them fewer projects.'
				/>
				<div className='grid gap-6 lg:grid-cols-[1.3fr_1fr]'>
					<Reveal className='overflow-x-auto rounded-2xl border border-line bg-white shadow-panel'>
						<table className='w-full min-w-[560px] text-[14px]'>
							<thead>
								<tr className='border-b border-line text-left text-[12px] uppercase tracking-[0.08em] text-faint'>
									<th className='px-5 py-4 font-semibold'>Role</th>
									{PERMS.map(p => (
										<th
											key={p}
											className='px-2 py-4 text-center font-semibold'>
											{p}
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{ROLES.map(r => (
									<tr
										key={r.r}
										className='border-t border-line'>
										<td className='px-5 py-4'>
											<span className={cx('rounded-full px-3 py-1 text-[13px] font-semibold', r.c)}>{r.r}</span>
										</td>
										{PERMS.map(p => (
											<td
												key={p}
												className='px-2 py-4 text-center'>
												{r.p.includes(p) ? (
													<span className='inline-block size-3 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500' />
												) : (
													<span className='inline-block size-3 rounded-full bg-soft' />
												)}
											</td>
										))}
									</tr>
								))}
							</tbody>
						</table>
					</Reveal>
					<div className='flex flex-col gap-3'>
						{[
							{ icon: Building2, t: 'An organization for your company', b: 'With as many projects as you need. Belong to several and switch in a click.', c: 'amber' as const },
							{ icon: FolderKanban, t: 'Every project, or just some', b: 'Give people all projects, or only the ones they work in. Elsewhere, they see nothing.', c: 'violet' as const },
							{ icon: Users, t: 'Invite by email', b: 'Pick a role and projects as you invite. They join with an account of their own.', c: 'emerald' as const },
						].map(x => (
							<div
								key={x.t}
								className='flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-panel'>
								<IconTile color={x.c}>
									<x.icon />
								</IconTile>
								<div>
									<p className='font-display text-[16px] font-medium'>{x.t}</p>
									<p className='mt-1 text-[14px] leading-relaxed text-muted'>{x.b}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</Section>

			<Section>
				<SectionHead
					eyebrow='Security'
					color='emerald'
					title={
						<>
							Safe by default, <Accent>not by add-on.</Accent>
						</>
					}
				/>
				<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
					{POINTS.map((p, i) => (
						<Reveal
							key={p.t}
							delay={(i % 4) * 60}
							className='flex flex-col rounded-2xl border border-line bg-white p-6 shadow-panel'>
							<IconTile
								color={p.c}
								solid>
								<p.icon />
							</IconTile>
							<h3 className='mt-5 text-[17px] font-medium tracking-[-0.015em]'>{p.t}</h3>
							<p className='mt-1.5 flex-1 text-[14px] leading-relaxed text-muted'>{p.b}</p>
							{p.guide && (
								<TextLink
									href={APP.guide(p.guide)}
									className='mt-4 text-[13px]'>
									Guide
								</TextLink>
							)}
						</Reveal>
					))}
				</div>
			</Section>

			<CtaBand />
		</>
	);
}
