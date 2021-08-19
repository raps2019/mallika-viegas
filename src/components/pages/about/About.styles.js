import styled from 'styled-components/macro';

// export const TextContainer = styled.div`
// padding: 5%;
// width: 100%;
// height: 100%;
// font-size: 0.8em;
// color: ${props => props.theme.text1};
// transition: all 0.25s ease-out;
// display: flex;
// align-items: center;
// justify-content: center;
// `

export const Container = styled.div`
  /* background-color: lightblue; */
  width: 100%;
  height: calc(100vh - 12rem);
  min-height: calc(100vh - 12rem);
  /* margin-top: 8rem; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  /* background-color: red; */
  /* padding: 2rem; */
  position: relative;
  /* overflow-y: scroll; */
`;

// export const GridContainer = styled.div`
// display: grid;
// grid-template-columns: 1fr 1fr 1fr;
// grid-template-rows: 100%;
// /* background-color: aliceblue; */
// align-items: center;
// justify-items: center;
// `

export const ImageContainer = styled.div`
  width: 80%;
  height: 100%;
  position: absolute;
  left: 0;
  border-radius: 3rem 10rem 1.5rem 5rem;
  overflow: hidden;

  @media screen and (max-width: 911px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%; /* height:100%; */
  object-fit: cover;
  object-position: 100% 20%;
`;

export const TextContainer = styled.div`
  padding: 2rem;
  border-radius: 1.5rem 1.5rem 1.5rem 3rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 45%;
  right: 0;
  bottom: 10%;
  background-color: ${(props) => props.theme.aboutCardBackground};
  color:  ${(props) => props.theme.aboutText};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  /* backdrop-filter: blur(5px); */
  /* backdrop-filter: brightness(50%); */

  @media screen and (max-width: 911px) {
    width: 100%;
    bottom: 0;
    border-radius: 1.5rem 1.5rem 1.5rem 5rem;
    box-shadow: none;
    backdrop-filter: blur(0px);
    /* backdrop-filter: brightness(25%); */

  }
`;

export const Paragraph = styled.p`
font-size: 0.8rem`;
