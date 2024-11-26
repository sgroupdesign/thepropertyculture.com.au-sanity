'use client'

import { dataset, projectId } from '@/sanity/lib/env'
import { codeInput } from '@sanity/code-input'
import {
	dashboardTool,
	projectInfoWidget,
	projectUsersWidget,
} from '@sanity/dashboard'
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { vercelWidget } from 'sanity-plugin-dashboard-widget-vercel'
import { iconify } from 'sanity-plugin-iconify'
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure'
import { resolve } from './src/sanity/presentation/resolve'
import { sanitypressGuideWidget } from './src/sanity/sanitypressGuideWidget'
import { schemaTypes } from './src/sanity/schemas'
import { structure } from './src/sanity/structure'

const singletonTypes = ['site']

export default defineConfig({
	projectId,
	dataset,
	basePath: '/studio',

	plugins: [
		structureTool({
			name: 'content',
			title: 'Content',
			structure,
		}),
		presentationTool({
			name: 'editor',
			title: 'Editor',
			previewUrl: {
				previewMode: {
					enable: '/api/draft-mode/enable',
				},
			},
			resolve,
		}),
		dashboardTool({
			name: 'deployment',
			title: 'Deployment',
			widgets: [vercelWidget()],
		}),
		dashboardTool({
			name: 'info',
			title: 'Info',
			widgets: [
				projectInfoWidget(),
				projectUsersWidget(),
				sanitypressGuideWidget(),
			],
		}),
		visionTool(),
		codeInput(),
		iconify({
			collections: ['iconoir'],
			showName: true,
		}),
	],

	tasks: { enabled: false },
	scheduledPublishing: { enabled: false },

	schema: {
		types: schemaTypes,
		templates: (templates) =>
			templates.filter(
				({ schemaType }) => !singletonTypes.includes(schemaType),
			),
	},

	document: {
		actions: (input, { schemaType }) =>
			singletonTypes.includes(schemaType)
				? input.filter(
						({ action }) =>
							action &&
							['publish', 'discardChanges', 'restore'].includes(action),
					)
				: input,
	},
})
