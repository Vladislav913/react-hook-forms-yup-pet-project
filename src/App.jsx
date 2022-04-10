import React from 'react';
import CustomersPage from './pages/customer';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { createdTheme } from './theme';
import './App.css';

function App() {
  return (
    <ThemeProvider theme={createdTheme}>
      <CustomersPage />
    </ThemeProvider>
  );
}

export default App;
