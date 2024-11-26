import AccordionList from './AccordionList'
import BlogFrontpage from './blog/BlogFrontpage'
import BlogList from './blog/BlogList'
import PostContent from './blog/PostContent'
import CardList from './CardList'
import CreativeModule from './CreativeModule'
import CustomHTML from './CustomHTML'
import Hero from './Hero'
import HeroSplit from './HeroSplit'
import RichtextModule from './RichtextModule'
import StatList from './StatList'
import StepList from './StepList'
import TeamList from './team'
import TestimonialList from './TestimonialList'

export default function Modules({
	modules,
	page,
	post,
}: {
	modules?: Sanity.Module[]
	page?: Sanity.Page
	post?: Sanity.BlogPost
}) {
	return (
		<div className="">
			{modules?.map((module) => {
				if (module.enabled) {
					switch (module._type) {
						case 'accordion-list':
							return <AccordionList {...module} key={module._key} />
						case 'blog-frontpage':
							return <BlogFrontpage {...module} key={module._key} />
						case 'blog-list':
							return <BlogList {...module} key={module._key} />
						case 'blog-post-content':
							return <PostContent {...module} post={post} key={module._key} />
						case 'card-list':
							return <CardList {...module} key={module._key} />
						case 'creative-module':
							return <CreativeModule {...module} key={module._key} />
						case 'custom-html':
							return <CustomHTML {...module} key={module._key} />
						case 'hero':
							return <Hero {...module} key={module._key} />
						case 'hero.split':
							return <HeroSplit {...module} key={module._key} />
						case 'richtext-module':
							return <RichtextModule {...module} key={module._key} />
						case 'stat-list':
							return <StatList {...module} key={module._key} />
						case 'step-list':
							return <StepList {...module} key={module._key} />
						case 'team-list':
							return <TeamList {...module} key={module._key} />
						case 'testimonial-list':
							return <TestimonialList {...module} key={module._key} />
						default:
							return <div data-type={module._type} key={module._key} />
					}
				}
			})}
		</div>
	)
}
