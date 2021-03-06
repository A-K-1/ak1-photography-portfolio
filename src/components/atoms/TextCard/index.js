import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const TextCardWrapper = styled.div`
  background: ${(props) =>
    props.boxColour ? props.boxColour : (props) => props.theme.palette.white};
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;
  padding: 10px;
  min-width: 300px;
  max-width: 700px;
  min-height: 400px;
`

const CardText = styled.p`
  white-space: pre-line;
  font-size: 1.5rem;
  font-family: ${font('primary')};
  color: ${(props) => (props.textColour ? props.textColour : '#000')};

  @media screen and (max-width: 768px) {
    font-size: 1.25rem;
  }
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
