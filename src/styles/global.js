import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/stars.png';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Comfortaa&display=swap');
  html, body, #root {
    min-height: 100%;
  }

  body, button {
    background-color: #0b0a0d;
    font-family: Comfortaa, sans-serif;
  }

  button {
    cursor: pointer;
    border: none;
  }

  a {
    text-decoration: none;
  }

  body {
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
  };

`;
