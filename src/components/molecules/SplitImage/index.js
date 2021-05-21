import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  background-color: #fff;
  display: flex;
  height: inherit;
`

const HeroLeftImg = styled.div`
  width: 50%;
  background-image: url(${(props) => props.background && props.background});
  background-size: contain;
  background-repeat: no-repeat;
`

const HeroRightImg = styled.div`
  width: 50%;
  background-image: url(${(props) => props.background && props.background});
  background-size: contain;
  background-repeat: no-repeat;
`

const SplitImageVertical = ({ leftImage, rightImage }) => {
  return (
    <Wrapper>
      <HeroLeftImg background={leftImage} />
      <HeroRightImg background={rightImage} />
    </Wrapper>
  )
}

SplitImageVertical.propTypes = {}

export default SplitImageVertical
