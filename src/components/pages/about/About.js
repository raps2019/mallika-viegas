import React, { useContext } from 'react';
import {
  GlobalPageContainer,
  GlobalContentContainer,
  GlobalTextContainer,
} from '../../../globalStyles/GlobalStyles';
import * as Styled from './About.styles';
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider';
import { pageContainerVariants } from '../../variants';

const About = () => {
  const { sideNavbarOpen, sideNavbar } = useContext(SideNavbarContext);

  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
      variants={pageContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <GlobalTextContainer>
        Mallika Viegas is a content producer based in Toronto. Her work has been
        featured by VICE, CBC, CTV, and other international media outlets. She
        was awarded a Hillman honourable mention for her work on Canada’s
        Indigenous water crisis for Vice News.
      </GlobalTextContainer>
    </GlobalPageContainer>
  );
};

export default About;
