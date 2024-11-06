import moduleProps from '@/lib/moduleProps'
import { cn } from '@/lib/utils'
import CTAList from '@/ui/CTAList'
import Img from '@/ui/Img'
import Pretitle from '@/ui/Pretitle'
import { PortableText } from 'next-sanity'

export default function CardList({
	pretitle,
	intro,
	cards,
	...props
}: Partial<{
	pretitle: string
	intro: any
	cards: Partial<{
		images: Sanity.Image[]
		title: any
		ctas: Sanity.CTA[]
	}>[]
}> &
	Sanity.Module) {
	return (
		<section className="section" {...moduleProps(props)}>
			{(pretitle || intro) && (
				<header className="richtext text-center">
					<Pretitle>{pretitle}</Pretitle>
					<PortableText value={intro} />
				</header>
			)}

			<div className="flex gap-10">
				{cards?.map((card, key) => (
					<article
						className={cn(
							'flex w-1/2 flex-col gap-8 overflow-hidden bg-coffee/30 py-8 text-center',
							key * 2 === 0 ? 'bg-coffee/30' : 'bg-coffee/60',
						)}
						key={key}
					>
						<h4 className="text-2xl font-light uppercase">{card.title}</h4>
						<figure className="flex flex-nowrap space-x-6">
							{card.images?.map((image, key) => (
								<div className="relative aspect-video min-h-52">
									<Img
										className="absolute inset-0 h-full w-full object-cover object-center"
										image={image}
										imageWidth={600}
									/>
								</div>
							))}
						</figure>
						<CTAList className="btn mx-auto" ctas={card.ctas} />
					</article>
				))}
			</div>
		</section>
	)
}
