import React from 'react';
import {View} from 'react-native';
import {CustomIconButton} from '../CustomIconButton/CustomIconButton';
import {colors, global, sizes} from '../../styles';
import {styles} from './styles';

export function HeaderRight() {
  return (
    <View style={[styles.container, global.row]}>
      <View style={styles.scan}>
        <CustomIconButton
          name="scan"
          size={sizes.navigatorButtons}
          color={colors.primary}
        />
      </View>
      <View>
        <CustomIconButton
          name="qrcode"
          size={sizes.navigatorButtons}
          color={colors.primary}
        />
      </View>
    </View>
  );
}
