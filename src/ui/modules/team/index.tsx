import { groq, sanityFetch } from '@/sanity/lib/fetch'
import { PortableText } from 'next-sanity'
import { Key } from 'react'
import TeamCard from '../team/TeamCard'

export default async function TeamList({
	intro,
	layout,
}: Partial<{
	intro: any
	layout: 'grid' | 'carousel'
}>) {
	const { data } = await sanityFetch({
		query: groq`*[_type == 'person']{
			name,
			jobTitle,
			image,
			metadata,
			_type,
	}`,
	})

	return (
		<section className="section space-y-8">
			{intro && (
				<header className="richtext">
					<PortableText value={intro} />
				</header>
			)}

			{data && (
				<div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
					{data?.map((member: Sanity.Person, key: Key | null | undefined) => (
						<TeamCard member={member} key={key} />
					))}
				</div>
			)}
		</section>
	)
}
