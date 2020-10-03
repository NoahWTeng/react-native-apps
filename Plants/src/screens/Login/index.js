import React, {useState} from 'react';
import {ActivityIndicator, Keyboard, KeyboardAvoidingView} from 'react-native';
import {Block, Typography as Text, Input} from '../../components';
import {sizes, colors} from '../../constants';
import {styles} from './styles';

export function Login(props) {
  const [state, changeState] = useState({
    email: '',
    password: '',
  });
  return (
    <Block color="white" padding={[0, sizes.base * 2]}>
      <Text h1 bold>
        Login
      </Text>
      <Block middle>
        <Input
          label="Email"
          style={styles.input}
          defaultValue={state.email}
          onChangeText={(text) => changeState((s) => ({...s, email: text}))}
        />
        <Input
          secure
          label="Password"
          style={styles.input}
          defaultValue={state.password}
          onChangeText={(text) => changeState((s) => ({...s, password: text}))}
        />
      </Block>
    </Block>
  );
}
