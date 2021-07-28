import React, { useContext } from 'react';
import * as Styled from './ProjectPreview.styles';
import { ThemeContext } from '../../contexts/ThemeStore';
import { withRouter } from 'react-router';

const ProjectPreview = (props) => {
  const { project, category, key } = props;
  const { currentTheme } = useContext(ThemeContext);

  const listChildVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      // transition: {
      //   type: 'spring',
      //   stiffness: 200,
      //   damping: 18,
      // },
    },
  };

  return (
    <Styled.Container
    variants={listChildVariants}
    // initial="hidden"
    // animate="visible"
    key={key}
    >
      <Styled.ImageWrapperLink
        key={project.projectId}
        to={category + '/' + project.pathName}
      >
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
    </Styled.Container>
  );
};

export default withRouter(ProjectPreview);
