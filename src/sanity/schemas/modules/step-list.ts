import { getBlockText } from '@/sanity/lib/utils'
import { VscListOrdered } from 'react-icons/vsc'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'step-list',
	title: 'Step list',
	icon: VscListOrdered,
	type: 'object',
	groups: [
		{ name: 'content', default: true },
		{ name: 'filtering' },
		{ name: 'options' },
	],
	fields: [
		defineField({
			name: 'intro',
			type: 'array',
			of: [{ type: 'block' }],
			group: 'content',
		}),
		defineField({
			name: 'steps',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					icon: VscListOrdered,
					fields: [
						defineField({
							name: 'icon',
							type: 'icon',
						}),
						defineField({
							name: 'content',
							type: 'array',
							of: [{ type: 'block' }],
						}),
					],
					preview: {
						select: {
							content: 'content',
						},
						prepare: ({ content }) => ({
							title: getBlockText(content),
						}),
					},
				}),
			],
			group: 'content',
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
			subtitle: 'Step list',
		}),
	},
})
