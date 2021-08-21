import { withTheme } from "styled-components";

const themes = {
  light: {
    background1: "rgba(255,255,255)", 
    background2: "rgba(242,242,242,0.75)",
    background3: "rgba(242,242,242)",
    background4: "rgba(0,0,0,0.75)",
    formBackground: "rgba(242, 242, 242,1)",
    aboutCardBackground: "rgba(255,255,255,0.90)",
    accent1: 'rgba(255, 175, 104,0.90)',
    accent2: 'rgba(255, 215, 181)',
    text1: 'black',
    formText: 'rgba(0,0,0)',
    aboutText: 'black',
    toggleNavbarButton1: 'black',
    toggleNavbarButton2: '#ffc300',
    buttonText: 'black',
    buttonBackground: 'rgba(18,21,19)',
    buttonHoverBackground: '#555555',
  },
  dark: {
    background1: "rgba(14, 20, 27,1)", 
    background2: "rgba(25, 30, 35,0.75)",
    background3: "rgba(25, 30, 35)",
    background4: "rgba(0,0,0,0.75)",
    formBackground: "rgba(255, 179, 71,0.025)",
    aboutCardBackground: "rgba(14, 20, 27,0.90)",
    accent1: 'rgba(254, 201, 143,0.90)',
    accent2: 'rgba(255, 215, 181)',
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