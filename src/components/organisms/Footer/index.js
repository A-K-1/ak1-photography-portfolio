import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'

import { Paragraph, Link, Icon } from 'components'

const Wrapper = styled.div`
  background-color: ${palette('grayscale', 1, true)};
  padding: 2rem;
  margin-top: auto;
  z-index: 999;
`

const Credits = styled(Paragraph)`
  vertical-align: center;
  text-align: center;
  margin: 0;
`

const Footer = (props) => {
  return (
    <Wrapper {...props}>
      <Credits>
        AK1Photography
      </Credits>
    </Wrapper>
  )
}

export default Footer
