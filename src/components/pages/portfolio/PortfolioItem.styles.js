import styled from 'styled-components';

const imgWidth = 1000;
const imgHeight = 1000;

// export const Container = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: center;
// `;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  /* max-width: ${imgWidth}px; */

  & > img {
    width: 100%;
    height: auto;
  }
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 95%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Mono', monospace;
`;

export const HeadingOne = styled.h3`
  font-size: 1.1rem;
`;

export const HeadingTwo = styled.h4`
font-size: 0.8rem;
`;

export const TextOne = styled.p`
font-size: 0.75rem;
`;

export const TextTwo = styled.p`
font-size: 0.70rem;
`;
