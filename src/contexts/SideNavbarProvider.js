import React, { useEffect, useState } from 'react';
import { useViewport } from './ViewportProvider';

export const SideNavbarContext = React.createContext({});

const SideNavbarProvider = ({ children }) => {
  const { width } = useViewport();

  const [sideNavbar, setSideNavbar] = useState(false);
  const [sideNavbarOpen, setSideNavbarOpen] = useState(false);

  const toggleSideNavbar = () => {
    if (sideNavbarOpen) {
      setSideNavbarOpen(false);
    } else {
      setSideNavbarOpen(true);
    }
  };

  const handleNavLinkClick = () => {
    if (sideNavbarOpen) {
      setSideNavbarOpen(false);
    } else {
      return;
    }
  };

  const handleClickOutsideNav = () => {
    if (sideNavbarOpen) {
      setSideNavbarOpen(false);
    }
  };

  useEffect(() => {
    if (width <= 768) {
      setSideNavbar(true);
    } else {
      setSideNavbar(false);
    }
  }, [width]);

  return (
    <SideNavbarContext.Provider
      value={{
        sideNavbar,
        sideNavbarOpen,
        toggleSideNavbar,
        handleNavLinkClick,
        handleClickOutsideNav,
      }}
    >
      {children}
    </SideNavbarContext.Provider>
  );
};

// export const useSideNavbarContext = () => {
//   const {
//     sideNavbar,
//     sideNavbarOpen,
//     toggleSideNavbar,
//     handleNavLinkClick,
//     handleClickOutsideNav,
//   } = React.useContext(SideNavbarContext);

//   return {
//     sideNavbar,
//     sideNavbarOpen,
//     toggleSideNavbar,
//     handleNavLinkClick,
//     handleClickOutsideNav,
//   };
// };

export default SideNavbarProvider;
