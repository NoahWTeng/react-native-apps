import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const COLORS = {
  primary: '#0094FC',
  accent: '#F3534A',
  secondary: '#2BDA8E',
  tertiary: '#FFE358',
  black: '#323643',
  white: '#FFFFFF',
  gray: '#535453',
  gray2: '#C5CCD6',
};
const SIZES = {
  // global sizes
  base: 16,
  font: 14,
  radius: 6,
  padding: 25,
  paddingBottomScroll: 25,
  border: 50,
  width,

  // font sizes
  h1: 34,
  h2: 24,
  h3: 20,
  title: 16,
  subtitle: 13,
  caption: 12,
  body: 14,
  small: 10,
};

export {SIZES, COLORS};
