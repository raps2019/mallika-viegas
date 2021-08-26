import React, { useContext, useState } from 'react';
import { data } from '../../../data';
import ProjectPreview from '../../utils/projectPreview/ProjectPreview';
import {
  GlobalPageContainer,
  GlobalProjectListContainer,
} from '../../../globalStyles/GlobalStyles';
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider';
import { pageContainerVariants } from '../../variants';
import * as Styled from './ItemList.styles';
import { toTitleCase } from '../../utils/toTitleCase';

const ItemList = (props) => {
  const { sideNavbarOpen, sideNavbar } = useContext(SideNavbarContext);

  const [typeFilter, setTypeFilter] = useState('all');

  const handleFilterButtonClick = (filter) => {
    setTypeFilter(filter);
  };

  const showcaseList = data
    .filter(
      (item) => item.category.toLowerCase() === props.category.toLowerCase()
    )
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  const typeList = [...new Set(data.map((item) => item.typeCategory))];

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
      <Styled.Container>
        <Styled.FilterButtonContainer>
          <Styled.Button
            onClick={() => handleFilterButtonClick('all')}
            active={typeFilter === 'all' ? true : false}
          >
            All
          </Styled.Button>
          {typeList.map((type) => {
            return (
              <Styled.Button
                onClick={() => handleFilterButtonClick(type)}
                active={type === typeFilter ? true : false}
              >
                {toTitleCase(type)}
              </Styled.Button>
            );
          })}
        </Styled.FilterButtonContainer>

        <GlobalProjectListContainer
          variants={listContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {showcaseList.map((project) =>
            typeFilter === 'all' || project.typeCategory === typeFilter ? (
              <ProjectPreview
                category={project.category}
                type={project.type}
                title={project.title}
                client={project.client}
                img={project.img}
                pathName={project.pathName}
                alt={project.alt}
              ></ProjectPreview>
            ) : null
          )}
        </GlobalProjectListContainer>
      </Styled.Container>
    </GlobalPageContainer>
  );
};

export default ItemList;
