import React from 'react'
import styled from 'styled-components'
import { font } from 'styled-theme'
import { PortfolioCard, Heading } from 'components'
import Slider from 'react-slick'

const TestimonialsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  justify-content: end;
  width: inherit;
  align-items: center;
  background: #fff;
  padding-bottom: 70px;
  height: 1000px;
`

const TestimonialsWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  grid-gap: 16px;
  padding: 0 50px;
  width: 73vw;

  @media screen and (max-width: 1000px) {
  }

  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`

const TestimonialCardWrapper = styled.div`
  color: #fff;
  font-size: 36px;
  line-height: 100px;
  position: relative;
  text-align: center;
`

const TestimonialCard = styled.div`
  background: #fff;
  color: #000;
  font-size: 36px;
  line-height: 100px;
  position: relative;
  text-align: center;
  border: 1px solid black;
  margin: 10px;
`

const StyledSlider = styled(Slider)`
  width: inherit;
  display: flex;
`

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1224,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 900,
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
          <TestimonialCardWrapper>
            <TestimonialCard>
              <h1>1</h1>
            </TestimonialCard>
          </TestimonialCardWrapper>
          <TestimonialCardWrapper>
            <TestimonialCard>
              <h1>2</h1>
            </TestimonialCard>
          </TestimonialCardWrapper>
          <TestimonialCardWrapper>
            <TestimonialCard>
              <h1>3</h1>
            </TestimonialCard>
          </TestimonialCardWrapper>
          <TestimonialCardWrapper>
            <TestimonialCard>
              <h1>4</h1>
            </TestimonialCard>
          </TestimonialCardWrapper>
          <TestimonialCardWrapper>
            <TestimonialCard>
              <h1>5</h1>
            </TestimonialCard>
          </TestimonialCardWrapper>
          <TestimonialCardWrapper>
            <TestimonialCard>
              <h1>6</h1>
            </TestimonialCard>
          </TestimonialCardWrapper>
          <TestimonialCardWrapper>
            <TestimonialCard>
              <h1>7</h1>
            </TestimonialCard>
          </TestimonialCardWrapper>
          <TestimonialCardWrapper>
            <TestimonialCard>
              <h1>8</h1>
            </TestimonialCard>
          </TestimonialCardWrapper>
        </StyledSlider>
      </TestimonialsWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials
