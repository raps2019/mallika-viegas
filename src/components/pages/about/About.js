import React, { useContext } from 'react';
import { GlobalPageContainer } from '../../../globalStyles/GlobalStyles';
import * as Styled from './About.styles';
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider';
import { pageContainerVariants } from '../../variants';
import img1 from './images/mallika1.jpg';

const About = () => {
  const { sideNavbarOpen, sideNavbar } = useContext(SideNavbarContext);

  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
      variants={pageContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <Styled.Container>
      {/* <Styled.GridContainer> */}
      <Styled.ImageContainer>
          <Styled.Image src={img1}></Styled.Image>
        </Styled.ImageContainer>

        <Styled.TextContainer>
          <Styled.Paragraph>
            Mallika Viegas is a content producer based in Toronto. Her work has
            been featured by VICE, CBC, CTV, and other international media
            outlets. She was awarded a Hillman honourable mention for her work
            on Canada’s Indigenous water crisis for Vice News.
          </Styled.Paragraph>
        </Styled.TextContainer>
      {/* </Styled.GridContainer> */}
        
      </Styled.Container>
    </GlobalPageContainer>
  );
};

export default About;
