import React, { useState, useEffect, useRef, useContext } from 'react';
import { SideNavbarContext } from '../../contexts/SideNavbarProvider';
import TopNavbar from './TopNavbar';
import SideNavbar from './SideNavbar';

const Navbar = (props) => {
  const {
    sideNavbar,
    sideNavbarOpen,
    handleNavLinkClick,
    handleClickOutsideNav,
  } = useContext(SideNavbarContext);

  const {categoryList} = props

  return (
    <>
      {/* {sideNavbar === true ? (
        <MenuToggleButtonz
          sideNavbarOpen={sideNavbarOpen}
          toggleSideNavbar={toggleSideNavbar}
        ></MenuToggleButton>
      ) : null} */}
        <TopNavbar handleNavLinkClick={handleNavLinkClick} categoryList={categoryList}></TopNavbar>
      {sideNavbar === true && sideNavbarOpen === true ? (
        <SideNavbar
          handleNavLinkClick={handleNavLinkClick}
          handleClickOutsideNav={handleClickOutsideNav}
          categoryList={categoryList}
        ></SideNavbar>
      ) : null}
    </>
  );
};

export default Navbar;
