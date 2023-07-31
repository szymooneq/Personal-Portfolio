import styled from 'styled-components'
import { rotate } from '@/lib/theme/keyframes'

const Logo = styled.span`
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

  & > span {
    font-size: 1.6rem;
    font-weight: 700;
    color: #ffffff;
    filter: drop-shadow(0 0 0.3rem #00000070);
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
    animation: 6s ${rotate} linear infinite;
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
`

export { Logo }