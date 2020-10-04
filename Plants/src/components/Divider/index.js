import React from 'react';
import {Block} from '../Block';
import {colors} from '../../constants';
import {styles} from './styles';

export function Divider(props) {
  const {color = colors.gray2, style, ...rest} = props;
  const dividerStyles = [styles.divider, style];

  return <Block color={color} style={dividerStyles} {...rest} />;
}
