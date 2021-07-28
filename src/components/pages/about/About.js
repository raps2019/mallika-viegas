import React, { useContext } from 'react';
import {
  GlobalPageContainer,
  GlobalContentContainer,
  GlobalTextContainer,
} from '../../../globalStyles/GlobalStyles';
import * as Styled from './About.styles';
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider';
import { pageContainerVariants } from '../../variants';

const About = () => {
  const { sideNavbarOpen, sideNavbar } = useContext(SideNavbarContext);

  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
      variants= {pageContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <GlobalContentContainer>
        <GlobalTextContainer>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
          repudiandae atque consequuntur nisi molestiae accusamus dicta cumque,
          a sit necessitatibus obcaecati aliquam doloribus, magnam ex. Id quae
          itaque necessitatibus eveniet?
          <br></br>
          <br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, libero
          hic. In sit atque et, doloremque odio nostrum odit itaque perspiciatis
          eveniet iusto maxime, vitae laborum illum. Voluptate commodi
          consectetur harum doloribus vel aspernatur reprehenderit nesciunt
          ipsa, nostrum dolor illum rem temporibus tempora, possimus ea tenetur
          eaque neque culpa quam voluptatibus ipsam eum. Dolor cumque
          praesentium nesciunt non quo. Corporis quam, reprehenderit quae
          architecto iure voluptatibus! Aliquam atque architecto sint rem dolore
          incidunt quibusdam unde soluta voluptatem earum odio beatae ipsum nam
          itaque eos tempora, non impedit aut et praesentium, magni
          exercitationem optio nisi. Quas tempora blanditiis quaerat ipsam
          minus.
          <br></br>
          <br></br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          excepturi quam in vitae, tempore sunt.
          <br></br>
          <br></br>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur
          consectetur, rerum impedit quod incidunt libero. Ut fugiat omnis
          numquam odit exercitationem officiis hic. Adipisci debitis excepturi,
          at quidem rem sapiente aliquam fuga cumque corrupti quisquam alias
          necessitatibus sint sed consequuntur repellendus, tempore commodi
          deserunt temporibus laudantium sequi harum! Porro itaque iste tempore
          officia dicta amet!
        </GlobalTextContainer>
      </GlobalContentContainer>
    </GlobalPageContainer>
  );
};

export default About;
