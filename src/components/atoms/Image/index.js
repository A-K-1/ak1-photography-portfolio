import React from 'react'
import styled from 'styled-components'

const StyledImage = styled.img`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '100%')};
  margin-bottom: -5px;
  border-radius: ${(props) => (props.radius ? props.radius : '0')};
`

const Image = ({ image, width, height, radius }) => {
  return (
    <StyledImage width={width} height={height} src={image} radius={radius} />
  )
}

Image.propTypes = {}

export default Image
