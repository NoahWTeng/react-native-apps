import {StyleSheet, Dimensions} from 'react-native';
import {sizes, colors} from '../../constants';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  product: {paddingHorizontal: sizes.base * 2, paddingVertical: sizes.padding},
  tag: {
    borderColor: colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: sizes.base,
    paddingVertical: sizes.base / 2,
    paddingHorizontal: sizes.base,
    marginRight: sizes.base * 0.5,
  },
  image: {
    width: width / 3.26,
    height: width / 3.26,
    marginRight: sizes.base,
  },
  more: {
    width: 55,
    height: 55,
  },
  gallery: {
    width,
    height: height / 2.8,
  },
});
