import { getBlockText } from '@/sanity/lib/utils'
import { TfiLayoutMediaLeft } from 'react-icons/tfi'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'hero.split',
	title: 'Hero (split)',
	icon: TfiLayoutMediaLeft,
	type: 'object',
	groups: [
		{ name: 'content', default: true },
		{ name: 'image' },
		{ name: 'options' },
	],
	fields: [
		defineField({
			name: 'pretitle',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
			group: 'content',
		}),
		defineField({
			name: 'quote',
			type: 'text',
			group: 'content',
			rows: 3,
		}),
		defineField({
			name: 'ctas',
			title: 'Call-to-actions',
			type: 'array',
			of: [{ type: 'cta' }],
			group: 'content',
		}),
		defineField({
			name: 'image',
			type: 'image',
			options: {
				hotspot: true,
			},
			fields: [
				defineField({
					name: 'alt',
					type: 'string',
				}),
				defineField({
					name: 'onRight',
					type: 'boolean',
					description: 'Display to the right of the content on desktop',
					initialValue: false,
				}),
				defineField({
					name: 'imageSize',
					type: 'string',
					options: {
						list: ['1/3', '1/2'],
						layout: 'radio',
					},
					initialValue: '1/2',
				}),
				defineField({
					name: 'loading',
					type: 'string',
					options: {
						list: ['lazy', 'eager'],
						layout: 'radio',
					},
					initialValue: 'lazy',
				}),
			],
			group: 'image',
		}),
		defineField({
			name: 'backgroundColour',
			type: 'string',
			options: {
				list: ['white', 'lightBlue'],
				layout: 'radio',
			},
			initialValue: 'white',
			group: 'options',
		}),
		defineField({
			name: 'enabled',
			type: 'boolean',
			initialValue: true,
			group: 'options',
		}),
	],
	preview: {
		select: {
			content: 'content',
			media: 'image.asset',
		},
		prepare: ({ content, media }) => ({
			title: getBlockText(content),
			subtitle: 'Hero (split)',
			media,
		}),
	},
})
