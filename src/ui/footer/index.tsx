import { getSite } from '@/sanity/lib/queries'
import Img from '@/ui/Img'
import Social from '@/ui/Social'
import Link from 'next/link'
import Navigation from './Navigation'

export default async function Footer() {
	const { companyName, companyText, logo, address, phone } = await getSite()

	const logoImage = logo?.image?.light || logo?.image?.default

	return (
		<div>
			<footer className="bg-heroBlue text-center text-white">
				<div className="section lg:py-16">
					<div className="flex flex-wrap justify-between gap-x-12 gap-y-8 max-sm:flex-col">
						<div className="flex flex-col items-center gap-3 text-left">
							<Link className="mb-6 max-w-max" href="/">
								{logoImage ? (
									<Img
										className="w-40"
										image={logoImage}
										alt={logo?.name || companyName}
									/>
								) : (
									companyName
								)}
							</Link>
							<Social />
						</div>

						<div className="flex h-full min-h-full flex-1 flex-col items-end justify-between gap-6">
							<Navigation />

							{companyText && (
								<div className="richtext max-w-screen-sm text-right text-base text-white/50">
									{companyText}
								</div>
							)}

							{/* <div className="mt-6 flex flex-col gap-1 text-left text-base md:mt-0 md:flex-row md:gap-4 md:text-right">
								<p>
									&copy; {companyName} {new Date().getFullYear()}. All rights
									reserved.
								</p>
								<p className="">
									Website by{'  '}
									<a
										href="https://sgroup.com.au"
										target="_blank"
										className="link"
									>
										S. Group
									</a>
								</p>
							</div> */}
						</div>
					</div>
				</div>
			</footer>
		</div>
	)
}
