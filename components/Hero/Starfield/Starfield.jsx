import { useEffect, useRef } from "react";
import styles from "./Starfield.module.css";

class Star {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.xPrev = x;
    this.yPrev = y;
  }

  update(width, height, speed) {
    this.xPrev = this.x;
    this.yPrev = this.y;
    this.z += speed * 0.0675;
    this.x += this.x * (speed * 0.0225) * this.z;
    this.y += this.y * (speed * 0.0225) * this.z;
    if (
      this.x > width / 2 ||
      this.x < -width / 2 ||
      this.y > height / 2 ||
      this.y < -height / 2
    ) {
      this.x = Math.random() * width - width / 2;
      this.y = Math.random() * height - height / 2;
      this.xPrev = this.x;
      this.yPrev = this.y;
      this.z = 0;
    }
  }

  draw(ctx) {
    ctx.lineWidth = this.z;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.xPrev, this.yPrev);
    ctx.stroke();
  }
}

export default function Starfield() {
  const SPEED = 0.1;
  const COUNT = 800;
  const stars = Array.from({ length: COUNT }, () => new Star(0, 0, 0));
  const requestRef = useRef();
  const starfieldCanvas = useRef();
  const container = useRef();

  useEffect(() => {
    const ctx = starfieldCanvas.current.getContext("2d");

    function frame() {
      const { clientWidth: width, clientHeight: height } = container.current;

      for (const star of stars) {
        star.update(width, height, SPEED);
        star.draw(ctx);
      }

      ctx.fillRect(-width / 2, -height / 2, width, height);
      requestRef.current = requestAnimationFrame(frame);
    }

    function setup() {
      requestRef.current =
        requestRef.current > 0 && cancelAnimationFrame(requestRef.current);
      const { clientWidth: width, clientHeight: height } = container.current;

      const dpr = window.devicePixelRatio || 1;
      starfieldCanvas.current.width = width * dpr;
      starfieldCanvas.current.height = height * dpr;
      starfieldCanvas.current.style.width = `${width}px`;
      starfieldCanvas.current.style.height = `${height}px`;
      ctx.scale(dpr, dpr);

      for (const star of stars) {
        star.x = Math.random() * width - width / 2;
        star.y = Math.random() * height - height / 2;
        star.z = 0;
      }

      ctx.translate(width / 2, height / 2);
      ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
      ctx.strokeStyle = "white";
      requestRef.current = requestAnimationFrame(frame);
    }

    const resizeObserver = new ResizeObserver(setup);
    resizeObserver.observe(container.current);

    return () => {
      cancelAnimationFrame(requestRef.current);
      resizeObserver.disconnect();
    };
  }, [stars]);

  return (
    <div ref={container} className={styles.background}>
      <canvas ref={starfieldCanvas} id="starfield" />
    </div>
  );
}
