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
    accent1: '#ffc300',
    text1: 'black',
    toggleNavbarButton1: 'black',
    toggleNavbarButton2: '#ffc300'

   
  },
  dark: {
    background1: "black", 
    accent1: '#ffdd00',
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
