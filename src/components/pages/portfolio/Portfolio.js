import React from 'react';
import { data } from '../../../data';
import ProjectPreview from '../../projectPreview/ProjectPreview';
import {
  GlobalPageContainer,
  GlobalContentContainer,
} from '../../../globalStyles/GlobalStyles';
import * as Styled from './Writing.styles';
import { useSideNavbarContext } from '../../../contexts/SideNavbarProvider';

const Portfolio = (props) => {

  const {category} = props;

  const { sideNavbarOpen, sideNavbar } = useSideNavbarContext();

  const filteredData = data.filter((items) => items.category === category);


  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
    >
      <GlobalContentContainer>
        <Styled.ItemsContainer>
          {filteredData.map((project) => {
            return <ProjectPreview item={project}
            category={project.category}></ProjectPreview>;
          })}
        </Styled.ItemsContainer>
      </GlobalContentContainer>
    </GlobalPageContainer>
  );
};

export default Portfolio;
