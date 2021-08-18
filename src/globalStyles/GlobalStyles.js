import styled, { createGlobalStyle } from 'styled-components/macro';
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    margin:0;
    padding:0;
    border: none;
    box-sizing:border-box;
    font-family: 'Inter', sans-serif;
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
  justify-content: center;
  /* gap: 4rem; */
  background: ${(props) => props.theme.background1};
`;

export const GlobalPageContainer = styled(motion.div)`
  /* z-index: 1; */
  width: 95%;
  max-width: 1200px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  width: 95%;
  max-width: 1200px;
  /* height: 100%; */
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-auto-rows: 20rem;
  /* grid-template-rows: repeat(auto-fit, minmax(20rem, 1fr)); */
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;
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

export const GlobalButton = styled.button`
font-weight: 600;
font-size: 1rem;
text-decoration: none;
background-color: ${props => props.theme.buttonBackground};
color: ${props => props.theme.buttonText};
padding: 0.5rem 0.75rem;
border-radius: 0.5rem;
transition: all 0.25s ease-out;
cursor: pointer;

&:hover {
  background-color: ${props => props.theme.buttonHoverBackground};
}
`

export default GlobalStyle;
