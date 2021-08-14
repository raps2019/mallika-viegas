import React from 'react';
import * as Styled from './ProjectBanner.styles';

const ProjectBanner = (props) => {
  const { src, alt, title, client, objectPosition } = props;

  console.log(alt)

  
  return (
    // <Styled.Container>
      <Styled.ImageWrapper>
        <Styled.Image src={src} alt={alt} objectPosition={objectPosition}></Styled.Image>
        <Styled.TextWrapper>
          <Styled.HeadingFive>{title}</Styled.HeadingFive>
          <Styled.HeadingSix>{client}</Styled.HeadingSix>
        </Styled.TextWrapper>
      </Styled.ImageWrapper>
    // </Styled.Container>
  );
};

export default ProjectBanner;