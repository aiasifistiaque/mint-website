'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from '@/components/ui/icons';
import { NAV } from '@/content/site';
import { APP, SIGNUPS_OPEN } from '@/lib/config';
import { buttonClass, cx } from '@/components/ui';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';

/**
 * Sticky header: the pages, then the way into the app — Log in (the app sends
 * anyone already signed in on to their dashboard) and Join the waitlist.
 */
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

	const active = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

	return (
		<header
			className={cx(
				'sticky top-0 z-40 transition-[background,border-color] duration-300',
				scrolled || open ? 'border-b border-line bg-bg/[0.97] shadow-[0_1px_0_rgb(0_0_0/0.02)]' : 'border-b border-transparent bg-transparent'
			)}>
			<div className='mx-auto flex h-16 w-full max-w-[1160px] items-center gap-8 px-5 md:px-8'>
				<Logo />
				<nav className='hidden flex-1 items-center gap-1 lg:flex'>
					{NAV.map(n => (
						<Link
							key={n.href}
							href={n.href}
							className={cx(
								'caps rounded-full px-3.5 py-2 transition-colors',
								active(n.href) ? 'bg-soft font-medium text-fg' : 'text-muted hover:text-fg'
							)}>
							{n.label}
						</Link>
					))}
				</nav>
				<div className='ml-auto hidden items-center gap-1.5 lg:flex'>
					<ThemeToggle className='mr-1' />
					<a
						href={APP.login}
						className={buttonClass('ghost', 'sm', 'caps')}>
						Log in
					</a>
					{SIGNUPS_OPEN && (
						<a
							href={APP.register}
							className={buttonClass('secondary', 'sm', 'caps')}>
							Create account
						</a>
					)}
					<Link
						href='/waitlist'
						className={buttonClass('brand', 'sm', 'caps')}>
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
				<div className='fade-in h-[calc(100dvh-64px)] overflow-y-auto border-t border-line bg-bg px-5 pb-10 pt-4 lg:hidden'>
					<nav className='flex flex-col'>
						{[{ href: '/', label: 'Home' }, ...NAV, { href: '/features', label: 'All features' }, { href: '/use-cases', label: 'Use cases' }, { href: '/security', label: 'Teams & security' }, { href: '/changelog', label: 'Changelog' }, { href: '/about', label: 'About' }].map(
							n => (
								<Link
									key={n.href}
									href={n.href}
									className={cx(
										'caps border-b border-line py-4 !text-[14px]',
										pathname === n.href ? 'text-fg' : 'text-muted'
									)}>
									{n.label}
								</Link>
							)
						)}
					</nav>
					<div className='mt-8 flex flex-col gap-3'>
						<Link
							href='/waitlist'
							className={buttonClass('brand', 'lg', 'caps')}>
							Join the waitlist
						</Link>
						{SIGNUPS_OPEN && (
							<a
								href={APP.register}
								className={buttonClass('secondary', 'lg', 'caps')}>
								Create account
							</a>
						)}
						<a
							href={APP.login}
							className={buttonClass('secondary', 'lg', 'caps')}>
							Log in
						</a>
					</div>
				</div>
			)}
		</header>
	);
};

export default Header;
