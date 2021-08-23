import styled from "styled-components/macro";

export const Container = styled.div`
/* position: fixed; */
/* top: 0;
left: 0; */
/* width: 100vw; */
width: 100vw;
height: calc(100vh - 8rem);
max-height: calc(100vh - 8rem);
/* padding-left: calc(100vw - 100% + 16px); */
/* padding-left: 16px; */
scroll-snap-type: y mandatory;
overflow-y: scroll;
overflow-x: hidden;
background-color: transparent;
display: flex;
justify-content: center;
align-items: flex-start;
padding-bottom: 5rem;
`