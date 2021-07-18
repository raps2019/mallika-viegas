import React from 'react';
import { writingData } from './writingData';
import PortfolioItem from '../portfolio/PortfolioItem';
import {
  GlobalPageContainer,
  GlobalContentContainer,
} from '../../../globalStyles/GlobalStyles';

const Writing = () => {
  return (
    <GlobalPageContainer>
      <GlobalContentContainer>
        <PortfolioItem item={writingData[0]}></PortfolioItem>
      </GlobalContentContainer>
    </GlobalPageContainer>
  );
};

export default Writing;
