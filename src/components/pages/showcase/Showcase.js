import React, {useContext} from 'react';
import { data } from '../../../data';
import ProjectPreview from '../../projectPreview/ProjectPreview';
import {
  GlobalPageContainer,
  GlobalContentContainer,
  GlobalProjectListContainer,
} from '../../../globalStyles/GlobalStyles';
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider';

const Showcase = (props) => {
  const { sideNavbarOpen, sideNavbar } = useContext(SideNavbarContext);

  const showcaseData = data.filter((items) => items.category.toLowerCase() === props.category.toLowerCase());

  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
    >
      <GlobalContentContainer>
        <GlobalProjectListContainer>
          {showcaseData.map((project) => {
            return <ProjectPreview key={project.pathName} project={project}
            category={project.category}></ProjectPreview>;
          })}
        </GlobalProjectListContainer>
      </GlobalContentContainer>
    </GlobalPageContainer>
  );
};

export default Showcase;
