import { cn } from '@/lib/utils'
import { Icon } from '@iconify/react'
import { PortableText, stegaClean } from 'next-sanity'

export default function StatList({
	intro,
	stats,
	centerAligned,
	backgroundColour,
}: Partial<{
	intro: any
	stats: {
		heading: string
		description: any
		icon: {
			name: string
		}
	}[]
	centerAligned: boolean
	backgroundColour: string
}>) {
	return (
		<section
			className={cn(
				stegaClean(backgroundColour) === 'coffee'
					? 'bg-coffee/20 py-10'
					: 'bg-white py-10',
			)}
		>
			<div className="section max-w-screen-lg">
				{intro && (
					<header
						className={cn('richtext mb-12', centerAligned ? 'text-center' : '')}
					>
						<PortableText value={intro} />
					</header>
				)}

				<dl className="flex flex-row flex-wrap justify-center gap-y-10">
					{stats?.map((stat, key) => (
						<div className="basis-full px-4 lg:basis-1/3" key={key}>
							<div
								className={cn(
									'flex flex-col gap-y-2 text-terracotta',
									centerAligned ? 'items-center text-center' : '',
								)}
							>
								<Icon
									className="h-16 w-16 flex-shrink-0 text-terracotta [&>g]:stroke-[1] [&>path]:stroke-[1]"
									icon={stat.icon?.name}
								/>
								<div className="text-licorice">
									<h5 className="mb-2 text-2xl">{stat.heading}</h5>
									<div className="richtext text-base font-light">
										<PortableText value={stat.description} />
									</div>
								</div>
							</div>
						</div>
					))}
				</dl>
			</div>
		</section>
	)
}
