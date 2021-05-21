import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const StyledImage = styled.div`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  background-image: url(${(props) => props.image && props.image});
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (max-width: 438px) {
    background-size: contain;
  }
`

const Image = ({ image, width, height }) => {
  return <StyledImage image={image} width={width} height={height} />
}

Image.propTypes = {}

export default Image
