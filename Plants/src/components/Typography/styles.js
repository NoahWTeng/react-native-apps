import {StyleSheet} from 'react-native';
import {colors, sizes, fonts} from '../../constants';

export const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: sizes.font,
    color: colors.black,
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
  accent: {color: colors.accent},
  primary: {color: colors.primary},
  secondary: {color: colors.secondary},
  tertiary: {color: colors.tertiary},
  black: {color: colors.black},
  white: {color: colors.white},
  gray: {color: colors.gray},
  gray2: {color: colors.gray2},
  // fonts
  h1: fonts.h1,
  h2: fonts.h2,
  h3: fonts.h3,
  title: fonts.title,
  body: fonts.body,
  caption: fonts.caption,
  small: fonts.small,
});
