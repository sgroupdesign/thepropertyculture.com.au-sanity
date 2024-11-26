import { count, getBlockText } from '@/sanity/lib/utils'
import { GoNumber } from 'react-icons/go'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'stat-list',
	title: 'Stat list',
	icon: GoNumber,
	type: 'object',
	groups: [{ name: 'content', default: true }, { name: 'options' }],
	fields: [
		defineField({
			name: 'intro',
			type: 'array',
			of: [{ type: 'block' }],
			group: 'content',
		}),
		defineField({
			name: 'stats',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					fields: [
						defineField({
							name: 'icon',
							type: 'icon',
						}),
						defineField({
							name: 'heading',
							type: 'string',
						}),
						defineField({
							name: 'description',
							type: 'array',
							of: [{ type: 'block' }],
						}),
					],
					preview: {
						select: {
							heading: 'heading',
							subtitle: 'description',
						},
						prepare: ({ heading }) => ({
							title: heading,
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
			stats: 'stats',
		},
		prepare: ({ intro, stats }) => ({
			title: getBlockText(intro) || count(stats, 'stat'),
			subtitle: 'Stat list',
		}),
	},
})
