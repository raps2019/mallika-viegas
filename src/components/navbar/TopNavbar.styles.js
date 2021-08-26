import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const TopNavbarContainer = styled.div`
  width: 100%;
  height: 8rem;
  min-height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: ${(props) => props.theme.background1};
  position: absolute;
  top: 0;
`;

export const TopNavbar = styled.nav`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1366px;
`;

export const LogoNavbarLink = styled(NavLink)`
  color: ${(props) => props.theme.text1};
  font-size: 1.2rem;
  font-family: 'Prompt', sans-serif;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.25s ease-in;
  letter-spacing: 0.1rem;

  &::after {
    content: '';
    width: 100%;
    height: 0.25rem;
    display: block;
    background: ${(props) => props.theme.accent1};
    transform: scaleX(0);
    transform-origin: left;
    transition: all 0.25s ease-in;
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
`;

export const NavbarLeft = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 50px;
  filter: ${(props) =>
    props.sideNavbarOpen === true && props.sideNavbar === true
      ? 'blur(5px);'
      : null};
  transition: all 0.25s ease-in;
`;
