import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.palette.white};
  display: flex;
  height: inherit;
  flex-direction: ${(props) => (props.horizontal ? 'column' : 'row')};
`

const HeroLeftImg = styled.img`
  width: ${(props) => (props.horizontal ? '100%' : '50%')};
  height: ${(props) => (props.horizontal ? '50%' : 'unset')};
`

const HeroRightImg = styled.img`
  width: ${(props) => (props.horizontal ? '100%' : '50%')};
  height: ${(props) => (props.horizontal ? '50%' : 'unset')};
`

const SplitImage = ({ leftImage, rightImage, horizontal }) => {
  return (
    <Wrapper horizontal={horizontal}>
      <HeroLeftImg horizontal={horizontal} src={leftImage} />
      <HeroRightImg horizontal={horizontal} src={rightImage} />
    </Wrapper>
  )
}

SplitImage.propTypes = {}

SplitImage.defaultProps = {
  horizontal: false,
}

export default SplitImage
