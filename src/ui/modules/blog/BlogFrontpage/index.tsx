import { groq, sanityFetch } from '@/sanity/lib/fetch'
import { stegaClean } from 'next-sanity'
import FilterList from '../BlogList/FilterList'
import PostPreviewLarge from '../PostPreviewLarge'
import Paginated from './Paginated'
import sortFeaturedPosts from './sortFeaturedPosts'

export default async function BlogFrontpage({
	mainPost,
	showFeaturedPostsFirst,
	itemsPerPage,
}: Partial<{
	mainPost: 'recent' | 'featured'
	showFeaturedPostsFirst: boolean
	itemsPerPage: number
}>) {
	const { data } = (await sanityFetch({
		query: groq`*[_type == 'blog.post']|order(publishDate desc){
				_type,
				_id,
				featured,
				metadata,
				categories[]->,
				authors[]->,
				publishDate,
			}
		`,
	})) as { data: Sanity.BlogPost[] }

	const [firstPost, ...otherPosts] =
		stegaClean(mainPost) === 'featured' ? sortFeaturedPosts(data) : data

	return (
		<section className="section space-y-12">
			<PostPreviewLarge post={firstPost} />
			<FilterList />
			<Paginated
				posts={sortFeaturedPosts(otherPosts, showFeaturedPostsFirst)}
				itemsPerPage={itemsPerPage}
			/>
		</section>
	)
}
