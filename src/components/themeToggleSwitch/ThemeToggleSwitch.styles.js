import styled from 'styled-components/macro';
import { themes } from '../../contexts/ThemeStore';
//switch-button

export const Span = styled.span`
  content: '';
  position: absolute;
  /* top: 4px; */
  left: 3px;
  width: 14px;
  height: 14px;
  border-radius: 100px;
  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4); */
  /* border: black solid 1px; */

  transition: 0.3s;
  background: ${props => props.theme.accent1}
`;

//switch-background
export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 50px;
  height: 24px;
  /* background: ${(props) =>
    props.currentTheme === 'dark'
      ? 'white'
      : 'black'}; */
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  border-radius: 100px;
  border: 3px solid ${props => props.theme.text1};
  position: relative;
  transition: all 0.3s ease-in-out;

  &:active ${Span} {
    width: 30px;
  };

  &:hover ${Span}{
    background: ${(props) =>
    props.currentTheme === 'dark' ? themes.light.secondary : themes.dark.secondary};
  };
  &:hover {
    border: 3px solid ${props => props.theme.accent1};
    }
`;

//switch-checkbox
export const Input = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + ${Label} ${Span} {
    left: calc(100% - 3px);
    transform: translateX(-100%);
    
  }

  &:checked + ${Label}:hover ${Span} {
background: ${(props) =>
      props.currentTheme === 'dark'
        ? themes.light.secondary
        : themes.dark.secondary};  }
  
`;
