import styled from 'styled-components/macro';

export const QuoteParagraphContainer = styled.div`
  display: flex;
  justify-content: center;
  /* border-left: 1px solid white; */
  width: 100%;
`;

export const OpenQuoteStrong = styled.strong`
  font-style: italic;
  font-size: 2.5rem;
  align-self: flex-start;

  &::before {
    content: open-quote;
  }
`;

export const CloseQuoteStrong = styled.strong`
  font-style: italic;
  font-size: 2.5rem;
  align-self: flex-end;

  &::after {
    content: close-quote;
  }
`;

export const QuoteParagraph = styled.p`
  font-size: 0.75rem;
  text-align:justify;
  display: flex;
  font-style: italic;
  text-align: justify;
  padding: 1rem;
`;
