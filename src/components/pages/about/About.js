import React, { useContext } from 'react';
import {
  GlobalPageContainer,
  GlobalContentContainer,
} from '../../../globalStyles/GlobalStyles';
import { useSideNavbarContext } from '../../../contexts/SideNavbarProvider';

const About = () => {
  const { sideNavbarOpen } = useSideNavbarContext();

  return (
    <GlobalPageContainer sideNavbarOpen={sideNavbarOpen}>
      <GlobalContentContainer>
      
      </GlobalContentContainer>
    </GlobalPageContainer>
  );
};

export default About;
