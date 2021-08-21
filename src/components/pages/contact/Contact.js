import React, { useContext } from 'react';
import {
  GlobalPageContainer,
  } from '../../../globalStyles/GlobalStyles';
import { SideNavbarContext } from '../../../contexts/SideNavbarProvider';
import { pageContainerVariants } from '../../variants';
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
