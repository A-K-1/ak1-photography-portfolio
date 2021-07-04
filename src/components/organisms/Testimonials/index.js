import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { TestimonialCard, Heading } from 'components'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  DotGroup,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background: #fff;
  padding-bottom: 40px;
  height: fit-content;
  width: auto;
`

const TestimonialsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
  width: 80vw;
  min-width: 400px;
  overflow: hidden;

  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 768px) {
    width: 90vw;
  }
`

const StyledTestimonialSlider = styled(CarouselProvider)`
  width: inherit;
`

const StyledSlider = styled(Slider)`
  padding-top: 12px;
  min-height: 530px;
  max-height: 530px;
`

const StyledDotGroup = styled(DotGroup)`
  display: flex;
  justify-content: center;

  & button {
    height: 15px;
    border-radius: 999px;
    border: 1px solid;
    margin: 0 5px;
  }
`

const Testimonials = () => {
  const testImage = require('../../../../public/portraitHero.jpg')

  const [pageWidth, setPageWidth] = useState(window.innerWidth)

  const handleResize = (e) => {
    setPageWidth(window.innerWidth)
  }

  const calculateVisibleSlides = () => {
    if (pageWidth < 768) return 1
    else if (pageWidth < 1200) return 2
    else return 3
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return function cleanup() {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <TestimonialsContainer id="testimonials">
      <Heading colour="#000">Testimonials</Heading>
      <TestimonialsWrapper>
        <StyledTestimonialSlider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={5}
          visibleSlides={calculateVisibleSlides()}
        >
          <StyledSlider>
            <Slide index={0}>
              <TestimonialCard
                testimonial="t ut labore ostrud  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                image={testImage}
                name="Arron Kukadia1"
              />
            </Slide>
            <Slide index={1}>
              <TestimonialCard
                testimonial="t ut labore ostrud  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                image={testImage}
                name="Arron Kukadia2"
              />
            </Slide>
            <Slide index={2}>
              <TestimonialCard
                testimonial="t ut labore ostrud  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                image={testImage}
                name="Arron Kukadia3"
              />
            </Slide>
            <Slide index={3}>
              <TestimonialCard
                testimonial="t ut labore ostrud  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                image={testImage}
                name="Arron Kukadia4"
              />
            </Slide>
            <Slide index={4}>
              <TestimonialCard
                testimonial="t ut labore ostrud  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                image={testImage}
                name="Arron Kukadia5"
              />
            </Slide>
          </StyledSlider>
          <StyledDotGroup />
        </StyledTestimonialSlider>
      </TestimonialsWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials
