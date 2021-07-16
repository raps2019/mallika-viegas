import React from 'react';
import * as Styled from './NavbarItems.styles';
import ThemeToggleSwitch from '../themeToggleSwitch/ThemeToggleSwitch';

const NavbarItems = (props) => {

  const { handleNavLinkClick } = props;

  return (
      <>
        <Styled.LogoNavbarLink exact={true} to="/" onClick={handleNavLinkClick}>
          mallika viegas
        </Styled.LogoNavbarLink>
        <Styled.NavbarLink to="/producing" onClick={handleNavLinkClick}>PRODUCING</Styled.NavbarLink>
        <Styled.NavbarLink to="/writing" onClick={handleNavLinkClick}>WRITING</Styled.NavbarLink>
        <Styled.NavbarLink to="/about" onClick={handleNavLinkClick}>ABOUT</Styled.NavbarLink>
        <Styled.NavbarLink to="/contact" onClick={handleNavLinkClick}>CONTACT</Styled.NavbarLink>
        <Styled.ThemeToggleSwitchContainer>
          <ThemeToggleSwitch></ThemeToggleSwitch>
        </Styled.ThemeToggleSwitchContainer>
      </>
  );
};

export default NavbarItems;
