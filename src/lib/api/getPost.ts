import { groq } from 'next-sanity'
import { client } from '@/lib/sanity/client/sanity.client'
import { IPostCard, IPostDetails } from '@/interfaces/post'

async function getPostList() {
	const query = groq`*[_type == "post"]{
    slug,
    mainImage,
    title,
    description,
    technologies[]->,
  }`

	const postList = await client.fetch<IPostCard[]>(query)

	return {
		postList
	}
}

async function getPostPaths() {
	const query = groq`*[_type == "post" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`

	return await client.fetch<string[]>(query)
}

async function getPostData(queryParams: { slug: string | string[] }) {
	const query = groq`*[_type == "post" && slug.current == $slug][0]{
    mainImage,
    title,
    description,
    technologies[]->,
    publishedAt,
    editedAt,
    body
  }`

	return await client.fetch<IPostDetails>(query, queryParams)
}

export { getPostList, getPostPaths, getPostData }
