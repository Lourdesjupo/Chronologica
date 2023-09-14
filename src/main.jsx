
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Supports weights 100-900
import '@fontsource-variable/raleway';
// Supports weights 300-700
import '@fontsource-variable/quicksand';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

import { createTheme, ThemeProvider  } from '@mui/material/styles';


const theme = createTheme({
  typography: {
    fontFamily: 'Raleway variable',
    
  },
  palette: {
     type: 'light',
    primary: {
      main: '#6750A4',
    },
    secondary: {
      main: '#625B71',
    },
    secondary_container:{
      main: '#E8DEF8'
    },
    tertiary:{
      main: '#7D5260'
    },
    success: {
      main: '#81c784',
    },
    error: {
      main: '#B3261E',
    },
    background:{
      main:'#FFFBFE'
    },
    onbackground:{
     main:'#1C1B1F'
    },
    outline:{
     main:'#79747E'
    },
    warning: {
      main: '#e8c85f',
    },
  
  },
});
ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
,
)
