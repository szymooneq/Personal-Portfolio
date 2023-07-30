import { keyframes } from 'styled-components'

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

export { slideUp, slideDown, rotate }
