import React from 'react';
import * as Styled from './NavbarItems.styles';
import ThemeToggleSwitch from '../themeToggleSwitch/ThemeToggleSwitch';

const NavbarItems = (props) => {

  const { handleNavLinkClick, categoryList } = props;

  return (
      <>
        {/* <Styled.NavbarLink to="/producing" onClick={handleNavLinkClick}>Producing</Styled.NavbarLink>
        <Styled.NavbarLink to="/writing" onClick={handleNavLinkClick}>Writing</Styled.NavbarLink> */}
        {categoryList.map ( category => (
          <Styled.NavbarLink key={category} to={`/${category}`} onClick={handleNavLinkClick}>{category.toUpperCase()}</Styled.NavbarLink>
        ))}
        <Styled.NavbarLink to="/about" onClick={handleNavLinkClick}>ABOUT</Styled.NavbarLink>
        <Styled.NavbarLink to="/contact" onClick={handleNavLinkClick}>CONTACT</Styled.NavbarLink>
        <Styled.ThemeToggleSwitchContainer>
          <ThemeToggleSwitch></ThemeToggleSwitch>
        </Styled.ThemeToggleSwitchContainer>
      </>
  );
};

export default NavbarItems;
