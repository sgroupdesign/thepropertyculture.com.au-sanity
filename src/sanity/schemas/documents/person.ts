import { GoPerson } from 'react-icons/go'
import { defineField, defineType } from 'sanity'
import imageBlock from '../fragments/image-block'

export default defineType({
	name: 'person',
	title: 'Person',
	type: 'document',
	groups: [
		{ name: 'content', default: true },
		{ name: 'seo', title: 'SEO' },
	],
	icon: GoPerson,
	fields: [
		defineField({
			name: 'pageHeaderImage',
			type: 'image',
			group: 'content',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			group: 'content',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'jobTitle',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'email',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'body',
			type: 'array',
			of: [{ type: 'block' }, imageBlock],
			group: 'content',
		}),
		defineField({
			name: 'image',
			type: 'image',
			group: 'content',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'social',
			type: 'reference',
			group: 'content',
			to: [{ type: 'navigation' }],
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
			group: 'seo',
		}),
	],
	preview: {
		select: {
			title: 'name',
			media: 'image',
			subtitle: 'jobTitle',
		},
		prepare: ({ title, media, subtitle }) => ({
			title,
			subtitle,
			media: media,
		}),
	},
})
