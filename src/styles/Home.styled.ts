import NextLink from 'next/link'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 100vh;
  z-index: 3;
`

const Heading = styled.h1`
  font-size: var(--project-desc);
  color: #ffffff;
	filter: drop-shadow(0 0 0.3rem #ffffff70);
`

const SubHeading = styled.h2`
  font-size: var(--contact-title);
  letter-spacing: -0.1rem;
  background: var(--gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &::selection {
    -webkit-text-fill-color: #000000;
  }
`

const Links = styled.div`
	padding: 0.5rem 1rem;
  display: inline-flex;
  justify-content: center;
  gap: 1rem;
  border-radius: 2rem;
	background: rgb(var(--bg-primary-RGB));
`

const Link = styled(NextLink)`
  line-height: 0;

  & > svg {
    width: 32px;
    height: 32px;
    color: var(--black);
    transform: scale(1);
    transition: color 0.3s, transform 0.3s;

    &:hover {
      color: var(--secondary-color);
	    transform: scale(1.2);
    }
  }
`

export { Section, Heading, SubHeading, Links, Link }