import moduleProps from '@/lib/moduleProps'
import { cn } from '@/lib/utils'
import { PortableText, stegaClean } from 'next-sanity'
import CTAList from '../CTAList'

export default function AccordionList({
	intro,
	items,
	layout = 'vertical',
	backgroundColour,
	centerAligned,
	ctas,
	...props
}: Partial<{
	intro: any
	items: {
		summary: string
		content: any
		open?: boolean
	}[]
	layout: 'vertical' | 'horizontal'
	backgroundColour: any
	centerAligned: boolean
	ctas: Sanity.CTA[]
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
				className={cn(
					'section',
					layout === 'horizontal'
						? 'grid gap-8 md:grid-cols-2'
						: 'max-w-screen-md space-y-8',
				)}
				itemScope
				itemType="https://schema.org/FAQPage"
				{...moduleProps(props)}
			>
				<header
					className={cn(
						layout === 'horizontal' &&
							'md:sticky-below-header self-start [--offset:1rem]',
						centerAligned && 'text-center',
					)}
				>
					<div className="richtext">
						<PortableText value={intro} />
					</div>

					<CTAList
						ctas={ctas}
						className={cn('mt-4 w-auto', {
							'mx-auto text-center': centerAligned,
						})}
					/>
				</header>

				<div className="mx-auto w-full max-w-screen-md">
					{items?.map(({ summary, content, open }, key) => (
						<details
							className="accordion border-lightBlue border-b"
							open={open}
							itemScope
							itemProp="mainEntity"
							itemType="https://schema.org/Question"
							key={key}
						>
							<summary
								className="text-heroBlue py-4 text-xl font-semibold"
								itemProp="name"
							>
								{summary}
							</summary>

							<div
								className="anim-fade-to-b pb-4"
								itemScope
								itemProp="acceptedAnswer"
								itemType="https://schema.org/Answer"
							>
								<div className="richtext" itemProp="text">
									<PortableText value={content} />
								</div>
							</div>
						</details>
					))}
				</div>
			</div>
		</section>
	)
}
