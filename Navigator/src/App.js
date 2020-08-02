import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SignIn, CreateAccount, Home, Profile, Loading} from './Pages';
import {AuthContext} from './AuthContext';

const Tabs = createBottomTabNavigator();
const Drawers = createDrawerNavigator();
const AuthStack = createStackNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
}

function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
}

function TabsScreen() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={HomeStackScreen} />
      <Tabs.Screen name="Profile" component={ProfileStackScreen} />
    </Tabs.Navigator>
  );
}

function App() {
  const [isLoading, changeLoading] = React.useState(true);
  const [isAuth, changeAuth] = React.useState(false);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => changeAuth(true),
      signOut: () => changeAuth(false),
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      changeLoading(false);
    }, 1000);
  }, []);

  if (isLoading) return <Loading />;

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {isAuth ? (
          <Drawers.Navigator>
            <Drawers.Screen name="Home" component={TabsScreen} />
            <Drawers.Screen name="Profile" component={ProfileStackScreen} />
          </Drawers.Navigator>
        ) : (
          <AuthStack.Navigator>
            <AuthStack.Screen
              name="SignIn"
              component={SignIn}
              options={{title: 'Sign In'}}
            />
            <AuthStack.Screen
              name="CreateAccount"
              component={CreateAccount}
              options={{title: 'Create Account'}}
            />
          </AuthStack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;
