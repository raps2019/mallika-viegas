import styled, { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    margin:0;
    padding:0;
    border: none;
    box-sizing:border-box;
    font-family: 'Roboto Mono', monospace;

    ${'' /* font-family: 'Open Sans', sans-serif; */}
}

body {
  background: ${props => props.theme.background2};
}
`;

export const GlobalWindowContainer = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
`


export const GlobalPageContainer = styled.div`
  /* z-index: 1; */
  width: 100%;
  height: 100%;
  /* padding: 50px 0; */
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background: ${(props) => props.theme.background1};
  color: ${(props) => props.theme.text1};
  filter: ${(props) => (props.sideNavbarOpen === true && props.sideNavbar === true ? 'blur(5px);' : null)};

  @media screen and (max-width: 991px) {
  }
`;

export const GlobalContentContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  height: 100%;
`;

export const GlobalProjectListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: 20rem;
  /* grid-template-rows: repeat(auto-fit, minmax(20rem, 1fr)); */
  align-items: center;
  justify-items: center;
  grid-gap: 50px;
`


export default GlobalStyle;
