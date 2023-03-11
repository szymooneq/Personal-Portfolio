import Project from '@/components/Project/Project';
import { getProjectData, getProjectsPaths } from '@/lib/api/projects';
import { IProjectDetails } from '@/lib/interfaces/project';
import { GetStaticPaths, GetStaticProps } from 'next';
import { PreviewSuspense } from 'next-sanity/preview';
import { lazy } from 'react';
const ProjectPreview = lazy(
	() => import('@/components/Project/PreviewProject')
);

interface props {
	preview: boolean;
	projectData: IProjectDetails;
	queryParams: {};
}

export default function Page({
	preview,
	projectData,
	queryParams
}: props): JSX.Element {
	return preview ? (
		<PreviewSuspense fallback="Loading...">
			<ProjectPreview queryParams={queryParams} />
		</PreviewSuspense>
	) : (
		<Project projectData={projectData} />
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = await getProjectsPaths();
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

	const projectData = await getProjectData(queryParams);

	return {
		props: {
			projectData,
			queryParams: {},
			preview
		},
		revalidate: 60
	};
};
