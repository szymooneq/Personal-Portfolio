import { lazy } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { PreviewSuspense } from 'next-sanity/preview'
import { getProjectData, getProjectsPaths } from '@/lib/api/getProject'

import Project from '@/components/Project'
const Preview = lazy(() => import('@/components/Project/Preview'))
import { IProjectDetails } from '@/interfaces/project'

interface PageProps {
	preview: boolean
	projectData: IProjectDetails
	queryParams: {}
}

// TODO: add page keywords to CMS
export default function Page({
	preview,
	projectData,
	queryParams
}: PageProps): JSX.Element {
	return (
		<>
			<Head>
				<title>{`${projectData.title} | Projects | Szymon Dudka`}</title>
				<meta name="description" content={projectData.description} />
			</Head>

			{preview ? (
				<PreviewSuspense fallback="Loading...">
					<Preview queryParams={queryParams} />
				</PreviewSuspense>
			) : (
				<Project projectData={projectData} />
			)}
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getProjectsPaths()

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
	const queryParams = { slug: params?.slug ?? `` }

	if (preview) {
		return { props: { preview, queryParams } }
	}

	const projectData = await getProjectData(queryParams)

	return {
		props: {
			projectData,
			queryParams: {},
			preview
		},
		revalidate: 60
	}
}
