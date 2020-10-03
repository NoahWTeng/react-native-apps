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

const VALID_EMAIL = 'test@test.com';

export function Forgot() {
  const navigation = useNavigation();

  const [state, changeState] = useState({
    email: VALID_EMAIL,
    errors: [],
    loading: false,
  });

  const handleForgot = () => {
    const {email} = state;
    const errors = [];
    Keyboard.dismiss();

    changeState((s) => ({...s, loading: true}));

    setTimeout(() => {
      if (email !== VALID_EMAIL) errors.push('email');

      changeState((s) => ({...s, errors, loading: false}));

      if (!errors.length) {
        Alert.alert(
          'Password sent!',
          'Please check you email.',
          [
            {
              text: 'OK',
              onPress: () => {
                navigation.navigate('Login');
              },
            },
          ],
          {cancelable: false},
        );
      } else {
        Alert.alert(
          'Error',
          'Please check you Email address.',
          [{text: 'Try again'}],
          {cancelable: false},
        );
      }
    }, 2000);
  };
  const hasErrors = (key) =>
    state.errors.includes(key) ? styles.hasErrors : null;

  return (
    <KeyboardAvoidingView style={styles.forgot} behavior="padding">
      <TouchableNativeFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <Block color="white" padding={[0, sizes.base * 2]}>
          <Text h1 bold>
            Forgot
          </Text>
          <Block middle>
            <Input
              label="Email"
              error={hasErrors('email')}
              style={[styles.input, hasErrors('email')]}
              defaultValue={state.email}
              onChangeText={(text) => changeState((s) => ({...s, email: text}))}
            />
            <Button
              gradient
              onPress={() => {
                handleForgot();
              }}>
              {state.loading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text bold white center>
                  Forgot
                </Text>
              )}
            </Button>

            <Button
              onPress={() => {
                navigation.navigate('Login');
              }}>
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
