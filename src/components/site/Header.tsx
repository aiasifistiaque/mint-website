'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from '@/components/ui/icons';
import { NAV, type NavItem } from '@/content/site';
import { APP, SIGNUPS_OPEN } from '@/lib/config';
import { tone } from '@/lib/tones';
import { buttonClass, cx } from '@/components/ui';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

/**
 * Sticky header: the pages — Admin panel and Workflows open menus — then
 * Join the waitlist (no Log in while access is by waitlist; Create account
 * appears only when NEXT_PUBLIC_SIGNUPS_OPEN is on).
 */

const NAV_LINK = 'caps inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 !font-light transition-colors';

/** A header item with a menu: opens on hover, on click and from the keyboard. */
const Dropdown = ({ item, active }: { item: NavItem; active: boolean }) => {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);
	const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
	const pathname = usePathname();
	const children = item.children!;
	const wide = children.length > 3;

	useEffect(() => setOpen(false), [pathname]);

	useEffect(() => {
		if (!open) return;
		const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
		const onClick = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
		document.addEventListener('keydown', onKey);
		document.addEventListener('mousedown', onClick);
		return () => {
			document.removeEventListener('keydown', onKey);
			document.removeEventListener('mousedown', onClick);
		};
	}, [open]);

	const enter = () => {
		clearTimeout(timer.current);
		setOpen(true);
	};
	const leave = () => {
		timer.current = setTimeout(() => setOpen(false), 120);
	};

	return (
		<div
			ref={ref}
			className='relative'
			onMouseEnter={enter}
			onMouseLeave={leave}>
			<button
				type='button'
				aria-expanded={open}
				aria-haspopup='true'
				onClick={() => setOpen(o => !o)}
				className={cx(NAV_LINK, active || open ? 'bg-soft text-fg' : 'text-muted hover:text-fg')}>
				{item.label}
				<ChevronDown className={cx('size-2.5 opacity-60 transition-transform duration-200', open && 'rotate-180')} />
			</button>
			{open && (
				<div className='fade-in absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3'>
					<div className={cx('rounded-2xl border border-line bg-panel p-2 shadow-float', wide ? 'grid w-[620px] grid-cols-2 gap-1' : 'w-[360px]')}>
						{children.map(c => {
							const t = tone(c.color);
							const here = pathname === c.href;
							return (
								<Link
									key={c.href}
									href={c.href}
									className={cx(
										'group flex gap-3.5 rounded-xl p-3 transition-colors hover:bg-subtle',
										here && 'bg-subtle',
										wide && children.length % 2 === 1 && c === children[0] && 'col-span-2 border-b border-line pb-4'
									)}>
									<span className={cx('glyph size-9 rounded-lg', t.text)}>
										<c.icon
											weight='light'
											className='size-[19px]'
										/>
									</span>
									<span className='min-w-0'>
										<span className='caps block !text-[11px] !font-normal text-fg'>{c.label}</span>
										<span className='mt-1 block text-[13px] leading-snug text-muted'>{c.blurb}</span>
									</span>
								</Link>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};

const Header = () => {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 8);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	// Close the menu on navigation.
	useEffect(() => setOpen(false), [pathname]);

	useEffect(() => {
		document.body.style.overflow = open ? 'hidden' : '';
		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
	const itemActive = (n: NavItem) => isActive(n.href) || !!n.children?.some(c => isActive(c.href));

	return (
		<header
			className={cx(
				'sticky top-0 z-40 transition-[background,border-color] duration-300',
				scrolled || open ? 'border-b border-line bg-bg shadow-[0_1px_0_rgb(0_0_0/0.02)]' : 'border-b border-transparent bg-transparent'
			)}>
			<div className='mx-auto flex h-16 w-full max-w-[1200px] items-center gap-6 px-5 md:px-8'>
				<Logo />
				<nav className='hidden flex-1 items-center gap-0.5 lg:flex'>
					{NAV.map(n =>
						n.children ? (
							<Dropdown
								key={n.href}
								item={n}
								active={itemActive(n)}
							/>
						) : (
							<Link
								key={n.href}
								href={n.href}
								className={cx(NAV_LINK, itemActive(n) ? 'bg-soft text-fg' : 'text-muted hover:text-fg')}>
								{n.label}
							</Link>
						)
					)}
				</nav>
				<div className='ml-auto hidden items-center gap-1.5 lg:flex'>
					<ThemeToggle className='mr-1' />
					{SIGNUPS_OPEN && (
						<a
							href={APP.register}
							className={buttonClass('secondary', 'sm', 'caps !font-light')}>
							Create account
						</a>
					)}
					<Link
						href='/waitlist'
						className={buttonClass('brand', 'sm', 'caps !font-normal')}>
						Join the waitlist
					</Link>
				</div>
				<ThemeToggle className='ml-auto lg:hidden' />
				<button
					type='button'
					aria-label={open ? 'Close menu' : 'Open menu'}
					aria-expanded={open}
					onClick={() => setOpen(o => !o)}
					className='inline-flex size-9 items-center justify-center rounded-full border border-line lg:hidden'>
					{open ? <X className='size-4' /> : <Menu className='size-4' />}
				</button>
			</div>

			{open && (
				<div className='fade-in h-[calc(100dvh-64px)] overflow-y-auto border-t border-line bg-bg px-5 pb-10 pt-2 lg:hidden'>
					<nav className='flex flex-col'>
						{[{ href: '/', label: 'Home' } as NavItem, ...NAV].map(n =>
							n.children ? (
								<div
									key={n.href}
									className='border-b border-line py-4'>
									<p className='caps !text-[10.5px] text-faint'>{n.label}</p>
									<div className='mt-2 flex flex-col'>
										{n.children.map(c => (
											<Link
												key={c.href}
												href={c.href}
												className={cx('caps flex items-center gap-3 py-2.5 !text-[13px] !font-light', pathname === c.href ? 'text-fg' : 'text-muted')}>
												<span className={cx('size-1.5 rounded-full', tone(c.color).bg)} />
												{c.label}
											</Link>
										))}
									</div>
								</div>
							) : (
								<Link
									key={n.href}
									href={n.href}
									className={cx('caps border-b border-line py-4 !text-[13px] !font-light', pathname === n.href ? 'text-fg' : 'text-muted')}>
									{n.label}
								</Link>
							)
						)}
						{[
							{ href: '/features', label: 'All features' },
							{ href: '/use-cases', label: 'Use cases' },
							{ href: '/security', label: 'Security' },
							{ href: '/changelog', label: 'Changelog' },
							{ href: '/about', label: 'About' },
						].map(n => (
							<Link
								key={n.href}
								href={n.href}
								className={cx('caps border-b border-line py-4 !text-[13px] !font-light', pathname === n.href ? 'text-fg' : 'text-muted')}>
								{n.label}
							</Link>
						))}
					</nav>
					<div className='mt-8 flex flex-col gap-3'>
						<Link
							href='/waitlist'
							className={buttonClass('brand', 'lg', 'caps !font-normal')}>
							Join the waitlist
						</Link>
						{SIGNUPS_OPEN && (
							<a
								href={APP.register}
								className={buttonClass('secondary', 'lg', 'caps !font-light')}>
								Create account
							</a>
						)}
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
