import {StyleSheet} from 'react-native';
import {colors, sizes} from '../../constants';

export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: sizes.base * 2,
  },
  avatar: {
    height: sizes.base * 2.2,
    width: sizes.base * 2.2,
  },
  inputs: {
    marginTop: sizes.base * 0.7,
    paddingHorizontal: sizes.base * 2,
  },
  inputRow: {
    alignItems: 'flex-end',
  },
  sliders: {
    marginTop: sizes.base * 0.7,
    paddingHorizontal: sizes.base * 2,
  },
  thumb: {
    width: sizes.base,
    height: sizes.base,
    borderRadius: sizes.base,
    borderColor: 'white',
    borderWidth: 3,
    backgroundColor: colors.secondary,
  },
  toggles: {
    paddingHorizontal: sizes.base * 2,
  },
});
