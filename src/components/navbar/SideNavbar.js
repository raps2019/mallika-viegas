import React, { useRef } from 'react';
import * as Styled from './SideNavbar.styles';
import NavbarItems from './NavbarItems';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const SideNavbar = (props) => {
  const { handleNavLinkClick, handleClickOutsideNav } = props;
  const node = useRef();

  useOnClickOutside(node, handleClickOutsideNav);

  useOnClickOutside(node, () => console.log('clicked outside'));

  return (
    <Styled.SideNavbarContainer ref={node}>
      <Styled.SideNavbar>
        <NavbarItems handleNavLinkClick={handleNavLinkClick}></NavbarItems>
      </Styled.SideNavbar>
    </Styled.SideNavbarContainer>
  );
};

export default SideNavbar;
