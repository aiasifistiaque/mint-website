import {
	Archive,
	Bell,
	Blocks,
	Boxes,
	Building2,
	Calculator,
	Columns,
	Undo,
	Eye,
	FileUp,
	Filter,
	Fingerprint,
	FolderKanban,
	Hash,
	History,
	Images,
	KeyRound,
	LayoutDashboard,
	LayoutTemplate,
	Link2,
	Lock,
	Merge,
	MonitorSmartphone,
	Moon,
	PanelLeft,
	Plug,
	Search,
	ShieldCheck,
	Sigma,
	SlidersHorizontal,
	SquareStack,
	Stamp,
	Table2,
	Users,
	type IconType,
} from '@/components/ui/icons';
import type { Tone } from '@/lib/tones';

/**
 * Every admin panel feature, grouped — the /admin-panel page reads this.
 * Facts from the app's user guides (records, pages, models, sidebar,
 * dashboard, organization, account, media). Add a line when a feature ships.
 */

export type PanelFeature = { icon: IconType; title: string; body: string; guide?: string };
export type PanelGroup = { id: string; title: string; lead: string; color: Tone; features: PanelFeature[] };

export const PANEL_GROUPS: PanelGroup[] = [
	{
		id: 'tables',
		title: 'Tables',
		lead: 'Every model opens as a table your team can search, sort and slice.',
		color: 'sky',
		features: [
			{ icon: Search, title: 'Search', body: 'The search box matches every field the page makes searchable.', guide: 'records#find' },
			{ icon: Filter, title: 'Filter chips', body: 'By status, date (before, after, between, in the last…), linked record or number range — combined with search.', guide: 'records#find' },
			{ icon: Columns, title: 'Your own columns', body: 'Each person picks the columns they see; the page decides which exist.', guide: 'records' },
			{ icon: Table2, title: 'Sort, page, quick view', body: 'Sort by any column, choose rows per page, and act on a row from its ⋯ menu.', guide: 'records' },
			{ icon: FileUp, title: 'Export', body: 'Export what the filters and search show — not only the current page.', guide: 'records' },
		],
	},
	{
		id: 'forms',
		title: 'Forms',
		lead: 'Add and edit forms laid out the way the work flows.',
		color: 'violet',
		features: [
			{ icon: LayoutTemplate, title: 'Sections and rows', body: 'Group fields into sections, side by side or stacked.', guide: 'pages#form' },
			{ icon: SlidersHorizontal, title: 'Conditional fields', body: 'Show a field only when it applies — a reason only on cancelled bookings.', guide: 'pages#form' },
			{ icon: Link2, title: 'Linked-record pickers', body: 'Pick a guest or a room from a searchable list, narrowed the way the page says.', guide: 'pages' },
			{ icon: ShieldCheck, title: 'Validation', body: 'Required fields, allowed values, min and max, unique — checked in the form and on the server.', guide: 'models#models-fields' },
			{ icon: Sigma, title: 'Live formulas', body: 'Calculated fields show their result as you type.', guide: 'models#formulas' },
		],
	},
	{
		id: 'records',
		title: 'Record pages',
		lead: 'A page for every record, with everything that belongs to it.',
		color: 'amber',
		features: [
			{ icon: Eye, title: 'Detail sections', body: 'The record laid out in sections you choose.', guide: 'pages' },
			{ icon: Boxes, title: 'Tabs for linked records', body: 'A guest’s bookings, an order’s payments — as tabs on its page.', guide: 'pages' },
			{ icon: Hash, title: 'Record codes', body: 'INV-0001, BK-0412 — numbered as they’re created, never shared.', guide: 'models#models-code' },
			{ icon: KeyRound, title: 'Password fields', body: 'Dots until you click the eye; copied without showing; out of history.', guide: 'models#models-password' },
			{ icon: Lock, title: 'Manage access', body: 'Owner and privacy — only me, private, public — on confidential models.', guide: 'models#models-access' },
		],
	},
	{
		id: 'bulk',
		title: 'Many rows at once',
		lead: 'The work of an afternoon, in a few clicks.',
		color: 'rose',
		features: [
			{ icon: SquareStack, title: 'Bulk edit', body: 'Tick rows and change a field on all of them.', guide: 'records#bulk' },
			{ icon: Stamp, title: 'Status moves', body: 'Only the moves you allow — and a reason asked for, kept in history.', guide: 'pages' },
			{ icon: Calculator, title: 'Totals', body: 'Sum, average, lowest, highest or count of the ticked rows, across pages.', guide: 'pages' },
			{ icon: Merge, title: 'Merge duplicates', body: 'Combine two records; every link to the old one moves to the new.', guide: 'records#bulk' },
			{ icon: Archive, title: 'Archive and restore', body: 'Hide records everywhere without losing them.', guide: 'records#bulk' },
			{ icon: FileUp, title: 'Import', body: 'Bring a spreadsheet in, checked first, all or nothing.', guide: 'records' },
		],
	},
	{
		id: 'history',
		title: 'History & safety',
		lead: 'Nobody breaks anything for long.',
		color: 'emerald',
		features: [
			{ icon: History, title: 'History on every record', body: 'Who changed what, and when — field by field.', guide: 'records#history' },
			{ icon: Undo, title: 'Undo', body: 'Put a change back from the record’s history.', guide: 'records#history' },
			{ icon: LayoutTemplate, title: 'Drafts and publishing', body: 'Page changes wait in a draft until you publish.', guide: 'pages' },
			{ icon: Archive, title: 'Versions', body: 'Every publish and every model change kept; load an old one to roll back.', guide: 'pages' },
		],
	},
	{
		id: 'build',
		title: 'Build tools',
		lead: 'The panel builds itself — and you can reshape every part.',
		color: 'cyan',
		features: [
			{ icon: Boxes, title: 'Model builder', body: 'An eight-step wizard: fields, settings, form, table, page, filters, sidebar.', guide: 'models' },
			{ icon: LayoutTemplate, title: 'Page builder', body: 'Columns, filters, form, detail page, status moves, totals, bulk upload.', guide: 'pages' },
			{ icon: PanelLeft, title: 'Sidebar builder', body: 'Sections, pages, icons, order and who sees each — previewed first.', guide: 'sidebar' },
			{ icon: LayoutDashboard, title: 'Dashboard builder', body: 'Numbers, charts and recent lists with conditions, per viewer.', guide: 'dashboard' },
			{ icon: Plug, title: 'Connect AI', body: 'Claude, ChatGPT or Cursor build models, pages and dashboards with you.', guide: 'connect-ai' },
			{ icon: Blocks, title: 'Features by AI', body: 'Several linked models from one description, listed with what they made.', guide: 'models#features' },
		],
	},
	{
		id: 'team',
		title: 'Team & access',
		lead: 'Everyone in, each with exactly the access they need.',
		color: 'amber',
		features: [
			{ icon: Building2, title: 'Organizations', body: 'One for your company — belong to several and switch in a click.', guide: 'organization' },
			{ icon: Users, title: 'Roles', body: 'View, add, edit, delete, build — in plain words.', guide: 'organization#roles' },
			{ icon: FolderKanban, title: 'Project access', body: 'Every project, or only the ones someone works in.', guide: 'organization#project-access' },
			{ icon: Eye, title: 'Per-role sidebar and dashboard', body: 'People only see the pages and numbers they may see.', guide: 'sidebar' },
			{ icon: Bell, title: 'Notifications', body: 'Invites, shared records, and what your site sends in — on the bell.', guide: 'account' },
		],
	},
	{
		id: 'account',
		title: 'Sign-in & devices',
		lead: 'Accounts that are hard to break into and easy to use.',
		color: 'violet',
		features: [
			{ icon: Fingerprint, title: 'Passkeys', body: 'Sign in with your fingerprint or face — or a passkey on your phone.', guide: 'account' },
			{ icon: KeyRound, title: 'Email codes and backup codes', body: 'Two-step sign-in, with backup codes for the day the phone is lost.', guide: 'account' },
			{ icon: MonitorSmartphone, title: 'Signed-in devices', body: 'See every device on your account and sign any of them out.', guide: 'account#devices' },
			{ icon: Moon, title: 'Themes, light and dark', body: 'Colour themes saved to your account; light, dark or system per browser.', guide: 'account' },
		],
	},
	{
		id: 'media',
		title: 'Media',
		lead: 'A drive for everything your records and site show.',
		color: 'sky',
		features: [
			{ icon: Images, title: 'Folders and uploads', body: 'Images, videos and files in folders — per project or shared.', guide: 'media' },
			{ icon: Search, title: 'Search, filter, sort', body: 'Find a file by name, kind or date.', guide: 'media' },
			{ icon: Link2, title: 'Preview and links', body: 'Preview any file and copy its public link.', guide: 'media' },
			{ icon: Archive, title: 'Trash', body: 'Deleting moves files to the trash, with an undo — restore them from there.', guide: 'media' },
		],
	},
];

export const PANEL_STATS = [
	{ n: PANEL_GROUPS.reduce((a, g) => a + g.features.length, 0).toString(), l: 'features, on every model' },
	{ n: PANEL_GROUPS.length.toString(), l: 'groups of back-office tools' },
	{ n: '0', l: 'admin screens to code' },
	{ n: '1 click', l: 'from draft to published' },
];
