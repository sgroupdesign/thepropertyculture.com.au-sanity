import { fetchSanity } from '@/sanity/lib/fetch'
import { linkQuery } from '@/sanity/lib/queries'
import CTA from '@/ui/CTA'
import { PortableText, groq } from 'next-sanity'

export default async function Announcement() {
	const announcements = await fetchSanity<Sanity.Announcement[]>(
		groq`*[_type == 'site'][0].announcements[]->{
			...,
			cta{ ${linkQuery} },
		}`,
		{
			tags: ['announcements'],
			revalidate: 30,
		},
	)

	if (!announcements) return null

	return (
		<aside className="flex items-center justify-center gap-x-4 bg-coffee/60 p-4 text-center font-light text-licorice max-md:text-sm md:gap-x-6">
			<div className="anim-fade-to-r [&_a]:link">
				<PortableText value={announcements[0].content} />
			</div>

			<CTA
				className="link border-b border-terracotta text-terracotta"
				link={announcements[0].cta}
			/>
		</aside>
	)
}
