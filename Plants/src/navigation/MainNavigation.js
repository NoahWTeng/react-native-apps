import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Block, Button} from '../components';

import {
  Browse,
  Explore,
  Login,
  Product,
  Setting,
  Welcome,
  SignUp,
  Forgot,
} from '../screens';
import {sizes, colors} from '../constants';

const notTitle = {
  title: null,
  headerBackTitleStyle: {display: 'none', backgroundColor: 'red'},
  headerBackImage: () => {
    return (
      <Block padding={[15, 0]}>
        <Image source={require('../assets/icons/back.png')} />
      </Block>
    );
  },
  headerLeftContainerStyle: {
    marginLeft: sizes.base * 2,
    alignItems: 'center',
    paddingRight: sizes.base,
  },
  headerRightContainerStyle: {
    alignItems: 'center',
    paddingRight: sizes.base * 2,
  },
  headerStyle: {
    height: sizes.base * 4,
    backgroundColor: colors.white,
    elevation: 0,
    shadowColor: 'transparent',
  },
};

const Stack = createStackNavigator();

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
function BrowseStack() {
  const stacks = {
    name: 'Browse',
    component: Browse,
    options: {
      ...notTitle,
    },
  };

  return stacks;
}

function ExploreStack() {
  const stacks = {
    name: 'Explore',
    component: Explore,
    options: {
      ...notTitle,
    },
  };

  return stacks;
}

function LoginStack() {
  const stacks = {
    name: 'Login',
    component: Login,
    options: {
      ...notTitle,
    },
  };

  return stacks;
}

function ProductStack() {
  const stacks = {
    name: 'Product',
    component: Product,
    options: {
      ...notTitle,
      headerRight: () => (
        <Button onPress={() => {}}>
          <Icon
            name={'ellipsis-horizontal-outline'}
            size={sizes.base}
            color={colors.gray}
          />
        </Button>
      ),
    },
  };

  return stacks;
}

function SettingStack() {
  const stacks = {
    name: 'Setting',
    component: Setting,
    options: {
      ...notTitle,
    },
  };

  return stacks;
}

function SignUpStack() {
  const stacks = {
    name: 'SignUp',
    component: SignUp,
    options: {
      ...notTitle,
    },
  };

  return stacks;
}

function ForgotStack() {
  const stacks = {
    name: 'Forgot',
    component: Forgot,
    options: {
      ...notTitle,
    },
  };

  return stacks;
}

const stacks = [
  WelcomeStacks(),
  BrowseStack(),
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
