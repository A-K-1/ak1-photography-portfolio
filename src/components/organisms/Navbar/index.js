import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'

import { IconLink, PrimaryNavigation } from 'components'

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  > :not(:first-child) {
    margin-left: 1rem;
  }
`

const Navbar = (props) => {
  return (
    <InnerWrapper>
      <IconLink to="/" icon="arc" navLink height={100} />
      <PrimaryNavigation reverse />
    </InnerWrapper>
  )
}

export default Navbar
