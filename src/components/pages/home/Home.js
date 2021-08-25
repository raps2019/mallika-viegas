import React, { useContext, useEffect, useState, useRef } from 'react';
import {
  GlobalButton,
  GlobalPageContainer,
} from '../../../globalStyles/GlobalStyles';
import { pageContainerVariants } from '../../variants';
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider';
import * as Styled from './Home.styles';
import { data } from '../../../data';
import ProjectFeature from '../../utils/projectFeature/ProjectFeature';

const Home = (props) => {
  const { sideNavbarOpen, sideNavbar } = useContext(SideNavbarContext);
  const { categoryList } = props;
  const featureList = data.filter((item) => item.feature === true);

  const sectionContainerRef = useRef(null);

  const headingVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', delay: 0.25, duration: 1 },
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
      <Styled.SectionContainer ref={sectionContainerRef}>
        <Styled.Section>
          <Styled.HeadingThree variants={headingVariants}>
            Writer, Editor and Digital Content do‑it‑all‑'er.
          </Styled.HeadingThree>
        </Styled.Section>
        {featureList.map((project) => {
          return (
            <Styled.Section key={project.pathName}>
              <ProjectFeature
                category={project.category}
                img={project.img}
                pathName={project.pathName}
                alt={project.alt}
                gridType={project.gridType}
                title={project.title}
                client={project.client}
                quote={project.quote}
              ></ProjectFeature>
            </Styled.Section>
          );
        })}

        <Styled.Section>
          <Styled.MoreLinkContainer>
            {categoryList.map((category) => {
              return (
                <Styled.MoreLink to={'/' + category} key={category}>
                  <GlobalButton>{`See more ${category}...`}</GlobalButton>
                </Styled.MoreLink>
              );
            })}
          </Styled.MoreLinkContainer>
        </Styled.Section>
      </Styled.SectionContainer>
    </GlobalPageContainer>
  );
};

export default Home;
