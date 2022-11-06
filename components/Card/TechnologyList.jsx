import Image from "next/image";
import { useRouter } from "next/router";
import { urlFor } from "../../lib/sanityConfig";

export default function TechnologyList({ technologies }) {
  const { query, push } = useRouter()
  
  return (
    <>
      {technologies.map((el) => (
        <button key={el.title} onClick={() => push({ pathname: '/projects', query: { category: el.title }})} className={`button ${query.category === el.title && "active"}`}>
          <Image src={urlFor(el.icon).url()} alt={el.title} width={20} height={20} />
          <span>{el.title.toUpperCase()}</span>
        </button>
      ))}
    </>
  )
}
