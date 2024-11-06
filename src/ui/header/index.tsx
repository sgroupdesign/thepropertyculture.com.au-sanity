import { cn } from '@/lib/utils'
import { getSite } from '@/sanity/lib/queries'
import CTAList from '@/ui/CTAList'
import css from './Header.module.css'
import Navigation from './Navigation'
import Toggle from './Toggle'
import Wrapper from './Wrapper'

export default async function Header() {
	const { companyName, logo, ctas } = await getSite()

	const logoImage = logo?.image?.dark || logo?.image?.default

	return (
		<Wrapper className="w-full">
			<div className={cn(css.header, 'mx-auto grid items-center gap-x-6 p-10')}>
				<Navigation />

				<CTAList
					ctas={ctas}
					className="btn [grid-area:ctas] max-md:*:w-full max-md:header-closed:hidden md:ml-auto"
				/>

				<Toggle />
			</div>
		</Wrapper>
	)
}
