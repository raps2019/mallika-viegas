import React, { useEffect, useState, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from '../globalStyles/themes';
import { useDarkMode } from '../hooks/useDarkMode';

const ThemeContext = React.createContext();

const ThemeStore = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light');
  const [componentMounted, setComponentMounted] = useState(false);

  const setMode = (mode) => {
    window.localStorage.setItem('theme', mode);
    setCurrentTheme(mode);
  };

  const toggleTheme = () => {
    if (currentTheme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };
  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia('(prefers-color-scheme:dark)').matches && !localTheme ?
      setCurrentTheme('dark') :
      localTheme ?
        setCurrentTheme(localTheme) :
        setCurrentTheme('light');
    setComponentMounted(true);
  }, []);

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, currentTheme, componentMounted }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const Theme = ({ children }) => {
  const { currentTheme } = useContext(ThemeContext);

  return <ThemeProvider theme={themes[currentTheme]}>{children}</ThemeProvider>;
};

export { ThemeContext, ThemeStore, Theme };
