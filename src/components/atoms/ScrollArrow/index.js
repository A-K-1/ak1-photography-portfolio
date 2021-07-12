import React from 'react'
import styled, { keyframes } from 'styled-components'
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll'

const StyledArrowContainer = styled(LinkScroll)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: 20%;
  cursor: pointer;
`

const ArrowAnimation = keyframes`
25% {
  opacity: 1;
	}
 33.3% {
  opacity: 1;
  transform: translateY(2.28rem);
 }
 66.6% {
  opacity: 1;
  transform: translateY(3.12rem);
 }
 100% {
  opacity: 0;
  transform: translateY(4.8rem) scale(0.5);
 }

`

const StyledChevron = styled.div`
  position: absolute;
  width: 40px;
  height: 6px;
  opacity: 0;
  transform: scale(0.3);
  animation: ${ArrowAnimation} 3s ease-out infinite;

  &:first-child {
    animation: ${ArrowAnimation} 3s ease-out 1s infinite;
  }
  &:nth-child(2) {
    animation: ${ArrowAnimation} 3s ease-out 2s infinite;
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    height: 100%;
    width: 50%;
    background: ${(props) => props.theme.palette.white};
  }
  &:before {
    left: 0;
    transform: skewY(40deg);
  }

  &::after {
    right: 0;
    width: 50%;
    transform: skewY(-40deg);
  }
`
const ScrollArrow = ({ scrollTo }) => {
  return (
    <StyledArrowContainer
      to={scrollTo}
      smooth={true}
      duration={600}
      spy={true}
      exact="true"
      offset={-60}
    >
      <StyledChevron />
      <StyledChevron />
      <StyledChevron />
    </StyledArrowContainer>
  )
}

ScrollArrow.propTypes = {}

export default ScrollArrow
