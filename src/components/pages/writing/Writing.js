import React, { useContext } from 'react';
import { writingData } from './writingData';
import PortfolioItem from '../components/portfolioItem/PortfolioItem';
import {
  GlobalPageContainer,
  GlobalContentContainer,
  GlobalPortfolioItemsContainer,
} from '../../../globalStyles/GlobalStyles';
import * as Styled from './Writing.styles'
import { useSideNavbarContext } from '../../../contexts/SideNavbarProvider';

const Writing = () => {
  const { sideNavbarOpen, sideNavbar } = useSideNavbarContext();

  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
    >
      <GlobalContentContainer>
        <Styled.ItemsContainer>
          {writingData.map((portfolioItem) => {
            return <PortfolioItem item={portfolioItem}></PortfolioItem>;
          })}
        </Styled.ItemsContainer>
      </GlobalContentContainer>
    </GlobalPageContainer>
  );
};

export default Writing;
