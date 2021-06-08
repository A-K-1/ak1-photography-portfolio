import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const TestimonialCardWrapper = styled.div`
  background: #fff;
  color: #000;
  font-size: 36px;
  line-height: 100px;
  position: relative;
  text-align: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 5px;
  margin: 10px;
  padding: 25px;
`

const TestimonialIcon = styled.img`
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 50%;
  margin: -76px auto 0;
`

const TestimonialText = styled.p`
  color: #727480;
  font-style: italic;
  font-size: 1.25rem;
  line-height: normal;
  font-family: Helvetica Neue, Helvetica, Roboto, sans-serif;
`

const TestimonialName = styled.p`
  color: #000;
  font-size: 1.5rem;
  font-family: Helvetica Neue, Helvetica, Roboto, sans-serif;
  line-height: 30px;
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
