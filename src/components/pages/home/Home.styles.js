import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const SectionContainer = styled.div`
/* position: fixed; */
/* top: 0;
left: 0; */
/* width: 100vw; */
width: 100vw;
height: calc(100vh - 16rem);
min-width: 100vw; 
/* padding-left: calc(100vw - 100% + 16px); */
padding-left: 16px;
scroll-snap-type: y mandatory;
overflow-y: scroll;
overflow-x: hidden;
background-color: transparent;
`

export const Section = styled.section`
height: 100%;
min-height: 100%;
width: 95%;
min-width: 95%;
max-width: 1366px;
margin-left: auto;
margin-right: auto;
/* margin-top: auto;
margin-bottom: auto; */
scroll-snap-align: start;
display: flex;
align-items: center;
justify-content: center;
padding: 1rem 0 1rem 0;
/* background-color: lightblue; */
`

// export const SectionTwo = styled.section`
// height: 100%;
// width: 95%;
// max-width: 1200px;
// margin-left: auto;
// margin-right: auto;
// scroll-snap-align: start;
// padding: 10rem 0;
// display: flex;
// align-items: center;
// justify-content: center;
// flex-direction: column;
// gap: 1rem;
// /* background-color: lightcoral; */
// `

export const Header = styled.header`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
text-align:justify;
height: calc(100vh - 12rem);
padding-bottom: 12rem;
`

export const HeadingThree = styled.h3`
font-weight: 600;
font-size: 1.4rem;
`

export const Strong = styled.strong`
font-size: 3rem;
font-weight: 700;
font-style:italic;
word-break: keep-all;
`

export const ListContainer = styled.div`
display: grid;
grid-auto-flow: dense;
width: 100%;
height: 100%;
grid-template-columns: repeat(1, 48%);
/* grid-template-rows: repeat(2, 1fr); */

/* align-items: center;
justify-items: center; */
grid-auto-rows: 48%;
gap: 3%;


@media screen and (max-width: 991px) {
  grid-template-columns: 100%;
  grid-template-rows: repeat(3,31%);
  }
`

export const MoreLinkContainer = styled.div`
`

export const MoreLink = styled(Link)`

`