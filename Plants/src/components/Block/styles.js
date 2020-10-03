import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../constants';

export const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  column: {
    flexDirection: 'column',
  },
  card: {
    borderRadius: sizes.radius,
  },
  center: {
    alignItems: 'center',
  },
  middle: {
    justifyContent: 'center',
  },
  left: {
    justifyContent: 'flex-start',
  },
  right: {
    justifyContent: 'flex-end',
  },
  top: {
    justifyContent: 'flex-start',
  },
  bottom: {
    justifyContent: 'flex-end',
  },
  shadow: {
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2,
  },
  accent: {backgroundColor: colors.accent},
  primary: {backgroundColor: colors.primary},
  secondary: {backgroundColor: colors.secondary},
  tertiary: {backgroundColor: colors.tertiary},
  black: {backgroundColor: colors.black},
  white: {backgroundColor: colors.white},
  gray: {backgroundColor: colors.gray},
  gray2: {backgroundColor: colors.gray2},
  badge: {backgroundColor: 'rgba(41,216,143,0.20)'},
});
