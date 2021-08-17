import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 1366px;
  height: 100%;
  grid-column: ${(props) =>
    props.gridType === 'rectangle' ? 'span 2' : 'span 1'};
  border-radius: 1.5rem;
  overflow: hidden;

  @media screen and (max-width: 991px) {
    grid-column: span 1;
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
  /* border-radius: 20px; */
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
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0.65) 50%,
    rgba(0, 0, 0, 0.45) 100%
  );
  backdrop-filter: blur(8px);

  @media screen and (max-height: 823px), screen and (max-width: 540px) {
    height: 100%;
    padding: 0.25rem 0.25rem;
  }
  border-radius: 1.5rem;
`;

export const HeadingFive = styled.h5`
  font-weight: 500;
  font-size: 0.8rem;
  @media screen and (max-height: 823px) {
    /* height: 100%; */
    padding: 0.25rem 0.25rem;
  }
`;

export const HeadingSix = styled.h6`
  font-weight: 300;
  font-size: 0.8rem;
  @media screen and (max-height: 823px) {
    /* height: 100%; */
    padding: 0.25rem 0.25rem;
  }
`;
