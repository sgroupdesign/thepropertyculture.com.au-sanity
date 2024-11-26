import { getBlockText } from '@/sanity/lib/utils'
import { TfiLayoutCtaCenter } from 'react-icons/tfi'
import { defineField, defineType } from 'sanity'
import {
	alignItems,
	alignmentFieldset,
	textAlign,
} from '../fragments/fields/alignment'

export default defineType({
	name: 'hero',
	title: 'Hero',
	icon: TfiLayoutCtaCenter,
	type: 'object',
	groups: [
		{ name: 'content', default: true },
		{ name: 'image' },
		{ name: 'options' },
	],
	fieldsets: [alignmentFieldset, { name: 'image', options: { columns: 1 } }],
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
			name: 'ctas',
			title: 'Call-to-actions',
			type: 'array',
			of: [{ type: 'cta' }],
			group: 'content',
		}),
		defineField({
			name: 'bgImage',
			title: 'Background image',
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
					name: 'loading',
					type: 'string',
					options: {
						list: ['lazy', 'eager'],
						layout: 'radio',
					},
					initialValue: 'lazy',
				}),
				defineField({
					name: 'overlayOpacity',
					type: 'string',
					options: {
						list: [
							{ title: '0%', value: '0' },
							{ title: '20%', value: '20' },
							{ title: '40%', value: '40' },
							{ title: '60%', value: '60' },
							{ title: '80%', value: '80' },
							{ title: '100%', value: '100' },
						],
					},
				}),
			],
			group: 'image',
			fieldset: 'image',
		}),
		defineField({
			name: 'darkMode',
			type: 'boolean',
			group: 'options',
		}),
		defineField({
			...textAlign,
			fieldset: 'alignment',
		}),
		defineField({
			...alignItems,
			fieldset: 'alignment',
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
			media: 'bgImage',
		},
		prepare: ({ content, media }) => ({
			title: getBlockText(content),
			subtitle: 'Hero',
			media,
		}),
	},
})
