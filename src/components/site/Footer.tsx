import Link from 'next/link';
import { FOOTER } from '@/content/site';
import { Container } from '@/components/ui';
import Logo from './Logo';

const Footer = () => (
	<footer className='border-t border-line bg-panel'>
		<Container className='py-16'>
			<div className='grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]'>
				<div className='max-w-[280px]'>
					<Logo />
					<p className='mt-4 text-[14px] leading-relaxed text-muted'>
						Backend as a service, with the admin panel and back office built in. For every business and every developer.
					</p>
				</div>
				{FOOTER.map(col => (
					<div key={col.title}>
						<p className='font-display mb-4 text-[13px] font-medium'>{col.title}</p>
						<ul className='flex flex-col gap-2.5'>
							{col.links.map(l => (
								<li key={l.href}>
									{'external' in l && l.external ? (
										<a
											href={l.href}
											className='text-[14px] text-muted transition-colors hover:text-fg'>
											{l.label}
										</a>
									) : (
										<Link
											href={l.href}
											className='text-[14px] text-muted transition-colors hover:text-fg'>
											{l.label}
										</Link>
									)}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
			<div className='mt-16 flex flex-col justify-between gap-3 border-t border-line pt-8 text-[13px] text-faint sm:flex-row'>
				<p>© {new Date().getFullYear()} MINT. All rights reserved.</p>
				<p className='font-mono text-[12px]'>
					Built on <span className='text-gradient font-bold'>MINT</span>, naturally.
				</p>
			</div>
		</Container>
	</footer>
);

export default Footer;
