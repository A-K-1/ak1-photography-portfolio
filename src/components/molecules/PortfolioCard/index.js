import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const PortfolioCardWrapper = styled.div`
  background: transparent;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 250px;
  width: 375px;
  transition: all 0.2s ease-in-out;
  margin: 10px 10px;

  @media screen and (min-width: 1646px) {
    height: 300px;
    width: 450px;
  }

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`

const PortfolioCardIcon = styled.img`
  height: inherit;
  width: inherit;
  border-radius: 5px;
`

const PortfolioCardHeader = styled.h2`
  font-size: 2rem;
  font-family: ${font('primary')};
  color: #fff;
  position: absolute;
  bottom: 0;
  margin-bottom: 15px;
`

const PortfolioCard = ({ header, image }) => {
  return (
    <PortfolioCardWrapper>
      <PortfolioCardIcon src={image} />
      <PortfolioCardHeader>{header}</PortfolioCardHeader>
    </PortfolioCardWrapper>
  )
}

PortfolioCard.propTypes = {}

PortfolioCard.defaultProps = {}

export default PortfolioCard
