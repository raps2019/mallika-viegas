import styled from 'styled-components';
import { GlobalButton } from '../../../globalStyles/GlobalStyles';

export const Container = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const DetailsContainer = styled.header`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 1rem;
`;

// export const BannerImage = styled.img`
//   object-fit: cover;
//   width: 100%;
//   height: 150px;
//   border-radius: 10px;
//   object-position: ${props => props.objectPosition ? props.objectPosition : null};
//   /* filter: blur(5px) brightness(75%); */

//   @media screen and (max-width: 1024px) {
//     width: 100vw;
//     border-radius: 0;
//   }
// `;

export const HeadingThree = styled.h1`
  font-size: 1rem;
  font-weight: 400;
`;

export const Paragraph = styled.p`
  font-size: 0.8rem;
  text-align: justify;
`;

export const QuoteContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 991px) {
    width: 100%;
  }
`;

// export const OpenQuoteStrong = styled.strong`
// font-style: italic;
// font-size: 2.5rem;
// align-self: flex-start;

// &::before {
//   content: open-quote;
// }
// `

// export const CloseQuoteStrong = styled.strong`
// font-style: italic;
// font-size: 2.5rem;
// align-self: flex-end;

// &::after {
//   content: close-quote;
// }
// `

// export const QuoteParagraph = styled(Paragraph)`
// display: flex;
// font-size: 0.9rem;
// font-style: italic;
// text-align:justify;
// padding: 1rem;
// `

export const HeadingFour = styled.h4`
  font-size: 0.8rem;
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Anchor = styled.a`
  font-size: 0.8rem;
  color: inherit;
  text-decoration: none;
  margin-left: auto;
  margin-right: auto;
`;

export const Button = styled(GlobalButton)`
  margin-left: auto;
  margin-right: auto;
`;
