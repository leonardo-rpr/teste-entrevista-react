import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    box-sizing: borde-box;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
  }

  .Toastify__toast--error {
    background: #f2295b !important;
  }
`;
