import React from 'react'
import * as Styled from './Navbar.styles'
import NavbarItems from './NavbarItems'

const SideNavbar = () => {
  return (
    <Styled.SideNavbarContainer>
    <Styled.SideNavbar>
      <NavbarItems></NavbarItems>
    </Styled.SideNavbar>
  </Styled.SideNavbarContainer>
  )
}

export default SideNavbar
