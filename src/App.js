import React from 'react';
import { Reset } from 'styled-reset';

import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
