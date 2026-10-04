/**
 * Every icon on the site, from Phosphor (phosphoricons.com): duotone for the
 * pictures — feature tiles, personas, steps — and bold for small glyphs like
 * arrows and checks. Components keep the names they're used by; to change an
 * icon everywhere, change it here.
 */
import type { ComponentType } from 'react';
import type { IconProps, IconWeight } from '@phosphor-icons/react';
import {
	AddressBook as PhAddressBook,
	AppWindow as PhAppWindow,
	Archive as PhArchive,
	ArrowDown as PhArrowDown,
	ArrowRight as PhArrowRight,
	ArrowUpRight as PhArrowUpRight,
	Bed as PhBed,
	BellSimple as PhBellSimple,
	BookOpenText as PhBookOpenText,
	Briefcase as PhBriefcase,
	Buildings as PhBuildings,
	CalendarBlank as PhCalendarBlank,
	CaretDown as PhCaretDown,
	ChartLineUp as PhChartLineUp,
	ChatText as PhChatText,
	Check as PhCheck,
	CheckSquareOffset as PhCheckSquareOffset,
	CircleNotch as PhCircleNotch,
	Clock as PhClock,
	ClockCounterClockwise as PhClockCounterClockwise,
	Code as PhCode,
	CodeBlock as PhCodeBlock,
	Compass as PhCompass,
	Cube as PhCube,
	DeviceMobile as PhDeviceMobile,
	Devices as PhDevices,
	DotsSixVertical as PhDotsSixVertical,
	EnvelopeOpen as PhEnvelopeOpen,
	EnvelopeSimple as PhEnvelopeSimple,
	Eye as PhEye,
	FileArrowUp as PhFileArrowUp,
	Fingerprint as PhFingerprint,
	FlowArrow as PhFlowArrow,
	FolderOpen as PhFolderOpen,
	Function as PhFunction,
	FunnelSimple as PhFunnelSimple,
	GitBranch as PhGitBranch,
	GlobeHemisphereWest as PhGlobeHemisphereWest,
	Hammer as PhHammer,
	Hand as PhHand,
	HandHeart as PhHandHeart,
	HardDrives as PhHardDrives,
	Hash as PhHash,
	Headset as PhHeadset,
	Image as PhImage,
	Images as PhImages,
	Key as PhKey,
	Layout as PhLayout,
	Lightning as PhLightning,
	LinkSimple as PhLinkSimple,
	List as PhList,
	ListChecks as PhListChecks,
	LockSimple as PhLockSimple,
	MagicWand as PhMagicWand,
	MagnifyingGlass as PhMagnifyingGlass,
	Minus as PhMinus,
	Moon as PhMoon,
	Package as PhPackage,
	Plug as PhPlug,
	Plus as PhPlus,
	PuzzlePiece as PhPuzzlePiece,
	Receipt as PhReceipt,
	RocketLaunch as PhRocketLaunch,
	ShieldCheck as PhShieldCheck,
	ShoppingBag as PhShoppingBag,
	Sidebar as PhSidebar,
	SlidersHorizontal as PhSlidersHorizontal,
	Sparkle as PhSparkle,
	SquaresFour as PhSquaresFour,
	Stack as PhStack,
	Storefront as PhStorefront,
	Sun as PhSun,
	Table as PhTable,
	TextT as PhTextT,
	Timer as PhTimer,
	TreeStructure as PhTreeStructure,
	TrendUp as PhTrendUp,
	UserCheck as PhUserCheck,
	UserCircle as PhUserCircle,
	UsersThree as PhUsersThree,
	WebhooksLogo as PhWebhooksLogo,
	X as PhX,
	Database as PhDatabase,
	PencilSimple as PhPencilSimple,
	CursorClick as PhCursorClick,
	Browser as PhBrowser,
	ToggleRight as PhToggleRight,
	TextAa as PhTextAa,
	Tag as PhTag,
	Robot as PhRobot,
} from '@phosphor-icons/react/dist/ssr';

export type IconType = ComponentType<IconProps>;

const make = (Icon: IconType, weight: IconWeight): IconType => {
	const Wrapped = (props: IconProps) => (
		<Icon
			weight={weight}
			{...props}
		/>
	);
	return Wrapped;
};

