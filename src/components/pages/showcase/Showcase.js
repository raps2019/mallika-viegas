import React, { useContext } from 'react';
import { data, categoryDescriptions } from '../../../data';
import ProjectPreview from '../../projectPreview/ProjectPreview';
import {
  GlobalPageContainer,
  GlobalContentContainer,
  GlobalProjectListContainer,
  GlobalTextContainer,
} from '../../../globalStyles/GlobalStyles';
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider';
import { pageContainerVariants } from '../../variants';
import * as Styled from './Showcase.styles';

const Showcase = (props) => {
  const { sideNavbarOpen, sideNavbar } = useContext(SideNavbarContext);

  const showcaseData = data.filter(
    (items) => items.category.toLowerCase() === props.category.toLowerCase()
  );

  const categoryDescription = categoryDescriptions.find(
    (category) => category.category === props.category
  ).description;

  const listContainerVariants = {
    hidden: {},
    visible: {
      delay: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        mass: 1,
        damping: 16,
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
      variants={pageContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <GlobalContentContainer>
          <GlobalTextContainer>{categoryDescription}</GlobalTextContainer>
          <GlobalProjectListContainer
            variants={listContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {showcaseData.map((project) => {
              return (
                <ProjectPreview
                  key={project.pathName}
                  project={project}
                  category={project.category}
                ></ProjectPreview>
              );
            })}
          </GlobalProjectListContainer>
      </GlobalContentContainer>
    </GlobalPageContainer>
  );
};

export default Showcase;
