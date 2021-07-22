import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  /* background: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const BannerImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 150px;
  filter: blur(5px) brightness(75%);

  @media screen and (max-width: 1024px) {
    width: 100vw;
  }
`;

export const HeadingThree = styled.h1`
  font-size: 1rem;
  font-weight: 400;
`;

export const Paragraph = styled.p`
  font-size: 0.8rem;
`;

export const HeadingFour = styled.h4`
  font-size: 0.8rem;
`;

export const RowContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const Anchor = styled.a`
  font-size: 0.8rem;
  color: inherit;
  text-decoration: none;
  margin-left: auto;
  margin-right: 0;
`;
