import React, { useState, useEffect, useRef } from 'react';
import { useSideNavbarContext } from '../../contexts/SideNavbarProvider';
import MenuToggleButton from './menuToggleButton/MenuToggleButton';
import TopNavbar from './TopNavbar';
import SideNavbar from './SideNavbar';

const Navbar = () => {
  const {
    sideNavbar,
    sideNavbarOpen,
    toggleSideNavbar,
    handleNavLinkClick,
    handleClickOutsideNav,
  } = useSideNavbarContext();

  return (
    <>
      {/* {sideNavbar === true ? (
        <MenuToggleButton
          sideNavbarOpen={sideNavbarOpen}
          toggleSideNavbar={toggleSideNavbar}
        ></MenuToggleButton>
      ) : null} */}
        <TopNavbar handleNavLinkClick={handleNavLinkClick}></TopNavbar>
      {sideNavbar === true && sideNavbarOpen === true ? (
        <SideNavbar
          handleNavLinkClick={handleNavLinkClick}
          handleClickOutsideNav={handleClickOutsideNav}
        ></SideNavbar>
      ) : null}
    </>
  );
};

export default Navbar;
