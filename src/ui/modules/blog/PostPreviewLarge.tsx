import processUrl from '@/lib/processUrl'
import Img from '@/ui/Img'
import Link from 'next/link'
import Categories from './Categories'

export default function PostPreviewLarge({ post }: { post: Sanity.BlogPost }) {
	return (
		<Link
			className="group grid items-center gap-x-8 gap-y-4 border-2 border-coffee shadow-sm md:grid-cols-2"
			href={processUrl(post, { base: false })}
		>
			<div className="mx-auto space-y-4 p-8">
				<div className="flex flex-wrap gap-x-4 text-sm">
					<Categories
						className="flex flex-wrap gap-x-2 uppercase text-terracotta"
						categories={post.categories}
					/>
				</div>
				<h2 className="text-xl group-hover:underline lg:text-4xl">
					{post.metadata.title}
				</h2>

				<p className="line-clamp-4 max-md:text-sm">
					{post.metadata.description}
				</p>
			</div>

			<figure className="max-md:full-bleed relative aspect-video overflow-hidden">
				<Img
					className="aspect-[inherit] w-full object-cover transition-[filter,transform] group-hover:scale-105 group-hover:brightness-110"
					image={post.metadata.image}
					imageWidth={800}
					alt={post.metadata.title}
				/>
			</figure>
		</Link>
	)
}
