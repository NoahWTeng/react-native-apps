import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';

import {AuthContext} from './AuthContext';
const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export function SignIn({navigation}) {
  const {signIn} = React.useContext(AuthContext);

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: '#ecf0f1'}]}>
      <Text>Sign In Pages Test</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        title="Create Account"
        onPress={() => navigation.push('CreateAccount')}
      />
    </SafeAreaView>
  );
}

function SignOut({navigation}) {
  const {signOut} = React.useContext(AuthContext);

  return <Button title="Sign Out" onPress={() => signOut()} />;
}

export function CreateAccount({navigation}) {
  return (
    <View>
      <Text>Create Account</Text>
      <Button title="Sign Up" onPress={() => alert('Sign Up')} />
    </View>
  );
}

export function Home({}) {
  return (
    <View>
      <Text>Home</Text>
      <SignOut />
    </View>
  );
}

export function Profile({}) {
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
}

export function Loading() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}
