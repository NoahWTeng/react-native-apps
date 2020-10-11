import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './navigation';
import {Block} from './components';

export function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Block safe flex>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </Block>
    </>
  );
}

const styles = StyleSheet.create({});
