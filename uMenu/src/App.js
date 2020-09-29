import React from 'react';
import * as Redux from 'react-redux';

import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {store} from './redux';
import {MainScreen} from './navigation';

export function App() {
  return (
    <Redux.Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <MainScreen />
        </NavigationContainer>
      </SafeAreaView>
    </Redux.Provider>
  );
}
