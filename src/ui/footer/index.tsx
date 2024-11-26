import { getSite } from '@/sanity/lib/queries'
import Img from '@/ui/Img'
import Social from '@/ui/Social'
import { stegaClean } from 'next-sanity'
import Link from 'next/link'
import Navigation from './Navigation'

export default async function Footer() {
	const { companyName, logo, address, phone } = await getSite()

	const logoImage = logo?.image?.light || logo?.image?.default

	return (
		<div>
			<footer className="bg-licorice text-center text-white">
				<div className="section lg:py-16">
					<div className="flex flex-wrap justify-between gap-x-12 gap-y-8 max-sm:flex-col">
						<div className="flex flex-col gap-3 text-left">
							<Link className="max-w-max" href="/">
								{logoImage ? (
									<Img
										className="w-38 mb-6 md:mb-20"
										image={logoImage}
										alt={logo?.name || companyName}
									/>
								) : (
									companyName
								)}
							</Link>
							<Social />
						</div>

						<Navigation />
					</div>

					<div className="mt-6 flex w-full flex-col justify-between text-sm md:mt-0 md:flex-row">
						<div className="flex flex-col gap-4 text-left">
							{address && <p>{address}</p>}

							{phone && (
								<div>
									<a href={'tel:' + stegaClean(phone)} className="link">
										{stegaClean(phone)}
									</a>
								</div>
							)}
						</div>
						<div className="mt-6 flex flex-col gap-4 text-left md:mt-0 md:text-right">
							<p>
								&copy; {companyName} {new Date().getFullYear()}. All rights
								reserved.
							</p>
							<p className="text-sm">
								Website by{'  '}
								<a
									href="https://sgroup.com.au"
									target="_blank"
									className="link"
								>
									S. Group
								</a>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
