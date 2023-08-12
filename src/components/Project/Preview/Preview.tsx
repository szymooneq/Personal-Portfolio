import { groq } from 'next-sanity'
import { useSanityPreview } from '@/hooks/useSanityPreview'
import View from '@/components/Project/View'
import type { PreviewProps } from './Preview.types'

const TOKEN = process.env.NEXT_PUBLIC_SANITY_TOKEN ?? ''

const QUERY = groq`*[_type == "projects" && slug.current == $slug][0]{
  title,
  type->,
  description,
  links[] {
    _key,
      _type,
      link->,
      url
  },
  images[],
  technologies[]->,
  stack[]->,
  details
}`

const Preview = ({ queryParams }: PreviewProps): JSX.Element => {
	const projectData = useSanityPreview(TOKEN, QUERY, queryParams)

	return <View content={projectData} />
}

export default Preview
