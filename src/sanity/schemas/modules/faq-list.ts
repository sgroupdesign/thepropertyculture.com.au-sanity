import { VscQuestion } from 'react-icons/vsc'
import { defineArrayMember, defineField, defineType } from 'sanity'
import { getBlockText } from '../../src/utils'

export default defineType({
	name: 'faq-list',
	title: 'FAQ list',
	type: 'object',
	icon: VscQuestion,
	fields: [
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
		}),
		defineField({
			name: 'content',
			type: 'array',
			of: [{ type: 'block' }],
		}),
		defineField({
			name: 'centerAligned',
			type: 'boolean',
			description:
				'By default the content field is left aligned, enable this for center alignment if required.',
			initialValue: false,
		}),
		defineField({
			name: 'items',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					icon: VscQuestion,
					fields: [
						defineField({
							name: 'question',
							type: 'string',
						}),
						defineField({
							name: 'answer',
							type: 'array',
							of: [{ type: 'block' }],
						}),
					],
					preview: {
						select: {
							title: 'question',
							answer: 'answer',
						},
						prepare: ({ title, answer }) => ({
							title,
							subtitle: getBlockText(answer),
						}),
					},
				}),
			],
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
			title: getBlockText(content),
			subtitle: 'FAQ list',
		}),
	},
})
