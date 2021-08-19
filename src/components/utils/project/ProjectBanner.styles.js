import styled from 'styled-components/macro';
import { motion } from 'framer-motion';

// export const Container = styled(motion.div)`
//   position: relative;
//   width: 100%;
//   max-width: 1366px;
//   height: 100%;
//   grid-column: ${(props) =>
//     props.gridType === 'rectangle' ? 'span 2' : 'span 1'};
//     border-radius: 20px;
//     overflow: hidden;


//   @media screen and (max-width: 991px) {
//     grid-column: span 1;
//   }
// `;

export const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 300px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  border-radius: 20px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    width: 100vw;
    border-radius: 0;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: ${props => props.objectPosition ? props.objectPosition : null};
  /* filter: blur(5px) brightness(75%); */
`;

export const TextWrapper = styled(motion.div)`
  position: absolute;
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-items: left; */
  background-color: ${props => props.theme.background4};
  color: white;
  gap: 0.5rem;
  padding: 1rem 2rem;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.45) 0%,
    rgba(0, 0, 0, 0.65) 50%,
    rgba(0, 0, 0, 0.45) 100%
  );
  /* backdrop-filter: blur(8px); */
  border-radius: 0 1.5rem 0 0;

  /* @media screen and (max-height: 823px),
  screen and (max-width: 540px) {
    height: 100%;
    padding: 0.25rem 0.25rem;
  } */

  @media screen and (max-width: 1024px) {
    /* width: 100vw; */
    border-radius: 0;
  }
`;

export const HeadingFive = styled.h5`
  font-weight: 500;
  font-size: 0.9rem;
  @media screen and (max-height: 823px) {
    /* height: 100%; */
    /* padding: 0.25rem 0.25rem; */
  }
`;

export const HeadingSix = styled.h6`
  font-weight: 300;
  font-size: 0.9rem;
  @media screen and (max-height: 823px) {
    /* height: 100%; */
    /* padding: 0.25rem 0.25rem; */
  }
`;
