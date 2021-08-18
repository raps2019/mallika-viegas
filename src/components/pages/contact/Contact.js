import React, { useContext } from 'react';
import {
  GlobalPageContainer,
  GlobalTextContainer,
} from '../../../globalStyles/GlobalStyles';
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider';
import { pageContainerVariants } from '../../variants';
import * as Styled from './Contact.styles'
import ContactForm from './ContactForm';

const Contact = () => {
  const { sideNavbarOpen, sideNavbar } = useContext(SideNavbarContext);

  return (
    <GlobalPageContainer
      sideNavbarOpen={sideNavbarOpen}
      sideNavbar={sideNavbar}
      variants={pageContainerVariants}
      initial="hidden"
      animate="visible"
    >
   <ContactForm></ContactForm>
    </GlobalPageContainer>
  );
};

export default Contact;
