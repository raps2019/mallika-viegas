import styled from "styled-components/macro";

export const Button = styled.button`
position: absolute;
top: 1rem;
left: 1rem;
display: flex;
flex-direction: column;
justify-content: space-around;
width: 2rem;
height: 2rem;
background: transparent;
border: none;
cursor: pointer;
padding: 0;
z-index: 10;

&:focus {
  outline:none;
}

&:hover {
  div {
    background: ${props => props.theme.toggleNavbarButton2}
  }
}

div {
    width: 2rem;
    height: 0.3rem;
    background: ${props => props.theme.toggleNavbarButton1};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

`

