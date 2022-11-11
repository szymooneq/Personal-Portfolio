import { motion as m } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { urlFor } from '../../../lib/sanityConfig'
import styles from './Slider.module.css'

export default function Slider({ images }) {
  const [width, setWidth] = useState(0)
  const slider = useRef()

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth)
  }, [])

  return (
    <m.div ref={slider} initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1, transition: { duration: 1, delay: 0.1 } }} viewport={{ once: true }} className={styles.slider}>
      <m.div drag="x" dragConstraints={{ right: 0, left: -width }} whileTap={{ cursor: "grabbing" }} className={styles.inner}>
        {images.map((image, id) => (
          <div key={id} className={styles.image}>
            <img src={urlFor(image).url()} alt={image.alt} />
          </div>
        ))}
      </m.div>
    </m.div>
  )
}
