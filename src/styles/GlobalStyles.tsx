import {createGlobalStyle} from "styled-components";
import {ITheme} from "./Theme";

const GlobalStyles = createGlobalStyle<{theme: ITheme}>`
  
  :root {
    --light-background-color: #FAFAFA;
    --light-text-color: #111517;
    --light-elements-background: #FFFFFF;      

    --dark-background-color: #202C36;
    --dark-text-color: #FFFFFF;
    --dark-elements-background: #2B3844;    

    --header-box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.0562);
    --elements-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.0532);
    --cards-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.0294);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Nunito Sans', sans-serif;
    background: ${({theme}) => theme.backgroundColor};
    transition: background .2s linear, color .2s linear;
  }
  a {
    color: ${({theme}) => theme.textColor};
    text-decoration: none;
  }




`;

export default GlobalStyles