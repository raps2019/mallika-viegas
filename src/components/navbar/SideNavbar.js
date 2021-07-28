import React, { useRef } from 'react';
import * as Styled from './SideNavbar.styles';
import NavbarItems from './NavbarItems';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { useViewport } from '../../contexts/ViewportProvider';

const SideNavbar = (props) => {
  const { handleNavLinkClick, handleClickOutsideNav, categoryList } = props;
  const { width } = useViewport();

  const node = useRef();
  useOnClickOutside(node, handleClickOutsideNav);
  useOnClickOutside(node, () => console.log('clicked outside'));

  const sideNavbarVariants = {
    hidden: {
      opacity: 0.25,
      x: -width,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.25 },
    },
    exit: {
      opacity: 0.25,
      x: -width,
    },
  };

  return (
    <Styled.SideNavbarContainer
      ref={node}
      variants={sideNavbarVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Styled.SideNavbar>
        <NavbarItems
          handleNavLinkClick={handleNavLinkClick}
          categoryList={categoryList}
        ></NavbarItems>
      </Styled.SideNavbar>
    </Styled.SideNavbarContainer>
  );
};

export default SideNavbar;
