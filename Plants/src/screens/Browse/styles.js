import {StyleSheet, Dimensions} from 'react-native';
import {colors, sizes} from '../../constants';

const {width} = Dimensions.get('window');
export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: sizes.base * 2,
  },
  avatar: {
    height: sizes.base * 2.2,
    width: sizes.base * 2.2,
  },
  tabs: {
    borderBottomColor: colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: sizes.base,
    marginHorizontal: sizes.base * 2,
  },
  tab: {
    marginRight: sizes.base * 2,
    paddingBottom: sizes.base,
  },
  active: {
    borderBottomColor: colors.secondary,
    borderBottomWidth: 3,
  },
  categories: {
    flexWrap: 'wrap',
    paddingHorizontal: sizes.base * 2,
    marginBottom: sizes.base * 3.5,
  },
  category: {
    // this should be dynamic based on screen width
    minWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
    maxWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
    maxHeight: (width - sizes.padding * 2.4 - sizes.base) / 2,
  },
});
