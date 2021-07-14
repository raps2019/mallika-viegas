import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export const NavbarContainer = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
background: ${props => props.theme.background1}
`

export const Navbar = styled.nav`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
max-width: 1366px;
`

export const NavbarLink = styled(NavLink)`
color: ${props => props.theme.text1};
font-family: 'Roboto Mono', monospace;
font-size: 1rem;
text-decoration:none;

&:hover, &.active {
  text-shadow: 1px 1px 2px ${props => props.theme.accent1};
}

&::after {
  content: '';
  width: 100%;
  height: 6px;
  display: block;
  background: black;
  transform: scaleX(0);
  transition: all 250ms ease-in;
}

&:hover::after {
  transform: scaleX(1);
}

&.active::after {
  transform:scaleX(1);
  background: ${props => props.theme.accent1};
}
`

export const LogoNavbarLink = styled(NavbarLink)`
font-size: 2rem;
font-family: 'Megrim', cursive;
text-shadow: 2px 2px 4px black;
transition: all 250ms ease-in;

&:hover, &.active {
  text-shadow: 2px 2px 4px ${props => props.theme.accent1};
}

&::after {
  height: 8px;
}
`