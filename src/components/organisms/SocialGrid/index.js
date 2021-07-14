import React from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'

import { PortfolioCard, Heading } from 'components'

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  align-items: center;
  background: ${(props) => props.theme.palette.white};
  padding-bottom: 70px;
`

const SocialWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }

  height: 1000px;
`

const Services = () => {
  return (
    <SocialContainer id="social">
      <Heading>Social</Heading>
      <SocialWrapper></SocialWrapper>
    </SocialContainer>
  )
}

export default Services
