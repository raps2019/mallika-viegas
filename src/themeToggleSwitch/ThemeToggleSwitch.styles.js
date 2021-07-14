import styled from 'styled-components/macro';
import { themes } from '../contexts/ThemeStore';

//switch-button
export const Span = styled.span`
  content: '';
  position: absolute;
  /* top: 4px; */
  left: 3px;
  width: 25px;
  height: 25px;
  border-radius: 100px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4);
  /* border: black solid 1px; */

  transition: 0.3s;
  background: ${(props) =>
    props.currentTheme === 'dark' ? themes.light.primary : themes.dark.primary};
`;

//switch-background
export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  width: 60px;
  height: 32px;
  background: ${(props) =>
    props.currentTheme === 'dark'
      ? themes.light.background1
      : themes.dark.background1};
  /* box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.4); */
  border-radius: 100px;
  position: relative;
  transition: background-color 0.3s;

  &:active ${Span} {
    width: 30px;
  };

  &:hover ${Span}{
    background: ${(props) =>
    props.currentTheme === 'dark' ? themes.light.secondary : themes.dark.secondary};
  };
  /* &:hover {
      background: ${(props) =>
    props.currentTheme === 'dark' ? themes.light.secondary : themes.dark.secondary};
    } */
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
