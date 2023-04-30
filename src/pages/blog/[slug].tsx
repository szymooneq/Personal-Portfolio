import { lazy } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import { PreviewSuspense } from 'next-sanity/preview'

import { getPostData, getPostsPaths } from '@/lib/api/getPost'
import View from '@/components/Blog/View'
const Preview = lazy(() => import('@/components/Project/Preview'))
import { IPostDetails } from '@/interfaces/Post.types'

interface PageProps {
	preview: boolean
	postData: IPostDetails
	queryParams: {}
}

// TODO: add page keywords to CMS
export default function Page({ preview, postData, queryParams }: PageProps): JSX.Element {
	return (
		<>
			<Head>
				<title>{`${postData.title} | Blog | Szymon Dudka`}</title>
				<meta name="description" content={postData.description} />
			</Head>

			{preview ? (
				<PreviewSuspense fallback="Loading...">
					<Preview queryParams={queryParams} />
				</PreviewSuspense>
			) : (
				<View content={postData} />
			)}
		</>
	)
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getPostsPaths()

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

	const postData = await getPostData(queryParams)

	return {
		props: {
			postData,
			queryParams: {},
			preview
		},
		revalidate: 60
	}
}
