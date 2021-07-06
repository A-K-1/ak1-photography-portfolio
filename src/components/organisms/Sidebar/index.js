import React from 'react'
import styled from 'styled-components'
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll'
import { ImageLink } from 'components'

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
  color: ${(props) => props.theme.palette.white};
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
  color: ${(props) => props.theme.palette.white};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.palette.primary};
    transition: 0.2s ease-in-out;
  }
`

const ImageContainer = styled.div`
  margin-top: 20px;
`

const Sidebar = ({ isOpen, toggle }) => {
  const instagram = require('../../../../public/instagramWhite.png')
  const imageLink = 'https://www.instagram.com/ak1photography/'
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
            offset={-70}
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
            offset={-70}
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
            offset={-70}
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
            offset={-70}
          >
            Inquiries
          </SidebarLink>
          <ImageContainer>
            <ImageLink
              link={imageLink}
              image={instagram}
              height="20px"
              width="auto"
            />
          </ImageContainer>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
