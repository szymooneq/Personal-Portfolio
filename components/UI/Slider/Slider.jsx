import { motion as m } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { urlFor } from '../../../lib/sanityConfig'
import styles from './Slider.module.css'

/* import image1 from '../../../assets/slider/1.jpg'
import image2 from '../../../assets/slider/2.jpg'
import image3 from '../../../assets/slider/3.jpg'
import image4 from '../../../assets/slider/4.jpg'

const images = [ image1, image2, image3, image4 ] */

export default function Slider({ images }) {
  const [width, setWidth] = useState(0)
  const slider = useRef()

  useEffect(() => {
    console.log(slider)
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth)
  }, [])

  return (
    <m.div ref={slider} initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1, transition: { type: "spring", duration: 1, delay: 0.1 } }} viewport={{ once: true }} className={styles.slider}>
      <m.div drag="x" dragConstraints={{ right: 0, left: -width }} whileTap={{ cursor: "grabbing" }} className={styles.inner}>
        {images.map((image, id) => (
          <m.div key={id} className={styles.image}>
            <img src={urlFor(image).url()} alt={image.alt} />
          </m.div>
        ))}
      </m.div>
    </m.div>
  )
}
