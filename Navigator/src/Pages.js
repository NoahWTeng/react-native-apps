import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {AuthContext} from './AuthContext';

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function ScreenContainer({children}) {
  return <View style={styles.body}>{children}</View>;
}

export function SignIn({navigation}) {
  const {signIn} = React.useContext(AuthContext);

  return (
    <ScreenContainer>
      <Text>Sign In Pages</Text>
      <Button title="Sign In" onPress={() => signIn()} />
      <Button
        title="Create Account"
        onPress={() => navigation.push('CreateAccount')}
      />
    </ScreenContainer>
  );
}

function SignOut({navigation}) {
  const {signOut} = React.useContext(AuthContext);

  return <Button title="Sign Out" onPress={() => signOut()} />;
}

export function CreateAccount({navigation}) {
  return (
    <ScreenContainer>
      <Text>Create Account</Text>
      <Button title="Sign Up" onPress={() => alert('Sign Up')} />
    </ScreenContainer>
  );
}

export function Home({}) {
  return (
    <ScreenContainer>
      <Text>Home</Text>
      <SignOut />
    </ScreenContainer>
  );
}

export function Profile({}) {
  return (
    <ScreenContainer>
      <Text>Profile</Text>
    </ScreenContainer>
  );
}

export function Loading() {
  return (
    <ScreenContainer>
      <Text>Loading...</Text>
    </ScreenContainer>
  );
}
