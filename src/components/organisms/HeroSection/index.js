import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { SplitImage, Image } from 'components'

const Wrapper = styled.div`
  background-color: #fff;
  height: 68vw;
  width: 100%;
  box-sizing: border-box;
  margin-top: 70px;

  @media screen and (max-width: 768px) {
    height: fit-content;
    margin-top: unset;
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
  @media screen and (max-width: 768px) {
    display: block;
  }
`

const HeroSection = (props) => {
  const leftImage = require('../../../../public/portraitHero.jpg')
  const rightImage = require('../../../../public/portraitHero2.jpg')
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
