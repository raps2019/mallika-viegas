import React, { useContext } from 'react';
import * as Styled from './ProjectPreview.styles';
import { ThemeContext } from '../../contexts/ThemeStore';
import { withRouter } from 'react-router';

const ProjectPreview = (props) => {
  const { project, category } = props;
  const { currentTheme } = useContext(ThemeContext);

  return (
    // <Styled.Container>
    <Styled.ImageWrapperLink key={project.projectId} to={category + '/' + project.pathName}>
      <Styled.Image
        src={project.img}
        alt={project.alt}
        currentTheme={currentTheme}
      ></Styled.Image>
      <Styled.TextWrapper>
        <Styled.HeadingFive> {project.type.toUpperCase()}</Styled.HeadingFive>
        <Styled.HeadingFour>{project.title}</Styled.HeadingFour>
        <Styled.HeadingSix>{project.client.toUpperCase()}</Styled.HeadingSix>
      </Styled.TextWrapper>
    </Styled.ImageWrapperLink>
    // </Styled.Container>
  );
};

export default withRouter(ProjectPreview);
