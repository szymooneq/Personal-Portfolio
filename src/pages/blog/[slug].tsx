import Post from '@/components/Post/Post';
import { getPostData, getPostPaths } from '@/lib/api/getPost';
import { IPostDetails } from '@/lib/interfaces/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';
const ProjectPreview = lazy(
	() => import('@/components/Project/PreviewProject')
);

interface props {
	preview: boolean;
	postData: IPostDetails;
	queryParams: {};
}

export default function Page({
	preview,
	postData,
	queryParams
}: props): JSX.Element {
	return preview ? (
		<PreviewSuspense fallback="Loading...">
			<ProjectPreview queryParams={queryParams} />
		</PreviewSuspense>
	) : (
		<Post postData={postData} />
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getPostPaths();
	return {
		paths,
		fallback: false
	};
};

export const getStaticProps: GetStaticProps = async ({
	params,
	preview = false
}) => {
	const queryParams = { slug: params?.slug ?? `` };

	if (preview) {
		return { props: { preview, queryParams } };
	}

	const postData = await getPostData(queryParams);

	return {
		props: {
			postData,
			queryParams: {},
			preview
		},
		revalidate: 60
	};
};
