import { cn } from '@/lib/utils'
import Img from '@/ui/Img'

export default function PageHeader({
	image,
}: Partial<{
	image: Sanity.Image
}>) {
	return (
		<div className="md:pl-32">
			<div className={cn('relative h-[440px]', !image && 'bg-coffee')}>
				<Img
					image={image}
					loading="eager"
					className="absolute inset-0 h-full w-full object-cover object-center"
				/>
			</div>
		</div>
	)
}
