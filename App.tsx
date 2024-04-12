/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Text,
  View,
} from 'react-native';

import MainContainer from './navigation/MainContainer';

import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainContainer/>
    </NavigationContainer>
  );
}

export default App;
