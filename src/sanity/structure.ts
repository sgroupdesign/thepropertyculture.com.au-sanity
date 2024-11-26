import type { StructureResolver } from 'sanity/structure'
import { group, singleton } from './lib/utils'

import { BsDatabaseAdd } from 'react-icons/bs'
import { VscEdit, VscMultipleWindows, VscServerProcess } from 'react-icons/vsc'

export const structure: StructureResolver = (S) =>
	S.list()
		.title('Content')
		.items([
			singleton(S, 'site', 'Site settings').icon(VscServerProcess),
			S.divider(),

			S.documentTypeListItem('page').title('Pages').icon(VscMultipleWindows),
			S.documentTypeListItem('person').title('People'),
			S.divider(),

			group(S, 'Blog', [
				S.documentTypeListItem('blog.post').title('Blog posts'),
				S.documentTypeListItem('blog.category').title('Blog categories'),
			]).icon(VscEdit),

			S.documentTypeListItem('navigation'),
			S.documentTypeListItem('redirect').title('Redirects'),
			S.divider(),

			group(S, 'Miscellaneous', [
				S.documentTypeListItem('testimonial').title('Testimonials'),
				S.documentTypeListItem('announcement').title('Announcements'),
			]).icon(BsDatabaseAdd),
		])
