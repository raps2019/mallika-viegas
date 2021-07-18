import styled, { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    margin:0;
    padding:0;
    border: none;
    box-sizing:border-box;
    ${'' /* font-family: 'Open Sans', sans-serif; */}
}
`;

export const GlobalPageContainer = styled.div`
  /* z-index: 1; */
  width: 100%;
  /* padding: 20px; */
  /* margin-right: auto; */
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.25s ease-out;
  background: ${(props) => props.theme.background2};
  filter: ${(props) => (props.sideNavbarOpen === true ? 'blur(5px);' : null)};


  @media screen and (max-width: 991px) {
  }
`;

export const GlobalContentContainer = styled.div`
  padding: 25px 0;
  width: 95%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  /* padding: 50px; */
`;

export default GlobalStyle;
