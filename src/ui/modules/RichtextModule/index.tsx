import moduleProps from '@/lib/moduleProps'
import { cn } from '@/lib/utils'
import CTAList from '@/ui/CTAList'
import { stegaClean } from 'next-sanity'
import Content from './Content'

export default function RichtextModule({
	content,
	stretch,
	headings,
	ctas,
	backgroundColour,
	centerAligned,
	...props
}: Partial<{
	content: any
	stretch: boolean
	headings: {
		style: string
		text: string
	}[]
	ctas: Sanity.CTA[]
	backgroundColour: string
	centerAligned: boolean
}> &
	Sanity.Module) {
	return (
		<section
			className={cn(
				stegaClean(backgroundColour) === 'coffee'
					? 'bg-coffee/20 py-10'
					: 'bg-white py-10',
			)}
		>
			<div
				className={cn('section grid w-full max-w-screen-md gap-4', {
					'mx-auto text-center': centerAligned,
				})}
				{...moduleProps(props)}
			>
				<Content value={content} />

				<CTAList
					ctas={ctas}
					className={cn('w-auto', {
						'mx-auto text-center': centerAligned,
					})}
				/>
			</div>
		</section>
	)
}
