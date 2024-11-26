import { getBlockText } from '@/sanity/lib/utils'
import { GrBlockQuote } from 'react-icons/gr'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'testimonial',
	title: 'Testimonial',
	icon: GrBlockQuote,
	type: 'document',
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'author',
			type: 'object',
			fields: [
				defineField({
					name: 'name',
					type: 'string',
				}),
				defineField({
					name: 'location',
					type: 'string',
				}),
				defineField({
					name: 'image',
					type: 'image',
					options: {
						hotspot: true,
					},
				}),
			],
		}),
	],
	preview: {
		select: {
			content: 'content',
			author: 'author',
		},
		prepare: ({ content, author }) => ({
			title: author?.name || 'No author',
			subtitle: getBlockText(content),
			media: author?.image,
		}),
	},
})
