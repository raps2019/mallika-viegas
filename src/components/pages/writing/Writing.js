import React, {useContext} from 'react';
import { data } from '../../../data';
import ProjectPreview from '../../projectPreview/ProjectPreview';
import {
  GlobalPageContainer,
  GlobalContentContainer,
  GlobalProjectListContainer,
} from '../../../globalStyles/GlobalStyles';
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider';

const Writing = (props) => {
  const { sideNavbarOpen, sideNavbar } = useContext(SideNavbarContext);

  const writingData = data.filter((items) => items.category === props.category);

  
  console.log(props.category)


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
