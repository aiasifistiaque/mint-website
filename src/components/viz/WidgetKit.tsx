import { Check, ShoppingCart } from '@/components/ui/icons';
import { Reveal, cx } from '@/components/ui';
import Code from '@/components/ui/Code';
import Frame from '@/components/mock/Frame';
import { tone } from '@/lib/tones';
import { API_URL } from '@/lib/config';
import { PAYMENT_PROVIDERS, WIDGETS, WIDGET_POINTS } from '@/content/widgets';

/**
 * Widgets for a site you host yourself: a shop page with the widgets placed
 * (sign-in live, the cart marked as next), the two lines that put them there,
 * and the catalogue — live and next. Content in content/widgets.ts.
 */

const SNIPPET = `<script src="${API_URL}/public/mint.js"
        data-project="corner-bakery" async></script>

<div data-mint="login" data-layout="button"></div>`;

/** A bakery's own site with MINT's widgets in it. */
const ShopMock = () => (
	<Frame
		url='cornerbakery.com'
		bodyClassName='bg-subtle'>
		<div className='flex items-center justify-between border-b border-line bg-bg px-4 py-2.5'>
			<span className='text-[13px] font-semibold tracking-[-0.02em]'>Corner Bakery</span>
			<span className='hidden gap-3 text-[11px] text-muted sm:flex'>
				<span>Breads</span>
				<span>Cakes</span>
				<span>Visit</span>
			</span>
			<span className='flex items-center gap-1.5'>
				<span className='relative inline-flex size-7 items-center justify-center rounded-md border border-dashed border-amber-400/70 text-amber-600 dark:text-amber-400'>
					<ShoppingCart className='size-3.5' />
				</span>
				<span className='rounded-md bg-[#7c2d12] px-2.5 py-1 text-[11px] font-medium text-white ring-2 ring-emerald-400/60 ring-offset-1 ring-offset-bg'>Sign in</span>
			</span>
		</div>
		<div className='grid gap-3 p-4 sm:grid-cols-[1fr_0.9fr]'>
			<div className='grid grid-cols-2 gap-2.5'>
				{[
					['Sourdough', '৳ 320'],
					['Croissant', '৳ 120'],
					['Rye loaf', '৳ 280'],
					['Cinnamon bun', '৳ 150'],
				].map(([n, p]) => (
					<div
						key={n}
						className='rounded-xl border border-line bg-bg p-2.5'>
						<div className='mb-2 h-10 rounded-lg bg-gradient-to-br from-amber-200 to-orange-300 dark:from-amber-400/30 dark:to-orange-500/30' />
						<p className='truncate text-[11.5px] font-medium'>{n}</p>
						<div className='mt-1 flex items-center justify-between'>
							<span className='font-mono text-[10.5px] text-faint'>{p}</span>
							<span className='rounded border border-dashed border-amber-400/70 px-1.5 text-[9.5px] text-amber-600 dark:text-amber-400'>Add</span>
						</div>
					</div>
				))}
			</div>
			<div className='rounded-xl border border-line bg-bg p-3.5 ring-2 ring-emerald-400/60'>
				<p className='text-[12.5px] font-semibold'>Sign in</p>
				<p className='mb-2.5 text-[10.5px] text-faint'>See your orders and saved address</p>
				<div className='mb-1.5 rounded-md border border-line px-2 py-1 text-[10.5px] text-muted'>nadia@mail.com</div>
				<div className='mb-2.5 rounded-md border border-line px-2 py-1 text-[10.5px] tracking-[0.3em] text-muted'>••••••••</div>
				<div className='rounded-md bg-[#7c2d12] py-1 text-center text-[11px] font-medium text-white'>Sign in</div>
				<p className='mt-2 text-center text-[10px] text-faint'>
					New here? <span className='text-fg underline'>Create an account</span>
				</p>
			</div>
		</div>
		<div className='flex flex-wrap gap-x-4 gap-y-1 border-t border-line px-4 py-2 text-[10.5px] text-faint'>
			<span className='inline-flex items-center gap-1.5'>
				<span className='size-2 rounded-full bg-emerald-400' /> Live widget
			</span>
			<span className='inline-flex items-center gap-1.5'>
				<span className='size-2 rounded-full border border-dashed border-amber-500' /> Next: cart & checkout
			</span>
		</div>
	</Frame>
);

const WidgetKit = () => (
	<div className='flex flex-col gap-4'>
		<div className='grid gap-4 lg:grid-cols-[1.15fr_1fr]'>
			<Reveal>
				<ShopMock />
			</Reveal>
			<Reveal
				delay={100}
				className='flex min-w-0 flex-col gap-4'>
				<Code
					label='any page of your site'
					code={SNIPPET}
				/>
				<ul className='space-y-2'>
					{WIDGET_POINTS.map(p => (
						<li
							key={p}
							className='flex items-start gap-2 text-[14px] leading-snug text-muted'>
							<Check className='mt-0.5 size-3.5 shrink-0 text-emerald-500' />
							{p}
						</li>
					))}
				</ul>
			</Reveal>
		</div>

		<Reveal className='rounded-2xl border border-line bg-panel p-6 shadow-panel'>
			<div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3'>
				{WIDGETS.map(w => (
					<div
						key={w.name}
						className='flex min-w-0 items-start gap-2.5 rounded-xl border border-line bg-subtle p-3'>
						<span className={cx('glyph size-8 shrink-0 rounded-lg', tone(w.tone).text)}>
							<w.icon
								weight='light'
								className='size-[17px]'
							/>
						</span>
						<span className='min-w-0'>
							<span className='flex items-center gap-1.5'>
								<span className='truncate text-[13px] font-medium'>{w.name}</span>
								<span
									className={cx(
										'shrink-0 font-mono text-[9.5px] uppercase tracking-[0.1em]',
										w.live ? 'text-emerald-600 dark:text-emerald-400' : 'text-faint'
									)}>
									{w.live ? 'Live' : 'Next'}
								</span>
							</span>
							<span className='block text-[11.5px] leading-snug text-faint'>{w.body}</span>
						</span>
					</div>
				))}
			</div>
			<div className='mt-5 flex flex-col gap-3 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between'>
				<p className='text-[13.5px] leading-relaxed text-muted'>
					<span className='text-fg'>Payments go to your own merchant account</span>, chosen by your organization’s country.
				</p>
				<div className='flex flex-wrap gap-2'>
					{PAYMENT_PROVIDERS.map(p => (
						<span
							key={p.name}
							className='inline-flex items-center gap-1.5 rounded-full border border-line bg-subtle px-3 py-1 text-[12px]'>
							<span className='font-medium'>{p.name}</span>
							<span className='text-faint'>{p.where}</span>
						</span>
					))}
				</div>
			</div>
		</Reveal>
	</div>
);

export default WidgetKit;
