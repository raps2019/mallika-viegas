import React from 'react';
import * as Styled from './PortfolioItem.styles';

const PortfolioItem = ({ item }) => {
  return (
    // <Styled.Container>
    <Styled.ImageWrapper>
      <img src={item.img} alt=""></img>
      <Styled.TextWrapper>
        <Styled.HeadingTwo> {item.role}</Styled.HeadingTwo>
        <Styled.HeadingOne>{item.title}</Styled.HeadingOne>
        <Styled.TextOne></Styled.TextOne>
        <Styled.TextTwo>{item.description}</Styled.TextTwo>
      </Styled.TextWrapper>
    </Styled.ImageWrapper>
    // </Styled.Container>
  );
};

export default PortfolioItem;
