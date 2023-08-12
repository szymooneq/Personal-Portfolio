import NextLink from 'next/link'
import NextImage from 'next/image'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const Link = styled(NextLink)`
	margin-bottom: 0.5rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1.75rem;
	font-weight: 700;
	letter-spacing: -1px;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    cursor: pointer;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    filter: blur(10px);
    background: linear-gradient(to bottom right, var(--theme-primary), var(--theme-secondary));
    z-index: -1;
    transition: opacity 0.5s;
  }

  & > svg {
    width: 40px;
    height: 40px;
    color: var(--gray);
  }
`

const Image = styled(NextImage)`
  width: 100%;
	height: 230px;
	object-fit: cover;
	border-top-left-radius: var(--radius);
	border-top-right-radius: var(--radius);
	filter: brightness(60%);
	transition: filter 0.5s;
`

const Wrapper = styled(motion.div)`
  position: relative;
	border-radius: var(--radius);
	background-color: var(--bg-secondary);
	box-shadow: var(--shadow);

  &:hover {
    ${Link}::after {
      opacity: 0.7;
    }

    ${Link}::before > svg {
      color: var(--primary-color);
    }

    ${Image} {
      filter: brightness(100%);
    }
  }
`

const Details = styled.div`
	padding: 1.5rem;
`

const Type = styled.p`
  font-size: 0.875rem;
	font-weight: 600;
	text-transform: uppercase;
	color: var(--gray);
`

const Description = styled.p`
  color: var(--gray);
	letter-spacing: -0.3px;
`

export { Wrapper, Image, Details, Type, Link, Description }
