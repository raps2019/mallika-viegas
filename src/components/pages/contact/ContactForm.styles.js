import styled from 'styled-components/macro';
import { GlobalButton } from '../../../globalStyles/GlobalStyles';
import { motion } from 'framer-motion';

export const FormContainer = styled(motion.div)`
  min-height: calc(100vh - 12rem);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 2rem; */
`;

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  /* gap: 0.4rem; */
  max-width: 560px;
  font-size: 0.9rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.text1};
  padding: 2rem 1rem;
  border-radius: 1.5rem;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.15), 0 15px 12px rgba(0, 0, 0, 0.1);
  transition: all 150ms ease-out;
  /* background-color: ${(props) => props.theme.formBackground}; */
  color: ${(props) => props.theme.formText};
  border-top: 2rem solid ${(props) => props.theme.accent1};
  border-bottom: 0.5rem solid ${(props) => props.theme.accent1};

  border-left: ${(props) => (props.currentTheme === 'dark' ? `0.5rem` : '0')}
    solid ${(props) => props.theme.accent1};

  border-right: ${(props) => (props.currentTheme === 'dark' ? `0.5rem` : '0')}
    solid ${(props) => props.theme.accent1};

  @media screen and (max-width: 560px), screen and (max-height: 760px) {
    min-width: 100vw;
    height: 100%;
    /* padding: 0; */
    border-radius: 0px;
    box-shadow: none;
    /* background-color: transparent; */
  }
`;

export const HeadingThree = styled.h3`
  font-size: 1.5rem;
`;

export const FieldContainer = styled.div`
  position: relative;
  margin: 15px 0;
  width: 90%;
  max-width: 100%;
`;

export const TextAreaContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
  width: 90%;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 0.2rem solid ${(props) => props.theme.accent1};
  padding: 10px 0;
  width: 100%;
  outline: none;
  background-color: inherit;
  transition: all 150ms ease-out;
  color: ${props => props.theme.text1};

  /* &:focus {
    border-bottom: 1px solid
      ${(props) => {
    if (props.accentColor === 'green') {
      return props.theme.greenAccentColor;
    } else if (props.accentColor === 'blue') {
      return props.theme.blueAccentColor;
    } else if (props.accentColor === 'orange') {
      return props.theme.orangeAccentColor;
    }
  }};
  } */

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-15px);
    font-size: 1rem;
    font-weight: 700;
  }
`;

export const TextArea = styled.textarea`
  border: none;
  border: 0.2rem solid ${(props) => props.theme.accent1};
  padding: 10px 0;
  /* font-size: 14px; */
  width: 100%;
  outline: none;
  background-color: inherit;
  transition: all 150ms ease-out;
  resize: none;
  width: 100%;
  height: 8rem;
  padding: 0.6rem;
  border-radius: 1rem;
  color: ${props => props.theme.text1};


  /* &:focus {
    border-bottom: 1px solid
      ${(props) => {
    if (props.accentColor === 'green') {
      return props.theme.greenAccentColor;
    } else if (props.accentColor === 'blue') {
      return props.theme.blueAccentColor;
    } else if (props.accentColor === 'orange') {
      return props.theme.orangeAccentColor;
    }
  }};
  } */

  &:focus + label,
  &:not(:placeholder-shown) + label {
    /* transform: translateY(-1.6rem);
    transform: translateX(-1rem); */
    transform: translate(-1rem, -1.6rem);

    /* font-size: 1em; */
    font-weight: 700;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  /* font-size: 1rem; */
  pointer-events: none;
  transform: translateY(1rem);
  transition: all 150ms ease-out;
`;

export const TextAreaLabel = styled(Label)`
  position: absolute;
  top: 0;
  left: 1rem;
  /* font-size: 1rem; */
  pointer-events: none;
  transform: translateY(0.4rem);
  transition: all 150ms ease-out;
`;

export const Button = styled(GlobalButton)``;
