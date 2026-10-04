import { ReactNode } from 'react';
import { Accent, Container, Reveal } from '@/components/ui';
import { WaitlistInline } from '@/components/waitlist/WaitlistForm';

/** The closing card on every page: join the waitlist. */
const CtaBand = ({
	title = (
		<>
			Stop building the back office. <Accent>Start running it.</Accent>
		</>
	),
	lead = 'Join the waitlist and we’ll open a workspace for your team — set up for what you want to build.',
}: {
	title?: ReactNode;
	lead?: string;
}) => (
	<section className='pb-16 pt-20 md:pb-20 md:pt-28'>
		<Container>
			<Reveal className='mesh-ink relative overflow-hidden rounded-3xl px-6 py-20 text-white shadow-float md:px-12 md:py-28'>
				<div
					aria-hidden
					className='bg-grid-ink pointer-events-none absolute inset-0'
				/>
				<div className='relative mx-auto flex max-w-[760px] flex-col items-center text-center'>
					<h2 className='text-balance text-[38px] font-extralight leading-[1.04] tracking-[-0.045em] md:text-[60px]'>{title}</h2>
					<p className='mt-5 max-w-[540px] text-[17.5px] leading-relaxed text-white/65'>{lead}</p>
					<WaitlistInline
						align='center'
						dark
						className='mt-10'
					/>
				</div>
			</Reveal>
		</Container>
	</section>
);

export default CtaBand;
