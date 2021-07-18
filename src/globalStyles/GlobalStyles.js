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
padding: 20px;
/* margin-right: auto; */
display: flex;
align-items: center;
justify-content: center;

@media screen and (max-width: 991px) {
}
`

export const GlobalContentContainer = styled.div`
    width: 1300px;
    padding: 50px;
`

export default GlobalStyle;