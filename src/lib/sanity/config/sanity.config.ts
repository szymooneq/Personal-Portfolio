import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
// import StudioLogo from './components/StudioLogo';
// import StudioNavbar from './components/StudioNavbar';
import Navbar from '@/components/Layout/Navbar/Navbar';
import SanityLogo from '@/components/UI/Logo/SanityLogo';
import { schemaTypes } from '../schemas';
import { myTheme } from './sanityTheme';
import { getDefaultDocumentNodeResolver } from './structure';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
	basePath: '/studio',
	name: 'personal-portfolio-sd',
	title: 'SD Portfolio Studio',
	projectId,
	dataset,
	plugins: [
		deskTool({
			defaultDocumentNode: getDefaultDocumentNodeResolver
		}),
		visionTool()
	],
	schema: {
		types: schemaTypes
	},
	studio: {
		components: {
			logo: SanityLogo
			// navbar: Navbar
		}
	},
	theme: myTheme
});
