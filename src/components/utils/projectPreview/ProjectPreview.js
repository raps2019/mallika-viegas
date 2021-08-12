import React, { useContext } from 'react';
import * as Styled from './ProjectPreview.styles';
import { ThemeContext } from '../../../contexts/ThemeStore';
import { withRouter } from 'react-router';

const ProjectPreview = (props) => {
  // const { project, category, key } = props;
  const { category, type, title, client, img, pathName, alt } = props;
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
      key={pathName}
    >
      <Styled.ImageWrapperLink key={pathName} to={category + '/' + pathName}>
        <Styled.Image
          src={img}
          alt={alt}
          currentTheme={currentTheme}
        ></Styled.Image>
        <Styled.TextWrapper>
          <Styled.HeadingFive> {type.toUpperCase()}</Styled.HeadingFive>
          <Styled.HeadingFour>{title}</Styled.HeadingFour>
          <Styled.HeadingSix>{client.toUpperCase()}</Styled.HeadingSix>
        </Styled.TextWrapper>
      </Styled.ImageWrapperLink>
    </Styled.Container>
  );
};

export default withRouter(ProjectPreview);
