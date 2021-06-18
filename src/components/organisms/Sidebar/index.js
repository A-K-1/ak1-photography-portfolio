import React from 'react'
import { FaTimes } from 'react-icons/fa'
import styled from 'styled-components'
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '90%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  z-index: 999;
`

const CloseIcon = styled(FaTimes)`
  color: #fff;
`

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  border: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
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

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`

const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
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
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="portfolio"
            onClick={toggle}
            smooth={true}
            duration={500}
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
            duration={500}
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
            duration={500}
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
            duration={500}
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
            duration={500}
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
