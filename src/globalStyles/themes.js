import { withTheme } from "styled-components";

const themes = {
  light: {
    background1: "rgba(224,240,227)", 
    background2: "rgba(232,244,234,0.75)",
    background3: "rgba(232,244,234)",
    background4: "rgba(55,64,57,0.75)",
    accent1: 'black',
    text1: 'black',
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
    background4: "rgba(55,64,57,0.75)",
    accent1: 'white',
    text1: 'white',
    toggleNavbarButton1: 'white',
    toggleNavbarButton2: '#ffdd00',
    buttonText: 'black',
    buttonBackground: 'white',
    buttonHoverBackground: '#888888',
  },
};

export default themes;