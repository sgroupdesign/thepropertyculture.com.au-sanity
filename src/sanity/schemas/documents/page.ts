import { VscEdit, VscEyeClosed, VscHome, VscQuestion } from 'react-icons/vsc'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'page',
	title: 'Page',
	type: 'document',
	groups: [
		{ name: 'content', default: true },
		{ name: 'seo', title: 'SEO' },
	],
	fields: [
		defineField({
			name: 'title',
			type: 'string',
			group: 'content',
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: 'pageHeaderImage',
			type: 'image',
			group: 'content',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'modules',
			description: 'Page content',
			type: 'array',
			of: [
				{ type: 'accordion-list' },
				{ type: 'blog-list' },
				{ type: 'card-list' },
				{ type: 'custom-html' },
				{ type: 'gallery' },
				{ type: 'hero' },
				{ type: 'hero.split' },
				{ type: 'richtext-module' },
				{ type: 'stat-list' },
				{ type: 'step-list' },
				{ type: 'team-list' },
				{ type: 'testimonial-list' },
			],
			options: {
				insertMenu: {
					views: [{ name: 'list' }, { name: 'grid' }],
					groups: [
						{ name: 'blog', of: ['blog-list', 'blog-post-content'] },
						{ name: 'hero', of: ['hero', 'hero.split'] },
						{
							name: 'lists',
							of: [
								'accordion-list',
								'blog-list',
								'card-list',
								'stat-list',
								'step-list',
							],
						},
						{
							name: 'testimonials',
							of: ['testimonial-list'],
						},
					],
				},
			},
			group: 'content',
		}),
		defineField({
			name: 'metadata',
			type: 'metadata',
			group: 'seo',
		}),
	],
	preview: {
		select: {
			title: 'title',
			slug: 'metadata.slug.current',
			media: 'metadata.image',
			noindex: 'metadata.noIndex',
		},
		prepare: ({ title, slug, media, noindex }) => ({
			title,
			subtitle: slug && (slug === 'index' ? '/' : `/${slug}`),
			media:
				media ||
				(slug === 'index' && VscHome) ||
				(slug === '404' && VscQuestion) ||
				(['blog', 'blog/*'].includes(slug) && VscEdit) ||
				(noindex && VscEyeClosed),
		}),
	},
})
