import React from 'react';

import {CustomNavegator} from '../components';
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

function WelcomeStacks(props) {
  const stacks = [
    {
      name: 'Welcome',
      component: Welcome,
      options: {},
    },
  ];

  return <CustomNavegator stacks={stacks} />;
}
function BrowserStack() {
  const stacks = [
    {
      name: 'Browser',
      component: Browser,
    },
  ];

  return <CustomNavegator stacks={stacks} />;
}

function ExploreStack() {
  const stacks = [
    {
      name: 'Explore',
      component: Explore,
    },
  ];

  return <CustomNavegator stacks={stacks} />;
}

function LoginStack() {
  const stacks = [
    {
      name: 'Login',
      component: Login,
    },
  ];

  return <CustomNavegator stacks={stacks} />;
}

function ProductStack() {
  const stacks = [
    {
      name: 'Product',
      component: Product,
    },
  ];

  return <CustomNavegator stacks={stacks} />;
}

function SettingStack() {
  const stacks = [
    {
      name: 'Setting',
      component: Setting,
    },
  ];

  return <CustomNavegator stacks={stacks} />;
}

function SignUpStack() {
  const stacks = [
    {
      name: 'SignUp',
      component: SignUp,
    },
  ];

  return <CustomNavegator stacks={stacks} />;
}

function ForgotStack() {
  const stacks = [
    {
      name: 'Forgot',
      component: Forgot,
    },
  ];

  return <CustomNavegator stacks={stacks} />;
}

export {
  WelcomeStacks,
  BrowserStack,
  ExploreStack,
  LoginStack,
  ProductStack,
  SettingStack,
  SignUpStack,
  ForgotStack,
};
