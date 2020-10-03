import React from 'react';
import {StyleSheet} from 'react-native';
import {Block} from '../Block';
import {styles} from './styles';

export function Badge(props) {
  const {children, style, size, color, ...rest} = props;
  const badgeStyles = StyleSheet.flatten([
    styles.badge,
    size && {
      height: size,
      width: size,
      borderRadius: size,
    },
    style,
  ]);

  return (
    <Block
      flex={false}
      middle
      center
      color={color}
      style={badgeStyles}
      {...rest}>
      {children}
    </Block>
  );
}
