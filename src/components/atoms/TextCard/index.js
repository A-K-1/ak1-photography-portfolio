import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const TextCardWrapper = styled.div`
  background: ${(props) => (props.boxColour ? props.boxColour : '#fff')};
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  padding: 20px;
  min-width: 300px;
  max-width: 700px;
  min-height: 600px;
`

const CardText = styled.p`
  font-size: 1.5rem;
  font-family: ${font('primary')};
  color: ${(props) => (props.textColour ? props.textColour : '#000')};
`

const TextCard = ({ textColour, boxColour, children }) => {
  return (
    <TextCardWrapper boxColour={boxColour}>
      <CardText textColour={textColour}>{children}</CardText>
    </TextCardWrapper>
  )
}

TextCard.propTypes = {}

TextCard.defaultProps = {}

export default TextCard
