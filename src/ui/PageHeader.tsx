import { cn } from '@/lib/utils'
import Img from '@/ui/Img'

export default function PageHeader({
	image,
	hero,
}: Partial<{
	image: Sanity.Image
	hero: boolean
}>) {
	return (
		<div
			className={cn(
				'relative',
				!image && 'bg-heroBlue',
				hero ? 'min-h-svh' : 'min-h-[60vh]',
			)}
		>
			<Img
				image={image}
				loading="eager"
				className="absolute inset-0 h-full w-full object-cover object-center"
			/>
		</div>
	)
}
