import React from 'react';
import { data } from '../../../data';
import {
  GlobalPageContainer,
  GlobalContentContainer,
} from '../../../globalStyles/GlobalStyles';
import * as Styled from './Producing.styles';
import { useSideNavbarContext } from '../../../contexts/SideNavbarProvider';
import ProjectPreview from '../../projectPreview/ProjectPreview';

const Producing = () => {
  const { sideNavbarOpen, sideNavbar } = useSideNavbarContext();

  const producingData = data.filter((items) => items.category === 'producing');

  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
    >
      <GlobalContentContainer>
        <Styled.ItemsContainer>
          {producingData.map((project) => {
            return <ProjectPreview item={project}
            category={project.category}></ProjectPreview>;
          })}
        </Styled.ItemsContainer>
      </GlobalContentContainer>
    </GlobalPageContainer>
  );
};

export default Producing;
