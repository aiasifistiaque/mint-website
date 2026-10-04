'use client';

import { KeyboardEvent, ReactNode, useEffect, useRef, useState } from 'react';
import { Check } from '@/components/ui/icons';
import { STEPS } from '@/content/workflow';
import { cx } from '@/components/ui';
import { tone } from '@/lib/tones';

/**
 * Home's workflow: the six steps as tabs on the left, the step's drawing on
 * the right. It moves on by itself until someone picks a step. The drawings
 * are rendered on the server and passed in (one per step, in STEPS order).
 */

const AUTO_MS = 6000;

const WorkflowTabs = ({ mocks }: { mocks: ReactNode[] }) => {
	const [active, setActive] = useState(0);
	const [auto, setAuto] = useState(true);
	const [visible, setVisible] = useState(false);
	const root = useRef<HTMLDivElement>(null);
	const tabs = useRef<(HTMLButtonElement | null)[]>([]);

	// Only cycle while on screen.
	useEffect(() => {
		const el = root.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.35 });
		io.observe(el);
		return () => io.disconnect();
	}, []);

	useEffect(() => {
		if (!auto || !visible) return;
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
		const t = setTimeout(() => setActive(a => (a + 1) % STEPS.length), AUTO_MS);
		return () => clearTimeout(t);
	}, [active, auto, visible]);

	const pick = (i: number) => {
		setAuto(false);
		setActive(i);
	};

	const onKey = (e: KeyboardEvent) => {
		const delta = e.key === 'ArrowDown' || e.key === 'ArrowRight' ? 1 : e.key === 'ArrowUp' || e.key === 'ArrowLeft' ? -1 : 0;
		if (!delta) return;
		e.preventDefault();
		const next = (active + delta + STEPS.length) % STEPS.length;
		pick(next);
		tabs.current[next]?.focus();
	};

	const step = STEPS[active];

	return (
		<div
			ref={root}
			className='grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16'>
			<div
				role='tablist'
				aria-orientation='vertical'
				aria-label='The MINT workflow'
				onKeyDown={onKey}
				className='flex flex-col'>
				{STEPS.map((s, i) => {
					const on = i === active;
					return (
						<button
							key={s.id}
							ref={el => {
								tabs.current[i] = el;
							}}
							role='tab'
							id={`wf-tab-${s.id}`}
							aria-selected={on}
							aria-controls='wf-panel'
							tabIndex={on ? 0 : -1}
							onClick={() => pick(i)}
							className={cx(
								'group relative border-t border-line py-5 text-left transition-colors first:border-t-0',
								on ? 'text-fg' : 'text-muted hover:text-fg'
							)}>
							{/* progress line */}
							<span className='absolute -top-px left-0 h-px w-full overflow-hidden'>
								{on && (
									<span
										key={`${active}-${auto}`}
										className={cx('block h-full bg-gradient-to-r', tone(s.color).grad)}
										style={{
											width: auto && visible ? undefined : '100%',
											animation: auto && visible ? `wf-progress ${AUTO_MS}ms linear forwards` : undefined,
										}}
									/>
								)}
							</span>
							<span className='flex items-start gap-4'>
								<span
									className={cx(
										'inline-flex size-8 shrink-0 items-center justify-center rounded-xl font-mono text-[11px] transition-colors',
										on ? cx('glyph', tone(s.color).text) : 'bg-soft text-faint'
									)}>
									{s.n}
								</span>
								<span className='flex-1'>
									<span className='font-display block pt-0.5 text-[19px] font-medium tracking-[-0.02em]'>{s.title}</span>
									<span
										className={cx(
											'grid transition-[grid-template-rows,opacity] duration-300',
											on ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
										)}>
										<span className='overflow-hidden'>
											<span className='block pt-2 text-[15px] leading-relaxed text-muted'>{s.body}</span>
										</span>
									</span>
								</span>
								<span className={cx('hidden rounded-full px-2 py-0.5 font-mono text-[11px] sm:inline', on ? cx(tone(s.color).soft, tone(s.color).text) : 'text-faint')}>{s.time}</span>
							</span>
						</button>
					);
				})}
			</div>

			<div
				id='wf-panel'
				role='tabpanel'
				aria-labelledby={`wf-tab-${step.id}`}
				className='lg:sticky lg:top-24'>
				<div
					key={step.id}
					className='fade-in'>
					{mocks[active]}
					<ul className='mt-6 grid gap-2.5 sm:grid-cols-2'>
						{step.points.map(p => (
							<li
								key={p}
								className='flex gap-2.5 text-[14px] leading-snug text-muted'>
								<Check className={cx('mt-0.5 size-4 shrink-0', tone(step.color).text)} />
								{p}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default WorkflowTabs;
