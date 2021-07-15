import React from 'react'
import * as Styled from './Navbar.styles'
import NavbarItems from './NavbarItems'

const TopNavbar = () => {
  return (
    <Styled.TopNavbarContainer>
    <Styled.TopNavbar>
      <NavbarItems></NavbarItems>
    </Styled.TopNavbar>
  </Styled.TopNavbarContainer>
  )
}

export default TopNavbar
