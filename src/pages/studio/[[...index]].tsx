import Head from 'next/head'
import { NextStudio } from 'next-sanity/studio'
import { NextStudioHead } from 'next-sanity/studio/head'
import sanityConfig from '@/lib/sanity/config/sanity.config'

export default function StudioPage() {
	return (
		<>
			<Head>
				<NextStudioHead />
			</Head>
			<NextStudio config={sanityConfig} />
		</>
	)
}
