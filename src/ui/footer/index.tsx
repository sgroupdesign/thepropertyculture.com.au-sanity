import { getSite } from '@/sanity/lib/queries'
import Img from '@/ui/Img'
import Social from '@/ui/Social'
import Link from 'next/link'
import Navigation from './Navigation'

export default async function Footer() {
	const { companyName, logo, address, phone } = await getSite()

	const logoImage = logo?.image?.light || logo?.image?.default

	return (
		<footer className="bg-licorice text-center text-white">
			<div className="section">
				<div className="flex flex-wrap justify-between gap-x-12 gap-y-8 max-sm:flex-col">
					<div className="flex flex-col gap-3 text-left">
						<Link className="h3 md:h2 max-w-max" href="/">
							{logoImage ? (
								<Img
									className="w-38 mb-20"
									image={logoImage}
									alt={logo?.name || companyName}
								/>
							) : (
								companyName
							)}
						</Link>

						{address && <p>{address}</p>}

						{phone && <p>{phone}</p>}

						<Social />
					</div>

					<Navigation />
				</div>
			</div>

			<div className="section flex hidden flex-wrap items-center justify-between gap-x-6 py-4 text-sm text-white/60">
				<p>
					&copy; {companyName} {new Date().getFullYear()} . All rights reserved.
				</p>
				<p>
					Website by{' '}
					<a
						href="https://sgroup.com.au"
						target="_blank"
						className="border-coffee text-coffee border-b pb-0.5 hover:text-white"
					>
						S. Group
					</a>
				</p>
			</div>
		</footer>
	)
}
