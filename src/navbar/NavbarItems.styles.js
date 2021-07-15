import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";



export const NavbarLink = styled(NavLink)`
color: ${props => props.theme.text1};
font-family: 'Roboto Mono', monospace;
font-size: 0.9rem;
text-decoration:none;
transition: all 250ms ease-in;

&:hover, &.active {
  text-shadow: 1px 1px 2px ${props => props.theme.accent1};
}

&::after {
  content: '';
  width: 100%;
  height: 6px;
  display: block;
  background: ${props => props.theme.accent1};
  transform: scaleX(0);
  transition: all 250ms ease-in;
}

&:hover::after {
  transform: scaleX(1);
  background: ${props => props.theme.accent1};
}

&.active::after {
  transform:scaleX(1);
  background: ${props => props.theme.accent1};
}
`

export const LogoNavbarLink = styled(NavbarLink)`
font-size: 1.7rem;
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

export const ThemeToggleSwitchContainer = styled.div`
display: flex;
justify-content: center;
`