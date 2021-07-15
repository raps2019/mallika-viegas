import React from 'react';
import * as Styled from './NavbarItems.styles';
import ThemeToggleSwitch from '../themeToggleSwitch/ThemeToggleSwitch';

const NavbarItems = () => {
  return (
    // <Styled.NavbarContainer>
      <>
        <Styled.LogoNavbarLink exact={true} to="/">
          mallika viegas
        </Styled.LogoNavbarLink>
        <Styled.NavbarLink to="/producing">PRODUCING</Styled.NavbarLink>
        <Styled.NavbarLink to="/writing">WRITING</Styled.NavbarLink>
        <Styled.NavbarLink to="/about">ABOUT</Styled.NavbarLink>
        <Styled.NavbarLink to="/contact">CONTACT</Styled.NavbarLink>
        <Styled.ThemeToggleSwitchContainer>
          <ThemeToggleSwitch></ThemeToggleSwitch>
        </Styled.ThemeToggleSwitchContainer>
      </>
    // </Styled.NavbarContainer>
  );
};

export default NavbarItems;
