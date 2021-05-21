import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { animateScroll as scroll, Link as LinkScroll } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom'
import { Link } from 'components'
import { FaBars } from 'react-icons/fa'
import { font, palette } from 'styled-theme'

const Nav = styled.nav`
  display: flex;
  list-style: none;
  max-height: 80px;

  > :not(:first-child) {
    margin-left: 1rem;
  }
  margin: 0 1rem;

  @media screen and (max-width: 768px) {
    display: none;
  }

  a {
    font-weight: 300;
    color: #fff;
    font-size: 1.25rem;
    &.active {
      color: #ffb380;
    }
  }
`

// const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   height: 80px;
//   z-index: 1;
//   width: 100%;
//   padding: 0 24px;
//   max-width: 1100px;
// `

const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
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

const PrimaryNavigation = ({ toggle, props }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <Nav scrollNav={scrollNav} {...props}>
      <MobileIcon onClick={toggle}>
        <FaBars />
      </MobileIcon>
      <NavMenu>
        <NavItem>
          <NavLinks
            to="portfolio"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
          >
            Portfolio
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="testimonials"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
          >
            Testimonials
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
          >
            About
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="inquiries"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
          >
            Inquiries
          </NavLinks>
        </NavItem>
        <NavItem>
          <NavLinks
            to="social"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={0}
          >
            Social
          </NavLinks>
        </NavItem>
      </NavMenu>

      {/* <li>
        <Link to="/" exact activeClassName="active">
          Home
        </Link>
      </li>
      <li>
        <Link to="/sample-page" activeClassName="active">
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="/sample-page" activeClassName="active">
          Tesimonials
        </Link>
      </li>
      <li>
        <Link to="/sample-page" activeClassName="active">
          About
        </Link>
      </li>
      <li>
        <Link to="/sample-page" activeClassName="active">
          Inquiries
        </Link>
      </li>
      <li>
        <Link to="/sample-page" activeClassName="active">
          Social
        </Link>
      </li> */}
    </Nav>
  )
}

PrimaryNavigation.propTypes = {
  reverse: PropTypes.bool,
}

export default PrimaryNavigation
