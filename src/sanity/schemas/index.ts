// documents
import announcement from './documents/announcement'
import blogCategory from './documents/blog.category'
import blogPost from './documents/blog.post'
import logo from './documents/logo'
import navigation from './documents/navigation'
import page from './documents/page'
import person from './documents/person'
import redirect from './documents/redirect'
import site from './documents/site'
import testimonial from './documents/testimonial'

// objects
import cta from './objects/cta'
import link from './objects/link'
import linkList from './objects/link.list'
import metadata from './objects/metadata'
import uid from './objects/uid'

// modules
import accordionList from './modules/accordion-list'
import blogList from './modules/blog-list'
import cardList from './modules/card-list'
import customHtml from './modules/custom-html'
import hero from './modules/hero'
import heroSplit from './modules/hero.split'
import richtextModule from './modules/richtext-module'
import statList from './modules/stat-list'
import stepList from './modules/step-list'
import teamList from './modules/team-list'
import testimonialList from './modules/testimonial-list'

export const schemaTypes = [
	// documents
	site,
	page,
	blogPost,
	blogCategory,
	navigation,
	announcement,
	redirect,
	logo,
	person,
	testimonial,

	// objects
	cta,
	uid,
	link,
	linkList,
	metadata,

	// modules
	accordionList,
	blogList,
	cardList,
	customHtml,
	hero,
	heroSplit,
	richtextModule,
	statList,
	stepList,
	teamList,
	testimonialList,
]
