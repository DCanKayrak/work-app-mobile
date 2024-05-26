/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  Text,
  View,
} from 'react-native';

import MainContainer from './navigation/MainContainer';

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { AuthProvider } from './contexts/AuthContext';
import AppNav from './navigation/AppNav';

function App(): React.JSX.Element {
  return (
    <AuthProvider>
      <AppNav></AppNav>
    </AuthProvider>
  );
}

export default App;
