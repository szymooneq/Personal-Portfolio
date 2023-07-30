import { lazy } from 'react'
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { groq } from 'next-sanity'
import { PreviewSuspense } from 'next-sanity/preview'
import { client } from '@/lib/sanity/client/sanity.client'
import View from '@/components/Project/View'
const ProjectPreview = lazy(() => import('@/components/Project/Preview'))
import type { IProjectDetails } from '@/types/Project.types'

// TODO: add page keywords to CMS
export default function Page({
	preview,
	data,
	queryParams
}: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
	return (
		<>
			<Head>
				<title>{`${data.title} | Projects | Szymon Dudka`}</title>
				<meta name="description" content={data.description} />
			</Head>

			{preview ? (
				<PreviewSuspense fallback="Loading...">
					<ProjectPreview queryParams={queryParams} />
				</PreviewSuspense>
			) : (
				<View content={data} />
			)}
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const QUERY = groq`*[_type == "projects" && defined(slug.current)][]{
		"params": { "slug": slug.current }
	}`

	const paths = await client.fetch<Array<string>>(QUERY)

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps: GetStaticProps = async ({ params, preview = false }) => {
	const queryParams = { slug: params?.slug ?? '' }

	if (preview) {
		return {
			props: {
				preview,
				queryParams
			}
		}
	}

	const QUERY = groq`*[_type == "projects" && slug.current == $slug][0]{
    title,
    type->,
    description,
    links[] {
      _key,
        _type,
        url
    },
    images[],
    technologies[]->,
    stack[]->,
    details
  }`

	const data = await client.fetch<IProjectDetails>(QUERY, queryParams)

	return {
		props: {
			data,
			queryParams: {},
			preview
		}
	}
}
