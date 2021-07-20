import React from 'react';
import * as Styled from './TopNavbar.styles';
import NavbarItems from './NavbarItems';
import { useSideNavbarContext } from '../../contexts/SideNavbarProvider';
import MenuToggleButton from './menuToggleButton/MenuToggleButton';

const TopNavbar = (props) => {
  const { handleNavLinkClick } = props;

  const { sideNavbar, sideNavbarOpen, toggleSideNavbar } = useSideNavbarContext();

  return (
    <Styled.TopNavbarContainer>
      <Styled.TopNavbar sideNavbar={sideNavbar}>
        <Styled.LogoNavbarLink exact={true} to="/" onClick={handleNavLinkClick}>
          mallika viegas
        </Styled.LogoNavbarLink>
        {sideNavbar === false ? (
          <NavbarItems handleNavLinkClick={handleNavLinkClick}></NavbarItems>
        ) : null}
        {sideNavbar === true
      ? <MenuToggleButton
          sideNavbarOpen={sideNavbarOpen}
          toggleSideNavbar={toggleSideNavbar}
        ></MenuToggleButton>
      : null
      }
      </Styled.TopNavbar>

    </Styled.TopNavbarContainer>
  );
};

export default TopNavbar;
