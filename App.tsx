import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/theme';
import Welcome from './src/Components/Dashboard';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Welcome title="Hello World" />
    </ThemeProvider>
  );
}
