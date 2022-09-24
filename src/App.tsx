import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Launches from './components/Launches/Launches';
import ThemeCustomization from './themes';

function App() {
  return (
    <ThemeCustomization>
        <Launches />
    </ThemeCustomization>
  );
}

export default App;
