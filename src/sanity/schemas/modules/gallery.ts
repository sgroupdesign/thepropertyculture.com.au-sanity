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
				list: [
					{ title: 'Jade', value: 'primary' },
					{ title: 'Grey', value: 'gray' },
					{ title: 'Olive', value: 'secondary' },
					{ title: 'White', value: 'white' },
				],
			},
			initialValue: 'white',
			group: 'options',
		}),
		defineField({
			name: 'containerFullWidth',
			type: 'boolean',
			description: 'Use the full container width by enabling this field.',
			initialValue: false,
			group: 'options',
		}),
		defineField({
			name: 'aspectRatio',
			type: 'string',
			options: {
				list: [
					{ title: '3x4', value: '3/4' },
					{ title: '4x3', value: '4/3' },
					{ title: '16x9', value: 'video' },
				],
			},
			initialValue: '3/4',
			group: 'options',
		}),
		defineField({
			name: 'columns',
			type: 'number',
			initialValue: 3,
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
