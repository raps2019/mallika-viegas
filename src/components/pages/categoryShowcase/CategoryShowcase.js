import React, { useContext } from 'react';
import { data, categoryDescriptions } from '../../../data';
import ProjectPreview from '../../utils/projectPreview/ProjectPreview';
import {
  GlobalPageContainer,
  GlobalProjectListContainer,
  GlobalShowcaseContainer,
  GlobalTextContainer,
} from '../../../globalStyles/GlobalStyles';
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider';
import { pageContainerVariants } from '../../variants';
import * as Styled from './CategoryShowcase.styles'

const CategoryShowcase = (props) => {
  const { sideNavbarOpen, sideNavbar } = useContext(SideNavbarContext);

  const showcaseList = data.filter(
    (item) => item.category.toLowerCase() === props.category.toLowerCase()
  ).sort( (a,b) =>  new Date(b.date) - new Date(a.date));

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
      {/* <GlobalTextContainer>{categoryDescription}</GlobalTextContainer> */}
      <Styled.ShowcaseContainer>
      <GlobalProjectListContainer
        variants={listContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {showcaseList.map((project) => {
          return (
            <ProjectPreview
              category={project.category}
              type={project.type}
              title={project.title}
              client={project.client}
              img={project.img}
              pathName={project.pathName}
              alt={project.alt}
            ></ProjectPreview>
          );
        })}
      </GlobalProjectListContainer>
      </Styled.ShowcaseContainer>
     
    </GlobalPageContainer>
  );
};

export default CategoryShowcase;
