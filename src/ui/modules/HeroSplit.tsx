import { cn } from '@/lib/utils'
import CTAList from '@/ui/CTAList'
import Img from '@/ui/Img'
import Pretitle from '@/ui/Pretitle'
import { PortableText, stegaClean } from 'next-sanity'

export default function HeroSplit({
	pretitle,
	content,
	quote,
	ctas,
	image,
	backgroundColour,
}: Partial<{
	pretitle: string
	content: any
	quote: any
	ctas: Sanity.CTA[]
	image: Sanity.Image & {
		onRight?: boolean
		imageSize?: string
	}
	backgroundColour: string
}>) {
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
					'section grid grid-cols-1 gap-8 md:gap-x-12',
					stegaClean(image?.imageSize) === '1/3'
						? 'md:grid-cols-3'
						: 'md:grid-cols-2',
					quote ? 'justify-between' : 'items-center',
				)}
			>
				<figure
					className={cn('max-md:full-bleed', image?.onRight && 'md:order-1')}
				>
					<Img image={image} imageWidth={1200} />
				</figure>

				<div
					className={cn(
						'mx-auto flex w-full flex-col [&_:is(h1,h2)]:text-balance',
						quote ? 'items-end justify-between' : 'items-center',
						stegaClean(image?.imageSize) === '1/3' && 'md:col-span-2',
					)}
				>
					<div className="flex flex-col gap-4">
						<div className="richtext">
							<Pretitle>{pretitle}</Pretitle>
							<PortableText value={content} />
						</div>

						<CTAList ctas={ctas} className="mt-4 w-auto" />
					</div>

					{quote && (
						<div className="align-bottom text-sm italic leading-loose lg:w-1/2">
							{quote}
						</div>
					)}
				</div>
			</div>
		</section>
	)
}
