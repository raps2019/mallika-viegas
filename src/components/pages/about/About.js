import React, { useContext } from 'react';
import { GlobalHeadingOne, GlobalPageContainer } from '../../../globalStyles/GlobalStyles';
import * as Styled from './About.styles';
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider';
import { pageContainerVariants } from '../../variants';
import img1 from './images/mallika1.jpg';
import { ThemeContext } from '../../../contexts/ThemeStore';

const About = () => {
  const { sideNavbarOpen, sideNavbar } = useContext(SideNavbarContext);
  const {currentTheme} = useContext(ThemeContext);

  const textContainerVariants = {
    hidden:{
      opacity:0,
      y: '100%',
    },
    visible: {
      opacity:1,
      y: 0,
      transition: {type: 'spring', delay: 0.5,duration: 0.75}
    }
  }
  

  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
      variants={pageContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <Styled.Container>
      <Styled.ImageContainer>
          <Styled.Image src={img1} currentTheme={currentTheme}></Styled.Image>
        </Styled.ImageContainer>

        <Styled.TextContainer variants={textContainerVariants}>
        <GlobalHeadingOne>about me.</GlobalHeadingOne>
          <Styled.Paragraph>
            Mallika Viegas is a content producer based in Toronto. Her work has
            been featured by VICE, CBC, CTV, and other international media
            outlets. She was awarded a Hillman honourable mention for her work
            on Canada’s Indigenous water crisis for Vice News.
          </Styled.Paragraph>
          <Styled.Paragraph>
            Mallika Viegas is a content producer based in Toronto. Her work has
            been featured by VICE, CBC, CTV, and other international media
            outlets. She was awarded a Hillman honourable mention for her work
            on Canada’s Indigenous water crisis for Vice News.
          </Styled.Paragraph>
          <Styled.Paragraph>
            Mallika Viegas is a content producer based in Toronto. Her work has
            been featured by VICE, CBC, CTV.
          </Styled.Paragraph>
        </Styled.TextContainer>    
      </Styled.Container>
    </GlobalPageContainer>
  );
};

export default About;
