import type { Metadata } from 'next';
import Link from 'next/link';
import { Accent, Button, Container, IconTile, PageHero, Reveal, Section, SectionHead, TextLink, cx } from '@/components/ui';
import { PanelMock } from '@/components/mock/mocks';
import CtaBand from '@/components/site/CtaBand';
import FlowCards from '@/components/flow/FlowCards';
import { PANEL_GROUPS, PANEL_STATS } from '@/content/adminPanel';
import { tone } from '@/lib/tones';

export const metadata: Metadata = {
	title: 'Admin panel features',
	description:
		'Every feature of the MINT admin panel and back office: tables, forms, record pages, bulk actions, history and undo, build tools, roles, passkeys and media — on every model, with nothing to code.',
	alternates: { canonical: '/admin-panel' },
};

export default function AdminPanelPage() {
	return (
		<>
			<PageHero
				eyebrow='Admin panel · every feature'
				color='violet'
				title={
					<>
						Every feature. <Accent>On every model.</Accent>
					</>
				}
				lead='The admin panel and back office come with your backend. Here is everything in it — what your team uses every day, and the tools that build and reshape it.'
				aside={<PanelMock />}>
				<Button
					href='/workflow/admin-panel'
					variant='brand'
					arrow>
					Build one, step by step
				</Button>
				<Button
					href='/product'
					variant='secondary'>
					Overview
				</Button>
			</PageHero>

			{/* numbers */}
			<Container className='-mt-8 pb-16'>
				<Reveal className='grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-panel md:grid-cols-4'>
					{PANEL_STATS.map(s => (
						<div
							key={s.l}
							className='bg-panel p-6'>
							<p className='text-[38px] font-extralight leading-none tracking-tight'>{s.n}</p>
							<p className='caps mt-3 !text-[10.5px] text-faint'>{s.l}</p>
						</div>
					))}
				</Reveal>
			</Container>

			{/* group index */}
			<div className='sticky top-16 z-30 hidden border-y border-line bg-bg/95 md:block'>
				<Container className='flex h-12 items-center gap-1 overflow-x-auto'>
					{PANEL_GROUPS.map(g => (
						<Link
							key={g.id}
							href={`#${g.id}`}
							className='caps flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 !text-[10.5px] text-muted transition-colors hover:bg-subtle hover:text-fg'>
							<span className={cx('size-1.5 rounded-full', tone(g.color).bg)} />
							{g.title}
						</Link>
					))}
				</Container>
			</div>

			{PANEL_GROUPS.map((g, gi) => {
				const t = tone(g.color);
				return (
					<section
						key={g.id}
						id={g.id}
						className={cx('border-t border-line py-20 md:py-24', gi % 2 === 1 && 'bg-subtle')}>
						<Container className='grid gap-10 lg:grid-cols-[320px_1fr] lg:gap-16'>
							<Reveal className='lg:sticky lg:top-36 lg:self-start'>
								<p className={cx('font-mono text-[12px]', t.text)}>
									{String(gi + 1).padStart(2, '0')} / {String(PANEL_GROUPS.length).padStart(2, '0')}
								</p>
								<h2 className='mt-3 text-[34px] font-extralight leading-[1.05] md:text-[42px]'>{g.title}</h2>
								<p className='mt-4 text-[16px] leading-relaxed text-muted'>{g.lead}</p>
								<span className={cx('mt-6 block h-1 w-16 rounded-full bg-gradient-to-r', t.grad)} />
							</Reveal>
							<div className='grid gap-3 sm:grid-cols-2'>
								{g.features.map((f, i) => {
									const inner = (
										<>
											<div className='mb-5 flex items-start justify-between'>
												<IconTile
													color={g.color}
													className='size-10'>
													<f.icon />
												</IconTile>
											</div>
											<h3 className='text-[15px] font-normal'>{f.title}</h3>
											<p className='mt-1.5 text-[14px] leading-relaxed text-muted'>{f.body}</p>
										</>
									);
									const cls = 'block h-full rounded-2xl border border-line bg-panel p-5';
									return (
										<Reveal
											key={f.title}
											delay={i * 50}>
											<div className={cls}>{inner}</div>
										</Reveal>
									);
								})}
							</div>
						</Container>
					</section>
				);
			})}

			<Section tone='subtle'>
				<SectionHead
					eyebrow='Step by step'
					color='violet'
					title={
						<>
							See how it’s built — <Accent>one step at a time.</Accent>
						</>
					}
					lead='Each workflow walks through what to do, who does it and what you get.'
				/>
				<FlowCards />
				<TextLink
					href='/features'
					className='mt-10'>
					Every MINT feature, not just the panel
				</TextLink>
			</Section>

			<CtaBand
				title={
					<>
						Your back office is <Accent>already built.</Accent>
					</>
				}
			/>
		</>
	);
}
