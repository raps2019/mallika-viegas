import styled from 'styled-components/macro';
import { GlobalButton } from '../../../globalStyles/GlobalStyles';

export const FormContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 5rem;
  overflow-y: auto;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 560px;
  display: flex;
  font-size: 0.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text1};
  padding: 2rem 1rem;
  border-radius: 1.5rem;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.15), 0 15px 12px rgba(0, 0, 0, 0.1);
  transition: all 150ms ease-out;
  color: ${(props) => props.theme.formText};
  border-top: 2rem solid ${(props) => props.theme.accent1};
  border-bottom: 0.5rem solid ${(props) => props.theme.accent1};
  margin-top: auto;
  margin-bottom: auto;

  border-left: ${(props) => (props.currentTheme === 'dark' ? `0.5rem` : '0')}
    solid ${(props) => props.theme.accent1};

  border-right: ${(props) => (props.currentTheme === 'dark' ? `0.5rem` : '0')}
    solid ${(props) => props.theme.accent1};

  @media screen and (max-width: 560px) {
    min-width: 100vw;
    border-radius: 0px;
    box-shadow: none;
    border: none;
  }
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
  color: ${(props) => props.theme.text1};

  &:focus {
    border-bottom: 0.2rem solid ${(props) => props.theme.text1};
  }

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
  width: 100%;
  outline: none;
  background-color: inherit;
  transition: all 150ms ease-out;
  resize: none;
  width: 100%;
  height: 8rem;
  padding: 0.6rem;
  border-radius: 1rem;
  color: ${(props) => props.theme.text1};

  &:focus {
    border: 0.2rem solid ${(props) => props.theme.text1};
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translate(-1rem, -1.6rem);
    font-weight: 700;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  transform: translateY(1rem);
  transition: all 150ms ease-out;
`;

export const TextAreaLabel = styled(Label)`
  position: absolute;
  top: 0;
  left: 1rem;
  pointer-events: none;
  transform: translateY(0.4rem);
  transition: all 150ms ease-out;
`;

export const Button = styled(GlobalButton)``;
