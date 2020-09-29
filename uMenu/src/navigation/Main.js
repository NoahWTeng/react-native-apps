import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {TabsScreen} from './Tabs';
import {LocationStack} from './Screens';

const MainStack = createStackNavigator();

export function MainScreen() {
  return (
    <MainStack.Navigator headerMode="none">
      <MainStack.Screen name="Home" component={TabsScreen} />
      <MainStack.Screen name="Location" component={LocationStack} />
    </MainStack.Navigator>
  );
}
