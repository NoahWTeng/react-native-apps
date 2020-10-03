import React from 'react';

import {Block} from '../Block';
import {styles} from './styles';

export function Card(props) {
  const {color = 'white', style, children, ...rest} = props;
  const cardStyles = [styles.card, style];

  return (
    <Block color={color} style={cardStyles} {...rest}>
      {children}
    </Block>
  );
}
