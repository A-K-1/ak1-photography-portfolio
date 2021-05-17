import React from 'react'
import styled from 'styled-components'
import { size } from 'styled-theme'

import { IconLink, PrimaryNavigation } from 'components'

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${size('maxWidth')};
  > :not(:first-child) {
    margin-left: 1rem;
  }
`

const Header = (props) => {
  return (
    <InnerWrapper>
      <IconLink to="/" icon="arc" height={100} />
      <PrimaryNavigation reverse />
    </InnerWrapper>
  )
}

export default Header
