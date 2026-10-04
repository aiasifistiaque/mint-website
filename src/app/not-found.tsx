import { Accent, Button, Container } from '@/components/ui';

export default function NotFound() {
	return (
		<section className='relative overflow-hidden'>
			<div
				aria-hidden
				className='mesh pointer-events-none absolute inset-0'
			/>
			<Container className='relative flex min-h-[60vh] flex-col items-center justify-center py-28 text-center'>
				<p className='font-display text-gradient text-[96px] font-medium leading-none tracking-[-0.05em]'>404</p>
				<h1 className='mt-6 text-[32px] font-extralight tracking-[-0.03em]'>
					This page isn’t <Accent>built yet.</Accent>
				</h1>
				<p className='mt-3 text-[16px] text-muted'>The link may be old, or the address mistyped.</p>
				<div className='mt-8 flex gap-3'>
					<Button
						href='/'
						variant='brand'>
						Back home
					</Button>
					<Button
						href='/workflow'
						variant='secondary'>
						See the workflow
					</Button>
				</div>
			</Container>
		</section>
	);
}
