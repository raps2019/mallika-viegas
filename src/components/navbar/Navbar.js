import React, {useContext } from 'react';
import { SideNavbarContext } from '../../contexts/SideNavbarProvider';
import TopNavbar from './TopNavbar';
import SideNavbar from './SideNavbar';
import { AnimatePresence } from 'framer-motion';

const Navbar = (props) => {
  const {
    sideNavbar,
    sideNavbarOpen,
    handleNavLinkClick,
    handleClickOutsideNav,
  } = useContext(SideNavbarContext);

  const { categoryList } = props;

  return (
    <>
      <TopNavbar
        handleNavLinkClick={handleNavLinkClick}
        categoryList={categoryList}
      ></TopNavbar>
      <AnimatePresence>
      {sideNavbar === true && sideNavbarOpen === true ? (
        <SideNavbar
          handleNavLinkClick={handleNavLinkClick}
          handleClickOutsideNav={handleClickOutsideNav}
          categoryList={categoryList}
        ></SideNavbar>
      ) : null}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
