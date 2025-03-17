import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import UseContextScreen from '../screens/UseContextScreen';

export default function App() {
  return (
    <ThemeProvider>
      <UseContextScreen />
    </ThemeProvider>
  );
}
