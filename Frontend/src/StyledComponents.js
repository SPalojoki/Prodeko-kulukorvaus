//Globaalit tyylit määritetään täällä
//Globaalit fontit ovat määritetty index.html:ssä 


import { createGlobalStyle } from 'styled-components';

export const AppRoot = createGlobalStyle`
  body, html {
    flex-direction: column;
    align-items: center;
    padding: 0;
    margin: 0;
    background-color: white;
    padding: 0px;
  }
`;