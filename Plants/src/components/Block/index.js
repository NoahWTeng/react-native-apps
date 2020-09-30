import React from 'react';
import {View, Animated} from 'react-native';
import {handleMargins, handlePaddings} from './utils';
import {styles} from './styles';

export function Block(props) {
  const {
    flex,
    row,
    column,
    center,
    middle,
    left,
    right,
    top,
    bottom,
    card,
    shadow,
    color,
    space,
    padding,
    margin,
    animated,
    wrap,
    style,
    children,
    ...rest
  } = props;

  const blockStyles = [
    styles.block,
    flex && {flex},
    flex === false && {flex: 0}, // reset / disable flex
    row && styles.row,
    column && styles.column,
    center && styles.center,
    middle && styles.middle,
    left && styles.left,
    right && styles.right,
    top && styles.top,
    bottom && styles.bottom,
    margin && {...handleMargins(margin)},
    padding && {...handlePaddings(padding)},
    card && styles.card,
    shadow && styles.shadow,
    space && {justifyContent: `space-${space}`},
    wrap && {flexWrap: 'wrap'},
    color && styles[color], // predefined styles colors for backgroundColor
    style, // rewrite predefined styles
  ];

  if (animated) {
    return (
      <Animated.View style={blockStyles} {...rest}>
        {children}
      </Animated.View>
    );
  }

  return (
    <View style={blockStyles} {...rest}>
      {children}
    </View>
  );
}
