import React from 'react';
import {Switch, Platform} from 'react-native';
import {colors} from '../../constants';

const GRAY_COLOR = 'rgba(168, 182, 200, 0.30)';

export function Switches(props) {
  const {value, ...rest} = props;

  let thumbColor = null;

  if (Platform.OS === 'android') {
    thumbColor = GRAY_COLOR;
    if (props.value) thumbColor = colors.secondary;
  }

  return (
    <Switch
      thumbColor={thumbColor}
      ios_backgroundColor={GRAY_COLOR}
      trackColor={{
        // false: GRAY_COLOR,
        true: colors.secondary,
      }}
      value={value}
      {...rest}
    />
  );
}
