import React from 'react';

import {HeaderLeft, HeaderRight, CustomNavegator} from '../components';
import {Home, Me, Cart, Live, Market, Location} from '../pages';

function HomeStacks(props) {
  const stacks = [
    {
      name: 'Home',
      component: Home,
      options: {
        title: null,
        headerLeft: (props) => <HeaderLeft />,
        headerRight: (props) => <HeaderRight />,
      },
    },
  ];

  return <CustomNavegator stacks={stacks} />;
}
function MarketStack() {
  const stacks = [
    {
      name: 'Market',
      component: Market,
    },
  ];

  return <CustomNavegator stacks={stacks} />;
}

function CartStack() {
  const stacks = [
    {
      name: 'Cart',
      component: Cart,
    },
  ];

  return <CustomNavegator stacks={stacks} />;
}

function MeStack() {
  const stacks = [
    {
      name: 'Me',
      component: Me,
    },
  ];

  return <CustomNavegator stacks={stacks} />;
}

function LiveStack() {
  const stacks = [
    {
      name: 'Live',
      component: Live,
    },
  ];

  return <CustomNavegator stacks={stacks} />;
}

function LocationStack() {
  const stacks = [
    {
      name: 'Location',
      component: Location,
    },
  ];

  return <CustomNavegator stacks={stacks} />;
}

export {HomeStacks, MarketStack, CartStack, MeStack, LiveStack, LocationStack};
