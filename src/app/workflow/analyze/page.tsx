import type { Metadata } from 'next';
import { pageMeta } from '@/lib/seo';
import FlowPage from '@/components/flow/FlowPage';
import { FLOWS } from '@/content/flows';

const flow = FLOWS.find(f => f.id === 'analyze')!;

export const metadata: Metadata = pageMeta({
	title: 'Analyze your data with AI',
	description:
		'Connect Claude, ChatGPT, Cursor or any MCP assistant to a MINT project and ask your data anything in plain words — read-only keys, scoped to one project, never beyond your role.',
	path: flow.href,
});

export default function Page() {
	return <FlowPage flow={flow} />;
}
