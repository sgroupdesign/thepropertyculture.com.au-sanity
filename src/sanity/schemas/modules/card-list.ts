import { count, getBlockText } from '@/sanity/lib/utils'
import { TfiLayoutMediaLeftAlt } from 'react-icons/tfi'
import { defineArrayMember, defineField, defineType } from 'sanity'

export default defineType({
	name: 'card-list',
	title: 'Card list',
	icon: TfiLayoutMediaLeftAlt,
	type: 'object',
	groups: [{ name: 'content', default: true }, { name: 'options' }],
	fields: [
		defineField({
			name: 'pretitle',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'intro',
			type: 'array',
			of: [{ type: 'block' }],
			group: 'content',
		}),
		defineField({
			name: 'cards',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					fields: [
						defineField({
							name: 'images',
							type: 'array',
							of: [
								{
									type: 'image',
									options: {
										hotspot: true,
									},
								},
							],
							validation: (rule) => rule.required().max(2),
						}),
						defineField({
							name: 'title',
							type: 'string',
						}),
						defineField({
							name: 'ctas',
							title: 'Call-to-actions',
							type: 'array',
							of: [{ type: 'cta' }],
						}),
					],
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
			cards: 'cards',
		},
		prepare: ({ intro, cards }) => ({
			title: getBlockText(intro) || count(cards, 'card'),
			subtitle: 'Cards list',
		}),
	},
})
