import React, { useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeContext = React.createContext();

const ThemeStore = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');

  const toggleTheme = () => {
    currentTheme === 'light'
      ? setCurrentTheme('dark')
      : setCurrentTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const themes = {
  light: {
    background1: "white", 
    background2: "white",
    accent1: 'black',
    text1: 'black',
    toggleNavbarButton1: 'black',
    toggleNavbarButton2: '#ffc300'

   
  },
  dark: {
    background1: "#0E141B", 
    background2: "#0E141B",
    accent1: 'white',
    text1: 'white',
    toggleNavbarButton1: 'white',
    toggleNavbarButton2: '#ffdd00',
  },
};

const Theme = ({ children }) => {
  const { currentTheme } = useContext(ThemeContext);

  return <ThemeProvider theme={themes[currentTheme]}>{children}</ThemeProvider>;
};

export { ThemeContext, ThemeStore, Theme };
