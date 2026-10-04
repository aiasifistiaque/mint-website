import type { Metadata } from 'next';
import { BookOpenCheck, Clock3, Eye, Hammer, KeyRound, ShieldCheck, Sparkles, UserCheck } from '@/components/ui/icons';
import { Accent, Button, IconTile, PageHero, Reveal, Section, SectionHead, TextLink, cx } from '@/components/ui';
import { AiChatMock } from '@/components/mock/mocks';
import AiFlow from '@/components/viz/AiFlow';
import CtaBand from '@/components/site/CtaBand';
import { APP } from '@/lib/config';
import { tone, type Tone } from '@/lib/tones';

export const metadata: Metadata = {
	title: 'Build with AI',
	description:
		'Connect Claude, ChatGPT, Cursor or any MCP assistant to a MINT project. Describe what you need; it plans and builds models, pages and dashboards — within your role.',
	alternates: { canonical: '/ai' },
};

const ASSISTANTS: { name: string; how: string; c: Tone }[] = [
	{ name: 'Claude', how: 'Add a custom connector with your project’s URL — on the web or desktop.', c: 'amber' },
	{ name: 'ChatGPT', how: 'Turn on developer mode and create a connector with the URL.', c: 'emerald' },
	{ name: 'Claude Code', how: 'One command in your terminal adds MINT as an MCP server.', c: 'violet' },
	{ name: 'Cursor', how: 'Add the server to its MCP settings; the tools appear in Agent mode.', c: 'sky' },
	{ name: 'Anything MCP', how: 'Any client that speaks Streamable HTTP, with your key as a header.', c: 'rose' },
];

const KEYS: { icon: typeof Hammer; t: string; b: string; c: Tone }[] = [
	{ icon: Hammer, t: 'Can build', b: 'On: it creates and changes models and pages. Off: it can only look and check plans.', c: 'emerald' },
	{ icon: BookOpenCheck, t: 'Can read records', b: 'Answer questions from your data — only pages you can view, never changing anything.', c: 'sky' },
	{ icon: Clock3, t: 'Expires', b: 'Never, or after 7, 30 or 90 days, or a year.', c: 'amber' },
];

const SAFE: { icon: typeof Hammer; t: string; b: string; c: Tone }[] = [
	{ icon: UserCheck, t: 'It acts as you', b: 'A key can never do more than your role allows, and stops if you lose access.', c: 'violet' },
	{ icon: ShieldCheck, t: 'Same checks as the builder', b: 'Everything it builds goes through the same validation as building by hand.', c: 'emerald' },
	{ icon: KeyRound, t: 'One key, one project', b: 'Each key belongs to one project. See when it was last used; revoke it at once.', c: 'amber' },
	{ icon: Eye, t: 'Nothing hidden', b: 'What the AI changes lands in history next to everyone else’s changes.', c: 'rose' },
];

const PROMPTS = [
	'Make a booking system with rooms, guests and payments.',
	'Add a “VIP” flag to clients and a filter for it.',
	'Which invoices are overdue by more than 30 days?',
	'Put this month’s revenue and new clients on the dashboard.',
	'Only show salaries to people with the finance role.',
	'Draft a home page and an about page for our website.',
];

export default function AiPage() {
	return (
		<>
			<PageHero
				eyebrow='Build with AI'
				color='violet'
				title={
					<>
						Your AI, <Accent>building your backend.</Accent>
					</>
				}
				lead='Connect the assistant you already pay for to a MINT project. Describe the backend you need in plain words — it plans the models with you and builds them, with their API and admin screens. Then ask it questions about your data.'
				aside={<AiChatMock />}>
				<Button
					href='/waitlist'
					variant='brand'
					arrow>
					Join the waitlist
				</Button>
				<Button
					href={APP.guide('connect-ai')}
					variant='secondary'>
					Read the guide
				</Button>
			</PageHero>

			<Section tone='subtle'>
				<SectionHead
					eyebrow='How it works'
					color='violet'
					title={
						<>
							From a sentence to software, <Accent>in four moves.</Accent>
						</>
					}
				/>
				<AiFlow />
			</Section>

			<Section>
				<SectionHead
					eyebrow='Ask anything'
					color='sky'
					title='Things people ask on an ordinary day.'
					lead='Build, change, or just ask — the same conversation does all three.'
				/>
				<div className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
					{PROMPTS.map((p, i) => (
						<Reveal
							key={p}
							delay={(i % 3) * 60}
							className='flex items-start gap-3 rounded-2xl border border-line bg-panel p-5 shadow-panel'>
							<Sparkles className={cx('mt-0.5 size-5 shrink-0', tone((['violet', 'sky', 'emerald', 'amber', 'rose', 'cyan'] as const)[i]).text)} />
							<p className='text-[15.5px] font-medium leading-snug'>{p}</p>
						</Reveal>
					))}
				</div>
			</Section>

			<Section tone='ink'>
				<SectionHead
					dark
					eyebrow='Works with'
					color='emerald'
					title={
						<>
							Bring <Accent>the assistant you like.</Accent>
						</>
					}
					lead='MINT speaks MCP, the open protocol AI assistants use to work with other tools. Your project’s Connect AI page shows each set-up with your key already filled in.'
				/>
				<div className='grid gap-3 sm:grid-cols-2 lg:grid-cols-5'>
					{ASSISTANTS.map(a => (
						<div
							key={a.name}
							className='rounded-2xl border border-white/10 bg-white/[0.05] p-5'>
							<span className={cx('mb-4 block h-1.5 w-10 rounded-full bg-gradient-to-r', tone(a.c).grad)} />
							<p className='font-display text-[17px] font-medium'>{a.name}</p>
							<p className='mt-2 text-[13.5px] leading-relaxed text-white/60'>{a.how}</p>
						</div>
					))}
				</div>
			</Section>

			<Section>
				<div className='grid gap-14 lg:grid-cols-2 lg:gap-20'>
					<div>
						<SectionHead
							className='mb-10 md:mb-10'
							eyebrow='Project keys'
							color='amber'
							title='You decide what it may do.'
							lead='Make a key per assistant, name it after where it’s used, and choose:'
						/>
						<div className='flex flex-col gap-3'>
							{KEYS.map(k => (
								<div
									key={k.t}
									className='flex gap-4 rounded-2xl border border-line bg-panel p-5 shadow-panel'>
									<IconTile color={k.c}>
										<k.icon />
									</IconTile>
									<div>
										<p className='font-display text-[16px] font-medium'>{k.t}</p>
										<p className='mt-1 text-[14px] leading-relaxed text-muted'>{k.b}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div>
						<SectionHead
							className='mb-10 md:mb-10'
							eyebrow='Safe by design'
							color='emerald'
							title='Powerful, never unsupervised.'
						/>
						<div className='grid gap-3 sm:grid-cols-2'>
							{SAFE.map(s => (
								<div
									key={s.t}
									className='rounded-2xl border border-line bg-panel p-5 shadow-panel'>
									<IconTile
										color={s.c}
										solid>
										<s.icon />
									</IconTile>
									<p className='font-display mt-4 text-[16px] font-medium'>{s.t}</p>
									<p className='mt-1 text-[14px] leading-relaxed text-muted'>{s.b}</p>
								</div>
							))}
						</div>
						<TextLink
							href={APP.guide('connect-ai')}
							className='mt-8'>
							Connecting your assistant, step by step
						</TextLink>
					</div>
				</div>
			</Section>

			<CtaBand
				title={
					<>
						Your AI is ready. <Accent>Give it something to build.</Accent>
					</>
				}
			/>
		</>
	);
}
