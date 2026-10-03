import type { MockKey } from '@/content/workflow';
import { ApiMock, DashboardMock, ModelMock, PagesMock, ProjectMock, TeamMock } from './mocks';

/** The drawing for a workflow step (content/workflow.ts `mock`). */
const StepMock = ({ mock }: { mock: MockKey }) => {
	switch (mock) {
		case 'project':
			return <ProjectMock />;
		case 'model':
			return <ModelMock />;
		case 'pages':
			return <PagesMock />;
		case 'team':
			return <TeamMock />;
		case 'dashboard':
			return <DashboardMock />;
		case 'live':
			return <ApiMock />;
	}
};

export default StepMock;
