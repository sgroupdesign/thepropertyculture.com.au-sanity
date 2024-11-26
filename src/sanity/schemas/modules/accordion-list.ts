import { getBlockText } from '@/sanity/lib/utils'
import { VscQuestion } from 'react-icons/vsc'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'accordion-list',
	title: 'Accordion list',
	type: 'object',
	icon: VscQuestion,
	groups: [{ name: 'content', default: true }, { name: 'options' }],
	fields: [
		defineField({
			name: 'intro',
			type: 'array',
			of: [{ type: 'block' }],
			group: 'content',
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
							name: 'summary',
							type: 'string',
						}),
						defineField({
							name: 'content',
							type: 'array',
							of: [{ type: 'block' }],
						}),
						defineField({
							name: 'open',
							type: 'boolean',
							initialValue: false,
						}),
					],
					preview: {
						select: {
							title: 'summary',
							content: 'content',
						},
						prepare: ({ title, content }) => ({
							title,
							subtitle: getBlockText(content),
						}),
					},
				}),
			],
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
			name: 'layout',
			type: 'string',
			options: {
				layout: 'radio',
				list: ['vertical', 'horizontal'],
			},
			initialValue: 'vertical',
			group: 'options',
		}),
		defineField({
			name: 'backgroundColour',
			type: 'string',
			options: {
				list: ['white', 'coffee'],
				layout: 'radio',
			},
			initialValue: 'white',
			group: 'options',
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
			name: 'enabled',
			type: 'boolean',
			initialValue: true,
			group: 'options',
		}),
	],
	preview: {
		select: {
			intro: 'intro',
		},
		prepare: ({ intro }) => ({
			title: getBlockText(intro),
			subtitle: 'Accordion list',
		}),
	},
})
