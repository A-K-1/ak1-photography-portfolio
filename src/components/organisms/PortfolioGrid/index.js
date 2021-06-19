import React from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'

import { PortfolioCard, Heading } from 'components'

const PortfolioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: inherit;
  align-items: center;
  background: #010606;
  padding-bottom: 70px;
`

const PortfolioWrapper = styled.div`
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
    padding: 0;
  }
`

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <Heading>Portfolio</Heading>
      <PortfolioWrapper>
        <PortfolioCard
          header={'Landscapes'}
          image={require('../../../../public/landscapePortfolio.jpg')}
        />
        <PortfolioCard
          header={'Portraits'}
          image={require('../../../../public/portraitPortfolio.jpg')}
        />
        <PortfolioCard
          header={'Cityscapes'}
          image={require('../../../../public/cityscapePortfolio.jpg')}
        />
        <PortfolioCard
          header={'Events'}
          image={require('../../../../public/eventsPortfolio.jpg')}
        />
        <PortfolioCard
          header={'Animals'}
          image={require('../../../../public/animalsPortfolio.jpg')}
        />
        <PortfolioCard
          header={'Edits'}
          image={require('../../../../public/editsPortfolio.jpg')}
        />
      </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio
