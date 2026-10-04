import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import FlowPage from '@/components/flow/FlowPage';
import { FLOWS } from '@/content/flows';

const flow = FLOWS.find(f => f.id === 'website')!;

export const metadata: Metadata = pageMeta({
	title: 'Build a website',
	description:
		'Connect Claude or ChatGPT to a MINT website project: your AI builds the design, MINT is the backend — pages, SEO, images, analytics and security included, edited from the panel.',
	path: flow.href,
});

export default function Page() {
	return <FlowPage flow={flow} />;
}
