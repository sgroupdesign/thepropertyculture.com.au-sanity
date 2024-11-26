import Img from '@/ui/Img'
import { stegaClean } from 'next-sanity'

export default function Image({
	value,
}: {
	value: Sanity.Image & {
		caption?: string
		float?: 'left' | 'right'
	}
}) {
	return (
		<figure className="my-8" style={{ float: stegaClean(value.float) }}>
			<Img className="w-full" image={value} imageWidth={960} />

			{value.caption && (
				<figcaption className="my-2 text-balance text-right text-sm italic text-neutral-500">
					{value.caption}
				</figcaption>
			)}
		</figure>
	)
}
