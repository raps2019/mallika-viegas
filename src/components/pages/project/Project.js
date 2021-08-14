import React, { useContext } from 'react';
import ProjectDetails from '../../utils/project/ProjectDetails';
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
      <ProjectDetails pathName={pathName}></ProjectDetails>
    </GlobalPageContainer>
  );
};

export default Project;
