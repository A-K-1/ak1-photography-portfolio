import React from 'react'
import styled from 'styled-components'
import data from '../../data/default'

import { SplitImage, Image, ScrollArrow } from 'components'

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.palette.white};
  height: 68vw;
  width: 100%;
  box-sizing: border-box;
  margin-top: 70px;

  @media screen and (max-width: 768px) {
    height: 100vh;
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
    height: 100vh;
    display: block;
    background-repeat: no-repeat;
    background: url(${({ image }) => image});
    background-size: cover;
    object-fit: none;
    object-position: 50% 50%;
    background-position: center;
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
      <SplitImageMobile image={data.hero.mobileImageNarrow}>
        {/* <Image image={data.hero.mobileImage} height="60%" /> */}
      </SplitImageMobile>

      <ScrollArrow scrollTo="portfolio" />
    </Wrapper>
  )
}

export default HeroSection
