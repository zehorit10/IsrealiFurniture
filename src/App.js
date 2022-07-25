import React from 'react';
import './App.css';
import Routers from './Routers';

import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme, { cacheRtl } from "./theme";
import ContextProvider from './context/ContextProvider';


function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <ContextProvider>
          <CssBaseline />
          <Routers />
        </ContextProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
