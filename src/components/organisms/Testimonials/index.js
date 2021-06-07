import React from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'
import { PortfolioCard, Heading } from 'components'
import Slider from 'react-slick'

const TestimonialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: inherit;
  align-items: center;
  background: #fff;
  padding-bottom: 70px;
`

const TestimonialsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
  padding: 0 50px;
  height: 1000px;
  width: 1000px !important;

  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`

const TestimonialCard = styled.div`
  background-color: red;
  border: 1px solid black;
  width: 400px;
`

const StyledSlider = styled(Slider)`
  width: inherit;
`

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const Testimonials = () => {
  return (
    <TestimonialsContainer id="testimonials">
      <Heading colour="#000">Testimonials</Heading>
      <TestimonialsWrapper>
        <StyledSlider {...settings}>
          <TestimonialCard>
            <h1>1</h1>
          </TestimonialCard>
          <TestimonialCard>
            <h1>1</h1>
          </TestimonialCard>
          <TestimonialCard>
            <h1>1</h1>
          </TestimonialCard>
          <TestimonialCard>
            <h1>1</h1>
          </TestimonialCard>
          <TestimonialCard>
            <h1>1</h1>
          </TestimonialCard>
          <TestimonialCard>
            <h1>1</h1>
          </TestimonialCard>
          <TestimonialCard>
            <h1>1</h1>
          </TestimonialCard>
          <TestimonialCard>
            <h1>1</h1>
          </TestimonialCard>
        </StyledSlider>
      </TestimonialsWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials
