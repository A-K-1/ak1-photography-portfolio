import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  height: inherit;
  flex-direction: ${(props) => (props.horizontal ? 'column' : 'row')};
`

const HeroLeftImg = styled.div`
  width: ${(props) => (props.horizontal ? '100%' : '50%')};
  height: ${(props) => (props.horizontal ? '50%' : 'unset')}
  background-image: url(${(props) => props.background && props.background});
  background-size: ${(props) => (props.horizontal ? 'cover' : 'contain')}
  background-repeat: no-repeat;
`

const HeroRightImg = styled.div`
  width: ${(props) => (props.horizontal ? '100%' : '50%')};
  height: ${(props) => (props.horizontal ? '50%' : 'unset')}
  background-image: url(${(props) => props.background && props.background});
  background-size: ${(props) => (props.horizontal ? 'cover' : 'contain')}
  background-repeat: no-repeat;
`

const SplitImageVertical = ({ leftImage, rightImage, horizontal }) => {
  return (
    <Wrapper horizontal={horizontal}>
      <HeroLeftImg background={leftImage} horizontal={horizontal} />
      <HeroRightImg background={rightImage} horizontal={horizontal} />
    </Wrapper>
  )
}

SplitImageVertical.propTypes = {}

SplitImageVertical.defaultProps = {
  horizontal: false,
}

export default SplitImageVertical
