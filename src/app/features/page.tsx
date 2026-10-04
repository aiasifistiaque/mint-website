import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from '@/components/ui/icons';
import { Container, IconTile, PageHero, Reveal, cx } from '@/components/ui';
import CtaBand from '@/components/site/CtaBand';
import { FEATURE_GROUPS } from '@/content/features';
import { APP } from '@/lib/config';
import { tone } from '@/lib/tones';

export const metadata: Metadata = {
	title: 'Features',
	description: 'Every MINT feature: models, pages, dashboards, history, roles, passkeys, public API, customer accounts, websites, analytics and AI.',
	alternates: { canonical: '/features' },
};

export default function FeaturesPage() {
	const count = FEATURE_GROUPS.reduce((n, g) => n + g.features.length, 0);
	return (
		<>
			<PageHero
				eyebrow={`Features · ${count}`}
				color='sky'
				title='Everything in the box.'
				lead='Every project gets all of it — no add-ons, no plugins to wire together. Each feature links to the guide that covers it in the app.'
			/>

			<div className='sticky top-16 z-30 border-y border-line bg-bg/90'>
				<Container className='flex h-12 items-center gap-1 overflow-x-auto'>
					{FEATURE_GROUPS.map(g => (
						<Link
							key={g.id}
							href={`#${g.id}`}
							className='inline-flex shrink-0 items-center gap-2 rounded-full px-3 py-1.5 text-[13px] text-muted transition-colors hover:bg-subtle hover:text-fg'>
							<span className={cx('size-2 rounded-full', tone(g.color).bg)} />
							{g.title}
						</Link>
					))}
				</Container>
			</div>

			{FEATURE_GROUPS.map(g => (
				<section
					key={g.id}
					id={g.id}
					className='border-b border-line py-20 last:border-b-0 md:py-24'>
					<Container>
						<div className='grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-16'>
							<Reveal className='lg:sticky lg:top-36 lg:self-start'>
								<span className={cx('mb-4 block h-1.5 w-12 rounded-full bg-gradient-to-r', tone(g.color).grad)} />
								<h2 className='text-[36px] font-extralight tracking-[-0.035em]'>{g.title}</h2>
								<p className='mt-3 text-[15px] leading-relaxed text-muted'>{g.lead}</p>
							</Reveal>
							<div className='grid gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-panel sm:grid-cols-2'>
								{g.features.map(f => {
									const body = (
										<>
											<div className='flex items-start justify-between'>
												<IconTile color={g.color}>
													<f.icon />
												</IconTile>
												{f.guide && (
													<ArrowUpRight className='size-4 text-faint transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg' />
												)}
											</div>
											<h3 className='mt-5 text-[17px] font-medium tracking-[-0.01em]'>{f.title}</h3>
											<p className='mt-1.5 text-[14px] leading-relaxed text-muted'>{f.body}</p>
										</>
									);
									return f.guide ? (
										<a
											key={f.title}
											href={APP.guide(f.guide)}
											className='group bg-panel p-6 transition-colors hover:bg-subtle'>
											{body}
										</a>
									) : (
										<div
											key={f.title}
											className='bg-panel p-6'>
											{body}
										</div>
									);
								})}
								{g.features.length % 2 === 1 && <div className='hidden bg-panel sm:block' />}
							</div>
						</div>
					</Container>
				</section>
			))}

			<CtaBand />
		</>
	);
}
