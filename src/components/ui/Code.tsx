import { ReactNode } from 'react';
import { cx } from '.';

/**
 * A dark code card. Pass plain text; lines starting with // are dimmed and
 * strings get a colour — enough highlighting for short marketing snippets.
 */
const highlight = (line: string): ReactNode => {
	if (/^\s*(\/\/|#)/.test(line)) return <span className='text-white/35'>{line}</span>;
	const parts = line.split(/('[^']*'|"[^"]*"|`[^`]*`)/g);
	return parts.map((p, i) =>
		/^['"`]/.test(p) ? (
			<span
				key={i}
				className='text-emerald-300'>
				{p}
			</span>
		) : (
			<span key={i}>
				{p.split(/\b(const|await|async|return|if|new|import|from|export)\b/g).map((w, j) =>
					/^(const|await|async|return|if|new|import|from|export)$/.test(w) ? (
						<span
							key={j}
							className='text-violet-300'>
							{w}
						</span>
					) : (
						w
					)
				)}
			</span>
		)
	);
};

const Code = ({ code, label, className }: { code: string; label?: string; className?: string }) => (
	<div className={cx('overflow-hidden rounded-2xl border border-white/10 bg-ink text-[12.5px] text-[#e4e4ea] shadow-float', className)}>
		<div className='flex h-10 items-center gap-2 border-b border-white/10 px-4'>
			{['bg-rose-400', 'bg-amber-400', 'bg-emerald-400'].map(c => (
				<span
					key={c}
					className={cx('size-2.5 rounded-full', c)}
				/>
			))}
			{label && <span className='ml-2 font-mono text-[11px] text-white/45'>{label}</span>}
		</div>
		<pre className='overflow-x-auto p-5 font-mono leading-[1.8]'>
			<code>
				{code.split('\n').map((l, i) => (
					<span
						key={i}
						className='block'>
						{highlight(l) || ' '}
					</span>
				))}
			</code>
		</pre>
	</div>
);

export default Code;
