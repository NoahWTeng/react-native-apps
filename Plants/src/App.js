import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';

import {appStyles} from './theme';
import {themes} from './constants';

const wait = (timeout) =>
  new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    wait(3000).then(() => setLoading(false));

    return () => {};
  }, []);

  if (loading) {
    return (
      <View style={appStyles.body}>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={appStyles.body}>
          <Text>Plants App</Text>
        </View>
      </SafeAreaView>
    </>
  );
}
