import type { Metadata } from 'next';
import { Check, Minus, Sparkles } from '@/components/ui/icons';
import { Accent, Button, IconTile, PageHero, Reveal, Section, SectionHead, TextLink, cx } from '@/components/ui';
import CtaBand from '@/components/site/CtaBand';
import { FILE_TREE, PLAN, REASONS, ROWS } from '@/content/compare';
import { NOT_TO_BUILD } from '@/content/platform';

export const metadata: Metadata = {
	title: 'MINT + AI vs AI coding',
	description:
		'Building with Claude Code, Codex or Cursor alone means thousands of lines to write, host, secure and patch. Connect the same AI to MINT: fewer tokens, faster, live at once, nothing breaks — side by side.',
	alternates: { canonical: '/compare' },
};

/** The two sides' headers, shared by the comparison table. */
const SIDES = [
	{ label: 'AI coding alone', sub: 'Claude Code, Codex, Cursor…' },
	{ label: 'Your AI + MINT', sub: 'The same assistant, over MCP' },
];

/** The hero drawing: the files an AI writes vs the plan MINT needs. */
const Produce = () => (
	<div
		aria-hidden
		className='grid gap-3 sm:grid-cols-2'>
		<div className='rounded-2xl border border-line bg-panel p-4 shadow-float'>
			<p className='caps !text-[10px] text-faint'>AI coding alone · writes</p>
			<div className='mt-3 flex flex-col gap-1 font-mono text-[10.5px] text-muted'>
				{FILE_TREE.map(f => (
					<p
						key={f}
						className='truncate'>
						<span className='text-faint'>▸</span> {f}
					</p>
				))}
			</div>
			<p className='mt-3 border-t border-line pt-3 text-[11.5px] text-faint'>…then hosts, secures and patches it.</p>
		</div>
		<div className='flex flex-col gap-3'>
			<div className='rounded-2xl border border-line bg-panel p-4 shadow-float'>
				<p className='caps !text-[10px] text-faint'>Your AI + MINT · sends</p>
				<pre className='mt-3 overflow-x-auto rounded-xl bg-[#0d0d0d] p-3 font-mono text-[10.5px] leading-[1.7] text-[#c3e88d]'>{PLAN}</pre>
			</div>
			<div className='rounded-2xl border border-line bg-panel p-4 shadow-float'>
				<p className='flex items-center gap-1.5 text-[12px]'>
					<Sparkles
						weight='light'
						className='size-4 text-violet-500'
					/>
					MINT builds and runs
				</p>
				<div className='mt-2.5 flex flex-wrap gap-1'>
					{['Database', 'REST API', 'Auth', 'Admin panel', 'History', 'Docs', 'Hosting'].map(x => (
						<span
							key={x}
							className='rounded-full bg-subtle px-2 py-0.5 text-[10.5px] text-muted'>
							{x}
						</span>
					))}
				</div>
			</div>
		</div>
	</div>
);

