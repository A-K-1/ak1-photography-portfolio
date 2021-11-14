import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { Heading, TextCard, Image } from 'components'
import data from '../../data/default'

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.palette.black};
  padding-bottom: 20px;
`

const AboutBodyWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  justify-content: space-evenly;
  width: inherit;
  align-items: center;
  background: ${(props) => props.theme.palette.black};
`

const MobilePadding = styled.div`
  @media screen and (max-width: 1058px) {
    margin: 30px;
  }
`

const AboutGrid = () => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth)

  const handleResize = (e) => {
    setPageWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return function cleanup() {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <AboutWrapper id="aboutMe">
      <Heading>About Me</Heading>
      <AboutBodyWrapper data-aos="fade-right">
        <MobilePadding>
          <TextCard
            boxColour="transparent"
            textColour={(props) => props.theme.palette.white}
          >
            {data.aboutMe.body}
          </TextCard>
        </MobilePadding>
        <Image
          image={data.aboutMe.image}
          width={pageWidth > 768 ? '25%' : '50%'}
          radius="5px"
        />
      </AboutBodyWrapper>
    </AboutWrapper>
  )
}

AboutGrid.propTypes = {}

AboutGrid.defaultProps = {}

export default AboutGrid
