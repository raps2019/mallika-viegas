import React, {useContext} from 'react';
import * as Styled from './ContactForm.styles';
import { ThemeContext } from '../../../contexts/ThemeStore';

const ContactForm = () => {

const { currentTheme } = useContext(ThemeContext);
console.log(currentTheme)

const formContainerVariants = {
  hidden:{
    opacity:0,
    x: '-100%',
  },
  visible: {
    opacity:1,
    x: 0,
    transition: { type:'spring', delay: 0.25,duration: 0.75, }
  }
}


  return (
    <Styled.FormContainer variants={formContainerVariants}>
      <Styled.Form
      currentTheme = {currentTheme}
      // accentColor={'blue'}
      // onSubmit={handleSubmit}
      // disabled={loading}
      // variants={formContainerVariants}
      // initial="hidden"
      // animate="visible"
      >
        <Styled.HeadingThree>Contact me.</Styled.HeadingThree>

        <Styled.FieldContainer>
          <Styled.Input
            type="text"
            placeholder=" "
            name="name"
            // value={inputValues.password}
            // onChange={handleChange}
            required
          ></Styled.Input>
          <Styled.Label>Name</Styled.Label>
        </Styled.FieldContainer>

        <Styled.FieldContainer>
          <Styled.Input
            type="email"
            // accentColor={'blue'}
            placeholder=" "
            name="email"
            // value={inputValues.email}
            // onChange={handleChange}
            required
          ></Styled.Input>
          <Styled.Label>Email</Styled.Label>
        </Styled.FieldContainer>

        <Styled.FieldContainer>
          <Styled.Input
            type="text"
            // accentColor={'blue'}
            placeholder=" "
            name="company"
            // value={inputValues.confirmPassword}
            // onChange={handleChange}
            required
          ></Styled.Input>
          <Styled.Label>Company</Styled.Label>
        </Styled.FieldContainer>

        <Styled.TextAreaContainer>
          <Styled.TextArea
            // accentColor={'blue'}
            placeholder=" "
            name="message"
            // value={inputValues.confirmPassword}
            // onChange={handleChange}
            required
          ></Styled.TextArea>
          <Styled.TextAreaLabel>Message</Styled.TextAreaLabel>
        </Styled.TextAreaContainer>

        <Styled.Button
        type="submit"
      >
        SEND
      </Styled.Button>
      </Styled.Form>
    </Styled.FormContainer>
  );
};

export default ContactForm;
