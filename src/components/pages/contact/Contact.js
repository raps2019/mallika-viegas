import React, { useContext } from 'react';
import {
  GlobalPageContainer,
  GlobalTextContainer,
} from '../../../globalStyles/GlobalStyles';
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider';
import { pageContainerVariants } from '../../variants';
import * as Styled from './Contact.styles'

const Contact = () => {
  const { sideNavbarOpen, sideNavbar } = useContext(SideNavbarContext);

  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
      variants={pageContainerVariants}
      initial="hidden"
      animate="visible"
    >
    <Styled.Container>
    hello
    </Styled.Container>
      {/* <GlobalTextContainer>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. In repudiandae
        atque consequuntur nisi molestiae accusamus dicta cumque, a sit
        necessitatibus obcaecati aliquam doloribus, magnam ex. Id quae itaque
        necessitatibus eveniet?
      </GlobalTextContainer> */}
    </GlobalPageContainer>
  );
};

export default Contact;
