import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import FlowPage from '@/components/flow/FlowPage';
import { FLOWS } from '@/content/flows';

const flow = FLOWS.find(f => f.id === 'admin-panel')!;

export const metadata: Metadata = pageMeta({
	title: 'Build an admin panel',
	description:
		'Build an admin panel and back office on MINT, step by step: models, pages, sidebar, dashboard, team and roles — then run the business from it.',
	path: flow.href,
});

export default function Page() {
	return <FlowPage flow={flow} />;
}
