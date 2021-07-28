import React, { useContext} from 'react';
import ProjectExpanded from '../../projectExpanded/ProjectExpanded';
import {
  GlobalPageContainer,
  GlobalContentContainer,
} from '../../../globalStyles/GlobalStyles';
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider';
import { pageContainerVariants } from '../../variants';

const Project = ({ match }) => {
  const { sideNavbarOpen, sideNavbar } = useContext(SideNavbarContext);

  const {
    params: { pathName },
  } = match;

  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
      variants= {pageContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <GlobalContentContainer>
        <ProjectExpanded pathName={pathName}></ProjectExpanded>
      </GlobalContentContainer>
    </GlobalPageContainer>
  );
};

export default Project;
