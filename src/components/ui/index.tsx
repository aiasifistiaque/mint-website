import Link from 'next/link';
import { ComponentProps, ReactNode } from 'react';
import { ArrowRight, ArrowUpRight } from '@/components/ui/icons';
import { Tone, tone } from '@/lib/tones';
import Reveal from './Reveal';

export { Reveal };

const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ');
export { cx };

/* ----------------------------------------------------------- layout */

export const Container = ({ className, children }: { className?: string; children: ReactNode }) => (
	<div className={cx('mx-auto w-full max-w-[1200px] px-5 md:px-8', className)}>{children}</div>
);

/**
 * A page section. `subtle` is a tinted band; `ink` a deep dark band with
 * colour fields — text inside should use the `ink` variants (text-white/…).
 */
export const Section = ({
	id,
	className,
	children,
	tone: t,
}: {
	id?: string;
	className?: string;
	children: ReactNode;
	tone?: 'subtle' | 'ink';
}) => (
	<section
		id={id}
		className={cx(
			'relative overflow-hidden py-24 md:py-32',
			t === 'subtle' && 'bg-subtle',
			t === 'ink' && 'mesh-ink text-white',
			className
		)}>
		{t === 'ink' && (
			<div
				aria-hidden
				className='bg-grid-ink pointer-events-none absolute inset-0'
			/>
		)}
		<Container className='relative'>{children}</Container>
	</section>
);

/** A small label above a heading, with a coloured dot. */
export const Eyebrow = ({ children, className, color = 'emerald' }: { children: ReactNode; className?: string; color?: Tone }) => (
	<p className={cx('mb-5 inline-flex items-center gap-2 font-mono text-[12px] font-medium uppercase tracking-[0.16em]', tone(color).text, className)}>
		<span className={cx('size-1.5 rounded-full', tone(color).bg)} />
		{children}
	</p>
);

export const SectionHead = ({
	eyebrow,
	color,
	title,
	lead,
	align = 'left',
	dark,
	className,
}: {
	eyebrow?: string;
	color?: Tone;
	title: ReactNode;
	lead?: ReactNode;
	align?: 'left' | 'center';
	dark?: boolean;
	className?: string;
}) => (
	<Reveal className={cx('mb-14 max-w-[720px] md:mb-16', align === 'center' && 'mx-auto text-center', className)}>
		{eyebrow && (
			<Eyebrow
				color={color}
				className={dark ? '!text-white/70' : undefined}>
				{eyebrow}
			</Eyebrow>
		)}
		<h2 className='text-balance text-[34px] font-extralight leading-[1.06] tracking-[-0.035em] md:text-[50px]'>{title}</h2>
		{lead && <p className={cx('mt-5 text-pretty text-[17.5px] leading-[1.7]', dark ? 'text-white/65' : 'text-muted')}>{lead}</p>}
	</Reveal>
);

/** The gradient accent used for a few words in big headings. */
export const Accent = ({ children, warm }: { children: ReactNode; warm?: boolean }) => (
	<span className={warm ? 'text-gradient-warm' : 'text-gradient'}>{children}</span>
);

/* ---------------------------------------------------------- buttons */

type ButtonProps = {
	href: string;
	children: ReactNode;
	variant?: 'primary' | 'brand' | 'secondary' | 'ghost' | 'light';
	size?: 'sm' | 'md' | 'lg';
	arrow?: boolean;
	className?: string;
};

const BUTTON = {
	base: 'group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-normal transition-[background,color,border-color,box-shadow,transform] duration-200 active:scale-[0.98]',
	primary: 'bg-ink text-white shadow-[0_8px_24px_-8px_rgb(13_13_13/0.5)] hover:shadow-[0_10px_30px_-6px_rgb(99_102_241/0.55)] dark:bg-white dark:text-ink',
	brand: 'bg-brand text-white shadow-[0_10px_30px_-8px_rgb(99_102_241/0.6)] hover:brightness-110',
	secondary: 'border border-line-strong bg-panel text-fg hover:border-fg/30',
	ghost: 'text-muted hover:text-fg',
	light: 'bg-white text-ink hover:bg-white/90',
	sm: 'h-9 px-4 text-[13px]',
	md: 'h-11 px-5 text-[14px]',
	lg: 'h-12 px-6 text-[15px]',
};

