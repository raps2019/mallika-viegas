import React from 'react';
import * as Styled from './MenuToggleButton.styles';

const MenuToggleButton = (props) => {
  const { sideNavbarOpen, toggleSideNavbar } = props;

  return (
    <Styled.ButtonContainer>
    <Styled.Button open={sideNavbarOpen} onClick={() => toggleSideNavbar()}>
      {/* <div></div>
      <div></div>
      <div></div> */}
      <span></span>
      <span></span>
      <span></span>
    </Styled.Button>
    </Styled.ButtonContainer>

  );
};

export default MenuToggleButton;
