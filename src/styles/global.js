import { createGlobalStyle } from 'styled-components';

import colors from './colors';

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

html, body, #root {
  height: 100%;
}

body{
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  background: ${colors.primary};
  font-family: 'Montserrat', sans-serif;
  color: ${colors.white};
}

button {
  cursor: pointer;
}
`;

export default GlobalStyle;
