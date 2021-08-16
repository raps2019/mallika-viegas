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
  const [topOfPage, setTopOfPage] = useState(true);
  const [bottomOfPage, setBottomOfPage] = useState(false);
  const sectionContainerRef = useRef(null)

  const handleScroll = (e) => {
    const bottom =
      Math.floor(e.target.scrollTop + e.target.clientHeight) >=
      e.target.scrollHeight - 10;
    const top = Math.floor(e.target.scrollTop) <= 10;

    // console.log(e.target.scrollHeight)
    // console.log(e.target.scrollTop)
    // console.log(e.target.clientHeight)
    // console.log(e.target.scrollTop + e.target.clientHeight)

    if (bottom) {
      setBottomOfPage(true);
    } else if (top) {
      setTopOfPage(true);
    } else {
      setTopOfPage(false);
      setBottomOfPage(false);
    }
  };

  // const buttonVariants ={

  //   hidden:{
  //     opacity:0,
  //   },
  //   visible: {
  //     opacity:1,
  //     transition: {delay: 1, duration: 1}
  //   }

  // }

  // const handleScrollUp = () => {
  //   console.log(sectionContainerRef)
  //   sectionContainerRef.scrollTop = 0;
  // }

  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
      variants={pageContainerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* {topOfPage || sideNavbarOpen ? null : (
        <Styled.ScrollUpButton
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          // onClick={handleScrollUp}
        >
          <Styled.ArrowUpIcon></Styled.ArrowUpIcon>
        </Styled.ScrollUpButton>
      )}
      {bottomOfPage || sideNavbarOpen ? null : (
        <Styled.ScrollDownButton
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          // onClick={handleScrollDown}
        >
          <Styled.ArrowDownIcon></Styled.ArrowDownIcon>
        </Styled.ScrollDownButton>
      )} */}

      <Styled.SectionContainer onScroll={handleScroll} ref={sectionContainerRef}>
        <Styled.Section>
          <Styled.HeadingThree>
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
