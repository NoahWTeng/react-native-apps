import React from 'react';
import {View} from 'react-native';

import {CustomIconButton} from '../CustomIconButton/CustomIconButton';
import {colors, sizes} from '../../styles';
import {styles} from './styles';

export function HeaderLeft() {
  return (
    <View style={styles.container}>
      <CustomIconButton
        name="environment"
        size={sizes.navigatorButtons}
        color={colors.primary}
      />
    </View>
  );
}
