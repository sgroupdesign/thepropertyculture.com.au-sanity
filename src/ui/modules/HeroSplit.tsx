import { cn } from '@/lib/utils'
import CTAList from '@/ui/CTAList'
import Img from '@/ui/Img'
import Pretitle from '@/ui/Pretitle'
import Reputation from '@/ui/Reputation'
import { PortableText } from 'next-sanity'

export default function HeroSplit({
	pretitle,
	content,
	ctas,
	image,
}: Partial<{
	pretitle: string
	content: any
	ctas: Sanity.CTA[]
	image: Sanity.Image & {
		onRight?: boolean
		onBottom?: boolean
	}
}>) {
	return (
		<section className="section grid items-center gap-8 md:grid-cols-2 md:gap-x-12">
			<figure
				className={cn(
					'max-md:full-bleed',
					image?.onRight && 'md:order-1',
					image?.onBottom && 'max-md:order-last',
				)}
			>
				<Img image={image} imageWidth={1200} />
			</figure>

			<div className="richtext mx-auto w-full [&_:is(h1,h2)]:text-balance">
				<Pretitle>{pretitle}</Pretitle>
				<PortableText
					value={content}
					components={{
						types: {
							'reputation-block': ({ value }) => (
								<Reputation className="!mt-4" reputation={value.reputation} />
							),
						},
					}}
				/>
				<CTAList ctas={ctas} className="!mt-4" />
			</div>
		</section>
	)
}
