import styled from "styled-components/macro";
import Linkedin from "./LinkedinLogo";

export const Footer = styled.div`
width: 100%;
height: 6rem;
display: flex;
align-items: center;
justify-content: center;
filter: ${(props) => (props.sideNavbarOpen === true && props.sideNavbar === true ? 'blur(5px);' : null)};
transition: all 0.25s ease-in;
`

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