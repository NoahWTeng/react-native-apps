import {StyleSheet} from 'react-native';
import {sizes} from '../../constants';

export const styles = StyleSheet.create({
  stepsContainer: {
    position: 'absolute',
    bottom: sizes.base * 3,
    right: 0,
    left: 0,
  },
  steps: {
    width: 5,
    height: 5,
    borderRadius: 5,
    marginHorizontal: 2.5,
  },
});
