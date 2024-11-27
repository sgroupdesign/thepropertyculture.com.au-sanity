import moduleProps from '@/lib/moduleProps'
import Date from '@/ui/Date'
import Content from '@/ui/modules/RichtextModule/Content'
import Link from 'next/link'
import Categories from './Categories'
import ReadTime from './ReadTime'

export default function PostContent({
	post,
	...props
}: { post?: Sanity.BlogPost } & Sanity.Module) {
	if (!post) return null

	return (
		<article
			{...moduleProps(props)}
			className="section flex max-w-screen-lg flex-col gap-y-6 lg:py-20"
		>
			<header className="">
				<div className="mb-2 flex flex-wrap items-center gap-x-6 gap-y-4 font-sans font-medium uppercase text-coffee">
					<Categories
						className="flex flex-wrap gap-x-2"
						categories={post.categories}
					></Categories>
					{post.readTime && (
						<div className="flex gap-x-6">
							<span>|</span>
							<ReadTime value={post.readTime} />
						</div>
					)}
				</div>
				<h1 className="h1 font-light">{post.title ?? post.metadata.title}</h1>
			</header>

			<Content value={post.body} className="" />

			<div className="italic text-licorice/50">
				Published on <Date value={post.publishDate} />
			</div>

			<div>
				<Link className="btn primary" href="/blog">
					Back to articles
				</Link>
			</div>
		</article>
	)
}
