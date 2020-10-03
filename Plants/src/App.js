import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {MainNavigation} from './navigation';
import {Block} from './components';

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
      clearTimeout(wait);
    };
  }, []);

  if (loading) {
    return (
      <Block>
        <Image
          source={require('./assets/splash.png')}
          style={{
            width: '100%',
            height: '100%',
            resizeMode: 'center',
          }}
        />
      </Block>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}
