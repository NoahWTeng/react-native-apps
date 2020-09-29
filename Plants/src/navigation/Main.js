import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LocationStack} from './Screens';

const MainStack = createStackNavigator();

export function MainScreen() {
  return <MainStack.Navigator headerMode="none"></MainStack.Navigator>;
}
