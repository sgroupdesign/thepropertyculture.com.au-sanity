import { cn } from '@/lib/utils'
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/ui/components/carousel'
import Img from '@/ui/Img'
import { PortableText, stegaClean } from 'next-sanity'

export default function TestimonialList({
	intro,
	testimonials,
	backgroundColour,
	centerAligned,
}: Partial<{
	intro: any
	testimonials: Sanity.Testimonial[]
	backgroundColour: any
	centerAligned: boolean
}>) {
	return (
		<div
			className={cn(
				stegaClean(backgroundColour) === 'coffee'
					? 'bg-coffee/20 py-10'
					: 'bg-white py-10',
			)}
		>
			<section className="section space-y-8">
				{intro && (
					<header
						className={cn(
							'richtext max-w-screen-md',
							centerAligned && 'mx-auto text-center',
						)}
					>
						<PortableText value={intro} />
					</header>
				)}

				<Carousel>
					<CarouselContent>
						{testimonials?.map(({ author, ...testimonial }, key) => (
							<CarouselItem className="md:basis-1/2 lg:basis-1/3" key={key}>
								<article className="border-2 border-coffee/40 bg-white p-6 shadow-sm">
									{author && (
										<header>
											<div className="flex items-center gap-4">
												<div className="relative flex size-[50px] items-center justify-center overflow-hidden rounded-full text-white">
													{author?.image ? (
														<Img
															className="size-[50px] rounded-full object-cover"
															image={author?.image}
															imageWidth={80}
															alt={
																[author?.name].filter(Boolean).join(', ') ||
																'Author'
															}
														/>
													) : (
														<span>{author?.name.substring(0, 1)}</span>
													)}
												</div>
												<div className={cn(author?.image && 'text-left')}>
													<p className="text-base font-semibold">
														{author?.name}
													</p>
													{author?.name && (
														<div className="text-sm">{author?.name}</div>
													)}
												</div>
											</div>
										</header>
									)}
									<blockquote className="mt-4">
										<div className="richtext text-sm text-ink/70">
											<PortableText value={testimonial.content} />
										</div>
									</blockquote>
								</article>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</section>
		</div>
	)
}
