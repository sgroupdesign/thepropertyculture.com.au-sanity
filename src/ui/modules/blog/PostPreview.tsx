import processUrl from '@/lib/processUrl'
import { cn } from '@/lib/utils'
import Img from '@/ui/Img'
import Link from 'next/link'
import Categories from './Categories'

export default function PostPreview({ post }: { post: Sanity.BlogPost }) {
	return (
		<Link
			className={cn(
				'group flex h-full flex-col space-y-2 border-2 border-coffee shadow-sm',
				post.featured && 'col-span-3',
			)}
			href={processUrl(post, { base: false })}
		>
			<figure className="relative aspect-4/3 overflow-hidden bg-ink/5">
				<Img
					className="aspect-4/3 w-full object-cover transition-[filter,transform] group-hover:scale-105 group-hover:brightness-110"
					image={post.metadata.image}
					imageWidth={700}
					alt={post.metadata.title}
				/>
			</figure>

			<div className="flex flex-col space-y-2 p-4 lg:p-8">
				<div className="flex flex-wrap gap-x-4 text-sm">
					<Categories
						className="flex flex-wrap gap-x-2 uppercase text-terracotta"
						categories={post.categories}
					/>
				</div>

				<h4 className="text-2xl group-hover:underline">
					{post.metadata.title}
				</h4>

				<div className="grow">
					<p className="line-clamp-3 text-sm">{post.metadata.description}</p>
				</div>
			</div>
		</Link>
	)
}
