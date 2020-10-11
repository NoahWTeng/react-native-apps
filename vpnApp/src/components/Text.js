import React from 'react';
import {Text, StyleSheet, Animated} from 'react-native';
import {SIZES, COLORS} from '../constants';

export function Typography(props) {
  const {
    h1,
    h2,
    h3,
    title,
    body,
    caption,
    small,
    size,
    transform,
    align,
    // styling
    regular,
    bold,
    semibold,
    medium,
    weight,
    light,
    center,
    right,
    spacing, // letter-spacing
    height, // line-height
    // colors
    color,
    accent,
    primary,
    secondary,
    tertiary,
    black,
    white,
    gray,
    gray2,
    style,
    children,
    animated,
    ...rest
  } = props;

  const textStyles = [
    styles.text,
    h1 && styles.h1,
    h2 && styles.h2,
    h3 && styles.h3,
    title && styles.title,
    body && styles.body,
    caption && styles.caption,
    small && styles.small,
    size && {fontSize: size},
    transform && {textTransform: transform},
    align && {textAlign: align},
    height && {lineHeight: height},
    spacing && {letterSpacing: spacing},
    weight && {fontWeight: weight},
    regular && styles.regular,
    bold && styles.bold,
    semibold && styles.semibold,
    medium && styles.medium,
    light && styles.light,
    center && styles.center,
    right && styles.right,
    color && styles[color],
    color && !styles[color] && {color},
    // color shortcuts
    accent && styles.accent,
    primary && styles.primary,
    secondary && styles.secondary,
    tertiary && styles.tertiary,
    black && styles.black,
    white && styles.white,
    gray && styles.gray,
    gray2 && styles.gray2,
    style, // rewrite predefined styles
  ];
  if (animated) {
    return (
      <Animated.Text style={textStyles} {...rest}>
        {children}
      </Animated.Text>
    );
  }

  return (
    <Text style={textStyles} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: SIZES.font,
    color: COLORS.black,
  },
  // variations
  regular: {
    fontWeight: 'normal',
  },
  bold: {
    fontWeight: 'bold',
  },
  semibold: {
    fontWeight: '500',
  },
  medium: {
    fontWeight: '500',
  },
  light: {
    fontWeight: '200',
  },
  // position
  center: {textAlign: 'center'},
  right: {textAlign: 'right'},
  // colors
  accent: {color: COLORS.accent},
  primary: {color: COLORS.primary},
  secondary: {color: COLORS.secondary},
  tertiary: {color: COLORS.tertiary},
  black: {color: COLORS.black},
  white: {color: COLORS.white},
  gray: {color: COLORS.gray},
  gray2: {color: COLORS.gray2},
  // fonts
  h1: {fontSize: SIZES.h1},
  h2: {fontSize: SIZES.h2},
  h3: {fontSize: SIZES.h3},
  title: {fontSize: SIZES.title},
  body: {fontSize: SIZES.body},
  caption: {fontSize: SIZES.caption},
  small: {fontSize: SIZES.small},
});
