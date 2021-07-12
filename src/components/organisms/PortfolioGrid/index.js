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
          image={require('../../../../public/portfolio/landscapePortfolio.jpg')}
        />
        <PortfolioCard
          header={'Portraits'}
          image={require('../../../../public/portfolio/portraitPortfolio.jpg')}
        />
        <PortfolioCard
          header={'Cityscapes'}
          image={require('../../../../public/portfolio/cityscapePortfolio.jpg')}
        />
        <PortfolioCard
          header={'Events'}
          image={require('../../../../public/portfolio/eventsPortfolio.jpg')}
        />
        <PortfolioCard
          header={'Animals'}
          image={require('../../../../public/portfolio/animalsPortfolio.jpg')}
        />
        <PortfolioCard
          header={'Edits'}
          image={require('../../../../public/portfolio/editsPortfolio.jpg')}
        />
      </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio
