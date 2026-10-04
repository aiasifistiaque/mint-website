import Link from 'next/link';
import { FOOTER } from '@/content/site';
import { Container } from '@/components/ui';
import Logo from './Logo';

const Footer = () => (
	<footer className='border-t border-line bg-panel dark:bg-ink'>
		<Container className='pb-8 pt-14 md:pt-16'>
			<div className='grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.5fr_repeat(4,1fr)] md:gap-12'>
				<div className='col-span-2 max-w-[300px] md:col-span-1'>
					<Logo />
					<p className='mt-5 text-[14px] leading-relaxed text-muted'>
						Backend as a service, with the admin panel and back office built in. For every business and every developer.
					</p>
				</div>
				{FOOTER.map(col => (
					<div key={col.title}>
						<p className='caps mb-5 !text-[10.5px] text-faint'>{col.title}</p>
						<ul className='flex flex-col gap-2.5 md:gap-3'>
							{col.links.map(l => (
								<li key={l.href}>
									{'external' in l && l.external ? (
										<a
											href={l.href}
											className='caps !font-light text-muted transition-colors hover:text-fg'>
											{l.label}
										</a>
									) : (
										<Link
											href={l.href}
											className='caps !font-light text-muted transition-colors hover:text-fg'>
											{l.label}
										</Link>
									)}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className='caps mt-12 flex flex-col justify-between gap-2 border-t border-line pt-6 md:mt-14 !font-light !text-[10.5px] text-faint sm:flex-row'>
				<p>© {new Date().getFullYear()} MINT. All rights reserved.</p>
				<p>
					Built on <span className='text-gradient'>MINT</span>, naturally.
				</p>
			</div>
		</Container>
	</footer>
);

export default Footer;
