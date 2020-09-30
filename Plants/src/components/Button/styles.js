import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../constants';

export const styles = StyleSheet.create({
  button: {
    borderRadius: sizes.radius,
    height: sizes.base * 3,
    justifyContent: 'center',
    marginVertical: sizes.padding / 3,
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  accent: {backgroundColor: colors.accent},
  primary: {backgroundColor: colors.primary},
  secondary: {backgroundColor: colors.secondary},
  tertiary: {backgroundColor: colors.tertiary},
  black: {backgroundColor: colors.black},
  white: {backgroundColor: colors.white},
  gray: {backgroundColor: colors.gray},
  gray2: {backgroundColor: colors.gray2},
  gray3: {backgroundColor: colors.gray3},
  gray4: {backgroundColor: colors.gray4},
});
