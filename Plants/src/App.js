import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {MainScreen} from './navigation';

const wait = (timeout) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    wait(3000).then(() => setLoading(false));

    return () => {
      setLoading(true);
    };
  }, []);

  if (loading) {
    return (
      <Image
        source={require('./assets/splash.png')}
        style={{
          width: '100%',
          height: '100%',
          resizeMode: 'center',
        }}
      />
    );
  }

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
}
