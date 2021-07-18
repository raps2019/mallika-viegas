import styled from 'styled-components';

const imgWidth = 1000;
const imgHeight = 1000;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;

  &:hover > img {
    filter: blur(5px) brightness(50%);
  }

  &:hover > div > h1 {
    opacity: 1;
    transition-delay: 1.5s;


    &::after {
      transition-delay: 1.75s;
      transform: scaleX(1);
      opacity: 1;
    }
  }

  &:hover > div > h2 {
    opacity: 1;
  }

  &:hover > div > h3 {
    transition-delay: 0.75s;
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  transition: all 0.25s ease-out;
  border-radius: 20px;
  filter: ${(props) =>
  props.currentTheme === 'dark' ? 'brightness(80%);' : null};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;  `;

export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Mono', monospace;
  color: white;
`;

export const HeadingOne = styled.h1`
  font-size: 1.1rem;
  transition: all 0.5s ease-in;
  opacity: 0;
  font-weight: 400;

  &::after {
    content: '';
    width: 100%;
    height: 6px;
    display: block;
    background: white;
    opacity: 0.25;
    transform: scaleX(0);
    transform-origin: left;
    background: ${(props) => props.theme.accent1};
    transition: all 750ms ease-in;
  }
`;

export const HeadingTwo = styled.h2`
  font-size: 1rem;
  opacity: 0;
  /* transform: scale(0);   */
  transition: all 0.5s ease-in;
`;

export const HeadingThree = styled.h3`
  font-size: 1rem;
  opacity: 0;
  /* transform: scale(0);   */
  transition: all 0.5s ease-in;
  font-weight: 400;
`;
