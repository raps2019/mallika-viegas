import React, {useContext} from 'react';
import * as Styled from './Footer.styles';
import { SideNavbarContext } from '../../contexts/SideNavbarProvider';


const Footer = () => {

  const { sideNavbar, sideNavbarOpen } = useContext(SideNavbarContext)
  return (
    <Styled.Footer sideNavbar={sideNavbar} sideNavbarOpen={sideNavbarOpen}>
    <Styled.LogoContainer href="https://www.linkedin.com/in/mallikaviegas/">
    <Styled.LinkedinLogo></Styled.LinkedinLogo>
    </Styled.LogoContainer>
    </Styled.Footer>
  );
};

export default Footer;
