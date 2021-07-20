import styled from 'styled-components/macro';


export const SideNavbarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 230px;
  height: 100vh;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.background1};
  transition: all 0.25s ease-out;
  box-shadow: 2px 2px 4px 4px rgba(0,0,0,.1);
  padding: 3rem 0;
  z-index: 10;

  @media screen and (max-width: 540px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const SideNavbar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
