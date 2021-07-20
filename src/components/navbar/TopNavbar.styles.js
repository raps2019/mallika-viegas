import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const TopNavbarContainer = styled.div`
  width: 100%;
  height: 8rem;
  min-height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.background1};
  transition: all 0.25s ease-out;
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
  font-size: 1.2rem;
  /* font-family: 'Megrim', cursive; */
  font-family: 'Baloo 2', cursive;
  font-weight: 500;
  text-decoration: none;
  transition: all 250ms ease-in;

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
    transition: all 250ms ease-in;
  }

  &:hover::after {
    transform: scaleX(1);
    background: ${(props) => props.theme.accent1};
  }

  &.active::after {
    transform: scaleX(1);
    background: ${(props) => props.theme.accent1};
  }
`;
