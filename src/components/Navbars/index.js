import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import { IconContext } from 'react-icons/lib';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLink,
  NavBtn,
  NavBtnLink,
} from './NavbarElement';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNavigation = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavigation)
  }, [])

  return (
    <>
      <IconContext.Provider value={{ color:'#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to="/" onClick={toggleHome}>
              dolla
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLink
                  to="services"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="about"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="discover"
                  smooth="true"
                  duration={500}
                  spy="true"
                  exact="true"
                  offset={-80}
                >Discover</NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="signup"
                  smooth="true"
                  duration={500}
                  spy={true}
                  exact="true"
                  offset={-80}
                >Sign Up</NavLink>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink
                to="/signin"
                smooth="true"
                duration={500}
                spy="true"
                exact="true"
                offset={-80}
              >Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar
