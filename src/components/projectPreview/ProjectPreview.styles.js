import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ImageWrapperLink = styled(Link)`
  position: relative;
  width: 100%;
  height: 100%;

  &:hover > img {
    filter: blur(5px) brightness(50%);
  }

  &:hover > div > h4 {
    opacity: 1;
    transition-delay: 1.5s;

    &::after {
      transition-delay: 1.75s;
      transform: scaleX(1);
      opacity: 1;
    }
  }

  &:hover > div > h5 {
    opacity: 1;
  }

  &:hover > div > h6 {
    transition-delay: 0.75s;
    opacity: 1;
  }

  /* @media screen and (max-width: 1024px) {
    width: 95%;
  } */

  /* @media screen and (max-width: 540px) {
    width: 100%;
  } */
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 0.25s ease-out;
  border-radius: 20px;
  filter: ${(props) =>
    props.currentTheme === 'dark' ? 'brightness(80%);' : null};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  padding: 10px;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Mono', monospace;
  color: white;
  text-align: center;
`;

export const HeadingFour = styled.h4`
  font-size: 0.8rem;
  font-weight: 600;
  transition: all 0.5s ease-in;
  opacity: 0;
  font-weight: 400;

  &::after {
    content: '';
    width: 100%;
    height: 0.15rem;
    display: block;
    background: white;
    opacity: 0.25;
    transform: scaleX(0);
    margin: 0 auto;
    transform-origin: center;
    background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 100%);

    /* background: ${(props) => props.theme.accent1}; */
    transition: all 750ms ease-in;
  }
`;

export const HeadingFive = styled.h5`
  font-size: 0.7rem;
  font-weight: 400;
  opacity: 0;
  /* transform: scale(0);   */
  transition: all 0.5s ease-in;
`;

export const HeadingSix = styled.h6`
  font-size: 0.7rem;
  opacity: 0;
  font-weight: 400;
  /* transform: scale(0);   */
  transition: all 0.5s ease-in;
  font-weight: 400;
`;
