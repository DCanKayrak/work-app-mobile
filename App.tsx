/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import 'react-native-gesture-handler';
import { AuthProvider } from './contexts/AuthContext';
import AppNav from './navigation/AppNav';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    secondary: 'yellow',
  },
};


function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <PaperProvider theme={theme}>
        <AppNav></AppNav>
        </PaperProvider>
    </AuthProvider>
  );
}

export default App;
