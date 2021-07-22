import React from 'react';
import ProjectExpanded from '../../projectExpanded/ProjectExpanded';
import {
  GlobalPageContainer,
  GlobalContentContainer,
} from '../../../globalStyles/GlobalStyles';
import { useSideNavbarContext } from '../../../contexts/SideNavbarProvider';

const Project = ({ match, location }) => {
  const { sideNavbarOpen, sideNavbar } = useSideNavbarContext();

  const {
    params: { pathName, category },
  } = match;

  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
    >
      <GlobalContentContainer>
        <ProjectExpanded pathName={pathName}></ProjectExpanded>
      </GlobalContentContainer>
    </GlobalPageContainer>
  );
};

export default Project;
