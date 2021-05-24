import React from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'

import { PortfolioCard, Heading } from 'components'

const InquiriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: inherit;
  align-items: center;
  background: #fff;
  padding-bottom: 70px;
`

const InquiriesWrapper = styled.div`
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

const Inquiries = () => {
  return (
    <InquiriesContainer id="inquiries">
      <Heading colour="#000">Inquiries</Heading>
      <InquiriesWrapper></InquiriesWrapper>
    </InquiriesContainer>
  )
}

export default Inquiries
