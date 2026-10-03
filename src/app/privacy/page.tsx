import type { Metadata } from 'next';
import { Container, PageHero } from '@/components/ui';

export const metadata: Metadata = {
	title: 'Privacy',
	description: 'What this website collects and why.',
	alternates: { canonical: '/privacy' },
};

/**
 * What this website itself collects. The app's own terms and policy live in
 * the app; keep this page to the website and the waitlist.
 */
const SECTIONS = [
	{
		t: 'What we collect',
		b: 'This website doesn’t use cookies or tracking scripts. When you join the waitlist we keep what you type into the form — your email, and any of name, company, role, team size and what you want to build — plus the page you signed up from.',
	},
	{
		t: 'Why',
		b: 'To contact you when your spot opens, and to set up your workspace for what you told us you want to build. Nothing else.',
	},
	{
		t: 'Who sees it',
		b: 'Only the MINT team. We don’t sell it, rent it or share it for marketing.',
	},
	{
		t: 'Changing or removing it',
		b: 'Sign up again with the same email to update your details. To be removed from the list, reply to any email from us and we’ll delete your entry.',
	},
];

export default function PrivacyPage() {
	return (
		<>
			<PageHero
				eyebrow='Privacy'
				color='emerald'
				title='Short and plain.'
				lead='What this website collects, why, and how to change your mind.'
			/>
			<Container className='pb-28'>
				<div className='flex max-w-[720px] flex-col gap-10'>
					{SECTIONS.map(s => (
						<section key={s.t}>
							<h2 className='text-[22px] font-normal tracking-[-0.02em]'>{s.t}</h2>
							<p className='mt-2 text-[16px] leading-[1.75] text-muted'>{s.b}</p>
						</section>
					))}
				</div>
			</Container>
		</>
	);
}
