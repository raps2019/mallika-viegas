import React, { useContext } from 'react';
import * as Styled from './TopNavbar.styles';
import NavbarItems from './NavbarItems';
import { SideNavbarContext } from '../../contexts/SideNavbarProvider';
import MenuToggleButton from './menuToggleButton/MenuToggleButton';

const TopNavbar = (props) => {
  const { handleNavLinkClick, categoryList, onHomePage } = props;

  const { sideNavbar, sideNavbarOpen, toggleSideNavbar } =
    useContext(SideNavbarContext);

  return (
    <Styled.TopNavbarContainer onHomePage={onHomePage}>
      <Styled.TopNavbar sideNavbar={sideNavbar}>
        <Styled.NavbarLeft
          sideNavbarOpen={sideNavbarOpen}
          sideNavbar={sideNavbar}
        >
          {sideNavbarOpen === true ? null : (
            <Styled.LogoNavbarLink
              exact={true}
              to="/"
              onClick={handleNavLinkClick}
            >
              mallika viegas
            </Styled.LogoNavbarLink>
          )}
        </Styled.NavbarLeft>
        <Styled.NavbarRight>
          {sideNavbar === false ? (
            <NavbarItems
              handleNavLinkClick={handleNavLinkClick}
              categoryList={categoryList}
            ></NavbarItems>
          ) : null}
          {sideNavbar === true ? (
            <MenuToggleButton
              sideNavbarOpen={sideNavbarOpen}
              toggleSideNavbar={toggleSideNavbar}
            ></MenuToggleButton>
          ) : null}
        </Styled.NavbarRight>
      </Styled.TopNavbar>
    </Styled.TopNavbarContainer>
  );
};

export default TopNavbar;
