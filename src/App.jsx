import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Navegation from './components/Navegation';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navegation />
    </ThemeProvider>
  );
}
