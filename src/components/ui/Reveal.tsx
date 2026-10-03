'use client';

import { ReactNode, useEffect, useRef } from 'react';

/**
 * Fades its content up the first time it scrolls into view (`.reveal` in
 * globals.css). Content is visible without JavaScript: the class that hides
 * it is only added once the observer is running.
 */
const Reveal = ({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const el = ref.current;
		if (!el || typeof IntersectionObserver === 'undefined') return;
		const box = el.getBoundingClientRect();
		// Already on screen at load: leave it be, no flash.
		if (box.top < window.innerHeight && box.bottom > 0) return;
		el.classList.add('reveal');
		if (delay) el.style.transitionDelay = `${delay}ms`;
		const io = new IntersectionObserver(
			entries => {
				if (entries.some(e => e.isIntersecting)) {
					el.classList.add('is-in');
					io.disconnect();
				}
			},
			{ rootMargin: '0px 0px -8% 0px' }
		);
		io.observe(el);
		return () => io.disconnect();
	}, [delay]);

	return (
		<div
			ref={ref}
			className={className}>
			{children}
		</div>
	);
};

export default Reveal;
