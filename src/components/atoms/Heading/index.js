import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'

const textColour = ({ colour }) => (colour ? colour : '#fff')

const styles = css`
  font-size: 2.5rem;
  color: ${textColour}
  margin: 64px 0;
  font-family: ${font('primary')};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

const Heading = styled(
  ({ level, colour, children, reverse, palette, theme, ...props }) =>
    React.createElement(`h${level}`, props, children),
)`
  ${styles}
`

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Heading.defaultProps = {
  level: 1,
  palette: 'grayscale',
}

export default Heading
