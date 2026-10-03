import { Plus } from '@/components/ui/icons';

/** Questions people ask before they sign up. <details> — no JavaScript needed. */

export const FAQ = [
	{
		q: 'Do I need to know how to code?',
		a: 'No. You describe your data in a form — or in a sentence to your AI — and MINT builds the tables, forms and pages. Developers get an API when they want one, but nobody has to write code to run a business on MINT.',
	},
	{
		q: 'How is this different from a spreadsheet?',
		a: 'A spreadsheet is a grid anyone can break. MINT gives every kind of record its own form with required fields, links between records, roles that decide who can change what, a dashboard, and a history of every change with undo.',
	},
	{
		q: 'Can I change things after my team starts using it?',
		a: 'Yes — that’s the point. Add a field, a filter or a whole model whenever the business changes. Page changes are drafted and previewed before you publish them, so your team never sees a half-finished screen.',
	},
	{
		q: 'Which AI assistants work with MINT?',
		a: 'Any assistant that speaks MCP: Claude (web, desktop and Claude Code), ChatGPT in developer mode, Cursor and others. You create a key for a project and paste it into your assistant.',
	},
	{
		q: 'Can I use my data on my own website or app?',
		a: 'Yes. Switch on the public API for any model and choose what it allows. Customers can create accounts and sign in with a drop-in widget, and see only their own records.',
	},
	{
		q: 'Why a waitlist?',
		a: 'We open MINT to a few teams at a time so we can help each one set up properly. Tell us what you want to build when you join and we’ll have your workspace ready for it.',
	},
];

const Faq = ({ items = FAQ }: { items?: { q: string; a: string }[] }) => (
	<div className='flex flex-col gap-3'>
		{items.map(({ q, a }) => (
			<details
				key={q}
				className='group rounded-2xl border border-line bg-white px-5 py-4 shadow-panel transition-colors open:border-violet-200 [&_summary::-webkit-details-marker]:hidden'>
				<summary className='font-display flex cursor-pointer list-none items-center justify-between gap-6 text-[16.5px] font-medium tracking-[-0.01em]'>
					{q}
					<span className='inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-soft text-muted transition-[transform,background,color] duration-300 group-open:rotate-45 group-open:bg-violet-500 group-open:text-white'>
						<Plus className='size-4' />
					</span>
				</summary>
				<p className='pr-10 pt-3 text-[15px] leading-relaxed text-muted'>{a}</p>
			</details>
		))}
	</div>
);

export default Faq;
