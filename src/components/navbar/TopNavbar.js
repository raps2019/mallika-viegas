import React, {useContext} from 'react';
import * as Styled from './TopNavbar.styles';
import NavbarItems from './NavbarItems';
import { SideNavbarContext } from '../../contexts/SideNavbarProvider';
import MenuToggleButton from './menuToggleButton/MenuToggleButton';

const TopNavbar = (props) => {
  const { handleNavLinkClick, categoryList } = props;

  const { sideNavbar, sideNavbarOpen, toggleSideNavbar } = useContext(SideNavbarContext);

  return (
    <Styled.TopNavbarContainer>
      <Styled.TopNavbar sideNavbar={sideNavbar}>
        <Styled.LogoNavbarLink exact={true} to="/" onClick={handleNavLinkClick}>
          mallika viegas
        </Styled.LogoNavbarLink>
        <Styled.NavbarRight>
        {sideNavbar === false ? (
          <NavbarItems handleNavLinkClick={handleNavLinkClick} categoryList={categoryList}></NavbarItems>
        ) : null}
        {sideNavbar === true
      ? <MenuToggleButton
          sideNavbarOpen={sideNavbarOpen}
          toggleSideNavbar={toggleSideNavbar}
        ></MenuToggleButton>
      : null
      }
        </Styled.NavbarRight>

      </Styled.TopNavbar>

    </Styled.TopNavbarContainer>
  );
};

export default TopNavbar;
