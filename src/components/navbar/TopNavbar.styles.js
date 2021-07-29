import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const TopNavbarContainer = styled.div`
  width: 100%;
  height: 8rem;
  min-height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease-in;
  /* background-color: transparent; */
`;

export const TopNavbar = styled.nav`

  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* justify-content: ${(props) =>
    props.sideNavbar === false ? 'space-between' : 'flex-start'}; */
  max-width: 1366px;
  /* box-shadow: 5px 5px 10px #999; */
`;

export const LogoNavbarLink = styled(NavLink)`
  color: ${(props) => props.theme.text1};
  font-size: 2rem;
  /* font-family: 'Tourney', cursive;   */
  font-family: 'Assistant', sans-serif;
  font-weight: 300;
  text-decoration: none;
  transition: all .25s ease-in;


  /* &:hover, &.active {
  text-shadow: 0px 0px 5px ${(props) => props.theme.accent1};
} */

  &::after {
    content: '';
    width: 100%;
    height: 0.15rem;
    display: block;
    background: ${(props) => props.theme.accent1};
    transform: scaleX(0);
    transform-origin: left;
    transition: all .25s ease-in;
  }

  &:hover::after {
    transform: scaleX(1);
  }

  &.active::after {
    transform: scaleX(1);
  }
`;


export const NavbarRight = styled.div`
display: flex;
align-items: flex-end;
gap: 50px;
`

export const NavbarLeft = styled.div`
display: flex;
align-items: flex-start;
gap: 50px;
filter: ${(props) => (props.sideNavbarOpen === true && props.sideNavbar === true ? 'blur(5px);' : null)};
transition: all 0.25s ease-in;
`