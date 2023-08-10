import styled from 'styled-components'
import { slideUpHeading } from '@/lib/theme/keyframes'

const Heading = styled.h1`
	margin: 2rem 0;
	font-size: clamp(0px, 20vw, 320px);
	font-weight: 700;
  text-align: center;
	white-space: nowrap;
	color: var(--text-header);
	opacity: 0;
	visibility: hidden;
	transform: translateY(100px);
	animation: ${slideUpHeading} 1s 0.3s forwards;
`

export { Heading }