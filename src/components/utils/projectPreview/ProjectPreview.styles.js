import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 1.25rem;
  overflow: hidden;
  border: 0.5rem solid ${(props) => props.theme.background1};

  &:hover {
    transition: all 0.25s ease-in;
    border-color: ${(props) => props.theme.accent1};
  }

  @media screen and (max-width: 681px) {
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
`;

export const ImageWrapperLink = styled(Link)`
  &:hover > div {
    opacity: 1;
    /* transform: scaleY(1); */
    transform: translateY(0);
    background-color: ${(props) => props.theme.background4};
    transition: all 0.25s ease-in-out;
  }

  &:hover > img {
    filter: brightness(50%);
    transition: all 10s ease-out;
    transform: scale(1.5);
  }

  /* &:hover > div > h4 {
    opacity: 1;
    transition-delay: 0s; */

  /* &::after {
      transition-delay: 0.25s;
      transform: scaleX(1);
      opacity: 1;
    } */
  /* }

  &:hover > div > h5 {
    transition-delay: 0.75s;
    opacity: 1;
  }

  &:hover > div > h6 {
    transition-delay: 0.75s;
    opacity: 1;
  } */

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
  filter: ${(props) =>
    props.currentTheme === 'dark' ? 'brightness(80%);' : null};
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  transition: all 2s ease-in-out;

  @media (hover: none) {
    /* filter: blur(5px) brightness(50%); */
  }
`;

export const TextWrapper = styled.div`
  position: absolute;
  display: flex;
  bottom: 0;
  left: 0;
  /* left: 50%; */
  /* height: 100%; */
  width: 100%;
  /* height: 100%; */
  /* transform: translate(-50%, -50%);  */
  padding: 1rem;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Roboto Mono', monospace;
  color: white;
  text-align: center;
  opacity: 0;
  /* transform: scaleY(0); */
  transform: translateY(100%);
  transform-origin: bottom;
  /* border-bottom: 0.5rem solid ${(props) => props.theme.accent1}; */
  /* border-bottom: 0.1rem solid ${(props) => props.theme.accent1}; */
  transition: all 0.3s ease-out;

  /* border-radius: 1.5rem 1.5rem 0 0; */

  @media (hover: none) {
    /* filter: blur(5px) brightness(50%); */
    opacity: 1;
    background-color: ${(props) => props.theme.background4};
    transform: scaleY(1);
  }
`;

export const HeadingFour = styled.h4`
  font-size: 0.9rem;
  font-weight: 600;
  transition: all 0.25s ease-in;
  /* opacity: 0; */
  font-weight: 400;

  &::after {
    content: '';
    width: 100%;
    height: 0.15rem;
    display: block;
    background: ${(props) => props.theme.accent1};
    opacity: 0.5;
    /* transform: scaleX(0); */
    margin: 0 auto;
    transform-origin: center;
    /* background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    ); */

    /* background: ${(props) => props.theme.accent1}; */
    transition: all 750ms ease-in;
  }

  @media (hover: none) {
    opacity: 1;
  }
`;

export const HeadingFive = styled.h5`
  font-size: 0.7rem;
  font-weight: 400;
  /* opacity: 0; */
  /* transform: scale(0);   */
  transition: all 0.25s ease-in;

  @media (hover: none) {
    opacity: 1;
  }
`;

export const HeadingSix = styled.h6`
  font-size: 0.7rem;
  /* opacity: 0; */
  font-weight: 400;
  /* transform: scale(0);   */
  transition: all 0.25s ease-in;
  font-weight: 400;

  @media (hover: none) {
    opacity: 1;
  }
`;
