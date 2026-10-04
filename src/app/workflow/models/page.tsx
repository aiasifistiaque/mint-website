import type { Metadata } from 'next';
import { Accent, Reveal, Section, SectionHead, cx } from '@/components/ui';
import FlowPage from '@/components/flow/FlowPage';
import { FLOWS, MODEL_CHANGES } from '@/content/flows';
import { tone, type Tone } from '@/lib/tones';

const flow = FLOWS.find(f => f.id === 'models')!;

export const metadata: Metadata = {
	title: 'Build & change models',
	description:
		'How models are built on MINT — the eight-step wizard or a whole feature from your AI — and exactly what happens when you change one later: add, remove, retype, make unique, disable, delete.',
	alternates: { canonical: flow.href },
};

const TONE = {
	safe: { label: 'Safe', cls: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300' },
	care: { label: 'Take care', cls: 'bg-amber-50 text-amber-700 dark:bg-amber-400/10 dark:text-amber-300' },
	blocked: { label: 'Guarded', cls: 'bg-rose-50 text-rose-700 dark:bg-rose-400/10 dark:text-rose-300' },
};

const LOOP: { t: string; b: string; c: Tone }[] = [
	{ t: 'Notice', b: 'Someone needs a new field, a filter, a report — the business changed.', c: 'amber' },
	{ t: 'Change the model', b: 'Add or adjust fields under Build → Models — or ask your AI. Saved as a version first.', c: 'emerald' },
	{ t: 'Tune the page', b: 'Place the new field in columns, form and filters in a draft. The live page is untouched.', c: 'violet' },
	{ t: 'Publish', b: 'One click, with a note. Load an older version to roll back.', c: 'sky' },
];

export default function Page() {
	return (
		<FlowPage flow={flow}>
			<Section tone='subtle'>
				<SectionHead
					eyebrow='When it needs to change'
					color='emerald'
					title={
						<>
							Every change, <Accent>and what it does.</Accent>
						</>
					}
					lead='Models change as the business does. Nothing here needs a migration or a deploy — and the risky changes tell you before they happen.'
				/>
				<Reveal className='overflow-hidden rounded-2xl border border-line bg-panel shadow-panel'>
					{MODEL_CHANGES.map((c, i) => (
						<div
							key={c.change}
							className={cx('grid gap-2 px-5 py-4 md:grid-cols-[240px_110px_1fr] md:items-center md:gap-6 md:px-6', i > 0 && 'border-t border-line')}>
							<p className='text-[15px] font-normal'>{c.change}</p>
							<span className={cx('caps w-fit rounded-full px-2.5 py-1 !text-[10.5px] !font-normal', TONE[c.tone].cls)}>{TONE[c.tone].label}</span>
							<p className='text-[14.5px] leading-relaxed text-muted'>{c.result}</p>
						</div>
					))}
				</Reveal>

				<div className='mt-20'>
					<SectionHead
						eyebrow='The loop'
						color='violet'
						title={
							<>
								Notice, change, tune, <Accent>publish.</Accent>
							</>
						}
						lead='The same afternoon the need comes up — without ever breaking the work your team is doing.'
					/>
					<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
						{LOOP.map((l, i) => (
							<Reveal
								key={l.t}
								delay={i * 80}
								className='relative rounded-2xl border border-line bg-panel p-6 shadow-panel'>
								<span className={cx('mb-6 inline-flex size-10 items-center justify-center rounded-2xl bg-gradient-to-br font-mono text-[13px] text-white', tone(l.c).grad)}>
									0{i + 1}
								</span>
								<h3 className='text-[16px] font-light'>{l.t}</h3>
								<p className='mt-2 text-[14px] leading-relaxed text-muted'>{l.b}</p>
							</Reveal>
						))}
					</div>
				</div>
			</Section>
		</FlowPage>
	);
}
