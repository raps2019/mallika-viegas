import React from 'react';
import * as Styled from './NavbarItems.styles';
import ThemeToggleSwitch from '../themeToggleSwitch/ThemeToggleSwitch';
import { toTitleCase } from '../utils/toTitleCase';

const NavbarItems = (props) => {
  const { handleNavLinkClick, categoryList } = props;

  return (
    <>
      {categoryList.map((category) => (
        <Styled.NavbarLink
          key={category}
          to={`/${category}`}
          onClick={handleNavLinkClick}
        >
          {toTitleCase(category)}
        </Styled.NavbarLink>
      ))}
      <Styled.NavbarLink to="/about" onClick={handleNavLinkClick}>
        About
      </Styled.NavbarLink>
      <Styled.NavbarLink to="/contact" onClick={handleNavLinkClick}>
        Contact
      </Styled.NavbarLink>
      <Styled.ThemeToggleSwitchContainer>
        <ThemeToggleSwitch></ThemeToggleSwitch>
      </Styled.ThemeToggleSwitchContainer>
    </>
  );
};

export default NavbarItems;
