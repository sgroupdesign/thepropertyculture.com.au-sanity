import { cn } from '@/lib/utils'
import { getSite } from '@/sanity/lib/queries'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/ui/components/sheet'
import CTAList from '@/ui/CTAList'
import Logo from '@/ui/Logo'
import css from './Header.module.css'
import Navigation from './Navigation'
import Wrapper from './Wrapper'

import { RxCross2, RxHamburgerMenu } from 'react-icons/rx'
import CTA from '../CTA'
import LinkList from './LinkList'

export default async function Header() {
	const { companyName, logo, ctas, headerMenu } = await getSite()

	const logoImage = logo?.image?.dark || logo?.image?.default

	return (
		<Wrapper className="w-full">
			<div
				className={cn(
					css.header,
					'mx-auto grid items-center justify-between gap-x-6 p-6 md:p-10',
				)}
			>
				<div></div>
				<div className="fixed inset-0 right-auto z-10 bg-white p-3 lg:bg-transparent lg:p-12">
					<div className="lg:hidden">
						<Sheet>
							<SheetTrigger>
								<RxHamburgerMenu className="text-terracotta" size="2.2rem" />
							</SheetTrigger>
							<SheetContent className="flex h-full flex-col justify-between">
								<SheetHeader className="relative bg-terracotta">
									<SheetTitle className="hidden bg-transparent">
										Menu
									</SheetTitle>
									<SheetClose className="text-terracotta">
										<RxCross2 className="absolute right-6 top-6" size="2rem" />
									</SheetClose>
								</SheetHeader>
								<div className="flex h-full flex-col bg-white">
									<div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
										<SheetClose asChild>
											<a href="/book" className="btn text-center">
												Book
											</a>
										</SheetClose>
										<SheetClose asChild>
											<a href="/edit-booking" className="btn text-center">
												Edit Booking
											</a>
										</SheetClose>
									</div>
									<nav className="max-md:anim-fade-to-t flex flex-col [grid-area:nav] max-md:header-closed:hidden">
										{headerMenu?.items?.map((item, key) => {
											switch (item._type) {
												case 'link':
													return (
														<SheetClose asChild key={key}>
															<CTA
																className="block border-b border-terracotta/50 py-2 text-xl"
																link={item}
																key={key}
															/>
														</SheetClose>
													)

												case 'link.list':
													return (
														<SheetClose asChild key={key}>
															<LinkList {...item} key={key} />
														</SheetClose>
													)

												default:
													return null
											}
										})}
									</nav>
								</div>
							</SheetContent>
						</Sheet>
					</div>

					<Logo />
				</div>

				<Navigation />

				<CTAList
					ctas={ctas}
					className="items-end [grid-area:ctas] max-md:*:w-full max-md:header-closed:hidden md:ml-auto"
				/>
			</div>
		</Wrapper>
	)
}
