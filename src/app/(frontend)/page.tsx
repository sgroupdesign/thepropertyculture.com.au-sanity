import processMetadata from '@/lib/processMetadata'
import { groq, sanityFetch } from '@/sanity/lib/fetch'
import { modulesQuery } from '@/sanity/lib/queries'
import Modules from '@/ui/modules'
import PageHeader from '@/ui/PageHeader'

export default async function Page() {
	const page = await getPage()
	return (
		<div className="">
			<PageHeader pageHeaderImage={page?.pageHeaderImage} />
			<Modules modules={page?.modules} />
		</div>
	)
}

export async function generateMetadata() {
	const page = await getPage()
	return processMetadata(page)
}

async function getPage() {
	const { data } = await sanityFetch({
		query: groq`*[_type == 'page' && metadata.slug.current == 'index'][0]{
			pageHeaderImage,
			modules[]{ ${modulesQuery} },
			metadata {
				...,
				'ogimage': image.asset->url + '?w=1200',
			}
		}`,
	})

	return data as Sanity.Page
}
