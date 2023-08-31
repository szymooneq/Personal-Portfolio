import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Head from 'next/head'
import { groq } from 'next-sanity'
import { client } from '@/lib/sanity/client/sanity.client'
import Card from '@/components/Blog/Card'
import type { IPostCard } from '@/types/Post.types'
import * as Styled from '@/styles/Projects.styled'
import { Container, Heading } from '@/components/shared.styled'

export default function Blog({ posts }: InferGetStaticPropsType<typeof getStaticProps>): JSX.Element {
	return (
		<>
			<Head>
				<title>Blog | Szymon Dudka</title>
				<meta
					name="description"
					content="Welcome to my blog! Here, I share my thoughts, ideas, and experiences on various topics." />
			</Head>

			<Container>
				<Heading>Blog</Heading>

				<Styled.Description>
					Welcome to my blog! Here, I share my thoughts, ideas, and experiences on various topics.
				</Styled.Description>

				<Styled.CardWrapper>
					{posts.map(post => <Card key={post.title} content={post} />)}
				</Styled.CardWrapper>
			</Container>
		</>
	)
}

interface StaticProps {
	posts: Array<IPostCard>
}

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
	const QUERY = groq`*[_type == "post"]{
    slug,
    mainImage,
    title,
    description,
    technologies[]->,
  }`

	const posts = await client.fetch<Array<IPostCard>>(QUERY)

	return {
		props: {
			posts
		}
	}
}
