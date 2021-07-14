import styled, { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
*, *::before, *::after {
    margin:0;
    padding:0;
    border: none;
    box-sizing:border-box;
    ${'' /* font-family: 'Open Sans', sans-serif; */}
}
`

export const GlobalPageContainer = styled.div`
/* z-index: 1; */
width: 100%;
margin-right: auto;

@media screen and (max-width: 991px) {
}
`

export default GlobalStyle;