// import { useEffect, useState } from 'react';

// export const useDarkMode = () => {
//   const [currentTheme, setCurrentTheme] = useState('light');
//   const [componentMounted, setComponentMounted] = useState(false);
//   const setMode = mode => {
//     window.localStorage.setItem('theme', mode)
//     setCurrentTheme(mode)
//   };

//   const toggleTheme = () => {
//     if (currentTheme === 'light') {
//       setMode('dark')
//     } else {
//       setMode('light')
//     }
//   };

//   useEffect(() => {
//     const localTheme = window.localStorage.getItem('theme');
//     window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ?
//       setMode('dark') :
//       localTheme ?
//         setCurrentTheme(localTheme) :
//         setMode('light');
//     setComponentMounted(true);
//   },[]);

//   return {currentTheme, toggleTheme, componentMounted}
// };