export default function ComparePage() {
	return (
		<>
			<PageHero
				eyebrow='MINT + AI vs AI coding'
				color='emerald'
				title={
					<>
						Your AI writes a plan, <Accent>not a codebase.</Accent>
					</>
				}
				lead='Claude Code, Codex and Cursor can write a whole backend — thousands of lines you then host, secure, patch and maintain. Connect the same assistant to MINT instead: it describes what you need, and MINT builds it on a platform that’s already written, running and kept up to date.'
				aside={<Produce />}>
				<Button
					href='/waitlist'
					variant='brand'
					arrow>
					Join the waitlist
				</Button>
				<Button
					href='/workflow/website'
					variant='secondary'>
					Build a website with AI
				</Button>
			</PageHero>

			{/* six reasons */}
			<Section tone='subtle'>
				<SectionHead
					eyebrow='Why it’s better'
					color='emerald'
					title={
						<>
							Same AI. <Accent>Less code, less cost, less risk.</Accent>
						</>
					}
					lead='Your assistant is still doing the thinking. MINT takes away everything it would otherwise have to write, run and keep safe.'
				/>
				<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
					{REASONS.map((r, i) => (
						<Reveal
							key={r.title}
							delay={(i % 3) * 70}
							className='rounded-2xl border border-line bg-panel p-6 shadow-panel'>
							<IconTile color={r.color}>
								<r.icon />
							</IconTile>
							<h3 className='mt-6 text-[16px] font-normal'>{r.title}</h3>
							<p className='mt-2 text-[14.5px] leading-relaxed text-muted'>{r.body}</p>
						</Reveal>
					))}
				</div>
			</Section>

			{/* side by side */}
			<Section>
				<SectionHead
					eyebrow='Side by side'
					color='violet'
					title={
						<>
							Building it with AI alone, <Accent>or with MINT.</Accent>
						</>
					}
					lead='The same project — a backend, an admin panel, an API and a website — two ways.'
				/>
				<Reveal className='overflow-hidden rounded-2xl border border-line bg-panel shadow-panel'>
					{/* header */}
					<div className='hidden grid-cols-[200px_1fr_1fr] border-b border-line bg-subtle md:grid'>
						<span />
						{SIDES.map((s, i) => (
							<div
								key={s.label}
								className={cx('px-6 py-5', i === 1 && 'border-l border-line')}>
								<p className={cx('caps !text-[11px]', i === 1 ? 'text-gradient' : 'text-muted')}>{s.label}</p>
								<p className='mt-1 text-[12.5px] text-faint'>{s.sub}</p>
							</div>
						))}
					</div>
					{ROWS.map((r, i) => (
						<div
							key={r.topic}
							className={cx('grid md:grid-cols-[200px_1fr_1fr]', i > 0 && 'border-t border-line')}>
							<p className='caps px-5 pb-1 pt-5 !text-[10.5px] text-faint md:px-6 md:py-5'>{r.topic}</p>
							<div className='flex gap-3 px-5 py-2 md:px-6 md:py-5'>
								<Minus className='mt-1 size-3.5 shrink-0 text-faint' />
								<p className='text-[14.5px] leading-relaxed text-muted'>
									<span className='caps mr-1.5 !text-[9.5px] text-faint md:hidden'>AI alone ·</span>
									{r.alone}
								</p>
							</div>
							<div className='flex gap-3 px-5 pb-5 pt-2 md:border-l md:border-line md:bg-emerald-50/30 md:px-6 md:py-5 md:dark:bg-emerald-400/[0.03]'>
								<Check className='mt-1 size-3.5 shrink-0 text-emerald-500' />
								<p className='text-[14.5px] leading-relaxed'>
									<span className='caps mr-1.5 !text-[9.5px] text-emerald-600 md:hidden dark:text-emerald-400'>With MINT ·</span>
									{r.mint}
								</p>
							</div>
						</div>
					))}
				</Reveal>
			</Section>

			{/* under the hood */}
			<Section tone='ink'>
				<SectionHead
					dark
					eyebrow='Under the hood'
					color='cyan'
					title={
						<>
							What your AI doesn’t have to write. <Accent>Ever.</Accent>
						</>
					}
					lead='Every one of these is code an AI would otherwise generate, you would review, and someone would keep patched. On MINT it’s already done — for every project.'
				/>
				<div className='grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3'>
					{NOT_TO_BUILD.map((n, i) => (
						<Reveal
							key={n}
							delay={(i % 3) * 50}
							className='flex items-center gap-3 border-b border-white/10 py-3 text-[15px] text-white/80'>
							<Check className='size-3.5 shrink-0 text-emerald-400' />
							{n}
						</Reveal>
					))}
				</div>
			</Section>

			{/* use both */}
			<Section>
				<div className='grid items-center gap-10 lg:grid-cols-2 lg:gap-16'>
					<SectionHead
						className='!mb-0'
						eyebrow='Use both'
						color='amber'
						title={
							<>
								Keep your AI editor. <Accent>Give it a backend.</Accent>
							</>
						}
						lead='Your AI still writes what makes you different — your site’s design, your app’s screens. MINT is everything behind them: the data, the API, the admin panel, sign-in, SEO and analytics. Each does what it’s best at.'
					/>
					<Reveal className='rounded-2xl border border-line bg-panel p-6 shadow-panel'>
						{[
							['Your AI editor', 'Front-end design and code — your look, your screens'],
							['MINT', 'Database, API, auth, admin panel, media, SEO, analytics, hosting'],
							['Your team', 'Runs the business in the panel — no code, no tickets'],
						].map(([t, b], i) => (
							<div
								key={t}
								className={cx('flex gap-4 py-4', i > 0 && 'border-t border-line')}>
								<span className='glyph size-8 rounded-lg font-mono text-[11px] text-emerald-600 dark:text-emerald-400'>0{i + 1}</span>
								<span>
									<span className='caps block !text-[11px] text-fg'>{t}</span>
									<span className='mt-1 block text-[14px] text-muted'>{b}</span>
								</span>
							</div>
						))}
						<TextLink
							href='/workflow/website'
							className='mt-3'>
							See it step by step
						</TextLink>
					</Reveal>
				</div>
			</Section>

			<CtaBand
				title={
					<>
						Spend your tokens on your business. <Accent>Not on plumbing.</Accent>
					</>
				}
			/>
		</>
	);
}
