import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import ArrowDown from "./ArrowDownIcon";
import ArrowUp from "./ArrowUpIcon";
import { motion } from "framer-motion";

export const SectionContainer = styled.div`
width: 100vw;
min-width: 100vw; 
scroll-snap-type: y mandatory;
overflow-y: scroll;
overflow-x: hidden;
background-color: transparent;
`

export const Section = styled.section`
height: 95%;
min-height: 95%;
width: 95%;
max-width: 1024px;
margin-left: auto;
margin-right: auto;
scroll-snap-align: start;
display: flex;
align-items: center;
justify-content: center;
padding: 0rem 0 1rem 0;
`;

export const Header = styled.header`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
text-align:justify;
height: calc(100vh - 12rem);
padding-bottom: 12rem;
`;

export const HeadingThree = styled(motion.h3)`
font-weight: 600;
font-size: 1rem;
letter-spacing: 0.05rem;

text-align: center;
`;

export const Strong = styled.strong`
font-size: 3rem;
font-weight: 700;
font-style:italic;
word-break: keep-all;
`;

export const ListContainer = styled.div`
display: grid;
grid-auto-flow: dense;
width: 100%;
height: 100%;
grid-template-columns: repeat(1, 48%);
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

export const ScrollUpButton = styled(motion.button)`
position:absolute;
top:8rem;
z-index: 11;
background-color: ${props => props.theme.buttonBackground};
text-decoration: none;
cursor: pointer;
height: 2.5rem;
width: 2.5rem;
border-radius: 50%;
`

export const ScrollDownButton = styled(motion.button)`
position:absolute;
bottom:8rem;
z-index: 11;
background-color: ${props => props.theme.buttonBackground};
text-decoration: none;
cursor: pointer;
height: 2.5rem;
width: 2.5rem;
border-radius: 50%;
`

export const ArrowUpIcon = styled(ArrowUp)`
stroke: ${props => props.theme.buttonText};
height: 100%;
`
export const ArrowDownIcon = styled(ArrowDown)`
stroke: ${props => props.theme.buttonText};
height: 100%;
`