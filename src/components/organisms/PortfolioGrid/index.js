import React from 'react'
import styled from 'styled-components'
import data from '../../data/default'

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
  padding: 0 25px;

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`

const Portfolio = () => {
  return (
    <PortfolioContainer id="portfolio">
      <Heading>Portfolio</Heading>
      <PortfolioWrapper>
        {data.portfolio.map((portfolioItem, index) => {
          return (
            <PortfolioCard
              header={portfolioItem.header}
              image={portfolioItem.image}
              key={'portfolioCard' + index}
            />
          )
        })}
      </PortfolioWrapper>
    </PortfolioContainer>
  )
}

export default Portfolio
