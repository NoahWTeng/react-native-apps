import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../constants';

export const styles = StyleSheet.create({
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.black,
    borderRadius: sizes.radius,
    fontSize: sizes.font,
    fontWeight: '500',
    color: colors.black,
    height: sizes.base * 3,
  },
  toggle: {
    position: 'absolute',
    alignItems: 'flex-end',
    width: sizes.base * 2,
    height: sizes.base * 2,
    top: sizes.base,
    right: 0,
  },
});
