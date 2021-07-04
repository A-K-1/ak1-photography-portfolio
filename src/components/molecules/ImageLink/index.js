import React from 'react'
import { Image } from 'components'
import styled from 'styled-components'

const StyledLink = styled.a`
  cursor = pointer;
`

const ImageLink = ({ link, ...props }) => {
  return (
    <StyledLink href={link} target="_blank">
      <Image {...props} />
    </StyledLink>
  )
}

ImageLink.propTypes = {}

export default ImageLink
