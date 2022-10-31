import { motion } from "framer-motion"
import { useState } from "react"
import preview from '../../../assets/preview.jpg'
import styles from './Slider.module.css'

export default function Slider({ slides }) {
  const [position, setPosition] = useState(0)

  const onRight = () => {
    if(position < slides.length - 1) {
      setPosition(position + 1)
    }
  }

  const onLeft = () => {
    if(position > 0) {
      setPosition(position - 1)
    }
  }
  
  return (
    <div className={styles.showcaseContainer}>
      
      <button onClick={onLeft} className={styles.button}>left</button>
      <button onClick={onRight} className={styles.button}>right</button>
      
      {slides.map((slide, index) => (
        <motion.div
          key={index} 
          className={styles.imgWrapper}
          // initial={{ scale: 0, rotation: -180 }}
          // animate={{ rotate: 0, scale: index === position ? 1.1 : 1, left: `${(index - position) * 80 + 9}vw` }}
          /* transition={{ type: "spring", stiffness: 260, damping: 20 }} */>
          <img src={slide} alt="" />
        </motion.div>
      ))}
      
    </div>
  )
}
