import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createTheme, ThemeProvider  } from '@mui/material/styles';


const theme = createTheme({
  palette: {
     type: 'light',
    primary: {
      main: '#822b40',
    },
    secondary: {
      main: '#D4A0A7',
    },
    success: {
      main: '#81c784',
    },
    error: {
      main: '#dc521d',
    },
    warning: {
      main: '#e8c85f',
    },
  
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
