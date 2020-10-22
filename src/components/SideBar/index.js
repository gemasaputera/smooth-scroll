import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SideBtnRoute,
} from './SideBarElements';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="dicover" onClick={toggle}>Dicover</SidebarLink>
          <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
          <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideBtnRoute to="/signin" onClick={toggle}>Sign In</SideBtnRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default SideBar
