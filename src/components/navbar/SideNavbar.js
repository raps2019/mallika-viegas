import React, { useRef } from 'react';
import * as Styled from './SideNavbar.styles';
import NavbarItems from './NavbarItems';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';

const SideNavbar = (props) => {
  const { handleNavLinkClick, handleClickOutsideNav, categoryList } = props;
  const node = useRef();

  useOnClickOutside(node, handleClickOutsideNav);

  useOnClickOutside(node, () => console.log('clicked outside'));

  return (
    <Styled.SideNavbarContainer ref={node}>
      <Styled.SideNavbar>
        <NavbarItems handleNavLinkClick={handleNavLinkClick} categoryList={categoryList}></NavbarItems>
      </Styled.SideNavbar>
    </Styled.SideNavbarContainer>
  );
};

export default SideNavbar;
