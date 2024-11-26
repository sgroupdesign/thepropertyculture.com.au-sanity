import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react'
import { PortableText, stegaClean } from 'next-sanity'

export default function StepList({
	intro,
	steps,
	backgroundColour,
}: Partial<{
	intro: any
	backgroundColour: string
	steps: {
		content: any
		icon: {
			name: string
		}
	}[]
}>) {
	return (
		<section
			className={cn(
				stegaClean(backgroundColour) === 'coffee'
					? 'bg-coffee/20 py-10'
					: 'bg-white py-10',
			)}
		>
			<div className="section space-y-8">
				{intro && (
					<header className={cn('richtext mb-12 text-center')}>
						<PortableText value={intro} />
					</header>
				)}

				<ol className="mx-auto flex max-w-screen-md flex-col">
					{steps?.map((step, index) => (
						<li className="flex space-x-6" key={index}>
							<div className="relative min-h-28">
								{steps.length != index + 1 && (
									<div
										className={cn(
											'absolute left-6 h-full w-[1px] bg-terracotta/30',
										)}
									></div>
								)}

								<span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-terracotta text-xl text-white">
									<Icon
										className="text-terracottamb h-8 w-8 flex-shrink-0 [&>g]:stroke-[1] [&>path]:stroke-[1]"
										icon={step.icon?.name}
									/>
								</span>
							</div>
							<div className="richtext">
								<PortableText value={step.content} />
							</div>
						</li>
					))}
				</ol>
			</div>
		</section>
	)
}
