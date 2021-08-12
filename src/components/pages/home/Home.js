import React, { useContext } from 'react';
import { GlobalPageContainer } from '../../../globalStyles/GlobalStyles';
import { pageContainerVariants } from '../../variants';
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider';
import * as Styled from './Home.styles';
import { data } from '../../../data';
import ProjectFeature from '../../utils/projectFeature/ProjectFeature';

const Home = (props) => {
  const { sideNavbarOpen, sideNavbar } = useContext(SideNavbarContext);
  const { categoryList } = props;

  // const gridType = [ 'square', 'rectangle' ]

  const featureList = data.filter((item) => item.feature === true);

  featureList.forEach((item, index) => {
    // if ((index + 1) % 3 === 0) {
    //   item.gridType = 'rectangle';
    // } else if (
    //   featureList.length % 2 === 0 &&
    //   index === featureList.length - 1
    // ) {
    //   item.gridType = 'rectangle';
    // } else {
    //   item.gridType = 'square';
    // }
    if ((index + 1) % 3 === 0) {
      item.gridType = 'rectangle';
    } else {
      item.gridType = 'square';
    }
  });

  console.log(categoryList);

  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
      variants={pageContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <Styled.SectionContainer>
        <Styled.Section>
          <Styled.HeadingThree>
            Writer, Editor and Digital Content do‑it‑all‑'er.
          </Styled.HeadingThree>
        </Styled.Section>
        {/* <Styled.ListContainer> */}
          {featureList.map((project) => {
            return (
              <Styled.Section>
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
        {/* </Styled.ListContainer> */}
      
        <Styled.Section>
          <Styled.MoreLinkContainer>
            {categoryList.map((category) => {
              return (
                <Styled.MoreLink to={'/' + category}>
                  {`See more ${category}`}
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
