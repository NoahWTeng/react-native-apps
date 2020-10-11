import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {COLORS, SIZES} from '../constants';

export function Button(props) {
  const {
    style,
    opacity,
    gradient,
    color,
    startColor,
    endColor,
    end,
    start,
    locations,
    shadow,
    children,
    transparent,
    ...rest
  } = props;

  const buttonStyles = [
    styles.button,
    shadow && styles.shadow,
    transparent && {backgroundColor: 'transparent'},
    color && styles[color], // predefined styles colors for backgroundColor
    color && !styles[color] && {backgroundColor: color}, // custom backgroundColor
    style,
  ];

  if (gradient) {
    return (
      <TouchableOpacity style={buttonStyles} activeOpacity={opacity} {...rest}>
        <LinearGradient
          start={start}
          end={end}
          locations={locations}
          style={buttonStyles}
          colors={[startColor, endColor]}>
          {children}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={opacity || 0.8}
      {...rest}>
      {children}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  startColor: COLORS.primary,
  endColor: COLORS.secondary,
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
  locations: [0.1, 0.9],
  opacity: 0.8,
  color: COLORS.white,
};

const styles = StyleSheet.create({
  button: {
    borderRadius: SIZES.radius,
    height: SIZES.base * 2.5,
    justifyContent: 'center',
    marginVertical: SIZES.padding / 3,
  },
  shadow: {
    shadowColor: COLORS.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  accent: {backgroundColor: COLORS.accent},
  primary: {backgroundColor: COLORS.primary},
  secondary: {backgroundColor: COLORS.secondary},
  tertiary: {backgroundColor: COLORS.tertiary},
  black: {backgroundColor: COLORS.black},
  white: {backgroundColor: COLORS.white},
  gray: {backgroundColor: COLORS.gray},
  gray2: {backgroundColor: COLORS.gray2},
  gray3: {backgroundColor: COLORS.gray3},
  gray4: {backgroundColor: COLORS.gray4},
});
