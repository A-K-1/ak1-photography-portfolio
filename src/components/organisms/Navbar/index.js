import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'
import { animateScroll as scroll } from 'react-scroll'

import { IconLink, PrimaryNavigation, Image } from 'components'

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 20px;
  background-color: #000;
  > :not(:first-child) {
    margin-left: 1rem;
  }
`

const LogoWrapper = styled.div`
  cursor: pointer;
`

const Navbar = (props) => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  const logo = require('../../../../public/whiteLogo.png')
  return (
    <InnerWrapper>
      <LogoWrapper onClick={toggleHome}>
        <Image image={logo} height="60px" width="auto" />
      </LogoWrapper>
      <PrimaryNavigation reverse />
    </InnerWrapper>
  )
}

export default Navbar
