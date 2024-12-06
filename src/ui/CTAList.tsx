import { cn } from '@/lib/utils'
import CTA from './CTA'

export default function CTAList({
	ctas,
	className,
}: {
	ctas?: Sanity.CTA[]
} & React.ComponentProps<'div'>) {
	if (!ctas?.length) return null

	return (
		<div className={cn('flex flex-wrap items-center gap-4', className)}>
			{ctas?.map((cta, key) => (
				<CTA className={cn(key === 1 && 'secondary')} {...cta} key={key} />
			))}
		</div>
	)
}
