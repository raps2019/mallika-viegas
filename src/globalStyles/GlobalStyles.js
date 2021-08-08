import styled, { createGlobalStyle } from 'styled-components/macro';
import { motion } from 'framer-motion';

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
  background: ${(props) => props.theme.background2};
}
`;

export const GlobalWindowContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  /* gap: 4rem; */
  background: ${(props) => props.theme.background1};
`;

export const GlobalPageContainer = styled(motion.div)`
  /* z-index: 1; */
  width: 90%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  gap: ${props => props.noGap && props.noGap=== true ? '0rem' : '4rem'};
  /* background: ${(props) => props.theme.background1}; */
  color: ${(props) => props.theme.text1};
  filter: ${(props) =>
    props.sideNavbarOpen === true && props.sideNavbar === true
      ? 'blur(5px);'
      : null};
  transition: all 0.25s ease-in;
  flex-grow: 1;
`;

export const GlobalProjectListContainer = styled(motion.div)`
  width: 100%;
  height: 100;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: 20rem;
  /* grid-template-rows: repeat(auto-fit, minmax(20rem, 1fr)); */
  align-items: center;
  justify-items: center;
  grid-gap: 4rem;
`;
export const GlobalTextContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  font-size: 0.8em;
  color: ${(props) => props.theme.text1};
  transition: all 0.25s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default GlobalStyle;
