import React, { useState } from 'react'
import styled from 'styled-components'

import {
  Navbar,
  Footer,
  HeroSection,
  PortfolioGrid,
  Testimonials,
  AboutGrid,
  Inquiries,
  SocialGrid,
  Sidebar,
} from 'components'

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  width: fit-content;
  font-family: Helvetica Neue, Helvetica, Roboto, sans-serif;
`
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Wrapper>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <PortfolioGrid />
      <Testimonials />
      <AboutGrid />
      <Inquiries />
      <SocialGrid />
      <Footer />
    </Wrapper>
  )
}

export default HomePage
