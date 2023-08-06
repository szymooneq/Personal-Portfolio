import NextLink from 'next/link'
import styled from 'styled-components'
import { screen } from '@/lib/theme/breakpoints'
import type { StyledLinkProps, StyledMenuProps } from './Navbar.types'

const Navbar = styled.nav``

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;

  @media only screen and (${screen.mdDown}) {
    flex-direction: column;
    background-color: rgba(var(--bg-secondary), 0.7);
    backdrop-filter: blur(24px);
  }

  @media only screen and (${screen.md}) {
    flex-direction: row;
  }
`

const Wrapper = styled.div`
  padding-inline: 1.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 5rem;
  border-bottom: 1px solid var(--bg-secondary);
  background-color: rgba(var(--bg-secondary), 0.7);
  backdrop-filter: blur(16px) saturate(1.5);
  z-index: 1;

  @media only screen and (${screen.mdDown}) {
    ${Menu} {
      display: none;
    }
  }
  
`
// TODO: slide animations
const Dropdown = styled.div<StyledMenuProps>`
  @media only screen and (${screen.mdDown}) {
    display: grid;
    position: fixed;
    top: 5rem;
    left: 0;
    right: 0;
    grid-template-rows: ${({ isExpanded }) => isExpanded ? '1fr' : '0fr'};
    visibility: ${({ isExpanded }) => isExpanded ? 'visible' : 'hidden'};
    transition: grid-template-rows 0.5s, visibility 0.5s;
    z-index: 1;
    overflow: hidden;
  }

  @media only screen and (${screen.md}) {
    display: none;
  }
`

const Links = styled.ul`
  display: flex;
  gap: 1rem;
  list-style-type: none;

  @media only screen and (${screen.mdDown}) {
    margin-top: 4rem;
    flex-direction: column;
  }

  @media only screen and (${screen.md}) {
	  flex-direction: row;
  }
`

const Link = styled(NextLink)<StyledLinkProps>`
  font-size: 1.25rem;
  font-weight: ${({ isCurrent }) => isCurrent ? 700 : 400};
  color: ${({ isCurrent }) => isCurrent ? `var(--primary-color)` : `var(--black)`};
  pointer-events: ${({ isCurrent }) => isCurrent ? 'none' : 'default'};
	transition: filter 0.1s;

  &:hover,
  &:focus-visible {
	  filter: drop-shadow(0 0 0.3rem rgba(var(--text-RGB), 0.44));
  }

  &:focus-visible {
    outline: none;
  }
`

const FeaturedLink = styled(Link)<StyledLinkProps>`
  padding: 0.5rem 1rem;
	display: block;
	width: max-content;
	border-radius: 2rem;
	background-color: ${({ isCurrent }) => isCurrent ? 'var(--primary-color)' : 'var(--bg-secondary)'};
	box-shadow: var(--shadow);
	transition: filter 0.3s;
  pointer-events: ${({ isCurrent }) => isCurrent ? 'none' : 'default'};

  [data-theme="dark"] & {
    color: #ffffff;
  }

  [data-theme="light"] & {
    color: ${({ isCurrent }) => isCurrent ? '#ffffff' : '#000000'};
  }

  @media only screen and (${screen.lg}) {
    display: block;
  }

  &:hover {
	  filter: drop-shadow(0 0 0.3rem rgba(var(--text-RGB), 0.44));
  }
`

const Settings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  overflow: hidden;

  @media only screen and (${screen.mdDown}) {
    padding: 4rem;
  }

  @media only screen and (${screen.md}) {}
`

export { Navbar, Wrapper, Dropdown, Menu, Links, Link, FeaturedLink, Settings }