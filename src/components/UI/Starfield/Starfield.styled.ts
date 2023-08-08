import { flyingAstronaut } from '@/lib/theme/keyframes'
import NextImage from 'next/image'
import styled from 'styled-components'

const Wrapper = styled.div`
  position: absolute;
	inset: 0;
	z-index: 1;
  overflow: hidden;
`

const Image = styled(NextImage)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 250px;
  height: auto;
	animation: ${flyingAstronaut} 25s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite;
  z-index: 2;
`

export { Wrapper, Image }