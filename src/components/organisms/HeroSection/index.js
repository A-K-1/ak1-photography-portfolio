import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { SplitImage, Image } from 'components'

const Wrapper = styled.div`
  background-color: #fff;
  height: 100vw;

  @media screen and (max-width: 768px) {
    height: 1200px;
  }
`

const SplitImageDesktop = styled.div`
  display: block;
  height: inherit;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

const SplitImageMobile = styled.div`
  display: none;
  height: inherit;
  @media screen and (max-width: 768px) {
    display: block;
  }
`

const HeroSection = (props) => {
  const leftImage = require('../../../../public/portraitHero.jpg')
  const rightImage = require('../../../../public/landscapeHero.jpg')
  const mobileImage = require('../../../../public/portraitHeroMobile.jpg')
  return (
    <Wrapper {...props}>
      <SplitImageDesktop>
        <SplitImage leftImage={leftImage} rightImage={rightImage} />
      </SplitImageDesktop>
      <SplitImageMobile>
        <Image image={mobileImage} height="60%" />
      </SplitImageMobile>
    </Wrapper>
  )
}

export default HeroSection
