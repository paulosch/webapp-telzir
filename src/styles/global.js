import styled, { createGlobalStyle } from 'styled-components';
import 'react-widgets/dist/css/react-widgets.css';

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
  background: ${colors.white};
  font-family: 'Montserrat', sans-serif;
  color: ${colors.dark};
}

button {
  cursor: pointer;
}

p {
  margin: 0;
}
`;

export const Content = styled.div`
  min-height: 100%;
  position: relative;
`;

export default GlobalStyle;
