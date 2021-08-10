import React from 'react';
import { data } from '../../data';
import QuoteText from '../utils/QuoteText';
import * as Styled from './ProjectExpanded.styles';

const ProjectExpanded = (props) => {
  const { pathName } = props;

  const project = data.find((item) => item.pathName === pathName);

  return (
    <Styled.Container>
      <Styled.BannerImage
        src={project.img}
        alt={project.alt}
        objectPosition = {project.objectPosition}
      ></Styled.BannerImage>
      <Styled.Header>
        <Styled.HeadingThree>{project.title}</Styled.HeadingThree>
        <Styled.RowContainer>
          <Styled.HeadingFour>Client:</Styled.HeadingFour>
          <Styled.Paragraph>{project.client.toUpperCase()}</Styled.Paragraph>
        </Styled.RowContainer>
      </Styled.Header>
      <Styled.Paragraph>{project.description}</Styled.Paragraph>
      <QuoteText quote={project.quote}>

      </QuoteText>
      {/* <Styled.QuoteParagraphContainer>
        <Styled.OpenQuoteStrong></Styled.OpenQuoteStrong>
        <Styled.QuoteParagraph>{project.quote}</Styled.QuoteParagraph>
        <Styled.CloseQuoteStrong></Styled.CloseQuoteStrong>
      </Styled.QuoteParagraphContainer> */}
      <Styled.Anchor href={project.website}>Read More...</Styled.Anchor>
    </Styled.Container>
  );
};

export default ProjectExpanded;
