import React from 'react'
import * as Styled from './Navbar.styles'
import NavbarItems from './NavbarItems'

const TopNavbar = (props) => {

  const { handleNavLinkClick } = props;

  return (
    <Styled.TopNavbarContainer>
    <Styled.TopNavbar>
      <NavbarItems handleNavLinkClick={handleNavLinkClick}></NavbarItems>
    </Styled.TopNavbar>
  </Styled.TopNavbarContainer>
  )
}

export default TopNavbar
