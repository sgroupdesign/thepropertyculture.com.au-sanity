import processUrl from '@/lib/processUrl'
import { cn } from '@/lib/utils'
import Img from '@/ui/Img'
import Pretitle from '@/ui/Pretitle'
import Link from 'next/link'

export default function Team({ member }: { member: Sanity.Person }) {
	return (
		<Link
			className={cn(
				'group flex h-full flex-col space-y-2 border-2 border-coffee shadow-sm',
			)}
			href={processUrl(member, { base: false })}
		>
			<figure className="relative aspect-square overflow-hidden">
				<Img
					className="w-full object-contain transition-[filter,transform] group-hover:scale-105 group-hover:brightness-110"
					image={member.image}
					imageWidth={700}
					alt={member.name}
				/>
			</figure>

			<div className="flex flex-col space-y-2 p-4 lg:p-8">
				<Pretitle className="text-sm text-coffee">{member.jobTitle}</Pretitle>
				<h4 className="text-2xl group-hover:underline">{member.name}</h4>
			</div>
		</Link>
	)
}
