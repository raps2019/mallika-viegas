import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export const NavbarContainer = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
`

export const Navbar = styled.nav`
width: 100%;
display: flex;
align-items: center;
justify-content: space-around;
`

export const NavbarLink = styled(NavLink)`
font-family: 'Roboto Mono', monospace;
font-size: 1rem;
text-decoration:none;
color: inherit;

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
  background: gold;
}
`

export const LogoNavbarLink = styled(NavbarLink)`
font-size: 2.5rem;
font-family: 'Megrim', cursive;

&::after {
  height: 10px;
}
`