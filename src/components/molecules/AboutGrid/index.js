import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { Heading, TextCard, Image } from 'components'
import data from '../../data/default'

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: inherit;
  align-items: center;
  background: #010606;
`

const AboutBodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-evenly;
  width: inherit;
  align-items: center;
  background: #010606;
`

const MobilePadding = styled.div`
  @media screen and (max-width: 1058px) {
    margin: 30px;
  }
`

const AboutGrid = () => {
  return (
    <AboutWrapper id="aboutMe">
      <Heading>About Me</Heading>
      <AboutBodyWrapper>
        <MobilePadding>
          <TextCard
            boxColour="transparent"
            textColour={(props) => props.theme.palette.white}
          >
            {data.aboutMe.body}
          </TextCard>
        </MobilePadding>
        <Image image={data.aboutMe.image} width="30%" radius="5px" />
      </AboutBodyWrapper>
    </AboutWrapper>
  )
}

AboutGrid.propTypes = {}

AboutGrid.defaultProps = {}

export default AboutGrid
