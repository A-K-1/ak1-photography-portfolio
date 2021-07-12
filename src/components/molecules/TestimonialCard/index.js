import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const TestimonialCardWrapper = styled.div`
  background: ${(props) => props.theme.palette.white};
  color: #000;
  font-size: 36px;
  line-height: 100px;
  position: relative;
  text-align: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  margin: 10px;
  padding: 0 25px 25px;
  height: 410px;
`

const TestimonialIcon = styled.img`
  height: 124px;
  width: 124px;
  object-fit: cover;
  border-radius: 50%;
  margin: -60px auto 0;
`

const TestimonialText = styled.p`
  color: #727480;
  font-style: italic;
  font-size: 1.25rem;
  line-height: normal;
  margin-top: 0;
  margin-bottom: 40px;
  height: 270px;
  overflow: scroll;
  white-space: pre-line;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  :: -webkit-scrollbar {
    width: 0;
  }
`

const TestimonialName = styled.p`
  color: #000;
  font-size: 1.375rem;
  line-height: 10px;
  position: absolute;
  bottom: 7px;
  left: 0;
  right: 0;
  text-align: center;
`

const TestimonialCard = ({ testimonial, image, name }) => {
  return (
    <TestimonialCardWrapper>
      <TestimonialIcon src={image} />
      <TestimonialText>{testimonial}</TestimonialText>
      <TestimonialName>{name}</TestimonialName>
    </TestimonialCardWrapper>
  )
}

TestimonialCard.propTypes = {}

TestimonialCard.defaultProps = {}

export default TestimonialCard
