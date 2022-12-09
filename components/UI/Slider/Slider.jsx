import { motion as m } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { urlFor } from "../../../lib/sanityConfig";
import styles from "./Slider.module.css";

export default function Slider({ images }) {
  const [width, setWidth] = useState(0);
  const slider = useRef();

  useEffect(() => {
    setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
  }, []);

  return (
    <div ref={slider} className={styles.slider}>
      <m.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        whileTap={{ cursor: "grabbing" }}
        animate={{ x: 0, x: -width }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 1
        }}
        className={styles.inner}>
        {images.map((image, id) => (
          <div key={id} className={styles.image}>
            <img src={urlFor(image).url()} alt={image.alt} />
          </div>
        ))}
      </m.div>
    </div>
  );
}
