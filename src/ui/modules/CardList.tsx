import moduleProps from '@/lib/moduleProps'
import { cn } from '@/lib/utils'
import CTAList from '@/ui/CTAList'
import Img from '@/ui/Img'
import Pretitle from '@/ui/Pretitle'
import { PortableText, stegaClean } from 'next-sanity'

export default function CardList({
	pretitle,
	intro,
	cards,
	backgroundColour,
	centerAligned,
	...props
}: Partial<{
	pretitle: string
	intro: any
	backgroundColour: string
	centerAligned: boolean
	cards: Partial<{
		images: Sanity.Image[]
		title: any
		ctas: Sanity.CTA[]
	}>[]
}> &
	Sanity.Module) {
	return (
		<section
			className={cn(
				stegaClean(backgroundColour) === 'coffee'
					? 'bg-coffee/20 py-10'
					: 'bg-white py-10',
			)}
			{...moduleProps(props)}
		>
			<div className="section">
				{(pretitle || intro) && (
					<header
						className={cn('richtext mb-8', {
							'mx-auto text-center': centerAligned,
						})}
					>
						<Pretitle>{pretitle}</Pretitle>
						<PortableText value={intro} />
					</header>
				)}

				<div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
					{cards?.map((card, key) => (
						<article
							className={cn(
								'flex flex-col gap-8 overflow-hidden bg-coffee/30 py-8 text-center',
								key * 2 === 0 ? 'bg-coffee/30' : 'bg-coffee/60',
							)}
							key={key}
						>
							<h4 className="font-sans text-2xl font-light uppercase tracking-widest">
								{card.title}
							</h4>
							<figure className="flex flex-nowrap space-x-6">
								{card.images?.map((image, key) => (
									<div
										className="relative aspect-video min-h-52 shrink-0 basis-2/3"
										key={key}
									>
										<Img
											className="absolute inset-0 h-full w-full object-cover object-center"
											image={image}
											imageWidth={600}
										/>
									</div>
								))}
							</figure>
							<CTAList className="mx-auto" ctas={card.ctas} />
						</article>
					))}
				</div>
			</div>
		</section>
	)
}
