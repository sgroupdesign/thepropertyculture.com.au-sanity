import { cn } from '@/lib/utils'
import CTA from '@/ui/CTA'
import { CgChevronRight } from 'react-icons/cg'
import InteractiveDetails from './InteractiveDetails'

export default function LinkList({ link, links }: Sanity.LinkList) {
	return (
		<InteractiveDetails className="group relative" closeAfterNavigate>
			<summary className="hover:link flex items-start gap-1 font-sans font-medium uppercase tracking-widest text-terracotta md:px-3">
				{link.label}
				<CgChevronRight className="text-terracotta transition-transform group-open:rotate-90 md:rotate-90" />
			</summary>

			<ul className="anim-fade-to-b left-0 top-full z-10 block px-6 py-4 pb-2 font-sans font-medium uppercase tracking-widest max-md:border-l md:absolute md:min-w-max md:rounded md:border md:bg-white md:shadow-md">
				{links?.map((link, key) => (
					<li key={key}>
						<CTA
							className={cn(
								'hover:link inline-block py-px text-terracotta',
								link.external?.startsWith('http') && 'is-external',
							)}
							link={link}
						/>
					</li>
				))}
			</ul>
		</InteractiveDetails>
	)
}
