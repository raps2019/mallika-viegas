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
        <Styled.HeadingFive> {item.type.toUpperCase()}</Styled.HeadingFive>
        <Styled.HeadingFour>{item.title}</Styled.HeadingFour>
        <Styled.HeadingSix>{item.client.toUpperCase()}</Styled.HeadingSix>
      </Styled.TextWrapper>
    </Styled.ImageWrapper>
    // </Styled.Container>
  );
};

export default PortfolioItem;
