import { cn } from '@/lib/utils'
import { PortableText } from 'next-sanity'
import Image from './Image'

export default function Content({
	value,
	className,
	children,
}: { value: any } & React.ComponentProps<'div'>) {
	return (
		<div
			className={cn(
				'richtext mx-auto w-full space-y-[1em] [&>:first-child]:!mt-0',
				className,
			)}
		>
			<PortableText
				value={value}
				components={{
					block: {
						blockquote: ({ children }) => (
							<blockquote className="border-l-2 pl-4">
								<p>{children}</p>
							</blockquote>
						),
					},
					types: {
						image: Image,
					},
				}}
			/>

			{children}
		</div>
	)
}
