/**
 * The site's five colour tones. Workflow steps, feature groups, personas and
 * charts each carry one. Class names are written out in full so Tailwind
 * keeps them.
 */

export type Tone = 'emerald' | 'sky' | 'violet' | 'amber' | 'rose' | 'cyan';

export const TONES: Record<
	Tone,
	{ text: string; bg: string; soft: string; border: string; ring: string; grad: string; hex: string; dot: string }
> = {
	emerald: {
		text: 'text-emerald-600',
		bg: 'bg-emerald-500',
		soft: 'bg-emerald-50',
		border: 'border-emerald-200',
		ring: 'ring-emerald-500/20',
		grad: 'from-emerald-400 to-teal-500',
		hex: '#10b981',
		dot: 'bg-emerald-400',
	},
	sky: {
		text: 'text-sky-600',
		bg: 'bg-sky-500',
		soft: 'bg-sky-50',
		border: 'border-sky-200',
		ring: 'ring-sky-500/20',
		grad: 'from-sky-400 to-blue-500',
		hex: '#0ea5e9',
		dot: 'bg-sky-400',
	},
	violet: {
		text: 'text-violet-600',
		bg: 'bg-violet-500',
		soft: 'bg-violet-50',
		border: 'border-violet-200',
		ring: 'ring-violet-500/20',
		grad: 'from-violet-400 to-purple-500',
		hex: '#8b5cf6',
		dot: 'bg-violet-400',
	},
	amber: {
		text: 'text-amber-600',
		bg: 'bg-amber-500',
		soft: 'bg-amber-50',
		border: 'border-amber-200',
		ring: 'ring-amber-500/20',
		grad: 'from-amber-400 to-orange-500',
		hex: '#f59e0b',
		dot: 'bg-amber-400',
	},
	rose: {
		text: 'text-rose-600',
		bg: 'bg-rose-500',
		soft: 'bg-rose-50',
		border: 'border-rose-200',
		ring: 'ring-rose-500/20',
		grad: 'from-rose-400 to-pink-500',
		hex: '#f43f5e',
		dot: 'bg-rose-400',
	},
	cyan: {
		text: 'text-cyan-600',
		bg: 'bg-cyan-500',
		soft: 'bg-cyan-50',
		border: 'border-cyan-200',
		ring: 'ring-cyan-500/20',
		grad: 'from-cyan-400 to-sky-500',
		hex: '#06b6d4',
		dot: 'bg-cyan-400',
	},
};

export const tone = (t: Tone = 'emerald') => TONES[t];
