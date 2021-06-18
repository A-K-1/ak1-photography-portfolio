import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'
import { font, palette } from 'styled-theme'
import { MenuIcon } from 'components'

const Nav = styled.nav`
  display: flex;
  list-style: none;
  max-height: 80px;

  > :not(:first-child) {
    margin-left: 1rem;
  }
  margin: 0 2rem;

  a {
    font-weight: 300;
    color: #fff;
    font-size: 1.25rem;
    &.active {
      color: #ffb380;
    }
  }
`

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 3px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin: 0;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavItem = styled.li`
  height: 40px;
`

const NavLinks = styled(LinkScroll)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: ${font('primary')};

  &.active {
    color: #fff;
    border-bottom: 3px solid #ffb380;
  }
`

const PrimaryNavigation = ({ isOpen, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 60) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  return (
    <Nav scrollNav={scrollNav}>
      <MobileIcon onClick={toggle}>
        <MenuIcon isOpen={isOpen} />
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks
            to="portfolio"
            smooth={true}
            duration={600}
            spy={true}
            exact="true"
            offset={-60}
          >
            Portfolio
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="testimonials"
            smooth={true}
            duration={600}
            spy={true}
            exact="true"
            offset={-60}
          >
            Testimonials
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="aboutMe"
            smooth={true}
            duration={600}
            spy={true}
            exact="true"
            offset={-60}
          >
            About
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="inquiries"
            smooth={true}
            duration={600}
            spy={true}
            exact="true"
            offset={-60}
          >
            Inquiries
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="social"
            smooth={true}
            duration={600}
            spy={true}
            exact="true"
            offset={-60}
          >
            Social
          </NavLinks>
        </NavItem>
      </NavMenu>
    </Nav>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default PrimaryNavigation
