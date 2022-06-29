import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ListMovie, DetailMovie} from '../view/Index';
import String from './String';
import Color from '../utils/Color';
const Stack = createStackNavigator();

const Nav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        component={ListMovie}
        name="listmovie"
        options={{
          headerShown: true,
          title: String.general.headerList,
          headerTintColor: Color.black,
        }}
      />
      <Stack.Screen
        component={DetailMovie}
        name="detailmovie"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default Nav;
