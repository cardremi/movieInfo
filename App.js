import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import Nav from './src/components/Nav';
// import {navigationRef} from './src/utils/HelperNav';
import Store from './src/store/Store';

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Nav />
      </NavigationContainer>
    </Provider>
  );
}
