import { useEffect, useRef } from 'react'
import styles from './Starfield.module.css'

class Star {
	x: number
	y: number
	z: number
	xPrev: number
	yPrev: number

	constructor(x = 0, y = 0, z = 0) {
		this.x = x
		this.y = y
		this.z = z
		this.xPrev = x
		this.yPrev = y
	}

	update(width: number, height: number, speed: number) {
		this.xPrev = this.x
		this.yPrev = this.y
		this.z += speed * 0.0675
		this.x += this.x * (speed * 0.0225) * this.z
		this.y += this.y * (speed * 0.0225) * this.z
		if (
			this.x > width / 2 ||
			this.x < -width / 2 ||
			this.y > height / 2 ||
			this.y < -height / 2
		) {
			this.x = Math.random() * width - width / 2
			this.y = Math.random() * height - height / 2
			this.xPrev = this.x
			this.yPrev = this.y
			this.z = 0
		}
	}

	draw(ctx: CanvasRenderingContext2D) {
		ctx.lineWidth = this.z
		ctx.beginPath()
		ctx.moveTo(this.x, this.y)
		ctx.lineTo(this.xPrev, this.yPrev)
		ctx.stroke()
	}
}

const Starfield = (): JSX.Element => {
	let requestRef = 0
	const SPEED = 0.1
	const COUNT = 500
	const stars = Array.from({ length: COUNT }, () => new Star(0, 0, 0))
	const starfieldCanvas = useRef() as React.MutableRefObject<HTMLCanvasElement>
	const container = useRef() as React.MutableRefObject<HTMLDivElement>

	useEffect(() => {
		const ctx = starfieldCanvas.current.getContext('2d')!

		function frame() {
			if (container.current) {
				const { clientWidth: width, clientHeight: height } = container.current

				for (const star of stars) {
					star.update(width, height, SPEED)
					star.draw(ctx)
				}

				ctx.fillRect(-width / 2, -height / 2, width, height)
				requestRef = requestAnimationFrame(frame)
			}
		}

		function setup() {
			if (requestRef > 0) {
				cancelAnimationFrame(requestRef)
			}

			if (container.current) {
				const { clientWidth: width, clientHeight: height } = container.current

				const dpr = window.devicePixelRatio || 1
				starfieldCanvas.current.width = width * dpr
				starfieldCanvas.current.height = height * dpr
				starfieldCanvas.current.style.width = `${width}px`
				starfieldCanvas.current.style.height = `${height}px`

				for (const star of stars) {
					star.x = Math.random() * width - width / 2
					star.y = Math.random() * height - height / 2
					star.z = 0
				}
				ctx.scale(dpr, dpr)
				ctx.translate(width / 2, height / 2)
				ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
				ctx.strokeStyle = 'white'

				requestRef = requestAnimationFrame(frame)
			}
		}

		const resizeObserver = new ResizeObserver(setup)
		resizeObserver.observe(container.current)

		return () => {
			resizeObserver.disconnect()
			cancelAnimationFrame(requestRef)
		}
	}, [])

	return (
		<div ref={container} className={styles.background}>
			<canvas ref={starfieldCanvas} />
		</div>
	)
}

export default Starfield
