import React from 'react';
import { data } from '../../data';
import * as Styled from './ProjectExpanded.styles';

const ProjectExpanded = (props) => {
  const { projectId } = props;

  const project = data.find((item) => item.projectId === projectId);

  return (
    <Styled.Container>
    <Styled.Header>
    <Styled.HeadingThree>{project.title}</Styled.HeadingThree>
      <Styled.RowContainer>
      <Styled.HeadingFour>Client:</Styled.HeadingFour>
      <Styled.Paragraph>{project.client.toUpperCase()}</Styled.Paragraph>
      </Styled.RowContainer>
      <Styled.Anchor href={project.website} >Link to Article</Styled.Anchor>
    </Styled.Header>
     
      <Styled.Paragraph>{project.description}</Styled.Paragraph>
    </Styled.Container>
  );
};

export default ProjectExpanded;
