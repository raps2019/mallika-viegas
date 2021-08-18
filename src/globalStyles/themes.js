import { withTheme } from "styled-components";

const themes = {
  light: {
    background1: "white", 
    background2: "white",
    background3: "rgba(254, 250, 224,0.75)",
    accent1: 'black',
    text1: 'black',
    toggleNavbarButton1: 'black',
    toggleNavbarButton2: '#ffc300',
    buttonText: 'white',
    buttonBackground: 'black',
    buttonHoverBackground: '#555555',
  },
  dark: {
    background1: "#0E141B", 
    background2: "#1e2939",
    background3: "rgba(25, 30, 35,0.75)",
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