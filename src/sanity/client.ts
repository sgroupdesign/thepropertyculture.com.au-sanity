import { dev } from '@/lib/env'
import { apiVersion, dataset, projectId } from '@/sanity/lib/env'
import { createClient } from 'next-sanity'

export default createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: !dev,
	stega: {
		studioUrl: '/studio',
	},
})