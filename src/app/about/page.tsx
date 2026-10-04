import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import { Compass, Hand, Layers, Sparkles } from '@/components/ui/icons';
import { Accent, IconTile, PageHero, Reveal, Section, SectionHead } from '@/components/ui';
import CtaBand from '@/components/site/CtaBand';
import type { Tone } from '@/lib/tones';

export const metadata: Metadata = pageMeta({
	title: 'About',
	description:
		'Why we’re building MINT: every business deserves software that fits it, built and changed by the people who run it.',
	path: '/about',
});

const BELIEFS: { icon: typeof Compass; t: string; b: string; c: Tone }[] = [
	{
		icon: Hand,
		c: 'emerald',
		t: 'The expert should build the tool',
		b: 'The person who knows how the business works shouldn’t have to explain it to someone else and wait. They should build it — and change it themselves.',
	},
	{
		icon: Layers,
		c: 'sky',
		t: 'Real software, not a workaround',
		b: 'Validation, links, roles, history, an API: the things that make software trustworthy should come with every project, not be bolted on later.',
	},
	{
		icon: Sparkles,
		c: 'violet',
		t: 'AI that builds, not just chats',
		b: 'Assistants are great at turning a description into structure. We give them a safe, checked place to build — under your rules and your role.',
	},
	{
		icon: Compass,
		c: 'amber',
		t: 'Simple on the surface',
		b: 'Every screen should explain itself, every feature should have a guide, and nothing should need a manual to get started.',
	},
];

export default function AboutPage() {
	return (
		<>
			<PageHero
				eyebrow='About'
				color='emerald'
				title={
					<>
						Every business deserves <Accent>software that fits it.</Accent>
					</>
				}
				lead='Most businesses run on tools that almost fit — a spreadsheet that’s grown too big, an app built for someone else’s process, a custom build that took months and can’t change. We’re building MINT so that the people who run a business can build the software it runs on.'
			/>

			<Section tone='subtle'>
				<SectionHead
					eyebrow='What we believe'
					color='violet'
					title='Four ideas behind every screen.'
				/>
				<div className='grid gap-4 md:grid-cols-2'>
					{BELIEFS.map((b, i) => (
						<Reveal
							key={b.t}
							delay={(i % 2) * 80}
							className='rounded-2xl border border-line bg-panel p-7 shadow-panel'>
							<IconTile
								color={b.c}
								solid>
								<b.icon />
							</IconTile>
							<h3 className='mt-5 text-[21px] font-medium tracking-[-0.02em]'>{b.t}</h3>
							<p className='mt-2 text-[15.5px] leading-relaxed text-muted'>{b.b}</p>
						</Reveal>
					))}
				</div>
			</Section>

			<Section>
				<div className='mx-auto max-w-[760px] text-center'>
					<p className='font-display text-balance text-[28px] font-medium leading-[1.35] tracking-[-0.02em] md:text-[38px]'>
						“We want the café owner, the clinic manager and the developer to open the same tool — and each find{' '}
						<Accent>exactly what they came for.</Accent>”
					</p>
					<p className='mt-6 text-[15px] text-muted'>— The MINT team</p>
				</div>
			</Section>

			<CtaBand
				title={
					<>
						Build it with us. <Accent>Join early.</Accent>
					</>
				}
				lead='Early teams shape what we build next. Join the waitlist and tell us what you need.'
			/>
		</>
	);
}
