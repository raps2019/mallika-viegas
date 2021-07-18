import React, { useContext } from 'react';
import { writingData } from './writingData';
import PortfolioItem from '../components/portfolioItem/PortfolioItem';
import {
  GlobalPageContainer,
  GlobalContentContainer,
} from '../../../globalStyles/GlobalStyles';
import { useSideNavbarContext } from '../../../contexts/SideNavbarProvider';

const Writing = () => {
  const { sideNavbarOpen } = useSideNavbarContext();

  return (
    <GlobalPageContainer sideNavbarOpen={sideNavbarOpen}>
      <GlobalContentContainer>
        {writingData.map((portfolioItem) => {
          return (
            <PortfolioItem
              item={portfolioItem}
            ></PortfolioItem>
          );
        })}
      </GlobalContentContainer>
    </GlobalPageContainer>
  );
};

export default Writing;
