import { groq } from 'next-sanity';
import { client } from '../sanity/client/sanity.client';

export async function getPostList() {
	const query = groq`*[_type == "post"]{
    slug,
    mainImage,
    title,
    description,
    technologies[]->,
  }`;

	// TODO: post interface
	const postList = await client.fetch<any>(query);

	return {
		postList
	};
}

export async function getPostPaths() {
	const query = groq`*[_type == "post" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`;

	return await client.fetch(query);
}

export async function getPostData(queryParams: { slug: string | string[] }) {
	const query = groq`*[_type == "post" && slug.current == $slug][0]{
    mainImage,
    title,
    description,
    technologies[]->,
    publishedAt,
    editedAt,
    body
  }`;

	return await client.fetch<any>(query, queryParams);
}
