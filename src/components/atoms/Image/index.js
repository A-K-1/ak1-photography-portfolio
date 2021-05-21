import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  margin-bottom: -5px;
`

const Image = ({ image, width, height }) => {
  return <StyledImage width={width} height={height} src={image} />
}

Image.propTypes = {}

export default Image
