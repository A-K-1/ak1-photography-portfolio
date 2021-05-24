import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { Heading, TextCard, Image } from 'components'

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: inherit;
  align-items: center;
  background: #010606;
  padding-bottom: 70px;
`

const AboutBodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-evenly;
  width: inherit;
  align-items: center;
  background: #010606;
  padding-bottom: 70px;
`

const MobilePadding = styled.div`
  @media screen and (max-width: 1058px) {
    margin: 30px;
  }
`

const AboutGrid = ({ header, image }) => {
  const mobileImage = require('../../../../public/portraitHero2.jpg')

  return (
    <AboutWrapper id="aboutMe">
      <Heading>About Me</Heading>
      <AboutBodyWrapper>
        <MobilePadding>
          <TextCard boxColour="transparent" textColour="#fff">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.{' '}
          </TextCard>
        </MobilePadding>
        <Image image={mobileImage} width="30%" radius="5px" />
      </AboutBodyWrapper>
    </AboutWrapper>
  )
}

AboutGrid.propTypes = {}

AboutGrid.defaultProps = {}

export default AboutGrid
