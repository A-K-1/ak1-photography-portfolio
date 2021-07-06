// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 100vh;
  width: fit-content;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
`

const Navbar = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`

const Hero = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin-top: -60px;
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
`

const Footer = styled.footer`
  margin-top: auto;
  z-index: 999;
`

const PageTemplate = ({ navbar, hero, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Navbar>{navbar}</Navbar>
      <Hero>{hero}</Hero>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

PageTemplate.propTypes = {
  navbar: PropTypes.node.isRequired,
  footer: PropTypes.node.isRequired,
  children: PropTypes.any,
}

export default PageTemplate
