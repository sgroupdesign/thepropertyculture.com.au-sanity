import { getBlockText } from '@/sanity/lib/utils'
import { VscCalendar, VscMegaphone } from 'react-icons/vsc'
import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'announcement',
	title: 'Announcement',
	icon: VscMegaphone,
	type: 'document',
	fieldsets: [{ name: 'schedule', options: { columns: 2 } }],
	fields: [
		defineField({
			name: 'content',
			type: 'array',
			of: [
				{
					type: 'block',
					styles: [{ title: 'Normal', value: 'normal' }],
				},
			],
		}),
		defineField({
			name: 'cta',
			title: 'Call-to-action',
			type: 'link',
		}),
	],
	preview: {
		select: {
			content: 'content',
			cta: 'cta.label',
		},
		prepare: ({ content, cta }) => ({
			title: getBlockText(content),
			subtitle: cta,
			media: VscCalendar,
		}),
	},
})