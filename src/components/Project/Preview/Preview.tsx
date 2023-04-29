import { groq } from 'next-sanity'
import { usePreview } from '@/lib/sanity/client/sanity.preview'
import { PreviewProps } from './Preview.types'

import View from '@/components/Project/View'

const token = process.env.NEXT_PUBLIC_SANITY_TOKEN!
const query = groq`*[_type == "projects" && slug.current == $slug][0]{
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
	const previewData = usePreview(token, query, queryParams)

	return <View projectData={previewData} />
}

export default Preview
