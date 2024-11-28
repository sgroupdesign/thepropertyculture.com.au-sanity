import { GoFileMedia } from 'react-icons/go'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'gallery',
	icon: GoFileMedia,
	type: 'object',
	groups: [
		{ name: 'content', title: 'Content', default: true },
		{ name: 'options', title: 'Options' },
	],
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
			group: 'content',
		}),
		defineField({
			name: 'images',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					fields: [
						defineField({
							name: 'image',
							type: 'image',
							options: {
								hotspot: true,
							},
						}),
						defineField({
							name: 'caption',
							type: 'string',
						}),
					],
					preview: {
						select: {
							title: 'caption',
						},
					},
				}),
			],
			group: 'content',
		}),
		defineField({
			name: 'centerAligned',
			type: 'boolean',
			description:
				'By default the content field is left aligned, enable this for center alignment if required.',
			initialValue: false,
			group: 'options',
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
			name: 'layout',
			type: 'string',
			options: {
				list: ['grid', 'carousel'],
			},
			initialValue: '3/4',
			group: 'options',
		}),
		defineField({
			name: 'enabled',
			type: 'boolean',
			initialValue: true,
		}),
	],
	preview: {
		select: {
			content: 'content',
		},
		prepare: ({ content }) => ({
			title: 'Gallery',
		}),
	},
})
