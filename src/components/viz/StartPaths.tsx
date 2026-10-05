import { ArrowRight, Check, Plus } from '@/components/ui/icons';
import { NumberTile, Reveal, cx } from '@/components/ui';
import { tone } from '@/lib/tones';
import { KIND_TONE, SCRATCH_POINTS, TEMPLATES, TEMPLATE_STEPS } from '@/content/templates';

/**
 * How a project starts — from a template, or from scratch. A template card
 * with the gallery and what happens when you pick one, beside a slimmer
 * blank-project card. Content in content/templates.ts.
 */

const StartPaths = () => (
	<div className='grid gap-4 lg:grid-cols-[1.55fr_1fr]'>
		<Reveal className='rounded-2xl border border-line bg-panel p-6 shadow-panel'>
			<p className='font-mono text-[11px] uppercase tracking-[0.14em] text-emerald-600 dark:text-emerald-400'>Start from a template</p>
			<h3 className='mt-2 text-[24px] font-light tracking-[-0.03em]'>Pick one. Then make it yours.</h3>
			<p className='mt-1 text-[14.5px] leading-relaxed text-muted'>
				Ready-made apps, APIs and websites for common kinds of business — built into your project for you, then edited like
				anything you built yourself.
			</p>

			<div className='mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-3'>
				{TEMPLATES.map(t => (
					<div
						key={t.name}
						className='flex min-w-0 items-start gap-2.5 rounded-xl border border-line bg-subtle p-3'>
						<span className={cx('glyph size-8 shrink-0 rounded-lg', tone(KIND_TONE[t.kind]).text)}>
							<t.icon
								weight='light'
								className='size-[17px]'
							/>
						</span>
						<span className='min-w-0'>
							<span className='flex items-center gap-1.5'>
								<span className='truncate text-[13px] font-medium'>{t.name}</span>
								<span className={cx('shrink-0 font-mono text-[9.5px] uppercase tracking-[0.1em]', tone(KIND_TONE[t.kind]).text)}>{t.kind}</span>
							</span>
							<span className='block text-[11.5px] leading-snug text-faint'>{t.body}</span>
						</span>
					</div>
				))}
			</div>

			<ol className='mt-6 grid gap-4 sm:grid-cols-2'>
				{TEMPLATE_STEPS.map((s, i) => (
					<li
						key={s.title}
						className='flex gap-3'>
						<NumberTile
							n={`0${i + 1}`}
							color='emerald'
							className='size-8 shrink-0 rounded-lg'
						/>
						<span>
							<span className='block text-[14px] font-normal'>{s.title}</span>
							<span className='block text-[13px] leading-relaxed text-muted'>{s.body}</span>
						</span>
					</li>
				))}
			</ol>
		</Reveal>

		<Reveal
			delay={100}
			className='flex flex-col rounded-2xl border border-line bg-panel p-6 shadow-panel'>
			<p className='font-mono text-[11px] uppercase tracking-[0.14em] text-violet-600 dark:text-violet-400'>Or from scratch</p>
			<h3 className='mt-2 text-[24px] font-light tracking-[-0.03em]'>A blank project, your way.</h3>
			<p className='mt-1 text-[14.5px] leading-relaxed text-muted'>
				Nothing fits? Start empty and build exactly what your business needs — with the blocks or with your AI.
			</p>

			<div className='mt-5 flex items-center justify-center rounded-xl border border-dashed border-line-strong bg-subtle px-6 py-8'>
				<span className='flex flex-col items-center gap-2 text-center'>
					<span className='glyph size-11 rounded-xl text-violet-600 dark:text-violet-400'>
						<Plus className='size-[18px]' />
					</span>
					<span className='text-[13px] text-muted'>New project · Start from scratch</span>
				</span>
			</div>

			<ul className='mt-5 space-y-2'>
				{SCRATCH_POINTS.map(p => (
					<li
						key={p}
						className='flex items-start gap-2 text-[13.5px] leading-snug text-muted'>
						<Check className='mt-0.5 size-3.5 shrink-0 text-violet-500' />
						{p}
					</li>
				))}
			</ul>
			<a
				href='#two-ways'
				className='mt-auto inline-flex items-center gap-1.5 pt-5 text-[13.5px] text-fg hover:underline'>
				Two ways to build <ArrowRight className='size-3.5' />
			</a>
		</Reveal>
	</div>
);

export default StartPaths;
