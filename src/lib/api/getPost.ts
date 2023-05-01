import { groq } from 'next-sanity'
import { client } from '@/lib/sanity/client/sanity.client'
import { IPostCard, IPostDetails } from '@/types/Post.types'

async function getPosts() {
	const query = groq`*[_type == "post"]{
    slug,
    mainImage,
    title,
    description,
    technologies[]->,
  }`

	const postList = await client.fetch<IPostCard[]>(query)

	return postList
}

async function getPostsPaths() {
	const query = groq`*[_type == "post" && defined(slug.current)][]{
      "params": { "slug": slug.current }
    }`

	const postPaths = await client.fetch<string[]>(query)

	return postPaths
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

	const postData = await client.fetch<IPostDetails>(query, queryParams)

	return postData
}

export { getPosts, getPostsPaths, getPostData }
