import React from 'react';
import { data } from '../../../data';
import ProjectPreview from '../../projectPreview/ProjectPreview';
import {
  GlobalPageContainer,
  GlobalContentContainer,
  GlobalProjectListContainer,
} from '../../../globalStyles/GlobalStyles';
import { useSideNavbarContext } from '../../../contexts/SideNavbarProvider';

const Writing = () => {
  const { sideNavbarOpen, sideNavbar } = useSideNavbarContext();

  const writingData = data.filter((items) => items.category === 'writing');


  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
    >
      <GlobalContentContainer>
        <GlobalProjectListContainer>
          {writingData.map((project) => {
            return <ProjectPreview key={project.pathName} project={project}
            category={project.category}></ProjectPreview>;
          })}
        </GlobalProjectListContainer>
      </GlobalContentContainer>
    </GlobalPageContainer>
  );
};

export default Writing;
