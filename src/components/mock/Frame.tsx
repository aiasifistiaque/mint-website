import { ReactNode } from 'react';
import { cx } from '@/components/ui';

/**
 * A window around a drawing of the product. Every mock is HTML on the site's
 * own tokens — no screenshots to go stale, and right in dark mode too.
 */
const Frame = ({
	children,
	url,
	className,
	bodyClassName,
}: {
	children: ReactNode;
	url?: string;
	className?: string;
	bodyClassName?: string;
}) => (
	<div
		aria-hidden
		className={cx('overflow-hidden rounded-2xl border border-line bg-panel text-[12px] shadow-float select-none', className)}>
		<div className='flex h-9 items-center gap-1.5 border-b border-line bg-subtle px-3.5'>
			{['bg-rose-400', 'bg-amber-400', 'bg-emerald-400'].map(c => (
				<span
					key={c}
					className={cx('size-2.5 rounded-full', c)}
				/>
			))}
			{url && (
				<span className='mx-auto -translate-x-6 rounded-md bg-bg px-3 py-0.5 font-mono text-[10.5px] text-faint'>{url}</span>
			)}
		</div>
		<div className={bodyClassName}>{children}</div>
	</div>
);

export default Frame;

/** A status chip inside mocks. */
export const Chip = ({ tone = 'neutral', children }: { tone?: 'green' | 'amber' | 'red' | 'neutral' | 'blue'; children: ReactNode }) => (
	<span
		className={cx(
			'inline-flex items-center gap-1 rounded-full px-2 py-[2px] text-[10.5px] font-medium',
			tone === 'green' && 'bg-emerald-50 dark:bg-emerald-400/10 text-emerald-700 dark:text-emerald-300',
			tone === 'amber' && 'bg-amber-50 dark:bg-amber-400/10 text-amber-700 dark:text-amber-300',
			tone === 'red' && 'bg-rose-50 dark:bg-rose-400/10 text-rose-700 dark:text-rose-300',
			tone === 'blue' && 'bg-sky-50 dark:bg-sky-400/10 text-sky-700 dark:text-sky-300',
			tone === 'neutral' && 'bg-soft text-muted'
		)}>
		<span className='size-1 rounded-full bg-current' />
		{children}
	</span>
);
