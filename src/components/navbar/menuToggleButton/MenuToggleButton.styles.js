import styled from 'styled-components/macro';

export const ButtonContainer = styled.div`
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.div`
  width: 60px;
  height: 45px;
  position: relative;
  margin: 50px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
  transform: scale(75%);

  span {
    display: block;
    position: absolute;
    height: 9px;
    width: 100%;
    background: ${props => props.theme.text1};
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;

    :nth-child(1) {
      top: 0px;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;

      ${(props) =>
        props.open
          ? `
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
          top: -3px;
          left: 8px;
          `
          : null}
    }

    :nth-child(2) {
      top: 18px;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;

      ${(props) =>
        props.open
          ? `
          width: 0%;
  opacity: 0;
          `
          : null}
    }

    :nth-child(3) {
      top: 36px;
      -webkit-transform-origin: left center;
      -moz-transform-origin: left center;
      -o-transform-origin: left center;
      transform-origin: left center;

      ${(props) =>
        props.open
          ? `
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
  top: 39px;
  left: 8px;
          `
          : null}
    }
  }
`;

// export const Button = styled.button`
// /* position: absolute;
// top: 1rem;
// left: 1.5rem; */
// display: flex;
// flex-direction: column;
// justify-content: space-around;
// width: 2rem;
// height: 2rem;
// background: transparent;
// border: none;
// cursor: pointer;
// padding: 0;
// z-index: 11;

// &:focus {
//   outline:none;
// }

// /* &:hover {
//   div {
//     background: ${props => props.theme.toggleNavbarButton2}
//   }
// } */

// div {
//     width: 2rem;
//     height: 0.3rem;
//     background: ${props => props.theme.toggleNavbarButton1};
//     transition: all 0.3s linear;
//     position: relative;
//     transform-origin: 1px;

//     :first-child {
//       transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
//     }

//     :nth-child(2) {
//       opacity: ${({ open }) => open ? '0' : '1'};
//       transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
//     }

//     :nth-child(3) {
//       transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
//     }
//   }

// `
