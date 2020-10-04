import {StyleSheet, Dimensions} from 'react-native';
import {sizes} from '../../constants';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  header: {
    paddingHorizontal: sizes.base * 2,
    paddingBottom: sizes.base * 2,
  },
  search: {
    height: sizes.base * 2,
    width: width - sizes.base * 2,
  },
  searchInput: {
    fontSize: sizes.caption,
    height: sizes.base * 2,
    backgroundColor: 'rgba(142, 142, 147, 0.06)',
    borderColor: 'rgba(142, 142, 147, 0.06)',
    paddingLeft: sizes.base / 1.333,
    paddingRight: sizes.base * 1.5,
  },
  searchRight: {
    top: 0,
    marginVertical: 0,
    backgroundColor: 'transparent',
  },
  searchIcon: {
    position: 'absolute',
    right: sizes.base / 1.333,
    top: sizes.base / 1.6,
  },
  explore: {
    marginHorizontal: sizes.padding * 1.25,
  },
  image: {
    minHeight: 100,
    maxHeight: 130,
    maxWidth: width - sizes.padding * 2.5,
    marginBottom: sizes.base,
    borderRadius: 4,
  },
  mainImage: {
    minWidth: width - sizes.padding * 2.5,
    minHeight: width - sizes.padding * 2.5,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    overflow: 'visible',
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.1,
    width,
    paddingBottom: sizes.base * 4,
  },
});
