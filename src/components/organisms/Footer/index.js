import React from 'react'
import styled from 'styled-components'

import { Paragraph, ImageLink } from 'components'

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.palette.black};
  padding: 2rem;
  margin-top: auto;
  z-index: 999;
`

const Credits = styled(Paragraph)`
  vertical-align: center;
  text-align: center;
  margin: 0;
  font-size: 1.25rem;
  color: ${(props) => props.theme.palette.white};
`

const ImageContainer = styled.div`
  margin-top: 20px;
  justify-content: center;
  display: flex;
`

const Footer = (props) => {
  const instagram = require('../../../../public/instagramWhite.png')
  const imageLink = 'https://www.instagram.com/ak1photography/'
  return (
    <Wrapper {...props}>
      <Credits>AK1Photography 2021</Credits>
      <ImageContainer>
        <ImageLink
          link={imageLink}
          image={instagram}
          height="20px"
          width="auto"
        />
      </ImageContainer>
    </Wrapper>
  )
}

export default Footer
