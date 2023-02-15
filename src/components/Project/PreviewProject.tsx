import { usePreview } from '@/lib/sanity/client/sanity.preview';
import { groq } from 'next-sanity';
import Project from './Project';

interface props {
	queryParams: { [key: string]: any };
}

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
}`;

const token =
	'skzpQFP11nFr6PAXYshIA5nDHarGC7V7Kko0clLWYVirL2sbPgYIdw9bWISIQWkrxHKtN9kZP6FlFWruofd3oWZPl8B4JPgkMLiBW19DBqMLqT5PWSwu05ELPn1zgYknNQBoWVTsHQcUPAssj2GRlFgx9MsbqGtkLciyNRNvweQO5FQzpIhd';

function ProjectPreview({ queryParams }: props): JSX.Element {
	const previewData = usePreview(token, query, queryParams);
	return <Project projectData={previewData} />;
}

export default ProjectPreview;
