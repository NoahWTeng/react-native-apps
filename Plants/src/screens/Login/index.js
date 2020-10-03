import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NetworkInfo} from 'react-native-network-info';

import {Block, Typography as Text, Input, Button} from '../../components';
import {sizes} from '../../constants';
import {styles} from './styles';

const VALID_EMAIL = 'test@test.com';
const VALID_PASSWORD = 'test';

export function Login(props) {
  const navigation = useNavigation();

  const [state, changeState] = useState({
    email: null,
    password: null,
    ipAddress: null,
    broadcast: null,
    ipv4Address: null,
    errors: [],
    loading: false,
  });

  useEffect(() => {
    let current = true;

    const getIp = async () => {
      const ipAddress = await NetworkInfo.getIPAddress();
      const broadcast = await NetworkInfo.getBroadcast();
      const ipv4Address = await NetworkInfo.getIPV4Address();

      changeState((s) => ({...s, ipAddress, broadcast, ipv4Address}));
    };

    if (current) getIp();
    return () => {
      current = false;
    };
  }, []);

  const handleLogin = () => {
    const {email, password} = state;
    const errors = [];
    Keyboard.dismiss();
    changeState((s) => ({...s, loading: true}));

    setTimeout(() => {
      if (email !== VALID_EMAIL) errors.push('email');
      if (password !== VALID_PASSWORD) errors.push('password');

      changeState((s) => ({...s, errors, loading: false}));

      if (!errors.length) {
        navigation.navigate('Browser');
      }
    }, 2000);
  };

  const hasErrors = (key) =>
    state.errors.includes(key) ? styles.hasErrors : null;

  return (
    <KeyboardAvoidingView style={styles.login} behavior="padding">
      <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
        <Block color="white" padding={[0, sizes.base * 2]}>
          <Text h1 bold>
            Login
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
                handleLogin();
              }}>
              {state.loading ? (
                <ActivityIndicator />
              ) : (
                <Text bold white center>
                  Login
                </Text>
              )}
            </Button>
            <Button
              onPress={() => {
                navigation.navigate('Forgot');
              }}>
              <Text
                center
                gray
                caption
                style={{textDecorationLine: 'underline'}}>
                Forget your password?
              </Text>
            </Button>
          </Block>
        </Block>
      </TouchableNativeFeedback>
    </KeyboardAvoidingView>
  );
}
