import Img from '@/ui/Img'

export default function PageHeader({
	pageHeaderImage,
}: Partial<{
	pageHeaderImage: Sanity.Image
}>) {
	return (
		<div className="relative h-[440px]">
			<Img
				image={pageHeaderImage}
				loading="eager"
				className="absolute inset-0 h-full w-full object-cover object-center"
			/>
		</div>
	)
}
