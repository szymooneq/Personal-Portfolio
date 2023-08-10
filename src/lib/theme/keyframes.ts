import { keyframes } from 'styled-components'

// TODO: naming and organization
const slideDown = keyframes`
  from {
		transform: translateY(-100%);
	}

	to {
		transform: translateY(0%);
	}
`

const slideUp = keyframes`
  from {
		transform: translateY(100%);
	}

	to {
		transform: translateY(0%);
	}
`

const rotate = keyframes`
  from {
		transform: rotate(360deg);
	}

	to {
		transform: rotate(0deg);
	}
`

const flyingAstronaut = keyframes`
	0% {
		transform: translate(0, 20%) scale(1) rotate(0);
	}

	20% {
		transform: translate(-50%, -30%) scale(0.5) rotate(-30deg);
	}

	40% {
		transform: translate(-10%, -130%) scale(1) rotate(100deg);
	}

	60% {
		transform: translate(10%, 40%) scale(0.4) rotate(-40deg);
	}

	80% {
		transform: translate(-110%, -100%) scale(0.8) rotate(80deg);
	}

	100% {
		transform: translate(0, 20%) scale(1) rotate(0);
	}
`

const slideUpHeading = keyframes`
	from {
		opacity: 0;
		visibility: hidden;
		transform: translateY(100px);
	}

	to {
		opacity: 1;
		visibility: visible;
		transform: translateY(0);
	}
`

export { slideUp, slideDown, rotate, flyingAstronaut, slideUpHeading }
