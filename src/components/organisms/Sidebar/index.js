import React from 'react'
import styled from 'styled-components'
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll'

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  z-index: 999;
  margin-top: 74px;
`

const SidebarWrapper = styled.div`
  color: #fff;
`

const SidebarMenu = styled.ul`
  display: grid;
  padding: 0;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;
`

const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="portfolio"
            onClick={toggle}
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-60}
          >
            Portfolio
          </SidebarLink>
          <SidebarLink
            to="testimonials"
            onClick={toggle}
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-60}
          >
            Testimonials
          </SidebarLink>
          <SidebarLink
            to="aboutMe"
            onClick={toggle}
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-60}
          >
            About Me
          </SidebarLink>
          <SidebarLink
            to="inquiries"
            onClick={toggle}
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-60}
          >
            Inquiries
          </SidebarLink>
          <SidebarLink
            to="social"
            onClick={toggle}
            smooth={true}
            duration={1000}
            spy={true}
            exact="true"
            offset={-60}
          >
            Social
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
