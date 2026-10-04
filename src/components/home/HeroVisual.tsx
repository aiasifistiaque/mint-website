import { Bell, Sparkles, TrendingUp } from '@/components/ui/icons';
import { PanelMock } from '@/components/mock/mocks';

/** The hero's product shot: the panel, with cards floating around it. */
const HeroVisual = () => (
	<div className='relative mx-auto max-w-[1060px]'>
		<div
			aria-hidden
			className='absolute -bottom-8 top-12 -inset-x-1 rounded-3xl md:-inset-x-6 bg-gradient-to-r from-emerald-300/40 via-cyan-300/40 to-violet-400/40 blur-2xl'
		/>
		<div className='relative rounded-[22px] bg-panel/60 p-2 shadow-float ring-1 ring-black/5'>
			<PanelMock />
		</div>

		{/* AI prompt */}
		<div
			aria-hidden
			className='float absolute -left-6 top-24 hidden w-[250px] rounded-2xl border border-line bg-panel p-3.5 text-[12px] shadow-float lg:block xl:-left-16'>
			<div className='mb-2 flex items-center gap-1.5 font-semibold text-violet-600 dark:text-violet-400'>
				<Sparkles className='size-3.5' /> Ask your AI
			</div>
			<p className='rounded-xl rounded-br-sm bg-brand px-3 py-2 leading-snug text-white'>Add a deposit field to bookings and show who hasn’t paid.</p>
			<p className='mt-2 flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400'>
				<span className='size-1.5 rounded-full bg-emerald-500' /> Built in 8 seconds
			</p>
		</div>

		{/* notification */}
		<div
			aria-hidden
			className='float-slow absolute -right-6 top-10 hidden w-[240px] items-start gap-3 rounded-2xl border border-line bg-panel p-3.5 text-[12px] shadow-float lg:flex xl:-right-14'>
			<span className='glyph size-8 rounded-xl text-rose-500'>
				<Bell
					weight='light'
					className='size-[18px]'
				/>
			</span>
			<span>
				<span className='block font-semibold'>New booking from your site</span>
				<span className='text-faint'>Amira Khan · Sea view 2 · 3 nights</span>
			</span>
		</div>

		{/* chart */}
		<div
			aria-hidden
			className='float absolute -bottom-8 -right-4 hidden w-[210px] rounded-2xl border border-line bg-panel p-3.5 text-[12px] shadow-float [animation-delay:1.5s] lg:block xl:-right-10'>
			<div className='flex items-center justify-between'>
				<span className='font-semibold'>Revenue</span>
				<span className='inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-400/10 px-1.5 py-0.5 text-[10.5px] font-semibold text-emerald-600 dark:text-emerald-400'>
					<TrendingUp className='size-3' /> 18%
				</span>
			</div>
			<p className='font-display mt-1 text-[20px] font-medium tracking-[-0.02em]'>$48,210</p>
			<div className='mt-2 flex h-10 items-end gap-1'>
				{[30, 45, 38, 60, 52, 74, 68, 90].map((h, i) => (
					<span
						key={i}
						className='grow flex-1 rounded-t-sm bg-gradient-to-t from-violet-500 to-cyan-400'
						style={{ height: `${h}%`, animationDelay: `${i * 60}ms` }}
					/>
				))}
			</div>
		</div>
	</div>
);

export default HeroVisual;
