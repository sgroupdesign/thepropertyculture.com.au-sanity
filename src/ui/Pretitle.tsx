import { cn } from '@/lib/utils'
import { stegaClean } from 'next-sanity'

export default function Pretitle({
	className,
	children,
}: React.ComponentProps<'p'>) {
	if (!children) return null

	return (
		<p
			className={cn(
				'font-sans font-semibold uppercase tracking-widest text-terracotta',
				className,
			)}
		>
			{stegaClean(children)}
		</p>
	)
}
