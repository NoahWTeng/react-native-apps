import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import {Welcome, Vpn} from '../screens';
import {SIZES, COLORS} from '../constants';
import {Block} from '../components';

const Stack = createStackNavigator();

function WelcomeStacks() {
  const stacks = {
    name: 'Welcome',
    component: Welcome,
    options: {
      headerTransparent: true,
      title: null,
    },
  };

  return stacks;
}
function VpnStack() {
  const stacks = {
    name: 'Vpn',
    component: Vpn,
    options: {
      title: 'VPN',
      headerStyle: {
        height: SIZES.base * 3,
        backgroundColor: COLORS.white,
        elevation: 0,
        shadowColor: 'transparent',
      },
      headerLeft: () => {
        return (
          <Block>
            <Image source={require('../assets/icons/menu.png')} />
          </Block>
        );
      },
      headerLeftContainerStyle: {
        marginLeft: SIZES.base * 1.5,
        alignItems: 'center',

        paddingRight: SIZES.base,
      },
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: SIZES.base * 2,
      },
    },
  };

  return stacks;
}

const stacks = [WelcomeStacks(), VpnStack()];

export function MainNavigation() {
  return (
    <Stack.Navigator>
      {stacks.map(({name, component, options}) => (
        <Stack.Screen
          key={name}
          name={name}
          component={component}
          options={options}
        />
      ))}
    </Stack.Navigator>
  );
}
