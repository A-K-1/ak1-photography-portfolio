import React from 'react'
import styled from 'styled-components'
import data from '../../data/default'

import { SplitImage, Image } from 'components'

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.palette.white};
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
  return (
    <Wrapper {...props}>
      <SplitImageDesktop>
        <SplitImage
          leftImage={data.hero.leftImage}
          rightImage={data.hero.rightImage}
        />
      </SplitImageDesktop>
      <SplitImageMobile>
        <Image image={data.hero.mobileImage} height="60%" />
      </SplitImageMobile>
    </Wrapper>
  )
}

export default HeroSection
