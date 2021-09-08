import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 1366px;
  height: 100%;
  border-radius: 1.5rem;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    min-width: 100vw;
    border-radius: 0;
  }
`;

export const ImageWrapperLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: ${(props) =>
    props.currentTheme === 'dark' ? 'brightness(80%);' : null};
  transform: scale(1);
  transition: all 2s ease-in-out;

  &:hover {
    transition: all 10s ease-in-out;
    transform: scale(1.5);
    filter: brightness(50%);
  }
`;

export const TextWrapper = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
  background-color: black;
  color: white;
  gap: 1rem;
  padding: 1rem 1rem;
  background-color: ${(props) => props.theme.background4};

  @media screen and (max-height: 823px), screen and (max-width: 540px) {
    height: 100%;
    padding: 0.25rem 0.25rem;
  }
  border-top: 1rem solid ${(props) => props.theme.accent1};
  border-bottom: 0.5rem solid ${(props) => props.theme.accent1};
`;

export const HeadingFive = styled.h5`
  font-weight: 500;
  font-size: 0.9rem;
  @media screen and (max-height: 823px) {
    padding: 0.25rem 0.25rem;
  }
`;

export const HeadingSix = styled.h6`
  font-weight: 300;
  font-size: 0.9rem;
  @media screen and (max-height: 823px) {
    padding: 0.25rem 0.25rem;
  }
`;
