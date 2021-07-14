import React from 'react';
import * as Styled from './TopNavbar.styles';

const TopNavbar = () => {
  return (
    <Styled.NavbarContainer>
      <Styled.Navbar>
        <Styled.LogoNavbarLink exact={true} to="/">
          MV
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
      </Styled.Navbar>
    </Styled.NavbarContainer>
  );
};

export default TopNavbar;
