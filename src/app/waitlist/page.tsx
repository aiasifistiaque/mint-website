import type { Metadata } from 'next';
import { Check, MailOpen, Rocket, Wand2 } from '@/components/ui/icons';
import { Accent, Container, Dot, Eyebrow, IconTile, Pill, Section, SectionHead, cx } from '@/components/ui';
import { WaitlistFull } from '@/components/waitlist/WaitlistForm';
import Faq, { FAQ } from '@/components/site/Faq';
import { tone, type Tone } from '@/lib/tones';

export const metadata: Metadata = {
	title: 'Join the waitlist',
	description: 'Get early access to MINT. Tell us what you want to build and we’ll open a workspace set up for it.',
	alternates: { canonical: '/waitlist' },
};

const PERKS = [
	'A workspace set up for what you told us you’re building',
	'A direct line to the team while you get started',
	'A say in what we build next',
];

const NEXT: { icon: typeof Rocket; t: string; b: string; c: Tone }[] = [
	{ icon: Wand2, t: 'We read every answer', b: 'What you want to build decides how we set up your workspace.', c: 'violet' },
	{ icon: MailOpen, t: 'One email', b: 'When your spot opens, with a link straight into your new organization.', c: 'sky' },
	{ icon: Rocket, t: 'Build on day one', b: 'Your first project is waiting. Invite your team and start.', c: 'emerald' },
];

export default function WaitlistPage() {
	return (
		<>
			<header className='relative overflow-hidden'>
				<div
					aria-hidden
					className='mesh pointer-events-none absolute inset-0'
				/>
				<div
					aria-hidden
					className='bg-grid pointer-events-none absolute inset-0 opacity-60'
				/>
				<Container className='relative grid items-start gap-14 pb-24 pt-20 md:pt-28 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20'>
					<div className='lg:sticky lg:top-28'>
						<Pill className='mb-8'>
							<Dot /> Opening to a few teams at a time
						</Pill>
						<h1 className='text-balance text-[44px] font-extralight leading-[1.02] tracking-[-0.045em] md:text-[64px]'>
							Get early access to <Accent>MINT.</Accent>
						</h1>
						<p className='mt-6 max-w-[520px] text-[18px] leading-[1.7] text-muted'>
							Tell us what you want to build. We’ll open your workspace, set up for it, as soon as your spot comes up.
						</p>
						<ul className='mt-10 flex flex-col gap-3.5'>
							{PERKS.map((p, i) => {
								const t = tone((['emerald', 'violet', 'amber'] as const)[i]);
								return (
									<li
										key={p}
										className='flex items-center gap-3 text-[16px] font-medium'>
										<span className={cx('glyph size-7 rounded-full', t.text)}>
											<Check className='size-3.5' />
										</span>
										{p}
									</li>
								);
							})}
						</ul>
					</div>
					<WaitlistFull />
				</Container>
			</header>

			<Section tone='subtle'>
				<SectionHead
					eyebrow='What happens next'
					color='sky'
					title={
						<>
							From the list <Accent>to your first project.</Accent>
						</>
					}
				/>
				<div className='grid gap-4 md:grid-cols-3'>
					{NEXT.map((n, i) => (
						<div
							key={n.t}
							className='rounded-2xl border border-line bg-panel p-7 shadow-panel'>
							<div className='flex items-center justify-between'>
								<IconTile
									color={n.c}
									solid>
									<n.icon />
								</IconTile>
								<span className={cx('font-mono text-[13px] font-bold', tone(n.c).text)}>0{i + 1}</span>
							</div>
							<h3 className='mt-5 text-[19px] font-medium tracking-[-0.02em]'>{n.t}</h3>
							<p className='mt-1.5 text-[15px] leading-relaxed text-muted'>{n.b}</p>
						</div>
					))}
				</div>
			</Section>

			<Section>
				<div className='grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20'>
					<div>
						<Eyebrow color='violet'>Questions</Eyebrow>
						<h2 className='text-[34px] font-extralight leading-[1.06] tracking-[-0.035em] md:text-[46px]'>Before you join.</h2>
					</div>
					<Faq items={['Why a waitlist?', 'Is MINT a backend as a service?', 'Do I need to know how to code?', 'Which AI assistants work with MINT?'].map(q => FAQ.find(f => f.q === q)!)} />
				</div>
			</Section>
		</>
	);
}
