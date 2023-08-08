import NextLink from 'next/link'
import styled from 'styled-components'
import { screen } from '@/lib/theme/breakpoints'
import type { StyledLinkProps, StyledMenuProps } from './Navbar.types'

// TODO: theme
const Navbar = styled.nav``

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

const Settings = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media only screen and (${screen.mdDown}) {
    padding: 4rem;
    flex-direction: column;
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
  z-index: 5;

  @media only screen and (${screen.mdDown}) {
    & > ${Links},
    & > ${Settings} {
      display: none;
    }
  }
`

const Dropdown = styled.div<StyledMenuProps>`
  @media only screen and (${screen.mdDown}) {
    display: grid;
    grid-template-rows: ${({ isExpanded }) => isExpanded ? '1fr' : '0fr'};
    position: fixed;
    top: 5rem;
    left: 0;
    right: 0;
    min-height: 1px;
    background-color: rgba(var(--menu-BG), 0.7);
    backdrop-filter: blur(24px);
    visibility: ${({ isExpanded }) => isExpanded ? 'visible' : 'hidden'};
    transition: grid-template-rows 0.5s, visibility 0.5s;
    z-index: 4;
  }

  @media only screen and (${screen.md}) {
    display: none;
  }
`

const Menu = styled.div`
  @media only screen and (${screen.mdDown}) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    overflow: hidden;
  }

  @media only screen and (${screen.md}) {
    display: none;
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

  &:hover {
	  filter: drop-shadow(0 0 0.3rem rgba(var(--text-RGB), 0.44));
  }
`

export { Navbar, Wrapper, Dropdown, Menu, Links, Link, FeaturedLink, Settings }