export const buttonClass = (variant: ButtonProps['variant'] = 'primary', size: ButtonProps['size'] = 'md', className?: string) =>
	cx(BUTTON.base, BUTTON[variant], BUTTON[size], className);

const isExternal = (href: string) => /^https?:\/\//.test(href);

export const Button = ({ href, children, variant = 'primary', size = 'md', arrow, className }: ButtonProps) => {
	const inner = (
		<>
			{children}
			{arrow && <ArrowRight className='size-[15px] transition-transform duration-200 group-hover:translate-x-0.5' />}
		</>
	);
	return isExternal(href) ? (
		<a
			href={href}
			className={buttonClass(variant, size, className)}>
			{inner}
		</a>
	) : (
		<Link
			href={href}
			className={buttonClass(variant, size, className)}>
			{inner}
		</Link>
	);
};

/** A quiet inline link with an arrow. */
export const TextLink = ({ href, children, className }: { href: string; children: ReactNode; className?: string }) => {
	const external = isExternal(href);
	const Icon = external ? ArrowUpRight : ArrowRight;
	const cls = cx('group inline-flex items-center gap-1.5 text-[14.5px] font-normal underline-offset-4 hover:underline', className);
	const inner = (
		<>
			{children}
			<Icon className='size-[15px] opacity-60 transition-transform duration-200 group-hover:translate-x-0.5' />
		</>
	);
	return external ? (
		<a
			href={href}
			className={cls}>
			{inner}
		</a>
	) : (
		<Link
			href={href}
			className={cls}>
			{inner}
		</Link>
	);
};

/* ------------------------------------------------------------ bits */

export const Pill = ({ children, className }: { children: ReactNode; className?: string }) => (
	<span
		className={cx(
			'inline-flex items-center gap-2 rounded-full border border-line bg-panel/80 px-3.5 py-1.5 text-[13px] font-normal text-muted shadow-panel',
			className
		)}>
		{children}
	</span>
);

export const Dot = ({ className }: { className?: string }) => (
	<span className={cx('relative inline-flex size-2', className)}>
		<span className='absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-70' />
		<span className='relative inline-flex size-2 rounded-full bg-emerald-500' />
	</span>
);

/** A bordered card. */
export const Card = ({ className, children, ...rest }: ComponentProps<'div'>) => (
	<div
		className={cx('rounded-2xl border border-line bg-panel', className)}
		{...rest}>
		{children}
	</div>
);

/** The coloured icon tile on feature cards. */
export const IconTile = ({ children, color = 'emerald', solid, className }: { children: ReactNode; color?: Tone; solid?: boolean; className?: string }) => (
	<span
		className={cx(
			'inline-flex size-11 items-center justify-center rounded-xl [&>svg]:size-[22px]',
			solid ? cx('bg-gradient-to-br text-white shadow-lg', tone(color).grad) : cx(tone(color).soft, tone(color).text),
			className
		)}>
		{children}
	</span>
);

/** The page title block every inner page opens with. */
export const PageHero = ({
	eyebrow,
	color,
	title,
	lead,
	children,
	aside,
}: {
	eyebrow: string;
	color?: Tone;
	title: ReactNode;
	lead: ReactNode;
	children?: ReactNode;
	aside?: ReactNode;
}) => (
	<header className='relative overflow-hidden'>
		<div
			aria-hidden
			className='mesh pointer-events-none absolute inset-0'
		/>
		<div
			aria-hidden
			className='bg-grid pointer-events-none absolute inset-0 opacity-60'
		/>
		<Container className={cx('relative pb-20 pt-20 md:pb-28 md:pt-28', !!aside && 'grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]')}>
			<Reveal className='max-w-[780px]'>
				<Eyebrow color={color}>{eyebrow}</Eyebrow>
				<h1 className='text-balance text-[40px] font-extralight leading-[1.02] tracking-[-0.045em] md:text-[58px]'>{title}</h1>
				<p className='mt-6 max-w-[620px] text-pretty text-[18.5px] leading-[1.7] text-muted'>{lead}</p>
				{children && <div className='mt-10 flex flex-wrap items-center gap-3'>{children}</div>}
			</Reveal>
			{aside && <Reveal delay={120}>{aside}</Reveal>}
		</Container>
	</header>
);
