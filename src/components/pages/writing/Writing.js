import React from 'react';
import { data } from '../../../data';
import ProjectPreview from '../../projectPreview/ProjectPreview';
import {
  GlobalPageContainer,
  GlobalContentContainer,
} from '../../../globalStyles/GlobalStyles';
import * as Styled from './Writing.styles';
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
        <Styled.ItemsContainer>
          {writingData.map((project) => {
            return <ProjectPreview item={project}
            category={project.category}></ProjectPreview>;
          })}
        </Styled.ItemsContainer>
      </GlobalContentContainer>
    </GlobalPageContainer>
  );
};

export default Writing;
