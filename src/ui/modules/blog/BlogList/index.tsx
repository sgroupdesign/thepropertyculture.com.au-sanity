import { cn } from '@/lib/utils'
import { groq, sanityFetch } from '@/sanity/lib/fetch'
import FilterList from '@/ui/modules/blog/BlogList/FilterList'
import { PortableText, stegaClean } from 'next-sanity'
import List from './List'

export default async function BlogList({
	intro,
	layout,
	limit = null,
	showFeaturedPostsFirst,
	displayFilters,
	filteredCategory,
}: Partial<{
	intro: any
	layout: 'grid' | 'carousel'
	limit: number | null
	showFeaturedPostsFirst: boolean
	displayFilters: boolean
	filteredCategory: Sanity.BlogCategory
}>) {
	const { data } = await sanityFetch({
		query: groq`
			*[
				_type == 'blog.post'
				${filteredCategory ? `&& $filteredCategory in categories[]->._id` : ''}
			]|order(
				${showFeaturedPostsFirst ? 'featured desc, ' : ''}
				publishDate desc
			)
			${limit ? `[0...${limit}]` : ''}
			{
				...,
				categories[]->,
				authors[]->
			}
		`,
		params: {
			filteredCategory: filteredCategory?._id || null,
			limit,
		},
	})

	return (
		<section className="section space-y-8">
			{intro && (
				<header className="richtext">
					<PortableText value={intro} />
				</header>
			)}

			{displayFilters && !filteredCategory && <FilterList />}

			<List
				posts={data as Sanity.BlogPost[]}
				className={cn(
					'items-stretch gap-x-12 gap-y-12',
					stegaClean(layout) === 'grid'
						? 'grid grid-cols-1 md:grid-cols-3'
						: 'carousel max-xl:full-bleed md:overflow-fade-r pb-4 [--size:320px] max-xl:px-4',
				)}
			/>
		</section>
	)
}
