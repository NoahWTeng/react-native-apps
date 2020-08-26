import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RestaurantList, About, RestaurantInfo, AddReview} from './src';

const Tabs = createBottomTabNavigator();
const ListStack = createStackNavigator();
const AboutStack = createStackNavigator();

const MainStack = createStackNavigator();

function ListStackScreen() {
  return (
    <ListStack.Navigator>
      <ListStack.Screen name="List" component={RestaurantList} />
      <ListStack.Screen
        name="RestaurantInfo"
        component={RestaurantInfo}
        options={{title: 'Details'}}
      />
    </ListStack.Navigator>
  );
}

function AboutStackScreen() {
  return (
    <AboutStack.Navigator>
      <AboutStack.Screen name="About" component={About} />
    </AboutStack.Navigator>
  );
}

function TabsScreen() {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'About') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'List') {
            iconName = 'ios-list';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'blue',
        inactiveTintColor: 'gray',
      }}
      initialRouteName="List">
      <Tabs.Screen name="List" component={ListStackScreen} />
      <Tabs.Screen name="About" component={AboutStackScreen} />
    </Tabs.Navigator>
  );
}

function MainScreen() {
  return (
    <MainStack.Navigator
      headerMode="none"
      screenOptions={{animationEnabled: false}}
      mode="modal">
      <MainStack.Screen name="Tabs" component={TabsScreen} />
      <MainStack.Screen
        name="AddReview"
        component={AddReview}
        options={{animationEnabled: true}}
      />
    </MainStack.Navigator>
  );
}

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <MainScreen />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
