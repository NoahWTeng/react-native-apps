import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {IconOutline} from '@ant-design/icons-react-native';

import {colors, sizes} from '../styles';

import {
  HomeStacks,
  MarketStack,
  CartStack,
  LiveStack,
  MeStack,
} from './Screens';

const Tabs = createBottomTabNavigator();

export function TabsScreen() {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Market':
              iconName = 'shop';
              break;
            case 'Cart':
              iconName = 'shopping-cart';
              break;
            case 'Market':
              iconName = 'shop';
              break;
            case 'Live':
              iconName = 'star';
              break;
            case 'Me':
              iconName = 'smile';
              break;
          }

          return <IconOutline name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.selected,
        inactiveTintColor: colors.primary,
        labelStyle: {
          fontSize: sizes.base,
        },
      }}
      initialRouteName="Home">
      <Tabs.Screen name="Home" component={HomeStacks} />
      <Tabs.Screen name="Market" component={MarketStack} />
      <Tabs.Screen name="Live" component={LiveStack} />
      <Tabs.Screen name="Cart" component={CartStack} />
      <Tabs.Screen name="Me" component={MeStack} />
    </Tabs.Navigator>
  );
}
