import React, { useContext } from 'react';
import {
  GlobalPageContainer,
  GlobalContentContainer,
  GlobalTextContainer,
} from '../../../globalStyles/GlobalStyles';
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider';
import { pageContainerVariants } from '../../variants';

const Contact = () => {
  const { sideNavbarOpen, sideNavbar } = useContext(SideNavbarContext);

  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
      variants= {pageContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <GlobalContentContainer>
        <GlobalTextContainer>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
          repudiandae atque consequuntur nisi molestiae accusamus dicta cumque,
          a sit necessitatibus obcaecati aliquam doloribus, magnam ex. Id quae
          itaque necessitatibus eveniet?
        </GlobalTextContainer>
      </GlobalContentContainer>
    </GlobalPageContainer>
  )
}

export default Contact
