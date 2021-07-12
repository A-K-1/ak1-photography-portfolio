import React from 'react'
import styled from 'styled-components'
import data from '../../data/default'

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
  return (
    <Wrapper {...props}>
      <Credits>{data.footer.text}</Credits>
      <ImageContainer>
        <ImageLink
          link={data.links.instagramLink}
          image={data.links.instagramLogo}
          height="20px"
          width="auto"
        />
      </ImageContainer>
    </Wrapper>
  )
}

export default Footer
