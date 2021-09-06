import styled from "styled-components/macro";
import Linkedin from "./LinkedinLogo";
import Instagram from "./InstagramLogo"

export const Footer = styled.div`
position: absolute;
height: 3rem;
min-height: 3rem;
display: flex;
align-items: center;
justify-content: center;
filter: ${(props) => (props.sideNavbarOpen === true && props.sideNavbar === true ? 'blur(5px);' : null)};
z-index: 2;
background-color: ${props => props.theme.background2};
border-radius: 1.5rem 1.5rem 0.5rem 0.5rem;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
border: 0.25rem solid ${props => props.theme.accent1};
border-bottom: none;
padding: 0 2rem;
gap: 1rem;
bottom: 0%;
pointer-events: ${(props) =>
    props.sideNavbarOpen === true && props.sideNavbar === true
      ? 'none'
      : null};



&:hover {
  transition: all 0.25s ease-in;
  background-color: ${props => props.theme.background1};
  border-color: ${props => props.theme.accent2}
}
`;

export const LogoContainer = styled.a`
  height: 1.5rem;
  width: 1.5rem;
`

export const LinkedinLogo = styled(Linkedin)`
height: 100%;
width: 100%;
fill: ${props => props.theme.text1};
transition: all 0.25s ease-in;

&:hover {
  fill: #0077B5;
}
`

export const InstagramLogo = styled(Instagram)`
height: 100%;
width: 100%;
fill: ${props => props.theme.text1};
transition: all 0.25s ease-in;

&:hover {
  fill: #8a3ab9;
}
`