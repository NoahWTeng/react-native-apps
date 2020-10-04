import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../constants';

export const styles = StyleSheet.create({
  divider: {
    height: 0,
    margin: sizes.base * 2,
    borderBottomColor: colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
