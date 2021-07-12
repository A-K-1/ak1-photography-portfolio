import React from 'react'
import styled from 'styled-components'
import { animateScroll as scroll } from 'react-scroll'
import { PrimaryNavigation, Image } from 'components'
import data from '../../data/default'

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px;
  background-color: #000;
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 999;

  > :not(:first-child) {
    margin-left: 1rem;
  }
`

const LogoWrapper = styled.div`
  cursor: pointer;
  margin-left: 2rem;

  @media screen and (max-width: 768px) {
    margin-left: 1rem;
  }
`

const Navbar = ({ isOpen, toggle }) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }
  return (
    <InnerWrapper>
      <LogoWrapper onClick={toggleHome}>
        <Image image={data.navBar.logo} height="60px" width="auto" />
      </LogoWrapper>
      <PrimaryNavigation isOpen={isOpen} toggle={toggle} />
    </InnerWrapper>
  )
}

export default Navbar
