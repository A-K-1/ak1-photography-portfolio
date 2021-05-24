import React from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'

import { PortfolioCard } from 'components'

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
    padding: 0 20px;
  }
`

const PortfolioHeader = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin: 64px 0;
  font-family: ${font('primary')};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

const Services = () => {
  console.log('YOYOYO', process.env)
  console.log(process.env.REACT_APP_CLIENT_ID) //printing it to console
  console.log(process.env.REACT_APP_KEY) //printing it to console
  console.log('node', process.env.NODE_ENV)
  return (
    <PortfolioContainer id="portfolio">
      <PortfolioHeader>Portfolio</PortfolioHeader>
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

export default Services
