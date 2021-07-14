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
    accent1: 'gold',
    text1: 'black'
   
  },
  dark: {
    background1: "black", 
    accent1: 'gold',
    text1: 'white'
  },
 
};

const Theme = ({ children }) => {
  const { currentTheme } = useContext(ThemeContext);

  return <ThemeProvider theme={themes[currentTheme]}>{children}</ThemeProvider>;
};

export { ThemeContext, ThemeStore, Theme };
