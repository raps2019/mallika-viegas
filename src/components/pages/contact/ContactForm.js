import React, { useContext, useState } from 'react';
import * as Styled from './ContactForm.styles';
import { ThemeContext } from '../../../contexts/ThemeStore';
import { GlobalHeadingOne } from '../../../globalStyles/GlobalStyles';

const ContactForm = () => {
  const { currentTheme } = useContext(ThemeContext);

  const [inputValues, setInputValues] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setInputValues({
      ...inputValues,
      [e.target.name]: value,
    });
  };

  return (
    <Styled.FormContainer>
      <Styled.Form
        currentTheme={currentTheme}
      >
        <GlobalHeadingOne>Contact me.</GlobalHeadingOne>

        <Styled.FieldContainer>
          <Styled.Input
            type="text"
            placeholder=" "
            name="name"
            value={inputValues.name}
            onChange={handleChange}
            required
          ></Styled.Input>
          <Styled.Label>Name</Styled.Label>
        </Styled.FieldContainer>

        <Styled.FieldContainer>
          <Styled.Input
            type="email"
            placeholder=" "
            name="email"
            value={inputValues.email}
            onChange={handleChange}
            required
          ></Styled.Input>
          <Styled.Label>Email</Styled.Label>
        </Styled.FieldContainer>

        <Styled.FieldContainer>
          <Styled.Input
            type="text"
            placeholder=" "
            name="company"
            value={inputValues.company}
            onChange={handleChange}
            required
          ></Styled.Input>
          <Styled.Label>Company</Styled.Label>
        </Styled.FieldContainer>

        <Styled.TextAreaContainer>
          <Styled.TextArea
            placeholder=" "
            name="message"
            value={inputValues.message}
            onChange={handleChange}
            required
          ></Styled.TextArea>
          <Styled.TextAreaLabel>Message</Styled.TextAreaLabel>
        </Styled.TextAreaContainer>

        <Styled.Button type="submit">SEND</Styled.Button>
      </Styled.Form>
    </Styled.FormContainer>
  );
};

export default ContactForm;
