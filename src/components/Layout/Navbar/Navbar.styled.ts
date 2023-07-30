import Link from 'next/link'
import styled, { css } from 'styled-components'

const Logo = styled.div`
  display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 0.75rem;
	box-shadow: 0px 2px 8px -1px #0000001a;
	overflow: hidden;
	cursor: pointer;
	z-index: 2;
	transform: translateZ(0);
	transition: filter 0.3s;

  &:hover {
	  filter: drop-shadow(0 0 0.3rem rgba(var(--text-RGB), 0.439));
  }

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      rgba(var(--text-RGB), 0.502),
      rgba(var(--text-RGB), 0.251),
      rgba(var(--text-RGB), 0.188),
      rgba(var(--text-RGB), 0.125),
      rgba(var(--text-RGB), 0.063),
      rgba(var(--text-RGB), 0.063),
      rgba(var(--text-RGB), 0.502)
    );
    z-index: -1;
    animation: 6s borderRotation linear infinite;
  }

  &::after {
    content: '';
    padding: 1px;
    position: absolute;
    inset: 0;
    border-radius: 0.75rem;
    background: var(--gradient);
    background-clip: content-box;
    z-index: -1;
  }

  & > span {
    font-size: 1.6rem;
    font-weight: 700;
    color: #ffffff;
    filter: drop-shadow(0 0 0.3rem #00000070);
  }
`

const Navbar = styled.nav`
  position: relative;
`

const Desktop = styled.div`
  padding: 0.6rem 1.5rem;
	display: inline-flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	left: 0;
	right: 0;
	width: 100%;
	transform: translateY(0%);
	z-index: 1;

  ${Menu} {
    display: none;
  }

  ${props => props.isOtherPage && css`
    top: 0;
    border-bottom: 1px solid var(--bg-secondary);
    background-color: rgba(var(--bg-primary-RGB), 0.8);
    backdrop-filter: saturate(180%) blur(5px);
    animation: slideDown 0.4s ease-in-out forwards;
  `}
  
  ${props => props.isHomePage && css`
    bottom: 0;
    animation: slideUp 0.4s ease-in-out forwards;

    ${Logo}::before {
      background: conic-gradient(
        rgba(255, 255, 255, 0.502),
        rgba(255, 255, 255, 0.251),
        rgba(255, 255, 255, 0.188),
        rgba(255, 255, 255, 0.125),
        rgba(255, 255, 255, 0.063),
        rgba(255, 255, 255, 0.063),
        rgba(255, 255, 255, 0.502)
      );
    }

    ${Menu} {
	    color: #ffffff;
    }

    ${MenuItem} {
	    color: #ffffff;
    }

    ${Logo}:hover,
    ${ContactLink}:hover,
    ${MenuItem}:hover {
      filter: drop-shadow(0 0 0.3rem rgba(255, 255, 255, 0.439));
    }
  `}
`

const Menu = styled.ul`
  display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3rem;
	font-size: 1.25rem;
	line-height: 1.5rem;
	list-style-type: none;
`

const MenuItem = styled.li`
	transition: filter 0.1s;

  &:hover {
	  filter: drop-shadow(0 0 0.3rem rgba(var(--text-RGB), 0.439));
  }

  ${props => props.isActive && css`
    font-weight: 700;
    color: var(--primary-color);
    pointer-events: none;
  `}
`

const ContactLink = styled(Link)`
  padding: 0.5rem 1rem;
	display: block;
	width: max-content;
	border-radius: 2rem;
	background-color: var(--bg-secondary);
	box-shadow: var(--shadow);
	transition: filter 0.3s;

  &:hover {
	  filter: drop-shadow(0 0 0.3rem rgba(var(--text-RGB), 0.439));
  }

  ${props => props.isActive && css`
    color: #ffffff;
    background: var(--primary-color);
    pointer-events: none;
  `}
`

const ButtonWrapper = styled.div`
  display: none;
`

const Burger = styled.button`
  display: flex;
	flex-direction: column;
	justify-content: space-around;
	position: relative;
	height: 2.5rem;
	width: 2.5rem;
	border: none;
	background: transparent;
	cursor: pointer;
	z-index: 60;

  & > span {
    width: 100%;
    height: 0.2rem;
    border-radius: 1rem;
    background: var(--gradient);
    transition: background 0.5s, transform 0.5s;
  }

  ${props => props.isExpanded && css`
    & > span {
	    background: var(--black);

      &:nth-child(1) {
	      transform: rotate(-45deg) translateY(0.5rem) translateX(-0.5rem);
      }

      &:nth-child(2) {
	      transform: scaleX(0);
      }

      &:nth-child(3) {
	      transform: rotate(45deg) translateY(-0.6rem) translateX(-0.6rem);
      }
    }
  `}
`

const BlackLayer = styled.div`
  position: fixed;
	inset: 0;
	width: 100vw;
	height: 100vh;
	background: transparent;
	visibility: hidden;
	pointer-events: none;
	z-index: 60;

  ${props => props.isActive && css`
    visibility: visible;
	  pointer-events: all;
  `}
`

const MobileMenu = styled.div`
  display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: fixed;
	left: 0;
	top: 0;
	height: 100vh;
	width: calc(100vw - 30%);
	background-color: rgba(var(--bg-primary-RGB), 0.5);
	backdrop-filter: blur(15px);
	transform: translateX(-100%);
	z-index: 100;
	transition: transform 0.3s;

  ${props => props.isExpanded && css`
	  transform: translateX(0);
  `}

  ${Logo} {
    position: absolute;
    top: 10px;
    left: 25px;
    cursor: default;
  }
`

const Settings = styled.div``

const Mobile = styled.div`
  ${ContactLink} {
    margin-top: 3rem;
  }

  ${Settings} {
    display: inline-flex;
    gap: 0.5rem;
    position: absolute;
    bottom: 100px;
  }
`