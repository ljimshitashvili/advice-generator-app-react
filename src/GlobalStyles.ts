import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
}

body{
    font-family: 'Manrope', sans-serif;
    width: 100%;
    min-height: 100vh;
}
`;

export default GlobalStyles;
