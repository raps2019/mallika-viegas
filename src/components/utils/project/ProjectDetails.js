import React from 'react';
import { data } from '../../../data';
import { GlobalButton } from '../../../globalStyles/GlobalStyles';
import QuoteText from '../quoteText/QuoteText';
import ProjectBanner from './ProjectBanner';
import * as Styled from './ProjectDetails.styles';

const ProjectDetails = (props) => {
  const { pathName } = props;

  const project = data.find((item) => item.pathName === pathName);

  return (
    <Styled.Container>
      <ProjectBanner
        src={project.img}
        alt={project.alt}
        objectPosition={project.objectPosition}
        title={project.title}
        client={project.client}
      ></ProjectBanner>
      {/* <Styled.BannerImage
        src={project.img}
        alt={project.alt}
        objectPosition={project.objectPosition}
      ></Styled.BannerImage> */}
      {/* <Styled.Header>
        <Styled.HeadingThree>{project.title}</Styled.HeadingThree>
        <Styled.RowContainer>
          <Styled.HeadingFour>Client:</Styled.HeadingFour>
          <Styled.Paragraph>{project.client.toUpperCase()}</Styled.Paragraph>
        </Styled.RowContainer>
      </Styled.Header> */}
      <Styled.DetailsContainer>
      <Styled.Paragraph>{project.description}</Styled.Paragraph>
      <Styled.QuoteContainer>
      <QuoteText quote={project.quote}></QuoteText>
      </Styled.QuoteContainer>
      {/* <Styled.QuoteParagraphContainer>
        <Styled.OpenQuoteStrong></Styled.OpenQuoteStrong>
        <Styled.QuoteParagraph>{project.quote}</Styled.QuoteParagraph>
        <Styled.CloseQuoteStrong></Styled.CloseQuoteStrong>
      </Styled.QuoteParagraphContainer> */}
      <Styled.Button>
      <Styled.Anchor href={project.website}>Read More...</Styled.Anchor>
      </Styled.Button>
      </Styled.DetailsContainer>
    </Styled.Container>
  );
};

export default ProjectDetails;
