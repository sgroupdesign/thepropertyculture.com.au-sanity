import { cn } from '@/lib/utils'
import CTAList from '@/ui/CTAList'
import Img, { Source } from '@/ui/Img'
import Pretitle from '@/ui/Pretitle'
import { PortableText, stegaClean } from 'next-sanity'

export default function Hero({
	pretitle,
	content,
	ctas,
	bgImage,
	overlayOpacity,
	textAlign = 'center',
	alignItems,
	darkMode,
}: Partial<{
	pretitle: string
	content: any
	ctas: Sanity.CTA[]
	bgImage: Sanity.Image
	textAlign: React.CSSProperties['textAlign']
	alignItems: React.CSSProperties['alignItems']
	darkMode: boolean
	overlayOpacity: string
}>) {
	const hasImage = !!bgImage?.asset

	return (
		<section
			className={cn(
				hasImage &&
					'relative grid overflow-hidden text-canvas *:col-span-full *:row-span-full',
			)}
		>
			{hasImage && (
				<picture>
					<Source image={bgImage} imageWidth={1200} />
					<Img
						className="size-full max-h-fold object-cover"
						image={bgImage}
						imageWidth={1800}
						draggable={false}
					/>
				</picture>
			)}

			{!overlayOpacity && (
				<div
					className={cn('absolute inset-0 bg-black/40', {
						overlayOpacity,
						'bg-transparent': stegaClean(overlayOpacity) === '0',
						'bg-black/20': stegaClean(overlayOpacity) === '20',
						'bg-black/40': stegaClean(overlayOpacity) === '40',
						'bg-black/60': stegaClean(overlayOpacity) === '60',
						'bg-black/80': stegaClean(overlayOpacity) === '80',
					})}
				></div>
			)}

			{content && (
				<div className="section flex w-full flex-col">
					<div
						className={cn(
							'relative isolate max-w-xl [&_:is(h1,h2)]:text-balance',
							{
								'mb-8': stegaClean(alignItems) === 'start',
								'my-auto': stegaClean(alignItems) === 'center',
								'mt-auto': stegaClean(alignItems) === 'end',
							},
							{
								'mr-auto': stegaClean(textAlign) === 'left',
								'mx-auto': stegaClean(textAlign) === 'center',
								'ml-auto': stegaClean(textAlign) === 'right',
							},
						)}
						style={{ textAlign: stegaClean(textAlign) }}
					>
						<Pretitle className={cn(darkMode && 'text-white')}>
							{pretitle}
						</Pretitle>

						<div
							className={cn(
								'richtext',
								darkMode ? 'text-white' : 'text-licorice',
							)}
						>
							<PortableText value={content} />
						</div>

						<CTAList
							ctas={ctas}
							className={cn('!mt-4', {
								'justify-start': stegaClean(textAlign) === 'left',
								'justify-center': stegaClean(textAlign) === 'center',
								'justify-end': stegaClean(textAlign) === 'right',
							})}
						/>
					</div>
				</div>
			)}
		</section>
	)
}
