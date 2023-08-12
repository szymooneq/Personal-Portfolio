import NextImage from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { screen } from '@/lib/theme/breakpoints'

const Section = styled.section`
  margin-bottom: 2rem;
	position: relative;
	left: calc(-50vw + 50%);
	width: 100vw;
	overflow: hidden;
	cursor: grab;
`

const Wrapper = styled(motion.div)`
  display: inline-flex;
	gap: 2rem;
`

const ImageWrapper = styled.div`
  @media only screen and (${screen.lgDown}) {
    min-width: calc(100vw - 10px);
	  height: calc(56.25vw - 10px);
  }

  @media only screen and (${screen.lg}) {
    min-width: calc(80vw - 10px);
		height: calc(36.25vw - 10px);
  }
`

const Image = styled(NextImage)`
  width: 100%;
	height: auto;
	object-fit: cover;
	object-position: center;
	pointer-events: none;
`

export { Section, Wrapper, ImageWrapper, Image }