import styled from 'styled-components/macro';
import { motion } from 'framer-motion';


export const Container = styled.div`
  width: 100%;
  height: calc(100% - 5rem);
  position: relative;
  overflow: hidden;
`;

export const ImageContainer = styled.div`
  width: 80%;
  height: 100%;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 3rem 10rem 1.5rem 5rem;
  overflow: hidden;
  border: 1rem solid ${props => props.theme.accent2};

  @media screen and (max-width: 911px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%; 
  object-fit: cover;
  object-position: 50% 20%;
  filter: ${(props) =>
    props.currentTheme === 'dark' ? 'brightness(80%);' : null};
`;

export const TextContainer = styled(motion.div)`
  padding: 2rem;
  border-radius: 1.5rem 1.5rem 1.5rem 3rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 35%;
  right: 0;
  bottom: 10%;
  background-color: ${(props) => props.theme.aboutCardBackground};
  color: ${props => props.theme.text1};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: 1rem solid ${props => props.theme.accent1};
  overflow: auto;

  @media screen and (max-width: 911px) {
    width: 100%;
    bottom: 0;
    border-radius: 1.5rem 1.5rem 1.5rem 5rem;
    box-shadow: none;
    backdrop-filter: blur(0px);
  }

  @media screen and (max-width: 410px) {
    height: 100%;
  }
`;

export const Paragraph = styled.p`
font-size: 0.8rem`;
