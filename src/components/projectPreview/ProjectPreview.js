import React, { useContext } from 'react';
import * as Styled from './ProjectPreview.styles';
import { ThemeContext } from '../../contexts/ThemeStore';
import { withRouter } from 'react-router';

const ProjectPreview = (props) => {
  const { item, category } = props;
  const { currentTheme } = useContext(ThemeContext);

  return (
    // <Styled.Container>
    <Styled.ImageWrapperLink key={item.projectId} to={category + '/' + item.projectId}>
      <Styled.Image
        src={item.img}
        alt=""
        currentTheme={currentTheme}
      ></Styled.Image>
      <Styled.TextWrapper>
        <Styled.HeadingFive> {item.type.toUpperCase()}</Styled.HeadingFive>
        <Styled.HeadingFour>{item.title}</Styled.HeadingFour>
        <Styled.HeadingSix>{item.client.toUpperCase()}</Styled.HeadingSix>
      </Styled.TextWrapper>
    </Styled.ImageWrapperLink>
    // </Styled.Container>
  );
};

export default withRouter(ProjectPreview);
