import { withTheme } from "styled-components";

const themes = {
  light: {
    background1: "rgba(255,255,255)", 
    background2: "rgba(242,242,242,0.75)",
    background3: "rgba(242,242,242)",
    background4: "rgba(0,0,0,0.75)",
    formBackground: "rgba(242,242,242,1)",
    aboutCardBackground: "rgba(0,0,0,0.75)",
    accent1: 'black',
    text1: 'black',
    formText: 'rgba(0,0,0)',
    aboutText: 'white',
    toggleNavbarButton1: 'black',
    toggleNavbarButton2: '#ffc300',
    buttonText: 'white',
    buttonBackground: 'rgba(18,21,19)',
    buttonHoverBackground: '#555555',
  },
  dark: {
    background1: "#0E141B", 
    background2: "rgba(25, 30, 35,0.75)",
    background3: "rgba(25, 30, 35)",
    background4: "rgba(0,0,0,0.75)",
    formBackground: "rgba(255,255,255,0.025)",
    aboutCardBackground: "rgba(255,255,255,0.75)",
    accent1: 'white',
    text1: 'white',
    formText: 'rgba(255,255,255)',
    aboutText: 'black',
    toggleNavbarButton1: 'white',
    toggleNavbarButton2: '#ffdd00',
    buttonText: 'black',
    buttonBackground: 'white',
    buttonHoverBackground: '#888888',
  },
};

export default themes;