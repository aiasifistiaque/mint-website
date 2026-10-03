import Link from 'next/link';

/** The mark: a white leaf on the brand gradient. */
export const Mark = ({ size = 22 }: { size?: number }) => (
	<svg
		width={size}
		height={size}
		viewBox='0 0 22 22'
		aria-hidden>
		<defs>
			<linearGradient
				id='mint-mark'
				x1='0'
				y1='0'
				x2='22'
				y2='22'
				gradientUnits='userSpaceOnUse'>
				<stop stopColor='#10b981' />
				<stop
					offset='0.5'
					stopColor='#06b6d4'
				/>
				<stop
					offset='1'
					stopColor='#8b5cf6'
				/>
			</linearGradient>
		</defs>
		<rect
			width='22'
			height='22'
			rx='6.5'
			fill='url(#mint-mark)'
		/>
		<path
			d='M6 16C6 10.2 10.2 6 16 6C16 11.8 11.8 16 6 16Z'
			fill='#fff'
		/>
		<path
			d='M6.6 15.4L12.2 9.8'
			stroke='url(#mint-mark)'
			strokeWidth='1.3'
			strokeLinecap='round'
		/>
	</svg>
);

const Logo = () => (
	<Link
		href='/'
		aria-label='MINT home'
		className='font-display inline-flex items-center gap-2 text-[18px] font-medium tracking-[-0.04em]'>
		<Mark size={26} />
		<span>mint</span>
	</Link>
);

export default Logo;
