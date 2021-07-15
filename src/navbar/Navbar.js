import React, { useState, useEffect } from 'react';
import { useViewport } from '../contexts/ViewportProvider';
import MenuToggleButton from '../menuToggleButton/MenuToggleButton';
import TopNavbar from './TopNavbar';
import SideNavbar from './SideNavbar';
// import * as Styled from './Navbar.styles';
// import NavbarItems from './NavbarItems';

const Navbar = () => {
  const [sideNavbar, setSideNavbar] = useState(false);
  const [sideNavbarOpen, setSideNavbarOpen] = useState(true);

  const { width } = useViewport();

  // if (width <= 720) {
  //   setSideNavbar(true)
  // }

  // const SideNavbar = () => {
  //   return (
  //     <Styled.SideNavbarContainer>
  //       <Styled.SideNavbar>
  //         <NavbarItems></NavbarItems>
  //       </Styled.SideNavbar>
  //     </Styled.SideNavbarContainer>
  //   );
  // };

  // const TopNavbar = () => {
  //   return (
  //     <Styled.TopNavbarContainer>
  //       <Styled.TopNavbar>
  //         <NavbarItems></NavbarItems>
  //       </Styled.TopNavbar>
  //     </Styled.TopNavbarContainer>
  //   );
  // };

  const toggleSideNavbar = () => {
    if (sideNavbarOpen) {
      setSideNavbarOpen(false);
    } else {
      setSideNavbarOpen(true);
    }
  };

  useEffect(() => {
    if (width <= 1024) {
      setSideNavbar(true);
    } else {
      setSideNavbar(false);
    }
  }, [width]);

  return (
    <>
      {sideNavbar === true 
      ? (
        <MenuToggleButton
          sideNavbarOpen={sideNavbarOpen}
          toggleSideNavbar={toggleSideNavbar}
        ></MenuToggleButton>
      ) : null}
      {sideNavbar === false ? <TopNavbar></TopNavbar> : null}
      {sideNavbar === true && sideNavbarOpen === true 
      ? <SideNavbar></SideNavbar>
      : null}
    </>
  );

};

export default Navbar;
