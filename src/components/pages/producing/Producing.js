import React, {useContext} from 'react';
import { data } from '../../../data';
import {
  GlobalPageContainer,
  GlobalContentContainer,
  GlobalProjectListContainer,

} from '../../../globalStyles/GlobalStyles';
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider';
import ProjectPreview from '../../projectPreview/ProjectPreview';

const Producing = () => {
  const { sideNavbarOpen, sideNavbar } = useContext(SideNavbarContext);

  const producingData = data.filter((items) => items.category === 'producing');

  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
    >
      <GlobalContentContainer>
        <GlobalProjectListContainer>
          {producingData.map((project) => {
            return <ProjectPreview key={project.pathName} project={project}
            category={project.category}></ProjectPreview>;
          })}
        </GlobalProjectListContainer>
      </GlobalContentContainer>
    </GlobalPageContainer>
  );
};

export default Producing;
