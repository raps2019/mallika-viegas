import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  grid-column: ${(props) =>
    props.gridType === 'rectangle' ? 'span 2' : 'span 1'};

  @media screen and (max-width: 991px) {
    grid-column: span 1;
  }
`;

export const ImageWrapperLink = styled(Link)``;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const TextWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: black;
  color: white;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: rgb(255,255,255);
  background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,0) 100%);
`;

export const HeadingFive = styled.h5`
font-weight: 500;
font-size: 1rem`

export const HeadingSix = styled.h6`
font-weight:300;
font-size: 0.9rem`
