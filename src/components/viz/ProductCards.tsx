import Link from 'next/link';
import { ArrowUpRight, Link2 } from '@/components/ui/icons';
import { IconTile, Reveal, cx } from '@/components/ui';
import { PRODUCTS } from '@/content/platform';
import { tone } from '@/lib/tones';

/** The four things you build on MINT, each with a small drawing of it. */

const Art = ({ id }: { id: string }) => {
	switch (id) {
		case 'backends':
			return (
				<div className='flex items-center gap-2 text-[11px]'>
					{['Product', 'Category'].map((m, i) => (
						<span
							key={m}
							className='flex items-center gap-2'>
							<span className='rounded-lg border border-line bg-panel px-2.5 py-1.5 shadow-sm'>
								<span className='block font-semibold'>{m}</span>
								<span className='block font-mono text-[10px] text-faint'>{i ? 'name · slug' : 'name · price'}</span>
							</span>
							{i === 0 && <Link2 className='size-3.5 text-emerald-500' />}
						</span>
					))}
				</div>
			);
		case 'apis':
			return (
				<div className='w-full font-mono text-[10.5px]'>
					<p className='truncate rounded-md bg-ink px-2 py-1 text-white/80 dark:bg-white/10'>
						<span className='text-emerald-300'>GET</span> /products?price_lte=50
					</p>
					<p className='mt-1 truncate px-2 text-faint'>{'{ total: 12, doc: [ … ] }'}</p>
				</div>
			);
		case 'panels':
			return (
				<div className='w-full overflow-hidden rounded-md border border-line text-[10.5px]'>
					{[
						['Order #1042', 'Paid', 'text-emerald-600 dark:text-emerald-400'],
						['Order #1041', 'Packing', 'text-amber-600 dark:text-amber-400'],
						['Order #1040', 'Shipped', 'text-sky-600 dark:text-sky-400'],
					].map(([a, b, c], i) => (
						<div
							key={a}
							className={cx('flex justify-between bg-panel px-2 py-1', i > 0 && 'border-t border-line')}>
							<span className='font-medium'>{a}</span>
							<span className={c}>{b}</span>
						</div>
					))}
				</div>
			);
		default:
			return (
				<div className='w-full rounded-md border border-line bg-panel p-2'>
					<div className='mb-1.5 h-1.5 w-1/3 rounded-full bg-amber-400' />
					<div className='mb-1 h-1.5 w-full rounded-full bg-soft' />
					<div className='mb-2 h-1.5 w-4/5 rounded-full bg-soft' />
					<p className='flex items-center justify-between text-[10px] text-faint'>
						<span className='font-mono'>/about</span>
						<span className='font-semibold text-emerald-600 dark:text-emerald-400'>SEO ✓</span>
					</p>
				</div>
			);
	}
};

const ProductCards = () => (
	<div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
		{PRODUCTS.map((p, i) => {
			const t = tone(p.color);
			return (
				<Reveal
					key={p.id}
					delay={i * 70}>
					<Link
						href={p.href}
						className='group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel shadow-panel transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-float'>
						<div className={cx('flex h-[112px] items-center justify-center bg-gradient-to-br px-5', t.soft)}>
							<Art id={p.id} />
						</div>
						<div className='flex flex-1 flex-col p-5'>
							<div className='flex items-center justify-between'>
								<IconTile
									color={p.color}
									solid
									className='size-10'>
									<p.icon />
								</IconTile>
								<ArrowUpRight className='size-4 text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5' />
							</div>
							<h3 className='mt-4 text-[19px] font-medium tracking-[-0.02em]'>{p.title}</h3>
							<p className='mt-1.5 flex-1 text-[14px] leading-relaxed text-muted'>{p.body}</p>
							<div className='mt-4 flex flex-wrap gap-1.5'>
								{p.points.map(pt => (
									<span
										key={pt}
										className={cx('rounded-full px-2.5 py-0.5 text-[12px] font-medium', t.soft, t.text)}>
										{pt}
									</span>
								))}
							</div>
						</div>
					</Link>
				</Reveal>
			);
		})}
	</div>
);

export default ProductCards;
