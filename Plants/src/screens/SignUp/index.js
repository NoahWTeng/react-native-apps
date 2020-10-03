import React, {useState} from 'react';
import {
  Alert,
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Block, Typography as Text, Input, Button} from '../../components';
import {sizes} from '../../constants';
import {styles} from './styles';

let num = 1;
export function SignUp(props) {
  const navigation = useNavigation();

  const [state, changeState] = useState({
    email: null,
    username: null,
    password: null,
    errors: [],
    loading: false,
  });

  const handleSignUp = () => {
    const {email, username, password} = state;
    const errors = [];
    Keyboard.dismiss();
    changeState((s) => ({...s, loading: true}));

    setTimeout(() => {
      if (!email) errors.push('email');
      if (!password) errors.push('password');
      if (!username) errors.push('username');
      num++;
      changeState((s) => ({...s, errors, loading: false}));

      if (!errors.length) {
        Alert.alert(
          'Success!',
          'Your account has been created',
          [
            {
              text: 'Continue',
              onPress: () => {
                navigation.navigate('Browse');
              },
            },
          ],
          {cancelable: false},
        );
      }
    }, 2000);
  };

  const hasErrors = (key) =>
    state.errors.includes(key) ? styles.hasErrors : null;

  return (
    <KeyboardAvoidingView style={styles.signup} behavior="padding">
      <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
        <Block color="white" padding={[0, sizes.base * 2]}>
          <Text h1 bold>
            Sign Up
          </Text>
          <Block middle>
            <Input
              label="Email"
              error={hasErrors('email')}
              style={[styles.input, hasErrors('email')]}
              defaultValue={state.email}
              onChangeText={(text) => changeState((s) => ({...s, email: text}))}
            />
            <Input
              error={hasErrors('username')}
              label="Username"
              style={[styles.input, hasErrors('username')]}
              defaultValue={state.username}
              onChangeText={(text) =>
                changeState((s) => ({...s, username: text}))
              }
            />
            <Input
              secure
              error={hasErrors('password')}
              label="Password"
              style={[styles.input, hasErrors('password')]}
              defaultValue={state.password}
              onChangeText={(text) =>
                changeState((s) => ({...s, password: text}))
              }
            />
            <Button
              gradient
              onPress={() => {
                handleSignUp();
              }}>
              {state.loading ? (
                <ActivityIndicator />
              ) : (
                <Text bold white center>
                  Sign Up
                </Text>
              )}
            </Button>
            <Button onPress={() => navigation.navigate('Login')}>
              <Text
                gray
                caption
                center
                style={{textDecorationLine: 'underline'}}>
                Back to Login
              </Text>
            </Button>
          </Block>
        </Block>
      </TouchableNativeFeedback>
    </KeyboardAvoidingView>
  );
}
