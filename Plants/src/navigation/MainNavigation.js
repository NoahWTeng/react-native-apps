import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';

const Stack = createStackNavigator();

import {
  Browser,
  Explore,
  Login,
  Product,
  Setting,
  Welcome,
  SignUp,
  Forgot,
} from '../screens';
import {sizes, colors} from '../constants';

function WelcomeStacks(props) {
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
function BrowserStack() {
  const stacks = {
    name: 'Browser',
    component: Browser,
  };

  return stacks;
}

function ExploreStack() {
  const stacks = {
    name: 'Explore',
    component: Explore,
  };

  return stacks;
}

function LoginStack() {
  const stacks = {
    name: 'Login',
    component: Login,
    options: {
      title: null,
      headerBackTitleStyle: {display: 'none', backgroundColor: 'red'},
      headerBackImage: () => (
        <Image source={require('../assets/icons/back.png')} />
      ),
      headerLeftContainerStyle: {
        marginLeft: sizes.base * 2,
        alignItems: 'center',
        paddingRight: sizes.base,
      },
      headerRightContainerStyle: {
        alignItems: 'center',
        paddingRight: sizes.base,
      },
      headerStyle: {
        height: sizes.base * 4,
        backgroundColor: colors.white,
        elevation: 0,
        shadowColor: 'transparent',
      },
    },
  };

  return stacks;
}

function ProductStack() {
  const stacks = {
    name: 'Product',
    component: Product,
  };

  return stacks;
}

function SettingStack() {
  const stacks = {
    name: 'Setting',
    component: Setting,
  };

  return stacks;
}

function SignUpStack() {
  const stacks = {
    name: 'SignUp',
    component: SignUp,
  };

  return stacks;
}

function ForgotStack() {
  const stacks = {
    name: 'Forgot',
    component: Forgot,
  };

  return stacks;
}

const stacks = [
  WelcomeStacks(),
  BrowserStack(),
  ExploreStack(),
  LoginStack(),
  ProductStack(),
  SettingStack(),
  SignUpStack(),
  ForgotStack(),
];

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
