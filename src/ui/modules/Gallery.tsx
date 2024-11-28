import { cn } from '@/lib/utils'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/ui/components/carousel'
import { PortableText } from 'next-sanity'
import Img from '../Img'

export default function Gallery({
	content,
	images,
	layout,
	backgroundColour,
	centerAligned,
}: Partial<{
	images: {
		image: Sanity.Image
		caption: any
	}[]
	content: any
	layout: any
	backgroundColour: any
	centerAligned: boolean
}>) {
	return (
		<div
			className={cn('relative overflow-hidden', {
				'bg-white': backgroundColour === 'white',
				'bg-primary text-white': backgroundColour === 'primary',
				'bg-gray': backgroundColour === 'gray',
				'bg-secondary text-white': backgroundColour === 'secondary',
			})}
		>
			<section
				className={cn(
					centerAligned ? 'text-center' : '',
					layout === 'carousel' && 'section',
				)}
			>
				{content && (
					<div
						className={cn(
							'richtext mb-8 max-w-screen-md [&_:is(h1,h2)]:text-balance',
							{
								'mx-auto': centerAligned,
							},
							layout === 'grid' && content.length ? 'pt-0' : 'pt-10',
						)}
					>
						<PortableText value={content} />
					</div>
				)}
				{layout === 'grid' ? (
					<div className="grid grid-cols-2 lg:grid-cols-4">
						{images?.map((item, key) => (
							<div
								className="group relative aspect-4/3 overflow-hidden"
								key={key}
							>
								<Img
									image={item.image}
									imageWidth={800}
									className="absolute inset-0 h-full w-full object-cover object-center transition ease-in-out group-hover:scale-105"
									loading="lazy"
								/>
								{item.caption && (
									<div className="bg-heroBlue/60 absolute bottom-2 right-2 px-2 py-1 text-white">
										{item.caption}
									</div>
								)}
							</div>
						))}
					</div>
				) : (
					<Carousel>
						<CarouselContent className="">
							{images?.map((item, key) => (
								<CarouselItem
									className="relative basis-full overflow-hidden"
									key={key}
								>
									<div className="relative aspect-4/3">
										<Img
											image={item.image}
											imageWidth={800}
											className="absolute inset-0 h-full w-full object-cover object-center"
											loading="lazy"
										/>

										{item.caption && (
											<div className="bg-heroBlue/60 absolute bottom-2 right-2 px-2 py-1 text-white">
												{item.caption}
											</div>
										)}
									</div>
								</CarouselItem>
							))}
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
				)}
			</section>
		</div>
	)
}
