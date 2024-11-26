import { cn } from '@/lib/utils'
import { getSite } from '@/sanity/lib/queries'
import CTA from '@/ui/CTA'
import { stegaClean } from 'next-sanity'

export default async function Menu() {
	const { footerMenu } = await getSite()

	return (
		<nav className="flex flex-wrap items-start gap-x-12 gap-y-6 font-sans max-sm:flex-col">
			{footerMenu?.items?.map((item, key) => {
				switch (item._type) {
					case 'link':
						return (
							<CTA
								className="font-semibold uppercase tracking-widest text-coffee hover:underline"
								link={item}
								key={key}
							/>
						)

					case 'link.list':
						return (
							<div className="space-y-2 text-left" key={key}>
								<div className="font-semibold uppercase tracking-widest text-coffee hover:underline">
									<CTA link={item.link} className="text-coffee">
										{stegaClean(item.link?.label) || item.link.internal?.title}
									</CTA>
								</div>

								<ul>
									{item.links?.map((link, key) => (
										<li key={key}>
											<CTA
												className={cn(
													'inline-block py-px font-light text-coffee hover:underline',
													link.external?.startsWith('http') && 'is-external',
												)}
												link={link}
											/>
										</li>
									))}
								</ul>
							</div>
						)

					default:
						return null
				}
			})}
		</nav>
	)
}
