import React from 'react';
import ThemeToggleSwitch from '../../themeToggleSwitch/ThemeToggleSwitch';
import * as Styled from './TopNavbar.styles';

const TopNavbar = () => {
  return (
    <Styled.NavbarContainer>
      <Styled.Navbar>
        <Styled.LogoNavbarLink exact={true} to="/">
          mallika viegas
        </Styled.LogoNavbarLink>
        <Styled.NavbarLink to="/producing">
          PRODUCING
        </Styled.NavbarLink>
        <Styled.NavbarLink to="/writing">
          WRITING
        </Styled.NavbarLink>
        <Styled.NavbarLink to="/about">
          ABOUT
        </Styled.NavbarLink>
        <Styled.NavbarLink to="/contact">
          CONTACT
        </Styled.NavbarLink>
        <ThemeToggleSwitch></ThemeToggleSwitch>
      </Styled.Navbar>
    </Styled.NavbarContainer>
  );
};

export default TopNavbar;
