import React, {useState} from 'react';
import {TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Typography as Text} from '../Typography';
import {Block} from '../Block';
import {Button} from '../Button';
import {colors, sizes} from '../../constants';

import {styles} from './styles';

export function Input(props) {
  const [toggle, changeToggle] = useState(false);
  const {
    email,
    phone,
    number,
    secure,
    error,
    label,
    style,
    rightLabel,
    rightStyle,
    onRightPress,
    ...rest
  } = props;

  const renderLabel = () => {
    return (
      <Block flex={false}>
        {label && (
          <Text gray2={!error} accent={error}>
            {label}
          </Text>
        )}
      </Block>
    );
  };

  const renderToggle = () => {
    if (!secure) return null;
    return (
      <Button style={styles.toggle} onPress={() => changeToggle(!toggle)}>
        {rightLabel ? (
          rightLabel
        ) : (
          <Icon
            color={colors.gray}
            size={sizes.font * 1.35}
            name={!toggle ? 'eye-outline' : 'eye-off-outline'}
          />
        )}
      </Button>
    );
  };

  const renderRight = () => {
    if (!rightLabel) return null;

    return (
      <Button
        style={[styles.toggle, rightStyle]}
        onPress={() => onRightPress && onRightPress()}>
        {rightLabel}
      </Button>
    );
  };

  const isSecure = toggle ? false : secure;

  const inputStyles = [
    styles.input,
    error && {borderColor: colors.accent},
    style,
  ];

  const inputType = email
    ? 'email-address'
    : number
    ? 'numeric'
    : phone
    ? 'phone-pad'
    : 'default';

  return (
    <Block flex={false} margin={[sizes.base, 0]}>
      {renderLabel()}
      <TextInput
        style={inputStyles}
        secureTextEntry={isSecure}
        autoComplete="off"
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType={inputType}
        {...rest}
      />
      {renderToggle()}
      {renderRight()}
    </Block>
  );
}
