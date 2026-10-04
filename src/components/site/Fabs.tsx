'use client';

import { useEffect, useState } from 'react';
import { ArrowUp, WhatsApp } from '@/components/ui/icons';
import { cx } from '@/components/ui';
import { WHATSAPP_URL } from '@/lib/contact';

/**
 * The floating buttons, bottom right on every page: chat with us on WhatsApp,
 * and — once the page is scrolled — back to the top.
 */
const FAB = 'glyph size-12 rounded-full transition-[transform,opacity] duration-300 hover:-translate-y-0.5';

const Fabs = () => {
	const [up, setUp] = useState(false);

	useEffect(() => {
		const onScroll = () => setUp(window.scrollY > 700);
		onScroll();
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<div className='pointer-events-none fixed bottom-4 right-4 z-30 flex flex-col items-end gap-2.5 md:bottom-6 md:right-6'>
			<button
				type='button'
				aria-label='Back to top'
				tabIndex={up ? 0 : -1}
				onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })}
				className={cx(FAB, 'text-fg shadow-float', up ? 'pointer-events-auto opacity-100' : 'translate-y-2 opacity-0')}>
				<ArrowUp className='size-5' />
			</button>
			<a
				href={WHATSAPP_URL}
				target='_blank'
				rel='noopener noreferrer'
				aria-label='Chat with us on WhatsApp'
				className='group pointer-events-auto flex items-center gap-2'>
				<span className='caps hidden rounded-full border border-line bg-panel px-3 py-2 !text-[10px] text-muted opacity-0 shadow-panel transition-opacity duration-200 group-hover:opacity-100 md:block'>
					Chat on WhatsApp
				</span>
				<span className={cx(FAB, 'text-[#1faa53] shadow-float dark:text-[#25d366]')}>
					<WhatsApp className='size-6' />
				</span>
			</a>
		</div>
	);
};

export default Fabs;
