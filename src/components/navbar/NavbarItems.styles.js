import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";



export const NavbarLink = styled(NavLink)`
color: ${props => props.theme.text1};
font-family: 'Roboto Mono', monospace;
font-size: 0.9rem;
font-weight: 400;
text-decoration:none;
transition: all 250ms ease-in;

&:hover, &.active {
  /* text-shadow: 1px 1px 2px ${props => props.theme.accent1}; */
  /* text-shadow: 0px 0px 3px ${props => props.theme.accent1}; */

}

&::after {
  content: '';
  width: 100%;
  height: 0.15rem;
  display: block;
  background: ${props => props.theme.accent1};
  transform: scaleX(0);
  transform-origin: left;
  transition: all 250ms ease-in;
}

&:hover::after {
  transform: scaleX(1);
}

&.active::after {
  transform:scaleX(1);
}
`



export const ThemeToggleSwitchContainer = styled.div`
display: flex;
justify-content: center;
`