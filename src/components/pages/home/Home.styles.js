import styled from "styled-components/macro";
import { Link } from "react-router-dom";



export const Header = styled.header`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
text-align:justify;
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
grid-template-columns: repeat(2, minmax(16rem, 1fr));
/* align-items: center;
justify-items: center; */
grid-auto-rows: 24rem;
grid-gap: 1rem;
grid-auto-flow: dense;

@media screen and (max-width: 991px) {
  grid-template-columns: 1fr;
  }
`

export const MoreLinkContainer = styled.div``

export const MoreLink = styled(Link)``