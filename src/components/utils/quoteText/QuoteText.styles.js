import styled from 'styled-components/macro';

export const QuoteParagraphContainer = styled.div`
  display: flex;

  /* border-left: 1px solid white; */
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 0.5rem 0 0.5rem;
`;

export const OpenQuoteStrong = styled.strong`
  font-style: italic;
  font-size: 2.5rem;
  align-self: flex-start;
  color: ${props => props.theme.accent1};


  &::before {
    content: open-quote;
    width: 100%;
    margin: 0 auto;
  }
`;

export const CloseQuoteStrong = styled.strong`
  font-style: italic;
  font-size: 2.5rem;
  align-self: flex-end;
  color: ${props => props.theme.accent1};


  &::after {
    content: close-quote;
    width: 100%;
    margin: 0 auto;
  }
`;

export const QuoteParagraph = styled.p`
  font-size: 0.8rem;
  text-align:justify;
  display: flex;
  font-style: italic;
  text-align: justify;
  padding: 1rem;
`;
