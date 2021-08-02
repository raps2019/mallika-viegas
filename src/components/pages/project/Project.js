import React, { useContext } from 'react';
import ProjectExpanded from '../../projectExpanded/ProjectExpanded';
import { GlobalPageContainer } from '../../../globalStyles/GlobalStyles';
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
      variants={pageContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <ProjectExpanded pathName={pathName}></ProjectExpanded>
    </GlobalPageContainer>
  );
};

export default Project;