export const AppWindow = make(PhAppWindow, 'duotone');
export const Archive = make(PhArchive, 'duotone');
export const ArrowDown = make(PhArrowDown, 'bold');
export const ArrowRight = make(PhArrowRight, 'bold');
export const ArrowUpRight = make(PhArrowUpRight, 'bold');
export const BedDouble = make(PhBed, 'duotone');
export const Bell = make(PhBellSimple, 'duotone');
export const Blocks = make(PhPuzzlePiece, 'duotone');
export const BookOpenCheck = make(PhBookOpenText, 'duotone');
export const Boxes = make(PhCube, 'duotone');
export const Briefcase = make(PhBriefcase, 'duotone');
export const Building = make(PhBuildings, 'duotone');
export const Building2 = make(PhBuildings, 'duotone');
export const CalendarDays = make(PhCalendarBlank, 'duotone');
export const ChartLine = make(PhChartLineUp, 'duotone');
export const Check = make(PhCheck, 'bold');
export const ChevronDown = make(PhCaretDown, 'bold');
export const Clock = make(PhClock, 'duotone');
export const Clock3 = make(PhTimer, 'duotone');
export const Code = make(PhCode, 'duotone');
export const Code2 = make(PhCodeBlock, 'duotone');
export const Compass = make(PhCompass, 'duotone');
export const Contact = make(PhAddressBook, 'duotone');
export const Eye = make(PhEye, 'duotone');
export const FileUp = make(PhFileArrowUp, 'duotone');
export const Filter = make(PhFunnelSimple, 'duotone');
export const Fingerprint = make(PhFingerprint, 'duotone');
export const FolderKanban = make(PhFolderOpen, 'duotone');
export const GitBranch = make(PhGitBranch, 'duotone');
export const Globe = make(PhGlobeHemisphereWest, 'duotone');
export const GripVertical = make(PhDotsSixVertical, 'bold');
export const Hammer = make(PhHammer, 'duotone');
export const Hand = make(PhHand, 'duotone');
export const Hash = make(PhHash, 'duotone');
export const Headset = make(PhHeadset, 'duotone');
export const HeartHandshake = make(PhHandHeart, 'duotone');
export const History = make(PhClockCounterClockwise, 'duotone');
export const Image = make(PhImage, 'duotone');
export const Images = make(PhImages, 'duotone');
export const KeyRound = make(PhKey, 'duotone');
export const Layers = make(PhStack, 'duotone');
export const LayoutDashboard = make(PhSquaresFour, 'duotone');
export const LayoutTemplate = make(PhLayout, 'duotone');
export const Link2 = make(PhLinkSimple, 'duotone');
export const ListChecks = make(PhListChecks, 'duotone');
export const ListTree = make(PhTreeStructure, 'duotone');
export const Loader2 = make(PhCircleNotch, 'bold');
export const Lock = make(PhLockSimple, 'duotone');
export const Mail = make(PhEnvelopeSimple, 'duotone');
export const MailOpen = make(PhEnvelopeOpen, 'duotone');
export const Menu = make(PhList, 'bold');
export const MessageSquareText = make(PhChatText, 'duotone');
export const Minus = make(PhMinus, 'bold');
export const Moon = make(PhMoon, 'duotone');
export const MonitorSmartphone = make(PhDevices, 'duotone');
export const Package = make(PhPackage, 'duotone');
export const PanelLeft = make(PhSidebar, 'duotone');
export const Plug = make(PhPlug, 'duotone');
export const Plus = make(PhPlus, 'bold');
export const ReceiptText = make(PhReceipt, 'duotone');
export const Rocket = make(PhRocketLaunch, 'duotone');
export const Search = make(PhMagnifyingGlass, 'bold');
export const Server = make(PhHardDrives, 'duotone');
export const ShieldCheck = make(PhShieldCheck, 'duotone');
export const ShoppingBag = make(PhShoppingBag, 'duotone');
export const Sigma = make(PhFunction, 'duotone');
export const SlidersHorizontal = make(PhSlidersHorizontal, 'duotone');
export const Smartphone = make(PhDeviceMobile, 'duotone');
export const Sparkles = make(PhSparkle, 'duotone');
export const SquareStack = make(PhCheckSquareOffset, 'duotone');
export const Store = make(PhStorefront, 'duotone');
export const Sun = make(PhSun, 'duotone');
export const Table2 = make(PhTable, 'duotone');
export const TrendingUp = make(PhTrendUp, 'duotone');
export const Type = make(PhTextT, 'duotone');
export const UserCheck = make(PhUserCheck, 'duotone');
export const UserRound = make(PhUserCircle, 'duotone');
export const Users = make(PhUsersThree, 'duotone');
export const Wand2 = make(PhMagicWand, 'duotone');
export const Webhook = make(PhWebhooksLogo, 'duotone');
export const Workflow = make(PhFlowArrow, 'duotone');
export const X = make(PhX, 'bold');
export const Zap = make(PhLightning, 'duotone');
export const Database = make(PhDatabase, 'duotone');
export const Pencil = make(PhPencilSimple, 'duotone');
export const Cursor = make(PhCursorClick, 'duotone');
export const Browser = make(PhBrowser, 'duotone');
export const Toggle = make(PhToggleRight, 'duotone');
export const TextAa = make(PhTextAa, 'duotone');
export const Tag = make(PhTag, 'duotone');
export const Robot = make(PhRobot, 'duotone');
