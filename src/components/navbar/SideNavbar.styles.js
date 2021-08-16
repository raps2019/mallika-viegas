import styled from 'styled-components/macro';
import { motion } from 'framer-motion';


export const SideNavbarContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 160px;
  height: 100vh;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.background2};
  transition: all 0.25s ease-out;
  box-shadow: 2px 2px 4px 4px rgba(0,0,0,.1);
  padding: 3rem 0;
  z-index: 12;
  /* border-right: ${props => props.currentTheme === 'dark' ? `1px ${props.theme.text1} solid` : null}; */
  

  @media screen and (max-width: 360px) {
    width: 120px;
    border-right: 0;
  }
`;

export const SideNavbar = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
`;
