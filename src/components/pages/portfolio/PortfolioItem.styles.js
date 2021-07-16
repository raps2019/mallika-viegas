import styled from 'styled-components';

const imgWidth = 1000;
const imgHeight = 1000;

export const Container = styled.div`
display: flex;
width: 100%;
justify-content: center;
`


export const ImageWrapper = styled.div`
  position: relative;
  /* height: ${imgWidth}px;
  width: ${imgHeight}px; */

  & > img {
    width: 100%;
    max-width: 1000px;
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
  /* background:red; */
`;


export const HeadingOne = styled.h3`
font-size: 1.5rem;
`
export const HeadingTwo = styled.h4``

export const TextOne = styled.p``
export const TextTwo = styled.p``

