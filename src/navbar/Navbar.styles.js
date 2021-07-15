import styled from 'styled-components/macro';

export const TopNavbarContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.background1};
  transition: all 250ms ease-in;
  box-shadow: 2px 2px 4px 4px rgba(0,0,0,.1);
`;

export const SideNavbarContainer = styled.div`
  width: 230px;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.background1};
  transition: all 250ms ease-in;
  box-shadow: 2px 2px 4px 4px rgba(0,0,0,.1);
  padding: 3rem 0;


  @media screen and (max-width: 540px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const TopNavbar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 1366px;
  /* box-shadow: 5px 5px 10px #999; */
`;

export const SideNavbar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
