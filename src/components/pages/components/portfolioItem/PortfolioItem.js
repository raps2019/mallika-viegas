import React, {useContext} from 'react';
import * as Styled from './PortfolioItem.styles';
import { ThemeContext } from '../../../../contexts/ThemeStore';


const PortfolioItem = ({ item }) => {
  const { currentTheme } = useContext(ThemeContext);


  return (
    // <Styled.Container>
    <Styled.ImageWrapper>
      <Styled.Image src={item.img} alt="" currentTheme={currentTheme}></Styled.Image>
      <Styled.TextWrapper>
        <Styled.HeadingTwo> {item.type.toUpperCase()}</Styled.HeadingTwo>
        <Styled.HeadingOne>{item.title}</Styled.HeadingOne>
        <Styled.HeadingThree>{item.client.toUpperCase()}</Styled.HeadingThree>
      </Styled.TextWrapper>
    </Styled.ImageWrapper>
    // </Styled.Container>
  );
};

export default PortfolioItem;
