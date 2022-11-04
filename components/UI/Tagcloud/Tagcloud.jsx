import { useEffect, useState } from "react"
import TagCloud from "TagCloud"

const technologies = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'React Router', 'Next.js', 'SASS', 'Tailwind CSS', 'Bootstrap', 'Node.js', 'Firebase', 'MySQL', 'Git', 'GitHub', 'Vercel', 'Netlify', 'npm', 'Figma', 'Adobe Photoshop', 'VSCode', 'eslint', 'prettier']

export default function Tagcloud() {
  const [radius, setRadius] = useState(200)

  const handleResize = () => {
    if(window.innerWidth > 768) {
      setRadius(300)
    } else {
      setRadius(200)
    }
  }

  useEffect(() => {
    if(window.innerWidth > 768) {
      setRadius(300)
    }

    const tagcloud = TagCloud('.tagcloud', technologies, { radius: radius })
    window.addEventListener('resize', handleResize)
    
    return () => {
      tagcloud.destroy()
      window.removeEventListener('resize', handleResize)
    }
  }, [radius])

  return <div className="tagcloud"></div>
}
