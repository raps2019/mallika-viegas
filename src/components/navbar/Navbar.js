import React, { useState, useEffect, useRef } from 'react';
import { useViewport } from '../../contexts/ViewportProvider';
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

  // const [sideNavbar, setSideNavbar] = useState(false);
  // const [sideNavbarOpen, setSideNavbarOpen] = useState(false);
  // const { width } = useViewport();

  // const toggleSideNavbar = () => {
  //   if (sideNavbarOpen) {
  //     setSideNavbarOpen(false);
  //   } else {
  //     setSideNavbarOpen(true);
  //   }
  // };

  // const handleNavLinkClick = () => {
  //   if (sideNavbarOpen) {
  //     setSideNavbarOpen(false);
  //   } else {
  //     return;
  //   }
  // };

  // const handleClickOutsideNav = () => {
  //   if (sideNavbarOpen) {
  //     setSideNavbarOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   if (width <= 1024) {
  //     setSideNavbar(true);
  //   } else {
  //     setSideNavbar(false);
  //   }
  // }, [width]);

  return (
    <>
      {sideNavbar === true ? (
        <MenuToggleButton
          sideNavbarOpen={sideNavbarOpen}
          toggleSideNavbar={toggleSideNavbar}
        ></MenuToggleButton>
      ) : null}
      {sideNavbar === false ? (
        <TopNavbar handleNavLinkClick={handleNavLinkClick}></TopNavbar>
      ) : null}
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
