import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {WelcomeStacks} from './Screens';

const MainStack = createStackNavigator();

export function MainScreen() {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="Welcome" component={WelcomeStacks} />
    </MainStack.Navigator>
  );
}
