import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { myTheme } from './sanity.theme'
import { mySchemas } from './sanity.schemas'
import { defaultDocumentNode } from './defaultDocumentNode'

import SanityLogo from '@/components/UI/Logo/Sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
	basePath: '/studio',
	name: 'personal-portfolio-sd',
	title: 'SD Portfolio Studio',
	projectId,
	dataset,
	plugins: [
		deskTool({
			defaultDocumentNode: defaultDocumentNode
		}),
		visionTool(),
		codeInput()
	],
	schema: {
		types: mySchemas
	},
	studio: {
		components: {
			logo: SanityLogo
		}
	},
	theme: myTheme
})
