import { cn } from '@/lib/utils'
import { getSite } from '@/sanity/lib/queries'
import CTAList from '@/ui/CTAList'
import Logo from '@/ui/Logo'
import Link from 'next/link'
import { BsTelephone } from 'react-icons/bs'
import css from './Header.module.css'
import Navigation from './Navigation'
import Wrapper from './Wrapper'

export default async function Header() {
	const { companyName, logo, ctas, headerMenu, phone } = await getSite()

	const logoImage = logo?.image?.dark || logo?.image?.default

	return (
		<Wrapper className="w-full">
			<div
				className={cn(
					css.header,
					'relative mx-auto grid items-center justify-between gap-x-6 p-8',
				)}
			>
				<div className="z-10">
					<Logo />
				</div>

				<Navigation />

				<div className="flex items-center gap-4 [grid-area:ctas] max-md:*:w-full max-md:header-closed:hidden md:ml-auto">
					{phone && (
						<Link href={phone}>
							<BsTelephone className="text-heroBlue -rotate-90" size="2rem" />

							<span aria-label="{phone}" className="hidden">
								{phone}
							</span>
						</Link>
					)}

					<CTAList ctas={ctas} className="" />
				</div>
			</div>
		</Wrapper>
	)
}
