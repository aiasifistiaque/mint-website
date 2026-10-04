import type { Metadata } from 'next';
import FlowPage from '@/components/flow/FlowPage';
import { FLOWS } from '@/content/flows';

const flow = FLOWS.find(f => f.id === 'api')!;

export const metadata: Metadata = {
	title: 'Build an API',
	description: 'From a model to a public REST API, step by step: choose the actions and who may call them, add customer sign-in, filter and search, and check it in a live reference.',
	alternates: { canonical: flow.href },
};

export default function Page() {
	return <FlowPage flow={flow} />;
}
