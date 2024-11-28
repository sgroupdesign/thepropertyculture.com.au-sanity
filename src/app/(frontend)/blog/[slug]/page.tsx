import processMetadata from '@/lib/processMetadata'
import client from '@/sanity/client'
import { groq, sanityFetch } from '@/sanity/lib/fetch'
import PostContent from '@/ui/modules/blog/PostContent'
import PageHeader from '@/ui/PageHeader'

export default async function Page({ params }: Props) {
	const post = await getPost(await params)
	return (
		<div>
			<PageHeader image={post?.pageHeaderImage} hero={false} />
			<PostContent
				post={post}
				_type={post._type}
				_key={post._id}
				enabled={true}
			/>
		</div>
	)
}

export async function generateMetadata({ params }: Props) {
	const post = await getPost(await params)
	return processMetadata(post)
}

export async function generateStaticParams() {
	const slugs = await client.fetch<string[]>(
		groq`*[_type == 'blog.post' && defined(metadata.slug.current)].metadata.slug.current`,
	)

	return slugs.map((slug) => ({ slug }))
}

async function getPost(params: { slug?: string }) {
	const { data } = await sanityFetch({
		query: groq`*[_type == 'blog.post' && metadata.slug.current == $slug][0]{
			...,
			pageHeaderImage,
			'body': select(_type == 'image' => asset->, body),
			'readTime': length(string::split(pt::text(body), ' ')) / 200,
			'headings': body[style in ['h2', 'h3']]{
				style,
				'text': pt::text(@)
			},
			categories[]->,
			authors[]->,
			metadata {
				...,
				'ogimage': image.asset->url + '?w=1200'
			}
		}`,
		params,
	})

	return data as Sanity.BlogPost
}

type Props = {
	params: Promise<{ slug?: string }>
}
