import { getSite } from '@/sanity/lib/queries'
import Img from '@/ui/Img'
import Link from 'next/link'

export default async function Header() {
	const { companyName, logo } = await getSite()

	const logoImage = logo?.image?.dark || logo?.image?.default

	return (
		<Link href="/" className="">
			{logoImage ? (
				<Img
					className="w-8 lg:w-10"
					image={logoImage}
					alt={logo?.name || companyName}
				/>
			) : (
				<span className="text-gradient">{companyName}</span>
			)}
		</Link>
	)
}
